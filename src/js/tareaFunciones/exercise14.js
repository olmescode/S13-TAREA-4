/*
Convierte una cadena de texto en un arreglo de caracteres.

Parameters:
cadena: La cadena que se convertirá en un arreglo.
*/
import { Split } from '../utils.js'

function convertirCadenaAArreglo(cadena) {
    let message = "Cadena convertida a arreglo:\n";
    let i  = 0;

    let arregloConvertido = Split(cadena, ' ');

    arregloConvertido.forEach(element => {
        message +=`[${i}] ${element} \n`;
        i++;
   });

    return message;
};

export {convertirCadenaAArreglo}
