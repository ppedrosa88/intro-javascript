/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */

function maxMinAverageUntilZero( array ) {

  let sum = 0;
  let min = array[0];
  let max = array[0];
  
  for(let i = 0; i < array.length; i++) {

    if( array[i] !== 0 ){
      if( array[i] > max ){
        max = array[i]
      }
      if( array[i] < min ){
        min = array[i]
      }
      sum += array[i]
    }

    if( array[i] === 0 ) {
      console.log('hola')
      return {
        average: sum/i,
        max,
        min
      };
    }
  }

}


maxMinAverageUntilZero([66, 36, 26, 6, 0])
module.exports = { maxMinAverageUntilZero };
