import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { GlassMagnifier } from "react-image-magnifiers"
import './styles.css'

const ItemDetail = ({ item }) => {
    const [stock, setStock] = useState(5)

    const decreaseStock = (quantitySelected) => {
        if (quantitySelected <= stock) {
            setStock(stock - quantitySelected)
        } else {
            alert('La cantidad elegida supera el stock disponible')
        }
    }

    return (
        <div className="detail-container">
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
                <ItemCount stock={stock} initial={1} onAdd={decreaseStock} />
            </div>
        </div>
    )
}

export default ItemDetail
