/*
eliminarElementoDeArreglo(arreglo, elemento)

*/
function eliminarElementoDeArreglo(arreglo, elemento) {
    let indice = arreglo.indexOf(elemento);

    if (indice !== -1) {
        arreglo.splice(indice, 1);
        return "Elemento " + elemento + " eliminado del arreglo.";
    } else {
        return "El elemento " + elemento + " no se encuentra en el arreglo.";
    }
}

// Ejemplo de uso
let arregloEliminar = [10, 20, 30, 40, 50];
let elementoAEliminar = 30;
let resultadoEliminacionArreglo = eliminarElementoDeArreglo(arregloEliminar, elementoAEliminar);
console.log(resultadoEliminacionArreglo);
