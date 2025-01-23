import React, { useState, useRef } from "react";

const Nav = ({ setView }) => {

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

    const callFiltro = () => {
        window.alert("call filtro");
    };

    return (
        <>
            {/* <nav className="navbar bg-primary text-light"> */}
            <nav className={`navbar bg-primary text-light ${isMenuOpen ? "showNavbar" : ""}`}>


                <div className="navbar-part1">

                    {/* <a className="navbar-brand" href="#" onClick={() => setView('presentation')}> */}
                    <a className="navbar-brand" href="#" onClick={() => {
                        console.log('click on miTienda');
                    
                        setView('presentation');
                        }}
                    >


                        <span className="logo">MiTienda</span>
                    </a>
                    <ul className="navbar-items" >
                        <li className="nav-item">
                            <a className="nav-link" href="#"  onClick={callFiltro}>Filtro</a>
                        </li>
                        <li className="nav-item">
                            <div style={{display: 'flex'}}>
                                <label htmlFor="search">
                                    <i style={{fontSize: '20px', color: 'white'}} 
                                        className="fa-solid fa-magnifying-glass">
                                    </i>
                                </label>
                                <input id="search" type="text" />
                            </div>
                        </li>
                    </ul>
                    {/* <button id="navbar-toggler" className="navbar-toggler btn btn-sm btn-close-white" > */}
                    <button id="navbar-toggler" className="navbar-toggler btn btn-sm btn-close-white" onClick={toggleMenu}>
                        {/* <i id="efrm" className="fa-solid fa-bars"></i> */}
                        <i id="efrm" className="fa-solid fa-bars" ref={iconRef}></i>
                    </button> 
                </div>
            
                {/* <div className="navbar-part2">
                    <ul className="navbar-items"> */}

                <div className={`navbar-part2 ${isMenuOpen ? "showNavbar" : ""}`}>
                    <ul className={`navbar-items ${isMenuOpen ? "showItems" : ""}`}>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => setView('comprar')}>Comprar</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => setView('login')}>Ingreso</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => setView('register')}>Registro</a>
                    </li>
            
                    <li className="nav-item">
                        <a className="nav-link" href="./orders.html">Ordenes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => setView('prdList')}>PrdList</a>
                    </li>
                    </ul>
                </div>
                
            </nav>

        </>
    )
}
export default Nav;