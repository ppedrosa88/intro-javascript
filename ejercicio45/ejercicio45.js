/**
 * Ejercicio 45
 * Generar un algoritmo que tras recibir por parametros un array, nos genere otro pero solamente
 * incluyendo aquellos que sean pares y mayores de 25. Si el numero en una posicion no cumpliese las
 * condiciones el algoritmo rellenara su hueco con un 0.
 */

function generarVector( array ) {

  let newPairArrayOver25 = [];

  for(let i = 0; i < array.length; i++) {
    if( array[i] > 25 &&  array[i] % 2 === 0 ){
      newPairArrayOver25[i] = array[i];
    } else {
      newPairArrayOver25[i] = 0;
    }
  }

  return newPairArrayOver25;

}

module.exports = { generarVector };
