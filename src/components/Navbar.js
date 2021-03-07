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
                    <a className="options" href="tbd">Categorías</a>
                    <a className="options" href="tbd">Marcas</a>
                    <a className="options" href="tbd">Ofertas</a>
                    <a className="options" href="tbd">Nuevos</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;