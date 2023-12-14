/**
 *  Ejercicio 7
 *  Construir un algoritmo que reciba la cantidad de dinero entregado
 *  y el coste del producto. Debera calcular el cambio que se entregara
 *  al cliente. Debes tener en cuenta que el cliente podria entregar
 *  una cantidad de dinero insuficiente.
 */

function cambioCliente( money, productCost ) {
    if( money < productCost ) {
        return 'pago insuficiente';
    } else {
        return money - productCost;
    }
}

module.exports = { cambioCliente };
