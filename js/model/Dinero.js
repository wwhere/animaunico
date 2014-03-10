var INCALCULABLE = -999;

/**
 *
 * @class Dinero
 * @param {number} oro
 * @param {number} plata
 * @param {number} cobre
 * @constructor
 */
function Dinero(oro, plata, cobre) {
    /** @type number */
    this.oro = oro;

    /** @type number */
    this.plata = plata;

    /** @type number */
    this.cobre = cobre;
}

Dinero.prototype = {
    constructor : Dinero,

    toString: function() {
        return this.oro + "mo, " + this.plata + "mp, " + this.cobre + "mc";
    },

    /**
     *
     * @returns {number}
     */
    getOro : function() {
        return this.oro;
    },

    /**
     *
     * @param {number} valor
     */
    setOro : function(valor) {
        this.oro = valor;
    },

    /**
     *
     * @param {number} valor
     */
    addOro : function(valor) {
        this.setOro(this.getOro() + valor);
    },

    /**
     *
     * @returns {number}
     */
    getPlata : function() {
        return this.plata;
    },

    /**
     *
     * @param {number} valor
     */
    setPlata : function(valor) {
        this.plata = valor;
    },

    /**
     *
     * @returns {number}
     */
    getCobre : function() {
        return this.cobre;
    },

    /**
     *
     * @param {number} valor
     */
    setCobre : function(valor) {
        this.cobre = valor;
    },
    /**
     *
     * @returns {number}
     */
    totalEnCobre : function() {
        if ((this.oro == INCALCULABLE) ||
            (this.plata == INCALCULABLE) ||
            (this.cobre == INCALCULABLE)) {
            return INCALCULABLE;
        }
        return ((((this.oro*100)+this.plata)*10)+this.cobre);
    },

    /**
     * Multiplica el coste por el valor pasado
     * @param {number} multiplicador
     */
    multiplica : function(multiplicador) {
        this.oro *= multiplicador;
        this.plata *= multiplicador;
        this.cobre *= multiplicador;
    }
};

