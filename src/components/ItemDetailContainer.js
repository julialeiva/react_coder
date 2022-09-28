import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { API } from "../assets/constants";

export const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const url = `${API.PRODUCTO}${id}`;
        const getItem = async () => {
        try {
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            setProduct(data);
        } catch (error){
            console.error(error);
            setError(true);
        } finally {
            setLoading(false)
        };
        };
        getItem();
    }, [id]);

    return (
        <div>
        <h2>{props.greeting}</h2>
        {loading ? (
            <spinner></spinner>
            ) : error ? (
                <h1>Ocurrio un error</h1>
              ) : (
                <ItemDetail product={product} />
              )}    
        </div>
    );
};

export default ItemDetailContainer