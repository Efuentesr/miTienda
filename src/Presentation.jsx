import Families from "./Families";

const Presentation = () => {
    console.log('Me llamaron');
    return (
        <>
            <div className="container container-lg">
                <header id="header" className="header d-flex">
                    <div className="header-content mb-2">
                        <h1 className="title header-title fs-xxl mb-3">
                            Encuentre los productos que busca
                        </h1>
                        <p className="header-text mb-3">
                            Seleccione los productos que uds. requiere en el catalogo, o comuniquese 
                            con nosotros a traves de whatsapp al numero 9777888765, estaremos gustosos
                            de acompañarlo.
                        </p>
                        {/* <div className="header-btn">
                            <a href="./comprar.html" className="btn btn-primary text-light"
                            >Comprar</a>
                            <a href="#offers" className="btn btn-secondary">Inicio</a>
                        </div> */}
                    </div>
                    <Families />
                </header>
            </div>
            {/* {prodFamilies.mostrarFamilias()} */}
        </>
    )
}
export default Presentation;