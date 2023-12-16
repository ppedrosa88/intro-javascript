/**
 * Ejercicio 49
 * Se tienen los costes de produccion de tres departamentos (dulces,bebidas y conservas)
 * correspondientes a los 12 meses del ano anterior. Construir algoritmos que proporcionen:
 *
 * a) En que mes se registro el mayor coste de produccion de dulces?
 * b) Promedio anual de los costes de produccion de bebidas
 * c) En que mes se registro el mayor coste de produccion en bebidas, y en que mes el menor coste?
 * d) Cual fue el que tuvo menor coste de produccion en diciembre?
 *
 */

const { imprimirDescendente } = require("../ejercicio46/ejercicio46");
const { ordenar } = require("../ejercicio47/ejercicio47")

const cakes = [55, 40, 78, 45, 67, 21, 30, 90, 85, 73, 58, 25];
const drinks = [45, 67, 21, 30, 55, 40, 78, 45, 80, 66, 39, 74];
const preservedFood = [78, 45, 80, 66, 39, 74, 67, 21, 30, 90, 85, 73];

function getMaxCost( costs ) {

  let max = 0;
  let month = 0;

  for(let i = 0; i < costs.length; i++) {
    if( costs[i] > max ) {
      max = costs[i];
      month = i + 1;
    }
  }

  return { max, month }

}

function getMinCost( costs ) {

  let min = costs[0];
  let month = 0;

  for(let i = 0; i < costs.length; i++) {
    if( costs[i] < min ) {
      min = costs[i];
      month = i + 1;
    }
  }

  return { min, month }

}

function getAverageCost( prices ) {

  let sum = 0;

  for(let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }

  return sum/prices.length;

}

function getLastCost( costs ) {
  return costs[costs.length - 1];
}

function getPriceDecember() {
  //Escribe tu codigo aqui
}

function getMinPriceDecember( prices1, prices2, prices3 ) {

  let A = prices1[prices1.length - 1]
  let B = prices2[prices2.length - 1]
  let C = prices3[prices3.length - 1]


  const { 3:min } = imprimirDescendente( A, B, C );
  return min;
}

module.exports = {
  getAverageCost,
  getLastCost,
  getMaxCost,
  getMinCost,
  getMinPriceDecember,
};
