import '../App.css';
import M from 'materialize-css';
import CardWidget from './CardWidget';

function NavBar() {
  return (
    <header>
        <div  style={styles.titulo}  >
          <h1>TuTablero</h1>
          <CardWidget />
        </div>
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html" style={styles.link}>Inicio</a></li>
              <li><a href="badges.html" style={styles.link}>Análisis de Datos</a></li>
              <li><a href="collapsible.html" style={styles.link}>Productos</a></li>
              <li><a href="mobile.html" style={styles.link}>Contacto</a></li>
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
          <li><a href="sass.html" style={styles.link}>Inicio</a></li>
          <li><a href="badges.html" style={styles.link}>Análisis de Datos</a></li>
          <li><a href="collapsible.html" style={styles.link}>Productos</a></li>
          <li><a href="mobile.html" style={styles.link}>Contacto</a></li>
        </ul>
    </header> 

  );
}

const styles = {
  titulo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  }
  }


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

export default NavBar;

 