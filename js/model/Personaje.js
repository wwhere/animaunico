//noinspection FunctionTooLongJS
/**
 * @param {number} [nivelInicial=1] El nivel al que se crea el personaje. Mínimo 0.
 * @class Personaje
 * @constructor
 */
function Personaje(nivelInicial) {

    if (!nivelInicial) {
        nivelInicial = 1;
    }

    //region Datos Personales
    /** @type string */
    this.nombre = "Donoban";

    /** @type string */
    this.sexo = SEXO_HOMBRE;

    /**
     *
     * @type {string}
     */
    this.claseSocial = CLASE_SOCIAL_POBRE;

    /** @type string  */
    this.altura = "0.5 m";

    /** @type string  */
    this.peso = "10 kg";
    //endregion Datos Personales

    //region Caracteristicas
    /** @type number[] */
    this.caracteristicas = [1,1,1,1,1,1,1,1];

    /** @type number[] */
    this.caracteristicasPrevias = [1,1,1,1,1,1,1,1];

    //endregion Caracteristicas

    //region Capacidades Físicas
    /** @type number */
    this.puntosCansancio = 1;

    /** @type number */
    this.tipoMovimiento = 1;

    /** @type number */
    this.regeneracion = 1;

    /** @type number */
    this.turnoBase = TURNO_BASE;

    /** @type number */
    this.apariencia = 1;

    /** @type number */
    this.tamaño = 2;
    //endregion Capacidades Físicas

    //region Resistencias
    //endregion Resistencias

    //region Puntos de Vida
    /** @type number */
    this.pv = 10;

    /** @type HabilidadDePersonaje */
    this[HB_MULTIPLO_VIDA] = new HabilidadDePersonaje(getHabilidad(HB_MULTIPLO_VIDA));
    //endregion Puntos de Vida

    //region Raza
    /** @type Raza */
    this.raza = getRaza(RAZA_HUMANO);
    //endregion Raza

    //region Categoría
    /** @type string */
    this.arquetipo = ARQ_SIN_CATEGORIA;

    /** @type Categoria */
    this.categoria = getCategoria(CAT_NOVEL);

    /** @type Categoria[] */
    this.categoriasPorNiveles = [];

    for (i = 0; i <= nivelInicial; i++) {
        this.categoriasPorNiveles[i] = this.categoria;
    }

    /** @type boolean|number Vale false si no se está cambiando. Si se ha pagado el cambio, indica en qué nivel se cambia de categoría.*/
    this.cambioCategoria = false;

    /**
     *
     * @type {Categoria} Si se ha pagado para cambiar, indica a cuál se pasa
     */
    this.proximaCategoria = this.categoria;
    //endregion Categoría

    //region Armadura
    /** @type TipoArmadura */
    this.armaduraNatural = new TipoArmadura(ARMADURA_NATURAL,[0,0,0,0,0,0,0],true);

    /** @type TipoArmadura */
    this.capaArmaduraDura = new TipoArmadura(ARMADURA_NINGUNA,[0,0,0,0,0,0,0],false);

    /** @type TipoArmadura */
    this.capaArmaduraBlanda1 = new TipoArmadura(ARMADURA_NINGUNA,[0,0,0,0,0,0,0],true);

    /** @type TipoArmadura */
    this.capaArmaduraBlanda2 = new TipoArmadura(ARMADURA_NINGUNA,[0,0,0,0,0,0,0],true);

    //endregion Armadura

    //region Elan
    /** @type Elan[] */
    this.elan = [];
    //endregion Elan

    //region Magia
    /** @type NivelEnVia[] */
    this.viasMagia = [];

    /** @type Conjuro[] */
    this.conjurosSueltos = [];

    /** @type number */
    this.nivelMagiaGastado = 0;

    /** @type number */
    this.nivelMagiaGastadoPrevio = 0;
    //endregion Magia

    //region Bonos y Costes Reducidos
    /** @type Bono[] */
    this.bonos = [];

    /** @type Coste[] */
    this.costesReducidos = [];
    //endregion Bonos y Costes Reducidos

    //region Bonificadores Naturales
    /** @type BonificadorNatural[] */
    this.bonificadoresNaturales = [];
    this.bonificadoresNaturales[1] = new BonificadorNatural();
    //endregion Bonificadores Naturales

    //region Puntos de Desarrollo
    /** @type number */
    this.PD_totales = getPDsPorNivel(nivelInicial);

    /** @type number */
    this.PD_libres = this.PD_totales;
    this.PD_libresPrevios = this.PD_totales;
    //endregion Puntos de Desarrollo

    //region Puntos de Construcción
    /** @type number */
    this.PC_generales = 3;

    /** @type number */
    this.PC_don = 0;

    /** @type number */
    this.PC_psiquicas = 0;

    /** @type number */
    this.PC_libres_generales = 3;

    /** @type number */
    this.PC_libres_don = 0;

    /** @type number */
    this.PC_libres_psiquicas = 0;

    /** @type {number}*/
    this.aumentosCaracteristicasLibres = getAumentosCaracteristicasPorNivel(nivelInicial);

    /** @type {AumentoCaracteristicas[]} */
    this.aumentosCaracteristicas = [];
    var numAumentos = getAumentosCaracteristicasPorNivel(nivelInicial);
    for (i=0; i< numAumentos;i++) {
        this.aumentosCaracteristicas.push(new AumentoCaracteristicas());
    }

    /** @type {number}*/
    this.aumentosCaracteristicasLibresPrevios = 0;
    //endregion Puntos de Construcción

    //region PX y nivel
    /** @type number */
    this.px = 0;

    /** @type number */
    this.nivel = nivelInicial;

    /**
     *
     * @type {number}
     */
    this.nivelGeneracionTerminada = -1;

    /**
     *
     * @type {ESTADO_GENERACION_NINGUNO|*}
     */
    this.GENERACION_INICIADA = ESTADO_GENERACION_NINGUNO;

    //endregion PX y nivel

    //region Ventajas y Desventajas
    /** @type ElementoPCComprado[] */
    this.ventajas = [];

    /** @type ElementoPCComprado[] */
    this.desventajas = [];

    /** @type ElementoProhibido[] */
    this.prohibidos = [];
    //endregion Ventajas y Desventajas

    //region Habilidades Primarias y Secundarias
    /**
     *
     * @type {HabilidadDePersonaje[]}
     */
    this.allHabilidades = [];

    for (var i = 0; i < habilidades_set.length;i++){
        /** @type HabilidadDePersonaje */
        this[habilidades_set[i].nombre] = new HabilidadDePersonaje(habilidades_set[i]);

        this.allHabilidades.push(this[habilidades_set[i].nombre]);
    }

    //region Ajustes Habilidades Primarias: Combate
    /** @type Arma[] */
    this.manejoArmas = [getArma(ARMA_SIN_ARMAS)];

    /** @type string[] */
    this.manejoTiposArmas = [];

    /** @type string */
    this.armaInicial = ARMA_SIN_ARMAS;

    /** @type TablaArmasComprada[] */
    this.tablasArmas = [];

    /** @type ArteMarcialComprada[] */
    this.artesMarciales = [];

    /**
     *
     * @type {number}
     */
    this.CMGastado = 0;

    /**
     *
     * @type {number}
     */
    this.CMGastadoPrevio = 0;

    /**
     *
     * @type {HabilidadKiComprada[]}
     */
    this.habilidadesKi = [];

    /**
     *
     * @type {TecnicaKiComprada[]}
     */
    this.tecnicasKi = [];

    /**
     *
     * @type {{nivel1: number, nivel2: number, nivel3: number}}
     */
    this.numTecnicas = {nivel1:0,nivel2:0,nivel3:0};

    //endregion Ajustes Habilidades Primarias: Combate

    //region Ajustes Habilidades Primarias: Magia
    //endregion Ajustes Habilidades Primarias: Magia

    //region Ajustes Habilidades Primarias: Psíquica
    this[HB_POTENCIAL_PSIQUICO].CVsGastados = 0;
    this[HB_POTENCIAL_PSIQUICO].CVsGastadosPrevios = 0;
    this[HB_POTENCIAL_PSIQUICO].bono = 0;

    /** @type number */
    this.cv_gastados = 0;

    /** @type number */
    this.cv_gastadosPrevios = 0;

    /** @type string[] */
    this.acceso_disciplinas = [];

    /** @type DisciplinaPsiquicaAccedida[] */
    this.disciplinasPsiquicas = [];

    /** @type PoderPsiquicoDominado[] */
    this.poderesPsiquicosDominados = [];

    /** @type number */
    this.innatosPsiquicos = 0;

    /** @type number */
    this.innatosPsiquicosPrevios = 0;
    //endregion Ajustes Habilidades Primarias: Psíquica

    //endregion Habilidades Primarias y Secundarias

    //region Equipo y dinero
    /** @type Dinero */
    this.dinero = new Dinero(0,0,5);
    //endregion

    //region Flags
    /** @type string[] */
    this.flags = [];
    //endregion Flags

    //region Presencia, gnosis, natura

    /**
     *
     * @type {number}
     */
    this.gnosis = 10;

    //endregion Presencia, gnosis, natura

    /**
     *
     * @type {Equipo[]}
     */
    this.equipo = [];

    /**
     *
     * @type {string}
     */
    this.descripcion = "";

    /**
     *
     * @type {string}
     */
    this.trasfondo = "";
}

Personaje.prototype = {
    constructor : Personaje,

    /**
     *
     * @returns {string}
     */
    toString : function() {
        return this.nombre + " (" + this.getStringCategoria() + ", " + this.raza + ")";
    },

    /**
     *
     * @returns {string}
     */
    getTrasfondo: function() {
        return this.trasfondo;
    },

    /**
     *
     * @param {string} valor
     */
    setTrasfondo: function(valor) {
        this.trasfondo = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_PERSONALES);
    },

    /**
     *
     * @param {string} valor
     */
    setDescripcion: function(valor) {
        this.descripcion = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_PERSONALES);
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
     * @returns {Equipo[]}
     */
    getEquipo : function() {
        return this.equipo;
    },

    getStringCategoria : function() {
        var cadena = "";
        var catActual = "";
        var nivelActual = 0;
        var numCategorias = 0;
        for (var i = 1; i <= this.nivel; i++) {
            if ((this.categoriasPorNiveles[i].toString() != catActual) || (numCategorias == 0)) {
                if (numCategorias == 1) {
                    cadena += _l(catActual) + " " + nivelActual;
                } else if (numCategorias > 1) {
                    cadena += "/" + _l(catActual) + " " + nivelActual;
                }
                catActual = this.categoriasPorNiveles[i].toString();
                numCategorias++;
                nivelActual = 0;
            }
            nivelActual++;
        }
        if (numCategorias == 1) {
            cadena += _l(catActual) + " " + nivelActual;
        } else if (numCategorias > 1) {
            cadena += "/" + _l(catActual) + " " + nivelActual;
        }

        return cadena;
    },

//region Datos Personales

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.nombre;
    },

    /**
     *
     * @param {string} nombre
     */
    setNombre : function(nombre) {
        this.nombre = nombre;
        lanzarEvento(EVENT_CHARACTER_SECCION_PERSONALES);
    },

    /**
     *
     * @returns {string}
     */
    getSexo : function() {
        return this.sexo;
    },

    /**
     *
     * @param {string} sexo
     */
    setSexo : function(sexo) {
        this.sexo = sexo;
        lanzarEvento(EVENT_CHARACTER_SECCION_PERSONALES);
    },

    /**
     *
     * @param {string} claseSocial
     */
    setClaseSocial : function(claseSocial) {
        switch (this.claseSocial) {
            case CLASE_SOCIAL_POBRE:
                this.getDinero().addCobre(-5);
                break;
            case CLASE_SOCIAL_MEDIO:
                personaje_actual.getDinero().addOro(-1);
                break;
            case CLASE_SOCIAL_ALTO:
                personaje_actual.getDinero().addOro(-20);
                break;
            case CLASE_SOCIAL_BAJA_NOBLEZA:
                personaje_actual.getDinero().addOro(-150);
        }
        this.claseSocial = claseSocial;
        switch (this.claseSocial) {
            case CLASE_SOCIAL_POBRE:
                this.getDinero().addCobre(5);
                break;
            case CLASE_SOCIAL_MEDIO:
                personaje_actual.getDinero().addOro(1);
                break;
            case CLASE_SOCIAL_ALTO:
                personaje_actual.getDinero().addOro(20);
                break;
            case CLASE_SOCIAL_BAJA_NOBLEZA:
                personaje_actual.getDinero().addOro(150);
        }
        lanzarEvento(EVENT_CHARACTER_SECCION_PERSONALES);
        lanzarEvento(EVENT_CHARACTER_SECCION_EQUIPO);
    },

    /**
     *
     * @returns {string}
     */
    getPeso : function() {
        return ""+this.peso;
    },

    /**
     *
     * @param {string} valor
     */
    setPeso : function(valor) {
        this.peso = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_PERSONALES);
    },

    /**
     *
     * @returns {string}
     */
    getAltura : function() {
        return ""+this.altura;
    },

    /**
     *
     * @returns {string}
     */
    getEstatus : function() {
        return this.claseSocial;
    },

    /**
     *
     * @param {string} valor
     */
    setAltura : function(valor) {
        this.altura = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_PERSONALES);
    },

//endregion Datos Personales

//region Caracteristicas

    /**
     *
     * @param {string} caracteristica
     * @returns {number}
     */
    getCaracteristica : function(caracteristica) {
        return this.caracteristicas[getIndiceCaracteristica(caracteristica)];
    },

    /**
     *
     * @param {string} caracteristica
     * @param {number} valor
     * @throws ERR_VALOR_CARACTERISTICA_ERRONEO
     */
    setCaracteristica : function(caracteristica, valor) {
        var valorEntero = parseInt(valor);
        if ((valorEntero > 0) && (valorEntero <= MAX_CARACTERISTICA)) {
            this.caracteristicas[getIndiceCaracteristica(caracteristica)] = valorEntero;
            lanzarEvento(EVENT_CHARACTER_SECCION_CARACTERISTICAS);
            this.updateBonoyBases();
        } else{
            throw ERR_VALOR_CARACTERISTICA_ERRONEO;
        }
    },

    /**
     *
     * @param {string} caracteristica
     * @returns {number}
     */
    getBonoCaracteristica : function(caracteristica) {
        var valor = this.getCaracteristica(caracteristica);
        return getBonoPorValor(valor);
    },

//endregion Caracteristicas

