import '../App.css';
import { ItemList } from './ItemList';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { API } from "../assets/constants";

function ItemListContainer (props){

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const url = id ? `${API.CATEGORY}${id}` : API.LIST;
        const getItems = async () => {
            try {
              const respuesta = await fetch(url);
              const data = await respuesta.json();
              setProduct(data);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
              setLoading(false);
            }
          };
          getItems();
        }, [id]);

    return(
        <div>
            <h2>{props.greeting}</h2>
            {
            loading ? (
                <spinner></spinner>
                ) : error ? (
                    <h1>Ocurrio un error</h1>
                  ) : (
                    <ItemList product={product} />
                  )}
        </div>
    );
};

export default ItemListContainer