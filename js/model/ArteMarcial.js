/**
 *
 * @param {string} nombre
 * @param {string} descripcion
 * @param {string} familia
 * @param {string} descripcionVentajas
 * @param {Requisito[]} requisitos
 * @param {boolean} esBasica
 * @param {string} grado
 * @param {number} bonoCM
 * @param {Bono[]} bonos
 * @param {Array} dmgBaseElementos
 * @param {Array} tipoAtaque
 * @constructor
 * @class ArteMarcial
 */
function ArteMarcial(nombre, familia, descripcion,descripcionVentajas,esBasica, grado, requisitos,bonoCM,bonos, dmgBaseElementos, tipoAtaque) {
    /** @type string */
    this.nombre = nombre;

    /** @type string */
    this.descripcion = descripcion;

    /**
     *
     * @type {boolean}
     */
    this.esBasica = esBasica;

    /**
     *
     * @type {string}
     */
    this.familia = familia;

    /**
     *
     * @type {string}
     */
    this.grado = grado;

    /** @type string */
    this.descripcionVentajas = descripcionVentajas;

    /** @type Requisito[] */
    this.requisitos = requisitos;

    /** @type number */
    this.bonoCM = bonoCM;

    /** @type Bono[] */
    this.bonos = bonos;

    /** @type Array */
    this.dañobaseElementos = dmgBaseElementos;

    /** @type Array */
    this.tipoAtaque = tipoAtaque;
}

ArteMarcial.prototype = {
    constructor: ArteMarcial,

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
    getFamilia : function() {
        return this.familia;
    },

    /**
     *
     * @returns {string}
     */
    getGrado : function() {
        return this.grado;
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
    getDescripcionVentajas : function() {
        return this.descripcionVentajas;
    },

    /**
     *
     * @returns {Requisito[]}
     */
    getRequisitos : function() {
        return this.requisitos;
    },

    /**
     *
     * @returns {number}
     */
    getBonoCM : function() {
        return this.bonoCM;
    },

    /**
     *
     * @returns {Bono[]}
     */
    getBonos : function() {
        return this.bonos;
    },

    /**
     *
     * @returns {Array}
     */
    getDañoBaseElementos : function() {
        return this.dañobaseElementos;
    },

    /**
     *
     * @returns {Array}
     */
    getTipoAtaque : function() {
        return this.tipoAtaque;
    },

    /**
     *
     * @returns {number}
     */
    dañoBase : function(personaje) {
        var dañoBase = 0;
        for (var i = 0; i < this.dañobaseElementos.length;i++) {
            if (isNaN(this.dañobaseElementos[i])) {
                switch (this.dañobaseElementos[i]) {
                    case BONO_FUE:
                        dañoBase += personaje.getBonoCaracteristica(FUE);
                        break;
                    case BONO_POD:
                        dañoBase += personaje.getBonoCaracteristica(POD);
                        break;
                    case PRE:
                        dañoBase += personaje.getPresencia();
                        break;
                    case BONO_FUE_RED:
                        var bonoFue = personaje.getBonoCaracteristica(FUE);
                        if (bonoFue % 10 != 0) {
                            bonoFue += 5;
                        }
                        dañoBase += bonoFue;
                        break;
                    case BONO_POD_RED :
                        var bonoPod = personaje.getBonoCaracteristica(POD);
                        if (bonoPod % 10 != 0) {
                            bonoPod += 5;
                        }
                        dañoBase += bonoPod;
                        break;
                    case BONO_NO:
                        break;
                    case ROTURA_PLUS_10:
                        break;
                    case TA_ENEMIGA_MENOS_2:
                        break;
                    case ROTURA_PLUS_25:
                        break;
                    case TA_ENEMIGA_MENOS_6:
                        break;
                    case ARTE_MARCIAL:
                        i++;
                        var artesBasicas = this.dañobaseElementos[i];
                        var daño = 0;
                        for (var j = 0; j < artesBasicas.length; j++) {
                            var dañoFamilia = getDañoBaseFamiliaArtesMarciales(personaje,artesBasicas[j]);
                            if (dañoFamilia >= daño) {
                                daño = dañoFamilia;
                            }
                        }
                        dañoBase += daño;
                        break;
                }
            } else {
                dañoBase += this.dañobaseElementos[i];
            }
        }
        return dañoBase;
    },

    /**
     *
     * @returns {boolean}
     */
    cumpleRequisitos : function(personaje) {
        for (var i = 0; i < this.requisitos.length;i++) {
            var requisito = this.requisitos[i];

            if (!requisito.cumple(personaje)) {
                return false;
            }
        }

        return true;
    },

    /**
     *
     * @returns {boolean}
     */
    isBasica : function() {
        return this.esBasica;
    },

    toJSON : function() {
        return this.nombre;
    }
};

function ArteMarcialComprada(arteMarcial) {
    /** @type ArteMarcial */
    this.arteMarcial = arteMarcial;

    /** @type boolean */
    this.anulable = true;
}

ArteMarcialComprada.prototype = {
    constructor: ArteMarcialComprada,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.arteMarcial.nombre;
    },

    /**
     *
     * @returns {boolean}
     */
    isBasica : function() {
        return this.arteMarcial.isBasica();
    },

    /**
     *
     * @returns {string}
     */
    getGrado : function() {
        return this.arteMarcial.getGrado();
    },

    /**
     *
     * @returns {string}
     */
    getFamilia : function() {
        return this.arteMarcial.getFamilia();
    },

    /**
     *
     * @returns {string}
     */
    getDescripcion : function() {
        return this.arteMarcial.descripcion;
    },

    /**
     *
     * @returns {string}
     */
    getDescripcionVentajas : function() {
        return this.arteMarcial.descripcionVentajas;
    },

    /**
     *
     * @returns {Requisito[]}
     */
    getRequisitos : function() {
        return this.arteMarcial.requisitos;
    },

    /**
     *
     * @returns {number}
     */
    getBonoCM : function() {
        return this.arteMarcial.bonoCM;
    },

    /**
     *
     * @returns {Bono[]}
     */
    getBonos : function() {
        return this.arteMarcial.bonos;
    },

    /**
     *
     * @returns {Array}
     */
    getDañoBaseElementos : function() {
        return this.arteMarcial.dañobaseElementos;
    },

    /**
     *
     * @returns {Array}
     */
    getTipoAtaque : function() {
        return this.arteMarcial.tipoAtaque;
    },

    /**
     *
     * @returns {number}
     */
    dañoBase : function(personaje) {
        return this.arteMarcial.dañoBase(personaje);
    },

    /**
     *
     * @returns {boolean}
     */
    cumpleRequisitos : function(personaje) {
        return this.arteMarcial.cumpleRequisitos(personaje);
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
