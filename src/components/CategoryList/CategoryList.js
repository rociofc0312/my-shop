import React from 'react'
import Category from '../Category/Category'
import './styles.css'

const CategoryList = ({ categories }) => {
    return (
        <div>
            <div className="category-title">
                <small>¿Buscando algo específico?</small>
                <h3>CATEGORÍAS DISPONIBLES</h3>
            </div>
            <div className="category-list">
                {categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}

export default CategoryList
