// Ejercicio_50
// Hacer un algoritmo que cuente las veces que aparece una determinada
// letra en una frase que introduciremos por teclado.

/**
 * Ejercicio 50
 * Hacer un algoritmo que cuente las veces que aparece una determinada
 * letra en una frase que introduciremos por parametros.
 */

function contarLetraEnOracion( phrase, char ) {
  
  let count = 0;

    for( let i = 0; i < phrase.length; i++ ) {
      if( phrase[i] === char ){
        count++;
      }
    }

    return `La letra a está ${count} veces repetida`;

}

module.exports = { contarLetraEnOracion };
