var EVENT_TECNICA_CREACION = "EVENT_TECNICA_CREACION";
var EVENT_COSTE_KI_CAMBIO = "EVENT_COSTE_KI_CAMBIO";

/**
 *
 * @type {HabilidadKi[]}
 */
var habilidadesKi_set = [];
var allHabilidadesKi = {};

/**
 *
 * @type {Limite[]}
 */
var limites_set = [];
var allLimites = {};

/**
 *
 * @type {TecnicaKi[]}
 */
var tecnicasMuestra_set = [];

/**
 *
 * @type {string[]}
 */
var arbolesTecnicasMuestra_set = [];

var TIPOS_EFECTOS_TECNICAS = [
    EFECTO_OFENSIVO,
    EFECTO_DEFENSIVO,
    EFECTO_DESTRUCTIVO,
    EFECTO_ACCION,
    EFECTO_REACCION,
    EFECTO_ESPACIAL,
    EFECTO_ENTEREZA,
    EFECTO_INCREMENTO,
    EFECTO_VARIADO
];


/**
 *
 * @type {EfectoTecnica[]}
 */
var efectosTecnicas = [];
var allEfectosTecnicas = {};

/**
 *
 * @type {DesventajaTecnica[]}
 */
var desventajasTecnicas = [];
var allDesventajasTecnicas = {};

/**
 *
 * @param {string} nombreHabilidadKi
 * @returns {HabilidadKi}
 * @throws ERR_HABILIDAD_KI_DESCONOCIDA
 */
function getHabilidadKi(nombreHabilidadKi) {
    if (allHabilidadesKi[nombreHabilidadKi] != undefined) {
        return allHabilidadesKi[nombreHabilidadKi];
    }
    throw ERR_HABILIDAD_KI_DESCONOCIDA + ": " + nombreHabilidadKi;
}

/**
 *
 * @param {string} nombreEfecto
 * @returns {EfectoTecnica}
 * @throws ERR_EFECTO_KI_DESCONOCIDA
 */
function getEfectoTecnicaKi(nombreEfecto) {
    if (allEfectosTecnicas[nombreEfecto] != undefined) {
        return allEfectosTecnicas[nombreEfecto];
    }
    throw ERR_EFECTO_KI_DESCONOCIDA + ": " + nombreEfecto;
}

/**
 *
 * @param {string} nombreEfecto
 * @returns {DesventajaTecnica}
 * @throws ERR_DESVENTAJA_KI_DESCONOCIDA_KI_DESCONOCIDA
 */
function getDesventajaTecnicaKi(nombreEfecto) {
    if (allDesventajasTecnicas[nombreEfecto] != undefined) {
        return allDesventajasTecnicas[nombreEfecto];
    }
    throw ERR_DESVENTAJA_KI_DESCONOCIDA_KI_DESCONOCIDA + ": " + nombreEfecto;
}

/**
 *
 * @param {string} nombreTecnicaKi
 * @returns {TecnicaKi}
 * @throws ERR_TECNICA_KI_DESCONOCIDA
 */
function getTecnicaKi(nombreTecnicaKi) {
    for(var i = 0;i < tecnicasMuestra_set.length ;i++) {
        if (tecnicasMuestra_set[i].getNombre() == nombreTecnicaKi) {
            return tecnicasMuestra_set[i];
        }
    }
    throw ERR_TECNICA_KI_DESCONOCIDA + ": " + nombreTecnicaKi;
}

/**
 *
 * @param {HabilidadKi} habilidadKi
 */
function addHabilidadKi(habilidadKi) {
    habilidadesKi_set.push(habilidadKi);
    allHabilidadesKi[habilidadKi.getNombre()] = habilidadKi;
}

/**
 *
 * @param {number} caracteristica
 * @returns {number}
 */
function valorKiBase(caracteristica) {
    if (caracteristica <= 10) {
        return caracteristica;
    } else {
        return 10 + (2*(caracteristica-10));
    }
}

/**
 *
 * @param {number} caracteristica
 * @returns {number}
 */
function acumulacionKiBase(caracteristica) {
    if (caracteristica <= 9) {
        return 1;
    } else if (caracteristica <= 12) {
        return 2;
    } else if (caracteristica <= 15) {
        return 3;
    } else {
        return 4;
    }

}

/**
 *
 * @param {boolean} aplicar
 */
