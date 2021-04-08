import React, { useContext } from 'react'
import CartList from '../../components/CartList/CartList'
import CartContext from '../../context/CartContext'
import CartSummary from '../../components/CartSummary/CartSummary'
import empty from '../../assets/empty.png'
import './styles.css'
import { Link } from 'react-router-dom'

const CartContainer = () => {
    const { cart } = useContext(CartContext)

    const CartCheckout = () => {
        return (
            <div className="cart-checkout">
                <CartList cart={cart} />
                <CartSummary />
            </div>
        )
    }

    const EmptyCart = () => {
        return (
            <div className="empty-cart">
                <img src={empty} alt="empty-cart" />
                <p>Tu carrito se encuentra vacío.</p>
                <Link className="back-main" to="/">Seguir comprando</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            {
                cart.length ?
                    <CartCheckout /> :
                    <EmptyCart />
            }
        </div>
    )
}

export default CartContainer
