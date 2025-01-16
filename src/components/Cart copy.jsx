import { cartProducts } from '../data/cartProducts.js';
import Product from './Product.jsx';


const Cart = () => {
  // console.log(products)
  return(
  <>
    {/* <div className="lista-prod" > */}
    <div style={{display: "flex", flexDirection: "row"}} >
        { cartProducts.map((product, i) => (
          <div key={i}>
            Hola
            {/* <Product product={product}/> */}
          </div>
        ))
        }

    </div>
  </>
)}

export default Cart