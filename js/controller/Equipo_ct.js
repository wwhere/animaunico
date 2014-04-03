/**
 *
 * @type {Arma[]}
 */
var armas_set = [];
/**
 *
 * @type {Armadura[]}
 */
var armaduras_set = [];
var bardas_set = [];

/**
 *
 * @type {Yelmo[]}
 */
var yelmos_set = [];

/**
 *
 * @type {Equipo[]}
 */
var vestimenta_set = [];
/**
 *
 * @type {Equipo[]}
 */
var calzado_set = [];
/**
 *
 * @type {Equipo[]}
 */
var animales_set = [];
/**
 *
 * @type {Equipo[]}
 */
var transporte_set = [];
/**
 *
 * @type {Equipo[]}
 */
var embarcaciones_set = [];
/**
 *
 * @type {Equipo[]}
 */
var raciones_set = [];
/**
 *
 * @type {Equipo[]}
 */
var vivienda_set = [];
/**
 *
 * @type {Equipo[]}
 */
var decoracion_set = [];
/**
 *
 * @type {Equipo[]}
 */
var orfebreria_set = [];
/**
 *
 * @type {Equipo[]}
 */
var venenos_set = [];
/**
 *
 * @type {Equipo[]}
 */
var varios_set = [];

/**
 *
 * @type {Equipo[][]}
 */
var equipo_set = [armas_set, armaduras_set, bardas_set, yelmos_set, vestimenta_set, calzado_set, animales_set, transporte_set, embarcaciones_set, raciones_set, vivienda_set, decoracion_set, orfebreria_set, venenos_set,varios_set];

/**
 *
 * @type {string[]}
 */
var categorias_equipo = [ EQUIPO_TIPO_ARMAS, EQUIPO_TIPO_ARMADURAS, EQUIPO_TIPO_BARDAS,
    EQUIPO_TIPO_YELMOS, EQUIPO_TIPO_VESTIMENTAS, EQUIPO_TIPO_CALZADO, EQUIPO_TIPO_ANIMALES,
    EQUIPO_TIPO_TRANSPORTE, EQUIPO_TIPO_EMBARCACIONES, EQUIPO_TIPO_RACIONES,
    EQUIPO_TIPO_VIVIENDAS, EQUIPO_TIPO_DECORACIONES, EQUIPO_TIPO_ORFEBRERIA, EQUIPO_TIPO_VENENOS, EQUIPO_TIPO_VARIOS];

/**
 *
 * @param {string} nombreItem
 * @returns {Equipo}
 */
function getEquipo(nombreItem) {
    for (var i = 0; i < equipo_set.length; i++) {
        for (var j=0; j < equipo_set[i].length;j++) {
            if (equipo_set[i][j].getNombre() == nombreItem) {
                return equipo_set[i][j];
            }
        }
    }
    throw _l(ERR_EQUIPO_DESCONOCIDO) + ":" + nombreItem;
}

/**
 * Inicializa las listas de equipo. Las ordena.
 */
function initEquipo() {
    for (var i = 0; i < equipo_set.length; i++) {
        equipo_set[i].sort(SortPorAtributoNombre);
    }
}

/**
 * Devuelve el arma indicada por el nombre
 * @param {string} nombreArma El nombre del arma que se busca
 * @returns {Arma}
 * @throws ERR_ARMA_DESCONOCIDA
 */
function getArma(nombreArma) {
    for (var i = 0; i < armas_set.length; i++) {
        if (armas_set[i].getNombre() == nombreArma) {
            return armas_set[i]
        }
    }
    throw _l(ERR_ARMA_DESCONOCIDA) + ": " + nombreArma;
}

/**
 *
 * @param {number} modificador
 * @param {Equipo} equipo
 * @returns {number}
 */
function getCosteConModificador(modificador, equipo) {
    var costeCobre = equipo.getCosteDinero().totalEnCobre();

    if (costeCobre == INCALCULABLE) {
        return INCALCULABLE;
    }

    switch (modificador) {
        case -5:
            costeCobre /= 2;
            break;
        case 0:
            break;
        case 5:
            costeCobre *= 20;
            break;
        case 10:
        case 15:
        case 20:
        case 25:
            costeCobre = INCALCULABLE;
            break;
    }

    return costeCobre;
}

