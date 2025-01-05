// const navbarToggler = document.querySelector(".navbar-toggler");
const navbarToggler = Nav.getElementById("efrm");

// console.log("este es navBarToggler: ",navbarToggler);
let navbarTogglerIcon = navbarToggler.querySelector("i").classList;

document.getElementById("navbar-toggler").addEventListener("click", () => {
  let myNavbarPart2=document.querySelector(".navbar-part2");
  console.log(myNavbarPart2)
  myNavbarPart2.querySelector(".navbar-items").classList.toggle("showItems");
  let myNavbar=document.querySelector(".navbar");
  myNavbar.classList.toggle("showNavbar");
  if (navbarTogglerIcon.contains("fa-bars")) {
    navbarTogglerIcon.remove("fa-bars");
    navbarTogglerIcon.add("fa-times");
  } else {
    navbarTogglerIcon.remove("fa-times");
    navbarTogglerIcon.add("fa-bars");
  }
});
