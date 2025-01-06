import React, { useState } from "react";

// import Titulo from "./Titulo";
// import Boton from "./Boton";

import Nav from "./nav";
import Presentation from "./Presentation";
import Families from "./Families";
import Login from "./LogIn";

import "./estilos.css";
import "./myStyle.css";
import "./nav.css";

import { families } from "./data/prodFamilies";
// console.log(families)
// const saludar = () => {
//   alert("Hola click");
// }
// const myHr="<hr />"
// el nombre componente tiene que comenzar con Mayuscula
const App = () => {
  // tiene que retornar un solo elemento
  // console.log("Prueba")
  // const titulo = "!! Hola React !!"

  const [view, setView] = useState('presentation'); // Estado inicial
  const renderView = () => {
    switch (view) {
      case 'presentation':
        return <Presentation />;
      case 'login':
        return <Login />;
      case 'services':
        return <Services />;
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
      {/* <Presentation /> */}
      <Login />

      <h1>*********</h1>
      {/* <Families /> */}
      <h1>*********</h1>
      <hr />

      {/* <Titulo texto={ titulo } region="Lima" />
      <Titulo texto="Hello world" region="Arequipa" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, praesentium? { 10+ 20 }</p>
      <hr />
      <button onClick={ saludar } className="texto-verde">Click</button>
      <Boton texto="CLickea" accion={saludar} /> */}
    </>
  )
}

export default App;