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



function getDescripcionAzar(etnia) {
    var descripcion = "";
    var ojos, pelo, piel, otros;
    switch (etnia) {
        case ETNIA_ASHER:
            ojos = d(2);
            switch (ojos) {
                case 1:
                    descripcion += _l(OJOS_CASTAÑO) + ". ";
                    break;
                default:
                    descripcion += _l(OJOS_GRIS) + ". ";
                    break;
            }
            pelo = d(2);
            switch (pelo) {
                case 1:
                    descripcion += _l(PELO_CASTAÑO) + ". ";
                    break;
                default:
                    descripcion += _l(PELO_MORENO) + ". ";
                    break;
            }
            break;
        case ETNIA_AION:
            ojos = d(3);
            switch (ojos) {
                case 1:
                    descripcion += _l(OJOS_AZUL) + ". ";
                    break;
                case 2:
                    descripcion += _l(OJOS_GRIS) + ". ";
                    break;
                case 3:
                    descripcion += _l(OJOS_AMBAR) + ". ";
                    break;
            }
            pelo = d(3);
            switch (pelo) {
                case 1:
                    descripcion += _l(PELO_RUBIO) + ". ";
                    break;
                case 2:
                    descripcion += _l(PELO_RUBIO_PLATINO) + ". ";
                    break;
                default:
                    descripcion += _l(PELO_GRIS) + ". ";
                    break;
            }
            break;
        case ETNIA_TAYAHAR:
            ojos = d(6);
            switch (ojos) {
                case 1:
                    descripcion += _l(OJOS_AZUL) + ". ";
                    break;
                case 2:
                    descripcion += _l(OJOS_GRIS) + ". ";
                    break;
                case 3:
                    descripcion += _l(OJOS_AMBAR) + ". ";
                    break;
                case 4:
                    descripcion += _l(OJOS_CASTAÑO) + ". ";
                    break;
                case 5:
                    descripcion += _l(OJOS_AVELLANA) + ". ";
                    break;
                default:
                    descripcion += _l(OJOS_VERDE) + ". ";
                    break;
            }
            pelo = d(2);
            switch (pelo) {
                case 1:
                    descripcion += _l(PELO_CASTAÑO) + ". ";
                    break;
                default:
                    descripcion += _l(PELO_NEGRO) + ". ";
                    break;
            }
            break;
            descripcion += _l(PIEL_OSCURA_BRUÑIDA)+ ". ";
            break;
        case ETNIA_ZINNER:
            break;
        case ETNIA_RYUAN:
            ojos = d(6);
            switch (ojos) {
                case 1:
                    descripcion += _l(OJOS_AZUL) + ". ";
                    break;
                case 2:
                    descripcion += _l(OJOS_GRIS) + ". ";
                    break;
                case 3:
                    descripcion += _l(OJOS_AMBAR) + ". ";
                    break;
                case 4:
                    descripcion += _l(OJOS_CASTAÑO) + ". ";
                    break;
                case 5:
                    descripcion += _l(OJOS_AVELLANA) + ". ";
                    break;
                default:
                    descripcion += _l(OJOS_VERDE) + ". ";
                    break;
            }
            descripcion += _l(OJOS_ALMENDRADOS) + ". ";
            descripcion += _l(PELO_NEGRO) + ". ";
            break;
        case ETNIA_NORNE:
            ojos = d(6);
            switch (ojos) {
                case 1:
                    descripcion += _l(OJOS_AZUL) + ". ";
                    break;
                case 2:
                    descripcion += _l(OJOS_GRIS) + ". ";
                    break;
                case 3:
                    descripcion += _l(OJOS_AMBAR) + ". ";
                    break;
                case 4:
                    descripcion += _l(OJOS_CASTAÑO) + ". ";
                    break;
                case 5:
                    descripcion += _l(OJOS_AVELLANA) + ". ";
                    break;
                default:
                    descripcion += _l(OJOS_VERDE) + ". ";
                    break;
            }
            pelo = d(3);
            switch (pelo) {
                case 1:
                    descripcion += _l(PELO_RUBIO) + ". ";
                    break;
                case 2:
                    descripcion += _l(PELO_PELIRROJO) + ". ";
                    break;
                default:
                    descripcion += _l(PELO_ANARANJADO) + ". ";
                    break;
            }
            descripcion += _l(PIEL_PALIDA) + ". ";
            break;
        case ETNIA_VILDIAN:
            ojos = d(6);
            switch (ojos) {
                case 1:
                    descripcion += _l(OJOS_AZUL) + ". ";
                    break;
                case 2:
                    descripcion += _l(OJOS_GRIS) + ". ";
                    break;
                case 3:
                    descripcion += _l(OJOS_AMBAR) + ". ";
                    break;
                case 4:
                    descripcion += _l(OJOS_CASTAÑO) + ". ";
                    break;
                case 5:
                    descripcion += _l(OJOS_AVELLANA) + ". ";
                    break;
                default:
                    descripcion += _l(OJOS_VERDE) + ". ";
                    break;
            }
            pelo = d(2);
            switch (pelo) {
                case 1:
                    descripcion += _l(PELO_CASTAÑO) + ". ";
                    break;
                default:
                    descripcion += _l(PELO_NEGRO) + ". ";
                    break;
            }
            descripcion += _l(PIEL_MORENA) + ". ";
            break;
        case ETNIA_DAEVAR:
            ojos = d(6);
            switch (ojos) {
                case 1:
                    descripcion += _l(OJOS_AZUL) + ". ";
                    break;
                case 2:
                    descripcion += _l(OJOS_GRIS) + ". ";
                    break;
                case 3:
                    descripcion += _l(OJOS_AMBAR) + ". ";
                    break;
                case 4:
                    descripcion += _l(OJOS_CASTAÑO) + ". ";
                    break;
                case 5:
                    descripcion += _l(OJOS_AVELLANA) + ". ";
                    break;
                default:
                    descripcion += _l(OJOS_VERDE) + ". ";
                    break;
            }
            descripcion += _l(PELO_BLANCO) + ". ";
            descripcion += _l(PIEL_MORENA) + ". ";
            break;
        case ETNIA_KWA:
            ojos = d(6);
            switch (ojos) {
                case 1:
                    descripcion += _l(OJOS_AZUL) + ". ";
                    break;
                case 2:
                    descripcion += _l(OJOS_GRIS) + ". ";
                    break;
                case 3:
                    descripcion += _l(OJOS_AMBAR) + ". ";
                    break;
                case 4:
                    descripcion += _l(OJOS_CASTAÑO) + ". ";
                    break;
                case 5:
                    descripcion += _l(OJOS_AVELLANA) + ". ";
                    break;
                default:
                    descripcion += _l(OJOS_VERDE) + ". ";
                    break;
            }
            descripcion += _l(PELO_NEGRO) + ". ";
            descripcion += _l(PIEL_NEGRA) + ". ";
            break;
        case ETNIA_CELSUS:
            ojos = d(3);
            switch (ojos) {
                case 1:
                    descripcion += _l(OJOS_AZUL) + ". ";
                    break;
                case 2:
                    descripcion += _l(OJOS_GRIS) + ". ";
                    break;
                default:
                    descripcion += _l(OJOS_AMBAR) + ". ";
                    break;
            }
            pelo = d(3);
            switch (pelo) {
                case 1:
                    descripcion += _l(PELO_RUBIO) + ". ";
                    break;
                case 2:
                    descripcion += _l(PELO_RUBIO_PLATINO) + ". ";
                    break;
                default:
                    descripcion += _l(PELO_GRIS) + ". ";
                    break;
            }
            descripcion += _l(PIEL_PALIDA) + ". ";
            break;
        default:
            ojos = d(6);
            switch (ojos) {
                case 1:
                    descripcion += _l(OJOS_AZUL) + ". ";
                    break;
                case 2:
                    descripcion += _l(OJOS_GRIS) + ". ";
                    break;
                case 3:
                    descripcion += _l(OJOS_AMBAR) + ". ";
                    break;
                case 4:
                    descripcion += _l(OJOS_CASTAÑO) + ". ";
                    break;
                case 5:
                    descripcion += _l(OJOS_AVELLANA) + ". ";
                    break;
                default:
                    descripcion += _l(OJOS_VERDE) + ". ";
                    break;
            }
            pelo = d(9);
            switch (pelo) {
                case 1:
                    descripcion += _l(PELO_NEGRO) + ". ";
                    break;
                case 2:
                    descripcion += _l(PELO_MORENO) + ". ";
                    break;
                case 3:
                    descripcion += _l(PELO_CASTAÑO) + ". ";
                    break;
                case 4:
                    descripcion += _l(PELO_RUBIO) + ". ";
                    break;
                case 5:
                    descripcion += _l(PELO_BLANCO) + ". ";
                    break;
                case 6:
                    descripcion += _l(PELO_RUBIO_PLATINO) + ". ";
                    break;
                case 7:
                    descripcion += _l(PELO_PELIRROJO) + ". ";
                    break;
                case 8:
                    descripcion += _l(PELO_ANARANJADO) + ". ";
                    break;
                default:
                    descripcion += _l(PELO_GRIS) + ". ";
                    break;
            }
    }
    return descripcion;
}

