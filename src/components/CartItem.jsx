import React, {useContext} from "react";
import { contexto } from "./CartContext";

export default function CartItem ({ prod }) {

    const { deleteItem } = useContext(contexto);

    return (
        <div style={{marginBottom: "80px", width: "fit-content", padding: "30px", borderRadius: "30px", boxShadow: "rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px"}}>
        <p style={{textTransform:"capitalize"}}>{prod.item.title}</p>
        <p>Cantidad: {prod.cantidad}</p>
        <p>Subtotal: ${prod.item.price * prod.cantidad}</p>
        <button onClick={() => deleteItem(prod.item.id)} style={{borderStyle: "none", borderRadius: "30px", backgroundColor: "#c6c6c6", padding: "8px", color: "#000000", textTransform: "uppercase", textDecoration: "none", fontWeight: "bold", fontSize: "8.5px"}}>Quitar</button>
        </div>
    )
}