import React, {useState, useEffect, createContext} from "react";

export const contexto = createContext();

export default function CartContext ({ children }) {

    const [carrito, setCarrito] = useState([]);

    const addToCart = (producto, count) => {
        if (isInCart (producto.id)) {
            const indexItem = carrito.findIndex(element => element.item.id === producto.id);
            carrito[indexItem].count = carrito[indexItem].count + count;
            setCarrito([...carrito]);
        } else {
        setCarrito([...carrito, {item: producto, count}]);
        } 
    };

    const isInCart = (id) => {
        return (carrito.some(element => element.item.id === id))
    }

    return (
        <>
        <contexto.Provider value={{ carrito, addToCart }}> 
            {children}
        </contexto.Provider>
        </>
    )
}