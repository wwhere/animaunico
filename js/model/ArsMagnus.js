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

    /**
     *
     * @param personaje
     * @returns {boolean}
     */
    cumpleRequisitos : function(personaje) {
        for (var i = 0; i < this.requisitos.length;i++) {
            var requisito = this.requisitos[i];

            if (!requisito.cumple(personaje)) {
                return false;
            }
        }

        return true;
    },

    toJSON : function() {
        return this.nombre;
    }
};

/**
 *
 * @param {ArsMagnus} arsMagnus
 * @constructor
 */
function ArsMagnusComprado(arsMagnus) {
    /**
     *
     * @type {ArsMagnus}
     */
    this.arsMagnus = arsMagnus;

    /**
     *
     * @type {boolean}
     */
    this.anulable = true;
}

ArsMagnusComprado.prototype = {
    constructor : ArsMagnusComprado,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.arsMagnus.getNombre();
    },

    /**
     *
     * @param personaje
     * @returns {boolean}
     */
    cumpleRequisitos : function(personaje) {
    return this.arsMagnus.cumpleRequisitos(personaje);
    },

    /**
     * @param {string} categoriaActual
     * @param {string} categoriaNueva
     * @returns {number}
     */
    ajustePDCambioCategoria : function(categoriaActual, categoriaNueva) {
        var ajuste = 0;
        if (this.getNombre() == ARS_MAGNUS_KIAI) {
            if ((categoriaActual == CAT_TAO) && (categoriaNueva != CAT_TAO)) {
                ajuste = -1 * (this.arsMagnus.costePD/2);
            } else if ((categoriaActual != CAT_TAO) && (categoriaNueva == CAT_TAO)) {
                ajuste = this.arsMagnus.costePD/2;
            }
        }
        return ajuste;
    },

    /**
     *
     * @returns {boolean}
     */
    isAnulable : function() {
        return this.anulable;
    },

    /**
     *
     * @param {boolean} valor
     */
    setAnulable : function(valor) {
        this.anulable = anulable;
    },

    /**
     *
     * @returns {Requisito[]}
     */
    getRequisitos : function() {
        return this.arsMagnus.getRequisitos();
    },

    /**
     *
     * @param personaje
     * @returns {number}
     */
    getCostePD : function(personaje) {
        return this.arsMagnus.getCostePD(personaje);
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        return this.arsMagnus.getCosteCM();
    },

    /**
     *
     * @returns {string[]}
     */
    getFlagsNecesarios : function() {
        return this.arsMagnus.getFlagsNecesarios();
    }
};