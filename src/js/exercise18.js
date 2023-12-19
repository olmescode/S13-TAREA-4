/*
base2ABase10(numeroBinario)
Función que convierta un número binario a base 10
*/
function base2ABase10(numeroBinario) {
    return parseInt(numeroBinario, 2);
}

// Ejemplo de uso
let numeroBinario = "101101";
let numeroBase10DesdeBinario = base2ABase10(numeroBinario);
console.log("Número binario " + numeroBinario + " en base 10: " + numeroBase10DesdeBinario);
