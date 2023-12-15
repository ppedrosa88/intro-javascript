/**
 *  Ejercicio 25
 *  Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño.
 *  Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
 *  Ejemplo, para lado = 4 escribiría:
 *  * * * *
 *  *     *
 *  *     *
 *  * * * *
 *  Recuerda la estructura repetitiva For.
 *
 *  La funcion debera retornar cada linea + un espacio en blanco '\n';
 */
function crearCuadrado( side ) {
  
  let toPrint = "";
  for(let i = 0; i < side; i++){
    for(let j = 0; j < side; j++){
      
      if( i === 0  || i === (side - 1)) {
        toPrint += "*";
      } else if ( i !== 0 && i !== (side - 1) ){
      
        if( j === 0 ){
          toPrint += "*";
        } else if( j === (side - 1) ){
          toPrint += "*";
        } else {
          toPrint += " ";
        }
      }

    }
    toPrint += "\n"

  }

  return toPrint;
}

module.exports = { crearCuadrado };
