import './styles.css'
import cart from '../../assets/shopping-cart.png'

const CartWidget = () => (
    <div id="shopping-cart-item">
        <img id="shopping-cart" src={cart} alt="shopping-cart"></img>
    </div>
)

export default CartWidget;