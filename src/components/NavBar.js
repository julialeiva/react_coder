import '../App.css';
import carrito from '../assets/carrito.png';
import M from 'materialize-css'

function NavBar() {
  return (
    <header>
        <div  style={styles.titulo}  >
          <h1>TuTablero</h1>
          <img src={carrito} alt="carrito"/>
        </div>
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html">Inicio</a></li>
              <li><a href="badges.html">Análisis de Datos</a></li>
              <li><a href="collapsible.html">Productos</a></li>
              <li><a href="mobile.html">Contacto</a></li>
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
          <li><a href="sass.html">Inicio</a></li>
          <li><a href="badges.html">Análisis de Datos</a></li>
          <li><a href="collapsible.html">Productos</a></li>
          <li><a href="mobile.html">Contacto</a></li>
        </ul>
    </header> 

  );
}

const styles = {
  titulo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

export default NavBar;

 