function efectoControlKi(aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_PUEDE_USAR_TECNICAS);
    } else {
        personaje_actual.removeFlag(FLAG_PUEDE_USAR_TECNICAS);
    }
}

/**
 *
 * @param {boolean} aplicar
 */
function efectoDeteccionKi(aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_DETECCION_KI);
    } else {
        personaje_actual.removeFlag(FLAG_DETECCION_KI);
    }
}

/**
 *
 * @param {boolean} aplicar
 */
function efectoKiArmaduraEnergia(aplicar) {
    if (aplicar) {
        personaje_actual.setArmaduraNatural(sumarArmadura(personaje_actual.getArmaduraNatural().getTAs(),[0,0,0,0,0,0,2]));
    } else {
        personaje_actual.setArmaduraNatural(sumarArmadura(personaje_actual.getArmaduraNatural().getTAs(),[0,0,0,0,0,0,-2]));
    }
}

/**
 *
 * @param {boolean} aplicar
 */
function efectoExtrusionAura(aplicar) {
    var bonoDaño = new Bono(BONO_DAÑO,BONO_DAÑO,10,"",false,BONO_ESPECIAL,HAB_KI_EXTENSION_AURA_ARMA)
    var bonoEntereza = new Bono(BONO_ENTEREZA,BONO_ENTEREZA,10,"",false,BONO_ESPECIAL,HAB_KI_EXTENSION_AURA_ARMA)
    var bonoRotura = new Bono(BONO_ROTURA,BONO_ROTURA,5,"",false,BONO_ESPECIAL,HAB_KI_EXTENSION_AURA_ARMA)
    if (aplicar) {
        personaje_actual.addBono(bonoDaño,false,false);
        personaje_actual.addBono(bonoEntereza,false,false);
        personaje_actual.addBono(bonoRotura,false,true);
    } else {
        personaje_actual.removeBono(bonoDaño,false);
        personaje_actual.removeBono(bonoEntereza,false);
        personaje_actual.removeBono(bonoRotura,true);
    }
}

/**
 *
 * @param {boolean} aplicar
 */
function efectoOcultacionKi(aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_OCULTACION_KI);
    } else {
        personaje_actual.removeFlag(FLAG_OCULTACION_KI);
    }
}

/**
 *
 * @param {boolean} aplicar
 */
function efectoInhumanidad(aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_INHUMANIDAD);
    } else {
        personaje_actual.removeFlag(FLAG_INHUMANIDAD);
    }
}

/**
 *
 * @param {boolean} aplicar
 */
function efectoZen(aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_ZEN);
    } else {
        personaje_actual.removeFlag(FLAG_ZEN);
    }
}

/**
 *
 * @param {boolean} aplicar
 */
function sinEfecto(aplicar) {

}

/**
 *
 * @param {{opcion:string}} parametros
 */
function eligeHabilidadKi(parametros) {
    var habilidadKi = getHabilidadKi(parametros.opcion);

    desactivarNotificaciones();
    personaje_actual.addCMGastado(habilidadKi.getCosteCM());
    activarNotificaciones();
    personaje_actual.addHabilidadKi(habilidadKi.getNombre(), false, true);
}

/**
 *
 * @param {{data:{habilidadKi:HabilidadKi}}} event
 */
function anularHabilidadKi(event) {
    var habilidadKi = event.data.habilidadKi;

    desactivarNotificaciones();
    personaje_actual.addCMGastado(-1 * habilidadKi.getCosteCM());
    activarNotificaciones();
    personaje_actual.removeHabilidadKi(habilidadKi.getNombre());
}

/**
 *
 * @param {{opcion:string}} parametros
 * @returns {boolean}
 */
function noPuedeComprarHabilidadKi(parametros) {
    /**
     *
     * @type {HabilidadKi}
     */
    var habilidadKi = getHabilidadKi(parametros.opcion);
    var puede = true;

    if (!habilidadKi.cumple(personaje_actual)) {
        puede = false;
    }

    if (habilidadKi.getCosteCM() > personaje_actual.getCMTotal()-personaje_actual.getCMGastado()) {
        puede = false;
    }

    if (personaje_actual.hasHabilidadKi(parametros.opcion)) {
        puede = false;
    }

    return !puede;
}

/**
 *
 * @param {number} nivel
 * @returns {number}
 */
function maxCMTecnica(nivel) {
    var maxCM;

    if (nivel == 1) {
        maxCM = 50;
    } else if (nivel == 2) {
        maxCM = 100;
    } else {
        maxCM = 200;
    }

    return maxCM;
}

