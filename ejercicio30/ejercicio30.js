/**
 *  Ejercicio 30
 *  Escribir un algoritmo para cada apartado que retorne un triangulo como los mostrados
 *  a continuacion hasta un numero de filas introducidos por teclado. El algoritmo recibira el
 *  numero de filas por parametros.
 *  Si ponemos 4 los triangulos serán asi:
 *
 *  a) 1
 *     12
 *     123
 *     1234
 *
 * b) 1
 *    22
 *    333
 *    4444
 *
 * c) 1
 *    23
 *    456
 *    78910
 *
 *  Recuerda la concatenacion y el uso de espacios en blanco (\n)
 */

// Apartado A --------------------------------------------------------------------------

function trianguloConsola( N ) {

  let toPrint = "";

  for(let j = 1; j <= N; j++){
    for(let i = 1; i <= j; i++) {
      toPrint += `${i}`
    }
    toPrint += '\n';
  }
  return toPrint;
}

// Apartado B --------------------------------------------------------------------------
function trianguloConsolaB( N ) {
  let toPrint = "";

  for(let j = 1; j <= N; j++){
    for(let i = 1; i <= j; i++) {
      toPrint += `${j}`
    }
    toPrint += '\n';
  }
  return toPrint;
}


// Apartado C --------------------------------------------------------------------------
function trianguloConsolaC( N ) {
  let toPrint = "";
  let counter = 0

  for(let j = 1; j <= N; j++){
    for(let i = 1; i <= j; i++) {
      toPrint += `${counter} `
      counter++;
    }
    toPrint += '\n';
  }
  return toPrint;
}

module.exports = { trianguloConsola, trianguloConsolaB, trianguloConsolaC };
