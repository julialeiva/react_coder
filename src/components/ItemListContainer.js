import { ItemList } from './ItemList';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { CircularProgress } from "@mui/material";

function ItemListContainer(props) {

    const { categoryId } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const q = categoryId
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos');

        getDocs(q)
            .then(result => {
                const lista = result.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setProduct(lista);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [categoryId]);

    return (
        <div>
            <h2 style={styles.h2}>{props.greeting}</h2>
            {loading ? <CircularProgress color="success" /> : <ItemList product={product} />}
        </div>
    );
};

const styles = {
    h2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "2%",
    },
};

export default ItemListContainer