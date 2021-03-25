import React, { useState, useEffect } from 'react'
import CategoryList from '../CategoryList/CategoryList'
import categoriesOfProducts from '../../data/categories'
import Slider from '../Slider/Slider'
import './styles.css'

const CategoryListContainer = () => {
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
        <div className="category-container">
            <Slider/>
            <CategoryList categories={categories}/>
        </div>
    )
}

export default CategoryListContainer
