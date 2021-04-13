import React, { useContext, useEffect } from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import CategoryListContainer from '../CategoryListContainer/CategoryListContainer';
import CartContainer from '..//CartContainer/CartContainer';
import NavContainer from '../NavContainer/NavContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoriesContext from '../../context/CategoriesContext';
import { getAllCategories } from '../../services/categories';
import '../../App.css';

const BaseContainer = () => {
    const { setCategories } = useContext(CategoriesContext)

    useEffect(() => {
        getAllCategories().then(result => {
            setCategories(result)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <BrowserRouter>
                <NavContainer />
                <Switch>
                    <Route path="/item/:id" component={ItemDetailContainer} />
                    <Route path="/category/:id" component={ItemListContainer} />
                    <Route exact path="/cart" component={CartContainer} />
                    <Route exact path="/" component={CategoryListContainer} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default BaseContainer
