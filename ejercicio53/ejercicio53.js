/**
 * Ejercicio 53
 * Usar una funcion para calcular el promedio recibiendo un array.
 */

function getAverage( array ) {

  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum/array.length;

}

module.exports = { getAverage };
