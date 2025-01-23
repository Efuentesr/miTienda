import { useState, useEffect, useContext } from "react";
import { requestUsers } from "../services/userService";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { userEmail,signInUser, closeSession }  = useContext(UserContext);

    const navigate = useNavigate();
    // const [users, setUsers] = useState([]);

    const handleCloseSession = async() => {
      await closeSession();
    }

    const manejarSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        if (event.nativeEvent.submitter.name==="logout"){
            handleCloseSession();
            form.reset();
            return
        }
        if (event.nativeEvent.submitter.name==="register"){
          navigate('/registro');
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

        // setUser(email);

        try {
          const result = await signInUser(email, password)
            console.log("result: ", result.user.email)
            toast.success(`${result.user.email} Ingreso exitosamente!`, {
              onClose: () => {
                navigate('/')
              }
          })
        } catch (error) {
          console.log(error);
          toast.error(`Sucedio un error: ${error.message}, pruebe nuevamente!`)
        }
    

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
                <div className="form-group">
                    {/* <button name="logout" id={`${!userEmail ? "none-display" : "display-01"}`} className="btn btn-secondary" type="submit">Logout</button> */}
                    { userEmail && <button name="logout" className="btn btn-secondary" type="submit">Logout</button> }
                    {/* <button name="login" id={`${userEmail ? "none-display" : "display-02"}`} className="btn btn-primary" type="submit">Login</button>  */}
                    { !userEmail && <button name="login" className="btn btn-primary" type="submit">Login</button> }
                    {/* <button name="register" id={`${userEmail ? "none-display-02" : "display-03"}`} className="btn btn-primary" type="submit">Registrarse</button>  */}
                    { !userEmail && <button name="register"  className="btn btn-primary" type="submit">Registrarse</button> }
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
