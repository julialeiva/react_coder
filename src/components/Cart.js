import React from 'react'
import { useCartContext } from '../CartContext';
import ItemCart from './itemCart';
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";

const Cart = () => {

  const { cart, total, clear } = useCartContext();

  if (cart.length === 0) {
    return (
      <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={1} marginTop="5px">
        <Grid item><h4>Su carrito está vacío</h4></Grid>
        <Grid item><Link to="/"><Button variant="contained">Ir por productos</Button></Link></Grid>
      </Grid>
    );
  };

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={1} marginTop="5px">
      <Grid item>{cart.map(product => <ItemCart key={product.id} product={product} />)}</Grid>
      <Grid item><h4>Total a abonar ${total}</h4></Grid>
      <Grid item><Button variant="contained" onClick={clear}>Vaciar Carrito</Button></Grid>
      <Grid item><Link to="/form"><Button variant="contained">Finalizar Compra</Button></Link></Grid>
      <Grid item><Link to="/"><Button variant="contained">Seguir comprando</Button></Link></Grid>
    </Grid>
  );
};

export default Cart