var DISPATCHER = $(document);
var MAX_CARACTERISTICA = 20;
var ATAQUE_DEFENSA_PARA_ARTE_MARCIAL = 40;

var IDX_AGI = 0;
var IDX_CON = 1;
var IDX_DES = 2;
var IDX_FUE = 3;
var IDX_INT = 4;
var IDX_PER = 5;
var IDX_POD = 6;
var IDX_VOL = 7;

var CARACTERISTICAS_NOMBRES = [AGI,CON,DES,FUE,INT,PER,POD,VOL];
var CARACTERISTICAS_ABREVIATURAS  = [AGI3,CON3,DES3,FUE3,INT3,PER3,POD3,VOL3];

function getIndiceCaracteristica(caracteristica) {
    if (caracteristica == FUE) {
        return IDX_FUE;
    } else if (caracteristica == DES) {
        return IDX_DES;
    } else if (caracteristica == AGI) {
        return IDX_AGI;
    } else if (caracteristica == CON) {
        return IDX_CON;
    } else if (caracteristica == INT) {
        return IDX_INT;
    } else if (caracteristica == VOL) {
        return IDX_VOL;
    } else if (caracteristica == POD) {
        return IDX_POD;
    } else if (caracteristica == PER) {
        return IDX_PER;
    } else {
        throw ERR_CARACTERISTICA_ERRONEA + ": " + caracteristica;
    }
}

function caracAbreviatura(caracteristica) {
    return CARACTERISTICAS_ABREVIATURAS[getIndiceCaracteristica(caracteristica)];
}

function getBonoPorValor(valor) {
    if (valor == 1) {
        return -30;
    } else if (valor == 2) {
        return -20;
    } else if (valor == 3) {
        return -10;
    } else if (valor == 4) {
        return -5;
    } else if (valor == 5) {
        return 0;
    } else if ((valor == 6) || (valor == 7)) {
        return 5;
    } else if ((valor == 8) || (valor == 9)) {
        return 10;
    } else if (valor == 10) {
        return 15;
    } else if ((valor == 11) || (valor == 12)) {
        return 20;
    } else if ((valor == 13) || (valor == 14)) {
        return 25;
    } else if (valor == 15)  {
        return 30;
    } else if ((valor == 16) || (valor == 17)) {
        return 35;
    } else if ((valor == 18) || (valor == 19)) {
        return 40;
    } else if (valor==20) {
        return 45;
    } else {
        throw ERR_VALOR_CARACTERISTICA_ERRONEO;
    }
}

function Arquetipo(mixto, arq1, arq2) {
    /**
     *
     * @type {boolean}
     */
    this.esMixto = mixto;

    /**
     *
     * @type {string}
     */
    this.arquetipo1 = arq1;

    if (mixto) {
        /**
         *
         * @type {string}
         */
        this.arquetipo2 = arq2;
    }
}

Arquetipo.prototype = {
    constructor : Arquetipo,

    isMixto : function() {
        return this.esMixto;
    },

    /**
     *
     * @returns {string} Ya localizada
     */
    toString : function() {
        if (!this.esMixto) {
            return _l(this.arquetipo1);
        } else {
            return _l(this.arquetipo1) + "/" + _l(this.arquetipo2);
        }
    },

    comparteArquetipoMixto : function(otroArq) {
        if (this.isMixto()) {
            var comparte = false;

            if (this.arquetipo1 == otroArq.arquetipo1) {
                comparte = true;
            }
            if (this.arquetipo2 == otroArq.arquetipo1) {
                comparte = true;
            }
            if (otroArq.isMixto()) {
                if (this.arquetipo1 == otroArq.arquetipo2) {
                    comparte = true;
                }
                if (this.arquetipo2 == otroArq.arquetipo2) {
                    comparte = true;
                }
            }

            return comparte;
        } else {
            return false;
        }
    }
};

var ARQ_LUCHADOR = new Arquetipo(false,NOM_ARQ_LUCHADOR);
var ARQ_MISTICO = new Arquetipo(false,NOM_ARQ_MISTICO);
var ARQ_PSIQUICO = new Arquetipo(false,NOM_ARQ_PSIQUICO);
var ARQ_ACECHADOR = new Arquetipo(false,NOM_ARQ_ACECHADOR);
var ARQ_DOMINE = new Arquetipo(false,NOM_ARQ_DOMINE);
var ARQ_SIN_CATEGORIA = new Arquetipo(false,NOM_ARQ_SIN_CATEGORIA);

