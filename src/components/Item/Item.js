import { useState } from 'react';
import DetailModal from '../DetailModal/DetailModal';
import './styles.css'

const Item = ({ item }) => {
    const [show, setShow] = useState(0)
    return (
        <div className="item">
            <div className="item-content">
                <div className="item-image">
                    <img src={item.pictureUrl} alt="item" />
                </div>
                <div className="item-description">
                    <h4>{item.title}</h4>
                    <small>{item.description}</small>
                    <p>S/ {item.price.toFixed(2)}</p>
                    <button className="detail-btn" onClick={()=>setShow(true)}>Ver detalle</button>
                </div>
            </div>
            {item && <DetailModal show={show} handleClose={()=> setShow(false)} id={item.id}/>}
        </div>
    )
}

export default Item;