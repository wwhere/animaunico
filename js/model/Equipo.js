var ARMADURA_LOC_CAMISOLA = "Camisola";
var ARMADURA_LOC_COMPLETA = "Completa";
var ARMADURA_LOC_PETO = "Peto";
var ARMADURA_LOC_CABEZA = "Cabeza";

var ARMADURA_CLASE_BLANDA = "Blanda";
var ARMADURA_CLASE_DURA = "Dura";

var TAM_ARMA_P = "Pequeño";
var TAM_ARMA_P3 = "P";
var TAM_ARMA_M = "Medio";
var TAM_ARMA_M3 = "M";
var TAM_ARMA_G = "Grande";
var TAM_ARMA_G3 = "G";
var TAM_ARMA_E = "Enorme";
var TAM_ARMA_E3 = "E";
var TAM_ARMA_GG = "Gigante";
var TAM_ARMA_GG3 = "GG";

var CAT_ARMA_ARMA_CORTA = "Arma Corta";
var CAT_ARMA_HACHA = "Hacha";
var CAT_ARMA_MAZA = "Maza";
var CAT_ARMA_ESPADA = "Espada";
var CAT_ARMA_MANDOBLE = "Mandoble";
var CAT_ARMA_ASTA = "Asta";
var CAT_ARMA_CUERDA = "Cuerda";
var CAT_ARMA_ESCUDO = "Escudo";
var CAT_ARMA_SIN_ARMAS = "Sin Armas";
var CAT_ARMA_PROYECTILES = "Arma de Proyectiles";
var CAT_ARMA_MUNICION = "Munición";
var CAT_ARMA_LANZAMIENTO = "Arma Arrojadiza";

var REGLA_ARMA_PRECISA = "Precisa";
var REGLA_ARMA_PRECISA_EXP = "Este tipo de armas permite al personaje disminuir a la mitad los penalizadores de los golpes apuntados, y los de la maniobra de Engatillar. Sólo se aplica en ataques cuerpo a cuerpo, no con proyectiles lanzados.";

var REGLA_ARMA_DOS_MANOS = "Arma a dos manos";
var REGLA_ARMA_DOS_MANOS_EXP = "Son las que se usan necesariamente con ambas manos. Las de este tipo permiten al personaje doblar el bono de Fuerza para calcular su daño final.";

var REGLA_ARMA_UNA_O_DOS_MANOS = "Arma a una o dos manos";
var REGLA_ARMA_UNA_O_DOS_MANOS_EXP = "Pueden utilizarse indistintamente con una o ambas manos. Si se usan con las dos, también permiten doblar el bono de Fuerza para calcular su daño final. En ellas aparecen indicados dos números en la fuerza requerida; el primero es el necesario para usarla con dos manos, y el segundo con sólo una.";

var REGLA_ARMA_COMPLEJA = "Compleja";
var REGLA_ARMA_COMPLEJA_EXP = "Esta clase de armas es excepcionalmente difícil de utilizar. Por ello, un personaje aumenta dos puntos su índice de Pifia, fracasando con un resultado de 5 en un D100. Si alcanza la maestría con ella, desaparece completamente este penalizador.";

var REGLA_ARMA_LANZABLE = "Lanzable";
var REGLA_ARMA_LANZABLE_EXP = "Todas las armas con esta regla especial están equilibradas o pensadas para ser usadas a distancia. Los personajes que tengan habilidad con ellas podrán emplearlas tanto físicamente como arrojándolas, sin la necesidad de adquirir la Tabla de armas de lanzamiento.";

var REGLA_ARMA_PRESA = "Presa";
var REGLA_ARMA_PRESA_EXP = "Son aquellas que permiten, a quienes las empleen, utilizar maniobras específicas de Presa para atrapar al oponente. Al contrario de lo que ocurre con las manos desnudas, al presar con ellas, un personaje no puede elegir usar sus propias características, sino que deberá utilizar la Fuerza natural del arma. Dicha característica representa su capacidad innata para trabar a sus adversarios. Naturalmente, se siguen utilizando los bonificadores a los controles enfrentados que se apliquen por la diferencia entre las habilidades de los contendientes. En el caso de las armas de calidad, cada bono natural de +5 añade un +1 a su Fuerza para presar.";

