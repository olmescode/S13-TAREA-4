/*
Convierte un arreglo en una cadena de texto utilizando un separador.

Parameters:
arreglo: El arreglo a convertir.
separador: El separador entre los elementos en la cadena.
*/
import { Join , Split} from '../utils.js'
//const { Join } = require('../utils');

function convertirArregloACadena(arreglo, separador) {
    let array =Split(arreglo, separador);
    let resultadoConversion = Join(array, separador);
    return "Arreglo convertido a cadena: " + resultadoConversion
}

export {convertirArregloACadena}
