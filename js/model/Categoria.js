

//noinspection FunctionTooLongJS
/**
 *
 * @param {string} nombre
 * @constructor
 * @class Categoria
 */
function Categoria(nombre) {
    /** @type string */
    this.nombre = nombre;

    /** @type string */
    this.descripcion = "";

    /** @type Arquetipo */
    this.arquetipo = ARQ_SIN_CATEGORIA;

    /** @type number */
    this.multiploDeVida = 20;

    /** @type number */
    this.pvPorNivel = 5;

    /** @type number */
    this.turnoPorNivel = 5;

    /** @type number */
    this.CMPorNivel = 20;

    /** @type number */
    this.nivelesParaCV = 2;

//HABILIDADES PRIMARIAS
    /** @type number */
    this.limiteCombate = 0.6;

    /** @type number */
    this.habAtaque = 2;

    /** @type number */
    this.habParada = 2;

    /** @type number */
    this.habEsquiva = 2;

    /** @type number */
    this.habArmadura = 2;

    /** @type number */
    this.ki = 2;

    /** @type number */
    this.acumulacionKi = 20;

    /** @type number */
    this.limiteSobrenatural = 0.6;

    /** @type number */
    this.zeon = 2;

    /** @type number */
    this.costeACT = 60;

    /** @type number */
    this.proyeccionMagica = 2;

    /** @type number */
    this.convocar = 2;

    /** @type number */
    this.dominar = 2;

    /** @type number */
    this.atar = 2;

    /** @type number */
    this.desconvocar = 2;

    /** @type number */
    this.limitePsiquica = 0.6;

    /** @type number */
    this.costeCV = 20;

    /** @type number */
    this.proyeccionPsiquica = 2;

//HABILIDADES SECUNDARIAS
    /** @type number */
    this.atleticas = 2;

    /** @type number */
    this.sociales = 2;

    /** @type number */
    this.perceptivas = 2;

    /** @type number */
    this.intelectuales = 2;

    /** @type number */
    this.vigor = 2;

    /** @type number */
    this.subterfugio = 2;

    /** @type number */
    this.creativas = 2;
//costes unidos
    /** @type Coste[] */
    this.costes = [];
    
//Costes reducidos
    /** @type Coste[] */
    this.costesReducidos = [];

//BONIFICADORES INNATOS
    /** @type Bono[] */
    this.bonosInnatos = [];

}

