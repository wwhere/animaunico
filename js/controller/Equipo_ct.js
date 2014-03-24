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
var yelmos_set = [];

/**
 *
 * @type {Equipo[]}
 */
var vestimenta_set = [];
var calzado_set = [];

var animales_set = [];
var transporte_set = [];
var embarcaciones_set = [];
var raciones_set = [];
var vivienda_set = [];
var decoracion_set = [];
var orfebreria_set = [];

var venenos_set = [];
var varios_set = [];

var equipo_set = [armas_set, armaduras_set, bardas_set, yelmos_set, vestimenta_set, calzado_set, animales_set, transporte_set, embarcaciones_set, raciones_set, vivienda_set, decoracion_set, orfebreria_set, venenos_set,varios_set];

var categorias_equipo = [ EQUIPO_TIPO_ARMAS, EQUIPO_TIPO_ARMADURAS, EQUIPO_TIPO_BARDAS,
    EQUIPO_TIPO_YELMOS, EQUIPO_TIPO_VESTIMENTAS, EQUIPO_TIPO_CALZADO, EQUIPO_TIPO_ANIMALES,
    EQUIPO_TIPO_TRANSPORTE, EQUIPO_TIPO_EMBARCACIONES, EQUIPO_TIPO_RACIONES,
    EQUIPO_TIPO_VIVIENDAS, EQUIPO_TIPO_DECORACIONES, EQUIPO_TIPO_ORFEBRERIA, EQUIPO_TIPO_VENENOS, EQUIPO_TIPO_VARIOS];

function getEquipo(nombreItem) {
    for (var i = 0; i < equipo_set.length; i++) {
        for (var j=0; j < equipo_set[i].length;j++) {
            if (equipo_set[i][j].getNombre() == nombreItem) {
                return equipo_set[i][j];
            }
        }
    }
    throw ERR_EQUIPO_DESCONOCIDO + ":" + nombreItem;
}

/**
 * Inicializa las listas de equipo. Las ordena.
 */
