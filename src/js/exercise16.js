/*
base10ABase8(numero)
    Función que convierta un número en base 10 a octal
    Ejemplo  362 en base 8: 552
*/


const Bases = require('./bases');
const {ConvertBase} = require('./utils');

function base10ABase8(numero) {
    return ConvertBase(numero, Bases.OCTAL);
}

// Ejemplo de uso //Número 362 en base 8: 552
let numeroBase10  = 896;
let numeroBase8 = base10ABase8(numeroBase10);
console.log("Número " + numeroBase10 + " en base 8: " + numeroBase8);
