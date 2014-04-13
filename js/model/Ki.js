
var ERR_NIVEL_EFECTO_DESCONOCIDO = "Error: nivel de efecto desconocido";

/**
 *
 * @param {string} nombre
 * @param {string} descripcion
 * @param {NivelEfectoTecnica[]} nivelesEfecto
 * @param {string} caracPrimaria
 * @param {ElementosAfines} elementosAfines
 * @param {CaracSecunTecnica[]} caracSecundarias
 * @constructor
 * @param {string} tipoEfecto
 * @param {VentajaTecnica[]} [ventajasOpcionales]
 * @param {string[]} [especial]
 */
function EfectoTecnica(nombre, descripcion, tipoEfecto, nivelesEfecto, caracPrimaria, elementosAfines, caracSecundarias, ventajasOpcionales, especial) {
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
     * @type {NivelEfectoTecnica[]}
     */
    this.nivelesEfecto = nivelesEfecto;
    for (var i = 0; i < this.nivelesEfecto.length;i++) {
        this.nivelesEfecto[i].nombreEfectoTecnica = this.nombre;
    }

    /**
     *
     * @type {string}
     */
    this.caracPrimaria = caracPrimaria;

    /**
     *
     * @type {ElementosAfines}
     */
    this.elementosAfines = elementosAfines;

    /**
     *
     * @type {string}
     */
    this.tipoEfecto = tipoEfecto;

    /**
     *
     * @type {CaracSecunTecnica[]}
     */
    this.caracSecundarias = caracSecundarias;

    /**
     *
     * @type {VentajaTecnica[]}
     */
    this.ventajasOpcionales = ventajasOpcionales || [];
    for (i = 0; i < this.ventajasOpcionales.length;i++) {
        this.ventajasOpcionales[i].setNombreEfectoTecnica(this.nombre);
    }

    /**
     *
     * @type {string[]}
     */
    this.especial = especial || [];
}

EfectoTecnica.prototype = {
    constructor : EfectoTecnica,

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
     * @returns {NivelEfectoTecnica[]}
     */
    getNivelesEfecto :function() {
        return this.nivelesEfecto;
    },

    /**
     *
     * @param {string} nombreEfecto
     * @returns {NivelEfectoTecnica}
     */
    getNivelEfectoPorNombre : function(nombreEfecto) {
        for (var i = 0; i < this.nivelesEfecto.length;i++) {
            if (this.nivelesEfecto[i].getNombre() == nombreEfecto) {
                return this.nivelesEfecto[i];
            }
        }
        throw ERR_NIVEL_EFECTO_DESCONOCIDO + ": " + nombreEfecto + " en efecto " + this.getNombre();
    },

    /**
     *
     * @returns {string}
     */
    getCaracPrimaria :function() {
        return this.caracPrimaria;
    },

    /**
     *
     * @returns {ElementosAfines}
     */
    getElementosAfines : function() {
        return this.elementosAfines;
    },

    /**
     *
     * @returns {string}
     */
    getTipoEfecto : function() {
        return this.tipoEfecto;
    },

    /**
     *
     * @returns {CaracSecunTecnica[]}
     */
    getCaracSecundarias :function() {
        return this.caracSecundarias;
    },

    /**
     *
     * @returns {VentajaTecnica[]}
     */
    getVentajasOpcionales : function() {
        return this.ventajasOpcionales;
    },

    /**
     *
     * @param {string} nombre
     * @returns {VentajaTecnica}
     */
    getVentajaOpcionalPorNombre : function(nombre) {
        for (var i = 0; i < this.ventajasOpcionales.length; i++) {
            if (this.ventajasOpcionales[i].getNombre() == nombre) {
                return this.ventajasOpcionales[i];
            }
        }
        throw ERR_VENTAJA_ERRONEA + ": " + nombre;
    },

    /**
     *
     * @returns {string[]}
     */
    getEspecial : function() {
        return this.especial;
    },

    toJSON : function() {
        return this.nombre;
    }
};

/**
 *
 * @param {string} nombre
 * @param {number} costePrimario
 * @param {number} costeSecundario
 * @param {number} costeCM
 * @param {number} costeMantenimiento
 * @param {number} nivelMinimo
 * @constructor
 */
function NivelEfectoTecnica(nombre, costePrimario, costeSecundario, costeCM, costeMantenimiento, nivelMinimo) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {number}
     */
    this.costePrimario = costePrimario;

    /**
     *
     * @type {number}
     */
    this.costeSecundario = costeSecundario;

    /**
     *
     * @type {number}
     */
    this.costeCM = costeCM;

    /**
     *
     * @type {number}
     */
    this.costeMantenimiento = costeMantenimiento;

    /**
     *
     * @type {number}
     */
    this.nivelMinimo = nivelMinimo;

    /**
     *
     * @type {string}
     */
    this.nombreEfectoTecnica = "";
}

NivelEfectoTecnica.prototype = {
    constructor : NivelEfectoTecnica,

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
    getCostePrimario : function() {
        return this.costePrimario;
    },

    /**
     *
     * @returns {number}
     */
    getCosteSecundario : function() {
        return this.costeSecundario;
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        return this.costeCM;
    },

    /**
     *
     * @returns {boolean}
     */
    hasCosteMantenimiento : function() {
        return (this.costeMantenimiento != 0);
    },

    /**
     *
     * @returns {number}
     */
    getCosteMantenimiento : function() {
        return this.costeMantenimiento;
    },

    /**
     *
     * @returns {number}
     */
    getNivelMinimo : function() {
        return this.nivelMinimo;
    },

    toJSON : function() {
        return this.nombre.replace("+","_PLUS_")+"--"+this.nombreEfectoTecnica;
    }
};

/**
 *
 * @param {string} nombre
 * @param {string} descripcion
 * @param {NivelVentajaTecnica[]} nivelesVentaja
 * @constructor
 */
function VentajaTecnica(nombre, descripcion, nivelesVentaja) {
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
     * @type {NivelVentajaTecnica[]}
     */
    this.nivelesVentaja = nivelesVentaja;
    for (var i = 0; i < this.nivelesVentaja.length;i++) {
        this.nivelesVentaja[i].nombreVentajaTecnica = this.nombre;
    }

    /**
     *
     * @type {string}
     */
    this.nombreEfectoTecnica = "";
}

