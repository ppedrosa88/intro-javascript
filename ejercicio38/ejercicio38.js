/**
 * Ejercicio 38
 * Desarollar un algoritmo que nos retore el array introducido por
 * parametros invertido.
 */

function invertArray( array ) {

  let temporaly = 0;
  let newArray = array;
  let arrayLength = array.length;

  for( let i = 0; i < (array.length / 2); i++ ) {
    arrayLength--;
    temporaly = array[i];
    array[i] = newArray[ arrayLength];
    newArray[ arrayLength] = temporaly;
  }

  return newArray;

}

module.exports = { invertArray };
