/**
 *
 * @type {Categoria[]}
 */
var categorias_set = [];

var ERR_CATEGORIA_ERRONEA = "Error: Nombre de categoría erróneo";

/**
 * Devuelve la Categoria que tiene el nombre indicado
 * @param {string} nombre El nombre de la categoría.
 * @returns {Categoria}
 * @throws ERR_CATEGORIA_ERRONEA
 */
function getCategoria(nombre) {
    for (var i=0;i<categorias_set.length;i++) {
        if (categorias_set[i].getNombre() == nombre) {
            return categorias_set[i];
        }
    }
    throw ERR_CATEGORIA_ERRONEA + ": " + nombre;
}

/**
 * Indica si se puede elegir la categoría indicada para el personaje actual
 * @param {string} nombreCategoria
 * @returns {boolean}
 */
function puedeElegirCategoria(nombreCategoria) {
    return (nombreCategoria != personaje_actual.getCategoria().getNombre());
}

/**
 * Inicializa las categorías.
 */
function initCategorias() {
    categorias_set.sort(SortPorAtributoNombre);
    for (var i = 0; i < categorias_set.length; i++) {
        categorias_set[i].initCostes();
    }
}

/**
 *
 * @param {Categoria} catActual
 * @param {Categoria} catNueva
 * @returns {number}
 */
function costeCambioCategoria(catActual, catNueva) {
    var coste = 60;

    var arqActual = catActual.getArquetipo();
    var arqNuevo = catNueva.getArquetipo();

    if ((arqActual == ARQ_SIN_CATEGORIA) || (arqNuevo == ARQ_SIN_CATEGORIA)) {
        coste = 20;
    } else {
        if (!arqActual.isMixto()) {
            if (arqActual == arqNuevo) {
                coste = 20;
            }
        } else {
            if (arqActual.comparteArquetipoMixto(arqNuevo)) {
                coste = 40;
            }
        }
    }

    return coste;
}