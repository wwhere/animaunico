var REQUISITO_HABILIDAD = "Requisito de habilidad";
var REQUISITO_HABILIDAD_KI = "Requisito de Habilidad del Ki";
var REQUISITO_ARTE_MARCIAL = "Requisito de Arte Marcial";
var REQUISITO_TURNO = "Requisito de Turno";
var REQUISITO_INHUMANIDAD = "Requisito de Inhumanidad";
var REQUISITO_ZEN = "Requisito de Zen";
var REQUISITO_ESPECIALIDAD = "Requisito de Especialización";
var REQUISITO_UNO_DE_LOS_SIGUIENTES = "Requisito uno entre varios";
var REQ_CADENA_UNO_ENTRE = "Uno de los siguientes requisitos";

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
    if (tipo == REQUISITO_UNO_DE_LOS_SIGUIENTES) {
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
        } else {
            cadena = this.tipo + ": " + this.item;
            if (this.tipo == REQUISITO_HABILIDAD) {
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

        switch (this.tipo) {
            case REQUISITO_HABILIDAD:
                var valor = 0;
                if (this.item == HB_ATAQUE) {
                    valor = getAtaqueFinalConArma(personaje,ARMA_SIN_ARMAS);
                } else if (this.item == HB_PARADA) {
                    valor = getDefensaFinalConArma(personaje,ARMA_SIN_ARMAS);
                } else {
                    valor = personaje.getHabilidadDePersonaje(this.item).valorFinalActual();
                }
                cumple = ( valor >= this.valor);
                break;
            case REQUISITO_ESPECIALIDAD:
                cumple = false;
                var habilidad = personaje.getHabilidadDePersonaje(this.item.habilidad);
                if (habilidad.getEspecializacion() == this.item.especializacion) {
                    cumple = (personaje.getHabilidadDePersonaje(this.item.habilidad).valorFinalActual() >= this.valor);
                }
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
            case REQUISITO_UNO_DE_LOS_SIGUIENTES:
                var cumpleEsteReq = false;
                for (var i = 0; i < this.requisitos.length; i++) {
                    cumpleEsteReq = cumpleEsteReq || this.requisitos[i].cumple(personaje);
                }
                cumple = cumpleEsteReq;
                break;
        }
        return cumple;
    }
};
