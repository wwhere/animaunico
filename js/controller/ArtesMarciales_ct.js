/**
 *
 * @type {ArteMarcial[]}
 */
var artesMarcialesBasicas_set = [];
/**
 *
 * @type {ArteMarcial[]}
 */
var artesMarcialesAvanzadas_set = [];
var allArtesMarciales = {};

/**
 * Coste de un arte marcial
 * @type {number}
 */
var COSTE_ARTE_MARCIAL = 50;

/**
 * Coste de un arte marcial para la categoría Tao
 * @type {number}
 */
var COSTE_TAO_ARTE_MARCIAL = 20;

/**
 * Devuelve el arte marcial con el nombre indicado.
 * @param nombreArteMarcial
 * @returns {ArteMarcial}
 * @throws ERR_ARTE_MARCIAL_ERRONEA
 */
function getArteMarcial(nombreArteMarcial) {
    if (allArtesMarciales[nombreArteMarcial]) {
        return allArtesMarciales[nombreArteMarcial];
    } else {
        throw ERR_ARTE_MARCIAL_ERRONEA + ": " + nombreArteMarcial;
    }
}

/**
 * Devuelve el coste en PD de un arte marcial para el personaje actual.
 * @param esPrimera Booleano Indica si es el primer arte marcial que aprende el personaje
 * @returns {number}
 */
function costeArteMarcial(esPrimera) {
    var coste;
    if ((esPrimera) && (personaje_actual.getArmaInicial() == ARMA_SIN_ARMAS)) {
        if (personaje_actual.getCategoria().getNombre() == CAT_TAO) {
            coste = COSTE_TAO_ARTE_MARCIAL/2;
        } else {
            coste = COSTE_ARTE_MARCIAL/2;
        }
    } else {
        if (personaje_actual.getCategoria().getNombre() == CAT_TAO) {
            coste = COSTE_TAO_ARTE_MARCIAL;
        } else {
            coste = COSTE_ARTE_MARCIAL;
        }
    }
    return coste;
}

/**
 * Inicialización de las artes marciales. Ordena las listas, prepara listeners.
 */
function initArtesMarciales() {
    var i;

    artesMarcialesAvanzadas_set.sort(SortPorAtributoNombre);
    artesMarcialesBasicas_set.sort(SortPorAtributoNombre);

    for ( i = 0; i < artesMarcialesBasicas_set.length; i++) {
        allArtesMarciales[artesMarcialesBasicas_set[i].getNombre()] = artesMarcialesBasicas_set[i];
    }
    for ( i = 0; i < artesMarcialesAvanzadas_set.length; i++) {
        allArtesMarciales[artesMarcialesAvanzadas_set[i].getNombre()] = artesMarcialesAvanzadas_set[i];
    }

    DISPATCHER.on(EVENT_CHARACTER_SECCION_COMBATE_GENERAL, comprobarNumeroArtesMarciales);
}

function comprobarNumeroArtesMarciales() {
    if (personaje_actual.numArtesMarciales() > personaje_actual.maxArtesMarciales()) {
        var artesMarciales = personaje_actual.getArtesMarciales();
        var indice = artesMarciales.length-1;
        var arteMarcial = artesMarciales[indice];
        var nombre = arteMarcial.getNombre();

        anularArteMarcial({data:{arteMarcial:arteMarcial,esPrimera:(indice==0)}});
        alert (_l(ERROR_ARTE_MARCIAL_ELIMINADA_ATAQUE_BAJO) + ": " + nombre);
    }
}


/**
 *
 * @param {boolean} activar
 */
function vigilaRequisitosArtesMarciales(activar) {
    if (activar) {
            DISPATCHER.on(EVENT_CHARACTER_SECCION_COMBATE_GENERAL, compruebaRequisitosArtesMarcialesCompradas);
            DISPATCHER.on(EVENT_CHARACTER_SECCION_KI, compruebaRequisitosArtesMarcialesCompradas);
            DISPATCHER.on(EVENT_CHARACTER_SECCION_SECUNDARIAS, compruebaRequisitosArtesMarcialesCompradas);
    } else {
            DISPATCHER.off(EVENT_CHARACTER_SECCION_COMBATE_GENERAL, compruebaRequisitosArtesMarcialesCompradas);
            DISPATCHER.off(EVENT_CHARACTER_SECCION_KI, compruebaRequisitosArtesMarcialesCompradas);
            DISPATCHER.off(EVENT_CHARACTER_SECCION_SECUNDARIAS, compruebaRequisitosArtesMarcialesCompradas);
    }
}

function compruebaRequisitosArtesMarcialesCompradas(event) {
    var artesMarciales = personaje_actual.getArtesMarciales();
    for (var i = 0; i < artesMarciales.length; i++) {
        var arteMarcial = artesMarciales[i];
        if (!arteMarcial.cumpleRequisitos(personaje_actual)) {
            anularArteMarcial({data:{arteMarcial:arteMarcial,esPrimera:(personaje_actual.getArtesMarciales().length == 1)}});
            alert(ERROR_ARTE_MARCIAL_ELIMINADA_REQUISITOS + ": " + arteMarcial.getNombre());
        }
    }
}