/*
insertarElementoEnArreglo(arreglo, elemento, posicion)
*/

const {Splice} = require('./utils');

function insertarElementoEnArreglo(arreglo, elemento, posicion) {
    var result = Splice(arreglo,posicion, 0, elemento);
    var mssg =  "Elemento " + elemento + " insertado en la posición " + posicion + " del arreglo.";
    console.log(mssg);
    return result;
}

// Ejemplo de uso
let arregloInsertar = [1, 2, 4, 5];
let elementoAInsertar = 3;
let posicionInsercionArreglo = 2;
let resultadoInsercionArreglo = insertarElementoEnArreglo(arregloInsertar, elementoAInsertar, posicionInsercionArreglo);

resultadoInsercionArreglo.forEach(element => {
    console.log(element);
});