/**
 *
 * @param {number} modificador
 * @param {Equipo} equipo
 * @returns {string}
 */
function getDisponibilidadConModificador(modificador, equipo) {
    var disponibilidad = equipo.getDisponibilidad();

    switch (modificador) {
        case -5:
        case 0:
            break;
        case 5:
            disponibilidad = DISP_A;
            break;
        case 10:
        case 15:
        case 20:
        case 25:
            disponibilidad = NO_DISPONIBLE;
            break;
    }
    return disponibilidad;
}

/**
 * Aplica un tamaño Enorme o Gigante a un arma.
 * @param arma Arma El arma a modificar
 * @param tam String TAM_ARMA_E o TAM_ARMA_GG
 * @returns {Arma}
 */
function armaMayor(arma, tam) {
    var newArma = arma.duplicar();

    switch (tam) {
        case TAM_ARMA_E:
            newArma.fueReq += 2;
            newArma.fueReq2manos += 2;
            var bonoDañoEnorme = ((arma.bonoDaño/5)%2==0) ? arma.bonoDaño/2 : (arma.bonoDaño-5) /2;
            newArma.bonoDaño += bonoDañoEnorme;
            newArma.entereza += 6;
            newArma.rotura += 3;
            break;
        case TAM_ARMA_GG:
            newArma.fueReq += 5;
            newArma.fueReq2manos += 5;
            newArma.bonoDaño *= 2;
            newArma.entereza += 16;
            newArma.rotura += 8;
            break;
        default:
            break;
    }

    return newArma;
}

/**
 * Suma un array de tipos de armadura a otro
 * @param valoresTA_1 number[7] El primer array de tipos de armadura
 * @param valoresTA_2 number[7] El segundo array de tipos de armadura
 * @returns {Array}
 */
function sumarArmadura(valoresTA_1,valoresTA_2) {
    var salida =  [];
    for (var i=0;i<valoresTA_1.length;i++) {
        salida.push(valoresTA_1[i]+valoresTA_2[i]);
    }
    return salida;
}

function getTiposMixtos(tiposBase) {
    var tiposMixtos = [];
    armas:
    for (var i=0; i < armas_set.length;i++) {
        var arma = armas_set[i];
        var categorias = armas_set[i].getCategorias();
        for (var j=0; j < categorias.length;j++) {
            var categoria = categorias[j];
            for (var k = 0; k < tiposBase.length;k++) {
                var tipoBase = tiposBase[k];
                if (categoria == tipoBase) {
                    tiposMixtos.push(arma.getCategoria());
                    continue armas;
                }
            }
        }
    }
    return tiposMixtos;
}

function getTiposDistintos(tiposBase) {
    var tiposDistintos = [];
    armas:
        for (var i=0; i < armas_set.length;i++) {
            var arma = armas_set[i];
            var categorias = armas_set[i].getCategorias();
            for (var j=0; j < categorias.length;j++) {
                var categoria = categorias[j];
                for (var k = 0; k < tiposBase.length;k++) {
                    var tipoBase = tiposBase[k];
                    if (categoria == tipoBase) {
                        continue armas;
                    }
                }
            }
            tiposDistintos.push(arma.getCategoria());
        }
    return tiposDistintos;
}

function getAllTipos() {
    var tipos = [];
        for (var i=0; i < armas_set.length;i++) {
            var arma = armas_set[i];
            tipos.push(arma.getCategoria());
        }
    return tipos;
}

function noPuedeComprarManejoArma(parametros) {
    var arma = parametros.opcion;

    return personaje_actual.hasArmaManejada(arma);
}

function noPuedeComprarManejoTipo(parametros) {
    var tipo = parametros.opcion;

    return personaje_actual.hasTipoArmaManejada(tipo);
}

