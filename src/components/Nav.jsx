import React, { useState, useRef, useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

const Nav = () => {
    const { userEmail, closeSession } = useContext(UserContext);
    const handleCloseSession = async() => {
        await closeSession();
      }
  
    // console.log('usuario: ', user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false); // Estado para el submenú

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
    const toggleAccountMenu = () => {
        setIsAccountMenuOpen((prev) => !prev);
    };

    // para cerra Toggle menu al elegir un opcion
    const handleLinkClick = () => {
        setIsMenuOpen(false);
        iconRef.current.classList.remove("fa-times");
        iconRef.current.classList.add("fa-bars");

        setIsAccountMenuOpen(false);
    };

    return (
        <>
            <nav className={`navbar bg-primary text-light ${isMenuOpen ? "showNavbar" : ""}`}>
                <div className="navbar-part1">
                    <div>
                        <Link to="/" className="navbar-brand">
                            <span className="logo">MiTienda</span>
                        </Link>
                        {/* <span style={{marginLeft: "10px"}}>User: {user}</span> */}
                        <span style={{marginLeft: "0.5rem", fontSize: "0.9rem"}}>{ userEmail} </span>
                    </div>
                    <button id="navbar-toggler" className="navbar-toggler btn btn-sm btn-close-white" onClick={toggleMenu}>
                        <i id="efrm" className="fa-solid fa-bars" ref={iconRef}></i>
                    </button> 
                </div>
                <div className={`navbar-part2 ${isMenuOpen ? "showNavbar" : ""}`}>
                    <ul className={`navbar-items ${isMenuOpen ? "showItems" : ""}`}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comprar" onClick={handleLinkClick}>Comprar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Cart" onClick={handleLinkClick}>Canasta</Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/orders">Ordenes</Link> */}
                            {userEmail && <Link className="nav-link" to="/orders" onClick={handleLinkClick}>Ordenes</Link>}
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registro">Registro</Link>
                        </li> */}
                        <li className="nav-item dropdown">
                            <button style={{pading: "0px", margin: "0px", fontWeight:"600", marginRight: "2rem"}}className="nav-link btn-dropdown" onClick={toggleAccountMenu}>
                                Account
                            </button>
                            {isAccountMenuOpen && (
                                <ul className="dropdown-menu">
                                    <li>
                                        {!userEmail && 
                                            (
                                                
                                                <Link className="dropdown-item" to="/login" onClick={handleLinkClick}>Login</Link>
                                            )
                                        }
                                    </li>
                                    <li>
                                        {!userEmail && <Link className="dropdown-item" to="/registro" onClick={handleLinkClick}>Registro</Link>}
                                    </li>

                                    <li>
                                        {userEmail && <Link className="dropdown-item" to="/logout" onClick={handleLinkClick}>Logout</Link>}
                                    </li>


                                </ul>
                            )}
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Nav;