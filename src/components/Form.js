import { React, useState } from "react";
import { FormControl, Input, InputLabel, Grid, Button } from "@mui/material";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { useCartContext } from '../CartContext';


function Form() {

    const { cart, total, clear } = useCartContext();
    const [idVenta, setIdVenta] = useState();
    const [data, setData] = useState({
        Nombre: "",
        Email: "",
        Telefono: "",
    });

    const handleInputChange = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value
        });
    };

    const finalizarCompra = () => {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            comprador: data,
            items: cart,
            date: serverTimestamp(),
            total,
        })
            .then(result => {
                setIdVenta(result.id);
                cart.forEach(producto => {
                    actualizarStock(producto);
                });
            })
        clear();
    };

    const actualizarStock = (producto) => {
        const updateStock = doc(db, "productos", producto.id);
        updateDoc(updateStock, { stock: (producto.stock - producto.qty) });
    };

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={5} marginTop="5px">
            <Grid item direction="row" justifyContent="center" alignItems="center" rowSpacing={1} marginTop="5px">
                <h4>Por favor completa tus datos:</h4>
            </Grid>
            <Grid item direction="row" justifyContent="center" alignItems="center" rowSpacing={1} marginTop="5px">
                <FormControl>
                    <InputLabel htmlFor="nombre">Nombre Completo</InputLabel>
                    <Input id="nombre" aria-describedby="my-helper-text" name="Nombre" onChange={handleInputChange} />
                </FormControl>
            </Grid>
            <Grid item direction="row" justifyContent="center" alignItems="center" rowSpacing={1} marginTop="5px">
                <FormControl>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" aria-describedby="my-helper-text" name="Email" onChange={handleInputChange} />
                </FormControl>
            </Grid>
            <Grid item direction="column" justifyContent="center" alignItems="center" rowSpacing={1} marginTop="5px">
                <FormControl>
                    <InputLabel htmlFor="telefono">Teléfono</InputLabel>
                    <Input id="telefono" aria-describedby="my-helper-text" name="Telefono" onChange={handleInputChange} />
                </FormControl>
            </Grid>
            <Grid item direction="column" justifyContent="center" alignItems="center" rowSpacing={1} marginTop="5px">
                <Button variant="contained" color="primary" type="submit" onClick={finalizarCompra}>Confirmar datos</Button>
            </Grid>
            <Grid item direction="column" justifyContent="center" alignItems="center" rowSpacing={1} marginTop="5px">
                <h4>Tu número de transacción es: {idVenta}</h4>
            </Grid>
            <Grid item direction="column" justifyContent="center" alignItems="center" rowSpacing={1} marginTop="5px">
                {idVenta 
                ? <h4>Gracias por tu compra!</h4> : ""}
            </Grid>
        </Grid>
    );
};

export default Form