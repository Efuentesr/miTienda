import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Home from "./components/Home";
// import Families from "./components/Families";
import Login from './components/LogIn.jsx'
import Register from './components/Register.jsx'
import Comprar from './components/Comprar'
import Cart from "./components/Cart";
import PrdList from "./PrdList";
import Orders from "./components/Orders";
import CheckOut from "./components/CheckOut.jsx";

import "./estilos.css";
import "./myStyle.css";
import "./nav.css";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import CloseSession from "./components/CloseSession.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

const App = () => {
  // const [user, setUser] = useState('nobody@nowhere.com')
  return (
    <BrowserRouter>
      <UserContextProvider>
        {/* {console.log(user)} */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Nav />  
          <div           style={{
                flex: 1, // Ocupa el espacio restante
                overflowY: 'auto', // Permite el desplazamiento vertical
              }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comprar" element={<Comprar />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/orders" element={<Orders />} />
              {/* <Route path="/login" element={<Login user={user} setUser={setUser}/>} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<CloseSession />} />
              <Route path="/registro" element={<Register />} />
            </Routes>  
      
          </div>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App;