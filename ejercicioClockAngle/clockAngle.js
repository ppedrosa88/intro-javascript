/*
 * Ejercicio clockAngle
 *
 * Escribe un método que, dandole un número N que representa dónde
 * se encuentra actualmente el
 * minutero en un reloj, devuelva el ángulo
 * formado por el minutero y la marca de las 12 en punto en el reloj.
 *
 * El numero no podra ser mayor que 60, si lo fuera, el algoritmo retornara
 * que el numero introducido es incorrecto
 */

function simpleClockAngle( num ) {

  if( num > 0 && num < 60 ){
    return num * 6;
  } else {
    return "El numero introducido es incorrecto"
  }

}

simpleClockAngle(6)

module.exports = { simpleClockAngle };
