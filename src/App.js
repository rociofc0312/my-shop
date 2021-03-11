import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Navbar';

const App = () => (
  <div className="App">
    <NavBar/>
    <ItemListContainer greeting="Welcome to the Fun Shop"/>
    <ItemCount/>
  </div>
)

export default App;
