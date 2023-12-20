/*
insertarSubcadena(cadena, subcadena, posicion)

*/
//import custum function
const { Substring} = require('./utils');

function insertarSubcadena(cadena, index, subcadena) {
    // Si el índice es mayor que la longitud de la cadena, ajustarlo al final
    index = Math.min(index, cadena.length);

    // Dividir la cadena en dos partes en el índice especificado
    var primeraParte = Substring(cadena,0, index);
    var segundaParte = Substring(cadena,index);

    // Concatenar la primera parte, la subcadena y la segunda parte
    var nuevaCadena = primeraParte + subcadena + segundaParte;

    return nuevaCadena;

}


// Ejemplo de uso
let cadenaOriginal = "Hola Mundo";
let subcadenaAInsertar = " hermoso ";
let posicionInsercion = 5;
let resultadoInsercion = insertarSubcadena(cadenaOriginal, posicionInsercion, subcadenaAInsertar);
console.log("Cadena después de la inserción: " + resultadoInsercion);
