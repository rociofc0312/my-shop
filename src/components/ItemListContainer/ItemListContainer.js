import ItemCount from '../ItemCount/ItemCount'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import products from '../../data/products'
import styles from './styles.module.css'
import Slider from '../Slider/Slider'

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
        <div className={styles.greeting}>
            <Slider />
            <p>{greeting}</p>
            <ItemList items={items} />
            <ItemCount stock={stock} initial={1} onAdd={decreaseStock} />
            <p>hehehe</p>
        </div>
    )
}

export default ItemListContainer;