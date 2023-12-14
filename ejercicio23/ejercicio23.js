/**
 *  Ejercicio 23
 *  Leer tres números que denoten una fecha (día, mes, año) por
 *  parametros.
 *  Comprobar que es una fecha válida. Si no es válida escribir
 *  un mensaje de error que indique que se ha introducido mal
 *  alguna parte de la fecha y volver a pedir los números. Si es válida,
 *  escribir la fecha cambiando el número del mes por su nombre.
 *  Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero del 2006”.
 *  El año debe ser mayor que 0. (Recuerda la estructura switch).
 */

function fechaIntroducida( day, month, year ) {
  const monthInText = isCorrectDayInMonth( day, month );
  if( isCorrectYear(year) ) {
      if( monthInText ) {
        return `${day} de ${monthInText} del ${year}`
    }
  } 

  return "Has introducido mal alguna parte de la fecha";
  
}

function isCorrectDayInMonth( day , month ){
  const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "noviembre", "diciembre"];

  switch ( month ) {
    case 1:
      if(day > 0 && day <= 31) {
        return months[0]
      }
      break;
    case 2:
      if(day > 0 && day <= 28) {
        return months[1]
      }
      break;
    case 3:
      if(day > 0 && day <= 31) {
        return months[2]
      }
      break;
    case 4:
      if(day > 0 && day <= 30) {
        return months[3]
      }
      break;
    case 5:
      if(day > 0 && day <= 31) {
        return months[4]
      }
      break;
    case 6:
      if(day > 0 && day <= 30) {
        return months[5]
      }
      break;
    case 7:
      if(day > 0 && day <= 31) {
        return months[6]
      }
      break;
    case 8:
      if(day > 0 && day <= 31) {
        return months[7]
      }
      break;
    case 9:
      if(day > 0 && day <= 30) {
        return months[8]
      }
      break;
    case 10:
      if(day > 0 && day <= 31) {
        return months[9]
      }
      break;
    case 11:
      if(day > 0 && day <= 30) {
        return months[10]
      }
      break;
    case 12:
      if(day > 0 && day <= 31) {
        return months[11]
      }
      break;
  
    default:
      return null;
  }
}

function isCorrectYear( year ) {
  if( year > 1970 ) {
    return true;
  }
  return false;
}

module.exports = { fechaIntroducida };
