import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemListContainer';

function App() {
  return (
    <>
    <div><NavBar /></div>
    <div><ItemList greeting={'¡Hola! Conocé todos nuestros productos:'}/></div>
    </>
  );
}

export default App;