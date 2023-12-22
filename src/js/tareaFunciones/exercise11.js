/*
buscarElementoEnArreglo(arreglo, elemento)

*/
import { IndexOfArray } from '../utils.js'
//const { IndexOfArray } = require('../utils');

function buscarElementoEnArreglo(arreglo, elemento) {
    let indice = IndexOfArray(arreglo, elemento);

    if (indice !== -1) {
        return "El elemento " + elemento + " se encuentra en el índice " + indice + " del arreglo.";
    } else {
        return "El elemento " + elemento + " no se encuentra en el arreglo.";
    }
}


// Exporta la función
export {buscarElementoEnArreglo}
//module.exports = { buscarElementoEnArreglo };


// Ejemplo de uso
// let arregloBusqueda = [10, 20, 30, 40, 50];
// let elementoABuscar = 50;
// let resultadoBusquedaArreglo = buscarElementoEnArreglo(arregloBusqueda, elementoABuscar);
// console.log(resultadoBusquedaArreglo);
