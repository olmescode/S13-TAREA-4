/*
Toma un número como parámetro y devuelve una lista de sus divisores.
Los divisores son los números enteros por los cuales el número 
proporcionado es divisible sin dejar residuo.

Parameters:
numero: El número del cual se quieren encontrar los divisores.
*/

import { Join } from '../utils.js'

function encontrarDivisores(numero) {
    numero = parseInt(numero);
    let divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    return "Los divisores de " + numero + " son: " + Join(divisores,";");
}

export {encontrarDivisores}
