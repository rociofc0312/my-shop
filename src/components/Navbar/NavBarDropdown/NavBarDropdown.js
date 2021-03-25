import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import categoriesOfProducts from '../../../data/categories'
import './styles.css'

const NavBarDropdown = ({ showOptions }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        geCategories().then((result) => setCategories(result))
    }, [])

    const geCategories = () => {
        return new Promise((resolve, reject) => {
            resolve(categoriesOfProducts)
        })
    }

    return (
        <div className={`dropdown-menu${showOptions ? ' active' : ''}`}>
            <section className="dropdown-section">
                <h4>ROPA Y ACCESORIOS</h4>
                <div className="dropdown-options">
                    {categories.filter((category) => category.group === 'Ropa').map((category) => (
                        <Link key={category.id} to={`/category/${category.id}`}>{category.title}</Link>
                    ))}
                </div>
            </section>
            <section className="dropdown-section">
                <h4>HOGAR Y OFICINA</h4>
                <div className="dropdown-options">
                    {categories.filter((category) => category.group === 'Hogar').map((category) => (
                        <Link key={category.id} to={`/category/${category.id}`}>{category.title}</Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default NavBarDropdown
