/**
 * @type Personaje
 */
var personaje_actual;

/**
 *
 * @type {boolean}
 */
var ESTADO_GENERACION_INICIADA = "ESTADO_GENERACION_INICIADA";
var ESTADO_GENERACION_NINGUNO = "ESTADO_GENERACION_NINGUNO";
var ESTADO_GENERACION_PERSONAJE_HECHO = "ESTADO_GENERACION_PERSONAJE_HECHO";
var ESTADO_GENERACION_SUBIENDO_NIVEL = "ESTADO_GENERACION_SUBIENDO_NIVEL";
GENERACION_INICIADA = ESTADO_GENERACION_NINGUNO;

var RANGOS_HABILIDAD = "RANGOS_HABILIDAD";
var TABLA_ARMAS = "TABLA_ARMAS";
var POTENCIAL_PSIQUICO = "POTENCIAL_PSIQUICO";

var MAX_DIF_ATAQUE_DEFENSA = 50;

var PERSONAJE_EN_MARCHA = false;
/**
 *
 */
function iniciarGeneracion() {
    if (PERSONAJE_EN_MARCHA) {

        var adelante = confirm(CONFIRMACION_NUEVO_PERSONAJE);

        if (!adelante) {
            return;
        }
    }
    desactivarNotificaciones();
    personaje_actual = new Personaje();
    personaje_actual.setRaza(getRaza(RAZA_HUMANO));
    personaje_actual.setCategoria(CATEGORIA_NOVEL);

    personaje_actual.GENERACION_INICIADA = ESTADO_GENERACION_INICIADA;
    PERSONAJE_EN_MARCHA = true;
    activarNotificaciones();
    mostrarPersonajeActual();
    mostrarDialogoTipoGeneracion();
}

/**
 *
 * @returns {string}
 */
function getSexoAzar() {
    var azar = d(2);
    if (azar = 1) {
        return SEXO_HOMBRE;
    } else {
        return SEXO_MUJER;
    }
}
/***** PASO 1: Características *****/

/**
 *
 * @param {number} metodo
 * @throws ERR_METODO_DESCONOCIDO
 */
function generarMetodo(metodo) {
    switch (metodo) {
        case 0:
            generarMetodo0();
            break;
        case 1:
            generarMetodo1();
            break;
        case 2:
            generarMetodo2();
            break;
        case 3:
            generarMetodo3();
            break;
        case 4:
            generarMetodo4();
            break;
        case 5:
            generarMetodo5();
            break;
        default:
            throw ERR_METODO_DESCONOCIDO;
            break;
    }
}

/**
 *
 * @param {number} metodo
 * @returns {string}
 * @throws ERR_METODO_DESCONOCIDO
 */
function getExplicacionMetodo(metodo) {
    switch (metodo) {
        case 0:
            return EXPLI_METODO_0;
            break;
        case 1:
            return EXPLI_METODO_1;
            break;
        case 2:
            return EXPLI_METODO_2;
            break;
        case 3:
            return EXPLI_METODO_3;
            break;
        case 4:
            return EXPLI_METODO_4;
            break;
        case 5:
            return EXPLI_METODO_5;
            break;
        default:
            throw ERR_METODO_DESCONOCIDO;
            break;
    }
}

/**
 *
 */
function generarMetodo0() {
    mostrarDialogoRepartoPuntosCaracteristicas(0, false, true);
}

/**
 *
 */
function generarMetodo1() {
    var tiradas = [];
    var valoresAbandonados = [];

    for (var i = 0; i < CARACTERISTICAS_NOMBRES.length; i++) {
        tiradas[i] = d10();
    }

    var min = 30;
    var indiceMin = 0;
    for (var j = 0; j < tiradas.length; j++) {
        while (tiradas[j] <= 3) {
            valoresAbandonados.push(tiradas[j]);
            tiradas[j] = d10();
        }
        if (tiradas[j] <= min) {
            min = tiradas[j];
            indiceMin = j;
        }
    }

    valoresAbandonados.push(min);
    tiradas[indiceMin] = 9;

    tiradas.sort();
    valoresAbandonados.sort();

    mostrarDialogoRepartoTiradasCaracteristicas(tiradas,valoresAbandonados);
}

/**
 *
 */
function generarMetodo2() {
    var tiradas = [];
    var valoresAbandonados = [];

    for (var i = 0; i < CARACTERISTICAS_NOMBRES.length; i++) {
        var valor1 = d10();
        var valor2 = d10();

        if (valor1 < valor2) {
            valoresAbandonados.push(valor1);
            tiradas.push(valor2);
        } else {
            valoresAbandonados.push(valor2);
            tiradas.push(valor1);
        }
    }
    tiradas.sort();
    valoresAbandonados.sort();

    mostrarDialogoRepartoTiradasCaracteristicas(tiradas,valoresAbandonados);
}

/**
 *
 */
function generarMetodo3() {
    desactivarNotificaciones();
    for (var i = 0; i < CARACTERISTICAS_NOMBRES.length; i++) {
        personaje_actual.setCaracteristica(CARACTERISTICAS_NOMBRES[i],d10());
    }
    activarNotificaciones();
    finAsignacionCaracteristicas()
}

/**
 *
 */
function generarMetodo4() {
    var total = 0;
    for (var i = 0; i < 7; i++) {
        total += d10();
    }
    mostrarDialogoRepartoPuntosCaracteristicas(total, false, false);
}

/**
 *
 */
function generarMetodo5() {
    muestraDialogoElegirOpciones([new OpcionMostrable("45","45",""),new OpcionMostrable("50","50",""),new OpcionMostrable("55","55",""),new OpcionMostrable("60","60",""),new OpcionMostrable("65","65",""),new OpcionMostrable(_l(UI_ESPECIFICAR),UI_ESPECIFICAR,"")],{},{principal:metodo5PuntosElegidos,isDisabled:alwaysEnabled},false);
}

function metodo5PuntosElegidos(parametros) {
    var total = 0;
    if (parametros.opcion == UI_ESPECIFICAR) {
        total = parseInt(prompt(UI_PREGUNTA_PUNTOS_METODO_5));
    } else {
        total = parseInt(parametros.opcion);
    }
    mostrarDialogoRepartoPuntosCaracteristicas(total, true, false);
}

/**
 *
 */