//region Capacidades Físicas

    /**
     *
     * @returns {number}
     */
    getPuntosCansancio : function() {
        return this.puntosCansancio;
    },

    /**
     *
     * @param {number} valor
     */
    setPuntosCansancio : function(valor) {
        this.puntosCansancio = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES);
    },

    /**
     *
     * @param {number} valor
     */
    addPuntosCansancio : function(valor) {
        this.setPuntosCansancio(this.getPuntosCansancio()+valor);
    },

    /**
     *
     * @returns {number}
     */
    getTipoMovimiento : function() {
        return this.tipoMovimiento;
    },

    /**
     *
     * @returns {number}
     */
    getRegeneracionBase : function() {
        return this.regeneracionBase();
    },

    /**
     *
     * @returns {number}
     */
    getApariencia : function() {
        return this.apariencia;
    },

    /**
     *
     * @param {number} apariencia
     */
    setApariencia : function(apariencia) {
        this.apariencia = apariencia;
        if (apariencia >= 7) {
            this.setFlag(FLAG_APARIENCIA_MINIMA_7);
        } else {
            this.removeFlag(FLAG_APARIENCIA_MINIMA_7);
        }
        lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES);
    },

    /**
     *
     * @returns {number}
     */
    getTamaño : function() {
        return this.tamaño;
    },

    /**
     *
     * @param {number} valor
     */
    setTamaño : function(valor) {
        this.tamaño = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES);
    },

    /**
     *
     * @param {number} valor
     */
    addTamaño : function(valor) {
        this.setTamaño(this.getTamaño()+valor);
    },

    /**
     *
      * @param {boolean} notificar
     */
    updateCapacidadesFisicas : function (notificar) {
        this.tipoMovimiento = this.getCaracteristica(AGI);
        this.puntosCansancio = this.getCaracteristica(CON);
        this.regeneracion = this.regeneracionBase();
        if (notificar)
            lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES);
    },

    /**
     *
     * @returns {number}
     */
    regeneracionBase : function() {
        var regeneracionBase;
        switch (parseInt(this.getCaracteristica(CON))) {
            case 1 :
            case 2 :
                regeneracionBase =  0;
                break;
            case 3 :
            case 4  :
            case 5  :
            case 6  :
            case 7  :
                regeneracionBase =  1;
                break;
            case 8  :
            case 9  :
                regeneracionBase =  2;
                break;
            case 10  :
                regeneracionBase =  3;
                break;
            case 11  :
                regeneracionBase =  4;
                break;
            case 12  :
                regeneracionBase =  5;
                break;
            case 13  :
                regeneracionBase =  6;
                break;
            case 14  :
                regeneracionBase =  7;
                break;
            case 15  :
                regeneracionBase =  8;
                break;
            case 16  :
                regeneracionBase =  9;
                break;
            case 17  :
                regeneracionBase =  10;
                break;
            case 18  :
                regeneracionBase =  11;
                break;
            case 19  :
            case 20  :
                regeneracionBase =  12;
                break;
        }
        return regeneracionBase;
    },

    /**
     *
      * @param {boolean} notificar
     */
    updateBonosTurnoCarac : function (notificar) {
        var bonoDES = new Bono(BONO_TURNO,BONO_TURNO,this.getBonoCaracteristica(DES),"",false,BONO_CARACTERISTICA,DES3);
        this.addBono(bonoDES, true, false);

        var bonoAGI = new Bono(BONO_TURNO,BONO_TURNO,this.getBonoCaracteristica(AGI),"",false,BONO_CARACTERISTICA,AGI3);
        this.addBono(bonoAGI, true, false);
        if (notificar)
            lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES);
    },

//endregion Capacidades Físicas

//region Resistencias
    /**
     *
     * @param {boolean} notificar
     */
    updateBonosResistenciasCarac : function (notificar) {
        var bonoRF = new Bono(BONO_RESISTENCIA,RF,this.getBonoCaracteristica(CON),"",false,BONO_CARACTERISTICA,CON3);
        this.addBono(bonoRF, true, false);

        var bonoRE = new Bono(BONO_RESISTENCIA,RE,this.getBonoCaracteristica(CON),"",false,BONO_CARACTERISTICA,CON3);
        this.addBono(bonoRE, true, false);

        var bonoRV = new Bono(BONO_RESISTENCIA,RV,this.getBonoCaracteristica(CON),"",false,BONO_CARACTERISTICA,CON3);
        this.addBono(bonoRV, true, false);

        var bonoRM = new Bono(BONO_RESISTENCIA,RM,this.getBonoCaracteristica(POD),"",false,BONO_CARACTERISTICA,POD3);
        this.addBono(bonoRM, true, false);

        var bonoRP = new Bono(BONO_RESISTENCIA,RP,this.getBonoCaracteristica(VOL),"",false,BONO_CARACTERISTICA,VOL3);
        this.addBono(bonoRP, true, false);
        if (notificar)
            lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
    },
//endregion Resistencias

//region Puntos de Vida
    /**
     *
     * @returns {number}
     */
    getPv : function() {
        return this.pv;
    },

    /**
     *
     * @param {boolean} notificar
     */
    updateMultiplosVida : function (notificar) {
        var valorBono = (this[HB_MULTIPLO_VIDA].valorBase(this.getCostePV())) * this.getCaracteristica(CON);

        var bono = new Bono(BONO_PV,BONO_PV,valorBono,"",false,BONO_ESPECIAL,ORIGEN_MULTIPLO_VIDA);
        this.addBono(bono, true, false);
        if (notificar)
            lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES);
    },

    /**
     *
     * @returns {number}
     */
    pvBase : function() {
        var pvbase;
        switch (parseInt(this.getCaracteristica(CON))) {
            case 1 :
                pvbase =  5;
                break;
            case 2 :
                pvbase =  20;
                break;
            case 3 :
                pvbase =  40;
                break;
            case 4  :
                pvbase =  55;
                break;
            case 5  :
                pvbase =  70;
                break;
            case 6  :
                pvbase =  85;
                break;
            case 7  :
                pvbase =  95;
                break;
            case 8  :
                pvbase =  110;
                break;
            case 9  :
                pvbase =  120;
                break;
            case 10  :
                pvbase =  135;
                break;
            case 11  :
                pvbase =  150;
                break;
            case 12  :
                pvbase =  160;
                break;
            case 13  :
                pvbase =  175;
                break;
            case 14  :
                pvbase =   185;
                break;
            case 15  :
                pvbase =  200;
                break;
            case 16  :
                pvbase =  215;
                break;
            case 17  :
                pvbase =  225;
                break;
            case 18  :
                pvbase =  240;
                break;
            case 19  :
                pvbase =  250;
                break;
            case 20  :
                pvbase =  265;
                break;
        }
        return pvbase;
    },

    /**
     *
     * @returns {number}
     */
    getCostePV : function() {
        return this.categoria.multiploDeVida;
    },
//endregion Puntos de Vida

//region Raza
    /**
     * Devuelve la raza del personaje
     * @returns {Raza}
     */
    getRaza : function() {
        return this.raza;
    },

    /**
     * Aplica la raza indicada al personaje y asigna sus ventajas. Antes elimina la raza actual del mismo y elimina sus ventajas.
     * @param {Raza} raza
     */
    setRaza : function(raza) {
        var i;

        /*Elimina todas las ventajas de origen racial*/
        this.eliminarElementosPCPorCampo("origen",ORIGEN_RAZA);

        this.raza = raza;

        for (i = 0; i < raza.ventajas.length; i++) {
            this.addVentaja(raza.ventajas[i],0,"",ORIGEN_RAZA,true,new RepartoCostes(),false);
        }

        for (i = 0; i < raza.desventajas.length; i++) {
            this.addVentaja(raza.desventajas[i],0,"",ORIGEN_RAZA,false,new RepartoCostes(),false);
        }

        this.ordenarElementosPC();
        lanzarEvento(EVENT_CHARACTER_SECCION_PERSONALES);
    },
//endregion Raza

//region Categoría

    /**
     * Devuelve la categoría actual del personaje
     * @returns {Categoria}
     */
    getCategoria : function() {
        return this.categoria;
    },

    /**
     * Devuelve la categoría del personaje en el nivel indicado.
     * @param {number} nivel Igual o inferior al nivel actual.
     * @returns {Categoria}
     * @throws ERR_NIVEL_ERRONEO
     */
    getCategoriaPorNivel : function(nivel) {
        if (nivel <= this.nivel)
            return this.categoriasPorNiveles[nivel];
        else
            throw ERR_NIVEL_ERRONEO;
    },

    /**
     * Devuelve la cantidad de niveles con la categoría indicada que tiene el personaje, hasta el tope del nivel indicado
     * @param {string} nombreCategoria
     * @param {number} nivel
     * @returns {number}
     */
    getNivelesDeCategoriaHastaNivel : function(nombreCategoria,nivel) {
        var niveles = 0;
        for (var i = 1; i <= nivel; i++) {
            if (this.categoriasPorNiveles[i].getNombre() == nombreCategoria) {
                niveles++;
            }
        }
        return niveles;
    },

    /**
     * Indica si la categoria indicada es ya una elegida en niveles confirmados previos por el personaje
     * @param {string} nombreCategoria
     * @returns {boolean}
     */
    esCategoriaPrevia : function(nombreCategoria) {
        var categoriaPrevia = false;
        for (var i = 0; i <= this.nivelGeneracionTerminada;i++) {
            if (this.categoriasPorNiveles[i].getNombre() == nombreCategoria) {
                categoriaPrevia = true;
                break;
            }
        }
        return categoriaPrevia;
    },

    /**
     * Asigna la categoría al personaje. Se asigna la categoría a cada nivel desde el último nivel confirmado (nivelGeneracionTerminada).
     * @param {Categoria} categoria
     */
    setCategoria : function(categoria) {
        //Si la categoria actual no es una confirmada previamente, se eliminan sus bonos
        if (!this.esCategoriaPrevia(this.categoria.getNombre())) {
            this.bonos = limpiarArrayObjetosPorCampo(this.bonos,"origen",ORIGEN_CATEGORIA);
        }
        //Si es la primera vez que se asigna esta categoria, se crean los bonos
        if (!this.esCategoriaPrevia(categoria.getNombre())) {
            var bonoPv = new Bono(BONO_PV,BONO_PV,categoria.pvPorNivel,"", true,BONO_CATEGORIA,ORIGEN_CATEGORIA,{categoriaPersonaje:categoria.getNombre()});
            this.addBono(bonoPv,false,false);
            var bonoTurno = new Bono(BONO_TURNO,BONO_TURNO,categoria.turnoPorNivel,"", true,BONO_CATEGORIA,ORIGEN_CATEGORIA,{categoriaPersonaje:categoria.getNombre()});
            this.addBono(bonoTurno,false,false);
            var bonoCM = new Bono(BONO_CM,BONO_CM,categoria.CMPorNivel,"", true,BONO_CATEGORIA,ORIGEN_CATEGORIA,{categoriaPersonaje:categoria.getNombre()});
            this.addBono(bonoCM,false,false);

            var bonosInnatos = categoria.getBonosInnatos();
            for (var i = 0; i < bonosInnatos.length; i++) {
                this.addBono(bonosInnatos[i],false,false);
            }
        }

        this.ajustarCambiosPDPorCambiosCategoria(categoria);

        for (i = this.nivelGeneracionTerminada+1; i <= this.nivel; i++) {
            this.categoriasPorNiveles[i] = categoria;
        }

        this.categoria = categoria;

        if (this.categoria.getNombre() == CAT_NOVEL) {
            /**
             *
             * @type {string[][]}
             */
            if (!this.esCategoriaPrevia(CAT_NOVEL)) {
                this.bonoNovel = [];
            }
            this.bonoNovel[this.nivel] = ["","","","",""];
        } else {
            if (!this.esCategoriaPrevia(CAT_NOVEL)) {
                delete this.bonoNovel;
            }
        }

        this.updateNivelesPDHabilidades();

        lanzarEvento(EVENT_CHARACTER_SECCION_ARTES_MARCIALES);
        lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES);
        lanzarEvento(EVENT_CHARACTER_SECCION_CARACTERISTICAS);
        lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
        lanzarEvento(EVENT_CHARACTER_SECCION_DESVENTAJAS);
        lanzarEvento(EVENT_CHARACTER_SECCION_ELAN);
        lanzarEvento(EVENT_CHARACTER_SECCION_KI);
        lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
        lanzarEvento(EVENT_CHARACTER_SECCION_PERSONALES);
        lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
        lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
        lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
        lanzarEvento(EVENT_CHARACTER_SECCION_VENTAJAS);
    },
//endregion Categoría

//region Armadura
    /**
     *
     * @param {string} taArmadura
     * @returns {number}
     */
    getArmadura : function(taArmadura) {

        //TODO completar calculo de armadura combinada

        return this.armaduraNatural.getTA(taArmadura);
    },

    /**
     *
     * @returns {TipoArmadura}
     */
    getArmaduraNatural : function() {
        return this.armaduraNatural;
    },

    /**
     *
     * @param {number[]} taArmadura
     */
    setArmaduraNatural : function(taArmadura) {
        this.armaduraNatural = new TipoArmadura(ARMADURA_NATURAL,taArmadura,true);
        lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
    },

    /**
     *
     * @param {number[]} armadura
     */
    addCapaArmadura : function(armadura) {
        this.capasArmadura.push(armadura);
        lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
    },

//endregion Armadura

//region Elan

    /**
     *
     * @param {Elan} elan
     */
    addElan : function(elan) {
        this.elan.push(elan);
        lanzarEvento(EVENT_CHARACTER_SECCION_ELAN);
    },

    /**
     *
     * @param {string} nombreElan
     */
    removeElan : function(nombreElan) {
        var elanLimpio = [];
        var i;
        var j;
        var k;
        for (i = 0; i < this.elan.length; i++) {
            if (this.elan[i].getNombre() != nombreElan) {
                elanLimpio.push(this.elan[i]);
            } else {
                var donesElan = this.elan[i].getDones();
                for (k = 0; k < donesElan.length; k++) {
                    var ventajasDon = donesElan[k].getVentajasConcedidas();
                    for (j = 0; j < ventajasDon.length; j++) {
                        var ventaja = getVentaja(ventajasDon[j]);
                        this.removeVentaja(new ElementoPCComprado(ventaja,0,"",ORIGEN_ELAN));
                    }
                }
            }
        }
        this.elan = elanLimpio;
        lanzarEvento(EVENT_CHARACTER_SECCION_ELAN);
    },

    /**
     *
     * @param {string} nombreElan
     * @param {DonElan} don
     */
    addDonElan : function(nombreElan, don) {
        var i;
        for (i = 0; i < this.elan.length; i++) {
            if (this.elan[i].nombre == nombreElan) {
                this.elan[i].addDon(don);
                this.elan[i].sincGastada += don.coste;
            }
        }
        for (i = 0; i < don.ventajasConcedidas.length; i++) {
            var ventaja = getVentaja(don.ventajasConcedidas[i]);
            if (ventaja.getElegir().length > 0) {
                prepararEleccionVentajaElan(ventaja);
            } else {
                this.addVentaja(ventaja,0,"",ORIGEN_ELAN,true,new RepartoCostes(),false);
            }
        }
        this.ordenarElementosPC();
        lanzarEvento(EVENT_CHARACTER_SECCION_ELAN);
    },

    /**
     *
     * @param {string} nombreElan
     * @returns {number}
     */
    getSincronizacionElan : function(nombreElan) {
        for (var i = 0; i < this.elan.length; i++) {
            if (this.elan[i].getNombre() == nombreElan) {
                return this.elan[i].getSincronizacion();
            }
        }
        return 0;
    },

    /**
     *
     * @param {string} nombreElan
     * @param {number} valor
     */
    addSincronizacionElan : function(nombreElan, valor) {
        for (var i = 0; i < this.elan.length; i++) {
            if (this.elan[i].getNombre() == nombreElan) {
                this.elan[i].addSincronizacion(valor);
                lanzarEvento(EVENT_CHARACTER_SECCION_ELAN);
                break;
            }
        }
    },

    /**
     *
     * @returns {Elan[]}
     */
    getElan : function() {
        return this.elan;
    },
//endregion Elan

