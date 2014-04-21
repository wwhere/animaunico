var REQUISITO_HABILIDAD_ATAQUE = "Requisito de ataque";
var REQUISITO_HABILIDAD_PARADA = "Requisito de parada";
var REQUISITO_HABILIDAD = "Requisito de habilidad";
var REQUISITO_HABILIDAD_KI = "Requisito de Habilidad del Ki";
var REQUISITO_ARTE_MARCIAL = "Requisito de Arte Marcial";
var REQUISITO_TURNO = "Requisito de Turno";
var REQUISITO_INHUMANIDAD = "Requisito de Inhumanidad";
var REQUISITO_ZEN = "Requisito de Zen";
var REQUISITO_ESPECIALIDAD = "Requisito de Especialización";
var REQUISITO_UNO_DE_LOS_SIGUIENTES = "Requisito uno entre varios";
var REQUISITO_TODOS_LOS_SIGUIENTES = "Requisitos varios";
var REQ_CADENA_UNO_ENTRE = "Uno de los siguientes requisitos";
var REQ_CADENA_SIGUIENTES = "Todos los siguientes requisitos";
var REQUISITO_TABLA = "Requisito de tabla";
var REQUISITO_ARTE_MARCIAL_GRADO = "Requisito de artes marciales a cierto grado";
var REQUISITO_CARACTERISTICA = "Requisito de caracteristica";
var REQUISITO_VENTAJA = "Requisito de ventaja";
var REQUISITO_ARS_MAGNUS = "Requisito de Ars Magnus";
var REQUISITO_ARMA_MANEJADA = "Requisito de arma manejada";
var REQUISITO_CATEGORIA_ARMA_MANEJADA = "Requisito de arma de categoría manejada";
/**
 *
 * @class Requisito
 * @param {string} tipo
 * @param {string|Requisito[]|{habilidad: string,especializacion:string}} item
 * @param {number} valor
 * @constructor
 */
function Requisito(tipo, item, valor) {
    /**
     *
     * @type {string}
     */
    this.tipo = tipo;
    if ((tipo == REQUISITO_UNO_DE_LOS_SIGUIENTES) || (tipo == REQUISITO_TODOS_LOS_SIGUIENTES)) {
        /**
         *
         * @type {Requisito[]}
         */
        this.requisitos = item;
    } else {
        /**
         *
         * @type {string}
         */
        this.item = item;

        /**
         *
         * @type {number}
         */
        this.valor = valor;
    }
}

