import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import NavBar from './components/NavBar';
import { Cart } from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos" />}/>
          <Route path='/category/:id' element={<ItemListContainer greeting="Bienvenidos" />}/>
          <Route path='/product/:id' element={ <ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </>
);
};

export default App;