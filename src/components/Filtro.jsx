import { families } from "../data/prodFamilies";

const Filtro = ({setShowFiltro}) => {
    return (
        <div id="mostrar-filtro-fijo" >
            <h3 id="cardTitle">Familias de Productos</h3>
            <div id="divMostrar">
                {families.map((family, index) => (
                    <div
                        key={index}
                        id={`div${family}`}
                        style={{ display: "flex", margin: "0px", padding: "0px", gap: "5px" }}
                    >
                        <input
                            id={family}
                            type="checkbox"
                            style={{ margin: "0px", padding: "0px" }}
                        />
                        <label
                            htmlFor={family}
                            style={{ margin: "0px", padding: "0px" }}
                        >
                            {family}
                        </label>
                    </div>
                ))}
            </div>
            <input type="text" style={{ marginBottom: "1rem", padding: "0px" }}/>

            <div >
                <button id="btn-filtrar" className="btn btn-primary"  onClick={()=> setShowFiltro(false)}>Enviar</button>
                <button id="btn-cancelar" className="btn btn-secondary"  onClick={()=> setShowFiltro(false)}>Cancelar</button>
             </div>
            
        </div>
    );
};

export default Filtro;