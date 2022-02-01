import React from "react";
import { NavLink } from "react-router-dom";
//import './Navbar.css';


export default function Navbar (){

    return (
        <ul>
            <li>
                <NavLink to="/libro">
                    Libros
                </NavLink>
            </li>
            <li>
                <NavLink to="/cliente">
                    Clientes
                </NavLink>
            </li>
        </ul>
    );

}