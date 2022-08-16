import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import Payments from "../../components/Payments/Payments";
import Carousel from "../../components/Carousel/Carousel"

import "./Home.scss";
import MenuCategorias from "../../components/MenuCategorias/MenuCategorias";

const Home = ({ greeting, onAdd }) => {
  return (
    <main className="home">
      
      <Carousel />
      <Payments />

      <MenuCategorias />

      <ItemList onAdd={onAdd} />
    </main>
  );
};

export default Home;
