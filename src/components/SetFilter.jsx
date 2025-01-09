import React from 'react'

const SetFilter = () => {
    return (
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
    )
}

export default SetFilter

