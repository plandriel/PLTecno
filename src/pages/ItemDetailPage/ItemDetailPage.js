import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount";
import Loading from "../../components/Loading/Loading";
import { CartContext } from "../../contexts/cartContext";
import { getFirestore } from "../../firebase";
import { Button } from "@material-ui/core";

import "./ItemDetailPage.scss";

const ItemDetailPage = ({ onAdd }) => {
  const { setCart, setQnt } = useContext(CartContext);
  const [article, setArticle] = useState();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [compraFin, setCompraFin] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item does not exist!");
          return;
        }
        if (isSubscribed) {
          console.log("Item found!");
          setProduct({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => (isSubscribed = false);
  }, [id]);

  useEffect(() => {
    setArticle(product);
  }, [product]);

  const styleButtom = {
    width: "86%",
    marginTop: "5px",
    backgroundColor: "green",
    color: "white",
  };

  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    setQnt((value) => value + quantity);
    article.quantity = quantity;
    setCompraFin(true);

    const prod = {
      id: article.id,
      name: article.name,
      description: article.description,
      stock: article.stock,
      price: article.price,
      brand: article.brand,
      model: article.model,
      quantity: article.quantity,
      type: article.type,
      image: article.image,
    };
    
    setCart((value) => [...value, prod]);
    
    console.log(prod.quantity)
  };

  

  return (
    <div className="itemPage">
      {loading ? (
        <div className="loading-items" style={{ margin: "0 auto" }}>
          <Loading text="Cargando productos..." />
        </div>
      ) : (
        <div className="container itemPage__detail">
          <div className="row">
            {/* IMAGE */}
            <div className="col-sm-12 col-md-8 itemPage__detail-image">
              <div>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="Imagen de Producto"
                />
              </div>
            </div>
            {/* BUY */}
            <div className="col-sm-12 col-md-4 itemPage__detail-buy">
              <div>
                <div className="counter item itemPage__detail-buy-sale">
                  <div className="">
                    <h3 className="card-title">{product.name}</h3>
                    <p>{product.description}</p>
                    <h3>${product.price}</h3>
                    <h6>Stock: {product.stock}</h6>
                  </div>
                  <div className="itemPage__detail-buy-sale-buttons">
                  {
                  compraFin
                    ? 
                      <Link to="/cart">
                        <button className='btn btn-primary'>Finalizar compra</button>
                      </Link>
                    : 
                      <>
                      <ItemCount  initial={1} min={0} max={product.stock} setQuantity={setQuantity}  />
                        <Button
                          variant="contained"
                          color="primary"
                          style={styleButtom}
                          onClick={handleClick}
                          className="item-detail__btn"
                        >
                          Agregar al carrito 
                        </Button>
                      </>
                  }
                    
                  </div>
                </div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div className="col-sm-12 col-md-8 itemPage__detail-description">
              <div className="itemPage__details">
                <h3>Características:</h3>
                <h5>Marca: {product.brand}</h5>
                <h5>Modelo: {product.model}</h5>
                {product.type && <h5>Tipo: {product.type}</h5>}
                <h3>Descripción:</h3>
                <h5>{product.description}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailPage;