function finAsignacionCaracteristicas() {
    desactivarNotificaciones();
    personaje_actual.setTamaño(personaje_actual.getCaracteristica(FUE) + personaje_actual.getCaracteristica(CON));
    personaje_actual.setApariencia(d10());
    personaje_actual.setFlag(FLAG_APARIENCIA_ALEATORIA);
    activarNotificaciones();
    lanzarEvento(EVENT_CHARACTER_SECCION_CARACTERISTICAS);
    personaje_actual.updateBonoyBases();
}

/***** PASO 2: Raza *****/

/**
 *
 * @param {{}} event
 */
function aplicarRaza(event) {
    $("#dialogElegirRaza").dialog("close");
    var raza = event.data.raza;

    personaje_actual.setRaza(raza);
}

/***** PASO 3: Categoría *****/
/**
 *
 * @param {Categoria} categoria
 */
function aplicarCategoria(categoria) {
    personaje_actual.setCategoria(categoria);
}

/***** PASO 4: Ventajas y Desventajas ******/
/**
 *
 * @param {{}} event
 */
function aplicarElementoPC(event) {
    $("#dialogPuntosCreacion").dialog("close");
    /**
     *
     * @type {Ventaja}
     */
    var elementoPC = event.data.elementoPC;
    var isVentaja = event.data.isVentaja;
    var costes = elementoPC.getCostes();

    if (elementoPC.nombre == VENT_POSICION_SOCIAL) {
        var origen = getOrigen(personaje_actual.getOrigen());

        if (origen) {
            if (origen.costePosicionSocial != 0) {
                costes = [];
                costes.push(origen.costePosicionSocial);
            }
        }
    }
    if (costes.length > 1) {
        var arrayOpciones = [];
        for (var i=0; i < costes.length;i++) {
            arrayOpciones.push(new OpcionMostrable(costes[i],costes[i],""));
        }
        muestraDialogoElegirOpciones(arrayOpciones, {elementoPC: elementoPC, isVentaja: isVentaja}, {principal: aplicarElementoPCPaso2, isDisabled: alwaysEnabled}, true);
    } else {
        aplicarElementoPCPaso2({elementoPC: elementoPC,opcion: costes[0], isVentaja: isVentaja});
    }
}

/**
 *
 * @param {{}} parametros
 */
function aplicarElementoPCPaso2(parametros) {
    var coste = parametros.opcion;
    var elementoPC = parametros.elementoPC;
    var isVentaja = parametros.isVentaja;

    var elegir = elementoPC.getElegir();
    if (elementoPC.nombre == VENT_POSICION_SOCIAL) {
        var origen = getOrigen(personaje_actual.getOrigen());

        if (origen) {
            if (origen.clasePosicionSocial.length > 1) {
                elegir = [];
                for (var i = 0; i < origen.clasePosicionSocial.length;i++) {
                    elegir.push(origen.clasePosicionSocial[i]);
                }
            }
        }
    }
    if (elegir.length > 0) {
        muestraDialogoElegirOpcion(elegir[0],{elementoPC: elementoPC,coste: coste, isVentaja: isVentaja},{principal: aplicarElementoPCFinal, isDisabled: opcionElementoPCNoValida});
    } else {
        aplicarElementoPCFinal({elementoPC: elementoPC,coste: coste, opcion: "", isVentaja: isVentaja});
    }
}

/**
 *
 * @param {{}} parametros
 * @returns {boolean}
 */
function opcionElementoPCNoValida(parametros) {
    var elementoPC = parametros.elementoPC;
    var opcion = parametros.opcion;

    return !(personaje_actual.puedeComprar(elementoPC,opcion));
}

/**
 *
 * @param {number} coste
 * @param {Ventaja} elementoPC
 * @param {string} opcion
 * @param {string} [atributoPCGrupo]
 * @param {string} [atributoRepartoCostes]
 */
function aplicarVentajaFinalGrupo(coste, elementoPC, opcion, atributoPCGrupo, atributoRepartoCostes) {
    var repartoCostes = new RepartoCostes();
    var diferencial = 0;

    if (atributoPCGrupo != undefined) {
        diferencial = personaje_actual[atributoPCGrupo];
    }

    if (personaje_actual.getPCLibres() + diferencial >= coste) {
        personaje_actual.addVentaja(elementoPC, coste, opcion, ORIGEN_PC, true, repartoCostes, true);
        personaje_actual.updatePC();
    } else {
        alert(ERR_PC_INSUFICIENTES);
    }
}

/**
 *
 * @param {Ventaja} elementoPC
 * @param {number} coste
 * @param {string} opcion
 */
function aplicarVentajaFinal(elementoPC, coste, opcion) {
    if (elementoPC.getGrupo() == GRUPO_DON) {
        aplicarVentajaFinalGrupo(coste, elementoPC, opcion, "PC_libres_don", "don");
    } else if (elementoPC.getGrupo() == GRUPO_PSIQUICAS) {
        aplicarVentajaFinalGrupo(coste, elementoPC, opcion, "PC_libres_psiquicas", "psiquica");
    } else if (elementoPC.getGrupo() == GRUPO_TRASFONDO) {
        aplicarVentajaFinalGrupo(coste, elementoPC, opcion, "PC_libres_trasfondo", "trasfondo");
    } else {
        aplicarVentajaFinalGrupo(coste, elementoPC, opcion);
    }
}

/**
 *
 * @param {Ventaja} elementoPC
 * @param {number} coste
 * @param {string} opcion
 */
function aplicarDesventajaFinal(elementoPC, coste, opcion) {
    var repartoCostes = new RepartoCostes();
    var desventajas = personaje_actual.getDesventajas();

    var numDesventajas = desventajas.length;

    for (var i = 0; i < desventajas.length; i++) {
        if (desventajas[i].getOrigen() != ORIGEN_PC) {
            numDesventajas--;
        }
    }

    if (numDesventajas < 3) {
/*        if (elementoPC.getGrupo() == GRUPO_DON) {
            personaje_actual.gastaPC(coste,"PC_libres_don");
            repartoCostes.setDon(coste);
        } else if (elementoPC.getGrupo() == GRUPO_PSIQUICAS) {
            personaje_actual.gastaPC(coste,"PC_libres_psiquicas");
            repartoCostes.setPsiquica(coste);
        } else {
            personaje_actual.gastaPC(coste);
            repartoCostes.setLibres(coste);
        }
        personaje_actual.PC_generales -= coste;*/
        personaje_actual.addVentaja(elementoPC, coste, opcion, ORIGEN_PC, false, repartoCostes, true);
        personaje_actual.updatePC();
    } else {
        alert(ERR_MAX_DESVENTAJAS);
    }
}

