/*
encontrarDivisores(numero)

*/
function encontrarDivisores(numero) {
    numero = parseInt(numero);
    let divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    return "Los divisores de " + numero + " son: " + divisores.join(", ");
}

// Ejemplo de uso
let divisorsResult = encontrarDivisores(6);
console.log(divisorsResult);