Requisito.prototype = {

    constructor : Requisito,

    toString : function() {
        var cadena = "";
        if (this.tipo == REQUISITO_UNO_DE_LOS_SIGUIENTES) {
            cadena = REQ_CADENA_UNO_ENTRE + ": ";
            for (var i = 0; i < this.requisitos.length; i++) {
                cadena += this.requisitos[i].toString();
                if (i < this.requisitos.length-1) {
                    cadena += "; ";
                }
            }
        } else if (this.tipo == REQUISITO_TODOS_LOS_SIGUIENTES) {
            cadena = REQ_CADENA_SIGUIENTES + ": ";
            for (var j = 0; j < this.requisitos.length; j++) {
                cadena += this.requisitos[j].toString();
                if (j < this.requisitos.length-1) {
                    cadena += "; ";
                }
            }
        } else {
            cadena = this.tipo + ": " + this.item;
            if (this.valor != 0) {
                cadena += " " + this.valor;
            }
        }
        return cadena;
    },

    /**
     *
     * @returns {string}
     */
    getTipo : function() {
        return this.tipo;
    },

    /**
     *
     * @returns {string}
     */
    getItem : function() {
        return this.item;
    },

    /**
     *
     * @returns {Requisito[]}
     */
    getRequisitos : function() {
        return this.requisitos;
    },

    /**
     *
     * @returns {number}
     */
    getValor : function() {
        return this.valor;
    },

    /**
     *
     * @param {Personaje} personaje
     * @returns {boolean}
     */
    cumple : function(personaje) {
        var cumple = true;
        var valor = 0;
        switch (this.tipo) {
            case REQUISITO_HABILIDAD_ATAQUE:
                if (this.item != "") {
                    var armaAtaque = new ArmaComprada(getArma(this.item));
                    valor = getAtaqueFinalConArma(personaje,armaAtaque);
                } else {
                    valor = personaje.getHabilidadDePersonaje(HB_ATAQUE).valorFinalActual();
                }
                cumple = ( valor >= this.valor);
                break;
            case REQUISITO_HABILIDAD_PARADA:
                if (this.item != "") {
                    var armaParada = new ArmaComprada(getArma(this.item));
                    valor = getDefensaFinalConArma(personaje,armaParada);
                } else {
                    valor = personaje.getHabilidadDePersonaje(HB_PARADA).valorFinalActual();
                }
                cumple = ( valor >= this.valor);
                break;
            case REQUISITO_HABILIDAD:
                valor = personaje.getHabilidadDePersonaje(this.item).valorFinalActual();
                cumple = ( valor >= this.valor);
                break;
            case REQUISITO_CARACTERISTICA:
                cumple = (personaje.getCaracteristica(this.item) >= this.valor);
                break;
            case REQUISITO_ESPECIALIDAD:
                cumple = false;
                var habilidad = personaje.getHabilidadDePersonaje(this.item.habilidad);
                if (habilidad.getEspecializacion() == this.item.especializacion) {
                    cumple = (personaje.getHabilidadDePersonaje(this.item.habilidad).valorFinalActual() >= this.valor);
                }
                break;
            case REQUISITO_TABLA:
                cumple = (personaje.hasTablaArmas(this.item));
                break;
            case REQUISITO_HABILIDAD_KI:
                cumple = (personaje.hasHabilidadKi(this.item));
                break;
            case REQUISITO_ARTE_MARCIAL:
                cumple = personaje.hasArteMarcial(this.item);
                break;
            case REQUISITO_TURNO:
                cumple = (getTurnoFinalConArma(personaje,this.item) >= this.valor);
                break;
            case REQUISITO_INHUMANIDAD:
                cumple = (personaje.hasFlag(FLAG_INHUMANIDAD));
                break;
            case REQUISITO_ZEN:
                cumple = (personaje.hasFlag(FLAG_ZEN));
                break;
            case REQUISITO_VENTAJA:
                cumple = personaje.hasVentaja(getVentaja(this.item),"");
                break;
            case REQUISITO_ARS_MAGNUS:
                cumple = personaje.hasArsMagnus(this.item);
                break;
            case REQUISITO_ARTE_MARCIAL_GRADO:
                var artesMarciales = personaje.getArtesMarciales();
                var total = 0;
                for (var j = 0; j < artesMarciales.length; j++) {
                    if (artesMarciales[j].getGrado() == this.item) {
                        total++;
                    }
                }
                cumple = (total >= this.valor);
                break;
            case REQUISITO_ARMA_MANEJADA:
                cumple = personaje.hasArmaManejada(this.item);
                break;
            case REQUISITO_CATEGORIA_ARMA_MANEJADA:
                var armas = personaje.manejoArmas;
                for (var xx = 0; xx < armas.length; xx++) {
                    if (armas[xx].getCategoria() == this.item)
                        cumple = true;
                }
                break;
            case REQUISITO_UNO_DE_LOS_SIGUIENTES:
                var cumpleEsteReq = false;
                for (var i = 0; i < this.requisitos.length; i++) {
                    cumpleEsteReq = cumpleEsteReq || this.requisitos[i].cumple(personaje);
                }
                cumple = cumpleEsteReq;
                break;
            case REQUISITO_TODOS_LOS_SIGUIENTES:
                var cumpleLosReq = true;
                for (var k = 0; k < this.requisitos.length; k++) {
                    cumpleLosReq = cumpleLosReq && this.requisitos[k].cumple(personaje);
                }
                cumple = cumpleLosReq;
                break;
        }
        return cumple;
    }
};
