import { encontrarDivisores } from '../js/tareaFunciones/exercise1.js'
import { esNumeroPerfecto } from '../js/tareaFunciones/exercise2.js'
import { esNumeroPrimo } from '../js/tareaFunciones/exercise3.js'
import { encontrarPrimosGemelos } from '../js/tareaFunciones/exercise4.js'
import { concatenarCadenas } from '../js/tareaFunciones/exercise5.js'
import { buscarSubcadena } from '../js/tareaFunciones/exercise6.js';
import { insertarSubcadena } from '../js/tareaFunciones/exercise7.js';
import { eliminarSubcadena } from '../js/tareaFunciones/exercise8.js';
import { convertirArregloACadena } from '../js/tareaFunciones/exercise9.js';
import { encontrarMayorEnArreglo } from '../js/tareaFunciones/exercise10.js';
import { buscarElementoEnArreglo } from '../js/tareaFunciones/exercise11.js';
import { insertarElementoEnArreglo } from '../js/tareaFunciones/exercise12.js';
import { eliminarElementoDeArreglo } from '../js/tareaFunciones/exercise13.js';
import { convertirCadenaAArreglo } from '../js/tareaFunciones/exercise14.js';
import { base10ABase2 } from '../js/tareaFunciones/exercise15.js';
import { base10ABase8 } from '../js/tareaFunciones/exercise16.js';
import { base10ABase16 } from '../js/tareaFunciones/exercise17.js';
import { base2ABase10 } from '../js/tareaFunciones/exercise18.js';
import { base2ABase8 } from '../js/tareaFunciones/exercise19.js';
import { base2ABase16 } from '../js/tareaFunciones/exercise20.js';

// Dictionary of main functions and titles
const exercises = {
    exercise1Button: {
        title: "Funcion para ",
        func: encontrarDivisores,
        input: 1,
        inputLabels: ["Número"],
    },
    exercise2Button: {
        title: "Funcion para ",
        func: esNumeroPerfecto,
        input: 1,
        inputLabels: ["Número"],
    },
    exercise3Button: {
        title: "Funcion para ",
        func: esNumeroPrimo,
        input: 1,
        inputLabels: ["Número"],
    },
    exercise4Button: {
        title: "Funcion para ",
        func: encontrarPrimosGemelos,
        input: 2,
        inputLabels: ["Inicio", "Fin"],
    },
    exercise5Button: {
        title: "Funcion para calcular el área de un rectángulo",
        func: concatenarCadenas,
        input: 2,
        inputLabels: ["Base", "Altura"],
    },
    exercise6Button: {
        title: "Funcion para imprimir un nombre",
        func: buscarSubcadena,
        input: 1,
        inputLabels: ["Nombre"],
    },
    exercise7Button: {
        title: "Funcion para convertir Celsius a Fahrenheit",
        func: insertarSubcadena,
        input: 1,
        inputLabels: ["Temperatura en Celsius"],
    },
    exercise8Button: {
        title: "Funcion para contar un caracter en una frase",
        func: eliminarSubcadena,
        input: 2,
        inputLabels: ["Frase", "Caracter a buscar"],
    },
    exercise9Button: {
        title: "Funcion para imprimir los números del uno al diez",
        func: convertirArregloACadena,
        input: 0,
        inputLabels: [],
    },
    exercise10Button: {
        title: "Funcion para sumar una lista de números",
        func: encontrarMayorEnArreglo,
        input: 1,
        inputLabels: ["Lista (separado por comas)"],
    },

    // Add more exercises as needed
};

export {exercises}
//module.exports = exercises;
