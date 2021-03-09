import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Navbar';

const App = () => (
  <div className="App">
    <NavBar/>
    <ItemListContainer greeting="Welcome to the Fun Shop"/>
  </div>
)

export default App;
