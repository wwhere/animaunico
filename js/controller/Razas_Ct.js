/**
 *
 * @type {Raza[]}
 */
var razas_set = [];



/**
 *
 * @param {string} nombre
 * @returns {Raza}
 * @throws ERR_RAZA_ERRONEA
 */
function getRaza(nombre) {
    for (var i=0;i<razas_set.length;i++) {
        if (razas_set[i].getNombre() == nombre) {
            return razas_set[i];
        }
    }
    throw _l(ERR_RAZA_ERRONEA);
}



function getColorOjosAzar(etnia) {
    switch (etnia) {
        case ETNIA_ASHER:

    }
}

function getColorPeloAzar(etnia) {
    switch (etnia) {
        case ETNIA_ASHER:

    }
}

function getColorPielAzar(etnia) {
    switch (etnia) {
        case ETNIA_ASHER:

    }
}