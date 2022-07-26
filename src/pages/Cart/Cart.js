import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import Checkout from "../../components/Checkout/Checkout";
import CartContext from "../../contexts/cartContext";

import "./Cart.scss";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const messageConditional = (

    <div class="container cart-message">
      <div class="row">	 
        <div class="col-md-12">	
          <div class="card">
						<div class="card-body">
              <div class="col-sm-12 empty-cart-cls text-center">
                <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid" />
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


    // <div className="card text-center cart-message">
    //   <div className="card-header">Ops!</div>
    //   <div className="card-body">
    //     <h5 className="card-title">¡Tu carrito está vacío!</h5>
    //     <p className="card-text">
    //       ¿No sabés qué comprar? ¡Miles de productos te esperan!
    //     </p>
    //     <Link to="/" className="btn btn-primary">
    //       Ir a comprar
    //     </Link>
    //   </div>
    //   <div className="card-footer text-muted">PL Tecno</div>
    // </div>
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
