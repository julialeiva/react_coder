import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a TuTablero, donde empiezan a cumplirse tus objetivos"/>
    </div>

);
}

export default App;
