
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
                <div style={{maxWidth: "18rem", margin: "0 1rem"}}>
                    <span  style={{fontSize:"0.8rem"}}> { description } </span>
                    <div style={{margin:"1rem 0", fontWeight: "600"}}> Unit Price: { price } </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", marginRight: "1rem"}}>
                    <div style={{textAlign: "center",  marginBottom: "0.5rem", fontWeight:"600"}}>
                        <span >Quantity</span>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",  }}>
                        <button onClick={substractQty} style={{padding: "0 0.5rem", }}> - </button>
                        <span  style={{padding: "0 0.5rem", margin: "0 auto"}}>{qty}</span>
                        <button onClick={addQty} style={{padding: "0 0.5rem"}}> + </button>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", marginRight: "1rem"}}>
                    <div style={{textAlign: "center",  marginBottom: "0.5rem", fontWeight:"600"}}>
                        <span >Subtotal</span>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",  }}>
                        <span  style={{padding: "0 0.5rem", margin: "0 auto"}}>{qty*Number(product.price)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInCart
