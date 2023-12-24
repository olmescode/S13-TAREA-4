/*
Encuentra pares de números primos gemelos en un rango dado.

Parameters:
inicio: El inicio del rango.
fin: El fin del rango.
*/
//import { esNumeroPrimo } from './exercise3.js'
//const { esNumeroPrimo } = require('./exercise3');

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

const esNumeroPrimo = (numero) => {
    numero = parseInt(numero);
    let isPrime = null

    if (numero <= 1) {
        isPrime = false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            isPrime = false;
        }
    }
    isPrime = true

    return isPrime;
}

function encontrarPrimosGemelos(inicio, fin) {
    inicio = parseInt(inicio);
    fin = parseInt(fin);

    let paresPrimosGemelos = [];

    for (let i = inicio; i <= fin - 2; i++) {
        
        if (esNumeroPrimo(i) && esNumeroPrimo(i + 2)) {
            paresPrimosGemelos.push([i, i + 2]);
        }
    }

    return formatMensaje(paresPrimosGemelos, inicio, fin);;
}

export {encontrarPrimosGemelos}
