


const Login = () => {
  return(
    <>
      <div className="container header" style={{display: "flex-column" }}>
        <div className="container container-sm">
          <h1 style={{textAlign: "center", margin: "2rem auto"}} className="title">Ingreso</h1>
          <div className="card">
            <div className="card-body">
              <form action="./LogIn.html" id="logIn">
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
                  <button id="initSession" className="btn btn-primary" type="submit">Ingresar</button>
                  <button id="endSession" className="btn btn-secondary" type="submit">Cerrar Sesion</button>
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