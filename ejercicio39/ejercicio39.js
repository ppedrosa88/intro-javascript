/**
 * Ejercicio 39
 * Desarrollar un algoritmo que compruebe si los dos arrays introducidos son iguales
 */

function sonIguales( array1, array2 ) {
  for(let i = 0; i < array1.length; i++) {
    if( array1[i] !== array2[i] ) {
      return false;
    } 
  }
  return true;
}

sonIguales([1,2,3,4],[1,2,6,4]);

module.exports = { sonIguales };
