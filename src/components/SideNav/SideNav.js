import React from 'react'
import NavBarDropdown from '../Navbar/NavBarDropdown/NavBarDropdown'
import './styles.css'

const SideNav = ({ show, onClickedBack }) => {
    const [showOptions, setShowOptions] = React.useState(false)
    return (
        <nav className={`sidenav${show ? ' open' : ''}`}>
            <button className="side-close" onClick={() => onClickedBack()}>✕</button>
            <div>
                <a className="side-options" href="#">Home</a>
                <div className="dropdown-content">
                    <p className="side-options" href="#" onClick={() => setShowOptions(!showOptions)}>Categorías <small>▼</small></p>
                    <NavBarDropdown showOptions={showOptions} isSideNav={true}/>
                </div>
            </div>
        </nav>
    )
}

export default SideNav
