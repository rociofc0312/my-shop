import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Navbar';
import './App.css';

const App = () => (
  <div className="App">
    <NavBar />
    <ItemListContainer greeting="Welcome to the Fun Shop" />
  </div>
)

export default App;
