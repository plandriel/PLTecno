import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ product }) => {
  const { name, price, image } = product;

  return (

    <div class="cardProduct">
      <Link to={`/item/${product.id}`}>
        <div class="imgBox">
          <img src={image} alt={name} class="product" />
        </div>

        <div class="contentBox">
          <h3>{name}</h3>
          <h2 class="price">$ {price}</h2>
          <p class="buy">Comprar YA!</p>
        </div>
      </Link>
    </div>




    // <div className="link">
    //   <Link to={`/item/${product.id}`}>
    //     <div className="counter link__item" style={{ width: "15rem" }}>
    //       <div className="counter__content">
    //         <h5 className="card-title">{name}</h5>
    //         <img
    //           src={image}
    //           className="card-img-top"
    //           alt="Imagen de Producto"
    //         />
    //         <p>{description}</p>
    //         <h6>${price}</h6>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
  );
};

export default Item;
