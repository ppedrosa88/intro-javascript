/**
 *  Ejercicio 16
 *  Desarrollar un algoritmo que nos calcule el cuadrado de los 9
 *  primeros numeros naturales. La funcion debera retornar un array
 *  con el resultado de estos nueve numeros ([1,4,9...])
 */

function cuadraroNumerosNaturales() {
  let square = [];

  for( let i = 0; i <= 9; i++ ) {
    square[i] = i*i;
  }
  return square;
}

module.exports = { cuadraroNumerosNaturales };
