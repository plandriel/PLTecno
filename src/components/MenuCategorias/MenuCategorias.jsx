import React from 'react';
import "./styles.scss";
import { Link } from "react-router-dom";

const MenuCategorias = () => {
  return (
    <div>
        <div className="menu-categorias__details-categories">
            <h2>Categorías</h2>
            <button className="btn btn-primary button_categories"><Link to="/categories/memorias">Memorias</Link></button>
            <button className="btn btn-primary button_categories"><Link to="/categories/monitores">Monitores</Link></button>
            <button className="btn btn-primary button_categories"><Link to="/categories/procesadores">Procesadores</Link></button>
            <button className="btn btn-primary button_categories"><Link to="/categories/almacenamiento">Almacenamiento</Link></button>
        </div>
    </div>
  )
}

export default MenuCategorias;