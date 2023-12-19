/*
buscarSubcadena(cadena, subcadena)

*/

function myIndexOf(cadena, subcadena, desde = 0) {
    if (desde < 0 || desde >= cadena.length) {
        return -1;
    }

    for (let i = desde; i < cadena.length; i++) {
        let coincide = true;

        for (let j = 0; j < subcadena.length; j++) {
            if (cadena[i + j] !== subcadena[j]) {
                coincide = false;
                break;
            }
        }

        if (coincide) {
            return i;
        }
    }

    return -1;
}


function buscarSubcadena(cadena, subcadena) {
    const posicion = myIndexOf(cadena, subcadena);
    return posicion !== -1 ? posicion : null;
}

// Ejemplo de uso
let cadenaPrincipal = "Esto es una cadena de ejemplo";
let subcadenaBuscada = "cadena";

let resultado = buscarSubcadena(cadenaPrincipal, subcadenaBuscada);

if (resultado !== null) {
    console.log(`La subcadena "${subcadenaBuscada}" se encontró en la posición ${resultado}.`);
} else {
    console.log(`La subcadena "${subcadenaBuscada}" no se encontró en la cadena principal.`);
}