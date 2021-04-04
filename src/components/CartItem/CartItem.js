import React from 'react'
import './styles.css'

const CartItem = ({ checkout, onRemove }) => {
    return (
        //TODO: add styles
        <div className="cart-item">
            <p>{ checkout.item.title }</p>
            <p>{ checkout.quantity }</p>
            <p onClick={ () => onRemove(checkout.item.id) }>X</p>
        </div>
    )
}

export default CartItem
