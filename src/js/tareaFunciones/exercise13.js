/*
Elimina un elemento de un arreglo y devuelve un mensaje indicando si se 
realizó la eliminación.

Parameters:
arreglo: El arreglo del cual se eliminará el elemento.
elemento: El elemento a eliminar.
*/
import { IndexOfArray, Splice } from '../utils.js'
//const { IndexOfArray, Splice } = require('../utils');

function eliminarElementoDeArreglo(arreglo, elemento) {
    let indice = IndexOfArray(arreglo, elemento);
    let resultadoEliminacionArreglo = null
    let message = ""
    let resultadoInsercionArreglo = null

    if (indice !== -1) {
        resultadoInsercionArreglo = Splice(arreglo, indice, 1);
        message = "Elemento " + elemento + " eliminado del arreglo." + "\n"
        resultadoEliminacionArreglo = true;
    } else {
        message = "El elemento " + elemento + " no se encuentra en el arreglo."
        resultadoEliminacionArreglo = false;
    }

    if (resultadoEliminacionArreglo === true) {
        resultadoInsercionArreglo.forEach(element => {
            message = message + element + ", "
        });
    }

    return message
}

export {eliminarElementoDeArreglo}
