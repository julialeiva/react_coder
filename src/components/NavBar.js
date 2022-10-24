import React from 'react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import { Nav } from './Nav';

const NavBar = () => {
  const categories = [
    { id: 0, title: "electronics", route: "/category/electronics" },
    { id: 1, title: "jewelery", route: "/category/jewelery" },
    { id: 2, title: "men's clothing", route: "/category/men's clothing" },
    { id: 3, title: "women's clothing", route: "/category/women's clothing" },
  ];

  return (
    <header>
      <div style={styles.titulo}  >
        <h1>E-commerce MJL</h1>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
      <nav>
        <div>
          <Nav categories={categories} />
        </div>
      </nav>
    </header>
  );
};

const styles = {
  titulo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5%",
    marginTop: "1%",
    marginBottom: "1%",
  },
  link: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default NavBar;

