import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading";
import { getFirestore } from "../../firebase";


import "./Categories.scss";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  // Traingo datos desde Firebase
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const itemsByCategory = itemCollection.where(
      "categoryId",
      "==",
      categoryId
    );

    itemsByCategory
      .get()
      .then(result => {
        const lista = result.docs.map(product =>{
            return {
                id: product.id,
                ...product.data()
            }
        })
        setProducts(lista)
        })
        .catch((error) => {
            console.log("error, entra en catch err");
        })
        .finally(() => {
            setLoading(false);
        });
    }, [categoryId]);

  return (
    <div className="categories">
      <h1>Categoría {categoryId}</h1>
      {loading ? (
        <Loading text="Cargando productos..." />
      ) : (
        <div className="categories__list">
          {products.map((product) => {
            return <ItemDetail product={product} key={product.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
