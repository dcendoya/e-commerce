import React, {useState} from "react";
import Producto from "./Producto";

export default function ArrayProductos () {
    const [listaProductos, setListaProductos] = useState([
        {nombre: 'remera', color: 'blanca', stock: 6},
        {nombre: 'top', color: 'negro', stock: 4},
        {nombre: 'musculosa', color: 'verde', stock: 2}        
    ])

    return (
        <>
            {listaProductos.map(item=> <Producto item={item}/>)}
        </>
    )
}