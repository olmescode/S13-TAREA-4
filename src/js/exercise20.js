/*
base2ABase16(numeroBinario)
Función que convierta un número binario a hexadecimal
*/
function base2ABase16(numeroBinario) {
    let numeroBase10 = parseInt(numeroBinario, 2);
    return numeroBase10.toString(16);
}

// Ejemplo de uso
let numeroHexadecimalDesdeBinario = base2ABase16(numeroBinario);
console.log("Número binario " + numeroBinario + " en base 16: " + numeroHexadecimalDesdeBinario);
