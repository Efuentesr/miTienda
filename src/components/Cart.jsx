import { cartProducts } from '../data/cartProducts.js';
import ProductInCart from './ProductInCart.jsx';

const Cart = () => {
  // console.log(products)
  return(
  <>
    {/* <div className="lista-prod" > */}
    <div style={{display: "flex", flexDirection: "column"}} >
        { cartProducts.map((product, i) => (
          <div key={i} style={{display: "flex", flexDirection: "row", gap:"2rem"}}>
            <ProductInCart product={product}/>
            <div>
              Qty {product.qtyToBuy}
            </div>
            <div>
              Product Price {product.qtyToBuy*product.price}
            </div>
          </div>
        ))
        }

    </div>
  </>
)}

export default Cart