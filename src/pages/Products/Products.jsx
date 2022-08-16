import React from 'react'
import "./styles.css"
import ItemList from '../../components/ItemList/ItemList'
import MenuCategorias from '../../components/MenuCategorias/MenuCategorias'

const Products = ({onAdd}) => {
  return (
    <div className='pageProducts'>
            <div>
            <h1>test</h1>
            </div>
            <div>
              <MenuCategorias />
              <ItemList onAdd={onAdd} />
            </div>
        </div>
  )
}

export default Products