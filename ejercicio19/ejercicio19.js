/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */

function mediaArrayHastaMenosUno( array ) {
    let average = 0;
    if(array[0] === -1){
      console.log('-1 en posicion 0')
      return average;
    }
    for(let i = 0; i < array.length; i++) {
      if( array[i] !== -1 ){ 
        average += array[i]
      } else {
        return average/i;
      }
    }
}

module.exports = { mediaArrayHastaMenosUno };
