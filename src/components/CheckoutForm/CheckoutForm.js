import React, { useContext, useState } from 'react'
import CartContext from '../../context/CartContext';
import { createOrder } from '../../services/order';
import './styles.css'

const CheckoutForm = () => {
    const { cart, getCartTotal } = useContext(CartContext)
    const [buyer, setBuyer] = useState({ name: '', telephone: '', email: '' });
    const [orderId, setOrderId] = useState(null)

    const changeBuyerInfo = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const sendOrder = (e) => {
        e.preventDefault()
        createOrder(buildOrder()).then((result) => {
            setOrderId(result.id)
            console.log(result.id)
        })
    }

    const buildOrder = () => {
        console.log(cart)
        let items = cart.map((checkout) => {
            return {
                id: checkout.item.id,
                title: checkout.item.name,
                quantity: checkout.quantity,
                price: checkout.item.price,
            }
        })

        return {
            buyer,
            items,
            date: formatDate(),
            total: getCartTotal()
        }
    }

    const formatDate = () => {
        var today = new Date();
        var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
        return date
    }

    return (
        <div className="checkout-form">
            <h3>Enviar orden</h3>
            <form onSubmit={sendOrder}>
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" name="name" onChange={changeBuyerInfo} placeholder="Nombre completo..." />

                <label htmlFor="telephone">Teléfono</label>
                <input type="text" id="telephone" name="telephone" onChange={changeBuyerInfo} placeholder="Teléfono..." />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={changeBuyerInfo} placeholder="Email..." />

                <input type="submit" value="Enviar" />
            </form>
            <div>
            {
                orderId && <p>Orden generada: { orderId }</p>
            }
            </div>
        </div>
    )
}

export default CheckoutForm
