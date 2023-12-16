//Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos de 2 hasta N

/**
 * Ejercicio 53
 * Diseñar un algoritmo que lea un numero N y retorne cuantos numeros primos hay desde 2
 * hasta N
 */

function isPrimeNumber( N ) {
  //Escribe tu codigo aqui
}

function getPrimeNumbers( N ) {
  let count = 0;
  
  for(let i = 1; i < N; i++) {
    if(getPrimeNumber(i)){
      count++
    }
  } 
  return `Por debajo de ${N} hay ${count} numeros primos`;

}

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

module.exports = { getPrimeNumbers };
