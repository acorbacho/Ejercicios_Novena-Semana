/**
 * Función que crea un número aleatorio.
 * @param {number} min - Valor mínimo.
 * @param {number} max - Valor máximo
 * @returns {number} - Número.
 */
function random_number(min, max) {
    /**
     * Variable que almacena el valor mínimo del array pasada por parámetro.
     * @type {number}
     */
    var minAux = min
    /**
     * Variable que almacena el valor máximo del array pasada por parámetro.
     * @type {number}
     */
    var maxAux = max
    /**
     * Variable que almacena cada valor del array.
     * @type {number}
     */
    var numero = Math.floor(Math.random() * (maxAux - minAux)) + minAux
    return numero
}