/*
esNumeroPerfecto(numero)
Un número perfecto es aquel cuya suma de sus divisores propios (excluyendo él mismo) es igual al propio número.
*/
function esNumeroPerfecto(numero) {
    numero = parseInt(numero);
    let sumaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    return sumaDivisores === numero;
}

// Ejemplo de uso
let perfectNumber = 28;
let isPerfect = esNumeroPerfecto(perfectNumber);
console.log(perfectNumber + " ¿es un número perfecto? " + (isPerfect ? "Sí" : "No"));
