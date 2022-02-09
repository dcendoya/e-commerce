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

    const deleteItem = (id) => {
        const updatedCart = carrito.filter(e => e.item.id !== id);
        setCarrito(updatedCart);
    }

    const clearCart = () => {
        setCarrito([]);
    }

    const sumaTotal = () => {
        if (carrito.length === 0) {

        } else {
        return (carrito.map((item) => item.item.price * item.cantidad).reduce((a,b) => a + b))
        }
        // Método en una línea que pasó el profesor:
        // carrito.reduce((a, b) => a + (b.item.price * b.cantidad), 0)

    }

    const cantidadTotal = () => {
        return carrito.reduce((a, b) => a + b.cantidad, 0)
    }

    return (
        <>
        <contexto.Provider value={{ carrito, addToCart, deleteItem, clearCart, sumaTotal, cantidadTotal }}> 
            {children}
        </contexto.Provider>
        </>
    )
}