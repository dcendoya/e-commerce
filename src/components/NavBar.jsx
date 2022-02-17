import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CartIcon from "./CartWidget";

export default function NavBar (){
    return (
        <>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{padding: "30px", justifyContent: "center", fontWeight: "bolder"}}><Link to={"/"} style={{textDecoration: "none", color:"black"}}>Pure™</Link></div>
                <ul style={{listStyleType: "none", margin: "0px", padding: "30px", justifyContent: "center"}}>
                    <li style={{display: "inline", padding: "10px"}}><Link to={"/"} style={{textDecoration: "none", color: "black", fontWeight: "lighter"}}>Home</Link></li>
                    <li style={{display: "inline", padding: "10px"}}><Link to={"/catalogo/tops"} style={{textDecoration: "none", color: "black", fontWeight: "lighter"}}>Top Wear</Link></li>
                    <li style={{display: "inline", padding: "10px"}}><Link to={"/catalogo/bottoms"} style={{textDecoration: "none", color: "black", fontWeight: "lighter"}}>Bottom Wear</Link></li>
                </ul>
                <CartIcon style={{display: "inline"}}/>
            </div>
        </>
)
}