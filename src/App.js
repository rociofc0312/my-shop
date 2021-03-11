import React, { useState } from 'react';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Navbar';
import './App.css';

const App = () => {

  const [stock, setStock] = useState(5)

  const decreaseStock = (quantitySelected) => {
    if (quantitySelected <= stock) {
      setStock(stock - quantitySelected)
    } else{
      alert('La cantidad elegida supera el stock disponible')
    }
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Welcome to the Fun Shop" />
      <ItemCount stock={stock} initial={1} onAdd={decreaseStock} />
    </div>
  )
}

export default App;
