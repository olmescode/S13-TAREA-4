/*
 encontrarMayorEnArreglo(arreglo)
 
*/
function encontrarMayorEnArreglo(arreglo) {
    return Math.max(...arreglo);
}

// Ejemplo de uso
let numeros = [8, 12, 5, 27, 18];
let mayorNumero = encontrarMayorEnArreglo(numeros);
console.log("El mayor número en el arreglo es: " + mayorNumero);
