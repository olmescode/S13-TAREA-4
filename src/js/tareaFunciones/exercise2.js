/*
esNumeroPerfecto(numero)
Un número perfecto es aquel cuya suma de sus divisores propios (excluyendo él mismo)
es igual al propio número.
*/
function esNumeroPerfecto(numero) {
    numero = parseInt(numero);
    let sumaDivisores = 0;
    let isPerfect = null

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    isPerfect = sumaDivisores === numero;

    return numero + " ¿es un número perfecto? " + (isPerfect ? "Sí" : "No")
}

// Exporta la función
export {esNumeroPerfecto}
//module.exports = { esNumeroPerfecto };


// Ejemplo de uso
// let perfectNumber = 28;
// let isPerfect = esNumeroPerfecto(perfectNumber);
// console.log(perfectNumber + " ¿es un número perfecto? " + (isPerfect ? "Sí" : "No"));
