import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import products from '../../data/products'
import styles from './styles.module.css'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    let { id } = useParams()

    useEffect(() => {
        getItems().then((result) => {
            setItems(result)
            setLoading(false)
        })
    }, [id])

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.filter((product) => product.categoryId === id))
            }, 3000);
        })
    }

    return (
        <div className={styles.greeting}>
            {
                !loading ?
                    <ItemList items={items} /> :
                    <Loader
                        type="Bars"
                        color="#f9c847"
                        height={50}
                        width={50}/>
            }
        </div>
    )
}

export default ItemListContainer;