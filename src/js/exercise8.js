/*
eliminarSubcadena(cadena, subcadena)

*/
function eliminarSubcadena(cadena, subcadena) {
    return cadena.replace(subcadena, "");
}

// Ejemplo de uso
let textoConSubcadena = "JavaScript es un lenguaje poderoso";
let subcadenaAEliminar = "poderoso";
let resultadoEliminacion = eliminarSubcadena(textoConSubcadena, subcadenaAEliminar);
console.log("Texto después de eliminar la subcadena: " + resultadoEliminacion);
