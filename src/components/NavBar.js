import '../App.css';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <header>
        <div  style={styles.titulo}  >
          <h1>TuTablero</h1>
          <CartWidget />
        </div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html" style={styles.link}>Inicio</a></li>
              <li><a href="badges.html" style={styles.link}>Análisis de Datos</a></li>
              <li><a href="collapsible.html" style={styles.link}>Productos</a></li>
              <li><a href="mobile.html" style={styles.link}>Contacto</a></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
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

export default NavBar;

 