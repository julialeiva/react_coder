import React from 'react';
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

const Item = ({ product }) => {
  return (
    <div style={styles.layout}>
      <Card variant="outlined" sx={{ maxWidth: 345 }} style={styles.container}>
        <CardMedia component="img" style={styles.img} image={product.image} alt={product.title} />
        <CardContent style={styles.title}>
          <Typography gutterBottom variant="h6" style={styles.title}>
            {product.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions style={styles.verdetalles}>
          <Link to={`/product/${product.id}`}>
            <Button variant="contained">Ver Detalles</Button>
          </Link>
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
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1%",
    marginBotton: "1%",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "fit-content",
    height: "150px",
    justifyContent: "center",
    alignItems: "center",
  },
  verdetalles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
  },

};

export { Item }

