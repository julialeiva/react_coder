import '../App.css';

const Item = ({products}) => {
    return (
        <div>
            <h4>{products.tittle}</h4>
            <image>{products.pictureUrl}</image>
            <text>{products.price}</text>
            <text>{products.description}</text>
        </div>

     )
}

export {Item}