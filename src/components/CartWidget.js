import React from 'react';
import { useCartContext } from '../CartContext';
import carrito from '../assets/carrito.png';


const CartWidget = () => {

    const {totalProducts} = useCartContext();

    return (
        <>
            <img src={carrito} alt="carrito" />
            <span>{totalProducts() || ""}</span>
        </>
    );
};

export default CartWidget
