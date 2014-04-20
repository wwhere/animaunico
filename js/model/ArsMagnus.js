/**
 *
 * @param {string} nombre
 * @param {Requisito[]} requisitos
 * @param {number} costePD
 * @param {number} costeCM
 * @param {string[]} flagsNecesarios
 * @constructor
 */
function ArsMagnus(nombre, requisitos, costePD, costeCM, flagsNecesarios) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {Requisito[]}
     */
    this.requisitos = requisitos;

    /**
     *
     * @type {number}
     */
    this.costePD = costePD;

    /**
     *
     * @type {number}
     */
    this.costeCM = costeCM;

    /**
     *
     * @type {string[]}
     */
    this.flagsNecesarios = flagsNecesarios;
}

ArsMagnus.prototype = {
    constructor : ArsMagnus,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.nombre;
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
     * @param personaje
     * @returns {number}
     */
    getCostePD : function(personaje) {
        var coste = this.costePD;

        if (personaje) {
            if (this.nombre == ARS_MAGNUS_KIAI) {
                if (personaje.getCategoria().getNombre() == CAT_TAO) {
                    coste /= 2;
                }
            }
        }

        return coste;
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        return this.costeCM;
    },

    /**
     *
     * @returns {string[]}
     */
    getFlagsNecesarios : function() {
        return this.flagsNecesarios;
    },

    toJSON : function() {
        return this.nombre;
    }
};

