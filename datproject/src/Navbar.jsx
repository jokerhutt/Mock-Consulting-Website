import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { useState } from "react";
import "./Navbar.css"



function Navbar ({handleMenuOpen, handleClick, isClicked}) {
    return(
        <div className="navbarcs">
            <div className="icons">
                <FaInstagram className="icon" color="white"/>
                <FaFacebookF className="icon" color="white"/>
                <FaLinkedinIn className="icon" color="white"/>
            </div>
            <div className="logoname">
                <h1>DGP</h1>
            </div>
            <div className="wheel" onClick={handleMenuOpen}>
                <img className="rotation" src="/rote.png"/>
                <h1 className={`plussy ${isClicked ? 'clicked' : ''}`} 
        onClick={handleClick}>+ </h1>
            </div>
        </div>

    )
}

export default Navbar;