/**
 *
 * @class Raza
 * @param {string} nombre
 * @param {Ventaja[]} ventajas
 * @param {Ventaja[]} desventajas
 * @constructor
 */
function Raza(nombre, ventajas, desventajas, modNivel) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {Ventaja[]}
     */
    this.ventajas = ventajas;

    /**
     *
     * @type {Ventaja[]}
     */
    this.desventajas = desventajas;

    /**
     *
     * @type {number[]}
     */
    this.bonosCaracteristicas = [0,0,0,0,0,0,0,0];

    /**
     *
     * @type {number}
     */
    this.modificadorNivel = modNivel;
}

Raza.prototype = {
    constructor : Raza,

    toString : function() {
        return this.nombre;
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
     * @returns {Ventaja[]}
     */
    getVentajas : function() {
        return this.ventajas;
    },

    /**
     *
     * @returns {Ventaja[]}
     */
    getDesventajas : function() {
        return this.desventajas;
    },

    /**
     *
     * @returns {ExplicaVentajaRaza[]}
     */
    getExplicacion : function() {
        var exp = [];

        for (var i = 0; i < this.ventajas.length; i++) {
            exp.push(new ExplicaVentajaRaza(this.ventajas[i].getNombre(),this.ventajas[i].getDescripcion(),this.ventajas[i].getDescripcionEfecto()));
        }
        for (var j = 0; j < this.desventajas.length; j++) {
            exp.push(new ExplicaVentajaRaza(this.desventajas[j].getNombre(),this.desventajas[j].getDescripcion(),this.desventajas[j].getDescripcionEfecto()));
        }

        return exp;
    },

    /**
     *
     * @param {string} caracteristica
     * @returns {number}
     */
    getBonoCaracteristica : function(caracteristica) {
        return this.bonosCaracteristicas[getIndiceCaracteristica(caracteristica)];
    },

    /**
     *
     * @returns {number}
     */
    getModNivel : function() {
        return this.modificadorNivel;
    },

    toJSON : function() {
        return this.nombre;
    }
}

/**
 *
 * @class ExplicaVentajaRaza
 * @param {string} nombre
 * @param {string} descripcion
 * @param {string} reglas
 * @constructor
 */
function ExplicaVentajaRaza(nombre, descripcion, reglas) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {string}
     */
    this.descripcion = descripcion;

    /**
     *
     * @type {string}
     */
    this.reglas = reglas;
}

ExplicaVentajaRaza.prototype = {
    constructor : ExplicaVentajaRaza,

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
     * @returns {string}
     */
    getReglas : function() {
        return this.reglas;
    }
}