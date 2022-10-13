import React, { useState, useEffect } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(parseInt(initial))
  }, [initial])

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

  return (
     <div style={styles.contador}>
        <div style={styles.masmenos}>
            <button disabled={count <= 1} onClick={subtract}>-</button>
            <div>{count}</div>
            <button disabled={count >= stock} onClick={add}>+</button>
        </div>
        <div style={styles.agregaralcarrito}>
            <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agrega al carrito</button>
        </div>
    </div>
);
};

const styles = {
    contador: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
    masmenos: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    agregaralcarrito: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
};

export default ItemCount;