/**
 *
 * @class HabilidadKi
 * @param {string} nombre
 * @param {number} costeCM
 * @param {string[]} requisitos
 * @constructor
 * @param {string} descripcion
 * @param {function} [efecto]
 * @param {boolean} isHabilidad
 * @param {string} [nombreHabilidadMedia]
 */
function HabilidadKi(nombre, descripcion, costeCM, requisitos, efecto, isHabilidad, nombreHabilidadMedia) {
    /** @type string */
    this.nombre = nombre;

    /** @type string */
    this.descripcion = descripcion;

    /** @type number */
    this.costeCM = costeCM;

    /** @type string[] */
    this.requisitos = requisitos;

    /** @type {function} */
    this.efecto = efecto;

    /** @type {boolean} */
    this.esHabilidad = isHabilidad;

    /** @type {string} */
    this.nombreHabilidadMedia = nombreHabilidadMedia || "";
}

HabilidadKi.prototype = {
    constructor : HabilidadKi,

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
    getDescripcion : function() {
        return this.descripcion;
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
    getRequisitos : function() {
        return this.requisitos;
    },

    /**
     *
     * @returns {function}
     */
    getEfecto : function() {
        return this.efecto;
    },

    /**
     *
     * @returns {boolean}
     */
    isHabilidad : function() {
        return this.esHabilidad;
    },

    /**
     *
     * @returns {string}
     */
    getNombreHabilidadMedia : function() {
        return this.nombreHabilidadMedia;
    },

    /**
     *
     * @param {Personaje} personaje
     * @returns {boolean}
     */
    cumple : function(personaje) {
        var cumple = true;
        for (var i = 0; i < this.requisitos.length; i++) {
            if (!personaje.hasHabilidadKi(this.requisitos[i])) {
                cumple = false;
            }
        }
        return cumple;
    },

    toJSON : function() {
        return this.nombre;
    }
};