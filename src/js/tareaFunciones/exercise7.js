/*
Inserta una subcadena en una posición específica dentro de otra cadena.

Parameters:
cadena: La cadena principal.
index: La posición de inserción.
subcadena: La subcadena a insertar.
*/
import { Substring } from '../utils.js'
//const { Substring } = require('../utils');

function insertarSubcadena(cadena, index, subcadena) {
    // Si el índice es mayor que la longitud de la cadena, ajustarlo al final
    index = Math.min(index, cadena.length);

    // Dividir la cadena en dos partes en el índice especificado
    var primeraParte = Substring(cadena, 0, index);
    var segundaParte = Substring(cadena, index);

    // Concatenar la primera parte, la subcadena y la segunda parte
    var nuevaCadena = primeraParte + subcadena + segundaParte;

    return nuevaCadena;
}

export {insertarSubcadena}
