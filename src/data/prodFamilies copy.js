export const prodFamilies = {
    families: [
        "Laptops",
        "Desktops",
        "Tablets",
        "Mobiles",
        "Accesorios"
    ],
    mostrarFamilias: function () {
        // const divMostrar = document.createElement("div");
        // divMostrar.setAttribute("id", "divMostrar");
        let myHtml="<><div id='divMostrar'>"
        this.families.forEach( function(family){
            // console.log(family);
            myHtml += `
                <div id="div${family}" style={{display: 'flex', margin: '0px', padding: '0px', gap: '5px'}}>
                    <input id="${family}" type="checkbox" style={{margin: '0px', padding: '0px'}}">
                    <label htmlFor="${family}" style={{margin: '0px', padding: '0px'}}>${family}</label>
                </div>
`
        })
        // divMostrar.innerHTML=myHtml;
        myHtml += "</div></>"
        // return divMostrar;
        return (myHtml)
      },
};
