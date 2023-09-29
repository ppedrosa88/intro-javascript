const { cuboNumerosArray } = require("./ejercicio26");

test("lee un array y devuelve el indice y el valor de cada posicion", () => {
  expect(cuboNumerosArray([1, 2, 3, 4, 5])).toBe(
    `El cubo de ${1} es ${1}`,
    `El cubo de ${2} es ${8}`,
    `El cubo de ${3} es ${27}`,
    `El cubo de ${4} es ${64}`,
    `El cubo de ${5} es ${125}`
  );
});
