/*
insertarElementoEnArreglo(arreglo, elemento, posicion)

*/
function insertarElementoEnArreglo(arreglo, elemento, posicion) {
    arreglo.splice(posicion, 0, elemento);
    return "Elemento " + elemento + " insertado en la posición " + posicion + " del arreglo.";
}

// Ejemplo de uso
let arregloInsertar = [1, 2, 4, 5];
let elementoAInsertar = 3;
let posicionInsercionArreglo = 2;
let resultadoInsercionArreglo = insertarElementoEnArreglo(arregloInsertar, elementoAInsertar, posicionInsercionArreglo);
console.log(resultadoInsercionArreglo);
