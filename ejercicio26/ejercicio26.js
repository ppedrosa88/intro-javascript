/**
 *  Ejercicio 26
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calcule el cubo de cada uno de ellos. Recuerda la estructura For;
 */

function cuboNumerosArray( array ) {

  for(let i = 0; i < array.length; i++) {
    console.log(`El cubo de ${array[i]} es ${Math.pow(array[i], 3)}`);
  }
}

module.exports = { cuboNumerosArray };
