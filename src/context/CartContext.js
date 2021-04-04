import React, { createContext, useState } from 'react';

const CartContext = createContext()

export function CartContextProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart([...cart, { item, quantity }])
        } else {
            let foundIndex = cart.findIndex(checkout => checkout.item.id === item.id)
            let updatedCart = cart.map((checkout, index) => {
                if (foundIndex === index)
                    return {...checkout, quantity: checkout.quantity + quantity}
                return cart
            })
            setCart(updatedCart)
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(checkout => checkout.item.id !== id))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find(checkout => checkout.item.id === id) ? true : false
    }

    const getItemQuantity = (id) => {
        return cart.find(checkout => checkout.item.id === id).quantity
    }

    const getCartQuantity = () => {
        return cart.reduce((previous,current) => previous + current.quantity, 0)
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, clear, getItemQuantity, getCartQuantity }}>
        { children }
    </CartContext.Provider>
}

export default CartContext