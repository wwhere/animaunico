var REQUISITO_HABILIDAD = "Requisito de habilidad";
var REQUISITO_HABILIDAD_KI = "Requisito de Habilidad del Ki";
var REQUISITO_ARTE_MARCIAL = "Requisito de Arte Marcial";
var REQUISITO_UNO_DE_LOS_SIGUIENTES = "Requisito uno entre varios";

/**
 *
 * @class Requisito
 * @param {string} tipo
 * @param {string|Requisito[]} item
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
                cumple = (personaje.getHabilidadDePersonaje(this.item).valorFinalActual() >= this.valor);
                break;
            case REQUISITO_HABILIDAD_KI:
                cumple = (personaje.hasHabilidadKi(this.item));
                break;
            case REQUISITO_ARTE_MARCIAL:
                cumple = personaje.hasArteMarcial(this.item);
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
