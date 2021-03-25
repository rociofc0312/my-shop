import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Category = ({ category }) => {
    return (
        <div className="category">
            <Link to={`/category/${category.id}`}>
                <div className="category-block">
                    <img src={category.picture} alt="categoría"/>
                    <span>{category.title}</span>
                </div>
            </Link>
        </div>
    )
}

export default Category
