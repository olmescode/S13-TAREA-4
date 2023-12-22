/*
 encontrarPrimosGemelos(inicio, fin)
 Los números primos gemelos son aquellos que tienen una diferencia de 2.
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
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
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

// Exporta la función
export {encontrarPrimosGemelos}
//module.exports = { encontrarPrimosGemelos };


/*
// Ejemplo de uso
let firts = 1;
let last = 50;
let gemelosEncontrados = encontrarPrimosGemelos(firts, last);
console.log(`Pares de primos gemelos entre ${firts} y  ${last}: , existe :${gemelosEncontrados.length}`);
gemelosEncontrados.forEach(element => {
   console.log(element);
});
*/
