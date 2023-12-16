/**
 * Ejercicio 52
 *  Rellenar un array con una longitud 10 y
 *  numeros aleatorios entre 1 y 15.
 *  Posteriormente, hacer un algoritmo que reciba este array
 *  aleatorio y un numero introducido por parametros que nos diga
 *  si este numero esta incluido en el array o no. El algoritmo retornara
 *  true si se encuentra el numero y false si no;
 */

function generateRandomArray() {
  let newArray = [];

  for(let i = 0; i < 10; i++) {

      let randomNumber = Math.floor(Math.random() * 15) ;

      newArray[i] = randomNumber;
      
  }
  return newArray;
}

function findNumberInArray( array, number ) {
  
  for(let i = 0; i < array.length; i++) {
    if(array[i] === number){
      return true;
    }
  }
  return false;
}

module.exports = { findNumberInArray, generateRandomArray };
