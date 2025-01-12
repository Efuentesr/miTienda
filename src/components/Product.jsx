
const Product = ({product}) => {
    const image = `../img/${product["Code"]}.jpg`
    const description = product["Description"]
    const stars = `${product["points"]} out of 5 stars`
    const price = `$${product["price"]}`

    return (
        <div className="prd-card">
            <div className="prd-card-detail">
                <div className="prd-card-img">
                    <img
                    src={image}
                    alt="Product Image"
                    style={{width: "100%", height: "100%", objectFit: "cover"}}
                    />
                </div>
                <div className="prd-card-descr">
                    <span className="prd-summary"> { description } </span>
                    <div className='prd-stars'> { stars } </div>
                    <div className='prd-price'> { price } </div>
                </div>
            </div>
            <div className="prd-card-button">
                <button>Añadir a Canasta</button>
            </div>
        </div>
    )
}

export default Product

