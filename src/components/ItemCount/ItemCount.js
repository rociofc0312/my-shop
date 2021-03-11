import './styles.css'

const ItemCount = () => (
    <div className="item-count">
        <p>Producto 1</p>
        <div className="counter">
            <button>+</button>
            <p className="count">1</p>
            <button>-</button>
        </div>
        <button>Agregar a carrito</button>
    </div>
)

export default ItemCount;