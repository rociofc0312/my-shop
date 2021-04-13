import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import styles from './styles.module.css'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/products'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    let { id } = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts(id).then((result) => {
            setItems(result)
            setLoading(false)
        })
    }, [id])

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