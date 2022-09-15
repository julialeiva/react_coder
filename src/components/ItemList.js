import '../App.css';
import {Item} from "./Item";

const ItemList = ({listProducts}) => {
  return(
    <>
    {listProducts.map((prod, i) => <Item key={'${prod.tittle}-${i}'} products={prod}/> )}
    </>  
  )
}

export {ItemList}
