/*
base10ABase8(numero)
Función que convierta un número en base 10 a octal
*/
function base10ABase8(numero) {
    return numero.toString(8);
}

// Ejemplo de uso
let numeroBase8 = base10ABase8(numeroBase10);
console.log("Número " + numeroBase10 + " en base 8: " + numeroBase8);
