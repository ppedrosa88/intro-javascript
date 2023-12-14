/**
 *  Ejercicio 9
 *  Construir un algoritmo que reciba 5 calificaciones de un alumno y retorne el promedio
 *  junto con la palabra "aprobado" (recuerda la concatenacion y el uso de ``) si el alumno tiene un promedio
 *  mayor o igual a 5, y "no aprobado" en caso contrario.
 *  En caso de que se introdujera alguno 'no numero' el algoritmo debera retornar un string
 *  diciendo 'Debes introducir sólo números. Inténtalo de nuevo'
 */

function notaMedia(cal1, cal2, cal3, cal4, cal5) {
    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3) || isNaN(cal4) || isNaN(cal5)) {
      return "Debes introducir solo numeros. Intentalo de nuevo";
    } 

    const average = ( cal1 + cal2 + cal3 + cal4 + cal5 ) / 5;

    if( average >= 5 ) {
      return `${average} aprobado`
    } else {
      return `${average} suspenso`
    }
}

module.exports = { notaMedia };
