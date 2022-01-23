import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
            <NavBar />
            {/* <div><ItemListContainer greeting={'¡Hola! Conocé todos nuestros productos:'} /></div> */}
            <div><ItemDetailContainer /></div>
    </>
  );
}

export default App;