var REGLA_ARMA_TRABA_EL_ARMA = "Traba el arma";
var REGLA_ARMA_TRABA_EL_ARMA_EXP = "Artefactos que, por su diseño y características, disponen de la oportunidad de trabar o desarmar al oponente. Si realizando una parada con una de estas armas se consigue un contraataque, el personaje podrá realizar un ataque para Desarmar al adversario sin ningún tipo de penalizador.";

var REGLA_LANZA_CABALLERIA = "REGLA_LANZA_CABALLERIA"; //TODO

var REGLA_RED_GLADIADOR = "REGLA_RED_GLADIADOR";//TODO

var REGLA_ANCIANO_PRIMAVERA = "REGLA_ANCIANO_PRIMAVERA"; //TODO

var REGLA_CUERVO = "REGLA_CUERVO"; //TODO

var REGLA_KATANA_DOBLE_HOJA = "REGLA_KATANA_DOBLE_HOJA"; //TODO

var REGLA_KUSARI_GAMA = "REGLA_KUSARI_GAMA"; //TODO

var REGLA_SHUKO = "REGLA_SHUKO"; //TODO

var REGLA_BUMERAN = "REGLA_BUMERAN"; //TODO

var REGLA_KATAR = "REGLA_KATAR"; //TODO

var REGLA_ESCUDO_CORPORAL = "REGLA_ESCUDO_CORPORAL"; //TODO +30 a la parada,     +15 a la esquiva

var REGLA_ESCUDO = "REGLA_ESCUDO"; //TODO +20 a la parada,     +10 a la esquiva

var REGLA_RODELA = "REGLA_RODELA"; //TODO +10 a la parada,     +5 a la esquiva

var REGLA_ARCABUZ = "REGLA_ARCABUZ"; //TODO

var REGLA_BALISTA_LIGERA = "REGLA_BALISTA_LIGERA";
var REGLA_BALISTA_PESADA = "REGLA_BALISTA_PESADA";
var REGLA_BALLESTA = "REGLA_BALLESTA";
var REGLA_BALLESTA_MANO = "REGLA_BALLESTA_MANO";
var REGLA_BALLESTA_REPETICION = "REGLA_BALLESTA_REPETICION";
var REGLA_BALLESTA_PESADA = "REGLA_BALLESTA_PESADA";
var REGLA_BOLEADORAS = "REGLA_BOLEADORAS";
var REGLA_CAÑON = "REGLA_CAÑON";
var REGLA_TURCUS = "REGLA_TURCUS";
var REGLA_PISTOLA_MECHA = "REGLA_PISTOLA_MECHA";
var REGLA_FLECHA_FAJO = "REGLA_FLECHA_FAJO";
var REGLA_FLECHA_MELLA = "REGLA_FLECHA_MELLA";

var MUNICION_PISTOLA_MECHA = "MUNICION_PISTOLA_MECHA";
var MUNICION_ARCABUZ = "MUNICION_ARCABUZ";
var MUNICION_CERBATANA = "MUNICION_CERBATANA";
var MUNICION_CAÑON = "MUNICION_CAÑON";
var MUNICION_ARCO_CORTO = "MUNICION_ARCO_CORTO";
var MUNICION_ARCO_LARGO = "MUNICION_ARCO_LARGO";
var MUNICION_ARCO_LARGO_COMPUESTO = "MUNICION_ARCO_LARGO_COMPUESTO";
var MUNICION_BALLESTA = "MUNICION_BALLESTA";
var MUNICION_BALLESTA_REPETICION = "MUNICION_BALLESTA_REPETICION";
var MUNICION_BALLESTA_LIGERA = "MUNICION_BALLESTA_LIGERA";
var MUNICION_BALLESTA_PESADA = "MUNICION_BALLESTA_PESADA";
var MUNICION_BALISTA_LIGERA = "MUNICION_BALISTA_LIGERA";
var MUNICION_BALISTA_PESADA = "MUNICION_BALISTA_PESADA";