//region Magia
    /**
     *
     * @returns {number}
     */
    nivelMagiaMaximo : function() {
        if (this.hasFlag(FLAG_DON)) {
            return nivelMagiaMaximoPorInteligencia(this.getCaracteristica(INT));
        } else {
            return 0;
        }
    },

    /**
     * returns {number}
     */
    getNivelMaximoViaMagia : function() {
        if (this.gnosis > 40) {
            return 100;
        } else if (this.gnosis >= 25) {
            return 90;
        } else {
            return 80;
        }
    },

    /**
     *
     * @returns {number}
     */
    getNivelMagiaGastado : function() {
        return this.nivelMagiaGastado;
    },

    /**
     *
     * @returns {number}
     */
    getNivelMagiaGastadoPrevio : function() {
        return this.nivelMagiaGastadoPrevio;
    },

    /**
     *
     * @param {number} valor
     * @throws ERR_OVERFLOW_NIVEL Si se pretende llevar los niveles gastados a menos de lo confirmado en niveles previos
     */
    addNivelMagiaGastado : function(valor) {
        if (this.nivelMagiaGastado + valor >= this.nivelMagiaGastadoPrevio) {
            this.nivelMagiaGastado += valor;
            lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
        } else {
            throw ERR_OVERFLOW_NIVEL;
        }
    },

    /**
     *
     * @returns {NivelEnVia[]}
     */
    getViasMagia : function() {
        return this.viasMagia;
    },

    /**
     *
     * @param {string} nombreVia
     */
    removeViaMagia : function(nombreVia) {
        var viasLimpias = [];

        var yaEliminada = false;

        var opuestaDeLaEliminada = "";

        for (var i = 0; i < this.viasMagia.length;i++) {
            if (this.viasMagia[i].getVia().getNombre() != nombreVia) {
                viasLimpias.push(this.viasMagia[i]);
                viasLimpias[this.viasMagia[i].getVia().getNombre()] = this.viasMagia[i];
                if (yaEliminada) {
                    if ((opuestaDeLaEliminada == TODAS_VIAS) || (opuestaDeLaEliminada == this.viasMagia[i].getVia().getNombre())) {
                        this.addNivelMagiaGastado(-1 * this.viasMagia[i].getNivel());
                    } else {
                        if ((this.viasMagia[i].getVia().getOpuestas() == TODAS_VIAS) && (i == 1)) {
                            this.addNivelMagiaGastado(-1 * this.viasMagia[i].getNivel());
                        }
                    }
                }
            } else {
                if (this.viasMagia[i].isAnulable()) {
                    opuestaDeLaEliminada = this.viasMagia[i].getVia().getOpuestas();
                    yaEliminada = true;
                    delete this.viasMagia[nombreVia];
                } else {
                    return;
                }
            }
        }

        this.viasMagia = viasLimpias;
        lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
    },

    /**
     *
     * @param {string} nombreVia
     * @param {number} nivel
     */
    addNivelVia : function(nombreVia, nivel) {
        if (this.hasVia(nombreVia)) {
            this.viasMagia[nombreVia].addNivel(nivel);
            if (this.viasMagia[nombreVia].getNivel() == 0) {
                this.removeViaMagia(nombreVia);
            }
        } else {
            var via = getVia(nombreVia);
            var nivelEnVia = new NivelEnVia(via,nivel);
            this.viasMagia.push(nivelEnVia);
            this.viasMagia[nombreVia] = nivelEnVia;
        }
        lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
    },

    /**
     *
     * @param {string} nombreVia
     * @returns {number}
     */
    getNivelMinimoVia : function(nombreVia) {
        var nivelMinimo = 0;

        if (this.hasVia(nombreVia)) {
            nivelMinimo = this[nombreVia].getNivelMinimoVia();
        }

        return nivelMinimo;
    },

    /**
     *
     * @param {string} nombreVia
     * @param {number} nivelMinimo
     */
    setNivelMinimoVia : function(nombreVia, nivelMinimo) {
        if (this.hasVia(nombreVia)) {
            this.viasMagia[nombreVia].setNivelMinimo(nivelMinimo);
        }
    },

    /**
     *
     * @param {string} nombreVia
     * @returns {boolean}
     */
    hasVia : function(nombreVia) {
        return (this.viasMagia[nombreVia] != undefined);
    },

    /**
     *
     * @param {string} nombreVia
     * @returns {number}
     */
    getCosteVia : function(nombreVia) {
        if (this.hasFlag(FLAG_MAGIA_OPUESTA)) {
            return 1;
        }

        if (this.viasMagia.length == 0) {
            return 1;
        }

        if ((nombreVia == VIA_NIGROMANCIA) && (this.viasMagia[0].getVia().getNombre() != nombreVia)) {
            return 2;
        }

        for (var i = 0; i < this.viasMagia.length;i++) {
            if (this.viasMagia[i].getVia().getNombre() == nombreVia) {
                return 1;
            } else if ((this.viasMagia[i].getVia().getOpuestas() == nombreVia) ||(this.viasMagia[i].getVia().getOpuestas() == TODAS_VIAS)) {
                return 2;
            }
        }
        return 1;
    },

    /**
     *
     * @returns {number}
     */
    getIntAprenderConjuros : function() {
        var valor = this.getCaracteristica(INT);

        var bonos = this.getBonos(BONO_INT_APRENDER_CONJURO,"",CATEGORIA_BONO_CUALQUIERA);

        for (var i = 0; i < bonos.length; i++) {
            valor += bonos[i].getBonoParaNivel(this.nivel,personaje_actual);
        }

        return valor;
    },

    /**
     *
     * @returns {number}
     */
    getZeonMagiaInnata : function() {
        var zeon = calculaZeonMagiaInnata(this[HB_ACT].valorFinalActual());

        var bonos = this.getBonos(BONO_MAGIA_INNATA,"",CATEGORIA_BONO_CUALQUIERA);

        for (var i = 0; i < bonos.length; i++) {
            zeon += bonos[i].getBonoParaNivel(this.nivel,personaje_actual);
        }

        return zeon;
    },

    /**
     *
     * @param {string} nombreVia
     * @param {number} nivel
     * @param {Conjuro} conjuro
     * @throws ERROR
     */
    addLibreAcceso : function(nombreVia, nivel, conjuro) {
        if (!this.hasFlag(FLAG_LAZO_EXISTENCIAL)) {
            var conjuroLibre = getConjuroLibreAprendido(conjuro,nivel);
            if (this.hasVia(nombreVia)) {
                if (this.viasMagia[nombreVia].getNivel() >= nivel) {
                    this.viasMagia[nombreVia].addConjuroLibre(conjuroLibre,nivel);
                    lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
                } else {
                    throw "Nivel en vía insuficiente";
                }
            } else {
                throw "Via desconocida";
            }
        } else {
            throw "No puede aprender libre acceso por Lazo Existencial";
        }
    },

    /**
     *
     * @param {Conjuro} conjuro
     * @throws ERROR
     */
    addConjuroSuelto : function(conjuro) {
        if (!this.hasFlag(FLAG_LAZO_EXISTENCIAL)) {
            var coste = costeConjuroSuelto(conjuro.getNivel());
            if (this.nivelMagiaMaximo() - this.getNivelMagiaGastado() >= coste) {
                this.conjurosSueltos.push(conjuro);
                this.addNivelMagiaGastado(coste);
                lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
            } else {
                throw  "Niveles de via insuficientes";
            }
        } else {
            throw "No puede aprender conjuro suelto por Lazo Existencial";
        }
    },

    /**
     *
     * @returns {Conjuro[]}
     */
    getConjurosSueltos : function() {
        return this.conjurosSueltos;
    },
//endregion Magia

