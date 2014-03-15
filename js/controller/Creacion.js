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
var GENERACION_INICIADA = ESTADO_GENERACION_NINGUNO;

var UI_ESPECIFICAR = "Especificar";
var UI_PREGUNTA_PUNTOS_METODO_5 = "¿Cuántos puntos quieres repartir?";

var DIAG_METODO_CREACION_TITULO = "Seleccionar método de creación";
var DIAG_ELEGIR_RAZA_TITULO = "Seleccionar raza";

var DIAG_COMPRAR_VENTAJAS_TITULO = "Comprar ventajas";
var DIAG_ELEGIR_DESVENTAJAS_TITULO = "Elegir desventajas";
var DIAG_ELEGIR_BONOS_NATURALES_TITULO = "Elegir bonos naturales";
var DIAG_ELEGIR_OPCIONES_TITULO = "Elegir opciones";
var DIAG_PODERES_PSIQUICOS = "Poderes Psíquicos";
var DIAG_PODERES_KI = "Dominios del Ki";
var DIAG_PODERES_MAGIA = "Magia";
var DIAG_CREACION_TECNICA = "Crear Técnica de Dominio";
var DIAG_REASIGNA_COSTE_KI = "Reparte coste de ki";
var EXPLI_METODO_1 = "El método tradicional y más recomendado para generar las tiradas es el de lanzar un D10 ocho veces y apuntar las características en una hoja de papel. Ignora cualquier resultado de 1, 2 ó 3 que saques y repítelo, lo que permitirá a tu personaje no tener en ningún momento puntuaciones demasiado bajas. Una vez que tengas las ocho, sustituye la menor por un 9 para asegurar así que, incluso en el improbable caso de que no tengas ninguna cifra elevada, el personaje será excepcional en al menos un campo. A continuación reparte las cifras como prefieras, definiendo exactamente lo que quieres. Este sistema de generación proporciona unas cifras por media elevadas, pero es natural teniendo en cuenta que los personajes suelen ser individuos excepcionales.";
var EXPLI_METODO_2 = "Consiste en tirar dos D10 ocho veces, anotando sólo el resultado más alto de los dos obtenidos. Cuando se tengan las ocho cifras, el personaje las reparte libremente entre las características. Este método asegura una media alta, pero también permite obtener algunas cifras realmente bajas.";
var EXPLI_METODO_3 = "Este método se utiliza en el caso de que los jugadores decidan interpretar personajes comunes, sin características demasiado excepcionales. Consiste en lanzar ocho veces un dado apuntando en orden las cifras obtenidas en las casillas de características. Cualquier tirada, por alta o baja que sea, deberá aceptarse.";
var EXPLI_METODO_4 = "El último método consiste en tirar siete veces un D10 y sumar todos los resultados obtenidos. La cifra resultante, un número entre siete y setenta, puede ser dividida libremente entre las características, pero sin que en ningún caso se pueda superar el diez.";
var EXPLI_METODO_5 = "Se reparten 55 puntos entre las características. Cualquier diez cuesta dos puntos en vez de uno. Pueden repartirse 45 puntos o 65, según el nivel de la partida.";

var ERR_PC_INSUFICIENTES = "PC insuficientes";
var ERR_METODO_DESCONOCIDO = "Error: Metodo de generación desconocido";
var ERR_MAX_DESVENTAJAS = "Límite de desventajas alcanzado";
var ERR_OVERFLOW_NIVEL = "Límite de gasto del nivel previo alcanzando";

var RANGOS_HABILIDAD = "RANGOS_HABILIDAD";
var TABLA_ARMAS = "TABLA_ARMAS";
var ARTE_MARCIAL = "ARTE_MARCIAL";
var POTENCIAL_PSIQUICO = "POTENCIAL_PSIQUICO";

var MAX_DIF_ATAQUE_DEFENSA = 50;

var PERSONAJE_EN_MARCHA = false;
/**
 *
 */