VentajaTecnica.prototype = {
    constructor : VentajaTecnica,

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
     * @returns {NivelVentajaTecnica[]}
     */
    getNivelesVentaja : function() {
        return this.nivelesVentaja;
    },

    /**
     *
     * @param nombre
     * @returns {NivelVentajaTecnica}
     */
    getNivelPorNombre : function(nombre) {
        for (var i = 0; i < this.nivelesVentaja.length; i++) {
            if (this.nivelesVentaja[i].getNombre() == nombre) {
                return this.nivelesVentaja[i];
            }
        }
        throw ERR_NIVEL_EFECTO_DESCONOCIDO + ": nombre";
    },

    setNombreEfectoTecnica : function(nombre) {
        this.nombreEfectoTecnica = nombre;
        for (var i = 0; i < this.nivelesVentaja.length;i++) {
            this.nivelesVentaja[i].nombreEfectoTecnica = nombre;
        }
    },

    toJSON : function() {
        return this.nombre+"--"+this.nombreEfectoTecnica;
    }
};

/**
 *
 * @param {string} nombre
 * @param {number} costeKi
 * @param {number} costeCM
 * @param {number} costeMantenimiento
 * @param {number} nivel
 * @constructor
 */
function NivelVentajaTecnica(nombre, costeKi, costeCM, costeMantenimiento, nivel) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {number}
     */
    this.costeKi = costeKi;

    /**
     *
     * @type {number}
     */
    this.costeCM = costeCM;

    /**
     *
     * @type {number}
     */
    this.costeMantenimiento = costeMantenimiento;

    /**
     *
     * @type {number}
     */
    this.nivel = nivel;

    /**
     *
     * @type {string}
     */
    this.nombreVentajaTecnica = "";

    /**
     *
     * @type {string}
     */
    this.nombreEfectoTecnica = "";
}

NivelVentajaTecnica.prototype = {
    constructor : NivelVentajaTecnica,

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
    getCosteKi : function() {
        return this.costeKi;
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        return this.costeCM;
    },

    /**
     *
     * @returns {number}
     */
    getCosteMantenimiento : function() {
        return this.costeMantenimiento;
    },

    /**
     *
     * @returns {number}
     */
    getNivel : function() {
        return this.nivel;
    },

    toJSON : function() {
        return this.nombre.replace("+","_PLUS_")+"--"+this.nombreVentajaTecnica+"--"+this.nombreEfectoTecnica;
    }
};

/**
 *
 * @param {string} nombre
 * @param {string} descripcion
 * @param {Array} efecto
 * @param {string[]} incompatibles
 * @param {number} costeCM
 * @param {number} nivelMinimo
 * @constructor
 */
function DesventajaTecnica(nombre, descripcion, efecto, incompatibles, costeCM, nivelMinimo) {
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
     * @type {Array}
     */
    this.efecto = efecto;

    /**
     *
     * @type {string[]}
     */
    this.incompatibles = incompatibles;

    /**
     *
     * @type {number}
     */
    this.costeCM = costeCM;

    /**
     *
     * @type {number}
     */
    this.nivelMinimo = nivelMinimo;
}

DesventajaTecnica.prototype = {
    constructor : DesventajaTecnica,

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
     * @returns {Array}
     */
    getEfecto : function() {
        return this.efecto;
    },

    /**
     *
     * @returns {string[]}
     */
    getIncompatibles : function() {
        return this.incompatibles;
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        return this.costeCM;
    },

    /**
     *
     * @returns {number}
     */
    getNivelMinimo : function() {
        return this.nivelMinimo;
    },

    toJSON : function() {
        return this.nombre;
    }
};

/**
 *
 * @param {number} nivel
 * @constructor
 */
function TecnicaKi(nivel) {
    /**
     *
     * @type {string}
     */
    this.nombre = "...";

    /**
     *
     * @type {string}
     */
    this.arbolTecnicas = "...";

    /**
     *
     * @type {string}
     */
    this.descripcion = "...";

    /**
     *
     * @type {number}
     */
    this.nivel = nivel;

    /**
     *
     * @type {number}
     */
    this.maxCM = maxCMTecnica(nivel);

    /**
     *
     * @type {number}
     */
    this.minCM = minCMTecnica(nivel);

    /**
     *
     * @type {number}
     */
    this.maxDesventajas = maxDesventajasTecnica(nivel);

    /**
     *
     * @type {EfectoTecnicaElegido|boolean}
     */
    this.efectoPrimario = false;

    /**
     *
     * @type {EfectoTecnicaElegido[]}
     */
    this.efectosSecundarios = [];

    /**
     *
     * @type {{}}
     */
    this.allEfectos = {};

    /**
     *
     * @type {DesventajaTecnicaElegida[]}
     */
    this.desventajas = [];

    /**
     *
     * @type {ElementosAfines}
     */
    this.ataduraElemental = new ElementosAfines([]);

    /**
     *
     * @type {boolean}
     */
    this.hasAtaduraElemental = false;

    /**
     *
     * @type {CosteKi}
     */
    this.costeKi = false;

    /**
     *
     * @type {CosteKi}
     */
    this.costeMantenimiento = false;

}