/**
 *
 * @param {{}} parametros
 */
function aplicarElementoPCFinal(parametros) {
    var elementoPC = parametros.elementoPC;
    var coste = parametros.coste;
    var opcion = parametros.opcion;
    var isVentaja = parametros.isVentaja;

    if (parametros.isDesequilibrioSephirotico) {
        var gruposOpciones = parametros.gruposOpciones;
        opcion = "[";
        for (var i = 0; i < gruposOpciones.length;i++) {
            opcion += gruposOpciones[i].opcionesElegidas[0];
            if (i +1 < gruposOpciones.length) {
                opcion += ","
            }
        }
        opcion += "]";
    }

    if (isVentaja) {
        aplicarVentajaFinal(elementoPC, coste, opcion);
    } else {
        aplicarDesventajaFinal(elementoPC, coste, opcion);
    }
}

/**
 *
 * @param {{}} event
 */
function anularelementoPCComprado(event) {
    var elementoPCComprado = event.data.elementoPCComprado;

    personaje_actual.removeVentaja(elementoPCComprado);
}

/***** PASO 5 y PASO 6: Habilidades primarias y secundarias *****/

/**
 *
 * @param {number} coste
 * @returns {PuedeComprar}
 */
function comprasiPuedesPotencialPsiquico(coste) {
    return new PuedeComprar((personaje_actual.getHabilidadDePersonaje(HB_CV).valorFinalActual() - personaje_actual.getCVGastados() >= coste), AVISO_CVS_INSUFICIENTES);
}

/**
 * Devuelve false se se ha desarrollado ataque y defensa. Si sólo se ha desarrollado una habilidad, devuelve su nombre
 * @returns {boolean|string}
 */
function desarrolloSoloAtaqueODefensa() {
    var valor = false;
    var pdAtaque = personaje_actual.getHabilidadDePersonaje(HB_ATAQUE).getPDinvertidos();
    var pdParada = personaje_actual.getHabilidadDePersonaje(HB_PARADA).getPDinvertidos();
    var pdEsquiva = personaje_actual.getHabilidadDePersonaje(HB_ESQUIVA).getPDinvertidos();

    if ( (pdAtaque == 0) || ( (pdEsquiva == 0) && (pdParada == 0)) ) {
        if (pdAtaque > 0) {
            valor = HB_ATAQUE;
        } else if (pdEsquiva > 0) {
            valor = HB_ESQUIVA;
        } else {
            valor = HB_PARADA;
        }
    }
    
    return valor;
}

/**
 *
 * @param {string} tipoCompra
 * @param {{}} parametros
 * @param {number} cantidad
 * @param {number} coste
 * @returns {PuedeComprar}
 */
function compraSiPuedesCombate(tipoCompra, parametros, cantidad, coste) {
    var nombreHabilidad = "";
    if ("habilidad" in parametros) {
        nombreHabilidad = parametros.habilidad.getNombre();
    }

    var valorAtaque = personaje_actual.getHabilidadDePersonaje(HB_ATAQUE).valorFinalActual();
    var valorParada = personaje_actual.getHabilidadDePersonaje(HB_PARADA).valorFinalActual();
    var valorEsquiva = personaje_actual.getHabilidadDePersonaje(HB_ESQUIVA).valorFinalActual();
    var puedeComprar = new PuedeComprar(true);

    if (tipoCompra == RANGOS_HABILIDAD) {
        if ((nombreHabilidad == HB_ATAQUE)||(nombreHabilidad == HB_PARADA) || (nombreHabilidad == HB_ESQUIVA)) {
            if ( desarrolloSoloAtaqueODefensa() == nombreHabilidad ) {
                if (personaje_actual.gastoActualPDsAtaqueDefensa() + coste > personaje_actual.maxPDsAtaqueDefensa() / 2) {
                    puedeComprar.puedeComprar = false;
                    puedeComprar.mensajeFallo = _l(AVISO_MAX_PD_ATAQUE_SOLO);
                }
            } else {
                if (personaje_actual.gastoActualPDsAtaqueDefensa() + coste <= personaje_actual.maxPDsAtaqueDefensa()) {
                    switch (nombreHabilidad) {
                        case HB_ATAQUE:
                            valorAtaque += cantidad * parametros.habilidad.getPuntosAComprar();
                            break;
                        case HB_PARADA:
                            valorParada += cantidad * parametros.habilidad.getPuntosAComprar();
                            break;
                        default:
                            valorEsquiva += cantidad * parametros.habilidad.getPuntosAComprar();
                    }
                    var valorDefensa = (valorParada>valorEsquiva?valorParada:valorEsquiva);
                    if ((Math.abs(valorAtaque - valorDefensa) > MAX_DIF_ATAQUE_DEFENSA)) {
                        puedeComprar.puedeComprar = false;
                        puedeComprar.mensajeFallo = _l(AVISO_ATAQUE_DEFENSA_MUY_SEPARADOS);
                    }
                } else {
                    puedeComprar.puedeComprar = false;
                    puedeComprar.mensajeFallo = _l(AVISO_MAX_PD_ATAQUE_DEFENSA);
                }
            }
        } else if (nombreHabilidad == HB_CM) {
            if (personaje_actual[HB_CM].getPDinvertidos() + coste > Math.floor(personaje_actual.getPDTotales()/10)) {
                puedeComprar.puedeComprar = false;
                puedeComprar.mensajeFallo = _l(AVISO_MAX_PD_CM);
            }
        }
    }
    return puedeComprar;
}

/**
 *
 * @param {string} tipoCompra
 * @param {{}} parametros
 * @param {number} coste
 * @returns {PuedeComprar}
 */
