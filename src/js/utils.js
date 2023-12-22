import { Bases } from './bases.js'
//const Bases = require('./bases');

function Substring(cadena, start, end) {
    // Si el índice de inicio no está presente, se establece en 0 por defecto
    start = start || 0;

    // Si el índice de fin no está presente, se establece en la longitud de la cadena por defecto
    end = (end !== undefined) ? end : cadena.length;

    // Manejar índices negativos (cuentan desde el final de la cadena)
    if (start < 0) {
        start = Math.max(cadena.length + start, 0);
    }

    if (end < 0) {
        end = Math.max(cadena.length + end, 0);
    }

    // Asegurarse de que el índice de inicio no sea mayor que el índice de fin
    start = Math.min(start, end);

    // Construir la subcadena manualmente
    var subcadena = '';
    for (var i = start; i < end && i < cadena.length; i++) {
        subcadena += cadena[i];
    }

    return subcadena;
}

// Función eliminarSubcadena utilizando las funciones personalizadas
function EliminarSubcadena(cadena, subcadena) {
    var array = Split(cadena, subcadena);
    return Join(array, '');
}

// Función split personalizada
function Split(cadena, separador) {
    var resultado = [];
    var inicio = 0;
    var valInsert = "";

    for (var i = 0; i < cadena.length; i++) {
        if (Substring(cadena, i, i + separador.length) === separador) {

            valInsert = Substring(cadena, inicio, i);
            if (!(i === 0 && valInsert.length === 0)) {
                resultado.push(Substring(cadena, inicio, i));
            }

            inicio = i + separador.length;
        }
    }
    resultado.push(Substring(cadena, inicio));
    return resultado;
}

// Función join personalizada
function Join(array, separador) {
    var resultado = "";
    for (var i = 0; i < array.length - 1; i++) {
        resultado += array[i] + separador;
    }
    resultado += array[array.length - 1];
    return resultado;
}

// Función máximo de un arreglo personalizada
function MathMax(arreglo) {
    if (arreglo.length === 0) {
        return undefined; // Manejar el caso de arreglo vacío según tus necesidades
    }

    let maximo = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }

    return maximo;
}

function IndexOfArray(arreglo, elemento) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            return i;
        }
    }
    return -1; // Devolver -1 si el elemento no se encuentra en el arreglo
}

function Splice(arreglo, inicio, cantidadAEliminar, ...elementosAInsertar) {
    inicio = inicio < 0 ? arreglo.length + inicio : inicio;
    inicio = Math.min(arreglo.length, inicio);

    // Eliminar elementos del arreglo
    const elementosEliminados = arreglo.slice(inicio, inicio + cantidadAEliminar);
    const nuevosElementos = [];

    // Construir el nuevo arreglo con los elementos a la izquierda de la posición de inicio
    for (let i = 0; i < inicio; i++) {
        nuevosElementos.push(arreglo[i]);
    }

    // Agregar los nuevos elementos al arreglo
    for (let i = 0; i < elementosAInsertar.length; i++) {
        nuevosElementos.push(elementosAInsertar[i]);
    }

    // Agregar los elementos restantes al arreglo
    for (let i = inicio + cantidadAEliminar; i < arreglo.length; i++) {
        nuevosElementos.push(arreglo[i]);
    }

    // Reemplazar el arreglo original con el nuevo arreglo
    arreglo.length = 0;
    for (let i = 0; i < nuevosElementos.length; i++) {
        arreglo.push(nuevosElementos[i]);
    }

    return nuevosElementos;
}

// Función para convertir a cualquier base especificada en el enum
function ConvertBase(numero, base) {
    if (typeof numero !== 'number' || isNaN(numero)) {
        throw new Error('El argumento debe ser un número válido.');
    }

    if (base !== Bases.BINARIO && base !== Bases.OCTAL && base !== Bases.DECIMAL && base !== Bases.HEXADECIMAL) {
        throw new Error('Base no válida. Utilice Bases.BINARIO, Bases.OCTAL, Bases.DECIMAL o Bases.HEXADECIMAL.');
    }

    if (numero === 0) {
        return '0';
    }

    let resultado = '';
    let numeroAbsoluto = Math.abs(numero);

    if (base === Bases.BINARIO || base === Bases.OCTAL) {
        while (numeroAbsoluto > 0) {
            resultado = (numeroAbsoluto % base).toString() + resultado;
            numeroAbsoluto = Math.floor(numeroAbsoluto / base);
        }

    } else if (base === Bases.HEXADECIMAL) {
        while (numeroAbsoluto > 0) {
            const resto = numeroAbsoluto % base;
            resultado = (resto < 10 ? resto : String.fromCharCode('A'.charCodeAt(0) + resto - 10)) + resultado;
            numeroAbsoluto = Math.floor(numeroAbsoluto / base);
        }
    } else if (base === Bases.DECIMAL) {
        while (numeroAbsoluto > 0) {
            resultado = (numeroAbsoluto % base).toString() + resultado;
            numeroAbsoluto = Math.floor(numeroAbsoluto / base);
        }
    }

    return numero < 0 ? '-' + resultado : resultado;

}

function _isBinary(numero) {
    const expresionRegularBinaria = /^[01]+$/;
    return expresionRegularBinaria.test(numero);
}

//Funcion que convierte base 2 a cualquier base 
function ParseInt(numero, base) {
    if (typeof numero !== 'string') {
        throw new Error('El argumento debe ser una cadena.');
    }

    if (!_isBinary(numero)) {
        throw new Error('Número no válido en formato binario.');
    }

    if (base !== Bases.DECIMAL && base !== Bases.OCTAL && base !== Bases.HEXADECIMAL) {
        throw new Error('Base de destino no válida. Utilice Bases.DECIMAL, Bases.OCTAL o Bases.HEXADECIMAL.');
    }

    const caracteres = '0123456789abcdefghijklmnopqrstuvwxyz';
    const baseCaracteres = caracteres.slice(0, base);

    let resultado = 0;
    const longitud = numero.length;

    for (let i = 0; i < longitud; i++) {
        const caracter = numero.charAt(longitud - i - 1).toLowerCase();
        const valorCaracter = baseCaracteres.indexOf(caracter);

        if (valorCaracter === -1 || valorCaracter >= Bases.BINARIO) {
            throw new Error('Número no válido para la base especificada.');
        }

        resultado += valorCaracter * Math.pow(Bases.BINARIO, i);
    }

    return ConvertBase(resultado, base);
}

// Exporta la función
export { Substring, EliminarSubcadena, Split, Join, MathMax, IndexOfArray, Splice, ConvertBase, ParseInt };
//module.exports = { Substring, EliminarSubcadena, Split, Join, MathMax, IndexOfArray, Splice, ConvertBase, ParseInt };
