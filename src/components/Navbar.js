import './styles.css'
import React from 'react';

function NavBar() {
    const [show, setShow] = React.useState();

    return (
        <div className="navbar">
            <div className="container">
                <div className="inline-block">
                    <img id="logo" src="/logo.png" alt="logo"></img>
                </div>
                <div id="menu" onClick={() => setShow(!show)}>
                    <img src="/menu.png" alt="menu"></img>
                </div>
                <div id="menu-options" className={`grow${show ? '' : ' collapse'}`}>
                    <p className="options">Polos</p>
                    <p className="options">Funkos</p>
                    <p className="options">Hogar</p>
                    <p className="options">Geek</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar;