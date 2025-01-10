
import {users} from "./users.js"

// ver si hay usuario activo
 // validar si existe 

// let indice = users.findIndex(function(user) {
let indice = users.findIndex((user) => {
   return user.activo === true;
});
if (indice > 0 ) {
   // mostrar si hay usuario activo y dar oportunidad para cerrar sesion
   document.getElementById("initSession").style.display="none";
   document.getElementById("endSession").style.display="block";

   document.getElementById("email").style.display="none"
   document.getElementById("emailActivo").style.display="block"
   document.getElementById("emailActivo").textContent=users[indice].email+ " ** Activo**";
   document.getElementById("emailActivo").style.color="blue";

   document.getElementById("password").style.display="none"
   document.getElementById("passwordLbl").style.display="none"
}


document.getElementById('logIn').addEventListener('submit', function (event) {
  // Prevenir el envío del formulario si hay errores
  event.preventDefault();

  // Obtener los valores de los campos
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validar si los campos están llenos
  if (!email || !password) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // validar si existe 
  let indice = users.findIndex(function(user) {
      return user.email === email;
   });
   if (indice < 0 ) {
      alert('Usuario no existe, ...');
      return;
   }
   if (users[indice].password != password) {
      alert('Error en password ...');
      return ;
   }
  users[indice].activo=true;
  

  
  // Convertir a JSON
  const jsonUsers = JSON.stringify(users, null, 2);
  
  // Crear un blob y un enlace para descarga
  const blob = new Blob([jsonUsers], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'users.json';
  
  // Simular clic para descargar
  link.click();




  // Si todo está bien, enviar el formulario
  alert('Formulario válido. Enviando...');
  event.target.submit(); // Envía el formulario
});
