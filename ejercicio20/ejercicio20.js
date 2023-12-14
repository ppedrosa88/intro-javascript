/**
 *  Ejercicio 20
 *  Teniendo en cuenta que la clave es 'eureka, escribir un algoritmo
 *  que nos pida un array de claves por parametros y una contrasena.
 *
 *  Solo tendremos 3 intentos
 *  para aceptar, si fallamos, nos mostrara un mensaje por consola indicandonos que hemos agotado esos
 *  3 intentos. Si acertamos la clave, nos mostrara un mensaje por consola y saldra del programa. Si agotaramos
 *  los 3 intentos sin acertar, tambien nos mostrara un mensaje por consola y saldra
 *  del programa.
 */

function adivinarContrasena( array, pass ) {

  for(let i = 0; i <= 3; i++){

    if( array[i] === pass && i < 3 ){
      console.log("Contraseña correcta, bienvenido");
      return;
    } else if( array[i] !== pass && i < 3 ){
      console.log("Contraseña incorrecta, intentelo de nuevo")
    }

    if( i === 3) {
      console.log("Has agotado tus intentos");
      return;
    }
  }

}

module.exports = { adivinarContrasena };
