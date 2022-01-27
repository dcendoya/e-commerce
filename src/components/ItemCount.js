import React, {useState} from "react";

export default function ItemCount ({onAdd, cantidad, sumar, restar}){

    return (
        <>
        <div>
            <button onClick={()=>restar()} style={{margin: "10px"}}>-</button>
            {cantidad}
            <button onClick={()=>sumar()} style={{margin: "10px"}}>+</button>
        </div>
        <button onClick={()=>onAdd()} style={{borderStyle: "none", borderRadius: "30px", backgroundColor: "#c6c6c6", padding: "8px", textTransform: "uppercase", fontWeight: "bold", fontSize: "8.5px"}}>Agregá al carrito</button>
        </>
    )
}