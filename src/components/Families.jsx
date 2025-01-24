import { families } from "../data/prodFamilies";
import { familiesImg } from "../data/prodFamiliesImg";
import ShowFamily from "./ShowFamily";

const Families = () => {
    // console.log(familiesImg)
    return (
        <div>
        {/* <div id="mostrar-filtro" > */}
            {/* <h2 id="cardTitle" style={{marginBottom: "1rem"}}>Familias de Productos</h2> */}
            <div className="grid-families" >
                {families.map((family, index) => (
                    <div
                        key={index}
                        id={`div${family}`}
                        style={{ display: "flex", margin: "0px auto", padding: "0px", gap: "5px" }}
                    > 
                        <ShowFamily family={family} familyImg={familiesImg[family]} />
                    </div>
                ))}
            </div>
            {/* <button id="btn-filtro" className="btn btn-primary">Enviar</button> */}
        </div>
    );
};

export default Families;