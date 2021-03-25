import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import categoriesOfProducts from '../../../data/categories'
import './styles.css'

const NavBarDropdown = ({ showOptions }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        geCategories().then((result) => {
            let rr = result.reduce(function (r, a) {
                r[a.group] = r[a.group] || [];
                r[a.group].push(a);
                return r;
            }, Object.create(null))
            setCategories(rr)
        })
    }, [])

    const geCategories = () => {
        return new Promise((resolve, reject) => {
            resolve(categoriesOfProducts)
        })
    }

    const showCategories = () => {
        let sections = []
        for (const key in categories) {
            sections.push(
                <section key={key} className="dropdown-section">
                    <h4>{key}</h4>
                    <div className="dropdown-options">
                        {categories[key].map((category) => (
                            <Link key={category.id} to={`/category/${category.id}`}>{category.title}</Link>
                        ))}
                    </div>
                </section>
            )
        }
        return sections
    }

    return (
        <div className={`dropdown-menu${showOptions ? ' active' : ''}`}>
            {showCategories()}
        </div>
    )
}

export default NavBarDropdown
