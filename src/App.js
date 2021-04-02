import React from 'react';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CategoryListContainer from './containers/CategoryListContainer/CategoryListContainer';
import CartContainer from './containers/CartContainer/CartContainer';
import NavContainer from './containers/NavContainer/NavContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './normalize.css';
import './App.css';

const App = () => (
  <div className="App">
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

export default App;
