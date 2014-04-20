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
        return this.oro + _l(UI_MO) +", " + this.plata + _l(UI_MP) +", " + this.cobre + _l(UI_MC);
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
        this.reparteTotal();
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
     * @param {number} valor
     */
    addPlata : function(valor) {
        this.setPlata(this.getPlata() + valor);
        this.reparteTotal();
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
     * @param {number} valor
     */
    addCobre : function(valor) {
        this.setCobre(this.getCobre() + valor);
        this.reparteTotal();
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
    },

    reparteTotal : function() {
        var dineroActual = this.totalEnCobre();
        var mo = 0;
        var mp = 0;
        var mc = 0;

        if (dineroActual >= 1000) {
            mo = Math.floor(dineroActual/1000);
            dineroActual -= mo * 1000;
        }
        if (dineroActual >= 10) {
            mp = Math.floor(dineroActual/10);
            dineroActual -= mp*10;
        }
        mc = dineroActual;

        this.setOro(mo);
        this.setPlata(mp);
        this.setCobre(mc);
    }
};

