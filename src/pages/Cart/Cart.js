import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import Checkout from "../../components/Checkout/Checkout";
import { CartContext } from "../../contexts/cartContext";

import "./Cart.scss";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const messageConditional = (

    <div className="container cart-message">
      <div className="row">	 
        <div className="col-md-12">	
          <div className="card">
						<div className="card-body">
              <div className="col-sm-12 empty-cart-cls text-center">
                <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid" alt="Carrito Vacio" />
                <h3><strong>Tu carrito esta vacio!</strong></h3>
                <h4>Agrega algo para comprar y ser feliz :)</h4>
                <Link to="/" className="btn btn-primary">
                  Ir a comprar
                </Link>
              </div>
						</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="cart">
      {cart.length === 0 ? (
        messageConditional
      ) : (
        <div>
          <Table />
          <Checkout />
        </div>
      )}
    </div>
  );
};

export default Cart;
