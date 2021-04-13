import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import './styles.css'
import { getProductDetail } from '../../services/products'

const ItemDetailContainer = () => {
    let { id } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getProductDetail(id).then((result) => {
            setItem(result)
            setLoading(false)
        })
    }, [id])

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
