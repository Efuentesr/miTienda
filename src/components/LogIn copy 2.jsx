import { useState, useEffect } from "react";
import { requestUsers } from "../services/userService";
const Login = ({user, setUser}) => {
  
    const [users, setUsers] = useState([]);

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
        const password = event.target.password.value.trim();

        if (!email) {
          alert("El campo Email es obligatorio.");
          return;
        }
        if (!password) {
          alert("El campo Password es obligatorio.");
          return;
        }

        // validar si existe 
        let indice = users.findIndex(function(user) {
            return user.email === email;
        });
        if (indice < 0 ) {
            alert('Usuario no existe, ...');
            return;
        }
        if (users[indice].password != password) {
            alert('Error en password ...');
            return ;
        }
        setUser(email);
    }
  
    useEffect(() => {
      const getUsers = async () => {
        //solicitamos los productos
        const usersObtained = await requestUsers();
        //actualizamos el estado cuando los obtenemos
        setUsers(usersObtained);
      }
      getUsers(); //ejecutamos la función
      console.log(users)
    }, []) //dejamos el array de dependencias de useEffect para que se ejecute solo 01 vez

  return(
    <>
      <div className="container header" style={{display: "flex-column" }}>
        <div className="container container-sm">
          <h1 style={{textAlign: "center", margin: "2rem auto"}} className="title">Login</h1>
          <div className="card">
            <div className="card-body">
              <form id="logIn" onSubmit={manejarSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Ingrese su email"
                  />
                  <label id="emailActivo"></label>
                </div>
                <div className="form-group">
                  <label id="passwordLbl" htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Ingrese su password"
                  />
                </div>             
                <div classn="form-group">
                    <button name="logout" id={`${user==="nobody@nowhere.com" ? "none-display" : "display"}`} className="btn btn-secondary" type="submit">Logout</button>
                    <button name="login" id={`${user!="nobody@nowhere.com" ? "none-display" : "display"}`} className="btn btn-primary" type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}
export default Login;
