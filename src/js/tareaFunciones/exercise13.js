/*
Elimina un elemento de un arreglo y devuelve un mensaje indicando si se 
realizó la eliminación.

Parameters:
arreglo: El arreglo del cual se eliminará el elemento.
elemento: El elemento a eliminar.
*/
import { IndexOfArray, Splice, Replace , Split} from '../utils.js'

function eliminarElementoDeArreglo(arreglo, elemento) {
    if (typeof arreglo === 'string') {
        arreglo  = Replace(arreglo,';', ',');
        arreglo  = Split(arreglo,',')
    }

    let message = ""
    let indice = IndexOfArray(arreglo, elemento);
    let resultadoEliminacionArreglo = null
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
            message = message + +element + "\n"
        });
    }

    return message
}

export {eliminarElementoDeArreglo}
