/*
Verifica si un número es primo, es decir, solo es divisible
por 1 y por sí mismo.

Parameters:
numero: El número que se quiere verificar como primo.
*/
const esNumeroPrimo = (numero) => {
    numero = parseInt(numero);

    if (numero <= 1) {
        return numero + " No es un número primo.";
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return numero + " No es un número primo.";
        }
    }

    return numero + " ¿es un número primo? Sí";
};

export {esNumeroPrimo}
