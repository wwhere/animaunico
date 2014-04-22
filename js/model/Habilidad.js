/**
 *
 * @class Habilidad
 * @param {string} nombre
 * @param {string} tipo
 * @param {boolean} esPrincipal
 * @param {string} caracteristica
 * @param {boolean} isConocimiento
 * @param {boolean} penalizadorArmadura
 * @param {string[]} especializaciones
 * @param {number} puntosAComprar
 * @constructor
 */
function Habilidad(nombre, tipo, esPrincipal, caracteristica, isConocimiento, penalizadorArmadura, especializaciones, puntosAComprar, puntosPorCoste) {
    /** @type string */
    this.nombre = nombre;

    /** @type string */
    this.tipo = tipo;

    /** @type boolean */
    this.esPrincipal = esPrincipal;

    /** @type string */
    this.caracteristica = caracteristica;

    /** @type boolean */
    this.esConocimiento = isConocimiento;

    /** @type boolean */
    this.penalizadorArmadura = penalizadorArmadura;

    /** @type string[] */
    this.especializacionesPosibles = especializaciones;

    /** @type number */
    this.puntosAComprar = puntosAComprar;

    /** @type number */
    this.puntosPorCoste = puntosPorCoste;
}

Habilidad.prototype = {
    constructor : Habilidad,

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
     * @returns {boolean}
     */
    isPrincipal : function() {
        return this.esPrincipal;
    },

    /**
     *
     * @returns {string}
     */
    getCaracteristica : function() {
        return this.caracteristica;
    },

    /**
     *
     * @returns {boolean}
     */
    isConocimiento : function() {
        return this.esConocimiento;
    },

    /**
     *
     * @returns {boolean}
     */
    getPenalizadorArmadura : function() {
        return this.penalizadorArmadura;
    },

    /**
     *
     * @returns {string[]}
     */
    getEspecializacionesPosibles : function() {
        return this.especializacionesPosibles;
    },

    /**
     *
     * @returns {number}
     */
    getPuntosAComprar : function() {
        return this.puntosAComprar;
    },

    /**
     *
     * @returns {number}
     */
    getPuntosPorCoste : function() {
        return this.puntosPorCoste;
    },

    toJSON : function() {
        return this.nombre;
    }
}

//region HabilidadDePersonaje
/**
 *
 * @class HabilidadDePersonaje
 * @param {Habilidad} habilidad
 * @constructor
 */
function HabilidadDePersonaje(habilidad) {
    /** @type Habilidad */
    this.habilidad = habilidad;

    /** @type string */
    this.especializacion = "";

    /**
     * Los PD invertidos en la actual subida de nivel
     * @type number */
    this.PDinvertidos = 0;

    /**
     * Los PD invertidos en niveles anteriores
     * @type number */
    this.PDinvertidosPrevios = 0;

    /** @type number */
    this.multiploBonificadorNatural = 0;

    /** @type number */
    this.valorInicial = 0;

    /** @type number */
    this.valorPrevio = 0;
}

