import React, {useState, useEffect, createContext} from "react";

export const contexto = createContext();

export default function CartContext ({ children }) {

    const [carrito, setCarrito] = useState([]);

    const addToCart = (producto, cantidad) => {
        if (isInCart (producto.id)) {
            const indexItem = carrito.findIndex(element => element.item.id === producto.id);
            carrito[indexItem].cantidad = carrito[indexItem].cantidad + cantidad;
            setCarrito([...carrito]);
        } else {
        setCarrito([...carrito, {item: producto, cantidad}]);
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