import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();
const { Provider } = CartContext;

const CartCustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [qnt, setQnt] = useState(0);

    const getQtyProducts = () => {
        let quantity = 0;
        cart.forEach(product => quantity += product.quantity);
        setQnt(quantity);
    }

    useEffect(() => {
        getQtyProducts();
        // eslint-disable-next-line
    }, [cart])

    const addProduct = (product) => {
        if (isInCart(product.id)) {
            const found = cart.find(p=> p.id === product.id);
            const index = cart.indexOf(found);
            const aux = [...cart];
            aux[index].qnt += product.qnt;
            setCart(aux);
        }else{
            setCart([...cart, product]);
        };
    }

    const deleteProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
    };

    const isInCart = (id) => {
        return cart.some(cart => cart.id === id)
    }

    const clear = () => {
        setCart([])
        setQnt(0);
    }

    const calcularTotal = () => {
        return cart.reduce((acum, actual)=> acum + actual.price * actual.qnt, 0)
        
    };

    return (
        <Provider value={{cart, addProduct, deleteProduct, calcularTotal, clear, setQnt, setCart, qnt}}>
            { children }
        </Provider>
    )

}

export default CartCustomProvider;
