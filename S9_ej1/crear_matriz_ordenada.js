/**
 * Función que crea un array ordenado a partir de otro array.
 * @param {Array} array - Array de entrada.
 * @returns {Array} - Array ordenado.
 */
function crear_matriz_ordenada(array) {
    /**
     * Guarda el array recibido.
     * @type {Array}
     */
    var matriz_recibida = array
    /**
     * Guarda el nuevo array ordenado.
     * @type {Array}
     */
    var nueva_matriz_ordenada = []
    /**
     * Almacena la logitud del array recibido para que no varíe en el tiempo.
     * @type {Array}
     */
    var longitud_matriz_recibida_inicial = matriz_recibida.length
    /**
     * Almacena una fila de la matriz para operar con ella.
     * @type {Array}
     */
    var fila
    /**
     * Variable comprobadora.
     * @type {boolean}
     */
    var comprobador
    /**
     * Almacena el valor máximo de los valores que el bucle 'for' de abajo recorre en el 'array_recibido'.
     * @type {(number | null)}
     */
    var maximo
    /**
     * Almacena el índice del valor máximo encontrado.
     * @type {number}
     */
    var indice

    for (let i = 0; i < longitud_matriz_recibida_inicial; i++) {
        maximo = null

        for (let j = 0; j < matriz_recibida.length; j++) {

            if (matriz_recibida[j][8] > maximo | maximo == null) {
                maximo = matriz_recibida[j][8]
                fila = matriz_recibida[j]
                nueva_matriz_ordenada[i] = fila
            }
        }
        indice = matriz_recibida.indexOf(fila)
        matriz_recibida.splice(indice, 1)
    }
    comprobador = true

    while (comprobador) {
        comprobador = false

        for (let k = 1; k < nueva_matriz_ordenada.length; k++) {

            if (nueva_matriz_ordenada[k][8] == nueva_matriz_ordenada[k - 1][8] && nueva_matriz_ordenada[k][7] > nueva_matriz_ordenada[k - 1][7]) {
                var valor_almacenado = nueva_matriz_ordenada[k - 1]
                nueva_matriz_ordenada[k - 1] = nueva_matriz_ordenada[k]
                nueva_matriz_ordenada[k] = valor_almacenado
                comprobador = true

            } else {
                continue
            }
        }
    }
    comprobador = true

    while (comprobador) {
        comprobador = false

        for (let k = 1; k < nueva_matriz_ordenada.length; k++) {

            if (nueva_matriz_ordenada[k][8] == nueva_matriz_ordenada[k - 1][8] && nueva_matriz_ordenada[k][7] == nueva_matriz_ordenada[k - 1][7] && nueva_matriz_ordenada[k][5] > nueva_matriz_ordenada[k - 1][5]) {
                var valor_almacenado = nueva_matriz_ordenada[k - 1]
                nueva_matriz_ordenada[k - 1] = nueva_matriz_ordenada[k]
                nueva_matriz_ordenada[k] = valor_almacenado
                comprobador = true
            } else {
                continue
            }
        }
    }
    return nueva_matriz_ordenada
}