function compraSiPuedesSobrenatural(tipoCompra, parametros, coste) {
    var nombreHabilidad = "";
    if ("habilidad" in parametros) {
        nombreHabilidad = parametros.habilidad.getNombre();
    }

    var habilidadProyeccionMagica = personaje_actual.getHabilidadDePersonaje(HB_PROYECCION_MAGICA);

    var puedeComprar = new PuedeComprar(true);

    if (tipoCompra == RANGOS_HABILIDAD) {
        if (nombreHabilidad == HB_PROYECCION_MAGICA) {
            if (habilidadProyeccionMagica.getPDinvertidos() + coste > personaje_actual.maxPDsGrupoHabilidad(TIPO_HB_SOBRENATURAL) / 2) {
                puedeComprar.puedeComprar = false;
                puedeComprar.mensajeFallo = _l(AVISO_MAX_PD_PROYECCION_MAGICA);
            }
        } else if (nombreHabilidad == HB_NIVEL_DE_VIA) {
            if (personaje_actual[HB_NIVEL_DE_VIA].getPDinvertidos() + coste > Math.floor(personaje_actual.getPDTotales()/10)) {
                puedeComprar.puedeComprar = false;
                puedeComprar.mensajeFallo = _l(AVISO_MAX_PD_NIVEL_VIA);
            }
        }
    }
    return puedeComprar;
}

/**
 *
 * @param {string} tipoCompra
 * @param {{}} parametros
 * @param {number} cantidad
 * @param {number} coste
 * @returns {PuedeComprar}
 */
function compraSiPuedesPsiquica(tipoCompra, parametros, cantidad, coste) {
    var nombreHabilidad = "";
    if ("habilidad" in parametros) {
        nombreHabilidad = parametros.habilidad.getNombre();
    }

    var habilidadProyeccionPsiquica = personaje_actual.getHabilidadDePersonaje(HB_PROYECCION_PSIQUICA);
    var habilidadCV = personaje_actual.getHabilidadDePersonaje(HB_CV);

    var puedeComprar = new PuedeComprar(true);

    if (tipoCompra == RANGOS_HABILIDAD) {
        if (nombreHabilidad == HB_PROYECCION_PSIQUICA) {
            if (habilidadProyeccionPsiquica.getPDinvertidos() + coste > personaje_actual.maxPDsGrupoHabilidad(TIPO_HB_PSIQUICA) / 2) {
                puedeComprar.puedeComprar = false;

                puedeComprar.mensajeFallo = _l(AVISO_MAX_PD_PROYECCION_PSIQUICA);
            }
        } else if (nombreHabilidad == HB_CV) {
            if (  habilidadCV.valorFinalActual() + cantidad * parametros.habilidad.getPuntosAComprar() - personaje_actual.getCVGastados() < 0 ) {
                puedeComprar.puedeComprar = false;

                puedeComprar.mensajeFallo = _l(AVISO_CV_YA_GASTADOS);
            }
        }
    }

    return puedeComprar;
}

/**
 *
 * @param {string} tipoCompra
 * @param {{}} parametros
 * @param {string} grupoPD
 * @param {number} cantidad
 * @param {number} coste
 */
function compraSiPuedes(tipoCompra, parametros, grupoPD, cantidad, coste) {
    var nombreHabilidad = "";
    if ("habilidad" in parametros) {
        nombreHabilidad = parametros.habilidad.getNombre();
    }
    var puedeComprar = new PuedeComprar(true);

    if (nombreHabilidad == HB_POTENCIAL_PSIQUICO) {
        puedeComprar = comprasiPuedesPotencialPsiquico(coste);
    } else {
        if ((personaje_actual.getPDLibres() >= coste) && (personaje_actual.getPDLibres()-coste <= personaje_actual.getPDTotales())) {
            if (personaje_actual.gastoActualPDsGrupoHabilidad(grupoPD) + coste <= personaje_actual.maxPDsGrupoHabilidad(grupoPD)) {
                switch (grupoPD) {
                    case TIPO_HB_COMBATE :
                        puedeComprar = compraSiPuedesCombate(tipoCompra, parametros, cantidad, coste);
                        break;
                    case TIPO_HB_SOBRENATURAL:
                        puedeComprar = compraSiPuedesSobrenatural(tipoCompra, parametros, coste);
                        break;
                    case TIPO_HB_PSIQUICA:
                        puedeComprar = compraSiPuedesPsiquica(tipoCompra, parametros, cantidad, coste);
                        break;
                    default:
                        break;
                }
            } else {
                puedeComprar.puedeComprar = false;
                puedeComprar.mensajeFallo = _l(AVISO_MAX_PD_GRUPO) + _l(grupoPD);
            }
        } else {
            puedeComprar.puedeComprar = false;
            puedeComprar.mensajeFallo = _l(AVISO_PD_INSUFICIENTES);
        }
    }

    if (puedeComprar.puedeComprar) {
        compra(tipoCompra, parametros, coste);
    } else {
        alert(puedeComprar.mensajeFallo);
    }
}

/**
 *
 * @param {string} tipoCompra
 * @param {{}} parametros
 * @param {number} coste
 */
function compra(tipoCompra, parametros, coste) {
    switch (tipoCompra) {
        case RANGOS_HABILIDAD:
            personaje_actual.aumentaPDHabilidad(parametros.habilidad.getNombre(),coste);
            break;
        case TABLA_ARMAS:
            var tabla = getTablaArmas(parametros.tablaArmas.getNombre());
            if ((tabla.getTipoTabla() == TABLA_ESPECIAL) && (tabla.getOpciones()[0] != TABLA_REPETIBLE)) {
                personaje_actual.addTablaArmasEspecial(parametros.tablaArmas.getNombre(), parametros.opcion);
            } else {
                personaje_actual.addTablaArmas(parametros.tablaArmas.getNombre());
            }
            personaje_actual.addPDLibres(-1 * coste);
            break;
        case ARTE_MARCIAL:
            if (!personaje_actual.hasArmaManejada(ARMA_SIN_ARMAS)) {
                personaje_actual.addArmaManejada(ARMA_SIN_ARMAS,false);
                personaje_actual.setFlag(FLAG_SIN_ARMAS_POR_ARTES_MARCIALES);
            }
            personaje_actual.addArteMarcial(parametros.arteMarcial.getNombre());
            personaje_actual.addPDLibres(-1 * coste);
            if (personaje_actual.getArtesMarciales().length == 1) {
                vigilaRequisitosArtesMarciales(true);
            }
            break;
        case POTENCIAL_PSIQUICO:
            var potencialPsiquico = personaje_actual.getHabilidadDePersonaje(parametros.habilidad.getNombre());
            potencialPsiquico.CVsGastados += coste;
            if (coste > 0) {
                potencialPsiquico.bono += 10;
            } else {
                potencialPsiquico.bono -= 10;
            }
            personaje_actual.addCVGastados(coste);
            break;
    }
}