//region Bonos y Costes Reducidos
    /**
     *
     * @param {Bono} bono
     */
    dispatchAvisoPorBono : function(bono) {
        switch (bono.getTipo()) {
            case BONO_HABILIDAD :
                lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
                lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
                lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
                lanzarEvento(EVENT_CHARACTER_SECCION_KI);
                lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
                break;
            case BONO_CM :
            case BONO_KI :
                lanzarEvento(EVENT_CHARACTER_SECCION_KI);
                break;
            case BONO_DAÑO :
            case BONO_ROTURA :
            case BONO_ENTEREZA:
                lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
                break;
            case BONO_TURNO :
            case BONO_PV :
            case BONO_TAMAÑO :
            case BONO_REGENERACION:
                lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES);
                break;
            case BONO_RESISTENCIA :
                lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
                break;
            case BONO_MAGIA_INNATA :
            case BONO_INT_APRENDER_CONJURO :
                lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
                break;
        }
    },

    /**
     *
     * @param {Bono} bono
     * @param {boolean} [reemplaza=false] Por defecto es false
     * @param {boolean} [notifica=true] Por defecto es true
     */
    addBono : function (bono, reemplaza, notifica) {
        reemplaza = reemplaza || false; //¡¡linea estúpida!!
        if (notifica == undefined)
            notifica = true;

        var yaExiste = false;
        for (var i = 0; i < this.bonos.length; i++) {
            if ((bono.getTipo() == this.bonos[i].getTipo()) &&
                (bono.getItem() == this.bonos[i].getItem()) &&
                (bono.getOpcion() == this.bonos[i].getOpcion()) &&
                (bono.getOrigen() == this.bonos[i].getOrigen()) &&
                (bono.getCategoria() == this.bonos[i].getCategoria())) {
                if (reemplaza) {
                    this.bonos[i] = bono;
                    if (notifica)
                        this.dispatchAvisoPorBono(bono);
                }
                yaExiste = true;
                break;
            }
        }

        if (!yaExiste) {
            this.bonos.push(bono);
            if (notifica)
                this.dispatchAvisoPorBono(bono);
        }
    },

    /**
     *
     * @param {Bono} bono
     * @param {boolean} notifica
     */
    removeBono : function (bono, notifica) {
        var bonosLimpios = [];
        for (var i = 0; i < this.bonos.length; i++) {
            if ((bono.getTipo() == this.bonos[i].getTipo()) &&
                (bono.getItem() == this.bonos[i].getItem()) &&
                (bono.getOpcion() == this.bonos[i].getOpcion()) &&
                (bono.getOrigen() == this.bonos[i].getOrigen()) &&
                (bono.getCategoria() == this.bonos[i].getCategoria()) &&
                (bono.isPorNivel() == this.bonos[i].isPorNivel())) {
                if (notifica)
                    this.dispatchAvisoPorBono(this.bonos[i]);
            } else {
                bonosLimpios.push(this.bonos[i]);
            }
        }

        this.bonos = bonosLimpios;
    },

    /**
     *
     * @param {string} tipo
     * @param {string} opcion
     * @param {string} categoria
     * @returns {Bono[]}
     */
    getBonos : function(tipo, opcion, categoria) {
        var bonosElegidos = [];
        var esHabilidad = (tipo == BONO_HABILIDAD);
        var habi;
        var tipoHabilidad;

        if (esHabilidad) {
            habi = this.getHabilidadDePersonaje(opcion);
            tipoHabilidad = habi.getTipo();
        }


        for (var i = 0; i < this.bonos.length ; i++) {
            /** @type {Bono} */
            var esteBono = this.bonos[i];

            if (((esteBono.tipo == tipo) && (esteBono.item == opcion)) || ((esHabilidad) && (esteBono.tipo == tipo) && (esteBono.item == tipoHabilidad))) {
                if ((categoria == CATEGORIA_BONO_CUALQUIERA) || (esteBono.getCategoria() == categoria)) {
                    bonosElegidos.push(esteBono);
                }
            }
        }

        if (esHabilidad) {

            if (!this.hasFlag(FLAG_SIN_BONIFICADOR_NATURAL)) {
                if (habi.getMultiploBonificadorNatural() > 0) {
                    var bonoNatural = new Bono(BONO_HABILIDAD,habi.nombre,habi.multiploBonificadorNatural*personaje_actual.getBonoCaracteristica(habi.getCaracteristica()),"",false,BONO_NATURAL,ORIGEN_BONIFICADOR_NATURAL);
                    bonosElegidos.push(bonoNatural);
                }
            }
        }

        return bonosElegidos;
    },

    /**
     *
     * @param {string} opcion
     * @param {number} coste
     */
    removeCosteReducido : function(opcion,coste) {
        var costesLimpios = [];
        for (var i = 0; i < this.costesReducidos.length;i++) {
            var costeReducido = this.costesReducidos[i];

            if ((costeReducido.getNombre() != opcion) ||
                (costeReducido.getCoste() != coste)) {
                costesLimpios.push(costeReducido);
            }
        }
        this.costesReducidos = costesLimpios;
        lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
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
     * @param {Coste} costeReducido
     */
    addCosteReducido : function(costeReducido) {
        this.costesReducidos.push(costeReducido);
        var yaAnulado = false;
        if (notificacionesActivas) {
            desactivarNotificaciones();
        } else {
            yaAnulado = true;
        }
        this.updateNivelesPDHabilidades();
        if (!yaAnulado) {
            activarNotificaciones();
        }
        lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
    },
//endregion Bonos y Costes Reducidos

//region Bonificadores Naturales
    /**
     *
     * @param {string} nombreHabilidad
     * @param {string} tipoBonificadorNatural
     * @param {number} nivel
     */
    addBonificadorNatural : function(nombreHabilidad,tipoBonificadorNatural,nivel) {
        var bonificadorNatural = this.bonificadoresNaturales[nivel];

        var habilidadPrevia = bonificadorNatural[tipoBonificadorNatural];

        if (habilidadPrevia != "") {
            this.getHabilidadDePersonaje(habilidadPrevia).addMultiploBonificadorNatural(-1);
        }

        this.getHabilidadDePersonaje(nombreHabilidad).addMultiploBonificadorNatural(1);
        if (tipoBonificadorNatural == TIPO_BONIFICADOR_NATURAL_FISICO) {
            this.bonificadoresNaturales[nivel].setFisico(nombreHabilidad);
        } else if (tipoBonificadorNatural == TIPO_BONIFICADOR_NATURAL_MENTAL) {
            this.bonificadoresNaturales[nivel].setMental(nombreHabilidad);
        } else {
            this.bonificadoresNaturales[nivel].setExtra(nombreHabilidad);
        }

        lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
    },

    /**
     *
     * @param {string} tipoBonificadorNatural
     * @param {number} nivel
     * @returns {string}
     */
    getBonificadorNatural : function(tipoBonificadorNatural,nivel) {
        if (tipoBonificadorNatural == TIPO_BONIFICADOR_NATURAL_FISICO) {
            return this.bonificadoresNaturales[nivel].getFisico();
        } else if (tipoBonificadorNatural == TIPO_BONIFICADOR_NATURAL_MENTAL) {
            return this.bonificadoresNaturales[nivel].getMental();
        } else {
            return this.bonificadoresNaturales[nivel].getExtra();
        }
    },

    /**
     *
     * @param {Bono} bono
     * @param {number} indice
     */
    addBonoHabilidadNatural : function(bono, indice) {
        var yaExiste = false;
        for (var i = 0; i < this.bonos.length; i++) {
            if ((bono.getTipo() == this.bonos[i].getTipo()) && (bono.getOrigen() == this.bonos[i].getOrigen()) &&
                (bono.getCategoria() == this.bonos[i].getCategoria()) && (indice == this.bonos[i].indice) && (this.nivel == this.bonos[i].nivel)) {

                this.bonos[i] = bono;
                lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
                yaExiste = true;
                break;
            }
        }

        if (!yaExiste) {
            this.bonos.push(bono);
            lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
        }
    },

    /**
     * Devuelve -1 si no existe
     * @param {number} indice
     * @param {number} nivel
     * @returns {Bono|number}
     */
    getBonoHabilidadNatural : function(indice,nivel) {
        for (var i = 0; i < this.bonos.length; i++) {
            if ((this.bonos[i].getCategoria() == BONO_NATURAL) && (this.bonos[i].indice == indice) && (nivel == this.bonos[i].nivel)) {
                return this.bonos[i];
            }
        }
        return -1;
    },

    /**
     *
     * @param {number} indice
     * @param {number} nivel
     * @returns {string}
     */
    getBonoNovel : function(indice, nivel) {
        return this.bonoNovel[nivel][indice];
    },
//endregion Bonificadores Naturales

//region Puntos de Desarrollo

    /**
     *
     * @returns {number}
     */
    getPDLibres : function() {
        return this.PD_libres;
    },

    /**
     *
     * @returns {number}
     */
    getPDTotales : function() {
        return this.PD_totales;
    },

    /**
     *
     * @param {number} valor
     */
    addPDLibres : function(valor) {
        this.setPDLibres(this.getPDLibres()+valor);
    },

    /**
     *
     * @param {number} valor
     */
    setPDLibres : function(valor) {
        this.PD_libres = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
    },
//endregion Puntos de Desarrollo

//region Puntos de Construcción
    /**
     * Devuelve todos los PC + aumentos de caracteristica libres que se pueden gastar en cualquier ventaja
     * @returns {number}
     */
    getPCLibres : function() {
        return this.PC_libres_generales + this.getAumentosCaracteristicasLibres();
    },

    /**
     * Devuelve el conjunto de todos los PC
     * @returns {number}
     */
    getPCTotales : function() {
        return this.PC_generales+this.PC_don+this.PC_psiquicas;
    },

    /**
     * repasa todas las desventajas y luego las ventajas, gastando los pc en orden
     */
    updatePC : function() {
        var i,j;
        this.PC_don = 0;
        this.PC_psiquicas = 0;
        this.PC_generales = 3;


        var desactivado = false;
        if (notificacionesActivas) {
            desactivado = true;
            desactivarNotificaciones();
        }

        this.liberaAumentos("PC");

        for (i = 0; i < this.desventajas.length;i++) {
            if (this.desventajas[i].getVentaja().getGrupo() == GRUPO_DON) {
                this.PC_don -= this.desventajas[i].getPc();
            } else if (this.desventajas[i].getVentaja().getGrupo() == GRUPO_PSIQUICAS) {
                this.PC_psiquicas -= this.desventajas[i].getPc();
            } else if (this.desventajas[i].getVentaja().getGrupo() != GRUPO_RAZAS) {
                this.PC_generales -= this.desventajas[i].getPc();
            }
        }

        this.PC_libres_don = this.PC_don;
        this.PC_libres_psiquicas = this.PC_psiquicas;
        this.PC_libres_generales = this.PC_generales;

        for (i = 0; i < this.ventajas.length;i++) {
            if (((this.ventajas[i].getVentaja().getGrupo() == GRUPO_DON)) && !(this.ventajas[i].getVentaja().isBasica)) {
                this.PC_libres_don -= this.ventajas[i].getPc();
            } else if ((this.ventajas[i].getVentaja().getGrupo() == GRUPO_PSIQUICAS) && !(this.ventajas[i].getVentaja().isBasica)) {
                this.PC_libres_psiquicas -= this.ventajas[i].getPc();
            } else if (this.ventajas[i].getVentaja().getGrupo() != GRUPO_RAZAS){
                this.PC_libres_generales -= this.ventajas[i].getPc();
            }
        }

        if (this.PC_libres_don < 0) {
            this.PC_libres_generales += this.PC_libres_don;
            this.PC_libres_don = 0;
        }
        if (this.PC_libres_psiquicas < 0) {
            this.PC_libres_generales += this.PC_libres_psiquicas;
            this.PC_libres_psiquicas = 0;
        }
        if (this.PC_libres_generales < 0) {
            var aumentosAGastar = 0 - this.PC_libres_generales;
            this.PC_libres_generales = 0;
        }

        if (aumentosAGastar > 0) {
            for (i = 0; i < aumentosAGastar; i++) {
                this.gastaAumentoDeCaracteristicas("PC");
            }
        }
        if (desactivado) {
            activarNotificaciones();
        }
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
    },

    /**
     *
     * @returns {number}
     */
    getAumentosCaracteristicasLibres : function() {
        var libres = 0;

        for (var i = 0; i < this.aumentosCaracteristicas.length; i++) {
            if (this.aumentosCaracteristicas[i].isLibre()) {
                libres++;
            }
        }

        return libres;
    },

    /**
     *
     * @param {string} carac
     * @returns {boolean}
     */
    aumentoGastadoEn : function(carac) {
        var tiene = false;

        for (var i = 0; i < this.aumentosCaracteristicas.length; i++) {
            if (this.aumentosCaracteristicas[i].gastadoEnCaracteristica(carac)) {
                tiene = true;
                break;
            }
        }

        return tiene;
    },

    /**
     * Marca como gastado un aumento de caracteristicas para el uso indicado
     * @param {string} uso
     */
    gastaAumentoDeCaracteristicas : function(uso) {
        if (this.getAumentosCaracteristicasLibres() > 0) {
            for (var i = 0; i < this.aumentosCaracteristicas.length; i++) {
                if (this.aumentosCaracteristicas[i].isLibre()) {
                    this.aumentosCaracteristicas[i].gasta(uso);
                    break;
                }
            }
        }
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
    },

    liberaAumentos : function(uso) {
        for (var i = 0; i < this.aumentosCaracteristicas.length; i++) {
            if ((this.aumentosCaracteristicas[i].getUso() == uso) && (this.aumentosCaracteristicas[i].isAnulable())){
                this.aumentosCaracteristicas[i].libera();
            }
        }
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
    },

    recuperaAumentoDeCaracteristicas : function(uso) {
        var recuperado = false;
        for (var i = 0; i < this.aumentosCaracteristicas.length; i++) {
            if ((this.aumentosCaracteristicas[i].getUso() == uso) && (this.aumentosCaracteristicas[i].isAnulable())){
                this.aumentosCaracteristicas[i].libera();
                recuperado = true;
                break;
            }
        }
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
        return recuperado;
    },

    /**
     *
     * @returns {boolean}
     */
    hasAumentoDeCaracteristicasLibre : function() {
        return (this.getAumentosCaracteristicasLibres() > 0);
    },

    /**
     *
     * @param {number} coste
     * @param {string} [grupoPC="PC_libres"]
     */
/*    gastaPC : function(coste, grupoPC) {
        grupoPC = grupoPC || "PC_libres_generales";

        if (coste > this.getPC(grupoPC)) {
            if (coste <= this.getPC(grupoPC)+this.aumentosCaracteristicasLibres) {
                this.aumentosCaracteristicasLibres -= coste -  this.getPC(grupoPC);
                this.setPC(0,grupoPC);
            }
        } else {
            this.setPC(this.getPC(grupoPC)-coste,grupoPC);
        }
    },*/

    /**
     *
     * @param {string} [grupoPC="PC_libres_generales"]
     * @returns {number}
     */
    getPC : function(grupoPC) {
        grupoPC = grupoPC || "PC_libres_generales";
        return this[grupoPC];
    },

    /**
     *
     * @param {number} valor
     * @param {string} [grupoPC="PC_libres"]
     */
    setPC : function(valor, grupoPC) {
        grupoPC = grupoPC || "PC_libres_generales";
        this[grupoPC] = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
    },
//endregion Puntos de Construcción

//region PX y nivel
    /**
     *
     * @returns {number}
     */
    getPX : function() {
        return this.px;
    },

    /**
     *
     * @param {number} valor
     */
    setPX : function(valor) {
        this.px = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
    },

    /**
     *
     * @param {number} valor
     */
    addPX : function(valor) {
        this.setPX(this.getPX()+valor);
    },

    /**
     *
     * @returns {number}
     */
    getNivelGeneracionTerminada : function() {
        return this.nivelGeneracionTerminada;
    },

    /**
     *
     * @param numNiveles
     */
    subeNivel : function(numNiveles) {
        if (numNiveles > 0) {
            var i;

            if (this.cambioCategoria) {
                if (this.nivel+numNiveles >= this.cambioCategoria) {
                    numNiveles = this.cambioCategoria-this.nivel;
                    this.setCategoria(this.proximaCategoria);
                    this.cambioCategoria = false;
                }
            }

            this.PD_libresPrevios = this.PD_libres;
            this.PD_libres += 100*numNiveles;
            this.PD_totales += 100*numNiveles;

            for (i = this.nivel+1;i <= this.nivel+numNiveles;i++) {
                if (i % 2 == 0) {
                    this.aumentosCaracteristicas.push(new AumentoCaracteristicas());
                }
                this.bonificadoresNaturales[i] = new BonificadorNatural();
                if (this.bonoNovel) {
                    if (this.categoria.getNombre() == CAT_NOVEL) {
                        this.bonoNovel[i] = ["","","","",""];
                    }
                }
                this.categoriasPorNiveles[i] = this.categoria;
            }

            for (i = 0; i < this.caracteristicas.length;i++) {
                this.caracteristicasPrevias[i] = this.caracteristicas[i];
            }

            for (i = 0; i < this.aumentosCaracteristicas.length;i++) {
                if (this.aumentosCaracteristicas[i].isAnulable()) {
                    this.caracteristicasPrevias[i].fija();
                }
            }

            for (i = 0; i < this.viasMagia.length;i++) {
                this.viasMagia[i].setNivelMinimo(this.viasMagia[i].getNivel());
                this.viasMagia[i].setAnulable(false);
            }
            this.nivelMagiaGastadoPrevio = this.nivelMagiaGastado;

            for (i=0; i < this.allHabilidades.length; i++)  {
                this.allHabilidades[i].subirNivel();
            }

            for (i=0; i < this.ventajas.length; i++) {
                this.ventajas[i].setAnulable(false);
            }

            for (i=0; i < this.desventajas.length; i++) {
                this.desventajas[i].setAnulable(false);
            }

            for (i=0; i < this.tablasArmas.length; i++) {
                this.tablasArmas[i].setAnulable(false);
            }

            for (i=0; i < this.habilidadesKi.length; i++) {
                this.habilidadesKi[i].setAnulable(false);
            }

            for (i=0; i < this.tecnicasKi.length; i++) {
                this.tecnicasKi[i].setAnulable(false);
            }

            for (i=0; i < this.artesMarciales.length; i++) {
                this.artesMarciales[i].setAnulable(false);
            }

            this.nivelGeneracionTerminada = this.nivel;
            this.nivel += numNiveles;

            this.GENERACION_INICIADA = ESTADO_GENERACION_SUBIENDO_NIVEL;
            lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
            lanzarEvento(EVENT_CHARACTER_SECCION_ARTES_MARCIALES);
            lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES);
            lanzarEvento(EVENT_CHARACTER_SECCION_CARACTERISTICAS);
            lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
            lanzarEvento(EVENT_CHARACTER_SECCION_DESVENTAJAS);
            lanzarEvento(EVENT_CHARACTER_SECCION_ELAN);
            lanzarEvento(EVENT_CHARACTER_SECCION_KI);
            lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
            lanzarEvento(EVENT_CHARACTER_SECCION_PERSONALES);
            lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
            lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
            lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
            lanzarEvento(EVENT_CHARACTER_SECCION_VENTAJAS);
        }
    },

    /**
     *
     * @returns {number}
     */
    getNivel : function() {
        return this.nivel;
    },

//endregion PX y nivel

