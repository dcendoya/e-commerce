import React, {useState} from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Item ({item}) {

    return (
        <>
            <div style={{marginBottom: "80px", width: "fit-content", padding: "30px", borderRadius: "30px", boxShadow: "rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px"}}>
            <div><img src={item.url} style={{width: "200px"}}/></div>
            <p style={{textTransform: "capitalize", fontWeight: "bold", fontSize: "18px"}}>{item.title} color {item.color}</p>
            
            <p style={{textTransform: "capitalize", fontSize: "18px"}}>${item.price}</p>
            <button style={{borderStyle: "none", borderRadius: "30px", backgroundColor: "#c6c6c6", padding: "8px", textTransform: "uppercase", fontWeight: "bold", fontSize: "8.5px"}}>Ver detalle</button>
            </div>

        </>
    )
}