var ARQ_LUCHADOR_DOMINE = new Arquetipo(true,NOM_ARQ_LUCHADOR,NOM_ARQ_DOMINE);
var ARQ_LUCHADOR_ACECHADOR = new Arquetipo(true,NOM_ARQ_LUCHADOR,NOM_ARQ_ACECHADOR);
var ARQ_MISTICO_ACECHADOR = new Arquetipo(true,NOM_ARQ_MISTICO,NOM_ARQ_ACECHADOR);
var ARQ_MISTICO_PSIQUICO = new Arquetipo(true,NOM_ARQ_MISTICO,NOM_ARQ_PSIQUICO);
var ARQ_LUCHADOR_MISTICO = new Arquetipo(true,NOM_ARQ_LUCHADOR,NOM_ARQ_MISTICO);
var ARQ_LUCHADOR_PSIQUICO = new Arquetipo(true,NOM_ARQ_LUCHADOR,NOM_ARQ_PSIQUICO);

function d10() {
    return Math.floor(Math.random()*10) + 1;
}

function d100() {
    return Math.floor(Math.random()*100) + 1;
}

function d(caras) {
    return Math.floor(Math.random()*caras) + 1;
}

var FLAG_CONOCEDOR_TODAS_MATERIAS = "FLAG_CONOCEDOR_TODAS_MATERIAS";
var FLAG_DON = "FLAG_DON";
var FLAG_DESARROLLAR_VALORACION_MAGICA = "FLAG_DESARROLLAR_VALORACION_MAGICA";
var FLAG_LAZO_EXISTENCIAL = "FLAG_LAZO_EXISTENCIAL";
var FLAG_PSIQUICO = "FLAG_PSIQUICO";
var FLAG_ACCESO_TODAS_DISCIPLINAS = "FLAG_ACCESO_TODAS_DISCIPLINAS";
var FLAG_RAICES_CULTURALES = "FLAG_RAICES_CULTURALES";
var FLAG_SIN_ARMAS_POR_ARTES_MARCIALES = "FLAG_SIN_ARMAS_POR_ARTES_MARCIALES";
var FLAG_PRIMERA_DISCIPLINA_OBLIGATORIA = "FLAG_PRIMERA_DISCIPLINA_OBLIGATORIA";
var FLAG_PUEDE_USAR_PODERES_MONSTRUO = "FLAG_PUEDE_USAR_PODERES_MONSTRUO";
var FLAG_RE_A_MITAD = "FLAG_RE_A_MITAD";
var FLAG_RV_A_MITAD = "FLAG_RV_A_MITAD";
var FLAG_RF_A_MITAD = "FLAG_RF_A_MITAD";
var FLAG_RM_A_MITAD = "FLAG_RM_A_MITAD";
var FLAG_RP_A_MITAD = "FLAG_RP_A_MITAD";
var FLAG_IGNORAR_DESVENTAJAS = "FLAG_IGNORAR_DESVENTAJAS";
var FLAG_APARIENCIA_ALEATORIA = "FLAG_APARIENCIA_ALEATORIA";
var FLAG_APARIENCIA_MINIMA_7 = "FLAG_APARIENCIA_MINIMA_7";
var FLAG_PUEDE_USAR_TECNICAS = "FLAG_PUEDE_USAR_TECNICAS";
var FLAG_DETECCION_KI = "FLAG_DETECCION_KI";
var FLAG_OCULTACION_KI = "FLAG_OCULTACION_KI";
var FLAG_INHUMANIDAD = "FLAG_INHUMANIDAD";
var FLAG_ZEN = "FLAG_ZEN";
var FLAG_VERSATIL = "FLAG_VERSATIL";
var FLAG_BONO_NATURAL_EXTRA = "FLAG_BONO_NATURAL_EXTRA";
var FLAG_SIN_BONIFICADOR_NATURAL = "FLAG_SIN_BONIFICADOR_NATURAL";
var FLAG_MAGIA_OPUESTA = "FLAG_MAGIA_OPUESTA";
var FLAG_PODER_INNATO ="FLAG_PODER_INNATO"; //TODO usar (dominus exxet 18)
var FLAG_TECNICAS_DESVINCULADAS = "FLAG_TECNICAS_DESVINCULADAS";
var FLAG_LIMITE_DUAL = "FLAG_LIMITE_DUAL";
var FLAG_SANGRE_DE_EL_DRAGON = "FLAG_SANGRE_DE_EL_DRAGON";
var FLAG_SANGRE_LATENTE = "FLAG_SANGRE_LATENTE";
var FLAG_VERSATIBILIDAD_METAMAGICA= "FLAG_VERSATIBILIDAD_METAMAGICA";
var FLAG_ESENCIA_SHEELE = "FLAG_ESENCIA_SHEELE";
var FLAG_SENTIDO_DE_ANIMAL = "FLAG_SENTIDO_DE_ANIMAL";

