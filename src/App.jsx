import React, { useState } from "react";

// import Titulo from "./Titulo";
// import Boton from "./Boton";

import Nav from "./nav";
import Presentation from "./Presentation";
import Families from "./Families";
import Login from "./LogIn";
import Register from './Register'
import Comprar from './Comprar'

import "./estilos.css";
import "./myStyle.css";
import "./nav.css";

// import { families } from "./data/prodFamilies";

const App = () => {
  const [view, setView] = useState('presentation'); // Estado inicial
  const renderView = () => {
    switch (view) {
      case 'presentation':
        return <Presentation />;
      case 'login':
        return <Login />;
      case 'register':
          return <Register />;
      case 'comprar':
        return <Comprar />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Nav setView = { setView } />  
      <div>
        { renderView() }
      </div>
    </>
  )
}

export default App;