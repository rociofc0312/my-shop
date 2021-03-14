import './styles.css'

const Item = ({ item }) => {
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
                    <button className="detail-btn">Ver detalle</button>
                </div>
            </div>
        </div>
    )
}

export default Item;