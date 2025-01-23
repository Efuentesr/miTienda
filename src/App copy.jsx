import React, { useState } from "react";

// import Titulo from "./Titulo";
// import Boton from "./Boton";

import Nav from "./components/Nav";
import Presentation from "./components/Home";
import Families from "./Families";
import Login from "./components/LogIn";
import Register from './Register'
import Comprar from './components/Comprar'
import PrdList from "./PrdList";

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
      case 'prdList':
        return <PrdList />;
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