function initEquipo() {
    armas_set.sort(SortPorAtributoNombre);
    armaduras_set.sort(SortPorAtributoNombre);

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
 * Aplica un modificador de -5 a +25 a un arma y devuelve el arma modificada
 * @param {Arma} arma El arma a modificar
 * @param {number} modificador El modificador, en múltiplos de 5. Puede ser -5,0,5,10,15,20,25
 * @returns {Arma}
 */
function armaConModificador(arma,modificador) {
    var textMod = modificadorBonito(modificador);
    var armaConMod = arma.duplicar();
    armaConMod.setNombre(_l(armaConMod.getNombre()) + " " + textMod);

    alterarCosteDisponibilidad(modificador, armaConMod);

    if (modificador > 0) {
        armaConMod.rotura += 2*(modificador/5);
        armaConMod.presencia += modificador*10;
        armaConMod.entereza += modificador*2;
        armaConMod.dañoBase += modificador*2;
        armaConMod.modificadorAtaqueParada = modificador;
        armaConMod.velocidad += modificador;
        armaConMod.modificadorTADefensor -= modificador/5;
    } else if (modificador == -5) {
        armaConMod.rotura += 2*(modificador/5);
        armaConMod.entereza += modificador*2;
        armaConMod.dañoBase += modificador*2;
        armaConMod.modificadorAtaqueParada = modificador;
        armaConMod.velocidad += modificador;
        armaConMod.modificadorTADefensor -= modificador/5;
    }

    return armaConMod;
}

/**
 * Altera el coste (atributo costeDinero) y la disponibilidad (atributo disponibilidad) de una pieza de equipo con modificador
 * @param {number} modificador Puede ser -5,0,5,10,15,20,25
 * @param {Equipo} equipo La pieza de equipo
 */
function alterarCosteDisponibilidad(modificador, equipo) {
    switch (modificador) {
        case -5:
            equipo.getCosteDinero().setOro(equipo.getCosteDinero().getOro()/2);
            equipo.getCosteDinero().setPlata(equipo.getCosteDinero().getPlata()/2);
            equipo.getCosteDinero().setCobre(equipo.getCosteDinero().getCobre()/2);
            break;
        case 0:
            break;
        case 5:
            equipo.getCosteDinero().setOro(equipo.getCosteDinero().getOro()*20);
            equipo.getCosteDinero().setPlata(equipo.getCosteDinero().getPlata()*20);
            equipo.getCosteDinero().setCobre(equipo.getCosteDinero().getCobre()*20);
            equipo.setDisponibilidad(DISP_A);
            break;
        case 10:
        case 15:
        case 20:
        case 25:
            equipo.getCosteDinero().setOro(INCALCULABLE);
            equipo.getCosteDinero().setPlata(INCALCULABLE);
            equipo.getCosteDinero().setCobre(INCALCULABLE);
            equipo.setDisponibilidad(NO_DISPONIBLE);
            break;
    }
}

/**
 * Aplica un modificador de -5 a +25 a una armadura y devuelve la armadura modificada
 * @param {Armadura} armadura La armadura a modificar
 * @param {number} modificador El modificador, en múltiplos de 5. Puede ser -5,0,5,10,15,20,25
 * @returns {Armadura}
 */
function armaduraConModificador(armadura,modificador) {
    var textMod = modificadorBonito(modificador);
    var armaduraConMod = armadura.duplicar();
    armaduraConMod.setNombre(_l(armaduraConMod.getNombre()) + " " + textMod);

    alterarCosteDisponibilidad(modificador, armaduraConMod);

    var modificadorEntre5 = modificador/5;

    armaduraConMod.penalizadorNatural += modificador;
    if (armaduraConMod.penalizadorNatural  > 0) {
        armaduraConMod.penalizadorNatural = 0;
    }
    armaduraConMod.requisitoArmadura -= modificador;
    if (armaduraConMod.requisitoArmadura < 0) {
        armaduraConMod.requisitoArmadura = 0;
    }
    armaduraConMod.tas = sumarArmadura(armaduraConMod.tas,[modificadorEntre5,modificadorEntre5,modificadorEntre5,modificadorEntre5,modificadorEntre5,modificadorEntre5,modificadorEntre5]);
    if (modificador > 0) {
        armaduraConMod.presencia += modificador*10;
    }
    armaduraConMod.entereza += modificador;
    armaduraConMod.restriccionMovimiento -= modificadorEntre5;
    if (armaduraConMod.restriccionMovimiento < 0) {
        armaduraConMod.restriccionMovimiento = 0;
    }

    return armaduraConMod;
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
 * Aplica un modificador a una pieza de equipo (ni arma ni armadura)
 * @param equipo Equipo La pieza de equipo a modificar.
 * @param modificador number Puede ser -5,0,5,10,15,20 o 25
 * @returns {Equipo}
 */
function equipoConModificador(equipo,modificador) {
    var textMod = modificadorBonito(modificador);
    var equipoConMod = equipo.duplicar();
    equipoConMod.setNombre(_l(equipoConMod.getNombre()) + " " + textMod); //TODO al aplicarlo de este modo no sera localizable

    alterarCosteDisponibilidad(modificador, equipoConMod);

    if (modificador > 0) {
        equipoConMod.presencia += modificador*10;
    }
    equipoConMod.entereza += modificador*2;
    equipoConMod.bonoHabilidad += 10;

    return equipoConMod;
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


function calidadVestimenta(itemVestimenta, calidad) {
    var vestimentaCalidad = itemVestimenta.duplicar();
    var multiplicadorPrecio = 1;

    switch (calidad) {
        case CALIDAD_MEDIOCRE :
            multiplicadorPrecio = 0.5;
            vestimentaCalidad.setNombre(_l(vestimentaCalidad.getNombre()) + "(" + _l(TXT_CALIDAD) + " " + calidad + ")");
            break;
        case CALIDAD_BUENA :
            multiplicadorPrecio = 10;
            vestimentaCalidad.setNombre(_l(vestimentaCalidad.getNombre()) + "(" + _l(TXT_CALIDAD) + " " + calidad + ")");
            break;
        case CALIDAD_LUJOSA :
            multiplicadorPrecio = 100;
            vestimentaCalidad.setNombre(_l(vestimentaCalidad.getNombre()) + "(" + _l(TXT_CALIDAD) + " " + calidad + ")");
            break;
        case CALIDAD_NORMAL :
        default :
            multiplicadorPrecio = 1;
            break;
    }

    vestimentaCalidad.costeDinero.multiplica(multiplicadorPrecio);

    return vestimentaCalidad;
}



/**
 *
 * @param {Equipo} itemVivienda
 * @param {string} calidad
 * @param {boolean} esMetropolitana
 * @returns {Equipo}
 */
function calidadVivienda(itemVivienda, calidad, esMetropolitana) {
    var viviendaCalidad = itemVivienda.duplicar();
    var multiplicadorPrecio = 1;

    if (esMetropolitana) {
        multiplicadorPrecio = 2;
        viviendaCalidad.setNombre(viviendaCalidad.getNombre() + "(metropolitana)");
    }

    switch (calidad) {
        case CALIDAD_MEDIOCRE :
            multiplicadorPrecio *= 0.5;
            viviendaCalidad.setNombre(viviendaCalidad.getNombre() + "(" + _l(TXT_CALIDAD) + " " + _l(calidad) + ")");
            break;
        case CALIDAD_BUENA :
            multiplicadorPrecio *= 2;
            viviendaCalidad.setNombre(viviendaCalidad.getNombre() + "(" + _l(TXT_CALIDAD) + " " + _l(calidad) + ")");
            break;
        case CALIDAD_LUJOSA :
            multiplicadorPrecio *= 10;
            viviendaCalidad.setNombre(viviendaCalidad.getNombre() + "(" + _l(TXT_CALIDAD) + " " + calidad + ")");
            break;
        case CALIDAD_NORMAL :
        default :
            multiplicadorPrecio *= 1;
            break;
    }

    viviendaCalidad.costeDinero.multiplica(multiplicadorPrecio);

    return viviendaCalidad;
}



function calidadOrfebreria(itemOrfebreria, calidad) {
    var orfebreriaCalidad = itemOrfebreria.duplicar();
    var multiplicadorPrecio = 1;

    switch (calidad) {
        case CALIDAD_MEDIOCRE :
            multiplicadorPrecio = 0.5;
            orfebreriaCalidad.setNombre(orfebreriaCalidad.getNombre() + "(calidad " + calidad + ")");
            break;
        case CALIDAD_BUENA :
            multiplicadorPrecio = 2;
            orfebreriaCalidad.setNombre(orfebreriaCalidad.getNombre() + "(calidad " + calidad + ")");
            break;
        case CALIDAD_EXCELENTE :
            multiplicadorPrecio = 10;
            orfebreriaCalidad.setNombre(orfebreriaCalidad.getNombre() + "(calidad " + calidad + ")");
            break;
        case CALIDAD_LUJOSA :
            multiplicadorPrecio = 100;
            orfebreriaCalidad.setNombre(orfebreriaCalidad.getNombre() + "(calidad " + calidad + ")");
            break;
        case CALIDAD_NORMAL :
        default :
            multiplicadorPrecio = 1;
            break;
    }

    orfebreriaCalidad.costeDinero.multiplica(multiplicadorPrecio);

    return orfebreriaCalidad;
}

function quitarEquipo(event) {
    var item = event.data.item;

    if (personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_INICIADA) {
        personaje_actual.vende(item);
    } else {
        personaje_actual.quitaEquipo(item);
    }

}

