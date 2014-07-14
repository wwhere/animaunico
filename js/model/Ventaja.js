/**
 *
 * @class Ventaja
 * @param {string} nombre El nombre de la ventaja
 * @param {string} descripcion La descripción de la ventaja.
 * @param {string} descripcionEfecto La descripción del efecto mecánico de la ventaja.
 * @param {string} repetible Tipo de repetible
 * @param {number[]} coste Array de costes posibles en PC.
 * @param {ElementoProhibido[]} incompatibles Array con Ventajas incompatibles con ésta.
 * @param {boolean} anulable Una vez comprada, puede darse marcha atrás y devolverla.
 * @param {string[]} elegir Array de listas de opciones a especificar
 * @param {function[]} delegadoVentaja objeto de tipo DelegadoVentaja
 * @constructor
 * @param {string} grupo
 * @param {string[]} [flagsNecesarios]
 */
function Ventaja(nombre, descripcion, descripcionEfecto, repetible, coste, incompatibles, anulable, elegir, delegadoVentaja, grupo, flagsNecesarios) {
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
    this.descripcionEfecto = descripcionEfecto;

    /**
     *
     * @type {string}
     */
    this.repetible = repetible;

    /**
     *
     * @type {number[]}
     */
    this.costes = coste;

    /**
     *
     * @type {ElementoProhibido[]}
     */
    this.incompatibles = incompatibles;

    /**
     *
     * @type {boolean}
     */
    this.anulable = anulable;

    /**
     *
     * @type {string[]}
     */
    this.elegir = elegir;

    /**
     *
     * @type {string[]}
     */
    this.flagsNecesarios = flagsNecesarios || [];

    /**
     *
     * @type {string}
     */
    this.grupo = grupo;

    /**
     *
     * @type {function[]}
     */
    this.delegadoVentaja = delegadoVentaja;

    /**
     *
     * @type {boolean}
     */
    this.isBasica = false;
}

Ventaja.prototype = {
    constructor : Ventaja,

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
     * @returns {string}
     */
    getDescripcion : function() {
        return this.descripcion;
    },

    /**
     *
     * @returns {string}
     */
    getDescripcionEfecto : function() {
        return this.descripcionEfecto;
    },

    /**
     *
     * @returns {string}
     */
    getRepetible : function() {
        return this.repetible;
    },

    /**
     *
     * @returns {number[]}
     */
    getCostes : function() {
        return this.costes;
    },

    /**
     *
     * @returns {ElementoProhibido[]}
     */
    getIncompatibles : function() {
        return this.incompatibles;
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
     * @returns {string[]}
     */
    getElegir : function() {
        return this.elegir;
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
     * @returns {string}
     */
    getGrupo : function() {
        return this.grupo;
    },

    /**
     *
     * @returns {Function[]}
     */
    getDelegadoVentaja : function() {
        return this.delegadoVentaja;
    },

    toJSON : function() {
        return this.nombre;
    }
};

/**
 *
 * @class RepartoCostes
 * @constructor
 */
function RepartoCostes() {
    /**
     *
     * @type {number}
     */
    this.libres = 0;

    /**
     *
     * @type {number}
     */
    this.don = 0;

    /**
     *
     * @type {number}
     */
    this.psiquica = 0;
}

RepartoCostes.prototype = {
    constructor : RepartoCostes,

    /**
     *
     * @param {string} atributo
     * @param {number} valor
     */
    setValor : function(atributo, valor) {
        this[atributo] = valor;
    },

    /**
     *
     * @returns {number}
     */
    getLibres : function() {
        return this.libres;
    },

    /**
     *
     * @param {number} valor
     */
    setLibres : function(valor) {
        this.libres = valor;
    },

    /**
     *
     * @returns {number}
     */
    getDon : function() {
        return this.don;
    },

    /**
     *
     * @param {number} valor
     */
    setDon : function(valor) {
        this.don = valor;
    },

    /**
     *
     * @returns {number}
     */
    getPsiquica : function() {
        return this.psiquica;
    },

    /**
     *
     * @param {number} valor
     */
    setPsiquica : function(valor) {
        this.psiquica = valor;
    }
};

//region ElementoPCComprado
/**
 *
 * @class ElementoPCComprado
 * @param {Ventaja} elementoPC
 * @param {number}pc
 * @param {string} opcion
 * @param {string} origen
 * @constructor
 */
function ElementoPCComprado(elementoPC, pc, opcion, origen) {
    /** @type Ventaja */
    this.ventaja = elementoPC;

    /** @type number */
    this.pc = pc;

    /** @type string */
    this.opcion = opcion;

    /** @type string */
    this.origen = origen;

    /** @type RepartoCostes */
    this.repartoCostes = new RepartoCostes();

    /** @type boolean */
    this.anulable = elementoPC.isAnulable();
}

ElementoPCComprado.prototype = {
    constructor : ElementoPCComprado,


    toString : function() {
        return this.ventaja.toString() + " (" + this.pc + " PC)";
    },

    /**
     *
     * @returns {Ventaja}
     */
    getVentaja : function() {
        return this.ventaja;
    },

    /**
     *
     * @returns {number}
     */
    getPc : function() {
        return this.pc;
    },

    /**
     *
     * @returns {string}
     */
    getOpcion : function() {
        return this.opcion;
    },

    /**
     *
     * @returns {string}
     */
    getOrigen : function() {
        return this.origen;
    },

    /**
     *
     * @returns {RepartoCostes}
     */
    getRepartoCostes : function() {
        return this.repartoCostes;
    },

    /**
     *
     * @param {RepartoCostes} valor
     */
    setRepartoCostes : function(valor) {
        this.repartoCostes = valor;
    },

    /**
     *
     * @returns {boolean}
     */
    isAnulable : function() {
        return this.anulable;
    },

    /**
     * @param {boolean} valor
     */
    setAnulable : function(valor) {
        this.anulable = valor;
    },

    /**
     *
     * @returns {boolean}
     */
    isAumentable : function() {
        for (var i = 0; i < this.ventaja.costes.length; i++) {
            if (this.ventaja.costes[i] > this.pc) {
                return true;
            }
        }
        return false;
    }

};
//endregion ElementoPCComprado
