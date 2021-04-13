import React, { useContext } from 'react'
import CategoriesContext from '../../context/CategoriesContext'
import Category from '../Category/Category'
import './styles.css'

const CategoryList = () => {
    const { categories } = useContext(CategoriesContext)

    const getCategoriesList = () => {
        return categories ? categories.map(category => category.subcategories).flat() : categories
    }
    return (
        <div>
            <div className="category-title">
                <small>¿Buscando algo específico?</small>
                <h3>CATEGORÍAS DISPONIBLES</h3>
            </div>
            <div className="category-list">
                {getCategoriesList().map((category) => (
                    <Category key={category.name} category={category} />
                ))}
            </div>
        </div>
    )
}

export default CategoryList
