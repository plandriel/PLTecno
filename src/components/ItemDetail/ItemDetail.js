import React, { useState, useEffect, useContext } from "react";
import Item from "../Item/Item";
import CartContext from "../../contexts/cartContext";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.scss";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  const { setCart, setQnt } = useContext(CartContext);
  const [article, setArticle] = useState();
  const [compraFin, setCompraFin] = useState(false);

  

  useEffect(() => {
    setArticle(product);
  }, [product]);

  const style = {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

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
    setCompraFin(true)

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
  };

  return (
    <div style={style} className="item-detail">
      <Item product={product} />
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
  );
};

export default ItemDetail;
