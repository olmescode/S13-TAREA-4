/*
convertirCadenaAArreglo(cadena)

*/
import { Split } from '../utils.js'
//const { Split } = require('../utils');

function convertirCadenaAArreglo(cadena) {
    return Split (cadena, '');
}

// Exporta la función
export {convertirCadenaAArreglo}
//module.exports = { convertirCadenaAArreglo };


// Ejemplo de uso
// let cadenaParaConvertir = "Hola";
// let arregloConvertido = convertirCadenaAArreglo(cadenaParaConvertir);
// console.log("Cadena convertida a arreglo: ", arregloConvertido);
