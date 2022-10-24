import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";

const ItemCount = ({ initial, stock, onAdd }) => {

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
                <Button variant="contained" disabled={count <= 1} onClick={subtract}>-</Button>
                <h4 style={styles.count} >{count}</h4>
                <Button variant="contained" disabled={count >= stock} onClick={add}>+</Button>
            </div>
            <div style={styles.agregaralcarrito}>
                <Button variant="contained" disabled={stock <= 0} onClick={() => onAdd(count)}>Agrega al carrito</Button>
            </div>
        </div>
    );
};

const styles = {
    contador: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    count: {
        margin: "6%",
    },
    masmenos: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "1%",
    },
    agregaralcarrito: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "1%",
    },
};

export default ItemCount;