import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Home from "./components/Home";
// import Families from "./components/Families";
import Login from './components/LogIn.jsx'
import Register from './components/Register.jsx'
import Comprar from './components/Comprar'
import PrdList from "./PrdList";
import Orders from "./components/Orders";

import "./estilos.css";
import "./myStyle.css";
import "./nav.css";

const App = () => {
  const [user, setUser] = useState('nobody@nowhere.com')
  return (
    <BrowserRouter>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Nav user={user}/>  
      <div           style={{
            flex: 1, // Ocupa el espacio restante
            overflowY: 'auto', // Permite el desplazamiento vertical
          }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/Comprar" element={<Comprar />} />
          <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
          <Route path="/registro" element={<Register  user={user} setUser={setUser} />} />
        </Routes>  
  
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App;