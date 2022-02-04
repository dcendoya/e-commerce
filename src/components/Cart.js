import React from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext } from "react/cjs/react.development";
import { contexto } from "./CartContext";

export default function Cart () {

    const { carrito } = useContext(contexto);
    console.log(carrito);

    return (
        <>
        <div>
            Carrito
        </div>
        </>
    )
}