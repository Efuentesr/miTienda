import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { products } from '../data/products.js';


const ProductDetail = () => {
    const { id } = useParams();
    const product = products[id]
    const image = `https://ossisvnlzipyilifvydn.supabase.co/storage/v1/object/public/miTienda/prd-images/${product["Code"]}.jpg`
    const description = product["Description"]
    const stars = `${product["points"]} out of 5 stars`
    const price = `$${product["price"]}`

    return (
        <div style={{  position: "fixed", top: "20%",  left: "35%", border: "1px solid #d5d9d9", width: "22rem", height: "34rem", borderRadius: "6px" }}>
            <div style={{height: "30rem"}}>
                <div className="prd-card-img">
                    <img className="prd-img" src={image} alt="Product Image" />
                </div>
                <div className="prd-card-descr">
                    <span style={{fontSize:"0.8rem", margin: "1rem"}}> { description } </span>
                    <div className='prd-stars'> { stars } </div>
                    <div className='prd-price'> { price } </div>
                </div>
            </div>
            <div  >
                <button style={{padding: "0.2rem", margin: "1rem 2rem"}}>Añadir a Canasta</button>
                <Link to="/comprar" style={{fontSize:"0.9rem", color: "black", padding: "2px 6px", borderRadius: "100px",  background: "#ffd814",  border: "#ffd814 1px solid"}}>Seguir Comprando</Link>
            </div>

        </div>
    )
}

export default ProductDetail