/**
 * Ejercicio 35
 * Algoritmo que, cuando reciba un array, retorne la suma de todos los numeros contenidos en el mismo
 */

function sumNumberArray( array ) {
  let sum = 0;

  for( let i = 0; i < array.length; i++ ) {
    sum += array[i];
  }

  return sum;
}

sumNumberArray([1, 2, 4, 5, 6]);

module.exports = { sumNumberArray };
