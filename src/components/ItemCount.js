import React, {useState} from "react";

export default function ItemCount ({max, min}){

    const [cantidad, setCantidad] = useState(0);

    function sumar(){

        if (cantidad < max) setCantidad(cantidad + 1);
    }

    function restar() {
        if(cantidad > min) setCantidad(cantidad - 1);
    }


    return (
        <>
        <div>
            <button onClick={()=>restar()} style={{margin: "10px"}}>-</button>
            {cantidad}
            <button onClick={()=>sumar()} style={{margin: "10px"}}>+</button>
        </div>
        </>
    )
}