TecnicaKi.prototype = {
    constructor : TecnicaKi,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.nombre;
    },

    toString : function() {
        var cadena = this.nombre + ": " + _l(UI_NV) + " " + this.nivel+"; ";

        cadena += _l(UI_CM) + ": " + this.getCosteCM() + "; ";
        cadena += _l(UI_COSTE_KI) + ": " + this.getCosteKi().toString() + "; ";
        if (this.isMantenida()) {
            cadena += _l(UI_COSTE_MANTENIMIENTO) + ": " + this.getCosteMantenimiento().toString() + "; ";
        }

        cadena += _l(UI_EFECTOS_DE_LA_TECNICA) + ": ";

        if (this.efectoPrimario)
            cadena += this.efectoPrimario.getNombreCompleto();

        for (var i = 0; i < this.efectosSecundarios.length; i++) {
            cadena += ", " + this.efectosSecundarios[i].getNombreCompleto();
        }

        cadena += _l(UI_DESVENTAJAS_DE_LA_TECNICA) + ": ";

        for ( i = 0; i < this.desventajas.length; i++) {
            cadena += ", " + this.desventajas[i].getNombreCompleto();
        }

        return cadena;
    },

    /**
     *
     * @param {string} valor
     */
    setNombre : function(valor) {
        this.nombre = valor;
        lanzarEvento(EVENT_TECNICA_CREACION);
    },

    /**
     *
     * @returns {string}
     */
    getArbolTecnicas : function() {
        return this.arbolTecnicas;
    },

    /**
     *
     * @param {string} valor
     */
    setArbolTecnicas : function(valor) {
        this.arbolTecnicas = valor;
        lanzarEvento(EVENT_TECNICA_CREACION);
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
     * @param {string} valor
     */
    setDescripcion : function(valor) {
        this.descripcion = valor;
        lanzarEvento(EVENT_TECNICA_CREACION);
    },

    /**
     *
     * @returns {boolean}
     */
    isMantenida : function() {
        var mantenida = false;
        if (this.efectoPrimario) {
            mantenida = this.efectoPrimario.isMantenido();
        }
        for (var i = 0; i < this.efectosSecundarios.length; i++) {
            if (this.efectosSecundarios[i].isMantenido()) {
                mantenida = true;
            }
        }
        return mantenida;
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
        if ((valor >= 1) && (valor <= 3)) {
            this.nivel = valor;
            var notificacionesYaDesactivadas = true;
            if (notificacionesActivas) {
                desactivarNotificaciones();
                notificacionesYaDesactivadas = false;
            }
            this.maxCM = maxCMTecnica(this.nivel);
            this.minCM = minCMTecnica(this.nivel);
            this.maxDesventajas = maxDesventajasTecnica(this.nivel);
            if (!notificacionesYaDesactivadas) {
                activarNotificaciones();
            }
            lanzarEvento(EVENT_TECNICA_CREACION);
        }
    },

    /**
     *
     * @returns {number}
     */
    getMaxCM : function() {
        return this.maxCM;
    },

    /**
     *
     * @returns {number}
     */
    getMinCM : function() {
        return this.minCM;
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        var coste = 0;
        if (this.efectoPrimario) {
            coste += this.efectoPrimario.getCosteCM();
        }
        var i;
        for (i=0; i < this.efectosSecundarios.length;i++) {
            coste += this.efectosSecundarios[i].getCosteCM();
        }

        if (this.isMantenida()) {
            coste += this.nivel * 10;
        }

        var minCosteTrasDesventajas = Math.floor(coste/2);
        for (i=0; i < this.desventajas.length;i++) {
            coste += this.desventajas[i].getCosteCM();
        }
        if (coste < minCosteTrasDesventajas) {
            coste = minCosteTrasDesventajas;
        }

        if (coste < this.minCM) {
            coste = this.minCM;
        }
        return coste;
    },

    /**
     *
     * @param {number} costeCM
     * @returns {boolean}
     */
    puedeAñadirEfectoDeCoste : function(costeCM) {
        var costeActual = this.getCosteCM();

        return (costeActual + costeCM <= this.maxCM);
    },

    /**
     *
     * @param {number} nivelMinimo
     * @returns {boolean}
     */
    puedeAñadirEfectoDeNivelMinimo : function(nivelMinimo) {
        return ( nivelMinimo <= this.nivel )
    },

    /**
     *
     * @param {ElementosAfines} elementosAfines
     */
    puedeAñadirEfectoDeElementos : function(elementosAfines) {
        return (!this.hasAtaduraElemental || (
            (this.ataduraElemental.agua && elementosAfines.agua) ||
                (this.ataduraElemental.fuego && elementosAfines.fuego) ||
                (this.ataduraElemental.aire && elementosAfines.aire) ||
                (this.ataduraElemental.tierra && elementosAfines.tierra) ||
                (this.ataduraElemental.luz && elementosAfines.luz) ||
                (this.ataduraElemental.oscuridad && elementosAfines.oscuridad))
            );
    },

    /**
     *
     * @returns {boolean}
     * @param {EfectoTecnicaElegido} efectoTecnica
     */
    puedeFijarComoPrimario : function(efectoTecnica) {
        var costeActual = 0;
        var elementosAfines = efectoTecnica.getElementosAfines();
        if (this.efectoPrimario) {
            costeActual = this.efectoPrimario.getCosteCM();
        }

        var difCoste = efectoTecnica.getCosteCM() - costeActual;

        if (this.efectoPrimario) {
            if ((this.efectoPrimario.getNombre() != efectoTecnica.getNombre()) &&
                this.hasEfecto(efectoTecnica)) {
                var efectoExistente = this.getEfecto(efectoTecnica.getNombre());
                difCoste -= efectoExistente.getCosteCM();
            }
        }

        var puedePorCoste = this.puedeAñadirEfectoDeCoste(difCoste);

        return (
            puedePorCoste &&
                this.puedeAñadirEfectoDeNivelMinimo(efectoTecnica.getNivelMinimo()) &&
                this.puedeAñadirEfectoDeElementos(elementosAfines)
            );
    },

    /**
     *
     * @param {EfectoTecnicaElegido|boolean} efectoTecnica
     */
    fijaComoPrimario : function(efectoTecnica) {
        if (this.puedeFijarComoPrimario(efectoTecnica)) {
            efectoTecnica.setPrimario(true);
            this.efectoPrimario = undefined;
            if (this.hasEfecto(efectoTecnica)) {
                this.removeEfectoSecundario(efectoTecnica);
            }
            this.efectoPrimario = efectoTecnica;
            lanzarEvento(EVENT_TECNICA_CREACION);
        }
    },

    /**
     *
     * @param {EfectoTecnicaElegido} efectoTecnica
     * @returns {boolean}
     */
    puedeAñadirSecundario : function(efectoTecnica) {
        var puedePorPrimario = true;
        var costeCM = efectoTecnica.getCosteCM();
        if (this.hasEfecto(efectoTecnica)) {
            if (this.efectoPrimario.getNombre() == efectoTecnica.getNombre()) {
                puedePorPrimario = false;
            } else {
                var efectoExistente = this.getEfecto(efectoTecnica.getNombre());
                costeCM -= efectoExistente.getCosteCM();
            }
        }

        return (
            puedePorPrimario &&
                this.puedeAñadirEfectoDeCoste(costeCM) &&
                this.puedeAñadirEfectoDeNivelMinimo(efectoTecnica.getNivelMinimo()) &&
                this.puedeAñadirEfectoDeElementos(efectoTecnica.getElementosAfines())
            );
    },

    /**
     *
     * @param {EfectoTecnicaElegido} efectoSecundario
     */
    addEfectoSecundario : function(efectoSecundario) {
        if (this.puedeAñadirSecundario(efectoSecundario)) {
            efectoSecundario.setPrimario(false);

            if (this.hasEfecto(efectoSecundario)) {
                this.removeEfectoSecundario(efectoSecundario);
            }
            this.efectosSecundarios.push(efectoSecundario);
            lanzarEvento(EVENT_TECNICA_CREACION);
        }
    },

    /**
     *
     * @param {EfectoTecnicaElegido} efectoSecundario
     */
    removeEfectoSecundario : function(efectoSecundario) {
        this.efectosSecundarios = limpiarArrayObjetosPorFuncion(this.efectosSecundarios,comparaGetNombre,efectoSecundario.getNombre());
        lanzarEvento(EVENT_TECNICA_CREACION);
    },

    /**
     *
     * @param {EfectoTecnicaElegido} efectoTecnica
     * @returns {boolean}
     */
    hasEfecto : function(efectoTecnica) {
        var loTiene = false;
        var nombreEfecto = efectoTecnica.getNombre();
        if (this.efectoPrimario) {
            if (this.efectoPrimario.getNombre() == nombreEfecto) {
                loTiene = true;
            }
        }
        if (!loTiene) {
            for (var i = 0; i < this.efectosSecundarios.length;i++) {
                if (this.efectosSecundarios[i].getNombre() == nombreEfecto) {
                    loTiene = true;
                    break;
                }
            }
        }
        return loTiene;
    },

    /**
     *
     * @param {string} nombreEfecto
     * @returns {EfectoTecnicaElegido}
     */
    getEfecto : function(nombreEfecto) {
        if (this.efectoPrimario.getNombre() == nombreEfecto) {
            return this.efectoPrimario;
        } else {
            for (var i = 0; i < this.efectosSecundarios.length;i++) {
                if (this.efectosSecundarios[i].getNombre() == nombreEfecto) {
                    return this.efectosSecundarios[i];
                }
            }
        }
        throw _l(ERR_EFECTO_KI_DESCONOCIDA) + ": " + nombreEfecto;
    },

    /**
     *
     * @param {DesventajaTecnicaElegida} desventajaTecnica
     * @returns {boolean}
     */
    puedeAñadirDesventaja : function(desventajaTecnica) {
        var porNumero = (this.desventajas.length < this.getMaxDesventajas());

        var porIncompatibles = true;

        /**
         *
         * @type {*}
         */
        var incompatibles = desventajaTecnica.getIncompatibles();

        for (var i = 0; i < incompatibles.length; i++) {
            if (this.hasDesventaja(incompatibles[i])) {
                porIncompatibles = false;
                break;
            }
        }

        return porNumero && porIncompatibles;
    },

    /**
     *
     * @param {DesventajaTecnicaElegida} desventaja
     */
    addDesventaja : function(desventaja) {
        if (this.puedeAñadirDesventaja(desventaja)) {
            this.desventajas.push(desventaja);
            if (desventaja.isAtaduraElemental()) {
                this.ataduraElemental = desventaja.getAtaduraElemental();
                this.hasAtaduraElemental = true;
            }
            lanzarEvento(EVENT_TECNICA_CREACION);
        }
    },

    /**
     *
     * @param {DesventajaTecnicaElegida} desventaja
     */
    removeDesventaja : function(desventaja) {
        if (this.hasDesventaja(desventaja.getNombre())) {
            this.desventajas = limpiarArrayObjetosPorFuncion(this.desventajas,comparaGetNombre,desventaja.getNombre());
            if (desventaja.isAtaduraElemental()) {
                this.ataduraElemental = new ElementosAfines([]);
                this.hasAtaduraElemental = false;
            }
            lanzarEvento(EVENT_TECNICA_CREACION);
        }
    },

    /**
     *
     * @param {string} nombreDesventaja
     * @returns {boolean}
     */
    hasDesventaja : function(nombreDesventaja) {
        for (var i = 0; i < this.desventajas.length; i++) {
            if (this.desventajas[i].getNombre() == nombreDesventaja) {
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @returns {number}
     */
    getMaxDesventajas : function() {
        return this.maxDesventajas;
    },

    /**
     *
     * @returns {EfectoTecnicaElegido}
     */
    getEfectoPrimario : function() {
        return this.efectoPrimario;
    },

    /**
     *
     * @returns {EfectoTecnicaElegido[]}
     */
    getEfectosSecundarios : function() {
        return this.efectosSecundarios;
    },

    /**
     *
     * @returns {DesventajaTecnicaElegida[]}
     */
    getDesventajas : function() {
        return this.desventajas;
    },

    /**
     *
     * @returns {boolean}
     */
    compruebaAtadurasElementales : function() {
        var correcto = true;
        var i;
        var elementosAfines;

        if (this.hasAtaduraElemental) {
            elementosAfines = this.efectoPrimario.getElementosAfines();
            correcto = this.puedeAñadirEfectoDeElementos(elementosAfines);

            for (i = 0;i < this.efectosSecundarios.length;i++) {
                elementosAfines = this.efectosSecundarios[i].getElementosAfines();
                correcto = correcto && this.puedeAñadirEfectoDeElementos(elementosAfines);
            }
        }

        return correcto;
    },

    /**
     *
     * @returns {boolean}
     */
    isCorrecta : function() {
        var costeCM = this.getCosteCM();

        var numDesventajas = this.desventajas.length;

        return (
            (costeCM >= this.minCM) &&
                (costeCM <= this.maxCM) &&
                (numDesventajas <= this.maxDesventajas) &&
                (this.compruebaAtadurasElementales()) &&
                (this.efectoPrimario != false));
    },

    addVentajaEfecto : function(efecto,ventaja) {
        efecto.addVentajaOpcional(ventaja);
        lanzarEvento(EVENT_TECNICA_CREACION);
    },

    removeVentajaEfecto : function(efecto, ventaja) {
        efecto.removeVentajaOpcional(ventaja);
        lanzarEvento(EVENT_TECNICA_CREACION);
    },

    setEfectoMantenido : function(efecto, valor) {
        efecto.setMantenido(valor);
        lanzarEvento(EVENT_TECNICA_CREACION);
    },

    getCosteKi : function() {
        if (!this.costeKi) {
            var costeKi = new CosteKi(0,0,0,0,0,0,AGI);
            if (this.efectoPrimario) {
                costeKi = this.efectoPrimario.getCosteKiTotal();
            }
            for (var i = 0; i < this.efectosSecundarios.length; i++) {
                costeKi = this.efectosSecundarios[i].getCosteKiTotal().sumaCosteKi(costeKi);
            }
            return costeKi;
        } else {
            return this.costeKi;
        }
    },

    /**
     *
     * @returns {CosteKi}
     */
    getCosteMantenimiento : function() {
        if (!this.costeMantenimiento) {
            var costeMantenimiento = new CosteKi(0,0,0,0,0,0,AGI);
            if (this.efectoPrimario) {
                costeMantenimiento = this.efectoPrimario.getCosteMantenimiento();
            }
            for (var i = 0; i < this.efectosSecundarios.length; i++) {
                costeMantenimiento = this.efectosSecundarios[i].getCosteMantenimiento().sumaCosteKi(costeMantenimiento);
            }
            return costeMantenimiento;
        } else {
            return this.costeMantenimiento;
        }
    }
};

/**
 *
 * @param {EfectoTecnica} efectoTecnica
 * @param {NivelEfectoTecnica} nivelEfectoTecnica
 * @constructor
 */
function EfectoTecnicaElegido(efectoTecnica, nivelEfectoTecnica) {
    /**
     *
     * @type {EfectoTecnica}
     */
    this.efectoTecnica = efectoTecnica;

    /**
     *
     * @type {NivelEfectoTecnica}
     */
    this.nivelElegido = nivelEfectoTecnica;

    /**
     *
     * @type {VentajaTecnicaElegida[]}
     */
    this.ventajasOpcionalesElegidas = [];

    /**
     *
     * @type {boolean}
     */
    this.primario = false;

    /**
     *
     * @type {boolean}
     */
    this.mantenido = false;

    /**
     *
     * @type {CosteKi}
     */
    if (efectoTecnica) {
        this.costeKi = new CosteKi(0,0,0,0,0,0,efectoTecnica.getCaracPrimaria());
        this.costeKi.setCoste(efectoTecnica.getCaracPrimaria(),nivelEfectoTecnica.getCosteSecundario());


    /**
     *
     * @type {CosteKi}
     */
    this.costeMantenimiento = new CosteKi(0,0,0,0,0,0,efectoTecnica.getCaracPrimaria());
    this.costeMantenimiento.setCoste(efectoTecnica.getCaracPrimaria(), nivelEfectoTecnica.getCosteMantenimiento());

    /**
     *
     * @type {CaracSecunTecnica[]}
     */
    var caracSec = this.efectoTecnica.getCaracSecundarias();

    for (var i = 0; i < caracSec.length; i++) {
        this.costeKi.mod[caracSec[i].caracteristica] = caracSec[i].modificador;
        this.costeMantenimiento.mod[caracSec[i].caracteristica] = caracSec[i].modificador;
    }

    }

}

EfectoTecnicaElegido.prototype = {
    constructor : EfectoTecnicaElegido,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.efectoTecnica.getNombre();
    },

    /**
     *
     * @returns {string} Localizado
     */
    getNombreCompleto : function() {
        return _l(this.efectoTecnica.getNombre()) + " " + _l(this.nivelElegido.getNombre());
    },

    /**
     *
     * @returns {ElementosAfines}
     */
    getElementosAfines : function() {
        return this.efectoTecnica.getElementosAfines();
    },

    /**
     *
     * @returns {string}
     */
    getCaracPrimaria : function() {
        return this.efectoTecnica.getCaracPrimaria();
    },

    /**
     *
     * @returns {CaracSecunTecnica[]}
     */
    getCaracSecundarias : function() {
        return this.efectoTecnica.getCaracSecundarias();
    },

    /**
     *
     * @returns {CosteKi}
     */
    getCosteMantenimiento : function() {
        return this.costeMantenimiento;
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        var coste = this.nivelElegido.getCosteCM();

        for (var i =0; i < this.ventajasOpcionalesElegidas.length;i++) {
            coste += this.ventajasOpcionalesElegidas[i].getCosteCM();
        }

        var especial = this.efectoTecnica.getEspecial();
        for (i = 0; i < especial.length;i++) {
            if ((especial[i] == COSTE_VENTAJAS_AUMENTA_DOS) && (this.ventajasOpcionalesElegidas.length > 0)) {
                coste += 2 * (this.ventajasOpcionalesElegidas.length-1);
            }
        }

        return coste;
    },

    /**
     *
     * @returns {number}
     */
    getNivelMinimo : function() {
        return this.nivelElegido.getNivelMinimo();
    },

    /**
     *
     * @returns {VentajaTecnica[]}
     */
    getVentajasOpcionales : function() {
        return this.efectoTecnica.getVentajasOpcionales();
    },

    /**
     *
     * @param {string} nombre
     * @returns {VentajaTecnica}
     */
    getVentajaOpcionalPorNombre : function(nombre) {
        return this.efectoTecnica.getVentajaOpcionalPorNombre(nombre);
    },

    /**
     *
     * @returns {VentajaTecnicaElegida[]}
     */
    getVentajasOpcionalesElegidas : function() {
        return this.ventajasOpcionalesElegidas;
    },

    /**
     *
     * @param {VentajaTecnicaElegida} valor
     */
    addVentajaOpcional : function(valor) {
        this.ventajasOpcionalesElegidas.push(valor);
        this.costeKi.addCoste(this.efectoTecnica.getCaracPrimaria(),valor.getCosteKi());
        if (this.isMantenido()) {
            this.costeMantenimiento.addCoste(this.efectoTecnica.getCaracPrimaria(), valor.getCosteMantenimiento());
        }
    },

    /**
     *
     * @param {VentajaTecnicaElegida} valor
     */
    removeVentajaOpcional : function(valor) {
        this.ventajasOpcionalesElegidas = limpiarArrayObjetosPorFuncion(this.ventajasOpcionalesElegidas,comparaGetNombre,valor.getNombre());
        this.initCosteKi();
        if (this.isMantenido()) {
            this.initCosteMantenimiento();
        }
    },

    /**
     *
     */
    initCosteKi : function() {
        var i;
        this.costeKi = new CosteKi(0,0,0,0,0,0,this.efectoTecnica.getCaracPrimaria());
        if (this.primario) {
            this.costeKi.setCoste(this.efectoTecnica.getCaracPrimaria(),this.nivelEfectoTecnica.getCostePrimario());
        } else {
            this.costeKi.setCoste(this.efectoTecnica.getCaracPrimaria(),this.nivelEfectoTecnica.getCosteSecundario());
        }

        for ( i = 0; i < this.ventajasOpcionalesElegidas.length; i++) {
            this.costeKi.addCoste(this.efectoTecnica.getCaracPrimaria(),this.ventajasOpcionalesElegidas[i].getCosteKi());
        }

        var caracSec = this.efectoTecnica.getCaracSecundarias();
        for ( i = 0; i < caracSec.length; i++) {
            this.costeKi.mod[caracSec[i].caracteristica] = caracSec[i].modificador;
        }
    },

    /**
     *
     */
    initCosteMantenimiento : function() {
        var i;
        this.costeMantenimiento = new CosteKi(0,0,0,0,0,0,this.efectoTecnica.getCaracPrimaria());
        this.costeMantenimiento.setCoste(this.efectoTecnica.getCaracPrimaria(),this.nivelEfectoTecnica.getCosteMantenimiento());

        for ( i = 0; i < this.ventajasOpcionalesElegidas.length; i++) {
            this.costeMantenimiento.addCoste(this.efectoTecnica.getCaracPrimaria(),this.ventajasOpcionalesElegidas[i].getCosteMantenimiento());
        }

        for ( i = 0; i < caracSec.length; i++) {
            this.costeMantenimiento.mod[caracSec[i].caracteristica] = caracSec[i].modificador;
        }
    },

    /**
     *
     * @returns {boolean}
     */
    isPrimario : function() {
        return this.primario;
    },

    /**
     *
     * @param {boolean} valor
     */
    setPrimario : function(valor) {
        if (this.primario && !valor) {
            //pasa a secundaria
            this.costeKi.addCoste(this.efectoTecnica.getCaracPrimaria(),-1*this.nivelElegido.getCostePrimario());
            this.costeKi.addCoste(this.efectoTecnica.getCaracPrimaria(),this.nivelElegido.getCosteSecundario());
        } else if (!this.primario && valor) {
            //pasa a primaria
            this.costeKi.addCoste(this.efectoTecnica.getCaracPrimaria(), this.nivelElegido.getCostePrimario());
            this.costeKi.addCoste(this.efectoTecnica.getCaracPrimaria(), -1* this.nivelElegido.getCosteSecundario());
        }

        this.primario = valor;
    },

    /**
     *
     * @returns {boolean}
     */
    isMantenible : function() {
        return this.nivelElegido.hasCosteMantenimiento();
    },

    /**
     *
     * @returns {boolean}
     */
    isMantenido : function() {
        return this.mantenido;
    },

    /**
     *
     * @param {boolean} valor
     */
    setMantenido : function(valor) {
        this.mantenido = valor;
    },

    /**
     *
     * @returns {CosteKi}
     */
    getCosteKi : function() {
        return this.costeKi;
    },

    /**
     * Devuelve el coste total en ki, una vez sumado el coste inicial por mantenimiento
     * @returns {CosteKi}
     */
    getCosteKiTotal : function() {
        var coste = this.costeKi;
        if (this.isMantenido()) {
            coste = coste.sumaCosteKi(this.costeMantenimiento);
        }
        return coste;
    }

};

/**
 *
 * @param {VentajaTecnica} ventajaTecnica
 * @param {NivelVentajaTecnica} nivelVentajaTecnica
 * @constructor
 */
function VentajaTecnicaElegida(ventajaTecnica, nivelVentajaTecnica) {
    /**
     *
     * @type {VentajaTecnica}
     */
    this.ventajaTecnica = ventajaTecnica;

    /**
     *
     * @type {NivelVentajaTecnica}
     */
    this.nivelElegido = nivelVentajaTecnica;
}

VentajaTecnicaElegida.prototype = {
    constructor : VentajaTecnicaElegida,

    /**
     *
     * @returns {VentajaTecnica}
     */
    getVentajaTecnica : function() {
        return this.ventajaTecnica;
    },

    /**
     *
     * @returns {NivelVentajaTecnica}
     */
    getNivelElegido : function() {
        return this.nivelElegido;
    },

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        var nombre = this.ventajaTecnica.getNombre();
        if (this.ventajaTecnica.getNivelesVentaja().length > 1) {
            nombre += " (" + this.nivelElegido.getNombre() + ")";
        }
        return nombre;
    },

    /**
     *
     * @returns {string}
     */
    getDescripcion : function() {
        return this.ventajaTecnica.getDescripcion();
    },

    /**
     *
     * @returns {number}
     */
    getCosteKi : function() {
        return this.nivelElegido.getCosteKi();
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        return this.nivelElegido.getCosteCM();
    },

    /**
     *
     * @returns {number}
     */
    getCosteMantenimiento : function() {
        return this.nivelElegido.getCosteMantenimiento();
    },

    /**
     *
     * @returns {number}
     */
    getNivelMinimo : function() {
        return this.nivelElegido.getNivelMinimo();
    }
};

/**
 *
 * @param {DesventajaTecnica} desventajaTecnica
 * @constructor
 */
function DesventajaTecnicaElegida(desventajaTecnica) {
    /**
     *
     * @type {DesventajaTecnica}
     */
    this.desventajaTecnica = desventajaTecnica;

    /**
     *
     * @type {ElementosAfines}
     */
    this.ataduraElemental = new ElementosAfines([]);

    /**
     *
     * @type {string}
     */
    this.descripcion = desventajaTecnica.getDescripcion();

    /**
     *
     * @type {number}
     */
    this.costeCM = desventajaTecnica.getCosteCM();

    /**
     *
     * @type {boolean}
     */
    this.esAtaduraElemental = false;

    /**
     *
     * @type {boolean}
     */
    this.hasDescripcionPropia = false;
}

DesventajaTecnicaElegida.prototype = {
    constructor : DesventajaTecnicaElegida,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        var nombre = this.desventajaTecnica.getNombre();
        if (this.hasDescripcionPropia) {
            nombre += " (" + this.descripcion + ")";
        }
        if (this.isAtaduraElemental()) {
            nombre += " [" + this.getAtaduraElemental().toString() + "]";
        }
        return nombre;
    },

    getNombreCompleto : function() {
        var nombre = _l(this.desventajaTecnica.getNombre());
        if (this.hasDescripcionPropia) {
            nombre += " (" + _l(this.descripcion) + ")";
        }
        if (this.isAtaduraElemental()) {
            nombre += " [" + this.getAtaduraElemental().toString() + "]";
        }
        return nombre;
    },

    /**
     *
     * @returns {Array}
     */
    getEfecto : function() {
        return this.desventajaTecnica.getEfecto();
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
     * @param {string} valor
     */
    setDescripcion : function(valor) {
        this.descripcion = valor;
        this.hasDescripcionPropia = true;
    },

    /**
     *
     * @returns {string[]}
     */
    getIncompatibles : function() {
        return this.desventajaTecnica.getIncompatibles();
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        return this.costeCM;
    },

    /**
     *
     * @param {number} valor
     */
    setCosteCM : function(valor) {
        this.costeCM = valor;
    },

    /**
     *
     * @returns {number}
     */
    getNivelMinimo : function() {
        return this.desventajaTecnica.getNivelMinimo();
    },

    /**
     *
     * @returns {boolean}
     */
    isAtaduraElemental : function() {
        return (this.esAtaduraElemental);
    },

    /**
     *
     * @param  {ElementosAfines} valor
     */
    setAtaduraElemental : function(valor) {
        this.esAtaduraElemental = true;
        this.ataduraElemental = valor;
    },

    /**
     *
     * @returns {ElementosAfines}
     */
    getAtaduraElemental : function() {
        return this.ataduraElemental;
    }
};

/**
 *
 * @param {string} caracteristica
 * @param {number} modificador
 * @constructor
 */
function CaracSecunTecnica(caracteristica, modificador) {
    /**
     *
     * @type {string}
     */
    this.caracteristica = caracteristica;

    /**
     *
     * @type {number}
     */
    this.modificador = modificador;
}

/**
 *
 * @constructor
 * @param {string[]} elementosAfines
 */
function ElementosAfines(elementosAfines) {
    /**
     *
     * @type {boolean}
     */
    this.fuego = false;

    /**
     *
     * @type {boolean}
     */
    this.agua = false;

    /**
     *
     * @type {boolean}
     */
    this.tierra = false;

    /**
     *
     * @type {boolean}
     */
    this.aire = false;

    /**
     *
     * @type {boolean}
     */
    this.luz = false;

    /**
     *
     * @type {boolean}
     */
    this.oscuridad = false;

    for (var i = 0; i < elementosAfines.length; i++) {
        switch (elementosAfines[i]) {
            case ELEMENTO_AGUA:
                this.agua = true;
                break;
            case ELEMENTO_AIRE:
                this.aire = true;
                break;
            case ELEMENTO_FUEGO:
                this.fuego = true;
                break;
            case ELEMENTO_TIERRA:
                this.tierra = true;
                break;
            case ELEMENTO_LUZ:
                this.luz = true;
                break;
            case ELEMENTO_OSCURIDAD:
                this.oscuridad = true;
                break;
        }
    }

}

ElementosAfines.prototype = {
    constructor : ElementosAfines,

    toString : function() {
        var str = "";

        if (this.agua) {
            str += _l(ELEMENTO_AGUA) + ",";
        }
        if (this.fuego) {
            str += _l(ELEMENTO_FUEGO) +",";
        }
        if (this.aire) {
            str += _l(ELEMENTO_AIRE) +",";
        }
        if (this.tierra) {
            str += _l(ELEMENTO_TIERRA) +",";
        }
        if (this.luz) {
            str += _l(ELEMENTO_LUZ)+",";
        }
        if (this.oscuridad) {
            str += _l(ELEMENTO_OSCURIDAD)+",";
        }

        if (str.length > 0) {
            str = str.substr(0,str.length-1);
        }

        return str;
    }
};

var caracsCosteKi = [AGI,DES,CON,FUE,POD,VOL];

function CosteKi(agi, con, des, fue, pod, vol, caracBase) {
    this.coste = {};

    this.coste[AGI] = agi;
    this.coste[DES] = des;
    this.coste[CON] = con;
    this.coste[FUE] = fue;
    this.coste[POD] = pod;
    this.coste[VOL] = vol;

    this.mod = {};

    this.mod[AGI] = -1;
    this.mod[DES] = -1;
    this.mod[CON] = -1;
    this.mod[FUE] = -1;
    this.mod[POD] = -1;
    this.mod[VOL] = -1;

    this.caracbase = caracBase || AGI;

    this.mod[this.caracBase] = 0;
}

CosteKi.prototype = {
    constructor : CosteKi,

    /**
     *
     * @returns {string}
     */
    toString : function() {
        return _l(AGI).substr(0,1)+":"+this.coste[AGI]+
            " "+_l(CON).substr(0,1)+":"+this.coste[CON]+
            " "+_l(DES).substr(0,1)+":"+this.coste[DES]+
            " "+_l(FUE).substr(0,1)+":"+this.coste[FUE]+
            " "+_l(POD).substr(0,1)+":"+this.coste[POD]+
            " "+_l(VOL).substr(0,1)+":"+this.coste[VOL];
    },

    /**
     *
     * @param {string} caracteristica
     * @returns {number}
     */
    getCoste : function(caracteristica) {
        return this.coste[caracteristica];
    },

    /**
     * Pasa (valor) de la característica base del coste en Ki a la característica (destino). Si valor es negativo, el paso funciona
     * a la inversa.
     * @param {string} destino
     * @param {number} valor
     */
    pasaCoste : function(destino,valor) {
        if (valor < 0) {
            if (this.coste[destino] < -1 * valor) {
                return;
            }
        }
        if (this.coste[this.caracbase] >= valor) {
            if (this.mod[destino] >= 0) {
                if (this.coste[destino] == 0) {
                    this.coste[this.caracbase] += this.mod[destino];
                }
                this.coste[this.caracbase] -= valor;
                this.coste[destino] += valor;
                if (this.coste[destino] == 0) {
                    this.coste[this.caracbase] -= this.mod[destino];
                }
            }
        }
    },

    /**
     *
     * @returns {string[]}
     */
    getCaracteristicasDestino : function() {
        var result = [];
        for (var i = 0; i < caracsCosteKi.length; i++) {
            if ((this.caracbase != caracsCosteKi[i]) && (this.mod[caracsCosteKi[i]] >= 0)) {
                result.push(caracsCosteKi[i]);
            }
        }
        return result;
    },

    sumaCosteKi : function(otroCoste) {
        return new CosteKi(
            this.coste[AGI]+otroCoste.getCoste(AGI),
            this.coste[CON]+otroCoste.getCoste(CON),
            this.coste[DES]+otroCoste.getCoste(DES),
            this.coste[FUE]+otroCoste.getCoste(FUE),
            this.coste[POD]+otroCoste.getCoste(POD),
            this.coste[VOL]+otroCoste.getCoste(VOL),
            this.caracbase
        );
    },

    setCoste : function(caracteristica, valor) {
        this.coste[caracteristica] = valor;
    },

    addCoste : function(caracteristica, valor) {
        this.setCoste(caracteristica,this.getCoste(caracteristica)+valor);
    }

};


/**
 *
 * @param {HabilidadKi} habilidadKi
 * @param {boolean} anulable
 * @constructor
 * @param  {boolean} ignoraRequisitos
 */
function HabilidadKiComprada(habilidadKi, anulable, ignoraRequisitos) {

    /**
     *
     * @type {HabilidadKi}
     */
    this.habilidadKi = habilidadKi;

    /**
     *
     * @type {boolean}
     */
    this.anulable = anulable;

    /**
     *
     * @type {boolean}
     */
    this.ignoraRequisitos = ignoraRequisitos;
}

HabilidadKiComprada.prototype = {
    constructor : HabilidadKiComprada,

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.habilidadKi.nombre;
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        return this.habilidadKi.costeCM;
    },

    /**
     *
     * @returns {string[]}
     */
    getRequisitos : function() {
        if (this.ignoraRequisitos) {
            return [];
        } else {
            return this.habilidadKi.requisitos;
        }
    },

    /**
     *
     * @returns {function}
     */
    getEfecto : function() {
        return this.habilidadKi.efecto;
    },

    /**
     *
     * @returns {boolean}
     */
    isHabilidad : function() {
        return this.habilidadKi.esHabilidad;
    },

    /**
     *
     * @returns {string}
     */
    getNombreHabilidadMedia : function() {
        return this.habilidadKi.nombreHabilidadMedia;
    },

    /**
     *
     * @param {Personaje} personaje
     * @returns {number}
     */
    getValorActual : function(personaje) {
        return Math.floor((personaje.getCMTotal()+personaje.getHabilidadDePersonaje(this.getNombreHabilidadMedia()).valorFinalActual())/2)
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
     * @returns {boolean}
     */
    isIgnoraRequisitos : function() {
        return this.ignoraRequisitos;
    },

    /**
     *
     * @param {Personaje} personaje
     * @returns {boolean}
     */
    cumple : function(personaje) {
        var cumple = true;
        for (var i = 0; i < this.habilidadKi.requisitos.length; i++) {
            if (!personaje.hasHabilidadKi(this.habilidadKi.requisitos[i])) {
                cumple = false;
            }
        }
        return cumple;
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
 * @param {TecnicaKi} tecnicaKi
 * @constructor
 */
function TecnicaKiComprada(tecnicaKi) {
    /**
     *
     * @type {TecnicaKi}
     */
    this.tecnicaKi = tecnicaKi;

    /**
     *
     * @type {boolean}
     */
    this.anulable = true;
}

TecnicaKiComprada.prototype = {
    constructor : TecnicaKiComprada,

    /**
     *
     * @returns {*}
     */
    toString : function() {
        return this.tecnicaKi.toString();
    },

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.tecnicaKi.nombre;
    },

    /**
     *
     * @returns {string}
     */
    getArbolTecnicas : function() {
        return this.tecnicaKi.arbolTecnicas;
    },

    /**
     *
     * @returns {string}
     */
    getDescripcion : function() {
        return this.tecnicaKi.descripcion;
    },

    /**
     *
     * @returns {boolean}
     */
    isMantenida : function() {
        return this.tecnicaKi.isMantenida();
    },

    /**
     *
     * @returns {number}
     */
    getNivel : function() {
        return this.tecnicaKi.nivel;
    },

    /**
     *
     * @returns {number}
     */
    getCosteCM : function() {
        return this.tecnicaKi.getCosteCM();
    },

    /**
     *
     * @param {EfectoTecnicaElegido} efectoTecnica
     * @returns {boolean}
     */
    hasEfecto : function(efectoTecnica) {
        return this.tecnicaKi.hasEfecto(efectoTecnica);
    },

    /**
     *
     * @param {string} nombreEfecto
     * @returns {EfectoTecnicaElegido}
     */
    getEfecto : function(nombreEfecto) {
        return this.tecnicaKi.getEfecto(nombreEfecto);
    },

    /**
     *
     * @param {string} nombreDesventaja
     * @returns {boolean}
     */
    hasDesventaja : function(nombreDesventaja) {
        return this.tecnicaKi.hasDesventaja(nombreDesventaja);
    },

    /**
     *
     * @returns {EfectoTecnicaElegido}
     */
    getEfectoPrimario : function() {
        return this.tecnicaKi.efectoPrimario;
    },

    /**
     *
     * @returns {EfectoTecnicaElegido[]}
     */
    getEfectosSecundarios : function() {
        return this.tecnicaKi.efectosSecundarios;
    },

    /**
     *
     * @returns {DesventajaTecnicaElegida[]}
     */
    getDesventajas : function() {
        return this.tecnicaKi.desventajas;
    },

    /**
     *
     * @returns {boolean}
     */
    compruebaAtadurasElementales : function() {
        return this.tecnicaKi.compruebaAtadurasElementales();
    },

    /**
     *
     * @returns {boolean}
     */
    isCorrecta : function() {
        return this.tecnicaKi.isCorrecta();
    },

    getCosteKi : function() {
        return this.tecnicaKi.getCosteKi();
    },

    getCosteMantenimiento : function() {
        return this.tecnicaKi.getCosteMantenimiento();
    },

    isAnulable : function() {
        return this.anulable;
    },

    setAnulable : function(valor) {
        this.anulable = valor;
    }
};