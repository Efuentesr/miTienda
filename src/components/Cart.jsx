import { useState, useEffect }  from "react";
import { cartProducts } from '../data/cartProducts.js';
import ProductInCart from './ProductInCart.jsx';

const Cart = () => {
  const [qty, setQty] = useState(0)
  // console.log(products)
  const valorQty = () => {
    setQty(product.qtyToBuy)
  }
  const substractQty = ()=>{
    if (qty>1) {
      setQty(qty-1)
    }
  }
  const addQty = ()=>{
    setQty(qty+1)
  }

  
  return(
  <>
    {/* <div className="lista-prod" > */}
    <div style={{display: "flex", flexDirection: "column"}} >
        { cartProducts.map((product, i) => (
          
          <div key={i} style={{display: "flex", flexDirection: "row", gap:"2rem"}}>
            {/* {setQty(product.qtyToBuy)} */}
            <ProductInCart product={product}/>
          </div>
        ))
        }

    </div>
  </>
)}

export default Cart