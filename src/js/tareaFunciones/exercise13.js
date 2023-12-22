/*
eliminarElementoDeArreglo(arreglo, elemento)

*/
import { IndexOfArray, Splice } from '../utils.js'
//const { IndexOfArray, Splice } = require('../utils');

function eliminarElementoDeArreglo(arreglo, elemento) {
    let indice = IndexOfArray(arreglo,elemento);


    if (indice !== -1) {
        Splice(arreglo, indice, 1);
        console.log("Elemento " + elemento + " eliminado del arreglo.");
        return true;
    } else {
        console.log( "El elemento " + elemento + " no se encuentra en el arreglo.");
        return false;
    }
}

// Exporta la función
export {eliminarElementoDeArreglo}
//module.exports = { eliminarElementoDeArreglo };


/*
// Ejemplo de uso
let arregloEliminar = [10, 20, 30, 40, 50];
let elementoAEliminar = 40;
let resultadoEliminacionArreglo = eliminarElementoDeArreglo(arregloEliminar, elementoAEliminar);

if (resultadoEliminacionArreglo===true) {
    arregloEliminar.forEach(element => {
        console.log(element);
    });
}
*/
