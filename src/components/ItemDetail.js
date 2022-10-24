import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

const ItemDetail = ({ product }) => {

  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (count) => {
    addProduct({ ...product, qty: count });
    setCompraFinalizada(true);
  };

  return (
    <div style={styles.layout}>
      <Card variant="outlined" style={styles.container}>
        <CardMedia component="img" image={product.image} alt={product.title} style={styles.img} />
        <CardContent style={styles.typography}>
          <Typography variant="h8" color="text.secondary">{product.title}</Typography>
          <Typography variant="h8" color="text.secondary">${product.price}</Typography>
          <Typography variant="h8" color="text.secondary">{product.description}</Typography>
        </CardContent>
        <CardActions>
          <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={2} marginTop="1px">
            {compraFinalizada
              ? <Grid item><Link to="/cart"><Button variant="contained">Ir al carrito</Button></Link></Grid>
              : <ItemCount initial={1} stock={5} onAdd={onAdd} />}
            <Grid item><Link to="/"><Button variant="contained">Seguir comprando</Button></Link></Grid>
          </Grid>
      </CardActions>
    </Card>
    </div >
  );
};

const styles = {
  layout: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1%",
    marginBotton: "1%",
  },
  container: {
    display: "flex",
    width: "50%",
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
};

export default ItemDetail