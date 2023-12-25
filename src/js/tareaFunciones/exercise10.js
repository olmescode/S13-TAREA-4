/*
Encuentra el mayor número en un arreglo.

Parameters:
arreglo: El arreglo de números.
*/
import { MathMax, Split } from '../utils.js'

function encontrarMayorEnArreglo(arreglo) {
    if (typeof arreglo === 'string') {
        arreglo  = Split(arreglo,',')
    }

    let mayorNumero = MathMax(arreglo);
    return "El mayor número en el arreglo es: " + mayorNumero
}

export {encontrarMayorEnArreglo}
