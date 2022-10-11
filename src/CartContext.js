import React, { useContext, useState, useEffect } from 'react';
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);


    const getQuantity = () => {
        let qty = 0;
        cart.forEach(product => qty += product.qty);
        setQuantity(qty);
    };

    const getTotal = () => {
        let t = 0;
        cart.forEach(product => t += product.qty * product.price);
        setTotal(t);
    };

    useEffect(() => {
        getQuantity();
        getTotal();
        // eslint-disable-next-line
    }, [cart]);

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
    };

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));
    };
  
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const clear = () => {
        setCart([]);
        setQuantity(0);
        setTotal(0);
    };

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.qty, 0);

    return (
        <Provider value={{ addProduct, removeProduct, clear, isInCart, total, totalProducts, quantity, cart}}>
            {children}
        </Provider>
    );
};

export default CartProvider