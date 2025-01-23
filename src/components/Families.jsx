import { families } from "../data/prodFamilies";

const Families = () => {
    return (
        <div id="mostrar-filtro" >
            <h3 id="cardTitle">Familias de Productos</h3>
            <div id="divMostrar">
                {families.map((family, index) => (
                    <div
                        key={index}
                        id={`div${family}`}
                        style={{ display: "flex", margin: "0px", padding: "0px", gap: "5px" }}
                    >
                        {/* <input
                            id={family}
                            type="checkbox"
                            style={{ margin: "0px", padding: "0px" }}
                        /> */}
                        <label
                            htmlFor={family}
                            style={{ margin: "0px", padding: "0px" }}
                        >
                            {family}
                        </label>
                    </div>
                ))}
            </div>
            {/* <button id="btn-filtro" className="btn btn-primary">Enviar</button> */}
        </div>
    );
};

export default Families;