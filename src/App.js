import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Catalogo from './components/Catalogo';
import Cart from './components/Cart';
import CartContext from './components/CartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
            <Switch>
              {/* ruta home */}
              <Route exact path="/">
                <ItemListContainer greeting={'¡Hola! Conocé todos nuestros productos:'} />
              </Route>

              {/* ruta catálogo */}
              <Route path="/catalogo/:catalogoId">
                <Catalogo />
              </Route>

              {/* ruta item */}
              <Route path="/item/:itemId">
                <ItemDetailContainer />
              </Route>

              {/* ruta carrito */}
              <Route exact path="/cart">
                <Cart />
              </Route>

              {/* ruta checkout */}
              <Route exact path="/checkout">
                <Checkout />
              </Route>
            </Switch>
          <Footer />
        </BrowserRouter>
      </CartContext>


    </>
  );
}

export default App;