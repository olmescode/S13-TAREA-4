/*
Inserta un elemento en una posición específica dentro de un arreglo.

Parameters:
arreglo: El arreglo en el que se insertará el elemento.
elemento: El elemento a insertar.
posicion: La posición en la que se insertará el elemento.
*/
import { Splice, Replace, Split } from '../utils.js'

function insertarElementoEnArreglo(arreglo, elemento, posicion) {

    if (typeof arreglo === 'string') {
        arreglo  = Replace(arreglo,';', ',');
        arreglo  = Split(arreglo,',')
    }

    let resultadoInsercionArreglo = Splice(arreglo, posicion, 0, elemento);
    let message = "Elemento " + elemento + " insertado en la posición " + posicion + " del arreglo." + "\n";
    let i  = 0;

    resultadoInsercionArreglo.forEach(element => {
        message += `[${i}] ${element} \n` 
        i++;
    });

    return message;
}

export {insertarElementoEnArreglo}