//region Ventajas y Desventajas
    /**
     *
     * @param {ElementoProhibido} elementoProhibido
     */
    addProhibido : function(elementoProhibido) {
        var existia = false;

        for (var i = 0; i < this.prohibidos.length; i++) {
            if ((this.prohibidos[i].getNombre() == elementoProhibido.getNombre()) &&
                (this.prohibidos[i].getTipo() == elementoProhibido.getTipo()) &&
                (this.prohibidos[i].getOpcion() == elementoProhibido.getOpcion())) {
                this.prohibidos[i].cierraCandado();
                existia = true;
            }
        }

        if (!existia) {
            elementoProhibido.setCandados(1);
            this.prohibidos.push(elementoProhibido);
        }
    },

    /**
     *
     * @param {string} campo
     * @param {string} opcion
     */
    eliminarElementosPCPorCampo : function(campo,opcion) {

        this.ventajas = limpiarArrayObjetosPorCampo(this.ventajas,campo,opcion,this.anularVentaja,this);

        this.desventajas = limpiarArrayObjetosPorCampo(this.desventajas,campo,opcion,this.anularVentaja,this);

        lanzarEvento(EVENT_CHARACTER_SECCION_VENTAJAS);
        lanzarEvento(EVENT_CHARACTER_SECCION_DESVENTAJAS);
    },

    /**
     *
     * @param {ElementoProhibido} elementoProhibido
     */
    eliminaProhibido : function(elementoProhibido) {
        var prohibidosLimpios = [];

        for (var i = 0; i < this.prohibidos.length; i++) {
            if ((this.prohibidos[i].getNombre() == elementoProhibido.getNombre()) &&
                (this.prohibidos[i].getTipo() == elementoProhibido.getTipo()) &&
                (this.prohibidos[i].getOpcion() == elementoProhibido.getOpcion())) {
                this.prohibidos[i].abreCandado();
                if (this.prohibidos[i].getCandados() > 0) {
                    prohibidosLimpios.push (this.prohibidos[i]);
                }
            } else {
                prohibidosLimpios.push (this.prohibidos[i]);
            }
        }

        this.prohibidos = prohibidosLimpios;
    },

    /**
     *
     * @param {Ventaja} ventaja
     * @param {string} opcion
     * @returns {boolean}
     */
    puedeComprar : function(ventaja, opcion) {
        var puede = true;

        if (ventaja.getRepetible() == NO_COMPRABLE) {
            puede = false;
        } else if ((ventaja.getRepetible() == NO_REPETIBLE) &&
            (this.hasVentaja(ventaja))) {
            puede = false;
        } else if (opcion != undefined) {
            if ((ventaja.getRepetible() == REPETIBLE_OPCIONES) && (this.hasVentaja(ventaja,opcion))) {
                puede = false;
            }
        }

        if ((ventaja.getGrupo() == GRUPO_DON) && (!ventaja.isBasica)) {
            if (!personaje_actual.hasFlag(FLAG_DON)) {
                puede = false;
            }
        } else if ((ventaja.getGrupo() == GRUPO_PSIQUICAS) && (!ventaja.isBasica)) {
            if (!personaje_actual.hasFlag(FLAG_PSIQUICO)) {
                puede = false;
            }
        }

        for (var i = 0; i < this.prohibidos.length; i++) {
            var elementoProhibido = this.prohibidos[i];
            if (elementoProhibido.getTipo() == VENTAJA) {
                if (elementoProhibido.getNombre() == ventaja.getNombre()) {
                    if (elementoProhibido.getOpcion() == undefined) {
                        puede = false;
                    } else {
                        if (opcion == elementoProhibido.getOpcion()) {
                            puede = false;
                        }
                    }
                }
            }
        }



        return puede;
    },

    /**
     *
     * @param {Ventaja} ventaja
     * @param {string} opcion
     * @returns {boolean}
     */
    hasVentaja : function(ventaja, opcion) {
        if (opcion != undefined) {
            var elemento;
            if (ventaja.getNombre() in this.ventajas) {
                elemento = this.ventajas[ventaja.getNombre()];
            } else if (ventaja.getNombre() in this.desventajas) {
                elemento = this.desventajas[ventaja.getNombre()];
            }
            if (elemento == undefined) {
                return false;
            } else {
                return (elemento.getOpcion() == opcion);
            }
        } else {
            return ((ventaja.getNombre() in this.ventajas) || (ventaja.getNombre() in this.desventajas));
        }
    },

    /**
     *
     * @param {ElementoPCComprado} ventajaComprada
     */
    removeVentaja : function(ventajaComprada) {
        var ventajasLimpias = [];
        var j;
        var anular = false;
        var paraAnular = "";
        for (j = 0; j < this.ventajas.length;j++) {
            /**
             *
             * @type {ElementoPCComprado}
             */
            var estaVentaja = this.ventajas[j];
            if ((estaVentaja.getVentaja() == ventajaComprada.getVentaja()) &&
                (estaVentaja.pc == ventajaComprada.pc) &&
                (estaVentaja.getOpcion() == ventajaComprada.getOpcion()) &&
                (estaVentaja.getOrigen() == ventajaComprada.getOrigen())) {
                delete this.ventajas[ventajaComprada.getVentaja().getNombre()];
                anular = true;
                paraAnular = estaVentaja;
            } else {
                ventajasLimpias.push(estaVentaja);
            }
        }
        this.ventajas = ventajasLimpias;

        if (anular) {
            this.anularVentaja(paraAnular);
        }

        var desventajasLimpias = [];
        anular = false;
        paraAnular = "";
        for (j = 0; j < this.desventajas.length;j++) {
            var estaDesventaja = this.desventajas[j];
            if ((estaDesventaja.getVentaja() == ventajaComprada.getVentaja()) &&
                (estaDesventaja.getPc() == ventajaComprada.getPc()) &&
                (estaDesventaja.getOpcion() == ventajaComprada.getOpcion()) &&
                (estaDesventaja.getOrigen() == ventajaComprada.getOrigen())) {
                delete this.desventajas[ventajaComprada.getVentaja().getNombre()];
                anular = true;
                paraAnular = estaDesventaja;
            } else {
                desventajasLimpias.push(estaDesventaja);
            }
        }
        this.desventajas = desventajasLimpias;
        if (anular) {
            this.anularVentaja(paraAnular);
        }

        lanzarEvento(EVENT_CHARACTER_SECCION_DESVENTAJAS);
        lanzarEvento(EVENT_CHARACTER_SECCION_VENTAJAS);
    },

    /**
     * Elimina, devolviendo los PC, los elementos PC que requieren el flag necesario
     * @param {string} flag
     */
    anularVentajasPorFlag : function(flag) {
        var flagsNecesarios;
        var i,j;
        for ( i =0; i < this.ventajas.length; i++) {
            flagsNecesarios = this.ventajas[i].getVentaja().getFlagsNecesarios();
            for ( j = 0; j < flagsNecesarios.length;j++) {
                if (flagsNecesarios[j] == flag) {
                    this.anularVentaja(this.ventajas[i]);
                    i--;
                }
            }
        }
        for ( i =0; i < this.desventajas.length; i++) {
            flagsNecesarios = this.desventajas[i].getVentaja().getFlagsNecesarios();
            for ( j = 0; j < flagsNecesarios.length;j++) {
                if (flagsNecesarios[j] == flag) {
                    this.anularVentaja(this.desventajas[i]);
                    i--;
                }
            }
        }
    },

    /**
     *
     * @param {Ventaja} ventaja
     * @param {number} coste
     * @param {string} opcion
     */
    aplicarVentaja : function(ventaja, coste, opcion) {
        var delegado = ventaja.getDelegadoVentaja();

        //incompatibilidades
        var incompatibilidades = ventaja.getIncompatibles();
        for (var i = 0; i < incompatibilidades.length; i++) {
            this.addProhibido(incompatibilidades[i]);
        }

        //efectos
        if (delegado.length == 1) {
            delegado[0](coste, opcion, true);
        } else if (delegado.length == 2) {
            delegado[0](coste, opcion, true, delegado[1]);
        } else if (delegado.length == 3) {
            delegado[0](coste, opcion, true, delegado[1], delegado[2]);
        }
        this.updatePC();
    },

    /**
     *
     * @param {ElementoPCComprado} ventajaComprada
     */
    anularVentaja : function(ventajaComprada) {
        var delegado = ventajaComprada.getVentaja().getDelegadoVentaja();

/*        this.PC_libres_generales += parseInt(ventajaComprada.getRepartoCostes().getLibres());
        this.PC_libres_don += parseInt(ventajaComprada.getRepartoCostes().getDon());
        this.PC_libres_psiquicas += parseInt(ventajaComprada.getRepartoCostes().getPsiquica());
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);*/

        //incompatibilidades
        var incompatibilidades = ventajaComprada.getVentaja().getIncompatibles();
        for (var i = 0; i < incompatibilidades.length; i++) {
            this.eliminaProhibido(incompatibilidades[i]);
        }

        //efectos
        if (delegado.length == 1) {
            delegado[0](ventajaComprada.getPc(), ventajaComprada.getOpcion(), false);
        } else if (delegado.length == 2) {
            delegado[0](ventajaComprada.getPc(), ventajaComprada.getOpcion(), false, delegado[1]);
        } else if (delegado.length == 3) {
            delegado[0](ventajaComprada.getPc(), ventajaComprada.getOpcion(), false, delegado[1], delegado[2]);
        }
        this.updatePC();
        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
    },

    /**
     *
     * @param {Ventaja} ventaja
     * @param {number} coste
     * @param {string} opcion
     * @param {string} origen
     * @param {boolean} isVentaja
     * @param {RepartoCostes} repartoCostes
     * @param {boolean} ordenar
     */
    addVentaja : function(ventaja, coste, opcion, origen, isVentaja, repartoCostes, ordenar) {
        var ventajaComprada = new ElementoPCComprado(ventaja,coste, opcion, origen);
        ventajaComprada.setRepartoCostes(repartoCostes);

        if (isVentaja) {
            this.ventajas.push(ventajaComprada);
            this.ventajas[ventaja.getNombre()] = ventajaComprada;
            if (ordenar) {
                this.ordenarElementosPC();
            }
            lanzarEvento(EVENT_CHARACTER_SECCION_VENTAJAS);
        } else {
            this.desventajas.push(ventajaComprada);
            this.desventajas[ventaja.getNombre()] = ventajaComprada;
            if (ordenar) {
                this.ordenarElementosPC();
            }
            lanzarEvento(EVENT_CHARACTER_SECCION_DESVENTAJAS);
        }
        this.aplicarVentaja(ventaja, coste, opcion);
    },

    /**
     *
     */
    ordenarElementosPC : function() {
        this.ventajas.sort(SortVentajaComprada);
        this.desventajas.sort(SortVentajaComprada);
    },

    /**
     *
     * @returns {ElementoPCComprado[]}
     */
    getVentajas : function() {
        return this.ventajas;
    },

    /**
     *
     * @returns {ElementoPCComprado[]}
     */
    getDesventajas : function() {
        return this.desventajas;
    },

//endregion Ventajas y Desventajas


//region Habilidades Primarias: Combate