/***** PASO 7 : mejoras naturales *****/

/**
 *
 */
function elegirBonosNaturales() {
    $("#dialogBonosNaturales").dialog("open");
}

/**
 *
 * @param {{data:{indice:number,nivel:number}}} event
 */
function elegirHabilidadNatural(event) {
    var indice = event.data.indice;
    var nivel = event.data.nivel;

    muestraDialogoElegirOpcionHabilidad({principal:añadirHabilidadNatural,isDisabled:noPuedeAñadirHabilidadNatural},{indice: indice, nivel: nivel});
}

/**
 *
 * @param {{data:{indice:number,nivel:number}}} event
 */
function elegirBonoNovel(event) {
    var indice = event.data.indice;
    var nivel = event.data.nivel;

    muestraDialogoElegirOpcionHabilidad({principal:añadirBonoNovel,isDisabled:noPuedeAñadirBonoNovel},{indice: indice, nivel:nivel});
}

/**
 *
 * @param {{}} parametros
 */
function añadirHabilidadNatural(parametros) {
    var nombreHabilidad = parametros.opcion;
    var indice = parametros.indice;
    var bono = new Bono(BONO_HABILIDAD,nombreHabilidad,10,"",false,BONO_NATURAL,ORIGEN_HABILIDAD_NATURAL);
    bono.indice = indice;
    bono.nivel = 1;
    personaje_actual.addBonoHabilidadNatural(bono,indice);
    $("#habilidadNaturalElegida"+indice).empty().append(nombreHabilidad);
}

/**
 *
 * @param {{}} parametros
 */
function añadirBonoNovel(parametros) {
    var nombreHabilidad = parametros.opcion;
    var indice = parametros.indice;
    var bono = new Bono(BONO_HABILIDAD,nombreHabilidad,10,"",false,BONO_INNATO,ORIGEN_CATEGORIA,CAT_NOVEL);
    bono.indice = indice;
    bono.nivel = 1;
    personaje_actual.bonoNovel[personaje_actual.getNivel()][indice] = nombreHabilidad;
    personaje_actual.addBonoHabilidadNatural(bono,indice);
    $("#habilidadNaturalElegidaNovel"+indice).empty().append(nombreHabilidad);
}

/**
 *
 * @param {{}} event
 */
function elegirBonificadorNatural(event) {
    var tipoBonificadorNatural = event.data.tipo;

    muestraDialogoElegirOpcionHabilidad({principal:añadirBonificadorNatural,isDisabled:noPuedeAñadirBonificadorNatural},{tipo: tipoBonificadorNatural},tipoBonificadorNatural);
}

/**
 *
 * @param {{tipo:string,opcion:string}} parametros
 */
function noPuedeAñadirBonificadorNatural(parametros) {
    var puede = true;

    if (personaje_actual.getBonoCaracteristica(getHabilidad(parametros.opcion).getCaracteristica()) <= 0) {
        puede = false;
    }

    return !puede;
}

/**
 *
 * @param {{nivel:number,indice:number,opcion:string}} parametros
 */
function noPuedeAñadirBonoNovel(parametros) {
    var puede = true;

    for (var i = 0; i < 5; i++) {
        if (i != parametros.indice) {
            puede = puede && !(personaje_actual.getBonoNovel(i,parametros.nivel) == parametros.opcion);
        }
    }

    return !puede;
}

/**
 *
 * @param {{nivel:number,indice:number,opcion:string}} parametros
 */
function noPuedeAñadirHabilidadNatural(parametros) {
    var puede = true;

    for (var i = 0; i < 5; i++) {
        if (i != parametros.indice) {
            if (personaje_actual.getBonoHabilidadNatural(i,parametros.nivel) != -1) {
                puede = puede && !(personaje_actual.getBonoHabilidadNatural(i,parametros.nivel).getItem() == parametros.opcion);
            }
        }
    }

    return !puede;
}


/**
 *
 * @param {{}} parametros
 */
function añadirBonificadorNatural(parametros) {
    var nombreHabilidad = parametros.opcion;
    var tipoBonificadorNatural = parametros.tipo;

    personaje_actual.addBonificadorNatural(nombreHabilidad,tipoBonificadorNatural,1);
    $("#bonificadorNaturalElegido"+tipoBonificadorNatural).empty().append(nombreHabilidad);
}

/****** otros pasos *******/
/**
 *
 * @param {{}} parametros
 */
function aplicarArma(parametros) {
    var nombreArma = parametros.opcion;

    personaje_actual.addArmaManejada(nombreArma,true);
}

/**
 *
 * @param {TablaArmas} tablaArmas
 * @param {string} tipoCompra
 * @param {number} costeFinal
 */
function compraTablaArmasEspecial(tablaArmas, tipoCompra, costeFinal) {
    var opciones = tablaArmas.getOpciones();
    for (var i = 0; i < opciones.length; i++) {
        var efectoTabla = opciones[i];

        if (efectoTabla == TABLA_ARMA_SIMILAR) {
            var tiposArmasConocidos = personaje_actual.getTiposArmasConocidos(false);
            dialogoElegirArma(tiposArmasConocidos, {principal: compraTablaEspecial, isDisabled: noPuedeComprarManejoArma}, {tablaArmas: tablaArmas, tipoCompra: tipoCompra, costeFinal: costeFinal});
        } else if (efectoTabla == TABLA_ARMA_MIXTA) {
            var tiposArmasMixtos = getTiposMixtos(personaje_actual.getTiposArmasConocidos(true));
            dialogoElegirArma(tiposArmasMixtos, {principal: compraTablaEspecial, isDisabled: noPuedeComprarManejoArma}, {tablaArmas: tablaArmas, tipoCompra: tipoCompra, costeFinal: costeFinal});
        } else if (efectoTabla == TABLA_ARMA_DISTINTA) {
            var tiposArmasDistintos = getTiposDistintos(personaje_actual.getTiposArmasConocidos(true));
            dialogoElegirArma(tiposArmasDistintos, {principal: compraTablaEspecial, isDisabled: noPuedeComprarManejoArma}, {tablaArmas: tablaArmas, tipoCompra: tipoCompra, costeFinal: costeFinal});
        } else if (efectoTabla == TABLA_TIPOLOGIA) {
            var tiposArmas = getAllTipos();
            dialogoElegirTipoArma(tiposArmas, {principal: compraTablaEspecial, isDisabled: noPuedeComprarManejoTipo}, {tablaArmas: tablaArmas, tipoCompra: tipoCompra, costeFinal: costeFinal});
        } else if (efectoTabla == TABLA_REPETIBLE) {
            compraTablaEspecial({tablaArmas: tablaArmas, tipoCompra: tipoCompra, costeFinal: costeFinal})
        }
    }
}

