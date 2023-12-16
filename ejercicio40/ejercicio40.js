/**
 * Ejercicio 40
 * Generar un array de 20 elementos con numeros aleatorios no repetidos entre si
 */

function generarArrayNoRepetidos() {

  let newArray = [];
  let isSameNumber = true;

  for(let i = 0; i < 10; i++) {
    while( isSameNumber ) {

      let randomNumber = Math.floor(Math.random() * 10) + 1;
      isSameNumber = filter( newArray, randomNumber )
      if( !isSameNumber ) {
        newArray[i] = randomNumber;
      }
      
    }
    isSameNumber = true;
  }
  return newArray;
}

function filter( array, number ) {

  for(let i = 0; i < array.length; i++) {
    if(array[i] === number) {
      return true;
    } 
  }

  return false;

}

console.log(generarArrayNoRepetidos())

module.exports = { generarArrayNoRepetidos };
