/*
base10ABase2(numero)
Función que convierta un número en base 10 a binario.
*/
import { Bases } from '../bases.js'
import { ConvertBase } from '../utils.js'
//const Bases = require('../bases');
//const { ConvertBase } = require('../utils');

function base10ABase2(numero) {
    return  ConvertBase(numero, Bases.BINARIO);
}

// Exporta la función
export {base10ABase2}
//module.exports = { base10ABase2 };


// Ejemplo de uso  Número 23 en base 2: 10111
// let numeroBase10 = 23;
// let numeroBase2 = base10ABase2(numeroBase10);
// console.log("Número " + numeroBase10 + " en base 2: " + numeroBase2);
