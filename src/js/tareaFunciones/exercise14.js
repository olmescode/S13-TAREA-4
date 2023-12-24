/*
Convierte una cadena de texto en un arreglo de caracteres.

Parameters:
cadena: La cadena que se convertirá en un arreglo.
*/
import { Split } from '../utils.js'
//const { Split } = require('../utils');

function convertirCadenaAArreglo(cadena) {
    let arregloConvertido = Split(cadena, '');
    return "Cadena convertida a arreglo: ", arregloConvertido
}

export {convertirCadenaAArreglo}