/**
 *
 * @class Equipo
 * @param {string} nombre
 * @param {Dinero} costeDinero
 * @param {number} peso
 * @param {string} disponibilidad
 * @param {number} entereza
 * @param {number} presencia
 * @param {number} bonoHabilidad
 * @constructor
 */
function Equipo(nombre, costeDinero, peso, disponibilidad, entereza, presencia, bonoHabilidad) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;
    /**
     *
     * @type {Dinero}
     */
    this.costeDinero = costeDinero;
    /**
     *
     * @type {number}
     */
    this.peso = peso;
    /**
     *
     * @type {string}
     */
    this.disponibilidad = disponibilidad;
    /**
     *
     * @type {number}
     */
    this.entereza = entereza;
    /**
     *
     * @type {number}
     */
    this.presencia = presencia;
    /**
     *
     * @type {number}
     */
    this.bonoHabilidad = bonoHabilidad;
}

Equipo.prototype = {
    constructor: Equipo,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.nombre;
    },

    /**
     *
     * @param {string} valor
     */
    setNombre : function(valor) {
        this.nombre = valor;
    },

    /**
     *
     * @returns {Dinero}
     */
    getCosteDinero : function() {
        return this.costeDinero;
    },

    /**
     *
     * @returns {number}
     */
    getPeso : function() {
        return this.peso;
    },

    /**
     *
     * @returns {string}
     */
    getDisponibilidad : function() {
        return this.disponibilidad;
    },

    /**
     *
     * @param {string} valor
     */
    setDisponibilidad : function(valor) {
        this.disponibilidad = valor;
    },

    /**
     *
     * @returns {number}
     */
    getEntereza : function() {
        return this.entereza;
    },

    /**
     *
     * @returns {number}
     */
    getPresencia : function() {
        return this.presencia;
    },

    /**
     *
     * @returns {number}
     */
    getBonoHabilidad : function() {
        return this.bonoHabilidad;
    },

    /**
     *
     * @returns {Equipo}
     */
    duplicar: function() {
        return new Equipo(this.nombre, this.costeDinero, this.peso, this.disponibilidad, this.entereza, this.presencia, this.bonoHabilidad);
    },

    toString: function() {
        return _l(this.nombre);
    },

    toJSON : function() {
        return this.nombre;
    }
};

/**
 *
 * @class Arma
 * @extends {Equipo}
 * @param {string} nombre
 * @param {Dinero} costeDinero
 * @param {number} peso
 * @param {string} disponibilidad
 * @param {string[]} categorias
 * @param {number} velocidad
 * @param {number} dmgBase
 * @param {number} entereza
 * @param {number} rotura
 * @param {number} fueReq
 * @param {number} fueReq2manos
 * @param {number} presencia
 * @param {string} criticoPrimario
 * @param {string} criticoSecundario
 * @param {string[]} especial
 * @param {string} bonoDmg
 * @constructor
 */
function Arma(nombre, costeDinero, peso, disponibilidad, categorias, velocidad, dmgBase, entereza, rotura, fueReq, fueReq2manos, presencia, criticoPrimario, criticoSecundario, especial, bonoDmg) {
    Arma.parent.constructor.call(this,nombre,costeDinero,peso,disponibilidad,entereza,presencia,0);

    /** @type string[] */
    this.categorias = categorias;

    /** @type number */
    this.velocidad = velocidad;

    /** @type number */
    this.dañoBase = dmgBase;

    /** @type number */
    this.rotura = rotura;

    /** @type number */
    this.fueReq = fueReq;

    /** @type number */
    this.fueReq2manos = fueReq2manos;

    /** @type string */
    this.criticoPrimario = criticoPrimario;

    /** @type string */
    this.criticoSecundario = criticoSecundario;

    /** @type string[] */
    this.especial = especial;

    /** @type string */
    this.bonoDaño = bonoDmg;

    /** @type number */
    this.modificadorAtaqueParada = 0;

    /** @type number */
    this.modificadorTADefensor = 0;
}

