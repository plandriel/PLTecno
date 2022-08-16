import React, { useState, useEffect, useContext } from "react";
import Item from "../Item/Item";
import { CartContext } from "../../contexts/cartContext";
import "./ItemDetail.scss";

const ItemDetail = ({ product }) => {
  // eslint-disable-next-line
  const { setCart, setQnt } = useContext(CartContext);
  // eslint-disable-next-line
  const [article, setArticle] = useState();

  

  useEffect(() => {
    setArticle(product);
  }, [product]);

  const style = {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };
  

  return (
    <div style={style} className="item-detail">
      <Item product={product} />
    </div>
  );
};

export default ItemDetail;
