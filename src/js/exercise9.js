/*
convertirArregloACadena(arreglo, separador)

*/
function convertirArregloACadena(arreglo, separador) {
    return arreglo.join(separador);
}

// Ejemplo de uso
let arrayParaConvertir = ["Uno", "Dos", "Tres"];
let separadorCadena = "-";
let resultadoConversion = convertirArregloACadena(arrayParaConvertir, separadorCadena);
console.log("Arreglo convertido a cadena: " + resultadoConversion);
