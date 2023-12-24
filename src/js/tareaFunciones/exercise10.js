/*
Encuentra el mayor número en un arreglo.

Parameters:
arreglo: El arreglo de números.
*/
import { MathMax } from '../utils.js'
//const { MathMax } = require('../utils');

function encontrarMayorEnArreglo(arreglo) {
    let mayorNumero = MathMax(arreglo);
    return "El mayor número en el arreglo es: " + mayorNumero
}

export {encontrarMayorEnArreglo}