/**
 *
 * @param {number} nivel
 * @returns {number}
 */
function minCMTecnica(nivel) {
    var minCM;

    if (nivel == 1) {
        minCM = 20;
    } else if (nivel == 2) {
        minCM = 40;
    } else {
        minCM = 60;
    }

    return minCM;
}

/**
 *
 * @param {number} nivel
 * @returns {number}
 */
function maxDesventajasTecnica(nivel) {
    var maxDesventajas;

    if (nivel == 1) {
        maxDesventajas = 1;
    } else if (nivel == 2) {
        maxDesventajas = 2;
    } else {
        maxDesventajas = 3;
    }

    return maxDesventajas;
}

/**
 *
 * @param {number} nivel
 * @returns {number}
 */
function costeTecnicaMantenida(nivel) {
    var coste;

    if (nivel == 1) {
        coste = 10;
    } else if (nivel == 2) {
        coste = 20;
    } else {
        coste = 30;
    }

    return coste;
}


/**
 *
 * @param {{opcion:string}} parametros
 */
function eligeTecnicaKi(parametros) {
    var tecnicaKi = getTecnicaKi(parametros.opcion);

    desactivarNotificaciones();
    personaje_actual.addCMGastado(tecnicaKi.getCosteCM());
    activarNotificaciones();
    personaje_actual.addTecnicaKi(tecnicaKi);
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi}}} event
 */
function anularTecnicaKi(event) {
    var tecnicaKi = event.data.tecnicaKi;

    desactivarNotificaciones();
    personaje_actual.addCMGastado(-1 * tecnicaKi.getCosteCM());
    activarNotificaciones();
    personaje_actual.removeTecnicaKi(tecnicaKi.getNombre());
}

/**
 *
 * @param {{opcion:string}} parametros
 * @returns {boolean}
 */
function noPuedeComprarTecnicaKi(parametros) {
    /**
     *
     * @type {TecnicaKi}
     */
    var tecnicaKi = getTecnicaKi(parametros.opcion);

    return !personaje_actual.puedeComprarTecnicaKi(tecnicaKi);
}


/*
 Paso 1: Selecciona el nivel de la Técnica.

 Paso 2: Decide su efecto principal.
 Elige el efecto principal de la Técnica. Recuerda que su coste en puntos de Ki es el que se encuentra en la casilla Primario.

 Paso 3: Elige sus efectos secundarios.
 La Técnica no tiene por qué tener efectos secundarios. De cualquier modo, puedes elegir tantos como creas que te permitirá tu CM.
 El coste en puntos de Ki de los efectos secundarios debe de mirarse en la casilla Secundario.

 Paso 4: Calcula el CM de la Técnica.
 Por muchas desventajas que se elija, no es posible disminuir más de la
 mitad el CM originario de la Técnica.

 Paso 5: Calcula el coste de acumulación de los efectos.
 Mira el coste de Ki de los efectos que has elegido y en qué características se basan.

 Paso 6: Modifica los costes de acumulación entre atributos.
 Este es el paso más complicado. Ahora que ya sabes lo que cuesta cada efecto en puntos de Ki, puedes modificar su valor entre las características
 opcionales. Puedes coger todos o sólo parte de los puntos de Ki que cuesta acumular la Técnica y repartirlos entre tantas características opcionales
 como quieras. Cada una tiene un valor añadido que debes sumar al coste de acumulación si quieres invertir puntos en ella. Si deseas repartir una
 cantidad entre distintas características opcionales, debes sumar siempre el valor añadido del cambio de cada característica.

 MANTENIMIENTO
 Es posible mantener
 sólo parte de los efectos de una Técnica y dejar que otros se extingan.

 */

/**
 *
 * @param {EfectoTecnica} efectoTecnica
 */
function addEfectoTecnica(efectoTecnica) {
    efectosTecnicas.push(efectoTecnica);
    allEfectosTecnicas[efectoTecnica.getNombre()] = efectoTecnica;
}

/**
 *
 * @param {DesventajaTecnica} desventajaTecnica
 */
function addDesventajaTecnica(desventajaTecnica) {
    desventajasTecnicas.push(desventajaTecnica);
    allDesventajasTecnicas[desventajaTecnica.getNombre()] = desventajaTecnica;
}

/**
 *
 * @returns {boolean}
 */
