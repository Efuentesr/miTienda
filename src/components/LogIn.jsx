import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";

import { UserContext } from "../contexts/UserContext";

const Login = () => {
    const { userEmail, signInUser, closeSession }  = useContext(UserContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors} } = useForm()    // register permite identificar cada input dentro del formulario

    const handleCloseSession = async() => {
      await closeSession();
    }

    // ejemplo de manejo de submit en form de html
    // const manejarSubmit = async (event) => {
    //     event.preventDefault();
    // }
    
    const workSubmit = async (data) => {
      // console.log("data en workSubmit: ", data)
      // sign up user in supabase
      try {
        const result = await signInUser(data.email, data.password)
        toast.success(`${result.user.email} Ingreso exitosamente!`, {
        onClose: () => {
              navigate('/')
            }
        })
      } catch (error) {
        alert(`Error: ${error}`)
        // console.log(error);
        // toast.error(`Sucedio un error: ${error}, pruebe nuevamente!`)
      }
      
    }


    return(
      <>
        <div className="my-container header" style={{display: "flex-column" }}>
          <div className="my-container container-sm">
            <h1 style={{textAlign: "center", margin: "2rem auto"}} className="title">Login</h1>
            <div className="card">
              <div className="card-body">

                <form id="logIn" onSubmit={handleSubmit(workSubmit)}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      // name="email"
                      id="email"
                      className="form-control"
                      placeholder="Ingrese su email"
                      {...register("email", {
                          required: {
                            value: true,
                            message: "Email es requerido"
                          }
                        })
                      }
                    />
                    {
                      errors.email && <span style={{color: "red", fontSize:"0.8rem"}} >{errors.email.message}</span>

                    }
                  </div>
                  <div className="form-group">
                    <label id="passwordLbl" htmlFor="password">Password</label>
                    <input
                      type="password"
                      // name="password"
                      id="password"
                      className="form-control"
                      placeholder="Ingrese su password"
                      {...register("password", {
                          required: {
                            value: true,
                            message: "Password es requerido"
                          }
                        })
                      }
                    />
                  </div>             
                  {
                      errors.password && <span style={{color: "red", fontSize:"0.8rem"}} >{errors.password.message}</span>
                  }
                  <div className="form-group">
                      { !userEmail && <button name="login" className="btn btn-primary" type="submit">Login</button> }
                  </div>
                </form>
                {/* { userEmail && <button name="logout" className="btn btn-secondary" onClick={handleCloseSession}>Logout</button> } */}
              </div>
            </div>
          </div>
        </div>    
      </>
    )
}
export default Login;