extend(Arma,Equipo);

/**
 *
 * @returns {string}
 */
Arma.prototype.getCategoria = function() {
    var categoria = "";

    for (var i = 0; i < this.categorias.length; i++) {
        categoria += this.categorias[i];
        if (i+1 < this.categorias.length) {
            categoria += "/";
        }
    }

    return categoria;
}

/**
 *
 * @returns {string} Ya localizado
 */
Arma.prototype.getCategoriaLoc = function() {
    var categoria = "";

    for (var i = 0; i < this.categorias.length; i++) {
        categoria += _l(this.categorias[i]);
        if (i+1 < this.categorias.length) {
            categoria += "/";
        }
    }

    return categoria;
}

/**
 *
 * @returns {string[]}
 */
Arma.prototype.getCategorias = function() {
    return this.categorias;
};

/**
 *
 * @returns {number}
 */
Arma.prototype.getVelocidad = function() {
    return this.velocidad;
};

/**
 *
 * @returns {number}
 */
Arma.prototype.getDañoBase = function() {
    return this.dañoBase;
};

/**
 *
 * @returns {number}
 */
Arma.prototype.getRotura = function() {
    return this.rotura;
};

/**
 *
 * @returns {number}
 */
Arma.prototype.getFueReq = function() {
    return this.fueReq;
};

/**
 *
 * @returns {number}
 */
Arma.prototype.getFueReq2Manos = function() {
    return this.fueReq2manos;
};

/**
 *
 * @returns {string}
 */
Arma.prototype.getCriticoPrimario = function() {
    return this.criticoPrimario;
};

/**
 *
 * @returns {string}
 */
Arma.prototype.getCriticoSecundario = function() {
    return this.criticoSecundario;
};

/**
 *
 * @returns {string[]}
 */
Arma.prototype.getEspecial = function() {
    return this.especial;
};

/**
 *
 * @returns {string}
 */
Arma.prototype.getBonoDaño = function() {
    return this.bonoDaño;
};

/**
 *
 * @returns {number}
 */
Arma.prototype.getModificadorAtaqueParada = function() {
    return this.modificadorAtaqueParada;
};

/**
 *
 * @returns {number}
 */
Arma.prototype.getModificadorTADefensor = function() {
    return this.modificadorTADefensor;
};

/**
 *
 * @returns {string}
 */
Arma.prototype.getTamaño = function() {
    var tamFinal = "";
    for (var i = 0; i < this.categorias.length;i++) {
        var tam = tamañoCategoriaArma(this.categorias[i]);
        if (tamFinal == "") {
            tamFinal = tam;
        } else {
            if (indiceTamaño(tam) > indiceTamaño(tamFinal)) {
                tamFinal = tam;
            }
        }
    }
    return tamFinal;
};

/**
 *
 * @returns {Arma}
 */
Arma.prototype.duplicar = function() {
    return new Arma(this.nombre, this.costeDinero, this.peso, this.disponibilidad, this.categorias, this.velocidad, this.dañoBase, this.entereza, this.rotura, this.fueReq, this.fueReq2manos, this.presencia, this.criticoPrimario, this.criticoSecundario, this.especial, BONO_FUE);
};

Arma.prototype.toJSON = function() {
    return this.nombre;
};



/**
 *
 * @class Armadura
 * @extends Equipo
 * @param {string} nombre
 * @param {Dinero} costeDinero
 * @param {number} peso
 * @param {string} disponibilidad
 * @param {number} requisitoArmadura
 * @param {number} penalizadorArmadura
 * @param {number} penalizadorNatural
 * @param {number} restriccionMovimiento
 * @param {number} entereza
 * @param {number} presencia
 * @param {string} localizacion
 * @param {string} clase
 * @param {number[]} tas
 * @constructor
 */
