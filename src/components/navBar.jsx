import React from "react";

export default function NavBar (){
    return (
        <>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{padding: "30px", justifyContent: "center", fontWeight: "bolder"}}>Marca</div>
                <ul style={{listStyleType: "none", margin: "0px", padding: "30px", justifyContent: "center"}}>
                    <li style={{display: "inline", padding: "10px"}}><a href="#" style={{textDecoration: "none", color: "black", fontWeight: "lighter"}}>Home</a></li>
                    <li style={{display: "inline", padding: "10px"}}><a href="#" style={{textDecoration: "none", color: "black", fontWeight: "lighter"}}>Productos</a></li>
                    <li style={{display: "inline", padding: "10px"}}><a href="#" style={{textDecoration: "none", color: "black", fontWeight: "lighter"}}>Contacto</a></li>   
                </ul>
            </div>
        </>
)
}