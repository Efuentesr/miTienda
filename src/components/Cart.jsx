import { useState, useEffect, useRef }  from "react";
import { cartProducts } from '../data/cartProducts.js';
import ProductInCart from './ProductInCart.jsx';
import { useNavigate } from "react-router-dom";
import { BsArrowUpCircleFill} from 'react-icons/bs';

const Cart = () => {
  const headRef = useRef();
  const goToTop = () => {
    headRef.current.scrollIntoView();
  }

  const [qty, setQty] = useState(0)
  const navigate = useNavigate();
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
    <div 
      ref={headRef} 
      id="checkout" 
      style={{display: "flex", flexDirection: "row",  justifyContent: 'center'}}
    >
        <b className='btn btn-secondary' onClick={() => navigate("/checkout")}>Check Out</b>
    </div>

    {/* <div className="lista-prod" > */}
    <div style={{display: "flex", flexDirection: "column"}} >
        <BsArrowUpCircleFill 
          style={{fontSize: "30px", fontWeight: "600", color:"orange",  position: "fixed", bottom: "20px", right: "20px", zIndex: "100"}}
          onClick={goToTop}
        />
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