/**
 *
 * @param {{}} parametros
 */
function aplicarTablaArmas(parametros) {
    var nombreTabla = parametros.opcion;
    var tablaArmas = getTablaArmas(nombreTabla);
    var tipoCompra = TIPO_HB_COMBATE;
    var costeFinal = tablaArmas.getCoste();

    switch (tablaArmas.getCategoriaTabla()) {
        case CATEGORIA_TABLA_MISTICAS:
            tipoCompra = TIPO_HB_SOBRENATURAL;
            break;
        case CATEGORIA_TABLA_PSIQUICAS:
            tipoCompra = TIPO_HB_PSIQUICA;
            break;
        default :
            tipoCompra = TIPO_HB_COMBATE;
            if (personaje_actual.getCategoria().getNombre() == CAT_MAESTRO_ARMAS) {
                costeFinal /= 2;
            }
            break;
    }


    if (tablaArmas.getTipoTabla() == TABLA_ESPECIAL) {
        compraTablaArmasEspecial(tablaArmas, tipoCompra, costeFinal);
    } else {
        compraSiPuedes(TABLA_ARMAS, {tablaArmas: tablaArmas}, tipoCompra, 1, costeFinal);
    }
}

/**
 *
 * @param {{}} parametros
 */
function compraTablaEspecial(parametros) {
    compraSiPuedes(TABLA_ARMAS, {tablaArmas: parametros.tablaArmas, opcion: parametros.opcion}, parametros.tipoCompra, 1, parametros.costeFinal);
}

/**
 *
 * @param {{}} event
 */
function anularArteMarcial(event) {
    var arteMarcial = event.data.arteMarcial;
    var esPrimera = event.data.esPrimera;
    var esTao = (personaje_actual.getCategoria().getNombre() == CAT_TAO);

    if (personaje_actual.hasFlag(FLAG_SIN_ARMAS_POR_ARTES_MARCIALES)) {
        personaje_actual.removeArmaManejada(ARMA_SIN_ARMAS);
    }

    personaje_actual.addPDLibres(costeArteMarcial(arteMarcial.getGrado(),arteMarcial.isBasica(),esPrimera,esTao));
    personaje_actual.removeArteMarcial(arteMarcial.getNombre());
    if (personaje_actual.getArtesMarciales().length == 0) {
        vigilaRequisitosArtesMarciales(false);
    }
}

/**
 *
 * @param {{opcion:string}} parametros
 */
function aplicarArteMarcial(parametros) {
    var nombreArteMarcial = parametros.opcion;
    var arteMarcial = getArteMarcial(nombreArteMarcial);
    var esPrimera;
    var coste;
    var esTao = (personaje_actual.getCategoria().getNombre() == CAT_TAO);

    esPrimera = (personaje_actual.numArtesMarciales() == 0);
    if (!esPrimera) {
        var familia = arteMarcial.getFamilia();
        if (personaje_actual.getArtesMarciales()[0].getFamilia() == familia) {
            esPrimera = true;
        }
    }
    coste = costeArteMarcial(arteMarcial.getGrado(),arteMarcial.isBasica(),esPrimera,esTao);

    compraSiPuedes(ARTE_MARCIAL, {arteMarcial: arteMarcial},TIPO_HB_COMBATE, 1, coste);
}

/**
 *
 * @param {{data:{nombreHabilidad:string,unidades:string}}} event
 */
function aumentaHabilidadClick(event) {
    var nombreHabilidad = event.data.nombreHabilidad;
    var cantidad = event.data.unidades;
    var habilidadDePersonaje = personaje_actual.getHabilidadDePersonaje(nombreHabilidad);
    var coste;
    var costeFinal;
    var tipoCompra = RANGOS_HABILIDAD;


    if (nombreHabilidad == HB_POTENCIAL_PSIQUICO) {
        if (cantidad > 0) {
            coste = siguienteCostePotencial(habilidadDePersonaje.CVsGastados);
            if (coste == -1) {

                alert(_l(AVISO_NO_SE_PUEDE_AUMENTAR_MAS));
                return;
            }
        } else {
            coste = previoCostePotencial(habilidadDePersonaje.CVsGastados);
            if (coste == -1) {
                alert(AVISO_NO_SE_PUEDE_DISMINUIR_MAS);
                return;
            }
        }
        costeFinal = coste*habilidadDePersonaje.getHabilidad().getPuntosAComprar()*cantidad;
        tipoCompra = POTENCIAL_PSIQUICO;
    } else {
        coste = personaje_actual.getCoste(habilidadDePersonaje.getHabilidad().getNombre(),habilidadDePersonaje.getHabilidad().isPrincipal());
        costeFinal = coste*habilidadDePersonaje.getHabilidad().getPuntosAComprar()*cantidad/habilidadDePersonaje.getHabilidad().getPuntosPorCoste();

        if (costeFinal < 0) {
            if (habilidadDePersonaje.getPDinvertidosActuales() < Math.abs(costeFinal)) {
                alert(_l(AVISO_NO_SE_PUEDE_DISMINUIR_MAS));
                return;
            }
        }
    }

    compraSiPuedes(tipoCompra, {habilidad: habilidadDePersonaje.getHabilidad()}, habilidadDePersonaje.getHabilidad().getTipo(), cantidad, costeFinal);
}


function elegirManualApariencia() {
    var arrayOpciones = [];
    for (var i = 1; i <= 10; i++) {
        arrayOpciones.push(new OpcionMostrable(i,i,""));
    }
    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: asignarApariencia, isDisabled: alwaysEnabled}, true);
}

function elegirPeso() {

    alert(INFO_PESO_RECOMENDADO + getRangoPesoPorTamaño(personaje_actual.getTamaño()));
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{},{principal:asignarPeso,isDisabled:alwaysEnabled});
}

