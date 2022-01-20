import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';

function App() {
  return (
    <>
    <div><NavBar /></div>
    <div><ItemListContainer greeting={'¡Hola! Conocé todos nuestros productos:'}/></div>
    <div><ItemList /></div>
    </>
  );
}

export default App;