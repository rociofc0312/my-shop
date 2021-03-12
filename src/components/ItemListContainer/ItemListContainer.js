import ItemCount from '../ItemCount/ItemCount';
import React, { useState } from 'react';
import slider from '../../assets/slider.png'
import './styles.css'

const ItemListContainer = ({ greeting }) => {

    const [stock, setStock] = useState(5)

    const decreaseStock = (quantitySelected) => {
        if (quantitySelected <= stock) {
            setStock(stock - quantitySelected)
        } else {
            alert('La cantidad elegida supera el stock disponible')
        }
    }

    return (
        <div className="greeting">
            <div className="slider">
                {/* <p className="arrow left">❮</p> */}
                <img className="image" src={slider} alt="slider"></img>
                {/* <p className="arrow right">❯</p> */}
            </div>
            <p>{greeting}</p>
            <ItemCount stock={stock} initial={1} onAdd={decreaseStock} />
        </div>
    )
}

export default ItemListContainer;