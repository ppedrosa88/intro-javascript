//Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir estos números de forma descendente
/**
 * Ejercicio 46
 * Algoritmo que reciba tres numeros y los retorne en orden descendente. Los debera retornar en un objeto:
 * {1: X, 2: Y, 3: Z}
 */

function imprimirDescendente( A, B, C ) {

  let first, second, third;

  if( A >= B && A >= C ){
    first = A;
    if( B > C ) {
      second = B;
      third = C;
    } else {
      second = C;
      third = B;
    }
  } else if( B >= A && B >= C ){
    first = B;
    if( A > C ) {
      second = A;
      third = C;
    } else {
      second = C;
      third = A;
    }
  } else if( C >= B && C >= A ){
    first = C;
    if( B > A ) {
      second = B;
      third = A;
    } else {
      second = A;
      third = B
    }
  }

  return {
    1: first,
    2: second,
    3: third
  };

}

module.exports = { imprimirDescendente };
