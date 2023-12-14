/**
 *  Ejercicio 17
 *  Crea un algoritmo que nos calcule la suma de los N primeros numeros
 *  naturales que seran introducidos como parametro de la funcion.
 *  La funcion retornara la suma.
 */

function calcularSumaNumerosNaturales( N ) {

  let sum = 0;
  for( let i = 1; i <= N; i++ ){
    sum += i;
  }

  return sum;
}

module.exports = { calcularSumaNumerosNaturales };
