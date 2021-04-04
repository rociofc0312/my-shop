import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './styles.css'

const CartList = ({ cart }) => {
    const { removeItem, clear } = useContext(CartContext)
    return (
        <div className="cart-list">
            <button onClick={ () => clear() }>Clear</button>
            {cart.map((checkout) => (
                <CartItem key={ checkout.item.id } checkout={ checkout } onRemove={ removeItem }/>
            ))}
        </div>
    )
}

export default CartList
