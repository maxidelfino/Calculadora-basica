function sumar (num1,num2) {
  let res = parseInt(num1) + parseInt(num2);
  return res;
}
function restar (num1,num2) {
  let res = parseInt(num1) - parseInt(num2);
  return res;
}
function dividir (num1,num2) {
  let res = parseInt(num1) / parseInt(num2);
  return res;
}
function multiplicar (num1,num2) {
  let res = parseInt(num1) * parseInt(num2);
  return res;
}

let nombre = prompt(`Ingrese su nombre`);
if (nombre == "") {
  alert(`No ingresaste ningún nombre`);
}
else {
  let opera = prompt (`Hola ${nombre} ¿Que operación deseas realizar?
  1:Sumar - 2:Restar - 3:Multiplicar - 4:Dividir - 0:Para salir`);
  while (opera != 0) {
    if (opera == 1) {
      let num1 = prompt (`Primer numero para sumar`);
      let num2 = prompt (`Segundo numero para sumar`);
      let res = sumar (num1,num2);
      alert(`Tu resultado es ${res}`);
      opera = prompt (`Hola ${nombre} ¿Que operación deseas realizar?
      1:Sumar - 2:Restar - 3:Multiplicar - 4:Dividir - 0:Para salir`);
    }
    else if (opera == 2) {
      let num1 = prompt (`Primer numero para restar`);
      let num2 = prompt (`Segundo numero para restar`);
      let res = restar (num1,num2);
      alert(`Tu resultado es ${res}`);
      
      opera = prompt (`Hola ${nombre} ¿Que operación deseas realizar?
      1:Sumar - 2:Restar - 3:Multiplicar - 4:Dividir - 0:Para salir`);
    }
    else if (opera == 3) {
      let num1 = prompt (`Primer numero para multiplicar`);
      let num2 = prompt (`Segundo numero para multiplicar`);
      let res = multiplicar (num1,num2);
      alert(`Tu resultado es ${res}`);
      opera = prompt (`Hola ${nombre} ¿Que operación deseas realizar?
      1:Sumar - 2:Restar - 3:Multiplicar - 4:Dividir - 0:Para salir`);
    }
    else if (opera == 4) {
      let num1 = prompt (`Primer numero para dividir`);
      let num2 = prompt (`Segundo numero para dividir`);
      let res = dividir (num1,num2);
      alert(`Tu resultado es ${res}`);
      opera = prompt (`Hola ${nombre} ¿Que operación deseas realizar?
      1:Sumar - 2:Restar - 3:Multiplicar - 4:Dividir - 0:Para salir`);
    }
    else if (opera == 0){
      alert(`Hasta pronto ${nombre}`);
    }
    else {
      alert(`No se ha encontrado la operación`);
      opera = prompt (`Hola ${nombre} ¿Que operación deseas realizar?
      1:Sumar - 2:Restar - 3:Multiplicar - 4:Dividir - 0:Para salir`);
    }
  }
  alert(`Hasta pronto ${nombre}`);
}

