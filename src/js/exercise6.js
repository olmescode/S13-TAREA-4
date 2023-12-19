/*
buscarSubcadena(cadena, subcadena)

*/
function buscarSubcadena(cadena, subcadena) {
    return cadena.includes(subcadena);
}

// Ejemplo de uso
let texto = "JavaScript es genial";
let subcadenaABuscar = "es";
let resultadoBusqueda = buscarSubcadena(texto, subcadenaABuscar);
console.log("¿La subcadena \"" + subcadenaABuscar + "\" está en el texto? " + (resultadoBusqueda ? "Sí" : "No"));
