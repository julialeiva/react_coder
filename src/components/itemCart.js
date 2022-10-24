import React from "react";
import { useCartContext } from "../CartContext";
import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        <div style={styles.layout}>
            <Card variant="outlined" style={styles.container}>
                <CardMedia component="img" image={product.image} alt={product.title} style={styles.img} />
                <CardContent style={styles.typography}>
                    <Typography variant="h8" color="text.secondary">Producto: {product.title}</Typography>
                    <Typography variant="h8" color="text.secondary">Cantidad: {product.qty}</Typography>
                    <Typography variant="h8" color="text.secondary">Precio u.: {product.price}</Typography>
                    <Typography variant="h8" color="text.secondary">Subtotal: {product.qty * product.price}</Typography>
                </CardContent>
                <CardActions style={styles.eliminar}>
                    <Button variant="contained" onClick={() => removeProduct(product.id)}>Eliminar</Button>
                </CardActions>
            </Card>
        </div>

    );
};

const styles = {
    layout: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1%",
        marginBotton: "1%",
    },
    container: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1%",
        marginBotton: "1%",
    },
    typography: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        marginTop: "1%",
        marginBotton: "1%",
    },
    img: {
        width: "fit-content",
        height: "150px",
        justifyContent: "center",
        alignItems: "center",
    },
    eliminar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
    },
};

export default ItemCart