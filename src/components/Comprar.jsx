import { products } from '../data/products.js';
import Product from './Product.jsx';


const Comprar = () => {
  // console.log(products)
  return(
  <>
    <div id="filter-and-order" style={{display: "flex", flexDirection: "row", backgroundColor: "var(--css-color)"}}>
      <span>Aqui pondre filtro y ordenamiento</span>
    </div>
    <div className="lista-prod">
        { products.map((product, i) => (
          <div key={i}>
            <Product product={product}/>
          </div>
        ))
        }

    </div>
  </>
)}

export default Comprar