function tamañoCategoriaArma(categoriaArma) {
    switch (categoriaArma) {
        case CAT_ARMA_SIN_ARMAS:
        case CAT_ARMA_ARMA_CORTA:
            return TAM_ARMA_P;
        case CAT_ARMA_MANDOBLE:
        case CAT_ARMA_ASTA:
            return TAM_ARMA_G;
        case CAT_ARMA_HACHA:
        case CAT_ARMA_MAZA:
        case CAT_ARMA_ESPADA:
        case CAT_ARMA_CUERDA:
        default:
            return TAM_ARMA_M;
    }
}

/**
 * Indice de tamaño de las armas
 * @param tam String El tamaño del arma. Puede ser TAM_ARMA_P, TAM_ARMA_M, TAM_ARMA_G, TAM_ARMA_E, TAM_ARMA_GG
 * @returns {number}
 * @throws ERR_INDICE_TAM_DESCONOCIDO
 */
function indiceTamaño(tam) {
    var indice;
    switch (tam) {
        case TAM_ARMA_P:
            indice = 10;
            break;
        case TAM_ARMA_M:
            indice =  20;
            break;
        case TAM_ARMA_G:
            indice =  30;
            break;
        case TAM_ARMA_E:
            indice =  40;
            break;
        case TAM_ARMA_GG:
            indice =  50;
            break;
        default:
            throw _l(ERR_INDICE_TAM_DESCONOCIDO) + ": " + tam;
    }
    return indice;
}

function getMultiplicadorPrecioPorCalidadDeEquipo(calidad) {
    var multiplicadorPrecio = 1;

    switch (calidad) {
        case CALIDAD_VESTIMENTA_MEDIOCRE :
            multiplicadorPrecio = 0.5;
            break;
        case CALIDAD_VESTIMENTA_BUENA :
            multiplicadorPrecio = 10;
            break;
        case CALIDAD_VESTIMENTA_LUJOSA :
            multiplicadorPrecio = 100;
            break;
        case CALIDAD_VIVIENDA_MEDIOCRE :
            multiplicadorPrecio = 0.5;
            break;
        case CALIDAD_VIVIENDA_BUENA :
        case CALIDAD_VIVIENDA_METROPOLITANA :
            multiplicadorPrecio = 2;
            break;
        case CALIDAD_VIVIENDA_LUJOSA :
            multiplicadorPrecio = 10;
            break;
        case CALIDAD_VIVIENDA_METROPOLITANA_MEDIOCRE :
            multiplicadorPrecio = 1;
            break;
        case CALIDAD_VIVIENDA_METROPOLITANA_BUENA :
            multiplicadorPrecio = 4;
            break;
        case CALIDAD_VIVIENDA_METROPOLITANA_LUJOSA :
            multiplicadorPrecio = 20;
            break;
        case CALIDAD_ORFEBRERIA_MEDIOCRE :
            multiplicadorPrecio = 0.5;
            break;
        case CALIDAD_ORFEBRERIA_BUENA :
            multiplicadorPrecio = 2;
            break;
        case CALIDAD_ORFEBRERIA_EXCELENTE :
            multiplicadorPrecio = 10;
            break;
        case CALIDAD_ORFEBRERIA_LUJOSA :
            multiplicadorPrecio = 100;
            break;
        default :
            multiplicadorPrecio = 1;
            break;
    }

    return multiplicadorPrecio;
}

function quitarEquipo(event) {
    var item = event.data.item;

    if (personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_INICIADA) {
        personaje_actual.vende(item);
    } else {
        personaje_actual.quitaEquipo(item);
    }

}

/**
 *
 * @param {Equipo} item
 * @returns {boolean}
 */
function esArma(item) {
    return item.hasOwnProperty('modificadorAtaqueParada');
}

/**
 *
 * @param {Equipo} item
 * @returns {boolean}
 */
function esArmadura(item) {
    return item.hasOwnProperty('penalizadorNatural');
}

/**
 *
 * @param {Equipo} item
 * @returns {boolean}
 */
