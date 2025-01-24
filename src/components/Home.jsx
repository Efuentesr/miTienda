import Families from "./Families";

const Home = () => {
    return (
        <>
            <div className="container container-sm container-md container-lg">
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
                    </div>
                    {/* <Families /> */}
                </header>
                <Families />

            </div>

        </>
    )
}
export default Home;