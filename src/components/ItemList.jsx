import React, {useState, useEffect} from "react";
import Item from "./Item";

export default function ItemList ({initialPromise, listaProductos}) {
    

   
    return (
        <>
            {(initialPromise) ?
                <>
                    {listaProductos.map(item => <Item item={item}/>)}
                </>
            

            :

            <>
                <p>Cargando productos. Esperá unos segundos.</p>
            </>
            }
        
        </>
    )
}