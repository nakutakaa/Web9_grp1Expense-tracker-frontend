import React from "react";
import {Link} from "react-router-dom"
import "../../css/Layout.css"

export default function Navbar(){
    return(
        <div className="Navbar-body">
            <div className="Logo">
                <img src="/Logo.jpeg" alt="Zingo Track" />

            </div>
            <div className="Navlinks">
                <Link to="/">HOME</Link>
                <Link to="/Login">LOGIN</Link>
                <Link to="/Register">REGISTER</Link>
            

            </div>

        </div>
    )
}