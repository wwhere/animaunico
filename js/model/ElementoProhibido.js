/**
 *
 * @class ElementoProhibido
 * @param {string} tipo
 * @param {string} nombre
 * @param {string} [opcion]
 * @constructor
 */
function ElementoProhibido(tipo, nombre, opcion) {
    /**
     *
     * @type {string}
     */
    this.tipo = tipo;

    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {number}
     */
    this.candados = 1;

    if (opcion != undefined) {
        /**
         *
         * @type {string}
         */
        this.opcion = opcion;
    }
}

ElementoProhibido.prototype = {
    constructor : ElementoProhibido,

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
    getNombre : function() {
        return this.nombre;
    },

    /**
     *
     * @returns {number}
     */
    getCandados : function() {
        return this.candados;
    },

    /**
     *
     * @param {number} valor
     */
    setCandados : function(valor) {
        this.candados = valor;
    },

    /**
     *
     */
    abreCandado : function() {
        this.candados--;
    },

    /**
     *
     */
    cierraCandado : function() {
        this.candados++;
    },

    /**
     *
     * @returns {boolean}
     */
    hasOpcion : function() {
        //noinspection JSValidateTypes
        return (this.opcion != undefined);
    },

    /**
     *
     * @returns {string}
     */
    getOpcion : function() {
        return this.opcion;
    }
};
