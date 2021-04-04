import React, { useContext } from 'react'
import CartList from '../../components/CartList/CartList'
import CartContext from '../../context/CartContext'

const CartContainer = () => {
    const { cart } = useContext(CartContext)

    return (
        <div>
            <CartList cart={ cart }/>
        </div>
    )
}

export default CartContainer
