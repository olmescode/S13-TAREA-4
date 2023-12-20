/*
base10ABase16(numero)
Función que convierta un número en base 10 a hexadecimal
Ejemplo: Número 965 en base 16: 3C5
         Número 255 en base 16: FF
*/

const Bases = require('./bases');
const {ConvertBase} = require('./utils');

function base10ABase16(numero) {
    return ConvertBase(numero, Bases.HEXADECIMAL);
}

// Ejemplo de uso
let numeroBase10  = 965;
let numeroBase16 = base10ABase16(numeroBase10);
console.log("Número " + numeroBase10 + " en base 16: " + numeroBase16);
