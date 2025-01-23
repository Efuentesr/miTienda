import { useState, useEffect} from "react";
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom'


import { createUser } from "../services/userService";

const Register = () => {
  const [users, setUsers] = useState([]);
  const [userRecord, setUserRecord] = useState({
    email:"",
    name:"",
    password:""
  })


  const navigate = useNavigate();


  const manejarSubmit = (event) => {
      event.preventDefault();
      const form = event.target;

      if (event.nativeEvent.submitter.name==="logout"){
        setUser('nobody@nowhere.com')
        form.reset();
        return
      }

      // Obtener los valores de los campos
      const email = event.target.email.value.trim();
      const name = event.target.name.value.trim();
      const password = event.target.password.value.trim();
      const confirmPassword = event.target.confirmPassword.value.trim();


      if (!email) {
        alert("El campo Email es obligatorio.");
        return;
      }
      if (!name) {
        alert("El campo nombre es obligatorio.");
        return;
      }


      if (!password) {
        alert("El campo Password es obligatorio.");
        return;
      }
      if (!confirmPassword) {
        alert("El campo confirmacion de Password es obligatorio.");
        return;
      }

      // validar si existe no puede ser create
      let indice = users.findIndex(function(user) {
          return user.email === email;
      });
      if (indice > 0 ) {
          alert('Usuario ya existe existe, ...');
          return;
      }
      if (password !=confirmPassword) {
          alert('Password ingresados no son iguales ...');
          return ;
      }

      userRecord["nombre"]=`$name`
      userRecord["email"]=`$mail`
      userRecord["password"]=`$name`

      const grabar = async (userRecord) => {
        await createProduct(userRecord)
        await Swal.fire({
          title: "Usuario creado",
          text: `${usuario.nombre} con exito`,
          icon: "success"
        })
      }
      grabar(userRecord);
      setUser(user);



    form.reset();
    navigate('/')

  }

  // useEffect(() => {
  //   const getUsers = async () => {
  //     //solicitamos los productos
  //     const usersObtained = await requestUsers();
  //     //actualizamos el estado cuando los obtenemos
  //     setUsers(usersObtained);
  //   }
  //   getUsers(); //ejecutamos la función
  //   console.log(users)
  // }, []) //dejamos el array de dependencias de useEffect para que se ejecute solo 01 vez


  return(
    <>
    <div className="container header" style={{display: "flex-column" }}>
      <div className="container container-sm">
        <h1 style={{textAlign: "center", margin: "2rem auto"}} className="title">Registro de Usuario</h1>
        <div className="p-2 card">
          <div className="card-body">
            <form form id="logIn" onSubmit={manejarSubmit}>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Ingrese su email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Ingrese su nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Ingrese su password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirmar Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirme Password ingresado"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
)}
export default Register;