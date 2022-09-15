import React, { useState } from 'react';
import '../App.css';

const ItemCount = ({initial, initialStock, onAdd}) => {

  const [contador, setContador] = useState(initial)
  const [stock, setStock] = useState(initialStock)
 
  const sumar = () => contador < stock && setContador(contador + 1)
  const restar = () => contador > initial && setContador(contador - 1)
 
  const reset = () =>{
    setContador(initial);
    setStock(initialStock);
  }
  
  function onAdd(){
    alert(contador + " Producto 1 agregados al carrito")
  }

  return(
    <div>
        <h3>Producto 1</h3>
        <div>Stock: {stock}</div>
        <div>Agregar al carrito: {contador}</div>
        <div>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
            <button onClick={reset}>Reset</button>
            <button onClick={onAdd}> Agregar al carrito</button>
        </div>
    </div>
  )

}

export default ItemCount;