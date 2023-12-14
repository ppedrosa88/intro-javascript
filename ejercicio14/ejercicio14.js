/**
 *  Ejercicio 14
 *  Construir un algoritmo que resuelva el problema que tienen unos surtidores
 *  de gasolina, que registran lo que surten en galones, pero el precio de la
 *  gasolina se fija en litros. El algoritmo debe calcular e retornar el precio
 *  que hay q cobrarle al cliente.
 *
 *  Precio gasolina = 1.333 euros / litro
 *  1 galon = 3,78541 litros
 */

function precioEnLitros( galons ) {

  const litersPerGalon = 3.78541
  const pricePerLiter = 1.333

  return ( galons * litersPerGalon ) * pricePerLiter;
}

module.exports = { precioEnLitros };
