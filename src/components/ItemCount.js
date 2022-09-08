import React, { useState } from 'react';
import '../App.css';

const ItemCount = ({initial = 1, initialstock = 5, onAdd}) => {

  const [contador, setContador] = useState(initial)
  const [stock, setStock] = useState(initialstock)
 
  const sumar = () => {
    setContador(contador + 1);
    setStock(stock - 1);
    avisarStock();
   }

  const restar = () => {
    if(contador > 0){
      setContador(contador - 1);
      setStock(stock + 1);      
    }
    else
    {
      setContador(0);
    }
  }

  const reset = () =>{
    setContador(initial);
    setStock(initialstock);
  }

  const avisarStock = () => {
    if(stock > 0){  
      
    }else{
      setStock(0);
      setContador(contador);
    }
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