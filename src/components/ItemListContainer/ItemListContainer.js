import ItemCount from '../ItemCount/ItemCount'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import products from '../../data/products'
import slider from '../../assets/slider.png'
import './styles.css'

const ItemListContainer = ({ greeting }) => {

    const [stock, setStock] = useState(5)
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems().then((result) => setItems(result))
    }, [])

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
    }

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
            <ItemList items={items} />
            <ItemCount stock={stock} initial={1} onAdd={decreaseStock} />
        </div>
    )
}

export default ItemListContainer;