function noPuedeComprarTecnicas() {
    return !personaje_actual.hasFlag(FLAG_PUEDE_USAR_TECNICAS);
}

/**
 *
 */
function crearTecnicaKi() {
    var nuevaTecnica = new TecnicaKi(1);
    muestraDialogoCrearTecnicaKi(nuevaTecnica);
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi}}} event
 */
function elegirManualNombreTecnica(event) {
    var tecnicaKi = event.data.tecnicaKi;
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{tecnicaKi:tecnicaKi},{principal:asignarNombreTecnica,isDisabled:alwaysEnabled});
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi,opcion:string}} parametros
 */
function asignarNombreTecnica(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    tecnicaKi.setNombre(parametros.opcion);
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi}}} event
 */
function elegirNivelTecnica(event) {
    var tecnicaKi = event.data.tecnicaKi;

    muestraDialogoElegirOpciones(
        [
            new OpcionMostrable("1","1",""),
            new OpcionMostrable("2","2",""),
            new OpcionMostrable("3","3","")
        ],
        {tecnicaKi:tecnicaKi},{principal:asignarNivelTecnica,isDisabled:alwaysEnabled},true);
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi,opcion:string}} parametros
 */
function asignarNivelTecnica(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    tecnicaKi.setNivel(parseInt(parametros.opcion));
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi}}} event
 */
function elegirManualDescripcionTecnica(event) {
    var tecnicaKi = event.data.tecnicaKi;
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{tecnicaKi:tecnicaKi},{principal:asignarDescripcionTecnica,isDisabled:alwaysEnabled});
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi,opcion:string}} parametros
 */
function asignarDescripcionTecnica(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    tecnicaKi.setDescripcion(parametros.opcion);
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi,efecto:EfectoTecnica}}} event
 */
function añadeEfectoPrimarioTecnica(event) {
    var tecnicaKi = event.data.tecnicaKi;
    var efectoTecnica = event.data.efecto;

    var arrayOpciones = [];
    var nivelesEfecto = efectoTecnica.getNivelesEfecto();
    for (var i = 0; i < nivelesEfecto.length; i++) {
        arrayOpciones.push(new OpcionMostrable(_l(nivelesEfecto[i].getNombre()),nivelesEfecto[i].getNombre(),"",_l(UI_CM) + ": "+nivelesEfecto[i].getCosteCM()+", "+_l(UI_COSTE_KI)+": " + nivelesEfecto[i].getCostePrimario()));
    }

    muestraDialogoElegirOpciones(arrayOpciones,{tecnicaKi:tecnicaKi,efecto:efectoTecnica},{principal:asignaEfectoPrimarioTecnica,isDisabled:noPuedeElegirEfectoPrimario},true);
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi,efecto:EfectoTecnica,opcion:string}} parametros
 */
function asignaEfectoPrimarioTecnica(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    var efectoTecnica = parametros.efecto;
    var nivelElegido = efectoTecnica.getNivelEfectoPorNombre(parametros.opcion);

    tecnicaKi.fijaComoPrimario(new EfectoTecnicaElegido(efectoTecnica,nivelElegido));
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi,efecto:EfectoTecnica,opcion:string}} parametros
 */
function noPuedeElegirEfectoPrimario(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    var efectoTecnica = parametros.efecto;
    var nivelElegido = efectoTecnica.getNivelEfectoPorNombre(parametros.opcion);

    return !tecnicaKi.puedeFijarComoPrimario(new EfectoTecnicaElegido(efectoTecnica,nivelElegido));
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi,efecto:EfectoTecnica}}} event
 */
function añadeEfectoSecundarioTecnica(event) {
    var tecnicaKi = event.data.tecnicaKi;
    var efectoTecnica = event.data.efecto;

    var arrayOpciones = [];
    var nivelesEfecto = efectoTecnica.getNivelesEfecto();
    for (var i = 0; i < nivelesEfecto.length; i++) {
        arrayOpciones.push(new OpcionMostrable(_l(nivelesEfecto[i].getNombre()),nivelesEfecto[i].getNombre(),"",_l(UI_CM)+": "+nivelesEfecto[i].getCosteCM()+", "+_l(UI_COSTE_KI)+": " + nivelesEfecto[i].getCosteSecundario()));
    }

    muestraDialogoElegirOpciones(arrayOpciones,{tecnicaKi:tecnicaKi,efecto:efectoTecnica},{principal:asignaEfectoSecundarioTecnica,isDisabled:noPuedeElegirEfectoSecundario},true);
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi,desventaja:DesventajaTecnica}}} event
 */
