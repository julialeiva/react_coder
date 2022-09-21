import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = (props) => {

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getItem = async () => {
        try {
            const respuesta = await fetch("http://fakestoreapi.com/products/2");
            const data = await respuesta.json();
            setProducto(data);
        } catch (err){
            console.log("Un error: ", err);
        } finally {
            setLoading(false)
        }
        };
        getItem();
    }, []);

    return (
        <div>
        <h2>{props.greeting}</h2>
        {
        loading ?
            <spinner></spinner>
            :
            <ItemDetail producto={producto}/>
        }
               
    </div>
    )
}

export default ItemDetailContainer