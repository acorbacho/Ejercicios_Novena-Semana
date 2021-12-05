/**
 * Función que elabora los resultados de una liga de futbol.
 * @returns {Array} - Matriz de la liga con los resultados (sin ordenar).
 */
function liga() {
    /**
     * Variable que almacena la matriz con los resultados de la liga.
     * @type {Array}
     */
    var matriz_liga =
        [['Real Madrid', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Real Sociedad', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Villareal', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Valencia', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Celta de Vigo', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Barcelona', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Betis', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Athletic', 0, 0, 0, 0, 0, 0, 0, 0],
        ['RCD Espanyol', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Osasuna', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Alavés', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Granada', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Elche', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Rayo Vallecano', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Atlético de Madrid', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Sevilla', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Mallorca', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Cádiz', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Getafe', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Levante', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Zaragoza', 0, 0, 0, 0, 0, 0, 0, 0],
        ['Deportivo de la Coruña', 0, 0, 0, 0, 0, 0, 0, 0]]
    /**
     * Contabiliza los goles a favor de cada partido.
     * @type {number}
     */
    var goles_favor
    /**
     * Contabiliza los goles en contra de cada partido.
     * @type {number}
     */
    var goles_contra

    for (i = 0; i < matriz_liga.length; i++) {
        goles_favor = 0
        goles_contra = 0

        for (j = 0; j < matriz_liga.length; j++) {

            if (j !== i) {
                goles_favor = random_number(0, 5)
                goles_contra = random_number(0, 5)
                goles_diferencia = goles_favor - goles_contra
                matriz_liga[i][1]++
                matriz_liga[j][1]++
                matriz_liga[i][5] = matriz_liga[i][5] + goles_favor
                matriz_liga[j][5] = matriz_liga[j][5] + goles_contra
                matriz_liga[i][6] = matriz_liga[i][5] + goles_contra
                matriz_liga[j][6] = matriz_liga[j][5] + goles_favor
                matriz_liga[i][7] = matriz_liga[i][5] - matriz_liga[i][6]
                matriz_liga[j][7] = matriz_liga[j][5] - matriz_liga[j][6]
                if (goles_diferencia > 0) {
                    matriz_liga[i][2]++
                    matriz_liga[j][4]++
                    matriz_liga[i][8] + 3
                } else if (goles_diferencia < 0) {
                    matriz_liga[j][2]++
                    matriz_liga[i][4]++
                    matriz_liga[j][8] + 3
                } else {
                    matriz_liga[i][3]++
                    matriz_liga[i][3]++
                    matriz_liga[i][8]++
                    matriz_liga[j][8]++
                }

            } else {
                continue
            }
        }
    }
    return matriz_liga
}