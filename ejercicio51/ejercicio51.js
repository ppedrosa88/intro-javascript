// Ejercicio_51
// Comprobar si un numero N positivo es primo. Se dice que un numero entero
// positivo N es un numero primo si los unicos enteros positivos que lo
// dividen son exactamente 1 y N (el mismo).

/**
 * Ejercicio 51
 * Comprobar si un numero N positivo es primo. Se diec que un numero entero
 * positivo N es un numero primo si los unicos enteros positivos que lo dividen son
 * exactamente 1 y N (el mismo)
 */

function getPrimeNumber( number ) {
  
  for(let i = 1; i <= number; i++) {
    if( i !== number && i !== 1) {
      if( number % i === 0 ) {
        return false;
      }
    }
  } 
  return true;

}

module.exports = { getPrimeNumber };
