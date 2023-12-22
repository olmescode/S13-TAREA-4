/*
eliminarSubcadena(cadena, subcadena)

*/
import { EliminarSubcadena } from '../utils.js'
//const { EliminarSubcadena } = require('../utils');

function eliminarSubcadena(cadena, subcadena) {
    return EliminarSubcadena(cadena,subcadena);
}

// Exporta la función
export {eliminarSubcadena}
//module.exports = { eliminarSubcadena };


// Ejemplo de uso
// let textoConSubcadena = "JavaScript es un lenguaje poderoso";
// let subcadenaAEliminar = "";
// let resultadoEliminacion = eliminarSubcadena(textoConSubcadena, subcadenaAEliminar);
// console.log("Texto después de eliminar la subcadena: " + resultadoEliminacion);