function añadeDesventajaTecnica(event) {
    var tecnicaKi = event.data.tecnicaKi;
    var desventajaTecnicaElegida = new DesventajaTecnicaElegida(event.data.desventaja);
    var efectoDesventaja = desventajaTecnicaElegida.getEfecto();

    if (efectoDesventaja.length == 0) {
        tecnicaKi.addDesventaja(desventajaTecnicaElegida);
    } else {
        var funcCall = efectoDesventaja[0];
        var arguments = efectoDesventaja.slice(0,efectoDesventaja.length);
        arguments.shift();
        arguments.push(tecnicaKi);
        arguments.push(desventajaTecnicaElegida);
        funcCall.apply(this,arguments);
    }
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi,efecto:EfectoTecnica,opcion:string}} parametros
 */
function asignaEfectoSecundarioTecnica(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    var efectoTecnica = parametros.efecto;
    var nivelElegido = efectoTecnica.getNivelEfectoPorNombre(parametros.opcion);

    tecnicaKi.addEfectoSecundario(new EfectoTecnicaElegido(efectoTecnica,nivelElegido));
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi,efecto:EfectoTecnica,opcion:string}} parametros
 */
function noPuedeElegirEfectoSecundario(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    var efectoTecnica = parametros.efecto;
    var nivelElegido = efectoTecnica.getNivelEfectoPorNombre(parametros.opcion);

    return !tecnicaKi.puedeAñadirSecundario(new EfectoTecnicaElegido(efectoTecnica,nivelElegido));
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi,efect:EfectoTecnicaElegido}}} event
 */
function quitaEfectoSecundario(event) {
    event.data.tecnicaKi.removeEfectoSecundario(event.data.efecto);
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi,efecto:EfectoTecnicaElegido,ventaja:VentajaTecnicaElegida}}} event
 */
function quitaVentajaEfecto(event) {
    event.data.tecnicaKi.removeVentajaEfecto(event.data.efecto,event.data.ventaja);
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi,desventaja:DesventajaTecnicaElegida}}} event
 */
function quitaDesventajaTecnica(event) {
    event.data.tecnicaKi.removeDesventaja(event.data.desventaja);
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi,efectoTecnica:EfectoTecnicaElegido,activado:boolean}}} event
 */
function cambiaMantenimiento(event) {
    var tecnicaKi = event.data.tecnicaKi;
    var efecto = event.data.efectoTecnica;
    var activado = event.data.activado;

    if ((activado) && (!efecto.isMantenido())) {
        tecnicaKi.setEfectoMantenido(efecto,true);
    } else if ((!activado) && (efecto.isMantenido())) {
        tecnicaKi.setEfectoMantenido(efecto,false);
    }
}

/**
 *
 * @param {TecnicaKi} tecnicaKi
 * @param {DesventajaTecnica} desventaja
 * @returns {boolean}
 */
function puedeAñadirseDesventajaATecnica(tecnicaKi,desventaja) {
    var puede = true;
    var desventajasActuales = tecnicaKi.getDesventajas();

    if (desventajasActuales.length >= tecnicaKi.getMaxDesventajas()) {
        puede = false;
    }

    for (var i = 0; i < desventajasActuales.length; i++) {
        var incompatibles = desventajasActuales[i].getIncompatibles();
        for (var j= 0; j < incompatibles.length;j++) {
            if (incompatibles[j] == desventaja.getNombre()) {
                puede = false;
                break;
            }
        }
    }

    return puede;
}

/**
 *
 * @param {number} numAtaduras
 * @param {TecnicaKi} tecnicaKi
 * @param {DesventajaTecnicaElegida} desventajaTecnicaElegida
 */
function elegirAtaduraElemental(numAtaduras, tecnicaKi, desventajaTecnicaElegida) {

    var gruposOpciones = [
        new GrupoOpciones(_l(UI_ATADURA_ELEMENTAL),[ELEMENTO_AGUA,ELEMENTO_AIRE,ELEMENTO_FUEGO,ELEMENTO_TIERRA,ELEMENTO_LUZ,ELEMENTO_OSCURIDAD],numAtaduras)
    ];
    parametros = {
        tecnicaKi:tecnicaKi,
        desventajaTecnicaElegida: desventajaTecnicaElegida
    };
    dialogoSeleccionMultiple(gruposOpciones,parametros,ataduraElementalElegida);
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi,desventajaTecnicaElegida:DesventajaTecnicaElegida,grupoOpciones:GrupoOpciones[]}}  parametros
 */
