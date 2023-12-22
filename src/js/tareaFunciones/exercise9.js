/*
convertirArregloACadena(arreglo, separador)

*/
import { Join } from '../utils.js'
//const { Join } = require('../utils');

function convertirArregloACadena(arreglo, separador) {
    return Join(arreglo ,separador);
}

// Exporta la función
export {convertirArregloACadena}
//module.exports = { convertirArregloACadena };


// Ejemplo de uso
// let arrayParaConvertir = ["Uno", "Dos", "Tres"];
// let separadorCadena = "-";
// let resultadoConversion = convertirArregloACadena(arrayParaConvertir, separadorCadena);
// console.log("Arreglo convertido a cadena: " + resultadoConversion);
