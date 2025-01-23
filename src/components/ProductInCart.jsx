
import { useState, useEffect } from "react"

const ProductInCart = ({product}) => {
    // const image = `../img/${product["Code"]}.jpg`
    const image = `https://ossisvnlzipyilifvydn.supabase.co/storage/v1/object/public/miTienda/prd-images/${product["Code"]}.jpg`
    const description = product["Description"]
    const stars = `${product["points"]} out of 5 stars`
    const price = `$${product["price"]}`

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
    useEffect(()=>{
        setQty(Number(product.qtyToBuy))        
    },[])

    return (
        // <div className="prd-card">
        <div>
            <div className="prd-card-detail" style={{display: "flex", flexDirection: "row"}}>
                <div className="prd-card-img">
                    <img className="prd-img" src={image} alt="Product Image" />
                </div>
                <div className="prd-card-descr" style={{maxWidth: "18rem"}}>
                    <span className="prd-summary"> { description } </span>
                    <div className='prd-price'> Unit Price{ price } </div>
                </div>

                <div style={{display: "flex", flexDirection: "column", marginRight: "1rem"}}>
                    <span>Qty {qty}</span>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <button onClick={substractQty} style={{padding: "0 0.5rem", marginRight: "1rem"}}> - </button>
                        <button onClick={addQty} style={{padding: "0 0.5rem"}}> + </button>
                    </div>
                </div>

                <div>
                    Product Total Price: {qty*Number(product.price)}
                </div> 

            </div>
        </div>
    )
}

export default ProductInCart
