/**
 * Ejercicio sum7
 * Escribe una función que tome un array de numeros enteros de mas de 3 elementos
 * y retorne true si 3 elementos consecutivos suman 7
 */

function lucky_sevens( array ) {

  for(let i = 0; i < array.length - 2; i++) {
    let sum = 0;
    for(let j = 0; j < 3; j++){
      sum += array[i + j];
    }
    if( sum === 7 ) {
      return true;
    }
  }
  
  return false;

}

module.exports = { lucky_sevens };
