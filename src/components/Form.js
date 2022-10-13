import { React, useState } from "react";
import { Container, FormControl, Input, InputLabel, Grid, Button} from "@mui/material";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useCartContext } from '../CartContext';


function Form() {

    const { cart, total, clear } = useCartContext();
    const [idVenta, setIdVenta] = useState();
    const [data, setData] = useState({
        Nombre:"",
        Email:"",
        Telefono:"",
    });

    const handleInputChange = (event) => {
        setData({
            ...data, [event.target.name] : event.target.value
        });
    };

     const finalizarCompra = ()=>{
        const ventasCollection = collection(db,"ventas");
        addDoc(ventasCollection, {
            comprador: data,
            items: cart,
            date: serverTimestamp(),
            total,
        })
        .then(result=>{
            console.log(result.id);
            setIdVenta(result.id);
              // cart.forEach(producto => {
            //   actualizarStock(producto);
            // });
            clear();
        })
      };

    return (
        <>
            <h4>Gracias por tu compra. Por favor completa tus datos:</h4>
            <Container>
                <Grid>
                    <FormControl>
                        <InputLabel htmlFor="nombre">Nombre Completo</InputLabel>
                        <Input id="nombre" aria-describedby="my-helper-text" name="Nombre" onChange={handleInputChange} />
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" aria-describedby="my-helper-text" name="Email" onChange={handleInputChange} />
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl>
                        <InputLabel htmlFor="telefono">Teléfono</InputLabel>
                        <Input id="telefono" aria-describedby="my-helper-text" name="Telefono" onChange={handleInputChange}/>
                    </FormControl>
                </Grid>
                <Button variant="contained" color="primary" type="submit" onClick={finalizarCompra}>Confirmar datos</Button>
            </Container>
            <h4>Tu número de transacción es: {idVenta}</h4>
        </>

    );
};

export default Form