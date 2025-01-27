
const ShowFamily = ({family, familyImg}) => {
    // console.log("familia:", family, "familyImg: ", familyImg)
    const image = `https://ossisvnlzipyilifvydn.supabase.co/storage/v1/object/public/miTienda/prd-images/${familyImg}.jpg`;

    return (
        <>
        <div className="show-family">
             <div style={{  height: "13rem", fontSize: "11.2px", backgroundColor: "rgba(0, 0, 0, 0.03)", padding: "12px"}}>
                    <img 
                        style={{maxHeight: "11rem", maxwidth: "17rem", width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply"}} 
                        src={image} 
                        alt="Family Image" 
                    />
            </div>
            <div style={{height:"3rem", textAlign: "center", alignContent: "center"}}>
                <span>{family}</span>
            </div>

        </div>

        </>
    )
}

export default ShowFamily

