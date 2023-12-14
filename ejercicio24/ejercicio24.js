/**
 *  Ejercicio 24
 *  Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno
 *  se calcula según el siguiente criterio: la parte práctica vale el 10%; la parte
 *  de problemas vale el 50% y la parte teórica el 40%. El algoritmo leerá el nombre
 *  del alumno, las tres notas Y escribirá el resultado. Las notas deben
 *  estar entre 0 y 10, si no lo están, no imprimirá las notas, mostrará un mensaje
 *  de error y volverá a pedir otro alumno.
 *
 *  Los mensajes de error debe ser los siguientes; 'Ha habido un error con tus notas. Deben
 *  estar entre 1 y 10'. 'Error al recibir el nombre' (En caso de que se introduzca una cadena vacia).
 *
 *  Si todo es correcto el algorimo debera imprimir 'NombreAlumno tu nota final es de NotaFinal sobre 10'
 */

function notaAlumno( name, grade1, grade2, grade3 ) {
  let average = 0;

  if( name ){
    if( areCorrectGrades([grade1, grade2, grade3]) ) {
      average = (grade1 + grade2 + grade3) / 3;
      return `${name} tu nota final es de ${average} sobre 10`
    } else {
      return "Ha habido un error con tus notas. Deben estar entre 1 y 10";
    }
  } else {
    return "Error al recibir el nombre"
  }

}

function areCorrectGrades( grades ){

  for( let i = 0; i < grades.length; i++ ){
    if ( grades[i] < 0 || grades[i] > 10) {
      return false;
    }
  }
  return true;

}

notaAlumno("pablo", 6,6,-6)

module.exports = { notaAlumno };
