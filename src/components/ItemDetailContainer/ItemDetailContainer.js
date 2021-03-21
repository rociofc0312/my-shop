import React, { useEffect, useState } from 'react'
import product from '../../data/product'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ id }) => {

    const [item, setItem] = useState({})

    useEffect(() => {
        getItem().then((result) => setItem(result))
    }, [])

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product.find((pd) => pd.id === id))
            }, 2000);
        })
    }

    return (
        <div>
            { item ?
                <ItemDetail item={item} />
                :
                <div>No data</div>
            }
        </div>
    )
}

export default ItemDetailContainer
