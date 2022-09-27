import React from 'react';
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Item = ({ product }) => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }} style={styles.container} />
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                width="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={styles.title}
                >
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/product/${product.id}`}>
                <Button size="small" color="primary">
                  Ver Detalles
                </Button>
              </Link>
            </CardActions>
        </div>

     )
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "50%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "rgba(249, 220, 92, 0.3)",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  },
};

export {Item}

