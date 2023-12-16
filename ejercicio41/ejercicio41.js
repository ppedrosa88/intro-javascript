/**
 * Ejercicio 41
 * Generar un algoritmo que genere un array aleatorio con longitud y numero maximo
 * introducido por parametros.
 *
 * Retornar el promedio de los numeros positivos, cuantos numeros son mayores que 0 y
 * el promedio de todos los numeros
 */

function generarArray( N, max ) {

  let array = []

  for( let i = 0; i < N; i++ ) {
    let randomNumber = Math.floor((Math.random() * max/2));
    let positiveOrNegative = Math.round(Math.random() + 1 );

    if( positiveOrNegative === 0 ) {
      array[i] = randomNumber * -1
    } else {
      array[i] = randomNumber
    }
  }
  return array;
}

function calculosArray( array ) {

  // let negative = 0;
  // let positive = 0;

  // for( let i = 0; i < array.length; i++ ) {
  //   if( array[i] <= 0 ){
  //     negative++;
  //   } else {
  //     positive++;
  //   }
  // }

  // averageNegative = 
  // averagePositive = 

}

module.exports = { generarArray, calculosArray };
