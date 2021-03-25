import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
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
            setLoading(true)
            setTimeout(() => {
                filterItems()
                resolve(filterItems())
            }, 3000);
        })
    }

    const filterItems = () => {
        if (isNaN(id))
            return products
        else
            return products.filter((product) => product.categoryId === id)
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