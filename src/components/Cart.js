import React from 'react'
import { useCartContext } from '../CartContext';
import ItemCart from './itemCart';
import { Link } from "react-router-dom";

const Cart = () => {

  const { cart, total, clear } = useCartContext();

  // const actualizarStock = (producto) =>{
  //   const updateStock = doc(db, "productos", producto.id);
  //   updateDoc(updateStock,{stock:(producto.product.stock - producto.product.qty)});
  // };

  
  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Ir por productos</Link>
      </>
    );
  };

  return (
    <>
      {cart.map(product => <ItemCart key={product.id} product={product} />)      }
      <h2>Total a abonar ${total}</h2>
      <button onClick={clear}>Vaciar Carrito</button>
      <Link to="/form"><button>Finalizar Compra</button></Link>
    </>
  );
};

export default Cart