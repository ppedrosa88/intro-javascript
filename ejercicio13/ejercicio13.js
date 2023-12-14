/** Ejercicio 13
 * Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro y la superficie del mismo.
        Superficie= base*altura
        Perímetro = 2*(base + altura)
    La funcion debera retornar un string que diga La superficie es de 'x' o El perimetro es de 'x'
 */

function calcularSuperficie( base, height ) {
    const surface =  base * height;
    return `La superficie es de ${surface}`
}

function calcularPerimetro( base, height ) {
  const perimeter = 2 * ( base + height );
    return `El perimetro es de ${perimeter}`
}

module.exports = { calcularPerimetro, calcularSuperficie };
