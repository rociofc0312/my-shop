import React from 'react'
import { GlassMagnifier } from "react-image-magnifiers"
import './styles.css'

const ItemDetail = ({ item }) => {
    return (
        <div className="detail-container">
            <div className="image-detail">
                {
                    item.picture ?
                        <GlassMagnifier imageSrc={item.picture} imageAlt={item.title} magnifierBorderSize={1} square={true} />
                        : 
                        <p>Loading</p>
                }
            </div>
            <div className="description-detail">
                <h3>{item.title}</h3>
                <p>Precio: S/ {item.price}</p>
                <hr />
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail
