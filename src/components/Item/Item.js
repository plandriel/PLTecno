import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ product }) => {
  const { name, price, image } = product;

  return (

    <div className="cardProduct">
      <Link to={`/item/${product.id}`}>
        <div className="imgBox">
          <img src={image} alt={name} className="product" />
        </div>

        <div className="contentBox">
          <h3>{name}</h3>
          <h2 className="price">$ {price}</h2>
          <p className="buy">Comprar YA!</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
