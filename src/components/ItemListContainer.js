import { ItemList } from './ItemList';
import React, { useEffect, useState } from 'react';
import simple from "../assets/simple.png";
import medio from "../assets/medio.png";
import complejo from "../assets/complejo.png"
import ItemCount from './ItemCount';

const products = [
  {id: 1, image: simple, tittle: "Tablero simple de una pestaña"},
  {id: 2, image: medio, tittle: "Tablero medio de dos pestañas"},
  {id: 3, image: complejo, tittle: "Tablero complejo de tres pestañas"},
];

function ItemListContainer (props){

    const [product, setProduct] = useState([]);
    const onAdd = (count) => {
      console.log({count});
      };

    useEffect(() => {
        const getItems = new Promise(resolve => {
          setTimeout(() => {
            resolve(products);

          }, 2000);
        });
          getItems.then(res => setProduct(res));
        }, []);

    return(
        <div>
            <h2>{props.greeting}</h2>
            <ItemList product={product} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    );
};

export default ItemListContainer