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
        title: "Función para encontrar divisores de un número",
        func: encontrarDivisores,
        input: 1,
        inputLabels: ["Número"],
    },
    exercise2Button: {
        title: "Función para verificar si un número es perfecto",
        func: esNumeroPerfecto,
        input: 1,
        inputLabels: ["Número"],
    },
    exercise3Button: {
        title: "Función para verificar si un número es primo",
        func: esNumeroPrimo,
        input: 1,
        inputLabels: ["Número"],
    },
    exercise4Button: {
        title: "Función para encontrar números primos gemelos en un rango",
        func: encontrarPrimosGemelos,
        input: 2,
        inputLabels: ["Inicio", "Fin"],
    },
    exercise5Button: {
        title: "Función para concatenar dos cadenas",
        func: concatenarCadenas,
        input: 2,
        inputLabels: ["Cadena 1", "Cadena 2"],
    },
    exercise6Button: {
        title: "Función para buscar una subcadena en una cadena",
        func: buscarSubcadena,
        input: 2,
        inputLabels: ["Cadena", "Subcadena"],
    },
    exercise7Button: {
        title: "Función para insertar una subcadena en una posición dada",
        func: insertarSubcadena,
        input: 3,
        inputLabels: ["Cadena", "Posición", "Subcadena"],
    },
    exercise8Button: {
        title: "Función para eliminar una subcadena de una cadena",
        func: eliminarSubcadena,
        input: 2,
        inputLabels: ["Cadena", "Subcadena"],
    },
    exercise9Button: {
        title: "Función para convertir un arreglo a una cadena",
        func: convertirArregloACadena,
        input: 2,
        inputLabels: ["Lista", "Separador"],
    },
    exercise10Button: {
        title: "Función para encontrar el elemento mayor en un arreglo",
        func: encontrarMayorEnArreglo,
        input: 1,
        inputLabels: ["Lista (separado por comas)"],
    },
    exercise11Button: {
        title: "Función para buscar un elemento en un arreglo",
        func: buscarElementoEnArreglo,
        input: 2,
        inputLabels: ["Lista (separado por comas)", "Elemento"],
    },
    exercise12Button: {
        title: "Función para insertar un elemento en un arreglo en una posición dada",
        func: insertarElementoEnArreglo,
        input: 3,
        inputLabels: ["Lista (separado por comas)", "Elemento", "Posición"],
    },
    exercise13Button: {
        title: "Función para eliminar un elemento de un arreglo",
        func: eliminarElementoDeArreglo,
        input: 2,
        inputLabels: ["Lista (separado por comas)", "Elemento"],
    },
    exercise14Button: {
        title: "Función para convertir una cadena a un arreglo",
        func: convertirCadenaAArreglo,
        input: 1,
        inputLabels: ["Cadena"],
    },
    exercise15Button: {
        title: "Función para convertir de base 10 a base 2",
        func: base10ABase2,
        input: 1,
        inputLabels: ["Número"],
    },
    exercise16Button: {
        title: "Función para convertir de base 10 a base 8",
        func: base10ABase8,
        input: 1,
        inputLabels: ["Número"],
    },
    exercise17Button: {
        title: "Función para convertir de base 10 a base 16",
        func: base10ABase16,
        input: 1,
        inputLabels: ["Número"],
    },
    exercise18Button: {
        title: "Función para convertir de base 2 a base 10",
        func: base2ABase10,
        input: 1,
        inputLabels: ["Número binario"],
    },
    exercise19Button: {
        title: "Función para convertir de base 2 a base 8",
        func: base2ABase8,
        input: 1,
        inputLabels: ["Número binario"],
    },
    exercise20Button: {
        title: "Función para convertir de base 2 a base 16",
        func: base2ABase16,
        input: 1,
        inputLabels: ["Número binario"],
    },

    // ... (rest of the exercises)
};

export {exercises}
//module.exports = exercises;
