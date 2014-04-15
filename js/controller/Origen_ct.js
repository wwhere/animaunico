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

    return origen.getNombreMasculino() + " " + origen.getApellido();
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

    return origen.getNombreFemenino() + " " + origen.getApellido();
}

/**
 *
 * @param {string} nombreOrigen
 * @returns {string}
 */
function getLugarOrigenAzar(nombreOrigen) {
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
        switch (d10()) {
            case 1:
                return CLASE_SOCIAL_POBRE;
                break;
            case 2:
            case 3:
            case 4:
            case 5:
                return CLASE_SOCIAL_MEDIO;
                break;
            case 6:
            case 7:
            case 8:
            case 9:
                return CLASE_SOCIAL_ALTO;
                break;
            case 10:
            default:
                return CLASE_SOCIAL_BAJA_NOBLEZA;
        }
    } else {

    var clase = d(100);
        for (var i = 0; i < origen.posiblesClases.length; i++) {
            if (clase <= origen.posiblesClases[i].rango) {
                return origen.posiblesClases[i].nombre;
            }
        }
    }
}

/**
 *
 * @param {string} nombreOrigen
 * @param {string} nombreClaseSocial
 * @returns {Dinero}
 */
function getDineroInicial(nombreOrigen,nombreClaseSocial) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        switch (nombreClaseSocial) {
            case CLASE_SOCIAL_POBRE:
                break;
            case CLASE_SOCIAL_MEDIO:
                break;
            case CLASE_SOCIAL_ALTO:
                break;
            case CLASE_SOCIAL_BAJA_NOBLEZA:
            default:
                break;

        }
    } else {
        for (var i = 0;i< origen.clasePosicionSocial.length; i++) {
            if (origen.clasePosicionSocial[i].nombre == nombreClaseSocial) {
                return origen.clasePosicionSocial[i].dinero;
            }
        }
        for (i = 0;i< origen.posiblesClases.length; i++) {
            if (origen.posiblesClases[i].nombre == nombreClaseSocial) {
                return origen.posiblesClases[i].dinero;
            }
        }
    }

    return new Dinero(0,0,0);
}

/**
 *
 * @param {string} nombreOrigen
 * @param {string} nombreClaseSocial
 * @returns {Array}
 */
function getBonosRaicesCulturales(nombreOrigen,nombreClaseSocial) {
    var origen = getOrigen(nombreOrigen);

    if (!origen) {
        return [];
    } else {
        for (var i = 0;i< origen.clasePosicionSocial.length; i++) {
            if (origen.clasePosicionSocial[i].nombre == nombreClaseSocial) {
                return origen.clasePosicionSocial[i].bonos;
            }
        }
        for (i = 0;i< origen.posiblesClases.length; i++) {
            if (origen.posiblesClases[i].nombre == nombreClaseSocial) {
                return origen.posiblesClases[i].bonos;
            }
        }
    }

    return [];
}
