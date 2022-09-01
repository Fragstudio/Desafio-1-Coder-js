alert("Bienvenido al multiplicador");
let numero = parseInt(prompt("Por favor, Ingrese el numero a multiplicar"));
let limite = parseInt(
  prompt("Ingrese el mumero hasta donde quiere multiplicar")
);

if (limite >= 0) {
  for (let i = 0; i <= limite; i++) {
    let multiplicado = 0;
    multiplicado = numero * i;
    console.log(numero + " " + "* " + i + " " + "= " + multiplicado);
  }
} else {
  alert("El limite ingresado es incorrecto, vuelva a intentar pulsando F5");
}
