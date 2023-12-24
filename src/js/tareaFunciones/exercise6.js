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

function buscarSubcadena(cadena, subcadena) {
    const posicion = myIndexOf(cadena, subcadena);
    return posicion !== -1 ? posicion : null;
}

export {buscarSubcadena}
