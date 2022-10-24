import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';

export const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'productos');
        const refDoc = doc(productsCollection, id);
        getDoc(refDoc).then(result => {
            setProduct({
                id: result.id,
                ...result.data(),
            })
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id]);

    return (
        <div>
            <h2>{props.greeting}</h2>
            {loading ? <CircularProgress color="success" /> : <ItemDetail product={product} />}
        </div>
    );
};

export default ItemDetailContainer