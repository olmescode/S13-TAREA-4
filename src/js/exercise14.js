/*
convertirCadenaAArreglo(cadena)

*/
function convertirCadenaAArreglo(cadena) {
    return cadena.split('');
}

// Ejemplo de uso
let cadenaParaConvertir = "Hola";
let arregloConvertido = convertirCadenaAArreglo(cadenaParaConvertir);
console.log("Cadena convertida a arreglo: ", arregloConvertido);
