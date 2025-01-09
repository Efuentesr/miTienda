import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Presentation from "./components/Presentation";
// import Families from "./components/Families";
import Login from "./LogIn";
import Register from './Register'
import Comprar from './Comprar'
import PrdList from "./PrdList";
import Orders from "./data/Orders";

import "./estilos.css";
import "./myStyle.css";
import "./nav.css";

const App = () => {
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