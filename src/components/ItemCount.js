import React, { useState } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

  const [count, setCount] = useState(initial);

  const add = () => {
      if (count < stock) {
          setCount(count + 1);
      }
  };

  const subtract = () => {
      if (count > initial) {
          setCount(count - 1);
      }
  };

  const agregar = () => {
    setCount(initial)
    onAdd(count)
  }

  return (
     <div>
        <button onClick={subtract}>-</button>
        <div>{count}</div>
        <button onClick={add}>+</button>
        <button onClick={agregar}>Agrega al carrito</button>
    </div>
);
};

export default ItemCount;