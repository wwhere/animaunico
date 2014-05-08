/**
 *
 * @param {string} nombre
 * @param {string} rama
 * @param {function} efecto
 * @constructor
 */
function EsferaMetamagica(nombre, rama, efecto) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {string}
     */
    this.rama = rama;

    /**
     *
     * @type {function}
     */
    this.efecto = efecto;
}

EsferaMetamagica.prototype = {
    constructor : EsferaMetamagica,

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
    getRama : function() {
        return this.rama;
    },

    /**
     *
     * @returns {Function}
     */
    getEfecto : function() {
        return this.efecto;
    },

    toJSON : function() {
        return this.nombre;
    }
};

/**
 *
 * @param {EsferaMetamagica} esferaMetamagica
 * @constructor
 */
function EsferaMetamagicaComprada(esferaMetamagica) {
    /**
     *
     * @type {EsferaMetamagica}
     */
    this.esferaMetamagica = esferaMetamagica;

    /**
     *
     * @type {number}
     */
    this.numero = 1;
}

EsferaMetamagicaComprada.prototype = {
    constructor : EsferaMetamagicaComprada,

    getNombre : function() {
        return this.esferaMetamagica.getNombre();
    },

    getRama : function() {
        return this.esferaMetamagica.getRama();
    },

    getEfecto : function() {
        return this.esferaMetamagica.getEfecto();
    },

    addEsfera : function() {
        this.numero++;
    }
};

/**
 *
 * @param {EsferaMetamagica} esfera
 * @param {number} coste
 * @param {number} nivelMinimo
 * @param {number[]} conexiones
 * @constructor
 */
function ArcanaSephirah(esfera, coste, nivelMinimo, conexiones) {
    /**
     *
     * @type {EsferaMetamagica}
     */
    this.esferaMetamagica = esfera;

    /**
     *
     * @type {number}
     */
    this.coste = coste;

    /**
     *
     * @type {number}
     */
    this.nivelMinimo = nivelMinimo;

    /**
     *
     * @type {number[]}
     */
    this.conexiones = conexiones;
}

ArcanaSephirah.prototype = {
    constructor : ArcanaSephirah,

    /**
     *
     * @returns {EsferaMetamagica}
     */
    getEsfera : function() {
        return this.esferaMetamagica;
    },

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.esferaMetamagica.getNombre();
    },

    /**
     *
     * @returns {number}
     */
    getNivelMinimo : function() {
        return this.nivelMinimo;
    },

    /**
     *
     * @returns {boolean}
     */
    isInicial : function() {
        return this.nivelMinimo == 0;
    },

    /**
     *
     * @param {number} valor
     * @returns {boolean}
     */
    permiteComprar : function(valor) {
        for (var i = 0; i < this.conexiones.length; i++) {
            if (this.conexiones[i] == valor)
                return true;
        }
        return false;
    }
};