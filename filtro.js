const families = [
    "Laptops",
    "Desktops",
    "Tablets",
    "Mobiles",
    "Accesorios"
];

let cardTitleLen=document.getElementById("cardTitle").offsetWidth;
console.log("width del titulo: ", cardTitleLen);
// inspecciona los elementos del arreglo, y crea el <input type="checkbox"> + <label>> por c/u.
let listOfFamiliesLen=0;
families.forEach(creaCheckBoxes);
// calcula y fija el width del html
cardTitleLen = (cardTitleLen < listOfFamiliesLen) ? listOfFamiliesLen: cardTitleLen ;
listOfFamiliesLen = `${listOfFamiliesLen}px`;
cardTitleLen = `${cardTitleLen+20}px`;
document.getElementById("listOfFamilies").style.width=listOfFamiliesLen;
document.getElementById("cardTitle").style.width=cardTitleLen;
document.getElementById("mostrar-filtro").style.width=cardTitleLen;
console.log("width: ", cardTitleLen)
console.log("listoffamilyLen: ", listOfFamiliesLen);

function creaCheckBoxes(family){
    // Crea <div> don ubicara el checkbox y su label
    let division = document.createElement("div");
    division.id = family;
    division.style.display="flex";
    division.style.margin="0px";
    division.style.padding="0px";
    division.style.gap="5px";
    document.getElementById("listOfFamilies").appendChild(division);
    // Crea checkbox y lo añade al div
    let checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.style.margin="0px";
    document.getElementById(family).appendChild(checkbox);
    // Crea label y lo añade al div
    let label = document.createElement("label");
    label.innerHTML=family;
    label.style.margin="0px";
    label.style.padding="0px";
    document.getElementById(family).appendChild(label);
    // actualiza el width para la lista
    let divWidth=parseInt(document.getElementById(family).offsetWidth);
    listOfFamiliesLen = ( listOfFamiliesLen < divWidth ) ? divWidth : listOfFamiliesLen
}

document.getElementById('mostrar-filtro').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    const div = document.getElementById('div-filtro');
    div.style.display = 'block';
});

document.getElementById('btn-filtro').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    const div = document.getElementById('div-filtro');
    div.style.display = 'none';
    div.style.backgroundColor='white';
});
