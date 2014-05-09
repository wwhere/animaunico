/**
 *
 * @param {string} nombre
 * @param {string} rama
 * @param {function} [efecto]
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

    if (efecto)
        /**
         *
         * @type {function}
         */
        this.efecto = efecto;
    else
        /**
         *
         * @type {function}
         */
        this.efecto = sinEfecto;
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
 * @param {number} posicion
 * @constructor
 */
function EsferaMetamagicaComprada(esferaMetamagica, posicion) {
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

    /**
     *
     * @type {number[]}
     */
    this.arcanaSephirah = [];
    this.arcanaSephirah.push(posicion);


}

EsferaMetamagicaComprada.prototype = {
    constructor : EsferaMetamagicaComprada,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.esferaMetamagica.getNombre();
    },

    /**
     *
     * @returns {string}
     */
    getRama : function() {
        return this.esferaMetamagica.getRama();
    },

    /**
     *
     * @returns {Function}
     */
    getEfecto : function() {
        return this.esferaMetamagica.getEfecto();
    },

    addEsfera : function(posicion) {
        this.numero++;
        this.arcanaSephirah.push(posicion);
    },

    /**
     *
     * @returns {number[]}
     */
    getArcanaSephirah : function() {
        return this.arcanaSephirah;
    },

    /**
     *
     * @returns {number[]}
     */
    getAccesoPermitido : function() {
        var acceso = [];

        for (var i = 0; i < this.arcanaSephirah.length; i++) {
            acceso.push(arcanaSephirah[this.arcanaSephirah[i]].getConexiones());
        }

        acceso.sort();
        var accesoUnico = [];

        $.each(acceso, function(i, el){
            if($.inArray(el, accesoUnico) === -1) accesoUnico.push(el);
        });
        return acceso;
    }
};

/**
 *
 * @param {EsferaMetamagica} esfera
 * @param {number} coste
 * @param {number} nivelMinimo
 * @param {number[]} conexiones
 * @constructor
 * @param {number} posicion
 */
function ArcanaSephirah(posicion, esfera, coste, nivelMinimo, conexiones) {
    /**
     *
     * @type {EsferaMetamagica}
     */
    this.esferaMetamagica = esfera;

    /**
     *
     * @type {number}
     */
    this.posicion = posicion;

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
     * @returns {number}
     */
    getPosicion : function() {
        return this.posicion;
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
    getCoste : function() {
        return this.coste;
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
    },

    /**
     *
     * @returns {number[]}
     */
    getConexiones : function() {
        return this.conexiones;
    }
};