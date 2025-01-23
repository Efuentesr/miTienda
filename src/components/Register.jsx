import { useState, useEffect, useContext} from "react";
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

const Register = () => {
    const { userEmail, signUpUser, }  = useContext(UserContext);
    const navigate = useNavigate();

    const manejarSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;

      // Obtener los valores de los campos
      const email = event.target.email.value.trim();
      const password = event.target.password.value.trim();
      const confirmPassword = event.target.confirmPassword.value.trim();

      if (!email) {
        alert("El campo Email es obligatorio.");
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
      if (password != confirmPassword) {
          alert('Password ingresados no son iguales ...');
          return ;
      }

      try {
        const result = await signUpUser(email, password);
        console.log(result);
        toast.success(`${result.user.email} registrado!, se envio un correo de activación`, {
          onClose: () => {
            // console.log("Al cerrar!!");
            navigate('/registro');
          },
        });
      } catch (error) {
        toast.error("Ocurrio un error al registrarse");
      }

      form.reset();
      navigate('/registro')
    }

    return(
      <>
        <div className="container header" style={{display: "flex-column" }}>
          <div className="container container-sm">
            <h1 style={{textAlign: "center", margin: "2rem auto"}} className="title">Registro de Usuario</h1>
            <div className="p-2 card">
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
  )
}
export default Register;