HabilidadDePersonaje.prototype = {
    constructor : HabilidadDePersonaje,

    /**
     *
     * @returns {Habilidad}
     */
    getHabilidad : function() {
        return this.habilidad;
    },

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.habilidad.getNombre()
    },

    /**
     *
     * @returns {boolean}
     */
    getPenalizadorArmadura : function() {
        return this.habilidad.getPenalizadorArmadura();
    },

    /**
     *
     * @returns {string}
     */
    getCaracteristica : function() {
        return this.habilidad.getCaracteristica();
    },

    /**
     * @returns {strin
     */
    getTipo : function() {
        return this.habilidad.getTipo();
    },

    /**
     *
     * @returns {string}
     */
    getEspecializacion : function() {
        return this.especializacion;
    },

    /**
     *
     * @param {string} especializacion
     */
    setEspecializacion : function(especializacion) {
        this.especializacion = especializacion;
    },

    /**
     *
     * @returns {number}
     */
    getPDinvertidos : function() {
        return this.PDinvertidos + this.PDinvertidosPrevios;
    },

    /**
     *
     * @returns {number}
     */
    getPDinvertidosActuales : function() {
        return this.PDinvertidos;
    },

    /**
     *
     * @param {number} PDinvertidos
     */
    setPDinvertidos : function(PDinvertidos) {
        this.PDinvertidos = PDinvertidos;
    },

    /**
     *
     * @returns {number}
     */
    getPDInvertidosPrevios : function() {
        return this.PDinvertidosPrevios;
    },

    /**
     *
     * @param {number} valor
     */
    addPDinvertidos : function(valor) {
        this.PDinvertidos += valor;
    },

    /**
     *
     * @returns {number}
     */
    getMultiploBonificadorNatural : function() {
        return this.multiploBonificadorNatural;
    },

    /**
     *
     * @param {number} multiploBonificadorNatural
     */
    setMultiploBonificadorNatural : function(multiploBonificadorNatural) {
        this.multiploBonificadorNatural = multiploBonificadorNatural;
    },

    /**
     *
     * @param {number} valor
     */
    addMultiploBonificadorNatural : function(valor) {
        this.multiploBonificadorNatural += valor;
    },

    /**
     *
     * @returns {number}
     */
    getValorInicial : function() {
        return this.valorInicial;
    },

    /**
     *
     * @param {string} valor
     */
    setValorInicial : function(valor) {
        this.valorInicial = valor;
    },

    /**
     *
     * @param {number} coste
     * @returns {number}
     */
    valorBase : function(coste) {
        if (this.habilidad.getNombre() == HB_POTENCIAL_PSIQUICO) {
            var potencial = personaje_actual.getPotencialPsiquicoBase();
            potencial += personaje_actual.getHabilidadDePersonaje(HB_POTENCIAL_PSIQUICO).bono;
            return potencial;
        } else if (this.habilidad.getNombre() == HB_ACT) {
            return this.valorInicial * (1 + this.valorPrevio + Math.floor(this.PDinvertidos / coste));
        } else if (this.habilidad.getNombre() == HB_REGENERACION_ZEONICA) {
            return this.valorInicial * (1 + this.valorPrevio + Math.floor(this.PDinvertidos / coste));
        }


        if (this.PDinvertidos + this.PDinvertidosPrevios == 0) {
            if (!this.habilidad.esPrincipal) {
                if (personaje_actual.hasFlag(FLAG_CONOCEDOR_TODAS_MATERIAS)) {
                    return this.valorInicial;
                } else {
                    if (this.habilidad.esConocimiento) {
                        return HABILIDAD_NO_USABLE;
                    } else {
                        return VALOR_INICIAL_SIN_RANGOS;
                    }
                }
            } else {
                return this.valorInicial;
            }
        } else {
            return this.valorInicial + this.valorPrevio + ( Math.floor(this.PDinvertidos / coste) * this.getHabilidad().getPuntosPorCoste());
        }
    },

    /**
     *
     * @param {number} coste
     * @returns {{pdDevueltos: number, mensaje: string}}
     */
    ajustarPDEnMultiplo : function(coste) {
        var pdDevueltos = 0;
        var mensaje = "";

        if (this.PDinvertidos % coste != 0) {
            var ajuste = this.PDinvertidos % coste;
            this.PDinvertidos -= ajuste;
            pdDevueltos = ajuste;
            mensaje = "Recuperados " + ajuste + " PD para dejar valor de " + this.habilidad.getNombre() + " justo";
        }

        if ((this.PDinvertidos / coste) % this.habilidad.getPuntosAComprar() != 0) {
            var ajuste5 = ((this.PDinvertidos / coste) % this.habilidad.getPuntosAComprar())*coste;
            this.PDinvertidos -= ajuste5;
            pdDevueltos = ajuste5;
            mensaje = "Recuperados " + ajuste5 + " PD para dejar valor de " + this.habilidad.getNombre() + " en múltiplo de " + this.habilidad.getPuntosAComprar();
        }

        return {pdDevueltos:pdDevueltos,mensaje:mensaje};
    },

    /**
     *
     * @returns {number}
     */
    valorFinalActual : function() {
        var i;
        var coste = personaje_actual.getCoste(this.habilidad.getNombre(), this.habilidad.isPrincipal());
        var valorFinal = this.valorBase(coste);
        var sumaNaturalesYCarac = 0;
        var sumaInnatos = 0;

        var bonos = personaje_actual.getBonos(BONO_HABILIDAD,this.habilidad.getNombre(),CATEGORIA_BONO_CUALQUIERA);
        for (i = 0; i < bonos.length; i++) {
            var bono = bonos[i];
            var valorBono = bono.getBonoParaNivel(personaje_actual.getNivel(),personaje_actual);
            valorFinal += parseInt(valorBono);

            if (bono.getCategoria() == BONO_INNATO) {
                sumaInnatos += valorBono;
            } else if ((bono.getCategoria() == BONO_NATURAL) || (bono.getCategoria() == BONO_CARACTERISTICA)) {
                sumaNaturalesYCarac += valorBono;
            }
        }

        if ((this.getNombre() == HB_ATAQUE) || (this.getNombre() == HB_PARADA) || (this.getNombre() == HB_ESQUIVA)) {
            if (sumaInnatos > 50) {
                valorFinal -= (sumaInnatos-50);
            }
        }

        if (sumaNaturalesYCarac > 100) {
            valorFinal -= (sumaNaturalesYCarac-100);
        }

        return valorFinal;
    },

    subirNivel : function() {
        this.valorPrevio = this.valorBase(personaje_actual.getCoste(this.habilidad.getNombre(), this.habilidad.isPrincipal()));
        if (this.valorPrevio == -30) {
            this.valorPrevio = 0;
        }
        this.PDinvertidosPrevios += this.PDinvertidos;
        this.PDinvertidos = 0;
    }
};
//endregion HabilidadDePersonaje
