import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

const Nav = ({user}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Ref para manejar el ícono del botón de menú
    const iconRef = useRef(null);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        // Cambiar las clases del ícono manualmente usando refs
        if (iconRef.current) {
            if (isMenuOpen) {
                iconRef.current.classList.remove("fa-times");
                iconRef.current.classList.add("fa-bars");
            } else {
                iconRef.current.classList.remove("fa-bars");
                iconRef.current.classList.add("fa-times");
            }
        }
    };

    return (
        <>
            <nav className={`navbar bg-primary text-light ${isMenuOpen ? "showNavbar" : ""}`}>
                <div className="navbar-part1">
                    <div>
                        <Link to="/" className="navbar-brand">
                            <span className="logo">MiTienda</span>
                        </Link>
                        <span style={{marginLeft: "10px"}}>User: {user}</span>
                    </div>
                    <button id="navbar-toggler" className="navbar-toggler btn btn-sm btn-close-white" onClick={toggleMenu}>
                        <i id="efrm" className="fa-solid fa-bars" ref={iconRef}></i>
                    </button> 
                </div>
                <div className={`navbar-part2 ${isMenuOpen ? "showNavbar" : ""}`}>
                    <ul className={`navbar-items ${isMenuOpen ? "showItems" : ""}`}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comprar">Comprar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/orders">Ordenes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registro">Registro</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Nav;