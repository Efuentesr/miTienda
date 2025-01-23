import { useEffect, useRef, useState } from 'react';
import { BsArrowUpCircleFill} from 'react-icons/bs';

import Product from './Product.jsx';
import { products } from '../data/products.js';
import Filtro from './Filtro.jsx';


const Comprar = () => {
  const headRef = useRef();
  const [showFiltro, setShowFiltro] = useState(false)

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
        <b className='btn btn-secondary' onClick={()=> setShowFiltro(true)}>Filtros</b>
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
    </div>
    {/* Modal  */}
    { showFiltro && <Filtro  setShowFiltro={setShowFiltro} />}
  </>
)}

export default Comprar