//TODO la afinidad elemental aumenta en 10 el daño base de un ataque de ese elemento
var FLAG_AFINIDAD_ELEMENTAL_FUEGO = "FLAG_AFINIDAD_ELEMENTAL_FUEGO";
var FLAG_AFINIDAD_ELEMENTAL_AIRE = "FLAG_AFINIDAD_ELEMENTAL_AIRE";
var FLAG_AFINIDAD_ELEMENTAL_FRIO = "FLAG_AFINIDAD_ELEMENTAL_FRIO";
var FLAG_AFINIDAD_ELEMENTAL_ELECTRICIDAD = "FLAG_AFINIDAD_ELEMENTAL_ELECTRICIDAD";
var FLAG_AFINIDAD_ELEMENTAL_TIERRA = "FLAG_AFINIDAD_ELEMENTAL_TIERRA";
var FLAG_AFINIDAD_ELEMENTAL_LUZ = "FLAG_AFINIDAD_ELEMENTAL_LUZ";
var FLAG_AFINIDAD_ELEMENTAL_OSCURIDAD = "FLAG_AFINIDAD_ELEMENTAL_OSCURIDAD";

var FLAG_EMPATIA_ELEMENTAL_FUEGO = "FLAG_EMPATIA_ELEMENTAL_FUEGO";
var FLAG_EMPATIA_ELEMENTAL_AIRE = "FLAG_EMPATIA_ELEMENTAL_AIRE";
var FLAG_EMPATIA_ELEMENTAL_AGUA = "FLAG_EMPATIA_ELEMENTAL_AGUA";
var FLAG_EMPATIA_ELEMENTAL_LUZ = "FLAG_EMPATIA_ELEMENTAL_LUZ";
var FLAG_EMPATIA_ELEMENTAL_OSCURIDAD = "FLAG_EMPATIA_ELEMENTAL_OSCURIDAD";


var DIF_RUT_VALOR = 20;
var DIF_FAC_VALOR = 40;
var DIF_MED_VALOR = 80;
var DIF_DIF_VALOR = 120;
var DIF_MDF_VALOR = 120;
var DIF_ABS_VALOR = 180;
var DIF_CIM_VALOR = 240;
var DIF_IMP_VALOR = 280;
var DIF_INH_VALOR = 320;
var DIF_ZEN_VALOR = 440;


var DIFICULTADES = [DIF_RUT,DIF_FAC,DIF_MED,DIF_DIF,DIF_MDF,DIF_ABS,DIF_CIM,DIF_IMP,DIF_INH,DIF_ZEN];

function indiceDificultad(dificultad) {
    switch (dificultad) {
        case DIF_RUT :
        case DIF_RUT3 :
        case DIF_RUT_VALOR :
            return 1;
        case DIF_FAC :
        case DIF_FAC3 :
        case DIF_FAC_VALOR :
            return 2;
        case DIF_MED :
        case DIF_MED3 :
        case DIF_MED_VALOR :
            return 3;
        case DIF_DIF :
        case DIF_DIF3 :
        case DIF_DIF_VALOR :
            return 4;
        case DIF_MDF :
        case DIF_MDF3 :
        case DIF_MDF_VALOR :
            return 5;
        case DIF_ABS :
        case DIF_ABS3 :
        case DIF_ABS_VALOR :
            return 6;
        case DIF_CIM :
        case DIF_CIM3 :
        case DIF_CIM_VALOR :
            return 7;
        case DIF_IMP :
        case DIF_IMP3 :
        case DIF_IMP_VALOR :
            return 8;
        case DIF_INH :
        case DIF_INH3 :
        case DIF_INH_VALOR :
            return 9;
        case DIF_ZEN :
        case DIF_ZEN3 :
        case DIF_ZEN_VALOR :
            return 10;
        default:
            throw ERR_DIFICULTAD_DESCONOCIDA;
    }
}

