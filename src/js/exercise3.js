/*
esNumeroPrimo(numero)
Un número primo es aquel que solo es divisible por 1 y por sí mismo.
*/
const esNumeroPrimo = (numero) => {
    numero = parseInt(numero);

    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

// Exporta la función
module.exports = { esNumeroPrimo };


// // Ejemplo de uso
// let primeNumber = 11;
// let isPrime = esNumeroPrimo(primeNumber);
// console.log(primeNumber + " ¿es un número primo? " + (isPrime ? "Sí" : "No"));