//region Artes Marciales
    /**
     *
     * @param {string} nombreArteMarcial
     */
    addArteMarcial : function(nombreArteMarcial)  {
        var arteMarcial = getArteMarcial(nombreArteMarcial);

        var bonos = arteMarcial.getBonos();
        for (var i = 0; i < bonos.length;i++) {
            this.addBono(bonos[i], false, true);
        }

        this.addBono(
            new Bono(BONO_CM,BONO_CM,arteMarcial.getBonoCM(),"",false,BONO_INNATO,arteMarcial.getNombre()),
            false,
            false
        );

        this.artesMarciales.push(new ArteMarcialComprada(arteMarcial));
        lanzarEvento(EVENT_CHARACTER_SECCION_ARTES_MARCIALES);
        lanzarEvento(EVENT_CHARACTER_SECCION_KI);
    },

    /**
     *
     * @param {string} nombreArteMarcial
     */
    removeArteMarcial : function(nombreArteMarcial)  {
        var arteMarcial = getArteMarcial(nombreArteMarcial);
        var i;

        var bonos = arteMarcial.getBonos();
        for (i = 0; i < bonos.length;i++) {
            this.removeBono(bonos[i], true);
        }

        this.removeBono(new Bono(BONO_CM, BONO_CM, arteMarcial.getBonoCM(), "", false, BONO_INNATO, arteMarcial.getNombre()), true);

        var artesLimpias = [];
        for (i = 0; i < this.artesMarciales.length; i++) {
            if (this.artesMarciales[i].getNombre() != nombreArteMarcial) {
                artesLimpias.push(this.artesMarciales[i]);
            }
        }
        this.artesMarciales = artesLimpias;
        lanzarEvento(EVENT_CHARACTER_SECCION_ARTES_MARCIALES);
        lanzarEvento(EVENT_CHARACTER_SECCION_KI);
    },

    /**
     *
     * @param {string} nombreArteMarcial
     * @returns {boolean}
     */
    hasArteMarcial : function(nombreArteMarcial)  {
        for (var i = 0; i < this.artesMarciales.length; i++) {
            if (this.artesMarciales[i].getNombre() == nombreArteMarcial) {
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @returns {ArteMarcialComprada[]}
     */
    getArtesMarciales : function() {
        return this.artesMarciales;
    },

    /**
     *
     * @returns {number}
     */
    numArtesMarciales : function()  {
        return this.artesMarciales.length;
    },

    /**
     *
     * @returns {number}
     */
    maxArtesMarciales : function()  {
        var sumaAtaqueDefensa = this[HB_ATAQUE].valorFinalActual();
        var parada = this[HB_PARADA].valorFinalActual();
        var esquiva = this[HB_ESQUIVA].valorFinalActual();
        sumaAtaqueDefensa += (parada > esquiva) ? parada : esquiva;
        if (sumaAtaqueDefensa < 0) {
            sumaAtaqueDefensa = 0;
        }
        return Math.floor(sumaAtaqueDefensa/ATAQUE_DEFENSA_PARA_ARTE_MARCIAL);
    },

    /**
     *
     * @returns {PuedeComprar}
     */
    puedeComprarNuevaArteMarcial : function() {
        return new PuedeComprar((this.numArtesMarciales() < this.maxArtesMarciales()),ALERT_ARTE_MARCIAL_ATAQUE_DEFENSA_BAJOS);
    },
//endregion Artes Marciales

//region Manejo de armas y tablas de armas
    /**
     *
     * @param {string} nombreArma
     * @returns {boolean}
     */
    hasArmaManejada : function(nombreArma)  {
        for (var i = 0; i < this.manejoArmas.length; i++) {
            if (this.manejoArmas[i].getNombre() == nombreArma) {
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @param {string}nombreArma
     */
    removeArmaManejada : function(nombreArma)  {
        var armasLimpias = [];
        for (var i = 0; i < this.manejoArmas.length; i++) {
            if (this.manejoArmas[i].getNombre() != nombreArma) {
                armasLimpias.push(this.manejoArmas[i]);
            }
        }
        this.manejoArmas = armasLimpias;
        lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
    },

    /**
     *
     * @param {string} nombreNuevaArma
     * @param {string} nombreArmaAntigua
     */
    comprobarCambiosPDArmaInicial : function(nombreArmaAntigua, nombreNuevaArma)  {
        if ((nombreNuevaArma == ARMA_SIN_ARMAS) && (nombreArmaAntigua != ARMA_SIN_ARMAS)) {
            if (this.artesMarciales.length > 0) {
                this.PD_libres += costeArteMarcial(true);
                lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
            }
        } else if ((nombreNuevaArma != ARMA_SIN_ARMAS) && (nombreArmaAntigua == ARMA_SIN_ARMAS)) {
            if (this.artesMarciales.length > 0) {
                this.PD_libres -= costeArteMarcial(true); 
                lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
            }
        }
    },

    /**
     *
     * @param {string} nombreArma
     * @param {boolean} isInicial
     */
    addArmaManejada : function(nombreArma, isInicial)  {
        if (isInicial) {
            if (this.armaInicial != undefined) {
                this.removeArmaManejada(this.armaInicial);
            }
            this.manejoArmas.push(getArma(nombreArma));
            var armaAnterior = this.armaInicial;
            this.armaInicial = nombreArma;
            this.comprobarCambiosPDArmaInicial(armaAnterior,nombreArma);
        } else {
            if (!this.hasArmaManejada(nombreArma)) {
                this.manejoArmas.push(getArma(nombreArma));
            }
        }
        lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
    },

    /**
     *
     * @param {boolean} separarMixtos
     * @returns {string[]}
     */
    getTiposArmasConocidos : function(separarMixtos)  {
        var tiposConocidos = [];
        for (var i = 0; i < this.manejoArmas.length; i++) {
            var tipo = [];
            if (!separarMixtos) {
                tipo[0] = this.manejoArmas[i].getCategoria();
            } else {
                tipo = this.manejoArmas[i].getCategorias();
            }
            var yaExiste = false;
            for (var k = 0; k < tipo.length;k++) {
                for (var j=0; j < tiposConocidos.length; j++) {
                    if (tiposConocidos[j] == tipo[k]) {
                        yaExiste = true;
                        break;
                    }
                }
                if (!yaExiste) {
                    tiposConocidos.push(tipo[k]);
                }
            }
        }
        return tiposConocidos;
    },

    /**
     *
     * @param {string} nombreTabla
     */
    addTablaArmas : function(nombreTabla)  {
        var tabla = getTablaArmas(nombreTabla);
        var i;
        var opciones;

        switch (tabla.getTipoTabla()) {
            case TABLA_ESPECIAL :

                break;
            case TABLA_MANEJO_CATEGORIA :
                opciones = tabla.getOpciones();
                for (i = 0; i < opciones.length;i++) {
                    var nombreTipo = opciones[i];
                    this.addTipoArmaManejada(nombreTipo);
                }

                break;
            case TABLA_MANEJO_ARMAS :
                opciones = tabla.getOpciones();
                for (i = 0; i < opciones.length;i++) {
                    var nombreArma = opciones[i];
                    this.addArmaManejada(nombreArma,false);
                }

                break;
            case TABLA_SIN_EFECTO :
            default:
                break;
        }


        this.tablasArmas.push(new TablaArmasComprada(tabla,""));
        lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
    },

    /**
     *
     * @param {string} nombreTabla
     * @param {string} opcion
     */
    addTablaArmasEspecial : function(nombreTabla, opcion)  {
        /**
         *
         * @type {TablaArmasComprada}
         */
        var tabla = new TablaArmasComprada(getTablaArmas(nombreTabla),opcion);

        if ((tabla.getOpciones()[0] == TABLA_ARMA_SIMILAR) ||
            (tabla.getOpciones()[0] == TABLA_ARMA_MIXTA) ||
            (tabla.getOpciones()[0] == TABLA_ARMA_DISTINTA)) {
            this.addArmaManejada(opcion,false);
        } else if (tabla.getOpciones()[0] == TABLA_TIPOLOGIA) {
            this.addTipoArmaManejada(opcion);
        }

        this.tablasArmas.push(tabla);
        lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
    },

    /**
     *
     * @param {string} nombre
     * @returns {TablaArmasComprada}
     * @param {string} opcion
     */
    getTablaArmasComprada : function(nombre,opcion) {
        for (var i = 0; i < this.tablasArmas.length; i++) {
            if ((this.tablasArmas[i].getNombre() == nombre) && (this.tablasArmas[i].getOpcion() == opcion)) {
                return this.tablasArmas[i];
            }
        }
        throw ERR_TABLA_DESCONOCIDA + ": " + nombre + " (" + opcion + ")";
    },

    /**
     *
     * @param {string} nombreTabla
     * @param {string} opcionTabla
     */
    removeTablaArmas : function(nombreTabla,opcionTabla)  {
        var tabla = this.getTablaArmasComprada(nombreTabla,opcionTabla);
        var i;

        switch (tabla.getTipoTabla()) {
            case TABLA_ESPECIAL :
                if ((tabla.getOpciones()[0] == TABLA_ARMA_SIMILAR) ||
                    (tabla.getOpciones()[0] == TABLA_ARMA_MIXTA) ||
                    (tabla.getOpciones()[0] == TABLA_ARMA_DISTINTA)) {
                    this.removeArmaManejada(tabla.getOpcion());
                } else if (tabla.getOpciones()[0] == TABLA_TIPOLOGIA) {
                    this.removeTipoArmaManejada(tabla.getOpcion());
                }
                break;
            case TABLA_MANEJO_CATEGORIA :
                for (i = 0; i < tabla.getOpciones().length;i++) {
                    var nombreTipo = tabla.getOpciones()[i];
                    this.removeTipoArmaManejada(nombreTipo);
                }
                break;
            case TABLA_MANEJO_ARMAS :
                for (i = 0; i < tabla.getOpciones().length;i++) {
                    var nombreArma = tabla.getOpciones()[i];
                    this.removeArmaManejada(nombreArma);
                }
                break;
            case TABLA_SIN_EFECTO :
            default:
                break;
        }

        var tablasLimpias = [];
        for (i = 0; i < this.tablasArmas.length;i++) {
            if (((this.tablasArmas[i].getNombre() != tabla.getNombre()) || (this.tablasArmas[i].getOpcion() != tabla.getOpcion()))) {
                tablasLimpias.push(this.tablasArmas[i]);
            }
        }

        this.tablasArmas = tablasLimpias;
        lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
    },

    /**
     *
     * @param {string} nombreTabla
     * @returns {boolean}
     */
    hasTablaArmas : function(nombreTabla)  {
        for (var i = 0; i < this.tablasArmas.length;i++) {
            if (this.tablasArmas[i].getNombre() == nombreTabla) {
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @param {string} tipoArma
     * @returns {boolean}
     */
    hasTipoArmaManejada : function(tipoArma)  {
        for (var i = 0; i < this.manejoTiposArmas.length; i++) {
            if (this.manejoTiposArmas[i] == tipoArma) {
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @param {string} tipoArma
     */
    addTipoArmaManejada : function(tipoArma)  {
        if (!this.hasTipoArmaManejada(tipoArma)) {
            this.manejoTiposArmas.push(tipoArma);
            lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
        }
    },

    /**
     *
     * @param {string} tipoArma
     */
    removeTipoArmaManejada : function(tipoArma)  {
        var tiposLimpios = [];
        for (var i = 0; i < this.manejoTiposArmas.length;i++) {
            if (this.manejoTiposArmas[i] != tipoArma) {
                tiposLimpios.push(tipoArma);
            }
        }
        this.manejoTiposArmas = tiposLimpios;
        lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
    },
//endregion Manejo de armas y tablas de armas

    /**
     *
     * @param {Categoria} nuevaCategoria
     */
    ajustarCambiosPDPorCambiosCategoria : function(nuevaCategoria)  {
        var ajusteArteMarcial = COSTE_ARTE_MARCIAL - COSTE_TAO_ARTE_MARCIAL;
        var ajustePrimeraArteMarcial = COSTE_ARTE_MARCIAL/2 - COSTE_TAO_ARTE_MARCIAL/2;
        var i;
        if ((nuevaCategoria.getNombre() == CAT_MAESTRO_ARMAS) && (this.categoria.getNombre() != CAT_MAESTRO_ARMAS)) {
            for (i = 0; i < this.tablasArmas.length; i++) {
                if ((this.tablasArmas[i].getCategoriaTabla() == CATEGORIA_TABLA_ARMAS_GENERALES) ||
                    (this.tablasArmas[i].getCategoriaTabla() == CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS) ||
                    (this.tablasArmas[i].getCategoriaTabla() == CATEGORIA_TABLA_ARMAS_ESTILOS)) {
                    this.PD_libres += this.tablasArmas[i].tablaArmas.getCoste() / 2;
                    lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
                }
            }
        } else if ((nuevaCategoria.getNombre() != CAT_MAESTRO_ARMAS) && (this.categoria.getNombre() == CAT_MAESTRO_ARMAS)) {
            for (i = 0; i < this.tablasArmas.length; i++) {
                if ((this.tablasArmas[i].getCategoriaTabla() == CATEGORIA_TABLA_ARMAS_GENERALES) ||
                    (this.tablasArmas[i].getCategoriaTabla() == CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS) ||
                    (this.tablasArmas[i].getCategoriaTabla() == CATEGORIA_TABLA_ARMAS_ESTILOS)) {
                    if (this.PD_libres - this.tablasArmas[i].tablaArmas.getCoste() / 2 < 0) {
                        alert("Eliminada tabla de armas " + this.tablasArmas[i].getNombre() + " por PDs insuficientes");
                        this.removeTablaArmas(this.tablasArmas[i].getNombre(),this.tablasArmas[i].getOpcion());
                    } else {
                        this.PD_libres -= this.tablasArmas[i].tablaArmas.getCoste() / 2;
                        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
                    }
                }
            }
        } else if ((nuevaCategoria.getNombre() == CAT_TAO) && (this.categoria.getNombre() != CAT_TAO)) {
            for (i = 0; i < this.artesMarciales.length; i++) {
                if ((i == 0) && (this.armaInicial == ARMA_SIN_ARMAS)) {
                    this.PD_libres += ajustePrimeraArteMarcial;
                } else {
                    this.PD_libres += ajusteArteMarcial;
                }
            }
            lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
        } else if ((nuevaCategoria.getNombre() != CAT_TAO) && (this.categoria.getNombre() == CAT_TAO)) {
            for (i = 0; i < this.artesMarciales.length; i++) {
                if ((this.artesMarciales.length == 1) && (this.armaInicial == ARMA_SIN_ARMAS)) {
                    if (this.PD_libres - ajustePrimeraArteMarcial < 0) {
                        alert("Eliminada arte marcial " + this.artesMarciales[i].getNombre() + " por PDs insuficientes");
                        this.removeArteMarcial(this.artesMarciales[i].getNombre());
                    } else {
                        this.PD_libres -= ajustePrimeraArteMarcial;
                        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
                    }
                } else {
                    if (this.PD_libres - ajusteArteMarcial < 0) {
                        alert("Eliminada arte marcial " + this.artesMarciales[i].getNombre() + " por PDs insuficientes");
                        this.removeArteMarcial(this.artesMarciales[i].getNombre());
                    } else {
                        this.PD_libres -= ajusteArteMarcial;
                        lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
                    }
                }
            }
        }
    },

    //region Ki
    /**
     *
     * @param {boolean} notificar
     */
    updateKiInicial : function (notificar)  {
        this[HB_KI_AGI].setValorInicial(valorKiBase(this.getCaracteristica(AGI)));
        this[HB_KI_CON].setValorInicial(valorKiBase(this.getCaracteristica(CON)));
        this[HB_KI_DES].setValorInicial(valorKiBase(this.getCaracteristica(DES)));
        this[HB_KI_FUE].setValorInicial(valorKiBase(this.getCaracteristica(FUE)));
        this[HB_KI_POD].setValorInicial(valorKiBase(this.getCaracteristica(POD)));
        this[HB_KI_VOL].setValorInicial(valorKiBase(this.getCaracteristica(VOL)));

        this[HB_ACUM_KI_AGI].setValorInicial(acumulacionKiBase(this.getCaracteristica(AGI)));
        this[HB_ACUM_KI_DES].setValorInicial(acumulacionKiBase(this.getCaracteristica(DES)));
        this[HB_ACUM_KI_CON].setValorInicial(acumulacionKiBase(this.getCaracteristica(CON)));
        this[HB_ACUM_KI_FUE].setValorInicial(acumulacionKiBase(this.getCaracteristica(FUE)));
        this[HB_ACUM_KI_POD].setValorInicial(acumulacionKiBase(this.getCaracteristica(POD)));
        this[HB_ACUM_KI_VOL].setValorInicial(acumulacionKiBase(this.getCaracteristica(VOL)));

        if (notificar)
        lanzarEvento(EVENT_CHARACTER_SECCION_KI);
    },

    /**
     *
     * @param {string} nombreHabilidadKi
     * @param {boolean} ignoraRequisitos
     * @param {boolean} anulable
     */
    addHabilidadKi : function(nombreHabilidadKi, ignoraRequisitos, anulable) {
        if (!this.hasHabilidadKi(nombreHabilidadKi)) {
            var habilidadKi = new HabilidadKiComprada(getHabilidadKi(nombreHabilidadKi),anulable, ignoraRequisitos);
            this.habilidadesKi.push(habilidadKi);
            this.habilidadesKi[habilidadKi.getNombre()] = habilidadKi;

            habilidadKi.getEfecto()(true);

            lanzarEvento(EVENT_CHARACTER_SECCION_KI);
        }
    },

    /**
     *
     * @param {string} nombreHabilidadKi
     */
    removeHabilidadKi : function(nombreHabilidadKi) {
        if (this.hasHabilidadKi(nombreHabilidadKi)) {
            var yaDesactivadas = true;
            if (notificacionesActivas) {
                desactivarNotificaciones();
                yaDesactivadas = false;
            }

            var habilidadKi = this.getHabilidadKi(nombreHabilidadKi);
            var i;
            var j;
            var habKiLimpias = [];

            for (i = 0; i < this.habilidadesKi.length;i++) {
                if (this.habilidadesKi[i].getNombre() != nombreHabilidadKi) {
                    habKiLimpias.push(this.habilidadesKi[i]);
                    habKiLimpias[this.habilidadesKi[i].getNombre()] = this.habilidadesKi[i];
                } else {
                    this.habilidadesKi[i].getEfecto()(false);
                }
            }
            this.habilidadesKi = habKiLimpias;

            for (i = 0; i < this.habilidadesKi.length;i++) {
                var req = this.habilidadesKi[i].getRequisitos();
                for (j = 0; j < req.length; j++) {
                    if (req[j] == habilidadKi.getNombre()) {
                        this.addCMGastado(-1 * this.habilidadesKi[i].getCosteCM());
                        this.removeHabilidadKi(this.habilidadesKi[i].getNombre());
                        i--;
                    }
                }
            }

            if (!yaDesactivadas) {
                activarNotificaciones();
            }
            lanzarEvento(EVENT_CHARACTER_SECCION_KI);
        }
    },

    /**
     *
     * @returns {HabilidadKiComprada[]}
     */
    getHabilidadesKi : function() {
        return this.habilidadesKi;
    },

    /**
     *
     * @returns {TecnicaKiComprada[]}
     */
    getTecnicasKi : function() {
        return this.tecnicasKi;
    },

    /**
     *
     * @param {string} nombreHabilidad
     * @returns {HabilidadKiComprada}
     */
    getHabilidadKi : function(nombreHabilidad) {
        return this.habilidadesKi[nombreHabilidad];
    },

    /**
     *
     * @param {string} nombreHabilidad
     * @returns {boolean}
     */
    hasHabilidadKi : function(nombreHabilidad) {
        return this.habilidadesKi[nombreHabilidad] != undefined;
    },

    /**
     *
     * @param {TecnicaKi} tecnicaKi
     */
    addTecnicaKi : function(tecnicaKi) {
        if (!this.hasTecnicaKi(tecnicaKi.getNombre())) {
            this.tecnicasKi.push(new TecnicaKiComprada(tecnicaKi));
            this.numTecnicas["nivel"+tecnicaKi.getNivel()]++;
            lanzarEvento(EVENT_CHARACTER_SECCION_KI);
        }
    },

    /**
     *
     * @param {TecnicaKi} tecnicaKi
     */
    puedeComprarTecnicaKi : function(tecnicaKi) {
        var puede = true;

        if (tecnicaKi.getCosteCM() > this.getCMTotal()-this.getCMGastado()) {
            puede = false;
        } else if (!this.hasFlag(FLAG_PUEDE_USAR_TECNICAS)) {
            puede = false;
        } else if (this.hasTecnicaKi(tecnicaKi.getNombre())) {
            puede = false;
        } else {
            var nivelTecnica = tecnicaKi.getNivel();

            if (nivelTecnica == 2) {
                puede = (this.numTecnicas["nivel1"] >= 2);
            } else if (nivelTecnica == 3) {
                puede = (this.numTecnicas["nivel2"] >= 2);
            }

            //TODO limitar por atadura elemental?
        }
        return puede;
    },

    /**
     *
     * @param {string} nombreTecnicaKi
     */
    removeTecnicaKi : function(nombreTecnicaKi) {
        if (this.hasTecnicaKi(nombreTecnicaKi)) {
            this.numTecnicas["nivel"+this.getTecnicaKi(nombreTecnicaKi).getNivel()]--;
            this.tecnicasKi = limpiarArrayObjetosPorFuncion(this.tecnicasKi,comparaGetNombre,nombreTecnicaKi);
            lanzarEvento(EVENT_CHARACTER_SECCION_KI);
        }
    },

    getTecnicaKi : function(nombreTecnicaKi) {
        for (var i = 0;i < this.tecnicasKi.length ;i++) {
            if (this.tecnicasKi[i].getNombre() == nombreTecnicaKi) {
                return this.tecnicasKi[i];
            }
        }
        throw ERR_TECNICA_KI_DESCONOCIDA + ": " + nombreTecnicaKi;
    },

    /**
     *
     * @param {string} nombreTecnica
     * @returns {boolean}
     */
    hasTecnicaKi : function(nombreTecnica) {
        for (var i = 0;i < this.tecnicasKi.length ;i++) {
            if (this.tecnicasKi[i].getNombre() == nombreTecnica) {
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @return {number}
     */
    getCMTotal : function() {
        var bonos = personaje_actual.getBonos(BONO_CM, BONO_CM, CATEGORIA_BONO_CUALQUIERA);
        var valor = 0;
        for (var i = 0; i < bonos.length; i++) {
            valor += bonos[i].getBonoParaNivel(this.nivel,personaje_actual);
        }
        return valor;
    },

    /**
     *
     * @returns {number}
     */
    getCMGastado : function() {
        return this.CMGastado;
    },

    /**
     *
     * @param {number} valor
     */
    addCMGastado : function(valor) {
        this.CMGastado += valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_KI);
    },

    //endregion Ki

    /**
     *
     * @returns {number}
     */
    maxPDsAtaqueDefensa : function()  {
        return Math.floor(this.PD_totales / 2);
    },

    /**
     *
     * @returns {number}
     */
    gastoActualPDsAtaqueDefensa : function()  {
        return this[HB_ATAQUE].getPDinvertidos() + this[HB_ESQUIVA].getPDinvertidos() + this[HB_PARADA].getPDinvertidos();
    },

    /**
     *
     * @returns {string}
     */
    getArmaInicial : function() {
        return this.armaInicial;
    },
//endregion Habilidades Primarias: Combate

//region Habilidades Primarias: Magia

    /**
     *
     * @param {boolean} notificar
     */
    updateZeonBase : function (notificar)  {
        var valorBase = 0;

        switch (this.getCaracteristica(POD)) {
            case 1 : valorBase = 5;
                break;
            case 2 : valorBase = 20;
                break;
            case 3 : valorBase = 40;
                break;
            case 4  : valorBase = 55;
                break;
            case 5  : valorBase = 70;
                break;
            case 6  : valorBase = 85;
                break;
            case 7  : valorBase = 95;
                break;
            case 8  : valorBase = 110;
                break;
            case 9  : valorBase = 120;
                break;
            case 10  : valorBase = 135;
                break;
            case 11  : valorBase = 150;
                break;
            case 12  : valorBase = 160;
                break;
            case 13  : valorBase = 175;
                break;
            case 14 : valorBase =  185;
                break;
            case 15  : valorBase = 200;
                break;
            case 16  : valorBase = 215;
                break;
            case 17  : valorBase = 225;
                break;
            case 18  : valorBase = 240;
                break;
            case 19  : valorBase = 250;
                break;
            case 20  : valorBase = 265;
                break;
        }

        this[HB_ZEON].setValorInicial(valorBase);
        if (notificar)
            lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
    },


    /**
     *
      * @param {boolean} notificar
     */
    updateACTBase : function (notificar)  {
        var valorPOD = personaje_actual.getCaracteristica(POD);
        var valorBase = 0;

        if (valorPOD <= 4) {
            valorBase = 0;
        } else if (valorPOD <= 7) {
            valorBase = 5;
        } else if (valorPOD <= 11) {
            valorBase = 10;
        } else if (valorPOD <= 14) {
            valorBase = 15;
        } else if (valorPOD == 15) {
            valorBase = 20;
        } else if (valorPOD <= 17) {
            valorBase = 25;
        } else if (valorPOD <= 19) {
            valorBase = 30;
        } else if (valorPOD == 20) {
            valorBase = 35;
        }

        this[HB_ACT].setValorInicial(valorBase);
        if (notificar)
            lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
    },
//endregion Habilidades Primarias: Magia

//region Habilidades Primarias: Psíquica
    /**
     *
     * @returns {number}
     */
    getCVGastados : function()  {
        return this.cv_gastados;
    },

    /**
     *
     * @param {number} valor
     */
    setCVGastados : function(valor) {
        this.cv_gastados = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
    },

    /**
     *
     * @param {number} valor
     */
    addCVGastados : function(valor) {
        this.setCVGastados(this.getCVGastados()+valor);
    },

    /**
     *
     * @param {string} nombreDisciplina
     * @returns {boolean}
     */
    hasDisciplina : function(nombreDisciplina)  {
        for (var i = 0; i < this.disciplinasPsiquicas.length; i++) {
            if (this.disciplinasPsiquicas[i].getNombre() == nombreDisciplina) {
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @param {DisciplinaPsiquica} disciplina
     */
    addDisciplina : function(disciplina)  {
        this.disciplinasPsiquicas.push(new DisciplinaPsiquicaAccedida(disciplina));
        lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
    },

    /**
     *
     * @returns {DisciplinaPsiquicaAccedida[]}
     */
    getDisciplinasPsiquicas  :function() {
        return this.disciplinasPsiquicas;
    },

    /**
     *
     * @returns {string[]}
     */
    getAccesoDisciplinas : function() {
        return this.acceso_disciplinas;
    },

    hasAccesoDisciplina : function(nombreDisciplina) {
        var tiene;
        if (this.hasFlag(FLAG_PSIQUICO)) {
            if (this.hasFlag(FLAG_ACCESO_TODAS_DISCIPLINAS)) {
                tiene = true;
            } else {
                tiene = false;
                for (var i = 0; i < this.acceso_disciplinas.length; i++) {
                    if (this.acceso_disciplinas[i] == nombreDisciplina) {
                        tiene = true;
                    }
                }
            }
        } else {
            tiene = false;
        }
        return tiene;
    },

    /**
     *
     * @param {string} nombreDisciplina
     */
    addAccesoDisciplina : function(nombreDisciplina) {
        if (!this.hasAccesoDisciplina(nombreDisciplina)) {
            this.acceso_disciplinas.push(nombreDisciplina);
        }
    },

    /**
     *
     * @param {string[]} valor
     */
    setAccesoDisciplinas : function(valor) {
        this.acceso_disciplinas = valor;
    },

    /**
     *
     * @returns {number}
     */
    getPotencialPsiquicoBase : function ()  {
        return getPotencialPsiquicoPorVoluntad(this.getCaracteristica(VOL));
    },

    /**
     *
     * @returns {number}
     */
    getInnatosPsiquicos : function() {
        return this.innatosPsiquicos;
    },

    /**
     *
     * @param {number} valor
     */
    setInnatosPsiquicos : function(valor) {
        this.innatosPsiquicos = valor;
        lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
    },

    /**
     *
     * @param {number} valor
     */
    addInnatoPsiquico : function(valor) {
        this.setInnatosPsiquicos(this.innatosPsiquicos+valor);
    },

    /**
     *
     */
    updateCVBase : function()  {
        var valorBase = 0;

        if (this.hasFlag(FLAG_PSIQUICO)) {
            valorBase = 1;
        } else {
            valorBase = 0;
        }
        this[HB_CV].setValorInicial(valorBase);
        lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
    },

    /**
     *
     * @param {DisciplinaPsiquica} disciplina
     */
    removeDisciplina : function(disciplina)  {
        var discLimpias = [];
        var i;

        for (i = 0; i < this.disciplinasPsiquicas.length; i++) {
            if (this.disciplinasPsiquicas[i].getNombre() != disciplina.getNombre()) {
                discLimpias.push(this.disciplinasPsiquicas[i]);
            }
        }

        this.disciplinasPsiquicas = discLimpias;

        var podeLimpios = [];
        for (i = 0; i < this.poderesPsiquicosDominados.length;i++) {
            if (this.poderesPsiquicosDominados[i].getDisciplina() != disciplina) {
                podeLimpios.push(this.poderesPsiquicosDominados[i])
            } else {
                if (this.poderesPsiquicosDominados[i].getFortalecimiento() > 0) {
                    this.cv_gastados -= this.poderesPsiquicosDominados[i].getFortalecimiento();
                }
                this.cv_gastados--;
            }
        }

        this.poderesPsiquicosDominados = podeLimpios;
        lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
    },

    /**
     *
     * @param {DisciplinaPsiquica} disciplina
     * @param {PoderPsiquico} poder
     */
    addPoderDominado : function(disciplina, poder)  {
        if ((this.hasDisciplina(disciplina.getNombre())) || (disciplina.isLibre())) {
            this.poderesPsiquicosDominados.push(new PoderPsiquicoDominado(poder,disciplina));
            lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
        }
    },

    /**
     *
     * @param {DisciplinaPsiquica} disciplina
     * @param {string} nombrePoder
     * @returns {boolean}
     */
    hasPoderDominado : function(disciplina, nombrePoder)  {
        for (var i = 0; i < this.poderesPsiquicosDominados.length;i++) {
            if ( (this.poderesPsiquicosDominados[i].getDisciplina() == disciplina) && (this.poderesPsiquicosDominados[i].getPoder().getNombre() == nombrePoder)) {
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @param {DisciplinaPsiquica} disciplina
     * @returns {Array}
     */
    getPoderesDominadosDisciplina : function(disciplina)  {
        var poderes = [];
        for (var i = 0; i < this.poderesPsiquicosDominados.length;i++) {
            if (this.poderesPsiquicosDominados[i].getDisciplina() == disciplina) {
                poderes.push(this.poderesPsiquicosDominados[i])
            }
        }
        return poderes;
    },

    /**
     *
     * @param {DisciplinaPsiquica} disciplina
     * @returns {number}
     */
    maxNivelDominadoDisciplina : function(disciplina)  {
        var maxNivel = 0;
        for (var i = 0; i < this.poderesPsiquicosDominados.length;i++) {
            if (this.poderesPsiquicosDominados[i].getDisciplina() == disciplina) {
                if (this.poderesPsiquicosDominados[i].getPoder().getNivel() > maxNivel) {
                    maxNivel = this.poderesPsiquicosDominados[i].getPoder().getNivel();
                }
            }
        }
        return maxNivel;
    },

    /**
     *
     * @param {DisciplinaPsiquica} disciplina
     * @param {PoderPsiquico} poder
     */
    removePoderDominado : function(disciplina, poder)  {
        var podeLimpios = [];
        for (var i = 0; i < this.poderesPsiquicosDominados.length;i++) {
            if ((this.poderesPsiquicosDominados[i].getPoder() != poder) || (this.poderesPsiquicosDominados[i].getDisciplina() != disciplina)) {
                podeLimpios.push(this.poderesPsiquicosDominados[i])
            } else {
                if (this.poderesPsiquicosDominados[i].getFortalecimiento() > 0) {
                    this.cv_gastados -= this.poderesPsiquicosDominados[i].getFortalecimiento();
                }
            }
        }

        this.poderesPsiquicosDominados = podeLimpios;
        lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
    },

    /**
     *
     * @param {DisciplinaPsiquica} disciplina
     * @param {PoderPsiquicoDominado} poder
     * @param {number} cantidad
     */
    fortalecerPoder : function(disciplina, poder, cantidad)  {
        for (var i = 0; i < this.poderesPsiquicosDominados.length;i++) {
            if ((this.poderesPsiquicosDominados[i] == poder) && (this.poderesPsiquicosDominados[i].getDisciplina() == disciplina)) {
                this.poderesPsiquicosDominados[i].addFortalecimiento(cantidad);
                lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
                break;
            }
        }
    },

//endregion Habilidades Primarias: Psíquica

//region Habilidades Secundarias
    /**
     *
     * @returns {number}
     */
    gastoActualPDsSecundarias : function() {
        var gasto = 0;

        for (var i = 0; i < habilidades_secundarias.length; i++) {
            var grupo = habilidades_secundarias[i];

            for (var j = 0; j < grupo.length; j++) {

                gasto += this[grupo[j]].getPDinvertidos();
            }
        }

        return gasto;
    },

    /**
     *
     * @param {boolean} notificar
     */
    updateBonosSecundarias : function (notificar)  {
        for (var i = 0; i < habilidades_secundarias.length; i++) {
            var grupoHabilidades = habilidades_secundarias[i];

            for (var j = 0; j < grupoHabilidades.length; j++) {
                var habilidad = getHabilidad(grupoHabilidades[j]);

                var bono = new Bono(BONO_HABILIDAD,habilidad.getNombre(),this.getBonoCaracteristica(habilidad.getCaracteristica()),"",false,BONO_CARACTERISTICA,caracAbreviatura(habilidad.getCaracteristica()));
                this.addBono(bono, true, false);

            }
        }
        if (notificar)
            lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
    },

    /**
     *
     * @param {string} nombreHabilidad
     * @param {string} especializacion
     */
    setEspecializacionHabilidadSecundaria : function(nombreHabilidad, especializacion) {
        this.getHabilidadDePersonaje(nombreHabilidad).setEspecializacion(especializacion);
        lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
    },
//endregion Habilidades Secundarias

//region Equipo y dinero

    /**
     *
     * @returns {Dinero}
     */
    getDinero : function() {
        return this.dinero;
    },

    /**
     *
     * @param {number} oro
     * @param {number} plata
     * @param {number} cobre
     */
    addDinero : function(oro, plata, cobre) {
        this.dinero.addOro(oro);
        this.dinero.addPlata(plata);
        this.dinero.addCobre(cobre);
        lanzarEvento(EVENT_CHARACTER_SECCION_EQUIPO);
    },

    /**
     *
     * @param {Dinero} coste
     */
    puedeGastarse : function(coste) {
        return (this.dinero.totalEnCobre() >= coste.totalEnCobre());
    },

    /**
     *
     * @param {Equipo} item
     */
    compra : function(item) {
        var dineroActual = this.dinero.totalEnCobre() - item.getCosteDinero().totalEnCobre();
        var mo = 0;
        var mp = 0;
        var mc = 0;

        if (dineroActual >= 1000) {
            mo = Math.floor(dineroActual/1000);
            dineroActual -= mo * 1000;
        }
        if (dineroActual >= 10) {
            mp = Math.floor(dineroActual/10);
            dineroActual -= mp*10;
        }
        mc = dineroActual;

        this.dinero.setOro(mo);
        this.dinero.setPlata(mp);
        this.dinero.setCobre(mc);

        this.equipo.push(item);
        lanzarEvento(EVENT_CHARACTER_SECCION_EQUIPO);
    },

    /**
     *
     * @param {Equipo} item
     */
    vende : function(item) {
        var dineroActual = this.dinero.totalEnCobre() + item.getCosteDinero().totalEnCobre();
        var mo = 0;
        var mp = 0;
        var mc = 0;

        if (dineroActual >= 1000) {
            mo = Math.floor(dineroActual/1000);
            dineroActual -= mo * 1000;
        }
        if (dineroActual >= 10) {
            mp = Math.floor(dineroActual/10);
            dineroActual -= mp*10;
        }
        mc = dineroActual;

        this.dinero.setOro(mo);
        this.dinero.setPlata(mp);
        this.dinero.setCobre(mc);

        this.equipo = limpiarArrayObjetosPorCampo(this.equipo,"nombre",item.getNombre());
        lanzarEvento(EVENT_CHARACTER_SECCION_EQUIPO);
    },

    /**
     *
     * @param {Equipo} item
     */
    quitaEquipo : function(item) {
        this.equipo = limpiarArrayObjetosPorCampo(this.equipo,"nombre",item.getNombre());
        lanzarEvento(EVENT_CHARACTER_SECCION_EQUIPO);
    },
//endregion

//region Flags
    /**
     *
     * @param {string} flag
     */
    setFlag : function(flag)  {
        if (!this.hasFlag(flag)) {
            this.flags.push(flag);

            if (flag == FLAG_PSIQUICO) {
                if (this[HB_CV].getValorInicial() == 0) {
                    this[HB_CV].setValorInicial(1);
                    lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
                }
            }
        }
    },

    /**
     *
     * @param {string} flag
     */
    removeFlag : function(flag)  {
        for (var i = 0; i < this.flags.length; i++) {
            if (this.flags[i] == flag) {
                this.flags[i] = "";
                this.anularVentajasPorFlag(flag);
                if (flag == FLAG_PSIQUICO) {
                    this[HB_CV].setValorInicial(0);
                    this.disciplinasPsiquicas = [];
                    this.poderesPsiquicosDominados = [];
                    this.innatosPsiquicos = 0;
                    this.cv_gastados = 0;
                    lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
                } else if (flag == FLAG_DON) {
                    lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
                    var pds = this[HB_VALORACION_MAGICA].getPDinvertidos();
                    this[HB_VALORACION_MAGICA].setPDinvertidos(0);
                    this.addPDLibres(pds);
                    this.nivelMagiaGastado = 0;
                    this.viasMagia = [];
                    this.conjurosSueltos = [];
                }
                return;
            }
        }
    },

    /**
     *
     * @param {string} flag
     * @returns {boolean}
     */
    hasFlag : function(flag)  {
        for (var i = 0; i < this.flags.length; i++) {
            if (this.flags[i] == flag) {
                return true;
            }
        }
        return false;
    },
//endregion Flags

//region Funciones generales
    /**
     *
     */
    updateBonoyBases : function()  {
        this.pv = this.pvBase();
        this.updateMultiplosVida(false);
        this.updateBonosTurnoCarac(false);
        this.updateCapacidadesFisicas(false);
        lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES);

        this.updateBonosResistenciasCarac(false);
        lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);

        this.updateBonosPrimarias(false);
        this.updateZeonBase(false);
        this.updateACTBase(false);

        lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
        lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
        lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);

        this.updateKiInicial(false);
        lanzarEvento(EVENT_CHARACTER_SECCION_KI);

        this.updateBonosSecundarias(false);
        lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
    },

    /**
     *
      * @param {boolean} notificar
     */
    updateBonosPrimarias : function (notificar)  {
        var bonoAtaque = new Bono(BONO_HABILIDAD,HB_ATAQUE,this.getBonoCaracteristica(DES),"",false,BONO_CARACTERISTICA,DES3);
        this.addBono(bonoAtaque, true, false);

        var bonoParada = new Bono(BONO_HABILIDAD,HB_PARADA,this.getBonoCaracteristica(DES),"",false,BONO_CARACTERISTICA,DES3);
        this.addBono(bonoParada, true, false);

        var bonoEsquiva = new Bono(BONO_HABILIDAD,HB_ESQUIVA,this.getBonoCaracteristica(AGI),"",false,BONO_CARACTERISTICA,AGI3);
        this.addBono(bonoEsquiva, true, false);

        var bonoArmadura = new Bono(BONO_HABILIDAD,HB_ARMADURA,this.getBonoCaracteristica(FUE),"",false,BONO_CARACTERISTICA,FUE3);
        this.addBono(bonoArmadura, true, false);

        var bonoProyeccionMagica = new Bono(BONO_HABILIDAD,HB_PROYECCION_MAGICA,this.getBonoCaracteristica(DES),"",false,BONO_CARACTERISTICA,DES3);
        this.addBono(bonoProyeccionMagica, true, false);

        var bonoConvocar = new Bono(BONO_HABILIDAD,HB_CONVOCAR,this.getBonoCaracteristica(POD),"",false,BONO_CARACTERISTICA,POD3);
        this.addBono(bonoConvocar, true, false);

        var bonoAtar = new Bono(BONO_HABILIDAD,HB_ATAR,this.getBonoCaracteristica(POD),"",false,BONO_CARACTERISTICA,POD3);
        this.addBono(bonoAtar, true, false);

        var bonoDesconvocar = new Bono(BONO_HABILIDAD,HB_DESCONVOCAR,this.getBonoCaracteristica(POD),"",false,BONO_CARACTERISTICA,POD3);
        this.addBono(bonoDesconvocar, true, false);

        var bonoDominar = new Bono(BONO_HABILIDAD,HB_DOMINAR,this.getBonoCaracteristica(VOL),"",false,BONO_CARACTERISTICA,VOL3);
        this.addBono(bonoDominar, true, false);

        var bonoProyeccionPsiquica = new Bono(BONO_HABILIDAD,HB_PROYECCION_PSIQUICA,this.getBonoCaracteristica(DES),"",false,BONO_CARACTERISTICA,DES3);
        this.addBono(bonoProyeccionPsiquica, true, false);

        if (notificar) {
            lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
            lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
            lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
        }
    },

    /**
     *
     * @param {string} nombreHabilidad
     * @param {boolean} esPrimaria
     * @returns {number}
     */
    getCoste : function(nombreHabilidad, esPrimaria)  {
        var coste = 1;

        if (nombreHabilidad == HB_MULTIPLO_VIDA) {
            coste = this.categoria.multiploDeVida;
        } else if (esPrimaria) {
            coste = this.categoria.getCosteHabilidadPrimaria(nombreHabilidad);
        } else {
            coste = this.categoria.getCosteHabilidadSecundaria(nombreHabilidad);
        }

        if (coste == 0) {
            return 0;
        }

        var grupoHabilidad = getGrupoDeHabilidadSecundaria(nombreHabilidad);

        for (var i = 0; i < this.costesReducidos.length;i++) {
            var costeReducido = this.costesReducidos[i];

            if ((costeReducido.getNombre() == nombreHabilidad) ||
                (costeReducido.getNombre() == grupoHabilidad)) {
                if (costeReducido.isAbsoluto()) {
                    coste = costeReducido.getCoste();
                } else {
                    coste -= costeReducido.getCoste();
                }
            }
        }

        if (coste < 1) {
            coste = 1;
        }

        return coste;
    },

    /**
     *
     * @param {string} grupo
     * @returns {number}
     */
    maxPDsGrupoHabilidad : function(grupo)  {
        var multiplicador;
        switch (grupo) {
            case TIPO_HB_COMBATE:
                multiplicador = this.categoria.limiteCombate;
                break;
            case TIPO_HB_SOBRENATURAL:
                multiplicador = this.categoria.limiteSobrenatural;
                break;
            case TIPO_HB_PSIQUICA:
                multiplicador = this.categoria.limitePsiquica;
                break;
            default:
                multiplicador = 100000;
                break;
        }

        return this.PD_totales*multiplicador;
    },

    /**
     *
     * @param {string} grupo
     * @returns {number}
     */
    gastoActualPDsGrupoHabilidad : function(grupo)  {
        var gasto = 0;
        var tablaArmas;
        var i;

        switch (grupo) {
            case TIPO_HB_COMBATE:
                gasto = this[HB_ATAQUE].getPDinvertidos() +
                    this[HB_ESQUIVA].getPDinvertidos() +
                    this[HB_PARADA].getPDinvertidos() +
                    this[HB_ARMADURA].getPDinvertidos() +
                    this[HB_ACUM_KI_AGI].getPDinvertidos() +
                    this[HB_ACUM_KI_CON].getPDinvertidos() +
                    this[HB_ACUM_KI_DES].getPDinvertidos() +
                    this[HB_ACUM_KI_FUE].getPDinvertidos() +
                    this[HB_ACUM_KI_POD].getPDinvertidos() +
                    this[HB_ACUM_KI_VOL].getPDinvertidos() +
                    this[HB_KI_AGI].getPDinvertidos() +
                    this[HB_KI_CON].getPDinvertidos() +
                    this[HB_KI_DES].getPDinvertidos() +
                    this[HB_KI_FUE].getPDinvertidos() +
                    this[HB_KI_POD].getPDinvertidos() +
                    this[HB_KI_VOL].getPDinvertidos();

                for (i = 0; i < this.tablasArmas.length; i++) {
                    tablaArmas = this.tablasArmas[i];
                    gasto += tablaArmas.getCoste(this);
                }

                for (i = 0; i < this.artesMarciales.length; i++) {
                    gasto += costeArteMarcial(i==0);
                }
                break;
            case TIPO_HB_SOBRENATURAL:
                gasto = this[HB_ZEON].getPDinvertidos() +
                    this[HB_ACT].getPDinvertidos() +
                    this[HB_PROYECCION_MAGICA].getPDinvertidos() +
                    this[HB_CONVOCAR].getPDinvertidos() +
                    this[HB_DOMINAR].getPDinvertidos() +
                    this[HB_ATAR].getPDinvertidos() +
                    this[HB_DESCONVOCAR].getPDinvertidos();

                for (i = 0; i < this.tablasArmas.length; i++) {
                    tablaArmas = this.tablasArmas[i];
                    if (tablaArmas.getCategoriaTabla() == CATEGORIA_TABLA_MISTICAS) {
                        gasto += tablaArmas.getCoste(this);
                    }
                }
                break;
            case TIPO_HB_PSIQUICA:
                gasto = this[HB_CV].getPDinvertidos() +
                    this[HB_PROYECCION_PSIQUICA].getPDinvertidos();
                for (i = 0; i < this.tablasArmas.length; i++) {
                    tablaArmas = this.tablasArmas[i];
                    if (tablaArmas.getCategoriaTabla() == CATEGORIA_TABLA_PSIQUICAS) {
                        gasto += tablaArmas.getCoste(this);
                    }
                }
                break;
        }

        return gasto;
    },

    /**
     *
     * @param {string} nombreHabilidad
     * @returns {HabilidadDePersonaje}
     * @throws ERR_HABILIDAD_ERRONEA
     */
    getHabilidadDePersonaje : function (nombreHabilidad)  {
        if (this[nombreHabilidad] != undefined) {
            return this[nombreHabilidad];
        }

        throw ERR_HABILIDAD_ERRONEA + " " + nombreHabilidad;
    },

    /**
     *
     */
    updateNivelesPDHabilidades : function() {
        var pdsDevueltos = 0;
        var mensaje = "";
        for (var i = 0; i < this.allHabilidades.length; i++) {
            var coste = this.getCoste(this.allHabilidades[i].getHabilidad().getNombre(),this.allHabilidades[i].getHabilidad().isPrincipal());
            if (coste != 0) {
                var retorno = this.allHabilidades[i].ajustarPDEnMultiplo(coste);
                if (retorno.mensaje != "") {
                    pdsDevueltos += retorno.pdDevueltos;
                    mensaje += retorno.mensaje + "<br>";
                }
            }
        }
        if (pdsDevueltos != 0) {
            this.PD_libres += pdsDevueltos;
            lanzarEvento(EVENT_CHARACTER_SECCION_DESARROLLO);
            lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
            lanzarEvento(EVENT_CHARACTER_SECCION_KI);
            lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
            lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
            lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
            alert (mensaje);
        }
    },

    /**
     *
     * @param {string} nombreHabilidad
     */
    updateNivelesPDHabilidad : function(nombreHabilidad) {
        var coste = this.getCoste(this[nombreHabilidad].getNombre(),this[nombreHabilidad].isPrincipal());
        if (coste != 0) {
            var retorno = this[nombreHabilidad].ajustarPDEnMultiplo(coste);
            if (retorno.pdsDevueltos != 0) {
                this.PD_libres += retorno.pdsDevueltos;
                lanzarEventoSegunHabilidad(nombreHabilidad);
                alert (retorno.mensaje);
            }
        }
    },

    /**
     *
     * @param {string} nombreHabilidad
     * @param {number} gastoPD
     */
    aumentaPDHabilidad : function(nombreHabilidad, gastoPD) {
        this[nombreHabilidad].addPDinvertidos(gastoPD);
        lanzarEventoSegunHabilidad(nombreHabilidad);
        this.addPDLibres(-1 * gastoPD);
    },

//endregion Funciones generales

//region Presencia, gnosis, natura

    /**
     *
     * @returns {number}
     */
    getPresencia : function()  {
        return 30 + (5 * (this.nivel-1));
    },

    /**
     *
     * @returns {number}
     */
    getGnosis : function() {
        return this.gnosis;
    },

    /**
     *
     * @param {number} valor
     */
    setGnosis : function(valor) {
        removeEfectosGnosis(this.gnosis,personaje_actual);
        this.gnosis = valor;
        aplicaEfectosGnosis(valor,personaje_actual);
    }

//endregion Presencia, gnosis, natura
};







var MOV_ANDANDO = "Andando";

function TipoMovimiento(tipo, velocidad) {
    this.tipo = tipo;
    this.velocidad = velocidad;
}

TipoMovimiento.prototype = {
    constructor : TipoMovimiento,

    getTipo : function() {
        return this.tipo;
    },

    setTipo : function(valor) {
        this.tipo = valor;
    },

    getVelocidad : function() {
        return this.velocidad;
    },

    setVelocidad : function() {
        return this.velocidad;
    },

    toString : function() {
        return this.tipo + " " + this.velocidad;
    }
};

var ARMADURA_NATURAL = "Natural";
var ARMADURA_NINGUNA = "Ninguna";

/**
 *
 * @param {string} nombre
 * @param {number[]} arrayTAs
 * @param {boolean} blanda
 * @constructor
 */
function TipoArmadura(nombre, arrayTAs, blanda) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {number[]}
     */
    this.TAs = arrayTAs;

    /**
     *
     * @type {boolean}
     */
    this.blanda = blanda;
}

TipoArmadura.prototype = {
    constructor : TipoArmadura,

    toString : function() {
        var cadena = "[";
        for (var i = 0; i < this.TAs.length;i++) {
            cadena += this.TAs[i];
            if (i < this.TAs.length-1) {
                cadena += " ";
            }
        }
        cadena += "]"
        return cadena;
    },

    getNombre : function() {
        return this.nombre;
    },

    getTAs : function() {
        return this.TAs;
    },

    isBlanda : function() {
        return this.blanda;
    },

    setTA : function(taArmadura, valor) {
        switch (taArmadura) {
            case ATAQUE_FIL3:
            case ATAQUE_FIL:
                this.TAs[0] = valor;
                break;
            case ATAQUE_CON3:
            case ATAQUE_CON:
                this.TAs[1] = valor;
                break;
            case ATAQUE_PEN3:
            case ATAQUE_PEN:
                this.TAs[2] = valor;
                break;
            case ATAQUE_CAL3:
            case ATAQUE_CAL:
                this.TAs[3] = valor;
                break;
            case ATAQUE_FRI3:
            case ATAQUE_FRI:
                this.TAs[4] = valor;
                break;
            case ATAQUE_ELE3:
            case ATAQUE_ELE:
                this.TAs[5] = valor;
                break;
            case ATAQUE_ENE3:
            case ATAQUE_ENE:
                this.TAs[6] = valor;
                break;
        }
    },

    getTA : function(taArmadura) {
        var ta = 0;
        switch (taArmadura) {
            case ATAQUE_FIL3:
            case ATAQUE_FIL:
                ta = this.TAs[0];
                break;
            case ATAQUE_CON3:
            case ATAQUE_CON:
                ta =  this.TAs[1];
                break;
            case ATAQUE_PEN3:
            case ATAQUE_PEN:
                ta =  this.TAs[2];
                break;
            case ATAQUE_CAL3:
            case ATAQUE_CAL:
                ta =  this.TAs[3];
                break;
            case ATAQUE_FRI3:
            case ATAQUE_FRI:
                ta =  this.TAs[4];
                break;
            case ATAQUE_ELE3:
            case ATAQUE_ELE:
                ta =  this.TAs[5];
                break;
            case ATAQUE_ENE3:
            case ATAQUE_ENE:
                ta =  this.TAs[6];
                break;
        }
        return ta;
    },

    isCero : function() {
        var cero = true;
        for (var i = 0; i < this.TAs.length;i++) {
            if (this.TAs[i] != 0) {
                cero = false;
                break;
            }
        }
        return cero;
    }
};

var EST_AUM_LIBRE = "libre";
var EST_AUM_GASTADO = "gastado";
var EST_AUM_FIJO = "fijo";
var USO_AUM_NO = "no";
var USO_AUM_PC = "PC";

function AumentoCaracteristicas() {
    /**
     *
     * @type {string}
     */
    this.estado = EST_AUM_LIBRE;

    /**
     *
     * @type {string}
     */
    this.uso = USO_AUM_NO;
}

AumentoCaracteristicas.prototype = {
    constructor : AumentoCaracteristicas,

    toString : function() {
        var cadena = "";
        switch (this.estado) {
            case EST_AUM_LIBRE:
                cadena = EST_AUM_LIBRE;
                break;
            case EST_AUM_GASTADO:
            case EST_AUM_FIJO:
                cadena= "+1 " + this.uso;
                break;
        }
        return cadena;
    },

    /**
     *
     * @returns {boolean}
     */
    isLibre : function() {
        return (this.estado == EST_AUM_LIBRE);
    },

    /**
     *
     * @returns {boolean}
     */
    isAnulable : function() {
        return (this.estado == EST_AUM_GASTADO);
    },

    /**
     *
     * @returns {boolean}
     */
    gastadoEnCaracteristicas : function() {
        return ((this.uso != USO_AUM_PC) && (this.uso != USO_AUM_NO));
    },

    /**
     *
     * @param {string} caracteristica
     * @returns {boolean}
     */
    gastadoEnCaracteristica : function(caracteristica) {
        return (this.uso == caracteristica);
    },

    /**
     *
     * @returns {boolean|string}
     */
    getCaracteristica : function() {
        if (this.gastadoEnCaracteristicas()) {
            return this.uso;
        } else {
            return "";
        }
    },

    /**
     *
     * @returns {string}
     */
    getUso : function() {
        return this.uso;
    },

    /**
     *
     * @param {string} uso
     */
    gasta : function(uso) {
        this.uso = uso;
        this.estado = EST_AUM_GASTADO;
    },

    /**
     *
     */
    libera : function() {
        this.uso = USO_AUM_NO;
        this.estado = EST_AUM_LIBRE;
    },

    fija : function() {
        this.estado = EST_AUM_FIJO;
    }
};

