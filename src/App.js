import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ArrayProductos from './components/ArrayProductos';

function App() {
  return (
    <>
    <div><NavBar /></div>
    <div><ItemListContainer greeting={'¡Hola! Conocé todos nuestros productos:'}/></div>
    <div><ArrayProductos /></div>
    </>
  );
}

export default App;