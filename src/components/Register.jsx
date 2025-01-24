import { useState, useEffect, useContext} from "react";
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Register = () => {
    const { userEmail, signUpUser, }  = useContext(UserContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors}, watch } = useForm()    // register permite identificar cada input dentro del formulario

    // const manejarSubmit = async (event) => {
    //   event.preventDefault();
    //   const form = event.target;

    //   // Obtener los valores de los campos
    //   const email = event.target.email.value.trim();
    //   const password = event.target.password.value.trim();
    //   const confirmPassword = event.target.confirmPassword.value.trim();

    //   if (!email) {
    //     alert("El campo Email es obligatorio.");
    //     return;
    //   }
    //   if (!password) {
    //     alert("El campo Password es obligatorio.");
    //     return;
    //   }
    //   if (!confirmPassword) {
    //     alert("El campo confirmacion de Password es obligatorio.");
    //     return;
    //   }
    //   if (password != confirmPassword) {
    //       alert('Password ingresados no son iguales ...');
    //       return ;
    //   }

    //   try {
    //     const result = await signUpUser(email, password);
    //     console.log(result);
    //     toast.success(`${result.user.email} registrado!, se envio un correo de activación`, {
    //       onClose: () => {
    //         // console.log("Al cerrar!!");
    //         navigate('/registro');
    //       },
    //     });
    //   } catch (error) {
    //     toast.error("Ocurrio un error al registrarse");
    //   }

    //   form.reset();
    //   navigate('/registro')
    // }

    const workSubmit = async (data) => {
      // console.log("data en workSubmit: ", data)
      // sign up user in supabase
      try {
        const result = await signUpUser(data.email, data.password);
        console.log(result);
        toast.success(`${result.user.email} registrado!, se envio un correo de activación`, {
        onClose: () => {
          // console.log("Al cerrar!!");
          navigate('/registro');
        },
        });
      } catch (error) {
        alert(`Error: ${error}`)
        toast.error("Ocurrio un error al registrarse");
      }
      
    }
    return(
      <>
        <div className="container header" style={{display: "flex-column" }}>
          <div className="container container-sm">
            <h1 style={{textAlign: "center", margin: "2rem auto"}} className="title">Registro de Usuario</h1>
            <div className="p-2 card">
              <div className="card-body">
               <form id="singUp" onSubmit={handleSubmit(workSubmit)}>
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
                          }})
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
                          }})
                      }
                    />
                  </div>             
                  {
                      errors.password && <span style={{color: "red", fontSize:"0.8rem"}} >{errors.password.message}</span>
                  }
                  <div className="form-group">
                    <label id="passwordLbl2" htmlFor="password2">Password</label>
                    <input
                      type="password"
                      // name="password2"
                      id="password2"
                      className="form-control"
                      placeholder="Confirme su password"
                      {...register("password2", {
                          required: {
                            value: true,
                            message: "Confirmacion de password es requerida"
                          },
                          validate: (value) => {
                            if ( value === watch("password")) {
                              return true;
                            } else {
                              return "Confirmacion de password debe coincidir con password";
                            }
                          }
                        })
                      }
                    />
                  </div>             
                  {
                      errors.password2 && <span style={{color: "red", fontSize:"0.8rem"}} >{errors.password2.message}</span>
                  }
                  <div className="form-group">
                    <button className="btn btn-primary" type="submit">Registrar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
export default Register;