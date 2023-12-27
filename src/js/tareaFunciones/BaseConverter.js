import { Bases } from '../bases.js';
import { ConvertBase, ParseInt } from '../utils.js';

class BaseConverter {
    // Function to convert base 10 to base 2
    static base10ABase2(numero) {
        const numeroConvertido = parseFloat(numero);
        let numeroBase2 = ConvertBase(numeroConvertido, Bases.BINARIO);
        return "Número " + numero + " en base 2: " + numeroBase2
    }

    // Function to convert base 10 to base 8
    static base10ABase8(numero) {
        const numeroConvertido = parseFloat(numero);
        let numeroBase8 = ConvertBase(numeroConvertido, Bases.OCTAL);
        return "Número " + numero + " en base 8: " + numeroBase8
    }

    // Function to convert base 10 to base 16
    static base10ABase16(numero) {
        const numeroConvertido = parseFloat(numero);
        let numeroBase16 = ConvertBase(numeroConvertido, Bases.HEXADECIMAL);
        return "Número " + numero + " en base 16: " + numeroBase16
    }

    // Function to convert base 2 to base 10
    static base2ABase10(numeroBinario) {
        let numeroBase10DesdeBinario = ParseInt(numeroBinario, Bases.DECIMAL);
        return "Número binario " + numeroBinario + " en base 10: " + numeroBase10DesdeBinario
    }

    // Function to convert base 2 to base 8
    static base2ABase8(numeroBinario) {
        let numeroOctalDesdeBinario = ParseInt(numeroBinario, Bases.OCTAL);
        return "Número binario " + numeroBinario + " en base 8: " + numeroOctalDesdeBinario
    }

    // Function to convert base 2 to base 16
    static base2ABase16(numeroBinario) {
        let numeroHexadecimalDesdeBinario = ParseInt(numeroBinario, Bases.HEXADECIMAL);
        return "Número binario " + numeroBinario + " en base 16: " + numeroHexadecimalDesdeBinario
    }
}

export default BaseConverter;
