import React, { useState } from "react";
import "./Style.css"
import { Link } from "react-router-dom";


const Navbar = () => {

    const [nav, setnav] = useState (false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav (true);

        }else {
            setnav (false);
        }
        
    }

    window.addEventListener ("scroll", changeBackground);

    return (
        <nav className = {nav ? "nav active" : "nav"}>
        
        {/* <Link to = "#" className = "logo">
            <img src = {logo} alt = ''/>
        </Link> */}
        
        <input className = "menu-btn" type = "checkbox" id = "menu-btn"/>
        <label className = "menu-icon" htmlFor = "menu-btn">
            <span className = "nav-icon"></span>
        </label>

    <ul className = "menu" >
        <li><Link to = "/"> Home </Link></li>
        <li><Link to = "/saved"> Saved Books </Link></li>
    </ul>

    </nav>

    )
}

export default Navbar;