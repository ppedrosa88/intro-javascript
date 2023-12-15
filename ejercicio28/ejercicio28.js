/**
 *  Ejercicio 28
 *  Desarrollar un timer o temporizador. La cantidad de segundos con la que se
 *  quiere hacer la cuenta atras se introducira por parametros. Se ira mostrando
 *  la cuenta atras por consola y cuando llegue al final, se imprimira "Ring!! y el programa acabara .
 */

function timer( seconds ) {
  let temp = seconds;
  
  for( let i = 0; i <= seconds; i++){

      if( i === seconds ){
        console.log("¡¡Ring!!")
      } else {
        console.log((temp -= 1));
      }

  }

}

timer(6);

module.exports = { timer };