function ataduraElementalElegida(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    var desventajaTecnicaElegida = parametros.desventajaTecnicaElegida;
    var grupoOpciones = parametros.gruposOpciones[0];

    var ataduras = grupoOpciones.opcionesElegidas;

    var elementos = new ElementosAfines(ataduras);

    desventajaTecnicaElegida.setAtaduraElemental(elementos);

    tecnicaKi.addDesventaja(desventajaTecnicaElegida);
}

/**
 *
 * @param {number} minCM
 * @param {number} maxCM
 * @param {TecnicaKi} tecnicaKi
 * @param {DesventajaTecnicaElegida} desventajaTecnicaElegida
 */
function introducirCosteCMYDescripcion(minCM, maxCM, tecnicaKi, desventajaTecnicaElegida) {

    var arrayOpciones = [];

    for (var i = minCM; i <= maxCM; i += 5) {
        arrayOpciones.push(new OpcionMostrable(i,i,""));
    }
    desventajaTecnicaElegida.setDescripcion(prompt(_l(UI_ESPECIFICA),""));
    parametros = {
        tecnicaKi:tecnicaKi,
        desventajaTecnicaElegida: desventajaTecnicaElegida
    };
    muestraDialogoElegirOpciones(arrayOpciones,parametros,{principal:costeCMIntroducido,isDisabled:alwaysEnabled},true);
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi,desventajaTecnicaElegida:DesventajaTecnicaElegida,opcion:string}}  parametros
 */
function costeCMIntroducido(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    var desventajaTecnicaElegida = parametros.desventajaTecnicaElegida;
    var costeCM = parametros.opcion;

    desventajaTecnicaElegida.setCosteCM(costeCM);

    tecnicaKi.addDesventaja(desventajaTecnicaElegida);
}

/**
 *
 */
function comprarHabilidadKi() {
    var arrayOpciones = [];

    for (var i = 0; i < habilidadesKi_set.length; i++) {
        arrayOpciones.push(new OpcionMostrable(_l(habilidadesKi_set[i].getNombre()),habilidadesKi_set[i].getNombre(),"",_l(habilidadesKi_set[i].getDescripcion())));
    }

    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: eligeHabilidadKi, isDisabled: noPuedeComprarHabilidadKi}, true);
}

/**
 *
 */
function comprarTecnicaKi() {
    var arrayOpciones = [];
    var categorias = [];

    for (var i = 0; i < tecnicasMuestra_set.length; i++) {
        arrayOpciones.push(new OpcionMostrable(_l(tecnicasMuestra_set[i].getNombre()),tecnicasMuestra_set[i].getNombre(),tecnicasMuestra_set[i].getArbolTecnicas(),_l(tecnicasMuestra_set[i].getDescripcion())));
    }

    for (i = 0; i < arbolesTecnicasMuestra_set.length;i++) {
        categorias.push(new OpcionMostrable(_l(arbolesTecnicasMuestra_set[i]),arbolesTecnicasMuestra_set[i],arbolesTecnicasMuestra_set[i]));
    }

    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: eligeTecnicaKi, isDisabled: noPuedeComprarTecnicaKi}, true,categorias);
}

/**
 *
 * @param {TecnicaKi} tecnicaKi
 * @param {EfectoTecnica} efecto
 * @param {boolean} esPrincipal
 */
function puedeComprarseEfecto(tecnicaKi, efecto, esPrincipal) {
    var puede = true;

    if (!tecnicaKi.puedeAñadirEfectoDeElementos(efecto.getElementosAfines())) {
        puede = false;
    }

    return puede;
}

/**
 *
 * @param {boolean} aplicar
 */
function efectoKiAtaqueElementalFuego(aplicar) {
    //TODO ataque elemental
    if (aplicar) {

    } else {

    }
}
/**
 *
 * @param {boolean} aplicar
 */
function efectoKiAtaqueElementalAgua(aplicar) {
    //TODO ataque elemental
    if (aplicar) {

    } else {

    }
}
/**
 *
 * @param {boolean} aplicar
 */
function efectoKiAtaqueElementalAire(aplicar) {
    //TODO ataque elemental
    if (aplicar) {

    } else {

    }
}
/**
 *
 * @param {boolean} aplicar
 */