function esYelmo(item) {
    return item.hasOwnProperty('penalizadorPercepcion');
}

/**
 *
 * @param {ArmaComprada|EquipoComprado|ArmaduraComprada|YelmoComprado} item
 * @returns {boolean}
 */
function esArmaComprada(item) {
    return item.hasOwnProperty('arma');
}

/**
 *
 * @param {ArmaComprada|EquipoComprado|ArmaduraComprada|YelmoComprado} item
 * @returns {boolean}
 */
function esArmaduraComprada(item) {
    return item.hasOwnProperty('armadura');
}

/**
 *
 * @param {ArmaComprada|EquipoComprado|ArmaduraComprada|YelmoComprado} item
 * @returns {boolean}
 */
function esYelmoComprado(item) {
    return item.hasOwnProperty('yelmo');
}

function desequipaArmaduras(duras) {
    for (var i = 0; i < personaje_actual.armaduras.length; i++) {
        if ((duras && (personaje_actual.armaduras[i].getClase() == ARMADURA_CLASE_DURA)) || (!duras && (personaje_actual.armaduras[i].getClase() == ARMADURA_CLASE_BLANDA))) {
            personaje_actual.armaduras[i].setEquipado(false);
        }
    }
}

function desequipaArmadura(nombre) {
    for (var i = 0; i < personaje_actual.armaduras.length; i++) {
        if (personaje_actual.armaduras[i].toString() == nombre) {
            personaje_actual.armaduras[i].setEquipado(false);
            return;
        }
    }
}

function desequipaYelmos() {
    for (var i = 0; i < personaje_actual.yelmos.length; i++) {
        personaje_actual.yelmos[i].setEquipado(false);
    }
}

/**
 *
 * @param {Personaje} personaje
 * @param {ArmaduraComprada[]} armadura
 * @returns {number}
 */
function penalizadorTodaAccionPorArmadura(personaje, armadura) {
    var requisito = armadura.getRequisitoArmadura();
    var penalizador;
    for (var i = 0; i < armadura.length; i++) {
        requisito += armadura[i].getRequisitoArmadura();
    }

    /**
     *
     * @type {HabilidadDePersonaje}
     */
    var habilidad = personaje[HB_ARMADURA];
    var valor = habilidad.valorFinalActual();

    if (valor >= requisito) {
        penalizador =  0;
    } else {
        penalizador = requisito - valor;
    }

    return penalizador;
}

/**
 *
 * @param {Personaje} personaje
 * @param {ArmaduraComprada[]} armadura
 * @returns {number}
 */
function penalizadorNaturalPorArmadura(personaje, armadura) {
    var requisito = 0;
    var penalizador = 0;

    for (var i = 0; i < armadura.length; i++) {
        requisito += armadura[i].getRequisitoArmadura();
        penalizador += armadura[i].getPenalizadorNatural();
    }

    /**
     *
     * @type {HabilidadDePersonaje}
     */
    var habilidad = personaje[HB_ARMADURA];
    var valor = habilidad.valorFinalActual();

    if (valor > requisito) {
        penalizador += valor-requisito;
    }

    if (penalizador > 0)
        penalizador = 0;

    penalizador += -20*(armadura.length-1);

    return penalizador;
}

/**
 *
 * @param {Personaje} personaje
 * @param {ArmaduraComprada[]} armadura
 * @returns {number}
 */
function penalizadorMovimientoPorArmadura(personaje, armadura) {
    var requisito = 0;
    var penalizador = 0;

    for (var i = 0; i < armadura.length; i++) {
        requisito += armadura[i].getRequisitoArmadura();
        penalizador += armadura[i].getRestriccionMovimiento();
    }

    /**
     *
     * @type {HabilidadDePersonaje}
     */
    var habilidad = personaje[HB_ARMADURA];
    var valor = habilidad.valorFinalActual();

    if (valor > requisito) {
        penalizador -= Math.floor((valor-requisito)/50);
    }

    if (penalizador < 0)
        penalizador = 0;

    return penalizador;
}