Categoria.prototype =  {
    constructor: Categoria,

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
     * @returns {Arquetipo}
     */
    getArquetipo : function() {
        return this.arquetipo;
    },

    /**
     *
     */
    initCostes : function() {
        this.costes.push(new Coste(UI_MULTIPLO_VIDA, this.multiploDeVida, true, UDS_PD));
        this.costes.push(new Coste(UI_PV_POR_NIVEL, this.pvPorNivel, true, UDS_PD));
        this.costes.push(new Coste(UI_TURNO_POR_NIVEL, this.turnoPorNivel, true, UDS_PD));
        this.costes.push(new Coste(UI_CM_POR_NIVEL, this.CMPorNivel, true, UDS_PD));
        this.costes.push(new Coste(UI_NIVELES_PARA_CV, this.nivelesParaCV, true, UDS_PD));

        this.costes.push(new Coste(UI_LIMITE_COMBATE, (this.limiteCombate * 100), true, UDS_PORCENT));
        this.costes.push(new Coste(UI_ATAQUE, this.habAtaque, true, UDS_PD));
        this.costes.push(new Coste(UI_PARADA, this.habParada, true, UDS_PD));
        this.costes.push(new Coste(UI_ESQUIVA, this.habEsquiva, true, UDS_PD));
        this.costes.push(new Coste(UI_LLEVAR_ARMADURA, this.habArmadura, true, UDS_PD));
        this.costes.push(new Coste(UI_KI, this.ki, true, UDS_PD));
        this.costes.push(new Coste(UI_ACUMULACION_KI, this.acumulacionKi, true, UDS_PD));

        this.costes.push(new Coste(UI_LIMITE_SOBRENATURAL, (this.limiteSobrenatural * 100), true, UDS_PORCENT));
        this.costes.push(new Coste(UI_ZEON, this.zeon, true, UDS_PD));
        this.costes.push(new Coste(UI_ACT, this.costeACT, true, UDS_PD));
        this.costes.push(new Coste(UI_PROYECCION_MAGICA, this.proyeccionMagica, true, UDS_PD));
        this.costes.push(new Coste(UI_CONVOCAR, this.convocar, true, UDS_PD));
        this.costes.push(new Coste(UI_DOMINAR, this.dominar, true, UDS_PD));
        this.costes.push(new Coste(UI_ATAR, this.atar, true, UDS_PD));
        this.costes.push(new Coste(UI_DESCONVOCAR, this.desconvocar, true, UDS_PD));

        this.costes.push(new Coste(UI_LIMITE_PSIQUICA, (this.limitePsiquica * 100), true, UDS_PORCENT));
        this.costes.push(new Coste(UI_CV, this.costeCV, true, UDS_PD));
        this.costes.push(new Coste(UI_PROYECCION_PSIQUICA, this.proyeccionPsiquica, true, UDS_PD));

        this.costes.push(new Coste(UI_ATLETICAS, this.atleticas, true, UDS_PD));
        this.costes.push(new Coste(UI_SOCIALES, this.sociales, true, UDS_PD));
        this.costes.push(new Coste(UI_PERCEPTIVAS, this.perceptivas, true, UDS_PD));
        this.costes.push(new Coste(UI_INTELECTUALES, this.intelectuales, true, UDS_PD));
        this.costes.push(new Coste(UI_VIGOR, this.vigor, true, UDS_PD));
        this.costes.push(new Coste(UI_SUBTERFUGIO, this.subterfugio, true, UDS_PD));
        this.costes.push(new Coste(UI_CREATIVAS, this.creativas, true, UDS_PD));    
    },

    /**
     *
     * @returns {Coste[]}
     */
    getCostes : function() {
        return this.costes;
    },

    /**
     *
     * @returns {Coste[]}
     */
    getCostesReducidos : function() {
        return this.costesReducidos;
    },

    /**
     *
     * @returns {Bono[]}
     */
    getBonosInnatos : function() {
        return this.bonosInnatos;
    },

    /**
     *
     * @param {string} nombreHabilidad
     * @returns {number}
     */
    getCosteHabilidadPrimaria : function(nombreHabilidad) {
        switch (nombreHabilidad) {
            case HB_ATAQUE :
                return this.habAtaque;
                break;
            case HB_PARADA :
                return this.habParada;
                break;
            case HB_ESQUIVA :
                return this.habEsquiva;
                break;
            case HB_ARMADURA :
                return this.habArmadura;
                break;
            case HB_KI :
            case HB_KI_DES :
            case HB_KI_AGI :
            case HB_KI_CON :
            case HB_KI_FUE :
            case HB_KI_VOL :
            case HB_KI_POD :
                return this.ki;
                break;
            case HB_ACUM_KI :
            case HB_ACUM_KI_DES :
            case HB_ACUM_KI_AGI :
            case HB_ACUM_KI_CON :
            case HB_ACUM_KI_VOL :
            case HB_ACUM_KI_POD :
            case HB_ACUM_KI_FUE :
                return this.acumulacionKi;
                break;
            case HB_ZEON :
                return this.zeon;
                break;
            case HB_ACT :
                return this.costeACT;
                break;
            case HB_PROYECCION_MAGICA :
                return this.proyeccionMagica;
                break;
            case HB_CONVOCAR :
                return this.convocar;
                break;
            case HB_DOMINAR :
                return this.dominar;
                break;
            case HB_ATAR :
                return this.atar;
                break;
            case HB_DESCONVOCAR :
                return this.desconvocar;
                break;
            case HB_CV :
                return this.costeCV;
                break;
            case HB_PROYECCION_PSIQUICA :
                return this.proyeccionPsiquica;
                break;
            default:
                return 0;
        }
    },

    /**
     *
     * @param {string} nombreHabilidad
     * @returns {number}
     */
    getCosteHabilidadSecundaria : function(nombreHabilidad) {
        for (var i = 0; i < this.costesReducidos.length; i++) {
            var costeReducido = this.costesReducidos[i];

            if (costeReducido.getNombre() == nombreHabilidad) {
                return costeReducido.getCoste();
            }
        }

        var tipoHabilidadSecundaria = getGrupoDeHabilidadSecundaria(nombreHabilidad);

        switch (tipoHabilidadSecundaria) {
            case TIPO_HB_ATLETICAS:
                return this.atleticas;
                break;
            case TIPO_HB_CREATIVAS:
                return this.creativas;
                break;
            case TIPO_HB_INTELECTUALES:
                return this.intelectuales;
                break;
            case TIPO_HB_PERCEPTIVAS:
                return this.perceptivas;
                break;
            case TIPO_HB_SOCIALES:
                return this.sociales;
                break;
            case TIPO_HB_SUBTERFUGIO:
                return this.subterfugio;
                break;
            case TIPO_HB_VIGOR:
                return this.vigor;
                break;
            default:
                throw ERR_HABILIDAD_ERRONEA;
        }

    },

    /**
     *
     * @returns {string}
     */
    toJSON : function() {
        return this.nombre;
    }
};


/**
 * Clase para indicar el coste de un elemento (habilidad normalmente)
 * @param {string} nombre
 * @param {number} coste
 * @constructor
 * @param {boolean} absoluto Indica si es u nuevo coste absoluto para el elemento, o si es una cantidad a sustraer del coste actual.
 * @param {string} unidades Las unidades en que se mide el coste
 * @class Coste
 */
function Coste(nombre, coste, absoluto, unidades) {
    /** @type string */
    this.nombre = nombre;

    /** @type number */
    this.coste = coste;

    /** @type boolean */
    this.absoluto = absoluto;

    /** @type string */
    this.unidades = unidades;
}

Coste.prototype = {
    constructor: Coste,

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
    getCoste : function() {
        return this.coste;
    },

    /**
     *
     * @returns {boolean}
     */
    isAbsoluto : function() {
        return this.absoluto;
    },

    /**
     *
     * @returns {string}
     */
    toString : function() {
        var cadena;
        if (this.absoluto) {
            cadena = this.nombre + ": " + this.coste + this.unidades;
        } else {
            cadena = this.nombre + ": -" + this.coste + this.unidades;
        }
        return cadena;
    }
};

