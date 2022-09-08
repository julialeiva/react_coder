import '../App.css';
import ItemCount from './ItemCount';

function ItemListContainer (props){
    return(
        <div>
            <h2>{props.greeting}</h2>
            <ItemCount />
        </div>
    )
}

export default ItemListContainer