function iniciarGeneracion() {
    if (PERSONAJE_EN_MARCHA) {
        var adelante = confirm("¿Seguro? Esto sustituirá al personaje actual");

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
/***** PASO 1: Características *****/

/**
 *
 * @param {number} metodo
 * @throws ERR_METODO_DESCONOCIDO
 */
function generarMetodo(metodo) {
    switch (metodo) {
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
    mostrarDialogoRepartoPuntosCaracteristicas(total,false);
}

/**
 *
 */
function generarMetodo5() {
    muestraDialogoElegirOpciones([new OpcionMostrable("45",""),new OpcionMostrable("50",""),new OpcionMostrable("55",""),new OpcionMostrable("60",""),new OpcionMostrable("65",""),new OpcionMostrable(UI_ESPECIFICAR,"")],{},{principal:metodo5PuntosElegidos,isDisabled:alwaysEnabled},false);
}

function metodo5PuntosElegidos(parametros) {
    var total = 0;
    if (parametros.opcion == UI_ESPECIFICAR) {
        total = parseInt(prompt(UI_PREGUNTA_PUNTOS_METODO_5));
    } else {
        total = parseInt(parametros.opcion);
    }
    mostrarDialogoRepartoPuntosCaracteristicas(total,true);
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

    if (costes.length > 1) {
        var arrayOpciones = [];
        for (var i=0; i < costes.length;i++) {
            arrayOpciones.push(new OpcionMostrable(costes[i],""));
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
/*        if ((atributoPCGrupo != undefined) && (coste <= diferencial)) {
            personaje_actual.gastaPC(coste, atributoPCGrupo);
            repartoCostes.setValor(atributoRepartoCostes,coste);
        } else {
            personaje_actual.gastaPC(coste - diferencial, "PC_libres_generales");
            repartoCostes.setLibres(coste - diferencial);
            if (atributoPCGrupo != undefined) {
                repartoCostes[atributoRepartoCostes] = diferencial;
                personaje_actual.setPC(0, atributoPCGrupo);
            }
        }*/
        personaje_actual.addVentaja(elementoPC, coste, opcion, ORIGEN_PC, true, repartoCostes, true);
        personaje_actual.updatePC();
        //mostrarPersonajeActual();
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
    return new PuedeComprar((personaje_actual.getHabilidadDePersonaje(HB_CV).valorFinalActual() - personaje_actual.getCVGastados() >= coste),"CVs libres insuficientes");
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
    console.log("ataque:"+valorAtaque+" - parada:"+valorParada+" - esquiva:"+valorEsquiva);
    var puedeComprar = new PuedeComprar(true);

    if (tipoCompra == RANGOS_HABILIDAD) {
        if ((nombreHabilidad == HB_ATAQUE)||(nombreHabilidad == HB_PARADA) || (nombreHabilidad == HB_ESQUIVA)) {
            if ( desarrolloSoloAtaqueODefensa() == nombreHabilidad ) {
                console.log("desarrollado solo ataque o defensa");
                if (personaje_actual.gastoActualPDsAtaqueDefensa() + coste > personaje_actual.maxPDsAtaqueDefensa() / 2) {
                    puedeComprar.puedeComprar = false;
                    puedeComprar.mensajeFallo = "Max PDs en Ataque/Defensa alcanzados (Mitad del normal por no desarrollar defensa)";
                }
            } else {
                console.log("desarrollados ataque y defensa");
                if (personaje_actual.gastoActualPDsAtaqueDefensa() + coste <= personaje_actual.maxPDsAtaqueDefensa()) {
                    console.log("gastoActualPDsAtaqueDefensa:"+personaje_actual.gastoActualPDsAtaqueDefensa() + " más coste: " + (personaje_actual.gastoActualPDsAtaqueDefensa() + coste));
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
                    console.log("ahora son -- ataque:"+valorAtaque+" - defensa:"+valorDefensa);
                    console.log("ataque y defensa:"+(Math.abs(valorAtaque - valorDefensa)));
                    if ((Math.abs(valorAtaque - valorDefensa) > MAX_DIF_ATAQUE_DEFENSA)) {
                        puedeComprar.puedeComprar = false;
                        puedeComprar.mensajeFallo = "Ataque y Defensa base no pueden separarse en más de 50.";
                    }
                } else {
                    puedeComprar.puedeComprar = false;
                    puedeComprar.mensajeFallo = "Max PDs en Ataque/Defensa alcanzados";
                }
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
                puedeComprar.mensajeFallo = "Max PDs en Proyección Mágica alcanzados (mitad del tope en sobrenaturales)";
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
                puedeComprar.mensajeFallo = "Max PDs en Proyección Psíquica alcanzados (mitad del tope en sobrenaturales)";
            }
        } else if (nombreHabilidad == HB_CV) {
            if (  habilidadCV.valorFinalActual() + cantidad * parametros.habilidad.getPuntosAComprar() - personaje_actual.getCVGastados() < 0 ) {
                puedeComprar.puedeComprar = false;
                puedeComprar.mensajeFallo = "CVs ya gastados. Primero devuelvelos.";
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
                puedeComprar.mensajeFallo = "Max PDs en " + grupoPD + " alcanzados";
                return;
            }
        } else {
            puedeComprar.puedeComprar = false;
            puedeComprar.mensajeFallo = "PDs insuficientes";
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
            if (tabla.getTipoTabla() == TABLA_ESPECIAL) {
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
            if (personaje_actual.numArtesMarciales() == 1) {
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

    if (esPrimera) {
        vigilaRequisitosArtesMarciales(false);
    }

    if (personaje_actual.hasFlag(FLAG_SIN_ARMAS_POR_ARTES_MARCIALES)) {
        personaje_actual.removeArmaManejada(ARMA_SIN_ARMAS);
    }

    personaje_actual.addPDLibres(costeArteMarcial(esPrimera));
    personaje_actual.removeArteMarcial(arteMarcial.getNombre());
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

    esPrimera = (personaje_actual.numArtesMarciales() == 0);

    coste = costeArteMarcial(esPrimera);

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
                alert("No se puede aumentar más");
                return;
            }
        } else {
            coste = previoCostePotencial(habilidadDePersonaje.CVsGastados);
            if (coste == -1) {
                alert("No se puede disminuir más");
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
                alert("No se puede disminuir más");
                return;
            }
        }
    }

    compraSiPuedes(tipoCompra, {habilidad: habilidadDePersonaje.getHabilidad()}, habilidadDePersonaje.getHabilidad().getTipo(), cantidad, costeFinal);
}


function elegirManualApariencia() {
    var arrayOpciones = [];
    for (var i = 1; i <= 10; i++) {
        arrayOpciones.push(new OpcionMostrable(i,""));
    }
    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: asignarApariencia, isDisabled: alwaysEnabled}, true);
}

function elegirPeso() {
    alert("Con tu tamaño, tu peso debería ser de " + getRangoPesoPorTamaño(personaje_actual.getTamaño()));
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{},{principal:asignarPeso,isDisabled:alwaysEnabled});
}

function getRangoPesoPorTamaño(tam) {
    switch (tam) {
        case 2 :
            return "5 a 15 kg";
        case 3 :
            return "10 a 20 kg";
        case 4 :
            return "20 a 30 kg";
        case 5:
            return "20 a 50 kg";
        case 6:
            return "30 a 50 kg";
        case 7:
            return "30 a 60 kg";
        case 8:
            return "35 a 70 kg";
        case 9:
            return "40 a 80 kg";
        case 10:
            return "40 a 90 kg";
        case 11:
            return "50 a 100 kg";
        case 12:
            return "50 a 120 kg";
        case 13:
            return "50 a 140 kg";
        case 14:
            return "50 a 150 kg";
        case 15:
            return "60 a 180 kg";
        case 16:
            return "70 a 220 kg";
        case 17:
            return "80 a 240 kg";
        case 18:
            return "90 a 260 kg";
        case 19:
            return "100 a 280 kg";
        case 20:
            return "110 a 320 kg";
        case 21:
            return "120 a 450 kg";
        default:
            return "más de 400 kg";
    }
}

function getRangoAlturaPorTamaño(tam) {
    switch (tam) {
        case 2 :
            return "0’20 a 0’60 m";
        case 3 :
            return "0’40 a 0’60 m";
        case 4 :
            return "0’60 a 1’00 m";
        case 5:
            return "0’80 a 1’20 m";
        case 6:
            return "1’00 a 1’40 m";
        case 7:
            return "1’10 a 1’50 m";
        case 8:
            return "1’20 a 1’60 m";
        case 9:
            return "1’30 a 1’60 m";
        case 10:
            return "1’40 a 1’70 m";
        case 11:
            return "1’40 a 1’80 m";
        case 12:
            return "1’50 a 1’80 m";
        case 13:
            return "1’50 a 1’80 m";
        case 14:
            return "1’60 a 1’90 m";
        case 15:
            return "1’60 a 2’00 m";
        case 16:
            return "1’70 a 2’10 m";
        case 17:
            return "1’70 a 2’10 m";
        case 18:
            return "1’80 a 2’20 m";
        case 19:
            return "1’90 a 2’30 m";
        case 20:
            return "2’00 a 2’40 m";
        case 21:
            return "2’10 a 2’60 m";
        default:
            return "más de 2'5 m";
    }
}

function elegirAltura() {
    alert("Con tu tamaño, tu altura debería ser de " + getRangoAlturaPorTamaño(personaje_actual.getTamaño()));
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{},{principal:asignarAltura,isDisabled:alwaysEnabled});
}

function elegirPX() {
    alert("Introduce la nueva cantidad de PX");
    muestraDialogoElegirOpcion(LISTA_INTRODUCCION_USUARIO,{},{principal:asignarPX,isDisabled:alwaysEnabled});
}

function elegirManualSexo() {
    muestraDialogoElegirOpciones([new OpcionMostrable(SEXO_HOMBRE, ""), new OpcionMostrable(SEXO_MUJER)], {}, {principal: asignarSexo, isDisabled: alwaysEnabled}, true);
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

    alert("Ejemplos de especialidades " + habilidad.getEspecializacionesPosibles());
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
        alert ("PDs insuficientes");
    }
}

function cambiarCategoria() {
    var dialogElegirCategoria = getDiv("");
    dialogElegirCategoria.prop("id",DIV_DIALOG_ELEGIR_CATEGORIA);
    dialogElegirCategoria.empty();

    dialogElegirCategoria.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: true,
        closeOnEscape: true,
        ////show: "puff",
        title: DIAG_ELEGIR_CATEGORIA_TITULO,
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO
    });



    var gridCategorias = $("<ul></ul>").addClass("four_up tiles");

    for (var i = 0; i < categorias_set.length ; i++) {
        var categoria = categorias_set[i];

        var divCategoria = boton("big primary btn pretty",_l(categoria.getNombre()) + "[" + costeCambioCategoria(personaje_actual.getCategoria(),categoria) + " " + _l(UDS_PD)+"]",!puedeElegirCategoria(categoria.getNombre()));
        divCategoria.css("width","100%");

        gridCategorias.append( $("<li></li>").append(divCategoria));

        divCategoria.on("click", {categoria:categoria}, function(event) {
            dialogElegirCategoria.dialog("close");
            comprarCambioCategoria(personaje_actual,event.data.categoria);
        });

        divCategoria.on("mouseenter", {categoria:categoria}, mostrarDetallesCategoria);
    }

    dialogElegirCategoria.append(gridCategorias);

    var divExplicacion = $("<div></div>");
    divExplicacion.addClass(CSS_CLASS_EXPLICACION_CATEGORIA);
    divExplicacion.attr("id",DESTINO_EXPLICACION_CATEGORIA);
    dialogElegirCategoria.append(divExplicacion);
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

var ERR_NIVEL_ERRONEO = "Error: nivel erróneo";

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
