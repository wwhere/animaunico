/**
 *
 * @type {Raza[]}
 */
var razas_set = [];

var ERR_RAZA_ERRONEA = "Error: Nombre de raza erróneo";

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
    throw ERR_RAZA_ERRONEA;
}



