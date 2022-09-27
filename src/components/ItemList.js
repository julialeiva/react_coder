import React from 'react';
import {Item} from "./Item";

export const ItemList = ({ product }) => {
  return(
    <div style={styles.container}>
      {product.map((product) =>
          <Item key={product.id} product={product} />
      )}
    </div> 
  );
};

const styles = {
  container:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "100%",
  },
};


