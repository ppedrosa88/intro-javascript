const { tablaNumero } = require("./ejercicio27");

describe("retorna la tabla de multiplicacion de N", () => {
  test("retorna la tabla de multiplicacion del numero 5", () => {
    expect(tablaNumero(5)).toBe(5, 10, 15, 20, 25, 30, 35, 40, 45, 50);
  });

  test("retorna la tabla de multiplicacion del numero 6", () => {
    expect(tablaNumero(6)).toBe(6, 12, 18, 24, 30, 36, 42, 48, 54, 60);
  });

  test("retorna la tabla de multiplicacion del numero 7", () => {
    expect(tablaNumero(7)).toBe(7, 14, 21, 28, 35, 42, 49, 56, 63, 70);
  });
});
