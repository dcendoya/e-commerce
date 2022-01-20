import React, {useState} from "react";

export default function ItemCount ({item, max, min}){

    const [cantidad, setCantidad] = useState(0);

    function sumar(){

        if (cantidad < max) setCantidad(cantidad + 1);
    }

    function restar() {
        if(cantidad > min) setCantidad(cantidad - 1);
    }

    function onAdd () {

        alert("Estás por agregar al carrito " + JSON.stringify(cantidad) + " productos.")
    }

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