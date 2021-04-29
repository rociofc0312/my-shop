import React, { useContext, useEffect, useState } from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import CategoryListContainer from '../CategoryListContainer/CategoryListContainer';
import CartContainer from '..//CartContainer/CartContainer';
import NavContainer from '../NavContainer/NavContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoriesContext from '../../context/CategoriesContext';
import { getAllCategories } from '../../services/categories';
import Loading from '../../components/shared/Loading/Loading';
import { useIsMountedRef } from '../../hooks/useIsMountedRef';
import '../../App.css';

const BaseContainer = () => {
    const { setCategories } = useContext(CategoriesContext)
    const [loading, setLoading] = useState(true)
    const { isMountedRef } = useIsMountedRef()

    useEffect(() => {
        getAllCategories()
            .then(result => {
                if (isMountedRef.current) setCategories(result)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                if (isMountedRef.current) setLoading(false)
            })

    }, [setCategories, isMountedRef])

    if(loading) return <Loading isSectionLoading={false}/>

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
