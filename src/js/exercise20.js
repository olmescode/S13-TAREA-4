/*
base2ABase16(numeroBinario)
Función que convierta un número binario a hexadecimal
Ejemplo:
    Número binario 11011 en base 16: 1B
    Número binario 1101 en base 16: D
    Número binario 101101 en base 16: 2D
*/

const Bases = require('./bases');
const {ParseInt} = require('./utils');

function base2ABase16(numeroBinario) {
    return ParseInt(numeroBinario, Bases.HEXADECIMAL);
}

// Ejemplo de uso
let numeroBinario = "101101";
let numeroHexadecimalDesdeBinario = base2ABase16(numeroBinario);
console.log("Número binario " + numeroBinario + " en base 16: " + numeroHexadecimalDesdeBinario);
