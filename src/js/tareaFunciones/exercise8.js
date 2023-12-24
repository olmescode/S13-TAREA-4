/*
Elimina todas las apariciones de una subcadena dentro de otra cadena.

Parameters:
cadena: La cadena principal.
subcadena: La subcadena a eliminar.
*/
import { EliminarSubcadena } from '../utils.js'
//const { EliminarSubcadena } = require('../utils');

function eliminarSubcadena(cadena, subcadena) {
    return EliminarSubcadena(cadena,subcadena);
}

export {eliminarSubcadena}