function Armadura(nombre,costeDinero,peso,disponibilidad,requisitoArmadura,penalizadorArmadura,penalizadorNatural,restriccionMovimiento,entereza,presencia,localizacion,clase,tas) {
    Armadura.parent.constructor.call(this,nombre,costeDinero,peso,disponibilidad,entereza,presencia,0);

    /** @type number */
    this.requisitoArmadura = requisitoArmadura;

    /** @type number */
    this.penalizadorNatural = penalizadorNatural;

    /** @type number */
    this.restriccionMovimiento = restriccionMovimiento;

    /** @type string */
    this.localizacion = localizacion;

    /** @type string */
    this.clase = clase;

    /** @type number[] */
    this.tas = tas;
}

extend(Armadura,Equipo);

/**
 *
 * @returns {number}
 */
Armadura.prototype.getRequisitoArmadura = function() {
    return this.requisitoArmadura;
};

/**
 *
 * @returns {number}
 */
Armadura.prototype.getPenalizadorNatural =  function() {
    return this.penalizadorNatural;
};

/**
 *
 * @returns {number}
 */
Armadura.prototype.getRestriccionMovimiento = function() {
    return this.restriccionMovimiento;
};

/**
 *
 * @returns {string}
 */
Armadura.prototype.getLocalizacion = function() {
    return this.localizacion;
};

/**
 *
 * @returns {string}
 */
Armadura.prototype.getClase = function() {
    return this.clase;
};

/**
 *
 * @returns {number[]}
 */
Armadura.prototype.getTAs = function() {
    return this.tas;
};

/**
 *
 * @returns {Armadura}
 */
Armadura.prototype.duplicar = function() {
    return new Armadura(this.nombre,
        this.costeDinero,
        this.peso,
        this.disponibilidad,
        this.requisitoArmadura,
        this.penalizadorArmadura,
        this.penalizadorNatural,
        this.restriccionMovimiento,
        this.entereza,
        this.presencia,
        this.localizacion,
        this.clase,
        this.tas);
};

Armadura.prototype.toJSON = function() {
    return this.nombre;
};



function Yelmo(nombre,costeDinero,peso,disponibilidad,requisitoArmadura,penalizadorPercepcion,entereza,presencia,localizacion,clase,tas) {
    Yelmo.parent.constructor.call(this,nombre,costeDinero,peso,disponibilidad,entereza,presencia,0);

    /** @type number */
    this.requisitoArmadura = requisitoArmadura;

    /** @type number */
    this.penalizadorPercepcion = penalizadorPercepcion;

    /** @type string */
    this.localizacion = localizacion;

    /** @type string */
    this.clase = clase;

    /** @type number[] */
    this.tas = tas;
}

extend(Yelmo,Equipo);

/**
 *
 * @returns {number}
 */
Yelmo.prototype.getRequisitoArmadura = function() {
    return this.requisitoArmadura;
};

/**
 *
 * @returns {number}
 */
Yelmo.prototype.getPenalizadorPercepcion =  function() {
    return this.penalizadorPercepcion;
};

/**
 *
 * @returns {string}
 */
Yelmo.prototype.getLocalizacion = function() {
    return this.localizacion;
};

/**
 *
 * @returns {string}
 */
Yelmo.prototype.getClase = function() {
    return this.clase;
};

/**
 *
 * @returns {number[]}
 */
Yelmo.prototype.getTAs = function() {
    return this.tas;
};

/**
 *
 * @returns {Yelmo}
 */
Yelmo.prototype.duplicar = function() {
    return new Yelmo(this.nombre,
        this.costeDinero,
        this.peso,
        this.disponibilidad,
        this.requisitoArmadura,
        this.penalizadorPercepcion,
        this.entereza,
        this.presencia,
        this.localizacion,
        this.clase,
        this.tas);
};

Yelmo.prototype.toJSON = function() {
    return this.nombre;
};





