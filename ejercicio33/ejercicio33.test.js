const { arrayIndex } = require("./ejercicio33");

test("retorna el indice y valor para cada posicion de un array", () => {
  expect(arrayIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual(
    `El indice es ${0} y su valor es ${1}`,
    `El indice es ${1} y su valor es ${2}`,
    `El indice es ${2} y su valor es ${3}`,
    `El indice es ${3} y su valor es ${4}`,
    `El indice es ${4} y su valor es ${5}`,
    `El indice es ${5} y su valor es ${6}`,
    `El indice es ${6} y su valor es ${7}`,
    `El indice es ${7} y su valor es ${8}`,
    `El indice es ${8} y su valor es ${9}`,
    `El indice es ${9} y su valor es ${10}`
  );
});
