/*
base10ABase2(numero)
Función que convierta un número en base 10 a binario.
*/
function base10ABase2(numero) {
    return numero.toString(2);
}

// Ejemplo de uso
let numeroBase10 = 23;
let numeroBase2 = base10ABase2(numeroBase10);
console.log("Número " + numeroBase10 + " en base 2: " + numeroBase2);
