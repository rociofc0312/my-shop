import React from 'react'
import CategoryList from '../../components/CategoryList/CategoryList'
import SliderContainer from '../SliderContainer/SliderContainer'
import './styles.css'

const CategoryListContainer = () => {

    return (
        <div className="category-container">
            <SliderContainer/>
            <CategoryList/>
        </div>
    )
}

export default CategoryListContainer
