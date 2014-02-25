var BERYL = "Beryl";
var SHAJAD = "Shajad";

/**
 *
 * @class Elan
 * @param {string} nombre
 * @param {number} sincronizacion
 * @constructor
 */
function Elan(nombre, sincronizacion) {
    /** @type string */
    this.nombre = nombre;

    /** @type number */
    this.sincronizacion = sincronizacion;

    /** @type number */
    this.sincGastada = 0;

    /** @type DonElan[] */
    this.dones = [];
}

Elan.prototype = {

    constructor : Elan,

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
    getSincronizacion : function() {
        return this.sincronizacion;
    },

    /**
     *
     * @param {number} valor
     */
    addSincronizacion : function(valor) {
        this.sincronizacion += valor;
    },

    /**
     *
     * @returns {number}
     */
    getSinGastada : function() {
        return this.sincGastada;
    },

    /**
     *
     * @param {number} value
     */
    setSincGastada : function(value) {
        this.sincGastada = value;
    },

    /**
     *
     * @param {number} valor
     */
    gastaSincronizacion : function(valor) {
        this.sincGastada += valor;
    },

    /**
     *
     * @returns {number}
     */
    sincLibre : function() {
        return this.sincronizacion-this.sincGastada;
    },

    /**
     *
     * @param {DonElan} don
     */
    addDon : function(don) {
        this.dones.push(don);
    },

    /**
     *
     * @param {string} nombreDon
     * @returns {boolean}
     */
    hasDon : function(nombreDon) {
        for (var i = 0; i < this.dones.length; i++) {
            if (this.dones[i].getNombre() == nombreDon) {
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @returns {DonElan[]}
     */
    getDones : function() {
        return this.dones;
    }
};

/**
 *
 * @class BerylShajad
 * @param {string} nombre
 * @param {string} tipo
 * @constructor
 */
function BerylShajad(nombre, tipo) {
    /** @type string */
    this.nombre = nombre;

    /** @type string */
    this.tipo = tipo;

    /** @type DonElan[] */
    this.dones = [];
}

BerylShajad.prototype = {

    constructor : BerylShajad,

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
    getTipo : function() {
        return this.tipo;
    },

    /**
     *
     * @returns {DonElan[]}
     */
    getDones : function() {
        return this.dones;
    },

    /**
     *
     * @param {DonElan} don
     */
    addDon : function(don) {
        this.dones.push(don);
    },

    /**
     *
     * @param {string} nombreDon
     * @returns {boolean}
     */
    hasDon : function(nombreDon) {
        for (var i = 0; i < this.dones.length; i++) {
            if (this.dones[i].getNombre() == nombreDon) {
                return true;
            }
        }
        return false;
    },

    toJSON : function() {
        return this.nombre;
    }
};

/**
 *
 * @class DonElan
 * @param {string} nombre
 * @param {string} descripcion
 * @param {number} coste
 * @param {number} elanMinimo
 * @param {string[]} ventajasConcedidas
 * @param {string[]} donesRequisito
 * @constructor
 */
function DonElan(nombre, descripcion, coste, elanMinimo, ventajasConcedidas, donesRequisito) {
    /** @type string */
    this.nombre = nombre;

    /** @type string */
    this.descripcion = descripcion;

    /** @type number */
    this.coste = coste;

    /** @type number */
    this.elanMinimo = elanMinimo;

    /** @type string[] */
    this.ventajasConcedidas = ventajasConcedidas;

    /** @type string[] */
    this.donesRequisito = donesRequisito;
}

DonElan.prototype = {

    constructor : DonElan,

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
    getCoste : function() {
        return this.coste;
    },

    /**
     *
     * @returns {number}
     */
    getElanMinimo : function() {
        return this.elanMinimo;
    },

    /**
     *
     * @returns {string[]}
     */
    getVentajasConcedidas : function() {
        return this.ventajasConcedidas;
    },

    /**
     *
     * @returns {string[]}
     */
    getDonesRequisito : function() {
        return this.donesRequisito
    },

    /**
     *
     * @returns {boolean}
     */
    puedeComprarse : function() {
        var nombreElan = "";
        for (var i = 0; i < berylShajad_set.length; i++) {
            for (var j = 0; j < berylShajad_set[i].dones.length; j++) {
                if (berylShajad_set[i].dones[j].nombre == this.nombre) {
                    nombreElan = berylShajad_set[i].nombre;
                    break;
                }
            }
        }

        var elanPersonaje;
        for (i = 0; i < personaje_actual.elan.length; i++) {
            if (personaje_actual.elan[i].nombre == nombreElan) {
                elanPersonaje =personaje_actual.elan[i];
                break;
            }
        }
        if (i == personaje_actual.elan.length) {
            return false;
        }

        if (elanPersonaje.hasDon(this.nombre)) {
            return false;
        }

        if (elanPersonaje.getSincronizacion() < this.elanMinimo) {
            return false;
        }

        if (elanPersonaje.sincLibre() < this.coste) {
            return false;
        }

        for (i = 0; i < this.donesRequisito.length; i++) {
            if (!elanPersonaje.hasDon(this.donesRequisito[i])) {
                return false;
            }
        }

        return true;
    },

    toJSON : function() {
        return this.nombre;
    }
};