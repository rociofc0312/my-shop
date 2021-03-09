import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import './styles.css'

const NavBar = () => {
    const [show, setShow] = React.useState();

    return (
        <div className="navbar">
            <div className="navbar-items">
                <div className="logo-item">
                    <img id="logo" src={logo} alt="logo"></img>
                </div>
                <div id="menu" onClick={() => setShow(!show)}>
                    <img src={menu} alt="menu"></img>
                </div>
                <div id="menu-options" className={`grow${show ? '' : ' collapse'}`}>
                    <p className="options">Polos</p>
                    <p className="options">Funkos</p>
                    <p className="options">Hogar</p>
                    <p className="options">Geek</p>
                </div>
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar;