/*
eliminarSubcadena(cadena, subcadena)

*/

const { EliminarSubcadena} = require('./utils');

function eliminarSubcadena(cadena, subcadena) {
    return EliminarSubcadena(cadena,subcadena);
}


// Ejemplo de uso
let textoConSubcadena = "JavaScript es un lenguaje poderoso";
let subcadenaAEliminar = "";
let resultadoEliminacion = eliminarSubcadena(textoConSubcadena, subcadenaAEliminar);
console.log("Texto después de eliminar la subcadena: " + resultadoEliminacion);
