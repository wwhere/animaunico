var ERR_PODER_SIN_DIFICULTAD_MINIMA = "Poder sin dificultad mínima";

/**
 *
 * @class DisciplinaPsiquica
 * @param {string} nombre
 * @param {string} descripcion
 * @constructor
 */
function DisciplinaPsiquica(nombre, descripcion) {
    /** @type string */
    this.nombre = nombre;

    /** @type string */
    this.descripcion = descripcion;

    /** @type PoderPsiquico[] */
    this.poderesPsiquicos = [];

    /** @type boolean */
    this.libre = false;
}

DisciplinaPsiquica.prototype = {

    constructor : DisciplinaPsiquica,

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
     * @returns {PoderPsiquico[]}
     */
    getPoderesPsiquicos : function() {
        return this.poderesPsiquicos;
    },

    /**
     *
     * @returns {boolean}
     */
    isLibre : function() {
        return this.libre;
    },

    /**
     *
     * @param {PoderPsiquico} poder
     */
    addPoder : function(poder) {
        poder.nombreDisciplinaPsiquica = this.nombre;
        this.poderesPsiquicos.push(poder);
    },

    toJSON : function() {
        return this.nombre;
    }
};

/**
 *
 * @class PoderPsiquico
 * @param {string} nombre
 * @param {number} nivel
 * @param {string} accion
 * @param {boolean} mantenimiento
 * @param {string} descripcion
 * @param {string[]} efectos
 * @constructor
 */
function PoderPsiquico(nombre, nivel, accion, mantenimiento, descripcion, efectos) {
    /** @type string */
    this.nombre = nombre;

    /** @type number */
    this.nivel = nivel;

    /** @type string */
    this.accion = accion;

    /** @type boolean */
    this.mantenimiento = mantenimiento;

    /** @type string */
    this.descripcion = descripcion;

    /** @type string[] */
    this.efectos = efectos;

    /**
     *
     * @type {string}
     */
    this.nombreDisciplinaPsiquica = "";
}

PoderPsiquico.prototype = {

    constructor : PoderPsiquico,

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
    getAccion : function() {
        return this.accion;
    },

    /**
     *
     * @returns {boolean}
     */
    getMantenimiento : function() {
        return this.mantenimiento;
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
     * @returns {string[]}
     */
    getEfectos : function() {
        return this.efectos;
    },

    /**
     *
     * @returns {string}
     * @throws ERR_PODER_SIN_DIFICULTAD_MINIMA
     */
    dificultadMinima : function() {
        for (var i = 0; i < this.efectos.length; i++) {
            if (this.efectos[i].toUpperCase().indexOf("FATIGA") < 0) {
                return DIFICULTADES[i];
            }
        }
        throw ERR_PODER_SIN_DIFICULTAD_MINIMA + ": " + this.nombre;
    },

    /**
     *
     * @returns {boolean}
     */
    puedeComprarse : function() {
        return true;
    },

    toJSON : function() {
        return this.nombre+"--"+this.nombreDisciplinaPsiquica;
    }
};

function DisciplinaPsiquicaAccedida(disciplinaPsiquica) {
    /** @type DisciplinaPsiquica */
    this.disciplina = disciplinaPsiquica;

    /** @type boolean */
    this.anulable = true;

}

DisciplinaPsiquicaAccedida.prototype = {

    constructor : DisciplinaPsiquicaAccedida,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.disciplina.nombre;
    },

    /**
     *
     * @returns {string}
     */
    getDescripcion : function() {
        return this.disciplina.descripcion;
    },

    /**
     *
     * @returns {PoderPsiquico[]}
     */
    getPoderesPsiquicos : function() {
        return this.disciplina.poderesPsiquicos;
    },

    /**
     *
     * @returns {boolean}
     */
    isLibre : function() {
        return this.disciplina.libre;
    },

    isAnulable : function() {
        return this.anulable;
    },

    setAnulable : function(valor) {
        this.anulable = valor;
    }
};

//region PoderPsiquicoDominado
/**
 *
 * @class PoderPsiquicoDominado
 * @param {PoderPsiquico} poder
 * @param {DisciplinaPsiquica} disciplina
 * @constructor
 */
function PoderPsiquicoDominado(poder, disciplina) {
    /**
     *
     * @type {PoderPsiquico}
     */
    this.poder = poder;

    /**
     *
     * @type {DisciplinaPsiquica}
     */
    this.disciplina = disciplina;

    /**
     *
     * @type {number}
     */
    this.fortalecimiento = 0;

    /**
     *
     * @type {number}
     */
    this.fortalecimientoPrevio = 0;
}

PoderPsiquicoDominado.prototype = {
    constructor : PoderPsiquicoDominado,

    /**
     *
     * @returns {PoderPsiquico}
     */
    getPoder : function() {
        return this.poder;
    },

    /**
     *
     * @returns {DisciplinaPsiquica}
     */
    getDisciplina : function() {
        return this.disciplina;
    },

    /**
     *
     * @returns {number}
     */
    getFortalecimiento : function() {
        return this.fortalecimiento;
    },

    /**
     *
     * @param {number} valor
     */
    addFortalecimiento : function(valor) {
        this.fortalecimiento += valor;
    }
};
//endregion PoderPsiquicoDominado
