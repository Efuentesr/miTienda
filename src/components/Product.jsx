
const Product = ({product}) => {
    // const image = `../img/${product["Code"]}.jpg`
    const image = `https://ossisvnlzipyilifvydn.supabase.co/storage/v1/object/public/miTienda/prd-images/${product["Code"]}.jpg`
    const description = product["Description"]
    const stars = `${product["points"]} out of 5 stars`
    const price = `$${product["price"]}`

    return (
        <div className="prd-card">
            <div className="prd-card-detail">
                <div className="prd-card-img">
                    <img className="prd-img" src={image} alt="Product Image" />
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

