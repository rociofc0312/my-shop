import React, { useContext } from 'react'
import CategoriesContext from '../../context/CategoriesContext'
import Category from '../Category/Category'
// import { allProducts } from '../../data/categories'
import './styles.css'

const CategoryList = () => {
    const { categories } = useContext(CategoriesContext)

    const getCategoriesList = () => {
        let flattenCategories = categories.map(category => category.subcategories).flat()
        return flattenCategories
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
