const Register = () => {
  return(
    <>
    <div className="container header" style={{display: "flex-column" }}>
      <div className="container container-sm">
        <h1 style={{textAlign: "center", margin: "2rem auto"}} className="title">Registro de Usuario</h1>
        <div className="card p-2">
          <div className="card-body">
            <form action="./index.html" id="register">
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
)}
export default Register;