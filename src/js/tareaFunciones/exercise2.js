/*
Determina si un número es perfecto, es decir, la suma de sus
divisores propios (excluyendo él mismo) es igual al propio número.

Parameters:
numero: El número que se quiere verificar como perfecto.
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

export {esNumeroPerfecto}
