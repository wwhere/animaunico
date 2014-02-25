var DISPATCHER = $(document);
var MAX_CARACTERISTICA = 20;
var ATAQUE_DEFENSA_PARA_ARTE_MARCIAL = 40;

var UDS_PD = "PD";
var UDS_PC = "PC";
var UDS_PORCENT = "%";
var UDS_CV = "CV";
var UDS_CM = "CM";
var UDS_ELAN = "elan";
var UDS_NIVELES_VIA = "niveles de magia";

var FUE = "Fuerza";
var DES = "Destreza";
var AGI = "Agilidad";
var CON = "Constitución";
var INT = "Inteligencia";
var POD = "Poder";
var VOL = "Voluntad";
var PER = "Percepción";

var FUE3 = "FUE";
var DES3 = "DES";
var AGI3 = "AGI";
var CON3 = "CON";
var INT3 = "INT";
var POD3 = "POD";
var VOL3 = "VOL";
var PER3 = "PER";

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

var ERR_CARACTERISTICA_ERRONEA = "Error: Nombre de característica erróneo";
var ERR_VALOR_CARACTERISTICA_ERRONEO = "Error: Valor de característica fuera de rango";

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

    toString : function() {
        if (!mixto) {
            return this.arquetipo1;
        } else {
            return this.arquetipo1 + "/" + this.arquetipo2;
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

var NOM_ARQ_LUCHADOR = "Luchador";
var NOM_ARQ_MISTICO = "Místico";
var NOM_ARQ_PSIQUICO = "Psíquico";
var NOM_ARQ_ACECHADOR = "Acechador";
var NOM_ARQ_DOMINE = "Domine";
var NOM_ARQ_SIN_CATEGORIA = "Sin Categoría";

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




var ORIGEN_MULTIPLO_VIDA = "Múltiplos de vida";

var ERR_HABILIDAD_ERRONEA = "Error: Nombre de habilidad erróneo";
var ERR_TIPO_HABILIDAD_ERRONEO = "Error: Nombre de tipo de habilidad erróneo";





var SEXO_HOMBRE = "Hombre";
var SEXO_MUJER = "Mujer";

function d10() {
    return Math.floor(Math.random()*10) + 1;
}




var FLAG_CONOCEDOR_TODAS_MATERIAS = "FLAG_CONOCEDOR_TODAS_MATERIAS";
var FLAG_DON = "FLAG_DON";
var FLAG_DESARROLLAR_VALORACION_MAGICA = "FLAG_DESARROLLAR_VALORACION_MAGICA";
var FLAG_LAZO_EXISTENCIAL = "FLAG_LAZO_EXISTENCIAL";
var FLAG_PSIQUICO = "FLAG_PSIQUICO";
var FLAG_ACCESO_TODAS_DISCIPLINAS = "FLAG_ACCESO_TODAS_DISCIPLINAS";
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

var DIF_RUT = "Rutinario";
var DIF_RUT3 = "RUT";
var DIF_RUT_VALOR = 20;

var DIF_FAC = "Fácil";
var DIF_FAC3 = "FAC";
var DIF_FAC_VALOR = 40;

var DIF_MED = "Media";
var DIF_MED3 = "MED";
var DIF_MED_VALOR = 80;

var DIF_DIF = "Difícil";
var DIF_DIF3 = "DIF";
var DIF_DIF_VALOR = 120;

var DIF_MDF = "Muy Difícil";
var DIF_MDF3 = "MDF";
var DIF_MDF_VALOR = 120;

var DIF_ABS = "Absurdo";
var DIF_ABS3 = "ABS";
var DIF_ABS_VALOR = 180;

var DIF_CIM = "Casi Imposible";
var DIF_CIM3 = "CIM";
var DIF_CIM_VALOR = 240;

var DIF_IMP = "Imposible";
var DIF_IMP3 = "IMP";
var DIF_IMP_VALOR = 280;

var DIF_INH = "Inhumano";
var DIF_INH3 = "INH";
var DIF_INH_VALOR = 320;

var DIF_ZEN = "Zen";
var DIF_ZEN3 = "ZEN";
var DIF_ZEN_VALOR = 440;

var ERR_DIFICULTAD_DESCONOCIDA = "Error: dificultad desconocida";

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

var LISTA_ESPECIES_ANIMALES = ["Perros", "Lobos", "Loros", "Elefantes", "Caballos"];
var LISTA_CIENCIAS = ["Matemáticas", "Mecánica", "Astronomía", "Filosofía"];
var LISTA_TEMAS_HISTORIA = ["Abel", "Guerras de la Cruz", "Imperio de Abel", "Fábulas", "Economía"];
var LISTA_ARTES = ["Pintura", "Escultura"];
var LISTA_BAILES = ["Baile de Salón", "Bailes de Espheria", "Bailes Antiguos"];
var LISTA_FORJA = ["Armaduras pesadas", "Espadas", "Utensilios de cocina"];
var LISTA_INSTRUMENTOS_MUSICALES = ["Flauta", "Clavicordio", "Arpa"];
var LISTA_TRUCOS_MANOS = ["Juegos de cartas", "Malabares"];

var ATAQUE_FIL = "FILo";
var ATAQUE_CON = "CONtundente";
var ATAQUE_PEN = "PENetrante";
var ATAQUE_CAL = "CALor";
var ATAQUE_FRI = "FRIo";
var ATAQUE_ELE = "ELEctricidad";
var ATAQUE_ENE = "ENErgía";
var ATAQUE_FIL3 = "FIL";
var ATAQUE_CON3 = "CON";
var ATAQUE_PEN3 = "PEN";
var ATAQUE_CAL3 = "CAL";
var ATAQUE_FRI3 = "FRI";
var ATAQUE_ELE3 = "ELE";
var ATAQUE_ENE3 = "ENE";

var TAS_ARMADURA = [ATAQUE_FIL3,ATAQUE_CON3,ATAQUE_PEN3,ATAQUE_CAL3,ATAQUE_FRI3,ATAQUE_ELE3,ATAQUE_ENE3];


var DISP_TOTAL = "Disponibilidad normal";
var DISP_B = "Disponibilidad B";
var DISP_A = "Disponibilidad A";
var NO_DISPONIBLE = "No disponible";


var ACCION_ACTIVA = "Activa";
var ACCION_PASIVA = "Pasiva";

/**
 *
 * @param {string} etiqueta
 * @param {string} categoria
 * @param {string} [tooltip]
 * @constructor
 */
function OpcionMostrable(etiqueta, categoria, tooltip) {
    this.etiqueta = etiqueta;
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

