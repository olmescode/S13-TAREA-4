/*
insertarSubcadena(cadena, subcadena, posicion)

*/
function insertarSubcadena(cadena, subcadena, posicion) {
    return cadena.slice(0, posicion) + subcadena + cadena.slice(posicion);
}

// Ejemplo de uso
let cadenaOriginal = "Hola Mundo";
let subcadenaAInsertar = " hermoso";
let posicionInsercion = 5;
let resultadoInsercion = insertarSubcadena(cadenaOriginal, subcadenaAInsertar, posicionInsercion);
console.log("Cadena después de la inserción: " + resultadoInsercion);
