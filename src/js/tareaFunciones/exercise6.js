/*
Busca una subcadena dentro de otra cadena y devuelve su posición.

Parameters:
cadena: La cadena principal.
subcadena: La subcadena a buscar.
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

function buscarSubcadena(cadena, subcadenaBuscada) {
    const posicion = myIndexOf(cadena, subcadenaBuscada);
    let result =  null

    if (posicion !== null) {
        result = `La subcadena "${subcadenaBuscada}" se encontró en la posición ${posicion}.`;
    } else {
        result = `La subcadena "${subcadenaBuscada}" no se encontró en la cadena principal.`;
    }

    return result
}

export { buscarSubcadena }
