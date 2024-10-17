import { createContext, useContext, useState } from 'react';

export const cartContext = createContext();

 const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    return (
        <cartContext.Provider value={[ cart, setCart ]}>
            {children}
        </cartContext.Provider>
    );
};

// Custom hook
const useCart = () => useContext(cartContext);

export { useCart, CartProvider};
