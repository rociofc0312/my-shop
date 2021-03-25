import React from 'react';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CategoryListContainer from './containers/CategoryListContainer/CategoryListContainer';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route exact path="/" component={CategoryListContainer} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;
