import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Home from "./components/Home";
// import Families from "./components/Families";
import Login from "./components/LogIn";
import Register from './Register'
import Comprar from './components/Comprar'
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
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/Comprar" element={<Comprar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
        </Routes>  
  
      </div>
    </Router>
  )
}

export default App;