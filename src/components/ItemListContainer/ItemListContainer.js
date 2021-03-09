import './styles.css'
import slider from '../../assets/slider.png'

const ItemListContainer = ({ greeting }) => (
    <div className="greeting">
        <div className="slider">
            {/* <p className="arrow left">❮</p> */}
            <img className="image" src={slider}></img>
            {/* <p className="arrow right">❯</p> */}
        </div>
        <p>{greeting}</p>
    </div>
)

export default ItemListContainer;