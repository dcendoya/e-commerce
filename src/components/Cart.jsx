import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext } from "react/cjs/react.development";
import { contexto } from "./CartContext";
import CartItem from "./CartItem";

export default function Cart () {

    const { carrito, clearCart, precioTotal, cantidadTotal } = useContext(contexto);


    return (
        <>
            {carrito.length === 0 ?
                <>
                    <div>
                        <p>El carrito está vacío</p>
                        <Link to="/" style={{borderStyle: "none", borderRadius: "30px", backgroundColor: "#bababa", color: "#000000", padding: "8px", textTransform: "uppercase", textDecoration: "none", fontWeight: "bold", fontSize: "10px"}}>¡Comenzá a comprar!</Link>
                    </div>
                </>
                :
                <div style={{marginLeft:"20px"}}>
                    <div>
                        {carrito.map(e => <CartItem key={e.item.id} prod={e} />)}
                    </div>
                    <p>Monto total a abonar: ${precioTotal}</p>
                    <p>Cantidad total de productos: {cantidadTotal}</p>
                    <button onClick={() => clearCart()} style={{borderStyle: "none", borderRadius: "30px", backgroundColor: "#000000", color: "#ffffff", padding: "8px", textTransform: "uppercase", textDecoration: "none", fontWeight: "bold", fontSize: "8.5px"}}>Vaciar carrito</button>
                    <Link to={"/order"} style={{borderStyle: "none", borderRadius: "30px", backgroundColor: "#c6c6c6", padding: "8px", color: "#000000", textTransform: "uppercase", textDecoration: "none", fontWeight: "bold", fontSize: "8.5px"}}>Iniciar compra</Link>
                </div>
            }
        </>
    )
}