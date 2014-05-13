var ERR_CONJURO_SIN_MANTENIMIENTO = "Error: El conjuro no tiene mantenimiento";
var ERR_CONJURO_DESCONOCIDO = "Error: nombre de conjuro desconocido";
/**
 *
 * @class ViaMagia
 * @param {string} nombre
 * @param {string} descripcion
 * @param {string} opuestas
 * @constructor
 */
function ViaMagia(nombre, descripcion, opuestas) {
    /** @type string */
    this.nombre = nombre;

    /** @type string */
    this.descripcion = descripcion;

    /** @type string */
    this.opuestas = opuestas;

    /** @type Conjuro[] */
    this.conjuros = [];

    /** @type number[] */
    this.nivelesLibreAcceso = [];
}

ViaMagia.prototype = {
    constructor : ViaMagia,

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
    getOpuestas : function() {
        return this.opuestas;
    },

    /**
     *
     * @returns {Conjuro[]}
     */
    getConjuros : function() {
        return this.conjuros;
    },

    /**
     *
     * @param {nivel} nivel
     * @returns {Conjuro}
     */
    getConjuro : function(nivel) {
        if (this["nivel"+nivel] != undefined) {
            return this["nivel"+nivel];
        }
        return undefined;
    },

    /**
     *
     * @param {string} nombreConjuro
     * @returns {Conjuro}
     * @throws ERR_CONJURO_DESCONOCIDO
     */
    getConjuroPorNombre : function(nombreConjuro) {
        for (var i = 0; i < this.conjuros.length; i++) {
            if (this.conjuros[i].getNombre() == nombreConjuro) {
                return this.conjuros[i];
            }
        }
        throw ERR_CONJURO_DESCONOCIDO + ": " + nombreConjuro;
    },

    hasConjuro : function(nombreConjuro) {
        for (var i = 0; i < this.conjuros.length; i++) {
            if (this.conjuros[i].getNombre() == nombreConjuro) {
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @param {Conjuro} conjuro
     */
    addConjuro : function(conjuro) {
        this.conjuros.push(conjuro);
        this["nivel"+conjuro.getNivel()] = conjuro;
    },

    /**
     *
     * @returns {number[]}
     */
    getNivelesLibreAcceso : function() {
        return this.nivelesLibreAcceso;
    },

    /**
     *
     * @param {number} nivel
     * @returns {boolean}
     */
    isNivelLibreAcceso : function(nivel) {
        for (var i = 0; i < this.nivelesLibreAcceso.length; i++) {
            if (this.nivelesLibreAcceso[i] == nivel) {
                return true;
            } else if (this.nivelesLibreAcceso[i] > nivel) {
                return false;
            }
        }
        return false;
    },

    toJSON : function() {
        return this.nombre;
    }
};

function SubViaMagia(nombre, viasCerradas) {
    /** @type string */
    this.nombre = nombre;

    /** @type string[] */
    this.viasCerradas = viasCerradas;

    /** @type Conjuro[] */
    this.conjuros = [];
}

SubViaMagia.prototype = {
    constructor: SubViaMagia,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.nombre;
    },

    /**
     *
     * @returns {string[]}
     */
    getViasCerradas : function() {
        return this.viasCerradas;
    },

    /**
     *
     * @param via
     * @returns {boolean}
     */
    hasViaCerrada : function(via) {
        for (var i = 0; i < this.viasCerradas.length;i++) {
            if (this.viasCerradas[i] == via)
                return true;
        }
        return false;
    },

    /**
     *
     * @returns {Conjuro[]}
     */
    getConjuros : function() {
        return this.conjuros;
    },

    /**
     *
     * @param nivel
     * @returns {Conjuro}
     */
    getConjuro : function(nivel) {
        return this["nivel"+nivel];
    },

    /**
     *
     * @param conjuro
     */
    addConjuro : function(conjuro) {
        this.conjuros.push(conjuro);
        this["nivel"+conjuro.getNivel()] = conjuro;
    }
};

/**
 *
 * @class Conjuro
 * @param {string} nombre
 * @param {number} nivel
 * @param {string} accion
 * @param {string|string[]} tipo
 * @param {string} efecto
 * @param {NivelesConjuro} costesZeon
 * @param {NivelesConjuro} intReq
 * @param {NivelesConjuro} objetivo
 * @param {NivelesConjuro|Object} mantenimiento
 * @param {string[]} [viasCerradas]
 * @constructor
 */
function Conjuro(nombre, nivel, /*accion, tipo, efecto, costesZeon, intReq, objetivo, mantenimiento,*/ viasCerradas) {
    /** @type string */
    this.nombre = nombre;

    /** @type number */
    this.nivel = nivel;

    /** @type boolean */
    this.anulable = true;

    /** @type string */
//    this.accion = accion;

    /** @type string[] */
/*    this.tipos = [];
    if (tipo.length > 0) {
        for (var i = 0; i < tipo.length;i++) {
            this.tipos.push(tipo[i]);
        }
    } else {
        this.tipos.push(tipo);
    }
*/
    /** @type string */
  //  this.efecto = efecto;

    /** @type NivelesConjuro */
    //this.costesZeon = costesZeon;

    /** @type NivelesConjuro */
    //this.intReq = intReq;

    /** @type NivelesConjuro */
    //this.objetivo = objetivo;

    /** @type NivelesConjuro|boolean */
/*    this.mantenimiento = false;
    if (mantenimiento != false) {
        if ("base" in mantenimiento) {
            this.mantenimiento = mantenimiento;
        }
    }*/

    /** @type string[] */
    this.viasCerradas = viasCerradas || [];
}

Conjuro.prototype = {
    constructor : Conjuro,

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
     * @returns {number}
     */
    getNivel : function() {
        return this.nivel;
    },

    /**
     *
     * @returns {string}
     */
  /*  getAccion : function() {
        return this.accion;
    },*/

    /**
     *
     * @returns {string[]}
     */
/*    getTipos : function() {
        return this.tipos;
    },*/

    /**
     *
     * @returns {string}
     */
/*    getEfecto : function() {
        return this.efecto;
    },*/

    /**
     *
     * @returns {NivelesConjuro}
     */
/*    getCosteZeon : function() {
        return this.costesZeon;
    },*/

    /**
     *
     * @returns {NivelesConjuro}
     */
/*    getIntReq : function() {
        return this.intReq;
    },*/

    /**
     *
     * @returns {NivelesConjuro}
     */
/*    getObjetivo : function() {
        return this.objetivo;
    },*/

    /**
     *
     * @returns {boolean}
     */
/*    hasMantenimiento : function() {
        return (this.mantenimiento != false);
    },*/

    /**
     *
     * @returns {NivelesConjuro|boolean}
     */
/*    getMantenimiento : function() {
        return this.mantenimiento;
    },*/

    /**
     *
     * @returns {string[]|Array}
     */
    getViasCerradas : function() {
        return this.viasCerradas;
    },

    /**
     *
     * @param {string} nombreVia
     * @returns boolean
     */
    compatibleConVia : function(nombreVia) {
        for (var i = 0; i < this.viasCerradas.length; i++) {
            if (this.viasCerradas[i] ==nombreVia) {
                return false;
            }
        }
        return true;
    },

    toJSON : function() {
        return this.nombre;
    }
};

//TODO crear ConjuroComprado
/**
 *
 * @class NivelEnVia
 * @param {ViaMagia} via
 * @param {number} nivel
 * @constructor
 * @param {SubViaMagia} [subvia]
 */
function NivelEnVia(via,nivel, subvia) {
    /** @type ViaMagia */
    this.via = via;

    /** @type number */
    this.nivel = nivel;

    /** @type number */
    this.nivelMinimo = 0;

    /** @type {Conjuro[]} */
    this.conjurosLibres = [];

    /** @type boolean */
    this.anulable = true;

    if (subvia)
        /**
         *
         * @type {SubViaMagia}
         */
        this.subvia = subvia;
    else
        /**
         *
         * @type {boolean}
         */
        this.subvia = false;
}

NivelEnVia.prototype = {
    constructor : NivelEnVia,

    toString : function() {
        return this.via.toString() + " " + this.nivel;
    },

    /**
     *
     * @returns {ViaMagia}
     */
    getVia : function() {
        return this.via;
    },

    /**
     *
     * @returns {SubViaMagia|boolean}
     */
    hasSubVia : function() {
        return this.subvia;
    },

    /**
     *
     * @param {number} nivel
     * @returns {boolean}
     */
    isNivelLibreAcceso : function(nivel) {
        if (this.subvia) {
            if (this.subvia.getConjuro(nivel)) {
                return false;
            }
        }
        return this.via.isNivelLibreAcceso(nivel);
    },

    /**
     *
     * @returns {number}
     */
    getNivel : function() {
        return this.nivel;
    },

    /**
     *
     * @param {number} valor
     */
    setNivel : function(valor) {
        this.nivel = valor;
    },

    /**
     *
     * @param {number} valor
     */
    addNivel : function (valor, ignoraNivelMinimo) {
        if ((this.getNivel()+valor >= this.nivelMinimo) ||ignoraNivelMinimo) {
            this.setNivel(this.getNivel()+valor);
            if (ignoraNivelMinimo) {
                if (this.nivelMinimo > this.nivel) {
                    this.nivelMinimo = this.nivel;
                }
            }
        }
    },

    /**
     *
     * @param {number} valor
     */
    setNivelMinimo : function(valor) {
        this.nivelMinimo = valor;
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
     * @returns {Conjuro[]}
     */
    getConjurosLibres : function() {
        return this.conjurosLibres;
    },

    /**
     *
     * @param {number} nivel
     * @returns {Conjuro}
     */
    getConjuro : function(nivel) {
        var conjuro;
        if (this.via.isNivelLibreAcceso(nivel)) {
            if (this.hasSubVia()) {
                conjuro = this.subvia.getConjuro(nivel);
                if (!conjuro) {
                    conjuro = this.getConjuroLibre(nivel);
                }
            } else {
                conjuro = this.getConjuroLibre(nivel);
            }
        } else {
            conjuro = this.via.getConjuro(nivel);
        }
        return conjuro;
    },

    /**
     *
     * @param nivel
     * @returns {Conjuro}
     */
    getConjuroLibre : function(nivel) {
        return this["nivel"+nivel];
    },

    /**
     *
     * @param {Conjuro} conjuro
     * @param {number} nivel
     */
    addConjuroLibre : function(conjuro, nivel) {
        var conjuroLibre = getConjuroLibreAprendido(conjuro, nivel);
        if (this["nivel"+nivel] != undefined) {
            this.removeConjuroLibre(nivel);
        }
        this.conjurosLibres.push(conjuroLibre);
        this["nivel" + nivel] = conjuroLibre;
    },

    /**
     *
     * @param {number} nivel
     */
    removeConjuroLibre : function(nivel) {
        if (this["nivel"+nivel] != undefined) {
            delete this["nivel"+nivel];
            var conjLimpios = [];
            for (var i = 0; i < this.conjurosLibres.length; i++) {
                if (this.conjurosLibres[i].getNivel() != nivel) {
                    conjLimpios.push(this.conjurosLibres[i]);
                }
            }
            this.conjurosLibres = conjLimpios;
        }
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
     * @param {boolean} valor
     */
    setAnulable : function(valor) {
        this.anulable = valor;
    }

};

/**
 *
 * @class NivelesConjuro
 * @param {string|number} base
 * @param {string|number} intermedio
 * @param {string|number} avanzado
 * @param {string|number} arcano
 * @constructor
 * @param {boolean} [diario]
 */
function NivelesConjuro(base, intermedio, avanzado, arcano, diario) {
    /** @type number|string*/
    this.base = base;

    /** @type number|string*/
    this.avanzado = avanzado;

    /** @type number|string*/
    this.intermedio = intermedio;

    /** @type number|string*/
    this.arcano = arcano;

    /** @type boolean*/
    this.diario = diario || false;
}

NivelesConjuro.prototype = {
    constructo : NivelesConjuro,

    /**
     *
     * @returns {number|string}
     */
    getBase : function() {
        return this.base;
    },

    /**
     *
     * @returns {number|string}
     */
    getAvanzado : function() {
        return this.avanzado;
    },

    /**
     *
     * @returns {number|string}
     */
    getIntermedio : function() {
        return this.intermedio;
    },

    /**
     *
     * @returns {number|string}
     */
    getArcano : function() {
        return this.arcano;
    },

    /**
     *
     * @returns {boolean}
     */
    isDiario : function() {
        return this.diario;
    }
};
