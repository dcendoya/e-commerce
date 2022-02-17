import React, {useState} from "react";

export default function ItemCount ({onAdd, cantidad, sumar, restar}){

    return (
        <>
        <div>
            <button onClick={()=>restar()} className="counter">-</button>
            {cantidad}
            <button onClick={()=>sumar()} className="counter">+</button>
        </div>
        <button onClick={()=>onAdd()} className="boton">Agregá al carrito</button>
        </>
    )
}