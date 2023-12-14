/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

function nuevoSalario( salary, category ) {
    switch ( category ) {
      case 1:
        return ( salary * 0.15 ) + salary;
      case 2:
        return ( salary * 0.1 ) + salary;
    
      case 3:
        return ( salary * 0.06 ) + salary;  
    
      case 4:
        return ( salary * 0.03 ) + salary;
         
      default:
        return salary;
    }
}

module.exports = { nuevoSalario };
