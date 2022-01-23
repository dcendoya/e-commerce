import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Switch>
            {/* ruta home */}
            <Route exact path="/">
              <ItemListContainer greeting={'¡Hola! Conocé todos nuestros productos:'} />
            </Route>
            {/* ruta catálogo */}
            <Route exact path="/catalogo">
              
            </Route>
            {/* ruta item */}
            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            
        </Switch>
      </BrowserRouter>



    </>
  );
}

export default App;