var TIPO_BONIFICADOR_NATURAL_FISICO = "fisico";
var TIPO_BONIFICADOR_NATURAL_MENTAL = "mental";
var TIPO_BONIFICADOR_NATURAL_EXTRA = "extra";

var LISTA_ESPECIES_ANIMALES = [UI_ESP_PERROS,UI_ESP_LOBOS,UI_ESP_LOROS,UI_ESP_ELEFANTES,UI_ESP_CABALLOS];
var LISTA_CIENCIAS = [UI_ESP_MATEMATICAS,UI_ESP_MECANICA,UI_ESP_ASTRONOMIA,UI_ESP_FILOSOFIA];
var LISTA_TEMAS_HISTORIA = [UI_ESP_ABEL,UI_ESP_GUERRAS_CRUZ,UI_ESP_IMPERIO_ABEL,UI_ESP_IMPERIO_ABEL,UI_ESP_ECONOMIA];
var LISTA_ESPECIALIDADES_MEDICAS = [UI_ESP_ANATOMIA];
var LISTA_ARTES = [UI_ESP_PINTURA,UI_ESP_ESCULTURA];
var LISTA_BAILES = [UI_ESP_BAILES_SALON,UI_ESP_BAILES_ESPHERIA,UI_ESP_BAILES_ANTIGUOS];
var LISTA_FORJA = [UI_ESP_ARMADURAS_PESADAS,UI_ESP_ESPADAS,UI_ESP_UTENSILIOS_COCINA];
var LISTA_INSTRUMENTOS_MUSICALES = [UI_ESP_FLAUTA,UI_ESP_CLAVICORDIO,UI_ESP_ARPA];
var LISTA_TRUCOS_MANOS = [UI_ESP_JUEGOS_CARTAS,UI_ESP_MALABARES];
var LISTA_COMERCIOS = [UI_PESCADO, UI_JOYERIA];

var TAS_ARMADURA = [ATAQUE_FIL3,ATAQUE_CON3,ATAQUE_PEN3,ATAQUE_CAL3,ATAQUE_FRI3,ATAQUE_ELE3,ATAQUE_ENE3];

/**
 *
 * @param {string} etiqueta Tal cual se imprimirá en pantalla (ya localizada)
 * @param {string} id la id de la etiqueta
 * @param {string} categoria
 * @param {string} [tooltip] Tal cual se imprimirá en pantalla (ya localizada)
 * @constructor
 */
function OpcionMostrable(etiqueta, id, categoria, tooltip) {
    this.etiqueta = etiqueta;
    this.opcion = id;
    this.categoria = categoria;
    if (tooltip) {
        this.tooltip = tooltip;
    }
}

var MULTIPLICADOR_ENTERO = 1;
var MULTIPLICADOR_MITAD = 0.5;
var MULTIPLICADOR_DOBLE = 2;

var BONO_FUE = "BONO_FUE";
var BONO_POD = "BONO_POD";
var BONO_FUE_RED = "BONO_FUE_REDONDEADO";
var BONO_POD_RED = "BONO_POD_REDONDEADO";
var BONO_NO = "BONO_NO";
var ROTURA_PLUS_10 = "ROTURA_PLUS_10";
var TA_ENEMIGA_MENOS_2 = "TA_ENEMIGA_MENOS_2";
var ROTURA_PLUS_25 = "ROTURA_PLUS_25";
var TA_ENEMIGA_MENOS_6 = "TA_ENEMIGA_MENOS_6";


/**
 *
 * @param {jQuery} elemento
 * @param {string} contenido Ya localizado
 */
function addToolTip(elemento,contenido) {
    elemento.tooltip({
        content: contenido,
        items: "div",
        tooltipClass: "tooltip-custom"
    })
}

var allRazas = {};

var TURNO_BASE = 20;
var PD_NIVEL_1 = 600;

function limpiarArrayObjetosPorCampo(array, campo, opcion, callback, contexto) {
    var i;
    var arrayLimpio = [];
    for (i = 0; i < array.length;i++) {
        var esteObjeto = array[i];

        if (esteObjeto[campo] != opcion) {
            arrayLimpio.push(esteObjeto);
        } else {
            if (callback != undefined) {
                callback.call(contexto,esteObjeto);
            }
        }
    }
    return arrayLimpio;
}

