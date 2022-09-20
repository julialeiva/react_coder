import '../App.css';
import ItemCount from './ItemCount';
import { ItemList } from './ItemList';
import { products } from '../assets/products';
import { customFetch } from '../utils/customFetch';
import { useEffect, useState } from 'react';

function ItemListContainer (props){

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
            })  
    },[]);

    return(
        <div>
            <h2>{props.greeting}</h2>
            {
            loading ?
                <spinner></spinner>
                :
                <ItemList listProducts={listProducts}/>
            }
            <ItemCount initial={1} initialStock={10} onAdd={() => {}}/>
            
        </div>
    )
};

export default ItemListContainer