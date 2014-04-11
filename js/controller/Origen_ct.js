/**
 *
 * @type {Origen[]}
 */
origenes_set = [];
allOrigenes = {};

/**
 *
 * @returns {Origen}
 */
function getOrigenAzar() {
    return origenes_set[d(origenes_set.length)-1];
}

/**
 *
 * @param {string} nombreOrigen
 * @returns {Origen|false}
 */
function getOrigen(nombreOrigen) {
    return allOrigenes[nombreOrigen];
}

/**
 *
 * @param {string} nombreOrigen
 * @returns {string}
 */
function getNombreMasculinoAzar(nombreOrigen) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        origen = getOrigenAzar();
    }

    return origen.nombresMasculinos[d(origen.nombresMasculinos.length)-1] + " " + origen.apellidos[d(origen.apellidos.length)-1];
}

/**
 *
 * @param {string} nombreOrigen
 * @returns {string}
 */
function getNombreFemeninoAzar(nombreOrigen) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        origen = getOrigenAzar();
    }

    return origen.nombresFemeninos[d(origen.nombresFemeninos.length)-1] + " " + origen.apellidos[d(origen.apellidos.length)-1];
}

/**
 *
 * @param {string} nombreOrigen
 * @returns {string}
 */
function getLugarorigenAzar(nombreOrigen) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        origen = getOrigenAzar();
    }

    return origen.lugaresOrigen[d(origen.lugaresOrigen.length)-1];
}


/**
 *
 * @param {string} nombreOrigen
 * @returns {string}
 */
function getEtniaAzar(nombreOrigen) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        origen = getOrigenAzar();
    }

    return origen.etniaAlAzar();
}

/**
 *
 * @param {string} nombreOrigen
 * @returns {string[]}
 */
function getIdiomas(nombreOrigen) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        origen = getOrigenAzar();
    }

    return origen.idiomas;
}

/**
 *
 * @param {string} nombreOrigen
 * @returns {number}
 */
function getCostePosicionSocial(nombreOrigen) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        return 0;
    }

    return origen.costePosicionSocial;
}

/**
 *
 * @param {string} nombreOrigen
 * @returns {number}
 */
function getNombrePosicionSocial(nombreOrigen) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        return 0;
    }

    if (origen.clasePosicionSocial.length == 0) {
        return 0;
    }

    return origen.clasePosicionSocial.nombre;
}


/**
 *
 * @param {string} nombreOrigen
 * @returns {string}
 */
function getClaseSocialAzar(nombreOrigen) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        origen = getOrigenAzar();
    }

    var clase = d(100);

    for (var i = 0; i < origen.posiblesClases.length; i++) {
        if (clase <= origen.posiblesClases[i].rango) {
            return origen.posiblesClases[i].nombre;
        }
    }
}

function getDineroInicial(nombreOrigen,nombreClaseSocial) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        return 0;
    }
}
