/*
Verifica si un número es primo, es decir, solo es divisible
por 1 y por sí mismo.

Parameters:
numero: El número que se quiere verificar como primo.
*/
import { EsNumeroPrimo } from '../utils.js'
//const { EsNumeroPrimo } = require('../utils');

const verificarSiEsPrimo = (numero) => {
    const esPrimo = EsNumeroPrimo(numero);
    
    if (esPrimo) {
        return `${numero} es un número primo.`;
    } else {
        return `${numero} no es un número primo.`;
    }
};

export {verificarSiEsPrimo}
