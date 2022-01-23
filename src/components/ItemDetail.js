import React, {useState} from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import ItemCount from "./ItemCount";

export default function ItemDetail ({producto}) {

    return (
        <>

            {(producto.id) ?
                <>
                    
                    <div style={{marginBottom: "80px", width: "fit-content", padding: "30px", borderRadius: "30px", boxShadow: "rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px"}}>
                    <div><img src={producto.url} style={{width: "200px"}}/></div>
                    <p style={{textTransform: "capitalize", fontWeight: "bold", fontSize: "18px"}}>{producto.title} color {producto.color}</p>
                    <p style={{textTransform: "capitalize", fontSize: "18px"}}>${producto.price}</p>
                    <p style={{fontSize: "14px"}}>{producto.description}</p>
                    <p style={{fontSize: "14px"}}>Stock del producto: {producto.stock}</p>
                        <div>
                            <ItemCount max={producto.stock} min='0' />
                        </div>
                    </div>

                </>
            

            :

            <>
                <p>Cargando producto. Esperá unos segundos.</p>
            </>
            }
            

        </>
    )
}