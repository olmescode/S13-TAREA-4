/*
base2ABase8(numeroBinario)
Función que convierta un número binario a octal
*/
function base2ABase8(numeroBinario) {
    let numeroBase10 = parseInt(numeroBinario, 2);
    return numeroBase10.toString(8);
}

// Ejemplo de uso
let numeroOctalDesdeBinario = base2ABase8(numeroBinario);
console.log("Número binario " + numeroBinario + " en base 8: " + numeroOctalDesdeBinario);
