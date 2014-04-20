/**************TIPOS DE BONOS*/
var BONO_HABILIDAD = "bono a habilidad";
var BONO_TURNO = "bono al turno";
var BONO_DAÑO = "bono al daño";
var BONO_ENTEREZA = "bono a la entereza";
var BONO_ROTURA = "bono a la rotura";
var BONO_TAMAÑO = "bono al tamaño";
var BONO_RESISTENCIA = "bono a Resistencia";
var BONO_PV = "bono a los pv";
var BONO_REGENERACION = "bono a la regeneración";
var BONO_CM = "bono al CM";
var BONO_KI = "bono a una habilidad de ki";
var BONO_INT_APRENDER_CONJURO = "bono a la INT para aprender conjuros";
var BONO_MAGIA_INNATA = "bono a la magia innata";
var BONO_ARMADURA_NATURAL = "bono de armadura natural";
/***************************/



/************CATEGORIAS DE BONOS*/
var BONO_INNATO = "Innato";
var BONO_CARACTERISTICA = "Característica";
var BONO_ESPECIAL = "Especial";
var BONO_CATEGORIA = "Categoría";
var BONO_NATURAL = "Natural";
var BONO_MAESTRO = "Maestro"; //TODO solo se aplica el mayor de los que se tengan

var CATEGORIA_BONO_CUALQUIERA = "CATEGORIA_BONO_CUALQUIERA";
/*********************************/

/**
 *
 * @param {string} tipo
 * @param {string} item
 * @param {number} bono
 * @param {string} opcion
 * @param {boolean} porNivel
 * @param {string} categoria
 * @param {string} origen
 * @param {{}} [parametros]
 * @constructor
 * @class Bono
 */
function Bono(tipo, item, bono, opcion, porNivel,categoria,origen,parametros) {
    /** @type string */
    this.tipo = tipo;

    /** @type string */
    this.item = item;

    /** @type number */
    this.bono = bono;

    /** @type string */
    this.opcion = opcion || "";

    /** @type string */
    this.categoria = categoria || "";

    /** @type string */
    this.origen = origen ||"";

    if (this.origen == ORIGEN_CATEGORIA) {
        /** @type string */
        this.categoriaPersonaje = parametros.categoriaPersonaje;
    }

    /** @type boolean */
    this.porNivel = porNivel || false;
}

Bono.prototype = {
    constructor: Bono,

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
    getItem : function() {
        return this.item;
    },

    /**
     *
     * @returns {number}
     */
    getBono : function() {
        return this.bono;
    },

    /**
     *
     * @returns {string}
     */
    getBonoString : function() {
        if (this.bono < 0) {
            return "" + this.bono;
        } else {
            return "+" + this.bono;
        }
    },

    /**
     *
     * @param {number} nivel El nivel al que se quiere saber el valor del bono
     * @param {Personaje} personaje El personaje que posee el bono
     * @returns {number}
     */
    getBonoParaNivel : function(nivel, personaje) {
        var valor;
        if (this.porNivel) {
            if (this.origen == ORIGEN_CATEGORIA) {
                var nivelesDeCategoria = personaje.getNivelesDeCategoriaHastaNivel(this.categoriaPersonaje,nivel);
                valor = this.bono*nivelesDeCategoria;
            } else {
                valor = this.bono*nivel;
            }
        } else {
            valor = this.bono;
        }
        return valor;
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
    getCategoria : function() {
        return this.categoria;
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
     * @returns {boolean}
     */
    isPorNivel : function() {
        return this.porNivel;
    }
};


//region BonificadorNatural

/**
 *
 * @class BonificadorNatural
 * @constructor
 */
function BonificadorNatural() {
    /** @type string */
    this[TIPO_BONIFICADOR_NATURAL_FISICO] = "";

    /** @type string */
    this[TIPO_BONIFICADOR_NATURAL_MENTAL] = "";

    /** @type string */
    this[TIPO_BONIFICADOR_NATURAL_EXTRA] = "";
}

BonificadorNatural.prototype = {
    constructor : BonificadorNatural,

    /**
     *
     * @returns {string}
     */
    getFisico : function() {
        return this[TIPO_BONIFICADOR_NATURAL_FISICO];
    },

    /**
     *
     * @param {string} nombreHabilidad
     */
    setFisico : function(nombreHabilidad) {
        this[TIPO_BONIFICADOR_NATURAL_FISICO] = nombreHabilidad;
    },

    /**
     *
     * @returns {string}
     */
    getMental : function() {
        return this[TIPO_BONIFICADOR_NATURAL_MENTAL];
    },

    /**
     *
     * @param {string} nombreHabilidad
     */
    setMental : function(nombreHabilidad) {
        this[TIPO_BONIFICADOR_NATURAL_MENTAL] = nombreHabilidad;
    },

    getExtra : function() {
        return this[TIPO_BONIFICADOR_NATURAL_EXTRA];
    },

    /**
     *
     * @param {string} nombreHabilidad
     */
    setExtra : function(nombreHabilidad) {
        this[TIPO_BONIFICADOR_NATURAL_EXTRA] = nombreHabilidad;
    }
};
//endregion BonificadorNatural
