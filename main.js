//Se precisa un algoritmo que reciba por prompt el mail del usuario y que valide si este mail contiene un "@".
//Para ello se precisará un bucle que pueda recorrer cada caracter de este valor y que en base a una condición,
//refleje como alerta si "Es un mail válido" o "Es un mail inválido", en el caso de que no contenga "@".

let email = prompt("Ingrese su email");
let emailRegistrado = "michael123@gmail.com";
arroba = false;
for (let i = 0; i < email.length; i++) {
  if (email[i] === "@") {
    arroba = true;
    break;
  }
}
if (arroba) {
  if (arroba == true && emailRegistrado === email) {
    alert("Sesion iniciada");
  } else if (arroba == true) {
    alert("Correo no registrado");
  }
} else alert("Invalido");