function getRangoPesoPorTamaño(tam) {
    switch (tam) {
        case 2 :
            return "5 - 15 kg";
        case 3 :
            return "10 - 20 kg";
        case 4 :
            return "20 - 30 kg";
        case 5:
            return "20 - 50 kg";
        case 6:
            return "30 - 50 kg";
        case 7:
            return "30 - 60 kg";
        case 8:
            return "35 - 70 kg";
        case 9:
            return "40 - 80 kg";
        case 10:
            return "40 - 90 kg";
        case 11:
            return "50 - 100 kg";
        case 12:
            return "50 - 120 kg";
        case 13:
            return "50 - 140 kg";
        case 14:
            return "50 - 150 kg";
        case 15:
            return "60 - 180 kg";
        case 16:
            return "70 - 220 kg";
        case 17:
            return "80 - 240 kg";
        case 18:
            return "90 - 260 kg";
        case 19:
            return "100 - 280 kg";
        case 20:
            return "110 - 320 kg";
        case 21:
            return "120 - 450 kg";
        default:
            return "400 kg +";
    }
}

function getRangoAlturaPorTamaño(tam) {
    switch (tam) {
        case 2 :
            return "0’20 - 0’60 m";
        case 3 :
            return "0’40 - 0’60 m";
        case 4 :
            return "0’60 - 1’00 m";
        case 5:
            return "0’80 - 1’20 m";
        case 6:
            return "1’00 - 1’40 m";
        case 7:
            return "1’10 - 1’50 m";
        case 8:
            return "1’20 - 1’60 m";
        case 9:
            return "1’30 - 1’60 m";
        case 10:
            return "1’40 - 1’70 m";
        case 11:
            return "1’40 - 1’80 m";
        case 12:
            return "1’50 - 1’80 m";
        case 13:
            return "1’50 - 1’80 m";
        case 14:
            return "1’60 - 1’90 m";
        case 15:
            return "1’60 - 2’00 m";
        case 16:
            return "1’70 - 2’10 m";
        case 17:
            return "1’70 - 2’10 m";
        case 18:
            return "1’80 - 2’20 m";
        case 19:
            return "1’90 - 2’30 m";
        case 20:
            return "2’00 - 2’40 m";
        case 21:
            return "2’10 - 2’60 m";
        default:
            return "2'5 m +";
    }
}

function elegirAltura() {

    alert(INFO_ALTURA_RECOMENDADA + getRangoAlturaPorTamaño(personaje_actual.getTamaño()));
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{},{principal:asignarAltura,isDisabled:alwaysEnabled});
}

function elegirOrigen() {
    var array_opciones = [];
    for (var i = 0; i < origenes_set.length;i++) {
        array_opciones.push(new OpcionMostrable(_l(origenes_set[i].getNombre()),origenes_set[i].getNombre(), ""));
    }
    array_opciones.push(new OpcionMostrable(_l(UI_ESPECIFICAR),UI_ESPECIFICAR,""));
    muestraDialogoElegirOpciones(array_opciones,{},{principal:asignarOrigen,isDisabled:alwaysEnabled},true);
}

function elegirEtnia() {
    var array_opciones = [];
    for (var i = 0; i < etnias_set.length;i++) {
        array_opciones.push(new OpcionMostrable(_l(etnias_set[i]),etnias_set[i], ""));
    }
    array_opciones.push(new OpcionMostrable(_l(UI_ESPECIFICAR),UI_ESPECIFICAR,""));
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{},{principal:asignarEtnia,isDisabled:alwaysEnabled});
}

function elegirPX() {

    alert(INFO_NUEVOS_PX);
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{},{principal:asignarPX,isDisabled:alwaysEnabled});
}

function elegirManualSexo() {
    muestraDialogoElegirOpciones([new OpcionMostrable(_l(SEXO_HOMBRE),SEXO_HOMBRE, ""), new OpcionMostrable(_l(SEXO_MUJER),SEXO_MUJER, "")], {}, {principal: asignarSexo, isDisabled: alwaysEnabled}, true);
}

function elegirClaseSocial() {
    var array_opciones = [
        new OpcionMostrable(_l(CLASE_SOCIAL_POBRE),CLASE_SOCIAL_POBRE, CLASES_SOCIALES_GENERICAS),
        new OpcionMostrable(_l(CLASE_SOCIAL_MEDIO),CLASE_SOCIAL_MEDIO, CLASES_SOCIALES_GENERICAS),
        new OpcionMostrable(_l(CLASE_SOCIAL_ALTO),CLASE_SOCIAL_ALTO, CLASES_SOCIALES_GENERICAS),
        new OpcionMostrable(_l(CLASE_SOCIAL_BAJA_NOBLEZA),CLASE_SOCIAL_BAJA_NOBLEZA, CLASES_SOCIALES_GENERICAS)
    ];

    var categorias = [
        new OpcionMostrable(_l(CLASES_SOCIALES_GENERICAS),CLASES_SOCIALES_GENERICAS,"")
    ];

    var origen = getOrigen(personaje_actual.getOrigen());

    if (origen) {
        var clases = origen.posiblesClases;

        categorias.push(new OpcionMostrable(_l(CLASES_SOCIALES_ORIGEN),CLASES_SOCIALES_ORIGEN,""));
        for (var i = 0; i < clases.length; i++) {
            array_opciones.push(new OpcionMostrable(_l(clases[i].nombre),clases[i].nombre, CLASES_SOCIALES_ORIGEN));
        }
    }

    muestraDialogoElegirOpciones(
        array_opciones,
        {},
        {
            principal: asignarClaseSocial,
            isDisabled: alwaysEnabled
        },
        true,
        categorias
    );
}

function elegirManualNombre() {
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{},{principal:asignarNombre,isDisabled:alwaysEnabled});
}

function asignarNombre(parametros) {
    personaje_actual.setNombre(parametros.opcion);
}

function asignarSexo(parametros) {
    personaje_actual.setSexo(parametros.opcion);
}

function asignarClaseSocial(parametros) {
    personaje_actual.setClaseSocial(parametros.opcion);
}

function asignarApariencia(parametros) {
    personaje_actual.setApariencia(parametros.opcion);
    personaje_actual.removeFlag(FLAG_APARIENCIA_ALEATORIA);
}

