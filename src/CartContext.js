import React, { useContext, useState, useEffect } from 'react';
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const getQuantity = () => {
        let qty = 0;
        cart.forEach(product => qty += product.qty);
        setQuantity(qty);
    }

    useEffect(() => {
        getQuantity();
        // eslint-disable-next-line
    }, [cart])

    console.log(cart)

    const addProduct = (product) => {
        if (isInCart(product.id)) {
            const found = cart.find(p => p.id === product.id);
            const index = cart.indexOf(found);
            const aux = [...cart];
            aux[index].qty += product.qty;
            setCart(aux);
        } else {
            setCart([...cart, product]);
        };
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const clear = () => {
        setCart([]);
    };

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.quantity, 0);
    };

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    return (
        <Provider value={{ addProduct, removeProduct, clear, isInCart, totalPrice, totalProducts, quantity, cart}}>
            {children}
        </Provider>
    );
};

export default CartProvider