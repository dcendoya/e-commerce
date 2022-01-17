import React, {useState} from "react";
import ItemCount from "./ItemCount";

export default function Producto ({item}) {

    function onAdd(){
        alert('Estás por agregar al carrito:' + ' ' + item.nombre);
    }

    return (
        <>
            <div style={{marginBottom: "80px", width: "fit-content", padding: "30px", borderRadius: "30px", boxShadow: "rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px"}}>
            <p style={{textTransform: "capitalize", fontWeight: "bold"}}>{item.nombre} {item.color}</p>
            <p>Stock del producto: {item.stock}</p>
                <div>
                    <ItemCount max={item.stock} min='0' />
                    <button onClick={()=>onAdd()} style={{borderStyle: "none", borderRadius: "30px", backgroundColor: "#c6c6c6", padding: "8px", textTransform: "uppercase", fontWeight: "bold", fontSize: "8.5px"}}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}