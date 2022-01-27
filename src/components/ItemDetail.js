import React, {useState} from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import ItemCount from "./ItemCount";

export default function ItemDetail ({producto}) {

    const [showItemCount, setShowItemCount] = useState(true);
    
    const [cantidad, setCantidad] = useState(0);

    function sumar(){

        if (cantidad < producto.stock) setCantidad(cantidad + 1);
    }

    function restar() {
        if(cantidad > 0) setCantidad(cantidad - 1);
    }

    function onAdd () {

        alert("Estás por agregar " + JSON.stringify(cantidad) + " " + producto.title + " al carrito.")
        setShowItemCount(false);
    }

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
                            {(showItemCount)?
                            <>
                                <ItemCount onAdd={onAdd} cantidad={cantidad} sumar={sumar} restar={restar} />
                            </>
                            :
                            <>
                                <button style={{borderStyle: "none", backgroundColor: "#ffffff"}}><Link to={"/cart"} style={{borderStyle: "none", borderRadius: "30px", backgroundColor: "#000000", color: "#ffffff", padding: "8px", textTransform: "uppercase", textDecoration: "none", fontWeight: "bold", fontSize: "8.5px"}}>Ver carrito</Link></button>
                            </>
                            }

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