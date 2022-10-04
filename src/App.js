import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './CartContext';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos" />}/>
          <Route path='/category/:id' element={<ItemListContainer greeting="Bienvenidos" />}/>
          <Route path='/product/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
);
};

export default App;