/*
base2ABase10(numeroBinario)
Función que convierta un número binario a base 10
Ejemplo : Número binario 101101 en base 10: 45
          Número binario 1101   en base 10: 13
        Número binario 11011   en base 10: 27
*/
import { Bases } from '../bases.js'
import { ParseInt } from '../utils.js'
//const Bases = require('../bases');
//const { ParseInt } = require('../utils');

function base2ABase10(numeroBinario) {
    return ParseInt(numeroBinario, Bases.DECIMAL);
}

// Exporta la función
export {base2ABase10}
//module.exports = { base2ABase10 };


// Ejemplo de uso
// let numeroBinario = "11011";
// let numeroBase10DesdeBinario = base2ABase10(numeroBinario);
// console.log("Número binario " + numeroBinario + " en base 10: " + numeroBase10DesdeBinario);
