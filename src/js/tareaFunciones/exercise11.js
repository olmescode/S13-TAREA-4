/*
Busca un elemento en un arreglo y devuelve su índice si se encuentra.

Parameters:
arreglo: El arreglo en el que se buscará el elemento.
elemento: El elemento que se está buscando.
*/
import { IndexOfArray ,Split,Replace} from '../utils.js'

function buscarElementoEnArreglo(arreglo, elemento) {
    if (typeof arreglo === 'string') {
        arreglo  = Replace(arreglo,';', ',');
        arreglo  = Split(arreglo, ',')
    }
  
    let indice = IndexOfArray(arreglo, elemento);

    if (indice !== -1) {
        return "El elemento " + elemento + " se encuentra en el índice " + indice + " del arreglo.";
    } else {
        return "El elemento " + elemento + " no se encuentra en el arreglo.";
    }
}

export {buscarElementoEnArreglo}
