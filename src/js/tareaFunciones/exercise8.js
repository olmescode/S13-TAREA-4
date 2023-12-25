/*
Elimina todas las apariciones de una subcadena dentro de otra cadena.

Parameters:
cadena: La cadena principal.
subcadena: La subcadena a eliminar.
*/
import { EliminarSubcadena } from '../utils.js'

function eliminarSubcadena(cadena, subcadena) {
    let resultadoEliminacion = EliminarSubcadena(cadena,subcadena);
    return "Texto después de eliminar la subcadena: " + resultadoEliminacion
}

export {eliminarSubcadena}
