import React, {useContext, useEffect, useState, useRef } from "react";
import firebase from "firebase";
import { contexto } from "./CartContext";
import { getFirestore } from "../firebase/firebase";

export default function Order () {

    const { carrito, precioTotal } = useContext(contexto);

    const [orderId, setOrderId] = useState();

    const nombreRef = useRef();
    const mobileRef = useRef();
    const emailRef = useRef();
    const provinciaRef = useRef();
    const ciudadRef = useRef();
    const direccionRef = useRef();
    
    function handleClick() {
       
            const db = getFirestore();
            const orders = db.collection("orders");
        
            const miOrden = {
                buyer: {                
                    nombre: nombreRef.current.value,
                    mobile: mobileRef.current.value,
                    email: emailRef.current.value,
                    provincia: provinciaRef.current.value,
                    ciudad: ciudadRef.current.value,
                    direccion: direccionRef.current.value,
    
                },
                items: carrito,
                total: precioTotal,
                date: firebase.firestore.Timestamp.fromDate(new Date())
            }
        
            orders.add(miOrden)
                .then(({id}) => {
                    console.log("Orden ingresada: " + id);
                    setOrderId(id);
                })
                .catch((err) => {
                    console.log(err);
                })

    }





    return (

        <>
            <div>
                <h3>Por favor, completá tus datos para realizar la orden de compra:</h3>

                <input type="text" name="nombre" ref={nombreRef} placeholder="Nombre y Apelllido" />
                <br />

                <input type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" />
                <br />

                <input type="text" name="email" ref={emailRef} placeholder="Email" />
                <br />

                <input type="text" name="provincia" ref={provinciaRef} placeholder="Provincia" />
                <br />

                <input type="text" name="ciudad" ref={ciudadRef} placeholder="Ciudad" />
                <br />

                <input type="text" name="direccion" ref={direccionRef} placeholder="Dirección" />
                <br />

                <button onClick={() => handleClick()} >Iniciar orden</button>
            </div>

            {orderId && (<p>Tu orden de compra es: {orderId}</p>)};
        </>
    )
}