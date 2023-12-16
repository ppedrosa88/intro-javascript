/**
 * Ejercicio 48
 * Crear un algoritmo que reciba un array de nombres y los devuelva ordenados
 * alfabeticamente.
 *
 * Pista: Los datos alfanumerico (strings) tambien se pueden comparar con los operadores
 * '<' y '>'
 */

function ordenarArray( array ) {

  let newSortedArrayDesc = array;
  let temp = 0;

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if( newSortedArrayDesc[i] < newSortedArrayDesc[j] ) {
        temp = newSortedArrayDesc[i];
        newSortedArrayDesc[i] = newSortedArrayDesc[j];
        newSortedArrayDesc[j] = temp;
      }
    }
  }

  return newSortedArrayDesc;


}

module.exports = { ordenarArray };