function efectoKiAtaqueElementalTierra(aplicar) {
    //TODO ataque elemental
    if (aplicar) {

    } else {

    }
}
/**
 *
 * @param {boolean} aplicar
 */
function efectoKiAtaqueElementalLuz(aplicar) {
    //TODO ataque elemental
    if (aplicar) {

    } else {

    }
}
/**
 *
 * @param {boolean} aplicar
 */
function efectoKiAtaqueElementalOscuridad(aplicar) {
    //TODO ataque elemental
    if (aplicar) {

    } else {

    }
}


/**
 *
 * @param {boolean} aplicar
 */
function efectoKiDañoIncrementado(aplicar) {
    var bonoDaño = new Bono(BONO_DAÑO,BONO_DAÑO,10,"",false,BONO_ESPECIAL,HAB_KI_DAÑO_INCREMENTADO)
    if (aplicar) {
        personaje_actual.addBono(bonoDaño,false,false);
    } else {
        personaje_actual.removeBono(bonoDaño,false);
    }
}

/**
 *
 * @param {boolean} aplicar
 */
function efectoKiVelocidadIncrementada(aplicar) {
    var bonoTurno = new Bono(BONO_TURNO,BONO_TURNO,10,"",false,BONO_ESPECIAL,HAB_KI_VELOCIDAD_INCREMENTADA)
    if (aplicar) {
        personaje_actual.addBono(bonoTurno,false,false);
    } else {
        personaje_actual.removeBono(bonoTurno,false);
    }
}

/**
 *
 * @param {boolean} aplicar
 */
function efectoKiEscudoFisico(aplicar) {
    //TODO barrera de daño igual a presencia
    if (aplicar) {

    } else {

    }
}

/**
 *
 * @param {boolean} aplicar
 */
function efectoNemesisCuerpoDeVacio(aplicar) {
    desactivarNotificaciones();
    aumentaResistencia(0,0, aplicar,RF,20, HAB_NEMESIS_CUERPO_DE_VACIO);
    aumentaResistencia(0,0, aplicar,RE,20, HAB_NEMESIS_CUERPO_DE_VACIO);
    aumentaResistencia(0,0, aplicar,RV,20, HAB_NEMESIS_CUERPO_DE_VACIO);
    aumentaResistencia(0,0, aplicar,RM,20, HAB_NEMESIS_CUERPO_DE_VACIO);
    aumentaResistencia(0,0, aplicar,RP,20, HAB_NEMESIS_CUERPO_DE_VACIO);
    activarNotificaciones();
    lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
}


function anularLimite(event) {
    var limite = event.data.limite;

    desactivarNotificaciones();
    personaje_actual.addCMGastado(-1 * limite.coste);
    activarNotificaciones();
    personaje_actual.removeLimite(limite);
}

function comprarLimite() {
    var arrayOpciones = [];

    for (var i = 0; i < limites_set.length; i++) {
        arrayOpciones.push(new OpcionMostrable(_l(limites_set[i].nombre),limites_set[i].nombre,"",limites_set[i].coste + " " + _l(UI_CM)));
    }

    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: eligeLimite , isDisabled:noPuedeComprarLimite}, true);
}

function getLimite(nombreLimite) {
    if (allLimites[nombreLimite]) {
        return allLimites[nombreLimite];
    } else {
        throw _l(ERR_LIMITE_DESCONOCIDO) + ": " + nombreLimite;
    }
}

/**
 *
 * @param {{opcion:string}} parametros
 */
function eligeLimite(parametros) {
    var limite = getLimite(parametros.opcion);

    desactivarNotificaciones();
    personaje_actual.addCMGastado(limite.coste);
    activarNotificaciones();
    personaje_actual.addLimite(limite);
}

function noPuedeComprarLimite(parametros) {
    /**
     *
     * @type {Limite}
     */
    var limite = getLimite(parametros.opcion);
    var puede = true;

    if (personaje_actual.hasLimite(limite)) {
        puede = false;
    }

    if((personaje_actual.getLimite().length == 1) && (!personaje_actual.hasFlag(FLAG_LIMITE_DUAL))) {
        puede = false;
    }

    if (personaje_actual.getLimite().length > 1) {
        puede =false;
    }

    if (limite.coste > personaje_actual.getCMTotal()-personaje_actual.getCMGastado()) {
        puede = false;
    }

    return !puede;
}

