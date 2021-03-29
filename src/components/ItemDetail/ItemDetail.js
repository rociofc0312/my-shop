import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { GlassMagnifier } from "react-image-magnifiers"
import { Link } from 'react-router-dom'
import './styles.css'

const ItemDetail = ({ item }) => {
    const [stock, setStock] = useState(item.stock)
    const [showCart, setShowCart] = useState(false)

    const decreaseStock = (quantitySelected) => {
        if (quantitySelected <= stock) {
            setStock(stock - quantitySelected)
            setShowCart(true)
        } else {
            alert('La cantidad elegida supera el stock disponible')
        }
    }

    return (
        <div className="detail-container">
            {
                item ?
                    <div className="detail-content">
                        <div className="image-detail">
                            {
                                item.picture ?
                                    <GlassMagnifier className="image-item" imageSrc={item.picture} imageAlt={item.title} magnifierBorderSize={1} square={true} />
                                    :
                                    <p>Loading</p>
                            }
                        </div>
                        <div className="description-detail">
                            <h2>{item.title}</h2>
                            <p>Precio: S/ {item.price}</p>
                            <hr />
                            <br />
                            <p>{item.description}</p>
                            {stock && <ItemCount stock={stock} initial={1} onAdd={decreaseStock} />}
                            {
                                showCart &&
                                <div>
                                    <p>Producto agregado a carrito. Stock restante: {stock}</p>
                                    <Link className="go-cart" to="/cart">Terminar mi compra</Link>
                                </div>
                            }
                        </div>
                    </div> :
                    <div>No data</div>
            }
        </div>
    )
}

export default ItemDetail
