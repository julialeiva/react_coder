import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";

const ItemDetail = ({ product }) => {

  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (count) => {
    addProduct({...product, qty: count});
    setCompraFinalizada(true);
  };
  
  return (
    <div style={styles.infoContainer}>
      <img style={styles.img} src={product.image} alt={product.title} />
      <div style={styles.infoTextContainer}>
        <div style={styles.infoText}>
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
            
        {compraFinalizada
          ? <Link to="/cart">
            <button>Ir al carrito</button>
            </Link>
          : <ItemCount initial={1} stock={5} onAdd={onAdd} />}
      </div>
    </div>
  );
};

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "40%"
  },
  infoTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  infoText: {
    padding: "10px",
    marging: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
};

export default ItemDetail