function asignarPeso(parametros) {
    personaje_actual.setPeso(parametros.opcion);
}

function asignarAltura(parametros) {
    personaje_actual.setAltura(parametros.opcion);
}

function asignarOrigen(parametros) {
    if (parametros.opcion == UI_ESPECIFICAR) {
        personaje_actual.setOrigen(prompt(_l(UI_ESPECIFICA)));
    } else {
        personaje_actual.setOrigen(parametros.opcion);
    }
}

function asignarEtnia(parametros) {
    if (parametros.opcion == UI_ESPECIFICAR) {
        personaje_actual.setEtnia(prompt(_l(UI_ESPECIFICA)));
    } else {
        personaje_actual.setEtnia(parametros.opcion);
    }
}

function asignarPX(parametros) {

    if (!isNaN(parametros.opcion)) {
        personaje_actual.setPX(parametros.opcion);
    }
}

/**
 *
 * @param {{data:{nombreHabilidad:string}}} event
 */
function eligeEspecialidad(event) {
    var habilidad = getHabilidad(event.data.nombreHabilidad);


    alert(INFO_EJEMPLOS_ESPECIALIDADES + habilidad.getEspecializacionesPosibles());
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{nombreHabilidad:event.data.nombreHabilidad},{principal:asignarEspecialidad,isDisabled:alwaysEnabled});
}

/**
 *
 * @param {{opcion:string,nombreHabilidad:string}} parametros
 */
function asignarEspecialidad(parametros) {
    if (parametros.opcion == undefined) {
        parametros.opcion = "";
    }
    personaje_actual.setEspecializacionHabilidadSecundaria(parametros.nombreHabilidad,parametros.opcion);
}

function finalizarGeneracion() {
    personaje_actual.nivelGeneracionTerminada = personaje_actual.getNivel();
    personaje_actual.GENERACION_INICIADA = ESTADO_GENERACION_PERSONAJE_HECHO;
    mostrarPersonajeActual();
}

function personajeCompleto() {
    var correcto = true;

    //comprobar que se han gastado los PD
/*    if (personaje_actual.getPDLibres() != 0) {
        correcto = false;
    }
*/
    //comprobar que se han gastado los PC
/*    if (personaje_actual.getPCLibres() != 0) {
        correcto = false;
    }
    if (personaje_actual.PC_libres_don != 0) {
        correcto = false;
    }
    if (personaje_actual.PC_libres_psiquicas != 0) {
        correcto = false;
    }
*/
    //comprobar bonos naturales

    return correcto;
}

/**
 *
 * @param {Personaje} personaje
 * @param {Categoria} nuevaCategoria
 */
function comprarCambioCategoria(personaje,nuevaCategoria) {
    var catActual = personaje.getCategoria();

    var coste = costeCambioCategoria(catActual,nuevaCategoria);

    var nivelActual = personaje.getNivel();

    var nivelDeCambio = nivelActual + 2;

    if (personaje.hasFlag(FLAG_VERSATIL)) {
        nivelDeCambio = nivelActual + 1;
        coste /= 2;
    }

    if (personaje.getPDLibres() >= coste) {
        personaje.addPDLibres(-1*coste);
        personaje.cambioCategoria = nivelDeCambio;
        personaje.proximaCategoria = nuevaCategoria;
    } else {
        alert (AVISO_PD_INSUFICIENTES);
    }
}



function subirNivel() {
    var nivelActual = personaje_actual.getNivel() + personaje_actual.getRaza().getModNivel();

    var nivelObjetivo = getNivelPorPX(personaje_actual.getPX());

    if (nivelObjetivo > nivelActual) {
        personaje_actual.GENERACION_INICIADA = ESTADO_GENERACION_SUBIENDO_NIVEL;
        personaje_actual.subeNivel(nivelObjetivo-nivelActual);
    }
}

/**
 *
 * @param {{data:{caracteristica:string}}} event
 */
function gastaAumentoCaracteristica(event) {
    if (personaje_actual.hasAumentoDeCaracteristicasLibre()) {
        personaje_actual.gastaAumentoDeCaracteristicas(event.data.caracteristica);
        personaje_actual.setCaracteristica(event.data.caracteristica,personaje_actual.getCaracteristica(event.data.caracteristica)+1);
    }
}

/**
 *
 * @param {{data:{caracteristica:string}}} event
 */
function recuperaAumentoCaracteristica(event) {
    if (personaje_actual.recuperaAumentoDeCaracteristicas(event.data.caracteristica)) {
        personaje_actual.setCaracteristica(event.data.caracteristica,personaje_actual.getCaracteristica(event.data.caracteristica)-1);
    }
}

/**
 * Devuelve el nivel que corresponde a una cantidad de px, desde 1 hasta el que sea
 * @param {number} px
 * @returns {number}
 */
function getNivelPorPX(px) {
    var nivel = 0;
    var addLevel  = 0;
    if (px >= 3675) {
        var dif = px - 3675;
        addLevel = 1 + Math.floor(dif/450);
        px = 3674;
    }
    if (px < 100) {
        nivel = 1;
    } else if (px < 225) {
        nivel = 2;
    } else if (px < 375) {
        nivel = 3;
    } else if (px < 550) {
        nivel = 4;
    } else if (px < 750) {
        nivel =5;
    } else if (px < 975) {
        nivel =6;
    } else if (px < 1225) {
        nivel =7;
    } else if (px < 1500) {
        nivel =8;
    } else if (px < 1800) {
        nivel =9;
    } else if (px < 2125) {
        nivel =10;
    } else if (px < 2475) {
        nivel =11;
    } else if (px < 2850) {
        nivel =12;
    } else if (px < 3250) {
        nivel =13;
    } else if (px < 3675) {
        nivel =14;
    }

    nivel += addLevel;

    return nivel;
}



function getPDsPorNivel(nivel) {
    var pds = 0;
    if (nivel < 0) {
        throw ERR_NIVEL_ERRONEO;
    }
    if (nivel == 0) {
        pds = 400;
    } else {
        pds = 600 + 100 * (nivel - 1);
    }
    return pds;
}

function getAumentosCaracteristicasPorNivel(nivel) {
    var aumentos = 0;
    if (nivel < 2) {
        aumentos = 0;
    } else {
        aumentos = Math.floor(nivel/2);
    }

    return aumentos;
}
