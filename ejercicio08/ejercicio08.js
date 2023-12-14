/**
 *  Ejercicio 8
 *  Crea un algoritmo que reciba el sueldo de un trabajador y
 *  aplique un incremento del 15% si el sueldo es inferior a 1000€.
 *  El algoritmo debera retornar el nuevo salario.
 */

function incrementarSueldo( salary ) {
    if ( salary < 1000 ) {
        return (salary * 0.15)  + salary;
    } else {
        return salary;
    }
}

module.exports = { incrementarSueldo };
