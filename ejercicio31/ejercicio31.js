/**
 *  Ejercicio 31
 *  Algoritmo que lea un numero entero (altura) y a partir de el,cree
 *  una escalera invertida de asteriscos con esa altura.
 *  Debera quedar asi, si ponemos una altura de 5
 *  *****
 *   ****
 *    ***
 *     **
 *      *
 *
 *  Deberas recordar la concatenacion y el uso de espacio en blanco (\n)
 */

function crearTriangulo( N ) {
  let toPrint = "";

  for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
      if( j === i || j > i) {
        toPrint += "*";
      } else {
        toPrint += " "
      }
    }
    toPrint += "\n";
  }
  return toPrint;

}

module.exports = { crearTriangulo };
