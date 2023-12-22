/*
 encontrarMayorEnArreglo(arreglo)
 
*/
import { MathMax } from '../utils.js'
//const { MathMax } = require('../utils');

function encontrarMayorEnArreglo(arreglo) {
    return MathMax(arreglo);
}

// Exporta la función
export {encontrarMayorEnArreglo}
//module.exports = { encontrarMayorEnArreglo };


// Ejemplo de uso
// let numeros = [8, 12, 102, 27, 18];
// let mayorNumero = encontrarMayorEnArreglo(numeros);
// console.log("El mayor número en el arreglo es: " + mayorNumero);
