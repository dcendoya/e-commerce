import React, {useState} from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail ({starterPromise, listaProductosDetail}) {

    return (
        <>

            {(starterPromise) ?
                <>
                    {listaProductosDetail.map(item => (
                            <div style={{marginBottom: "80px", width: "fit-content", padding: "30px", borderRadius: "30px", boxShadow: "rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px"}}>
                            <div><img src={item.url} style={{width: "200px"}}/></div>
                            <p style={{textTransform: "capitalize", fontWeight: "bold", fontSize: "18px"}}>{item.title} color {item.color}</p>
                            <p style={{textTransform: "capitalize", fontSize: "18px"}}>${item.price}</p>
                            <p style={{fontSize: "14px"}}>{item.description}</p>
                            <p style={{fontSize: "14px"}}>Stock del producto: {item.stock}</p>
                                <div>
                                    <ItemCount max={item.stock} min='0' />
                                </div>
                            </div>
                    ))}
                </>
            

            :

            <>
                <p>Cargando productos. Esperá unos segundos.</p>
            </>
            }
            

        </>
    )
}