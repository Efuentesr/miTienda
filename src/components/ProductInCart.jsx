
const ProductInCart = ({product}) => {
    // const image = `../img/${product["Code"]}.jpg`
    const image = `https://ossisvnlzipyilifvydn.supabase.co/storage/v1/object/public/miTienda/prd-images/${product["Code"]}.jpg`
    const description = product["Description"]
    const stars = `${product["points"]} out of 5 stars`
    const price = `$${product["price"]}`

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
            </div>
        </div>
    )
}

export default ProductInCart

