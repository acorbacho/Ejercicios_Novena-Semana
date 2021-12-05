/**
 * Función main de la liga que ejecuta las funciones principales y emite el resultado de manera gráfica.
 */
function main() {
    /**
     * Recibe los resultados desordenados.
     * @type {Array}
     */
    var matriz_desordenada = liga()
    /**
     * Recibe los resultados ordenados.
     * @type {Array}
     */
    var matriz_ordenada = crear_matriz_ordenada(matriz_desordenada)

    for (let i = 0; i < 22; i++) {

        for (let j = 0; j < 9; j++) {
            document.getElementById("f" + i + "c" + j).innerHTML = matriz_ordenada[i][j]
        }
    }
}
main()