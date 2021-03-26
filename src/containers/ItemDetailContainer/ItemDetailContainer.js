import React, { useEffect, useState } from 'react'
import product from '../../data/product'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import './styles.css'

const ItemDetailContainer = () => {
    let { id } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItem().then((result) => {
            setItem(result)
            setLoading(false)
        })
    }, [id])

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => {
                resolve(product.find((pd) => pd.id.toString() == id))
                console.log('gg:', typeof(id))
            }, 2000);
        })
    }

    return (
        <div>
            { !loading ?
                <ItemDetail item={item} />
                :
                <Loader className="detail"
                        type="Bars"
                        color="#f9c847"
                        height={50}
                        width={50}/>
            }
        </div>
    )
}

export default ItemDetailContainer
