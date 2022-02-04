import React from "react";
import { Link } from "react-router-dom";
import {BsFillCartFill} from "react-icons/bs";

export default function CartIcon () {
    return (
        <Link to="/cart"><div><BsFillCartFill style={{paddingLeft: "0px", paddingTop: "30px", justifyContent: "center", color: "#000000"}}/></div></Link>
    )
}