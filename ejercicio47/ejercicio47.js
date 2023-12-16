/**
 * Ejercicio 47
 * Generar un algoritmo que reciba un array y retorne otro con los numeros ordenados de forma descendente
 */

function ordenar( array ) {
  
  let newSortedArrayDesc = array;
  let temp = 0;

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if( newSortedArrayDesc[i] > newSortedArrayDesc[j] ) {
        temp = newSortedArrayDesc[i];
        newSortedArrayDesc[i] = newSortedArrayDesc[j];
        newSortedArrayDesc[j] = temp;
      }
    }
  }

  return newSortedArrayDesc;

}

module.exports = { ordenar };
