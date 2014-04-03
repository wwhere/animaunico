/**
 *
 * @param {string} nombre
 * @param {number} grado
 * @constructor
 * @param {string} [grupo]
 * @param {string[]} prohibidos
 */
function Invocacion(nombre, grado, prohibidos, grupo) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {number}
     */
    this.grado = grado;

    /**
     *
     * @type {string[]}
     */
    this.prohibidos = prohibidos;

    /**
     *
     * @type {string}
     */
    this.grupo = "";
    if (grupo) {
        this.grupo = grupo;
    }
}

Invocacion.prototype = {
    constructor: Invocacion,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.nombre;
    },

    /**
     *
     * @returns {string}
     */
    getGrupo : function() {
        return this.grupo;
    },

    /**
     *
     * @returns {number}
     */
    getGrado : function() {
        return this.grado;
    },

    /**
     *
     * @returns {string[]}
     */
    getProhibidos : function() {
        return this.prohibidos
    },

    /**
     *
     * @returns {string}
     */
    toString : function() {
        return _l(this.nombre) + " (" + romanize(this.grado) + ")";
    },

    /**
     *
     * @returns {string}
     */
    toJSON : function() {
        return this.nombre;
    }
};

