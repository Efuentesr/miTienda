import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Titulo from "./Titulo";
// import Boton from "./Boton";

import Nav from "./components/Nav";
import Presentation from "./Presentation";
import Families from "./Families";
import Login from "./LogIn";
import Register from './Register'
import Comprar from './Comprar'
import PrdList from "./PrdList";
import Orders from "./data/Orders";


import "./estilos.css";
import "./myStyle.css";
import "./nav.css";

// import { families } from "./data/prodFamilies";

const App = () => {
  // const [view, setView] = useState('presentation'); // Estado inicial
  // const renderView = () => {
  //   switch (view) {
  //     case 'presentation':
  //       return <Presentation />;
  //     case 'login':
  //       return <Login />;
  //     case 'register':
  //         return <Register />;
  //     case 'comprar':
  //       return <Comprar />;
  //     case 'contact':
  //       return <Contact />;
  //     case 'prdList':
  //       return <PrdList />;
  //     default:
  //       return <Home />;
  //   }
  // };

  return (
    <Router>
      <Nav />  
      <div>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/Comprar" element={<Comprar />} />
        </Routes>  
  
      </div>
    </Router>
  )
}

export default App;