function limpiarArrayObjetosPorFuncion(array, funcion, opcion, callback, contexto) {
    var i;
    var arrayLimpio = [];
    for (i = 0; i < array.length;i++) {
        var esteObjeto = array[i];

        if (funcion(esteObjeto) != opcion) {
            arrayLimpio.push(esteObjeto);
        } else {
            if (callback != undefined) {
                callback.call(contexto,esteObjeto);
            }
        }
    }
    return arrayLimpio;
}

function comparaGetNombre(objeto) {
    return objeto.getNombre();
}

/**
 * Función auxiliar para ordenar elementos con un atributo "nombre".
 * @param a * El primer elemento a ordenar
 * @param b * El segundo elemento a ordenar
 * @returns {number} -1 si el primero es menor, 1 si es mayor, 0 si son iguales
 */
function SortPorAtributoNombre(a, b){
    try {
        var aName = a.nombre.toLowerCase();
        var bName = b.nombre.toLowerCase();
    } catch (err) {
        alert("Algo falla aqui");
    }
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

function modificadorBonito(modif) {
    var bonito = modif;
    if (modif >= 0) {
        bonito = "+" + modif;
    } else {
        bonito = "" + modif;
    }
    return bonito;
}

/**
 *
 * @param {boolean} puedeComprar
 * @param {string} [mensajeFallo] Ya localizado
 * @constructor
 */
function PuedeComprar(puedeComprar, mensajeFallo) {
    this.puedeComprar = puedeComprar;
    if (!puedeComprar) {
        this.mensajeFallo = mensajeFallo;
    }
}

function inherit(proto) {
    function F() {}
    F.prototype = proto;
    return new F;
}

function extend(Child, Parent) {
    Child.prototype = inherit(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.parent = Parent.prototype;
}


var EVENT_CHARACTER_SECCION_PERSONALES = "EVENT_CHARACTER_SECCION_PERSONALES";
var EVENT_CHARACTER_SECCION_DESCRIPCION = "EVENT_CHARACTER_SECCION_DESCRIPCION";
var EVENT_CHARACTER_SECCION_CAPACIDADES = "EVENT_CHARACTER_SECCION_CAPACIDADES";
var EVENT_CHARACTER_SECCION_CARACTERISTICAS = "EVENT_CHARACTER_SECCION_CARACTERISTICAS";
var EVENT_CHARACTER_SECCION_DESARROLLO = "EVENT_CHARACTER_SECCION_DESARROLLO";
var EVENT_CHARACTER_SECCION_VENTAJAS = "EVENT_CHARACTER_SECCION_VENTAJAS";
var EVENT_CHARACTER_SECCION_DESVENTAJAS = "EVENT_CHARACTER_SECCION_DESVENTAJAS";
var EVENT_CHARACTER_SECCION_RESISTENCIAS = "EVENT_CHARACTER_SECCION_RESISTENCIAS";
var EVENT_CHARACTER_SECCION_COMBATE_GENERAL = "EVENT_CHARACTER_SECCION_COMBATE_GENERAL";
var EVENT_CHARACTER_SECCION_KI = "EVENT_CHARACTER_SECCION_KI";
var EVENT_CHARACTER_SECCION_MAGIA = "EVENT_CHARACTER_SECCION_MAGIA";
var EVENT_CHARACTER_SECCION_PSIQUICA = "EVENT_CHARACTER_SECCION_PSIQUICA";
var EVENT_CHARACTER_SECCION_ELAN = "EVENT_CHARACTER_SECCION_ELAN";
var EVENT_CHARACTER_SECCION_ARTES_MARCIALES = "EVENT_CHARACTER_SECCION_ARTES_MARCIALES";
var EVENT_CHARACTER_SECCION_SECUNDARIAS = "EVENT_CHARACTER_SECCION_SECUNDARIAS";
var EVENT_CHARACTER_SECCION_EQUIPO = "EVENT_CHARACTER_SECCION_EQUIPO";
var EVENT_CHARACTER_SECCION_ARS_MAGNUS = "EVENT_CHARACTER_SECCION_ARS_MAGNUS";



var notificacionesActivas = true;

/**
 *
 * @param {string} nombreEvento
 */
function lanzarEvento(nombreEvento) {
    if (notificacionesActivas) {
        DISPATCHER.trigger(nombreEvento);
    }
}

/**
 *
 */
function activarNotificaciones() {
    notificacionesActivas = true;
}

/**
 *
 */
function desactivarNotificaciones() {
    notificacionesActivas = false;
}

function romanize (num) {
    if (num == 0)
        return '0';
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return new Array(+digits.join("") + 1).join("M") + roman;
}