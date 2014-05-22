/**
 *
 * @type {TablaArmas[]}
 */
var tablasArmas_set = [];

/**
 *
 * @type {string[]}
 */
var CATEGORIAS_TABLAS_ARMAS = [
    CATEGORIA_TABLA_ARMAS_GENERALES,
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS,
    CATEGORIA_TABLA_ARMAS_ESTILOS,
    CATEGORIA_TABLA_ARMAS_ARTES_MARCIALES,
    CATEGORIA_TABLA_MISTICAS,
    CATEGORIA_TABLA_PSIQUICAS
];

/**
 *
 * @param {string} nombre
 * @returns {TablaArmas}
 * @throws ERR_TABLA_DESCONOCIDA
 */
function getTablaArmas(nombre) {
    for (var i = 0; i < tablasArmas_set.length;i++) {
        if (tablasArmas_set[i].getNombre() == nombre) {
            return tablasArmas_set[i];
        }
    }
    throw _l(ERR_TABLA_DESCONOCIDA) + ": " + nombre;
}