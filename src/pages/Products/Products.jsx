import React from 'react'
import "./styles.css"
import ItemList from '../../components/ItemList/ItemList'

const Products = ({onAdd}) => {
  return (
    <div className='pageProducts'>
            <div>
            <h1>test</h1>
            </div>
            <div>
              <ItemList onAdd={onAdd} />
            </div>
        </div>
  )
}

export default Products