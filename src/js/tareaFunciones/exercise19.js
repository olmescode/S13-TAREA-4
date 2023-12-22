/*
base2ABase8(numeroBinario)
Función que convierta un número binario a octal
Ejemplo:
    Número binario 11011 en base 8: 33
    Número binario 1101 en base 8: 15
    Número binario 101101 en base 8: 55
*/
import { Bases } from '../bases.js'
import { ParseInt } from '../utils.js'
//const Bases = require('../bases');
//const { ParseInt } = require('../utils');

function base2ABase8(numeroBinario) {
    return ParseInt(numeroBinario, Bases.OCTAL);
}

// Exporta la función
export {base2ABase8}
//module.exports = { base2ABase8 };


// Ejemplo de uso
// let numeroBinario = "101101";
// let numeroOctalDesdeBinario = base2ABase8(numeroBinario);
// console.log("Número binario " + numeroBinario + " en base 8: " + numeroOctalDesdeBinario);
