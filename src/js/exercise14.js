/*
convertirCadenaAArreglo(cadena)

*/

const {Split} = require('./utils');

function convertirCadenaAArreglo(cadena) {
    return Split (cadena, '');
}

// Ejemplo de uso
let cadenaParaConvertir = "Hola";
let arregloConvertido = convertirCadenaAArreglo(cadenaParaConvertir);
console.log("Cadena convertida a arreglo: ", arregloConvertido);
