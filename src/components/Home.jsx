import Families from "./Families";

const Home = () => {
    return (
        <>
            <div className="container container-sm container-md container-lg">
                <header id="header" className="header d-flex">
                    <div className="header-content mb-1">
                        <h1 className="title header-title fs-xxl mb-2">
                            Encuentre los productos que busca
                        </h1>
                        <p >
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