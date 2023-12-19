/*
 encontrarPrimosGemelos(inicio, fin)
 Los números primos gemelos son aquellos que tienen una diferencia de 2.
*/
function _esNumeroPrimo(numero) {
    numero = parseInt(numero);

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
        if (_esNumeroPrimo(i) && _esNumeroPrimo(i + 2)) {
            paresPrimosGemelos.push([i, i + 2]);
        }
    }

    return paresPrimosGemelos;
}

// Ejemplo de uso
let gemelosEncontrados = encontrarPrimosGemelos(10, 50);
console.log("Pares de primos gemelos entre 10 y 50: ", gemelosEncontrados);
