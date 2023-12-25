/*
Encuentra pares de números primos gemelos en un rango dado.

Parameters:
inicio: El inicio del rango.
fin: El fin del rango.
*/
import { EsNumeroPrimo } from '../utils.js'

function formatMensaje(paresPrimosGemelos, inicio, fin) {
    if (paresPrimosGemelos.length > 0) {
        let message = `Pares de primos gemelos entre ${inicio} y ${fin}: existe ${paresPrimosGemelos.length}`;

        paresPrimosGemelos.forEach(element => {
            message += `\n${element}`;
        });

        return message;
    } else {
        return `No se encontraron pares de primos gemelos entre ${inicio} y ${fin}.`;
    }
}

function encontrarPrimosGemelos(inicio, fin) {
    inicio = parseInt(inicio);
    fin = parseInt(fin);

    let paresPrimosGemelos = [];

    for (let i = inicio; i <= fin - 2; i++) {
        
        if (EsNumeroPrimo(i) && EsNumeroPrimo(i + 2)) {
            paresPrimosGemelos.push([i, i + 2]);
        }
    }

    return formatMensaje(paresPrimosGemelos, inicio, fin);
}

export {encontrarPrimosGemelos}
