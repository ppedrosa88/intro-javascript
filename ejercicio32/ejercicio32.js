/**
 *  Ejercicio 32
 * El siguiente es el menu de un restaurante de bocadillos. Diseñar un algoritmo
 * capaz de leer el numero de unidades consumidas de cada alimento ordenado y
 * calcular la cuenta total. Vamos a suponer que los precios son fijos, es decir,
 * que son constantes.
 *
 * Bocadillo de jamon: 1,5e
 * Refresco 1,05e
 * Cerveza: 0,75e
 * Pan: 2e
 *
 * Debera retornar un string que diga lo siguiente: `El precio total es de X`
 */

function menuRestaurante( sandwich, can, beer, bread ) {

  const sandwichPrice = 1.5;
  const canPrice = 1.05;
  const beerPrice = 0.75;
  const breadPrice = 2;
  
  const bill = sandwich*sandwichPrice + can*canPrice + beer*beerPrice + bread*breadPrice;

  return `El precio total es de ${bill}`;
}

module.exports = { menuRestaurante };
