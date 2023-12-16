/* 1. Comprobar si un string es palindromo.
Se dice que un string es palindromo cuando se puede leer igual de izquierda a derecha que de derecha a izquierda. */

/**
 * Ejercicio Palindrome
 * Generar un algoritmo que nos compruebe si el string introducido es un palindromo. Se dice que un
 * string es palindromo cuando se puede leer igual de izquierda a derecha que de derecha a izquierda
 */

function palindrome( word ) {
  
  for(let i = 0; i < word.length/2; i++) {
    if( word[i] !== word[word.length - i - 1] ) {
      return false;
    }
  }

  return true;
}

module.exports = { palindrome };


// r a c e c a r
// 0 1 2 3 4 5 6

// length: 7