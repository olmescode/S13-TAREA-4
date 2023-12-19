/*
buscarElementoEnArreglo(arreglo, elemento)

*/
function buscarElementoEnArreglo(arreglo, elemento) {
    let indice = arreglo.indexOf(elemento);

    if (indice !== -1) {
        return "El elemento " + elemento + " se encuentra en el índice " + indice + " del arreglo.";
    } else {
        return "El elemento " + elemento + " no se encuentra en el arreglo.";
    }
}

// Ejemplo de uso
let arregloBusqueda = [10, 20, 30, 40, 50];
let elementoABuscar = 30;
let resultadoBusquedaArreglo = buscarElementoEnArreglo(arregloBusqueda, elementoABuscar);
console.log(resultadoBusquedaArreglo);
