import { useEffect, useRef, useState } from 'react';
import { BsArrowUpCircleFill} from 'react-icons/bs';

import Product from './Product.jsx';
import { products } from '../data/products.js';


const Comprar = () => {
  const [goTop, setGoTop] = useState(true);
  const headRef = useRef();
  
  const scrollPosition = () =>{
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setGoTop(true);
    } else {
      setGoTop(false);
    }
  }

  const goToTop = () => {
    headRef.current.scrollIntoView();
  }
  
  return(
  <>
    <div 
      ref={headRef} 
      id="filter-and-order" 
      style={{display: "flex", flexDirection: "row",  justifyContent: 'center'}}
    >
        <b className='btn btn-secondary'>Filtros</b>
    </div>
    <div className="lista-prod" >
        <BsArrowUpCircleFill 
          style={{fontSize: "30px", fontWeight: "600", color:"orange",  position: "fixed", bottom: "20px", right: "20px", zIndex: "100"}}
          onClick={goToTop}
        />
        { products.map((product, i) => (
          <div key={i}>
            <Product product={product}/>
          </div>
        ))
        }
        {/* <BsArrowUpCircleFill className="goTop" /> */}
    </div>
    {
      // goTop && <BsArrowUpCircleFill className="goTop" />
    }
  </>
)}

export default Comprar