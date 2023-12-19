/*
 encontrarPrimosGemelos(inicio, fin)
 Los números primos gemelos son aquellos que tienen una diferencia de 2.
*/

const { esNumeroPrimo} = require('./exercise3');

function encontrarPrimosGemelos(inicio, fin) {
    inicio = parseInt(inicio);
    fin = parseInt(fin);

    let paresPrimosGemelos = [];

    for (let i = inicio; i <= fin - 2; i++) {
        
        if (esNumeroPrimo(i) && esNumeroPrimo(i + 2)) {
            paresPrimosGemelos.push([i, i + 2]);
        }
    }

    return paresPrimosGemelos;
}

let firts = 1;
let last = 50;
let gemelosEncontrados = encontrarPrimosGemelos(firts, last);
console.log(`Pares de primos gemelos entre ${firts} y  ${last}: , existe :${gemelosEncontrados.length}`);
gemelosEncontrados.forEach(element => {
    console.log(element);
});
