var DIV_DESTINO_PERSONALES = "#divPersonales";
var DIV_DESTINO_CARACTERISTICAS = "#divCaracteristicas";
var DIV_DESTINO_CAPACIDADES = "#divCapacidades";
var DIV_DESTINO_RESISTENCIAS = "#divResistencias";
var DIV_DESTINO_VENTAJAS = "#divVentajas";
var DIV_DESTINO_DESVENTAJAS = "#divDesventajas";
var DIV_DESTINO_COMBATE = "#divCombate";
var DIV_DESTINO_ARTES_MARCIALES = "#divArtesMarciales";
var DIV_DESTINO_KI = "#divKi";
var DIV_DESTINO_SOBRENATURAL = "#divSobrenatural";
var DIV_DESTINO_PSIQUICA = "#divPsiquica";
var DIV_DESTINO_SECUNDARIAS = "#divSecundarias";
var DIV_DESTINO_DESARROLLO = "#divDesarrollo";
var DIV_DESTINO_ELAN = "#divElan";
var DIV_DESTINO_EQUIPO ="#divEquipamiento";
var DIV_DESTINO_DESCRIPCION ="#divDescripcion";

var listenerActivado = false;

function addActualizador(nombre, delegado) {
    removeActualizador(nombre, delegado);
    DISPATCHER.on(nombre,delegado);
}

function removeActualizador(nombre, delegado) {
    DISPATCHER.off(nombre,delegado);
}

function muestraPersonaje() {
    if (notificacionesActivas) {
        desactivarNotificaciones();
        personaje_actual.updateBonoyBases();
        activarNotificaciones();
    } else {
        personaje_actual.updateBonoyBases();
    }

    $(DIV_DESTINO_PERSONALES).empty().append(muestraPersonales(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_CAPACIDADES).empty().append(muestraCapacidades(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_DESARROLLO).empty().append(muestraDesarrollo(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_CARACTERISTICAS).empty().append(muestraCaracteristicas(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_RESISTENCIAS).empty().append(muestraResistencias(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_VENTAJAS).empty().append(muestraVentajas(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_DESVENTAJAS).empty().append(muestraDesventajas(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_SECUNDARIAS).empty().append(muestraSecundarias(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_COMBATE).empty().append(muestraCombate(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_ARTES_MARCIALES).empty().append(muestraArtesMarciales(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_KI).empty().append(muestraKi(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_SOBRENATURAL).empty().append(muestraSobrenatural(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_PSIQUICA).empty().append(muestraPsiquica(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_ELAN).empty().append(muestraElan(personaje_actual.GENERACION_INICIADA));
    $(DIV_DESTINO_EQUIPO).empty().append(muestraEquipamiento());
    $(DIV_DESTINO_DESCRIPCION).empty().append(muestraDescripcion());

    enableButtonsPasosCreacion(personaje_actual.GENERACION_INICIADA);

    if (!listenerActivado) {
        activaListenerCambiosPersonaje();
    }
}

function activaListenerCambiosPersonaje() {
    DISPATCHER.on(EVENT_CHARACTER_SECCION_PERSONALES,{evento: EVENT_CHARACTER_SECCION_PERSONALES}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_CAPACIDADES,{evento: EVENT_CHARACTER_SECCION_CAPACIDADES}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_CARACTERISTICAS,{evento: EVENT_CHARACTER_SECCION_CARACTERISTICAS}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_DESARROLLO,{evento: EVENT_CHARACTER_SECCION_DESARROLLO}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_VENTAJAS,{evento: EVENT_CHARACTER_SECCION_VENTAJAS}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_DESVENTAJAS,{evento: EVENT_CHARACTER_SECCION_DESVENTAJAS}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_RESISTENCIAS,{evento: EVENT_CHARACTER_SECCION_RESISTENCIAS}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_COMBATE_GENERAL,{evento: EVENT_CHARACTER_SECCION_COMBATE_GENERAL}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_KI,{evento: EVENT_CHARACTER_SECCION_KI}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_MAGIA,{evento: EVENT_CHARACTER_SECCION_MAGIA}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_PSIQUICA,{evento: EVENT_CHARACTER_SECCION_PSIQUICA}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{evento: EVENT_CHARACTER_SECCION_ELAN}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_ARTES_MARCIALES,{evento: EVENT_CHARACTER_SECCION_ARTES_MARCIALES}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_SECUNDARIAS,{evento: EVENT_CHARACTER_SECCION_SECUNDARIAS}, recargaSeccionPersonaje);
    DISPATCHER.on(EVENT_CHARACTER_SECCION_EQUIPO,{evento: EVENT_CHARACTER_SECCION_EQUIPO}, recargaSeccionPersonaje);
    listenerActivado = true;
}

function recargaSeccionPersonaje(event) {
    var divDestino;
    var funcionRecarga;

    switch (event.data.evento) {
        case EVENT_CHARACTER_SECCION_ARTES_MARCIALES:
            divDestino = DIV_DESTINO_ARTES_MARCIALES;
            funcionRecarga = muestraArtesMarciales;
            break;
        case EVENT_CHARACTER_SECCION_CAPACIDADES:
            divDestino = DIV_DESTINO_CAPACIDADES;
            funcionRecarga = muestraCapacidades;
            break;
        case EVENT_CHARACTER_SECCION_CARACTERISTICAS:
            divDestino = DIV_DESTINO_CARACTERISTICAS;
            funcionRecarga = muestraCaracteristicas;
            break;
        case EVENT_CHARACTER_SECCION_COMBATE_GENERAL:
            divDestino = DIV_DESTINO_COMBATE;
            funcionRecarga = muestraCombate;
            break;
        case EVENT_CHARACTER_SECCION_DESARROLLO:
            divDestino = DIV_DESTINO_DESARROLLO;
            funcionRecarga = muestraDesarrollo;
            break;
        case EVENT_CHARACTER_SECCION_DESVENTAJAS:
            divDestino = DIV_DESTINO_DESVENTAJAS;
            funcionRecarga = muestraDesventajas;
            break;
        case EVENT_CHARACTER_SECCION_ELAN:
            divDestino = DIV_DESTINO_ELAN;
            funcionRecarga = muestraElan;
            break;
        case EVENT_CHARACTER_SECCION_KI:
            divDestino = DIV_DESTINO_KI;
            funcionRecarga = muestraKi;
            break;
        case EVENT_CHARACTER_SECCION_MAGIA:
            divDestino = DIV_DESTINO_SOBRENATURAL;
            funcionRecarga = muestraSobrenatural;
            break;
        case EVENT_CHARACTER_SECCION_PERSONALES:
            divDestino = DIV_DESTINO_PERSONALES;
            funcionRecarga = muestraPersonales;
            break;
        case EVENT_CHARACTER_SECCION_PSIQUICA:
            divDestino = DIV_DESTINO_PSIQUICA;
            funcionRecarga = muestraPsiquica;
            break;
        case EVENT_CHARACTER_SECCION_RESISTENCIAS:
            divDestino = DIV_DESTINO_RESISTENCIAS;
            funcionRecarga = muestraResistencias;
            break;
        case EVENT_CHARACTER_SECCION_VENTAJAS:
            divDestino = DIV_DESTINO_VENTAJAS;
            funcionRecarga = muestraVentajas;
            break;
        case EVENT_CHARACTER_SECCION_SECUNDARIAS:
            divDestino = DIV_DESTINO_SECUNDARIAS;
            funcionRecarga = muestraSecundarias;
            break;
        case EVENT_CHARACTER_SECCION_EQUIPO:
            divDestino = DIV_DESTINO_EQUIPO;
            funcionRecarga = muestraEquipamiento;
            break;
    }
    enableButtonsPasosCreacion(personaje_actual.GENERACION_INICIADA);
    $(divDestino).empty().append(funcionRecarga(personaje_actual.GENERACION_INICIADA));
}

function recuadroBase() {
    return getDiv(CSS_RECUADRO);
}

/**
 *
 * @param {string} etiquetaId No localizado
 * @param esTitulo
 * @returns {*}
 */
function muestraSubtitulo(etiquetaId, esTitulo) {
    var divTitulo = getDiv("pretty");
    if (esTitulo) {
        divTitulo.addClass(CSS_TITULO_SECCION);
        divTitulo.addClass("pretty label secondary");
    } else {
        divTitulo.addClass(CSS_SUBTITULO_SECCION);
        divTitulo.addClass("pretty label danger");
    }
    divTitulo.append(_l(etiquetaId));
    return divTitulo;
}


/********* datos personales **********/
/**
 *
 * @param {string} estadoGeneracion
 * @returns {jQuery}
 */
function muestraPersonales(estadoGeneracion) {
    var div = recuadroBase();
    var modificarPersonales = (estadoGeneracion == ESTADO_GENERACION_INICIADA);

    div.append(muestraSubtitulo(UI_PERSONALES, true));

    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);
    divContenido.append(muestraPersonal(_l(UI_NOMBRE), personaje_actual.getNombre(), modificarPersonales, elegirManualNombre));
    divContenido.append(muestraPersonal(_l(UI_SEXO), _l(personaje_actual.getSexo()), modificarPersonales, elegirManualSexo));
    divContenido.append(muestraPersonal(_l(UI_RAZA), _l(personaje_actual.getRaza().getNombre()), modificarPersonales,dialogoElegirRaza));
    divContenido.append(muestraPersonal(_l(UI_PESO), personaje_actual.getPeso(), modificarPersonales, elegirPeso));
    divContenido.append(muestraPersonal(_l(UI_ALTURA), personaje_actual.getAltura(), modificarPersonales, elegirAltura));
    divContenido.append(muestraPersonal(_l(UI_ESTATUS_SOCIAL), _l(personaje_actual.getEstatus()), modificarPersonales, elegirClaseSocial));
    divContenido.append(muestraPersonalConDivExtra(_l(UI_CATEGORIA), _l(personaje_actual.getCategoria().getNombre()), modificarPersonales, dialogoElegirCategoria,{},
        muestraBotonPequeño(_l(UI_CAMBIAR_CAT),{},cambiarCategoria,"")));

    div.append(divContenido);


    return div;
}

function muestraCapacidades(estadoGeneracion) {
    var div = recuadroBase();
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    var modificarApariencia = (estadoGeneracion == ESTADO_GENERACION_INICIADA);
    var modificarPV = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));
    div.append(muestraSubtitulo(UI_CAPACIDADES_FISICAS, true));

    divContenido.append(muestraValorPV(modificarPV));

    divContenido.append(muestraPersonal(_l(UI_PUNTOS_CANSANCIO), personaje_actual.getPuntosCansancio(), false));
    divContenido.append(muestraPersonal(_l(UI_TIPO_MOVIMIENTO), personaje_actual.getTipoMovimiento(), false));
    divContenido.append(muestraPersonal(_l(UI_APARIENCIA), personaje_actual.getApariencia(), modificarApariencia, elegirManualApariencia));
    divContenido.append(muestraPersonal(_l(UI_TAMAÑO), personaje_actual.getTamaño(), false));

    divContenido.append(muestraValorRegeneracion());

    div.append(divContenido);
    return div;
}

function muestraDesarrollo(estadoGeneracion) {
    var div = recuadroBase();
    div.append(muestraSubtitulo(UI_DESARROLLO, true));
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    var modificarPX = (estadoGeneracion == ESTADO_GENERACION_PERSONAJE_HECHO);
    var mostrarPDyPCArriba = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) ||(estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));

    divContenido.append(muestraPersonal(_l(UI_NIVEL), personaje_actual.getNivel(), false));

    divContenido.append(muestraPersonal(_l(UI_PUNTOS_DESARROLLO), personaje_actual.getPDTotales() + "(" + personaje_actual.getPDLibres() + " " + _l(UI_PUNTOS_SIN_USAR) + ")", false));
    if ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        var ul = $("<ul></ul>");
        ul.append($("<li></li>").append(muestraPersonal(_l(UI_PD_COMBATE), personaje_actual.gastoActualPDsGrupoHabilidad(TIPO_HB_COMBATE) + "/" + personaje_actual.maxPDsGrupoHabilidad(TIPO_HB_COMBATE), false)));
        ul.append($("<li></li>").append(muestraPersonal(_l(UI_PD_ATAQUE_DEFENSA), personaje_actual.gastoActualPDsAtaqueDefensa() + "/" + personaje_actual.maxPDsAtaqueDefensa(), false)));
        ul.append($("<li></li>").append(muestraPersonal(_l(UI_PD_SOBRENATURAL), personaje_actual.gastoActualPDsGrupoHabilidad(TIPO_HB_SOBRENATURAL) + "/" + personaje_actual.maxPDsGrupoHabilidad(TIPO_HB_SOBRENATURAL), false)));
        ul.append($("<li></li>").append(muestraPersonal(_l(UI_PD_PSIQUICA), personaje_actual.gastoActualPDsGrupoHabilidad(TIPO_HB_PSIQUICA) + "/" + personaje_actual.maxPDsGrupoHabilidad(TIPO_HB_PSIQUICA), false)));
        ul.append($("<li></li>").append(muestraPersonal(_l(UI_PD_SECUNDARIAS), personaje_actual.gastoActualPDsSecundarias(), false)));
        divContenido.append(ul);
    }

    if ((estadoGeneracion == ESTADO_GENERACION_INICIADA)) {
        divContenido.append(muestraPersonal(_l(UI_PUNTOS_CREACION), personaje_actual.getPCTotales() +
            "(" + personaje_actual.getPC("PC_libres_generales") + " " + _l(UI_PUNTOS_SIN_USAR) + ")" +
            "(" + personaje_actual.getPC("PC_libres_don") + " " + _l(UI_PC_DON) + ")" +
            "(" + personaje_actual.getPC("PC_libres_psiquicas") + " " + _l(UI_PC_PSIQUICA) + ")" +
            "(" + personaje_actual.getPC("PC_libres_trasfondo") + " " + _l(UI_PC_TRASFONDO) + ")", false));
    }

    if (mostrarPDyPCArriba) {
        var divPDArriba = $("<p></p>").css("font-size","smaller");
        divPDArriba.css("margin-bottom","0px");
        var divPCArriba = $("<p></p>").css("font-size","smaller");
        divPCArriba.css("margin-bottom","0px");
        var divDestinoAlto =$("#infoSuperior");
        divDestinoAlto.empty();
        divDestinoAlto.append(divPDArriba.html(_l(UDS_PD) + ":" +personaje_actual.getPDLibres() + "/" + personaje_actual.getPDTotales()));
        divDestinoAlto.append(divPCArriba.html(_l(UDS_PC) + ":" +personaje_actual.getPCLibres() + "/" + personaje_actual.getPCTotales()));
    }


    if ((estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        divContenido.append(muestraPersonal(_l(UI_AUMENTOS_CARACTERISTICAS), personaje_actual.getAumentosCaracteristicasLibres(), false));
    }

    divContenido.append(muestraPersonal(_l(UI_PX), personaje_actual.getPX(), modificarPX, elegirPX));

    div.append(divContenido);
    return div;
}

/**
 *
 * @param {string} etiqueta Ya localizada
 * @param {number|string} valor
 * @param {boolean} mostrarBotonEleccionManual
 * @param {function} [funcionEleccionManual]
 * @returns {jQuery}
 * @param {{}} [parametrosEleccionManual]
 */
function muestraPersonal(etiqueta, valor, mostrarBotonEleccionManual, funcionEleccionManual, parametrosEleccionManual) {
    var divCampo = getDiv(CSS_CAMPO_PERSONALES);
    var divEtiqueta = getDiv(CSS_ETIQUETA);
    var divValor = getDiv(CSS_VALOR_PERSONALES);

    divEtiqueta.append(etiqueta + ":");
    divValor.append(valor);
    divCampo.append(divEtiqueta).append(divValor);

    if (mostrarBotonEleccionManual) {
        var divBoton = boton("small info pretty btn",_l(UI_ELEGIR));
        divBoton.on("click",parametrosEleccionManual,funcionEleccionManual);
//        divBoton.css("width","1rem");
        divCampo.append(divBoton);
    }

    return divCampo;
}

/**
 *
 * @param {string} etiqueta Ya localizado
 * @param {number|string} valor
 * @param {boolean} mostrarBotonEleccionManual
 * @param {function} [funcionEleccionManual]
 * @returns {jQuery}
 * @param {{}} [parametrosEleccionManual]
 * @param {jQuery} divExtra
 */
function muestraPersonalConDivExtra(etiqueta, valor, mostrarBotonEleccionManual, funcionEleccionManual, parametrosEleccionManual, divExtra) {
    var divCampo = getDiv(CSS_CAMPO_PERSONALES);
    var divEtiqueta = getDiv(CSS_ETIQUETA);
    var divValor = getDiv(CSS_VALOR_PERSONALES);

    divEtiqueta.append(etiqueta + ":");
    divValor.append(valor);
    divCampo.append(divEtiqueta).append(divValor);

    if (mostrarBotonEleccionManual) {
        var divBoton = boton("small info pretty btn",_l(UI_ELEGIR));
        divBoton.on("click",parametrosEleccionManual,funcionEleccionManual);
//        divBoton.css("width","1rem");
        divCampo.append(divBoton);
    }

    if (personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_SUBIENDO_NIVEL) {
        divCampo.append(divExtra);
    }

    return divCampo;
}

function muestraValorPV(modificable) {
    var div = getDiv(CSS_CAMPO_PERSONALES);
    var divCampo = getDiv(CSS_CAMPO_PERSONALES);
    var divCampo2 = getDiv(CSS_CAMPO_PERSONALES);
    var divEtiqueta = getDiv(CSS_ETIQUETA);
    var divValor = getDiv(CSS_VALOR_PERSONALES);

    divEtiqueta.append(_l(UI_PUNTOS_VIDA) + ":");
    var valorFinal = parseInt(personaje_actual.pv);

    var tooltip = personaje_actual.pv + "("+_l(UI_BASE)+")";

    var bonos = personaje_actual.getBonos(BONO_PV, BONO_PV, CATEGORIA_BONO_CUALQUIERA);
    for (var i = 0; i < bonos.length; i++) {
        var bono = bonos[i];
        var valorBono = bono.bono;
        valorFinal += parseInt(valorBono);
        if (valorBono >= 0) {
            valorBono = "+" + valorBono;
        } else {
            valorBono = "" + valorBono;
        }
        tooltip += valorBono + " (" + _l(bono.origen) + ")";
    }
    tooltip += "=" + valorFinal + " (" + _l(UI_FINAL) + ")";

    divValor.append(valorFinal);

    addToolTip(divValor,tooltip);

    divCampo.append(divEtiqueta).append(divValor);

    var divCoste = getDiv(CSS_COSTE);
    divCoste.addClass("textSmaller");
    divCoste.append("[" + personaje_actual.getCostePV() + "] ");

    var etiMultip = getDiv(CSS_ETIQUETA).append(_l(UI_MULTIPLO_VIDA) + ": ");
    var valorMultip = getDiv(CSS_VALOR_PERSONALES).append(personaje_actual.getHabilidadDePersonaje(HB_MULTIPLO_VIDA).valorBase(personaje_actual.getCostePV()));

    divCampo2.append(divCoste).append(etiMultip).append(valorMultip);

    if (modificable) {
        divCampo2.append(muestraBotonMasMenosHabilidad(HB_MULTIPLO_VIDA).addClass(CSS_MUESTRA_INLINE));
    }

    div.append(divCampo).append(divCampo2);

    return div;
}

function muestraValorRegeneracion() {
    var divCampo = getDiv(CSS_CAMPO_PERSONALES);
    var divEtiqueta = getDiv(CSS_ETIQUETA);
    var divValor = getDiv(CSS_VALOR_PERSONALES);

    divEtiqueta.append(_l(UI_REGENERACION) + ":");
    var valorFinal = parseInt(personaje_actual.getRegeneracionBase());

    var tooltip = personaje_actual.getRegeneracionBase() + "("+_l(UI_BASE)+")";

    var bonos = personaje_actual.getBonos(BONO_REGENERACION, BONO_REGENERACION, CATEGORIA_BONO_CUALQUIERA);
    for (var i = 0; i < bonos.length; i++) {
        var bono = bonos[i];
        var valorBono = bono.bono;
        valorFinal += parseInt(valorBono);
        if (valorBono >= 0) {
            valorBono = "+" + valorBono;
        } else {
            valorBono = "" + valorBono;
        }
        tooltip += valorBono + " (" + _l(bono.origen) + ")";
    }
    tooltip += "=" + valorFinal + " ("+_l(UI_FINAL)+")";

    divValor.append(valorFinal);

    addToolTip(divValor,tooltip);

    divCampo.append(divEtiqueta).append(divValor).append("<br>");

    return divCampo;
}

/******** caracteristicas *************/
function muestraCaracteristicas(estadoGeneracion) {
    var div = recuadroBase();
    div.append(muestraSubtitulo(UI_CARACTERISTICAS, true));
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    updateNivelMagiaPorInteligencia(personaje_actual.getCaracteristica(INT));

    var divRow = getDiv(CSS_TEXTO_SMALL);
    divRow.addClass("row");
    var divNombre = getDiv("four columns");
    divNombre.append(_l(UI_CARACTERISTICA));
    var divValor = getDiv("three columns").addClass(CSS_TEXTO_CENTRO);
    divValor.append(_l(UI_VALOR));
    var divBono = getDiv("three columns").addClass(CSS_TEXTO_CENTRO);
    divBono.append(_l(UI_BONO));
    var divAumento = getDiv("two columns");
    divRow.append(divNombre).append(divValor).append(divBono).append(divAumento);
    divContenido.append(divRow);

    for (var i = 0;i<CARACTERISTICAS_NOMBRES.length;i++) {
        var valor = personaje_actual.getCaracteristica(CARACTERISTICAS_NOMBRES[i]);
        var bono = modificadorBonito(personaje_actual.getBonoCaracteristica(CARACTERISTICAS_NOMBRES[i]));

        divContenido.append(muestraCaracteristica(CARACTERISTICAS_NOMBRES[i],valor,bono,(estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL)));
    }

    div.append(divContenido);
    return div;
}

/**
 *
 * @param {string} nombre No localizado
 * @param {number} valor
 * @param {string} bono
 * @param {boolean} mostrarBotonesAumento
 * @returns {jQuery}
 */
function muestraCaracteristica(nombre, valor, bono, mostrarBotonesAumento) {

    var divRow = getDiv("row").addClass(CSS_CAMPO_CARACTERISTICAS);
    var divNombre = getDiv("four columns").addClass(CSS_ETIQUETA);
    var divValor = getDiv("three columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_CENTRO);
    var divBono = getDiv("three columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_CENTRO);
    var divAumento = getDiv("two columns");

    divRow.append(divNombre).append(divValor).append(divBono);

    if (mostrarBotonesAumento) {
        divRow.append(divAumento);
        var botonMas = muestraBotonPequeño("+",{caracteristica:nombre},gastaAumentoCaracteristica,"");
        divAumento.append(botonMas);

        var botonMenos = muestraBotonPequeño("-",{caracteristica:nombre},recuperaAumentoCaracteristica,"")
        divAumento.append(botonMenos);

        if (personaje_actual.getAumentosCaracteristicasLibres() < 1) {
            disableButton(botonMas);
        }

        disableButton(botonMenos);
        if (personaje_actual.aumentoGastadoEn(nombre)) {
            enableButton(botonMenos);
        }
    }

    divNombre.append(_l(nombre));
    divValor.append(valor);
    divBono.append(bono);

    divRow.append(divNombre).append(divValor).append(divBono);

    return divRow;
}

/******* resistencias ***********/
function muestraResistencias(estadoGeneracion) {
    var div = recuadroBase();
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    div.append(muestraSubtitulo(UI_RESISTENCIAS, true));

    var multiplicador;

    if (personaje_actual.hasFlag(FLAG_RF_A_MITAD)) {
        multiplicador = MULTIPLICADOR_MITAD;
    } else {
        multiplicador = MULTIPLICADOR_ENTERO;
    }
    divContenido.append(muestraValorConBonos(_l(UI_RF), personaje_actual.getPresencia(), personaje_actual.getBonos(BONO_RESISTENCIA, RF, CATEGORIA_BONO_CUALQUIERA),multiplicador));
    if (personaje_actual.hasFlag(FLAG_RE_A_MITAD)) {
        multiplicador = MULTIPLICADOR_MITAD;
    } else {
        multiplicador = MULTIPLICADOR_ENTERO;
    }
    divContenido.append(muestraValorConBonos(_l(UI_RE), personaje_actual.getPresencia(), personaje_actual.getBonos(BONO_RESISTENCIA, RE, CATEGORIA_BONO_CUALQUIERA),multiplicador));
    if (personaje_actual.hasFlag(FLAG_RV_A_MITAD)) {
        multiplicador = MULTIPLICADOR_MITAD;
    } else {
        multiplicador = MULTIPLICADOR_ENTERO;
    }
    divContenido.append(muestraValorConBonos(_l(UI_RV), personaje_actual.getPresencia(), personaje_actual.getBonos(BONO_RESISTENCIA, RV, CATEGORIA_BONO_CUALQUIERA),multiplicador));
    if (personaje_actual.hasFlag(FLAG_RM_A_MITAD)) {
        multiplicador = MULTIPLICADOR_MITAD;
    } else {
        multiplicador = MULTIPLICADOR_ENTERO;
    }
    divContenido.append(muestraValorConBonos(_l(UI_RM), personaje_actual.getPresencia(), personaje_actual.getBonos(BONO_RESISTENCIA, RM, CATEGORIA_BONO_CUALQUIERA),multiplicador));
    if (personaje_actual.hasFlag(FLAG_RP_A_MITAD)) {
        multiplicador = MULTIPLICADOR_MITAD;
    } else {
        multiplicador = MULTIPLICADOR_ENTERO;
    }
    divContenido.append(muestraValorConBonos(_l(UI_RP), personaje_actual.getPresencia(), personaje_actual.getBonos(BONO_RESISTENCIA, RP, CATEGORIA_BONO_CUALQUIERA),multiplicador));

    div.append(divContenido);
    return div;
}

/**
 *
 * @param {string} etiqueta Ya localizada
 * @param valorBase
 * @param bonos
 * @param [multiplicador]
 * @returns {*}
 */
function muestraValorConBonos(etiqueta, valorBase, bonos,multiplicador) {
    var divCampo = getDiv(CSS_CAMPO_PERSONALES);
    var divEtiqueta = getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL);
    var divValor = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);

    if (multiplicador == undefined) {
        multiplicador = 1;
    }

    var tooltip = "";

    divEtiqueta.append(etiqueta + ":");
    divValor.append(valorBase + "("+_l(UI_BASE)+")");
    tooltip = valorBase + "("+_l(UI_BASE+")");
    var valorFinal = parseInt(valorBase);
    var valorBonos = 0;
    for (var i = 0; i < bonos.length; i++) {
        var bono = bonos[i];
        var valorBono = bono.bono;
        valorFinal += parseInt(valorBono);
        valorBonos += parseInt(valorBono);
        if (valorBono >= 0) {
            valorBono = "+" + valorBono;
        } else {
            valorBono = "" + valorBono;
        }
        tooltip += valorBono + " (" + _l(bono.origen) + ")";
    }
    valorFinal *= multiplicador;

    if (multiplicador < 1) {
        tooltip += " x" + multiplicador;
    }
    if (valorBonos >= 0) {
        valorBonos = "+" + valorBonos;
    } else {
        valorBonos = "" + valorBonos;
    }
    tooltip += "=" + valorFinal + " ("+_l(UI_FINAL)+")";
    divValor.append(valorBonos + "("+_l(UI_BONOS)+") =" + valorFinal + " ("+_l(UI_FINAL)+")");

    addToolTip(divValor,tooltip);

    divCampo.append(divEtiqueta).append(divValor);

    return divCampo;
}

function muestraElan(estadoGeneracion) {
    var div = recuadroBase();

    var muestraBotones = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));

    div.append(muestraSubtitulo(UI_ELAN, true));
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    if (personaje_actual.elan.length == 0) {
        divContenido.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }
    for (var i = 0; i < personaje_actual.elan.length; i++) {
        /**
         *
         * @type {Elan}
         */
        var elanPersonaje = personaje_actual.elan[i];

        var divElan = getDiv(CSS_MUESTRA_BLOCK).addClass(CSS_TEXTO_SMALLER);
        var divEtiElan = getDiv(CSS_ETIQUETA).html(_l(elanPersonaje.nombre));
        var divSincro = getDiv(CSS_COSTE).html("(" + elanPersonaje.getSincronizacion().toString() + "/" + (elanPersonaje.getSincronizacion()-elanPersonaje.getSinGastada()).toString() + " "+_l(UI_LIBRE)+")");
        divElan.append(divEtiElan).append(divSincro);
        divContenido.append(divElan);

        if (elanPersonaje.dones.length > 0) {
            var divDones = getDiv(CSS_TABULADO);
            for (var j = 0; j < elanPersonaje.dones.length; j++) {
                var divNombreDon = getDiv(CSS_TEXTO_SMALLER).addClass(CSS_MUESTRA_BLOCK);
                divNombreDon.append(_l(elanPersonaje.dones[j].nombre));
                addToolTip(divNombreDon,_l(elanPersonaje.dones[j].descripcion));
                divDones.append(divNombreDon);
            }
            divContenido.append(divDones);
        }
    }
    div.append(divContenido);
    return div;
}

/******* ventajas ********/
function muestraVentajas(estadoGeneracion) {
    var div = recuadroBase();
    var puedeAñadir = false;

    if ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        puedeAñadir = true;
    }

    div.append(listaElementosPCComprados(UI_VENTAJAS,personaje_actual.ventajas,anularelementoPCComprado,puedeAñadir, dialogoVentajas,_l(UI_COMPRAR_VENTAJA)));

    return div;
}

function muestraDesventajas(estadoGeneracion) {
    var div = recuadroBase(estadoGeneracion);
    var puedeAñadir = false;

    if ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        puedeAñadir = true;
    }

    div.append(listaElementosPCComprados(UI_DESVENTAJAS,personaje_actual.desventajas,anularelementoPCComprado,puedeAñadir,dialogoDesventajas,_l(UI_COMPRAR_DESVENTAJA)));

    return div;
}

/**
 *
 * @param {string} titulo No localizado
 * @param arrayElementos
 * @param callback
 * @param puedeComprarNuevo
 * @param callbackBotonNuevo
 * @param {string} etiquetaBotonNuevo Ya localizado
 * @returns {*}
 */
function listaElementosPCComprados(titulo,arrayElementos,callback,puedeComprarNuevo,callbackBotonNuevo, etiquetaBotonNuevo) {
    var div = getDiv("");

    var divTitulo = muestraSubtitulo(titulo, true);
    div.append(divTitulo);
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    if (puedeComprarNuevo) {
        divContenido.append(botonComprarNuevo(etiquetaBotonNuevo,BOTON_VENTAJAS,callbackBotonNuevo,{}));
    }

    if (arrayElementos.length == 0) {
        divContenido.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (var i = 0; i < arrayElementos.length; i++) {
        var ventajaComprada = arrayElementos[i];
        var divV = muestraVentaja(ventajaComprada);
        if (puedeComprarNuevo) {
            if ((ventajaComprada.isAnulable()) && (ventajaComprada.ventaja.origen != ORIGEN_RAZA) && (ventajaComprada.ventaja.origen != ORIGEN_ELAN)) {
                divV.append(muestraBotonAnular(callback,{elementoPCComprado: ventajaComprada}));
            }
        }
        divContenido.append(divV);
    }
    div.append(divContenido);
    return div;
}

/**
 *
 * @param {string} label Ya localizada
 * @param id
 * @param callback
 * @param parametros
 * @returns {*}
 */
function botonComprarNuevo(label, id, callback, parametros) {
    var divBotonNuevo = boton("small primary btn pretty",label);
    divBotonNuevo.attr("id",id);
    divBotonNuevo.on("click",parametros,callback);
    return divBotonNuevo;
}

function muestraVentaja(ventajaComprada) {
    var div = getDiv(CSS_TEXTO_SMALL);

    var divNombre = getDiv(CSS_ETIQUETA);
    var divCoste = getDiv(CSS_COSTE);

    div.append(divNombre).append(divCoste);

    divNombre.append(_l(ventajaComprada.ventaja.nombre));

    if (ventajaComprada.opcion != "") {
        divNombre.append(" (" + _l(ventajaComprada.opcion) + ")");
    }
    if (ventajaComprada.origen == ORIGEN_PC) {
        divCoste.append(" [" + ventajaComprada.pc + "]");
    } else {
        divCoste.append(" (" + _l(ventajaComprada.origen) + ")");
    }

    addToolTip(div,_l(ventajaComprada.ventaja.descripcion) + "<hr>" + _l(ventajaComprada.ventaja.descripcionEfecto));

    return div;
}

/******* habilidades **********/

/**
 *
 * @param {string} nombreHabilidad No localizado
 * @param {string} etiqueta Localizado
 * @param muestraBotones
 * @returns {*}
 */
function muestraHabilidadPrimaria(nombreHabilidad,etiqueta,muestraBotones) {
    var coste = personaje_actual.getCoste(nombreHabilidad, true);

    var mostrarBotones = ((coste != 0) || (nombreHabilidad == HB_POTENCIAL_PSIQUICO)) && muestraBotones;

    return muestraValorConBonosYCoste(etiqueta,
        personaje_actual.getHabilidadDePersonaje(nombreHabilidad).valorBase(coste),
        personaje_actual.getBonos(BONO_HABILIDAD, nombreHabilidad, CATEGORIA_BONO_CUALQUIERA),
        coste,
        (mostrarBotones) ? muestraBotonMasMenosHabilidad(nombreHabilidad).addClass(CSS_MUESTRA_INLINE) : "",
        true,
        (nombreHabilidad == HB_POTENCIAL_PSIQUICO));
}

function muestraDesequilibrioOfensivoMagico() {
    var divRow = getDiv("row");
    var divEtiqueta = getDiv("four columns").addClass(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL);
    var divValor = getDiv("one columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);

    divEtiqueta.append(_l(UI_DESEQUILIBRIO_OFENSIVO_MAGICO) + ":");

    divValor.append(modificadorBonito(parseInt(personaje_actual.getDesequilibrioOfensivoMagico())));

    divRow.append(divEtiqueta).append(divValor);

    if ((personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_INICIADA) || (personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        if (personaje_actual.puedeAjustarDesequilibrioOfensivoMagico()) {
            var divAppend = getDiv("push_one three columns");
            divAppend.append(muestraBotonPequeño(_l(UI_ESPECIFICAR),{},elegirDesequilibrioOfensivoMagico,"botonEspecificarDesequilibrioOfensivoMagico"));
            divRow.append(divAppend);
        }
    }

    return divRow;
}

function muestraCombate(estadoGeneracion) {
    var muestraBotones = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));

    var div = recuadroBase();
    div.append(muestraSubtitulo(UI_COMBATE, true));

    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);
    divContenido.append(muestraCabecerasBaseBonosFinal());

    divContenido.append(muestraCombateHabilidadesGenerales(muestraBotones));

    divContenido.append(muestraSubtitulo(UI_ARMAS_MANEJADAS, false));
    divContenido.append(muestraManejoArmas());

    divContenido.append(muestraSubtitulo(UI_ARMADURA, false));
    divContenido.append(muestraArmadura());

    divContenido.append(muestraSubtitulo(UI_TURNO, false));

    var divTurno = getDiv(CSS_CAMPO_PERSONALES);
    var divEtiqueta = getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL);
    var divValor = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);
    var tooltip = "";

    divEtiqueta.append(_l(UI_TURNO) + ":");
    divValor.append(personaje_actual.getTurnoFijo());
    tooltip = personaje_actual.getExplicacionTurnoFijo();
    addToolTip(divValor,tooltip);
    divTurno.append(divEtiqueta).append(divValor);

    divContenido.append(divTurno);

    divContenido.append(muestraSubtitulo(UI_TABLAS, false));
    divContenido.append(muestraTablas([CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS,CATEGORIA_TABLA_ARMAS_ESTILOS,CATEGORIA_TABLA_ARMAS_GENERALES],muestraBotones));

    divContenido.append(muestraSubtitulo(UI_ESTADISTICAS_ARMAS, false));
    divContenido.append(muestraArmas());

    div.append(divContenido);
    return div;
}

function muestraKi(estadoGeneracion) {
    var div = recuadroBase();

    var muestraBotones = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));

    div.append(muestraSubtitulo(UI_DOMINIOS_KI, true));

    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    divContenido.append(muestraCabecerasBaseBonosFinal());

    var muestraBotonesCM = muestraBotones && FLAG_DOMINUS_EXXET_ENABLED;
    divContenido.append(muestraHabilidadPrimaria(HB_CM,_l(UI_CM),muestraBotones));

    divContenido.append(muestraHabilidadPrimaria(HB_KI_AGI,_l(UI_KI_AGI),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_KI_CON,_l(UI_KI_CON),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_KI_DES,_l(UI_KI_DES),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_KI_FUE,_l(UI_KI_FUE),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_KI_POD,_l(UI_KI_POD),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_KI_VOL,_l(UI_KI_VOL),muestraBotones));

    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_AGI,_l(UI_ACUMULACION_KI_AGI),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_CON,_l(UI_ACUMULACION_KI_CON),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_DES,_l(UI_ACUMULACION_KI_DES),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_FUE,_l(UI_ACUMULACION_KI_FUE),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_POD,_l(UI_ACUMULACION_KI_POD),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_VOL,_l(UI_ACUMULACION_KI_VOL),muestraBotones));

    divContenido.append(muestraHabilidadesKi(muestraBotones));

    divContenido.append(muestraTecnicasKi(muestraBotones));

    div.append(divContenido);
    return div;
}

function muestraCMPersonaje(muestraBotones) {
    var divCM = getDiv("");

/*    divCM.append(
        getDiv(CSS_MUESTRA_BLOCK).
            append(muestraValorConBonos(_l(UI_CM), 0, personaje_actual.getBonos(BONO_CM, BONO_CM, CATEGORIA_BONO_CUALQUIERA))));

    var divCMlibreEti = getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).addClass(CSS_MUESTRA_INLINE).append(_l(UI_CM)+ " " + _l(UI_LIBRE) + ": ");
    var divCMlibreValor = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL).addClass(CSS_MUESTRA_INLINE).append(personaje_actual.getCMTotal()-personaje_actual.getCMGastado());
    divCM.append(getDiv(CSS_TEXTO_SMALL).append(divCMlibreEti).append(divCMlibreValor));
    if (muestraBotones) {

    }*/

    divCM.append(muestraHabilidadPrimaria(HB_CM,_l(UI_CM),muestraBotones));
    return divCM;
}


/**
 *
 * @returns {jQuery}
 */
function muestraHabilidadesKi(muestraBotones) {
    var div = getDiv("");

    div.append(muestraSubtitulo(UI_HABILIDADES_KI, false));

    if (muestraBotones) {
        div.append(botonComprarNuevo(_l(UI_COMPRAR_HABILIDAD_KI),BOTON_CM,dialogoCM,{}));
    }

    var habKi = personaje_actual.getHabilidadesKi();

    if (habKi.length == 0) {
        div.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }
    for (var i = 0; i < habKi.length; i++) {
        var divHabilidad = getDiv("");
        if (habKi[i].isHabilidad()) {
            var divBotones = getDiv("");
            if ((habKi[i].isAnulable()) && muestraBotones) {
                divBotones.append(muestraBotonAnular(anularHabilidadKi,{habilidadKi: habKi[i]}));
            }
            divHabilidad.append(
                muestraValorConBonosYCoste(
                    _l(habKi[i].getNombre()),
                    habKi[i].getValorActual(personaje_actual),
                    personaje_actual.getBonos(BONO_KI, habKi[i].getNombre(), CATEGORIA_BONO_CUALQUIERA),
                    0,
                    divBotones,
                    true,
                    false)
            );
        } else {
            divHabilidad.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).append(_l(habKi[i].getNombre())));
            if (muestraBotones) {
                divHabilidad.append(muestraBotonAnular(anularHabilidadKi,{habilidadKi: habKi[i]}));
            }
        }

        div.append(divHabilidad);
    }

    return div;
}

/**
 *
 * @returns {jQuery}
 */
function muestraTecnicasKi(muestraBotones) {
    var div = getDiv("");
    /**
     *
     * @type {TecnicaKiComprada[]}
     */
    var tecnicasKi = personaje_actual.getTecnicasKi();

    div.append(muestraSubtitulo(UI_TECNICAS_KI, false));

    if (muestraBotones) {
        var divBotonNuevo = $("<div></div>");
        divBotonNuevo.append(muestraBotonPequeño(_l(UI_COMPRAR_TECNICA_DE_KI),{},dialogoCM,BOTON_CM));
        div.append(divBotonNuevo);
    } else if (tecnicasKi.length == 0) {
        div.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (var i = 0; i < tecnicasKi.length; i++) {
        var divTecnica = getDiv("");
        var tecn = tecnicasKi[i];

        div.append("<hr>");



        var divNombre = getDiv(CSS_TEXTO_SMALLER).addClass(CSS_CAMPO_PERSONALES).addClass(CSS_MUESTRA_BLOCK).addClass("six columns").append(_l(tecn.getNombre()));
        var divNivel = getDiv(CSS_TEXTO_SMALLER).addClass(CSS_ETIQUETA_PERSONALES).addClass(CSS_MUESTRA_BLOCK).addClass("six columns").append(_l(UI_NV) + " " + tecn.getNivel());
        var divCM = getDiv(CSS_TEXTO_SMALLER).addClass(CSS_COSTE).addClass(CSS_MUESTRA_BLOCK).addClass("two columns").append(_l(UI_CM) + " " + tecn.getCosteCM());
        var divKi= getDiv(CSS_TEXTO_SMALLER).addClass(CSS_COSTE).addClass(CSS_MUESTRA_BLOCK).addClass("ten columns").append(_l(UI_COSTE_KI) + " " + tecn.getCosteKi().toString());
        var divMantenimiento = getDiv(CSS_TEXTO_SMALLER).addClass(CSS_COSTE).addClass(CSS_MUESTRA_BLOCK).addClass("twelve columns").append(_l(UI_COSTE_MANTENIMIENTO) + " " + tecn.getCosteMantenimiento().toString());

        divTecnica.
            append(
                getDiv("row").
                    append(divNombre).append(divNivel)).
            append(
                getDiv("row").
                    append(divCM).append(divKi));

        if (tecn.isMantenida()) {
            divTecnica.append(getDiv("row").append(divMantenimiento));
        }

        divTecnica.append(getDiv(CSS_TEXTO_SMALLER).addClass(CSS_COLOR_GRIS).append(_l(UI_EFECTOS_DE_LA_TECNICA) + ": "));

        if (tecn.efectoPrimario)
            divTecnica.append(getDiv(CSS_TEXTO_SMALLER).addClass(CSS_MUESTRA_BLOCK).addClass(CSS_COLOR_PALIDGREEN).append(tecn.getEfectoPrimario().getNombreCompleto()));

        var efectosSecundarios = tecn.getEfectosSecundarios();
        for (var j = 0; j < efectosSecundarios.length; j++) {
            divTecnica.append(getDiv(CSS_TEXTO_SMALLER).addClass(CSS_MUESTRA_BLOCK).addClass(CSS_COLOR_PALIDGREEN).append(efectosSecundarios[j].getNombreCompleto()));
        }

        var desventajas = tecn.getDesventajas();
        if (desventajas.length > 1) {
            divTecnica.append(getDiv(CSS_TEXTO_SMALLER).addClass(CSS_COLOR_GRIS).append(_l(UI_DESVENTAJAS_DE_LA_TECNICA) + ": "));
            for ( j = 0; j < desventajas.length; j++) {
                divTecnica.append(getDiv(CSS_TEXTO_SMALLER).addClass(CSS_MUESTRA_BLOCK).addClass(CSS_COLOR_PALIDGREEN).append(desventajas[j].getNombreCompleto()));
            }
        }
        divTecnica.append(getDiv(CSS_TEXTO_SMALLER).addClass(CSS_COLOR_GRIS).append(_l(UI_DESCRIPCION) + ": " + tecn.getDescripcion()));

        if (muestraBotones) {
            divTecnica.append(muestraBotonAnular(anularTecnicaKi,{tecnicaKi: tecnicasKi[i]}));
        }


        div.append(divTecnica);
    }

    return div;
}

/**
 *
 * @returns {jQuery}
 */
function muestraCombateHabilidadesGenerales(muestraBotones) {
    var div = $("<div></div>");

    div.append(muestraHabilidadPrimaria(HB_ATAQUE, _l(UI_ATAQUE),muestraBotones));
    div.append(muestraHabilidadPrimaria(HB_PARADA, _l(UI_PARADA),muestraBotones));

    div.append(muestraHabilidadPrimaria(HB_ESQUIVA, _l(UI_ESQUIVA),muestraBotones));

    div.append(muestraHabilidadPrimaria(HB_ARMADURA, _l(UI_LLEVAR_ARMADURA),muestraBotones));

    return div;
}

function muestraArmadura() {
    var div = getDiv(CSS_TEXTO_SMALL).addClass("sixteen colgrid");
    var divDescripcion = $("<ul></ul>").addClass("three_up tiles").addClass(CSS_TEXTO_SMALL);

    for (var j = 0; j < personaje_actual.armaduras.length; j++) {
        if (personaje_actual.armaduras[j].isEquipado()) {
            var divArmadura = getDiv(CSS_MUESTRA_INLINE).append(personaje_actual.armaduras[j].toString());
            addToolTip(divArmadura,personaje_actual.armaduras[j].getTAs().toString());
            divDescripcion.append($("<li></li>").
                append(divArmadura).
                append(muestraBotonPequeño("X",{armadura: personaje_actual.armaduras[j]},function(params) {
                    params.armadura.setEquipado(false);
                    lanzarEvento(EVENT_CHARACTER_SECCION_EQUIPO);
                    lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
                },"")));
        }
    }
    div.append(divDescripcion);

    var divRowArmadura = getDiv("row");

    for (var i = 0; i < TAS_ARMADURA.length; i++) {
        var divTA = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE);
        var divValor = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_MUESTRA_INLINE);
        var divCol;
        if (i == 0) {
            divCol = getDiv("push_one two columns");
        } else {
            divCol = getDiv("two columns");
        }
        divCol
            .append(divTA.append(_l(TAS_ARMADURA[i]) + ":"))
            .append(divValor.append(personaje_actual.getArmadura(TAS_ARMADURA[i])));
        divRowArmadura.append(divCol);
    }
    div.append(divRowArmadura);

    var divRowPenalizador = getDiv("row").append(_l(UI_PENALIZADOR_TODA_ACCION) + ": " + getPenalizadorTodaAccionPorArmaduraActual(personaje_actual));
    div.append(divRowPenalizador);

    if (personaje_actual.capaYelmo.getNombre() != ARMADURA_NINGUNA) {
        var divDescripcionYelmo = getDiv("row");
        var divYelmo = getDiv("centered five columns").addClass(CSS_TEXTO_CENTRO);

        divYelmo.append("[" + _l(UI_YELMO) + ": " + personaje_actual.capaYelmo.toString() + "]");

        divDescripcionYelmo.append(divYelmo);
        div.append(divDescripcionYelmo);

        var divRowYelmo = getDiv("row");

        for (i = 0; i < TAS_ARMADURA.length; i++) {
            var divTAYelmo = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE);
            var divValorYelmo = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_MUESTRA_INLINE);
            var divColYelmo;
            if (i == 0) {
                divColYelmo = getDiv("push_one two columns");
            } else {
                divColYelmo = getDiv("two columns");
            }
            divColYelmo
                .append(divTAYelmo.append(_l(TAS_ARMADURA[i]) + ":"))
                .append(divValorYelmo.append(personaje_actual.capaYelmo.getTA(TAS_ARMADURA[i])));
            divRowYelmo.append(divColYelmo);
        }
        div.append(divRowYelmo);
    }

    return div;
}

function muestraManejoArmas() {
    var div = getDiv(CSS_TEXTO_SMALL);
    var divInicial = getDiv(CSS_MUESTRA_BLOCK);
    var divEtiInicial = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE).append(_l(UI_ARMA_INICIAL) + ": ");
    var divValorInicial = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_MUESTRA_INLINE).append(_l(personaje_actual.getArmaInicial()));
    div.append(divInicial.append(divEtiInicial).append(divValorInicial));
    if (personaje_actual.manejoArmas.length > 1) {
        var divAdicional = getDiv(CSS_MUESTRA_BLOCK);
        var divMasArmasEti = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE).append(_l(UI_OTRAS_ARMAS) + ": ");
        divAdicional.append(divMasArmasEti);
        for (var i = 0; i < personaje_actual.manejoArmas.length; i++) {
            var divMasValor = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_LISTA_INLINE).addClass(CSS_MUESTRA_INLINE).append(_l(personaje_actual.manejoArmas[i].getNombre()));
            divAdicional.append(divMasValor);
        }
        div.append(divAdicional);
    }
    return div;
}


function muestraSobrenatural(estadoGeneracion) {
    var div = recuadroBase();

    updateNivelMagiaPorInteligencia(personaje_actual.getCaracteristica(INT));

    var muestraBotones = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);
    div.append(muestraSubtitulo(UI_SOBRENATURALES, true));
    divContenido.append(muestraCabecerasBaseBonosFinal());

    var muestraBotonesNivelVia = muestraBotones && FLAG_ARCANA_EXXET_ENABLED;
    divContenido.append(muestraHabilidadPrimaria(HB_NIVEL_DE_VIA,_l(UI_NIVELES_VIA),muestraBotonesNivelVia));
    divContenido.append(muestraHabilidadPrimaria(HB_ZEON,_l(UI_ZEON),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACT,_l(UI_ACT),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_PROYECCION_MAGICA,_l(UI_PROYECCION_MAGICA),muestraBotones));
    divContenido.append(muestraDesequilibrioOfensivoMagico());

    divContenido.append(muestraMagiaInnata());

    divContenido.append(muestraSubtitulo(UI_VIAS, false));
    divContenido.append(muestraViasMagia(muestraBotones));

    divContenido.append(muestraSubtitulo(UI_CONJUROS, false));
    divContenido.append(muestraConjurosSueltos(muestraBotones));

    divContenido.append(muestraSubtitulo(UI_TABLAS, false));
    divContenido.append(muestraTablas([CATEGORIA_TABLA_MISTICAS],muestraBotones));

    divContenido.append(muestraSubtitulo(UI_CONVOCATORIA, false));
    divContenido.append(muestraCabecerasBaseBonosFinal());

    divContenido.append(muestraHabilidadPrimaria(HB_CONVOCAR,_l(UI_CONVOCAR),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_DOMINAR,_l(UI_DOMINAR),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ATAR,_l(UI_ATAR),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_DESCONVOCAR,_l(UI_DESCONVOCAR),muestraBotones));

    divContenido.append(muestraElementalismo());

    divContenido.append(muestraSubtitulo(UI_INVOCACIONES, false));
    divContenido.append(muestraInvocaciones(muestraBotones));

    div.append(divContenido);
    return div;
}

function muestraMagiaInnata() {
    var div = getDiv(CSS_TEXTO_SMALL);
    var divEtiqueta = getDiv(CSS_ETIQUETA).append(_l(UI_MAGIA_INNATA) + ": ");
    var divValor = getDiv(CSS_VALOR_PERSONALES).append(personaje_actual.getZeonMagiaInnata());
    div.append(divEtiqueta).append(divValor);
    return div;
}

/**
 *
 * @returns {jQuery}
 */
function muestraViasMagia(muestraBotones) {
    var div = $("<div></div>");
    var i,j;
    var divVias = $("<div></div>");

    var viasMagia = personaje_actual.getViasMagia();

    if (muestraBotones) {
        var divBotonNuevo = getDiv("");
        divBotonNuevo.append(muestraBotonPequeño(_l(UI_AUMENTAR_NIVELES_EN_VIAS),{},dialogoMagia,BOTON_MAGIA));
        div.append(divBotonNuevo);
    } else if (viasMagia.length == 0) {
        div.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (i=0; i < viasMagia.length;i++) {
        var divVia = getDiv(CSS_TEXTO_SMALL);
        var divNombre = getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).addClass(CSS_MUESTRA_INLINE).append(_l(viasMagia[i].getVia().getNombre()));
        var divNivel = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL).addClass(CSS_MUESTRA_INLINE).append(" ("+_l(UI_NV)+ viasMagia[i].getNivel() + ")");
        divVia.append(divNombre).append(divNivel);
        divVias.append(divVia);
        var divListaConjuros = getDiv("row");
        for (j=2; j <= viasMagia[i].getNivel(); j += 2) {
            var conjuro = viasMagia[i].getConjuro(j);
            if(!conjuro) {
                var botonDefinir = muestraBotonElegirConjuroLibreAcceso(viasMagia[i].getVia(),j).addClass(CSS_TEXTO_CENTRO).addClass("four columns");
                divListaConjuros.append(botonDefinir);
            } else {
                var divConjuro = getDiv(CSS_TEXTO_SMALL).addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_CENTRO).addClass("four columns");
                divConjuro.append(_l(conjuro.getNombre()) + " (" +conjuro.getNivel()+")" );
                addToolTip(divConjuro,_l(UI_NIVEL) + ": "+conjuro.getNivel());
                divListaConjuros.append(divConjuro);
            }
        }
        divVias.append(divListaConjuros);
    }

    div.append(divVias);

    return div;
}

/**
 *
 * @returns {jQuery}
 */
function muestraConjurosSueltos(muestraBotones) {
    var div = getDiv("");
    var i;
    var divConjuros = getDiv("row");

    var conjuros = personaje_actual.getConjurosSueltos();

    if (muestraBotones) {
        div.append(muestraBotonElegirConjuroSuelto());
    } else if (conjuros.length == 0) {
        div.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (i=0; i < conjuros.length;i++) {
        var conjuro = conjuros[i];
        var divConjuro = getDiv(CSS_TEXTO_SMALL).addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_CENTRO).addClass("four columns");
        divConjuro.append(_l(conjuro.getNombre()) + " (" +conjuro.getNivel()+")" );
        addToolTip(divConjuro,_l(UI_NIVEL) + ": "+conjuro.getNivel());
        divConjuros.append(divConjuro);
    }

    div.append(divConjuros);
    return div;
}

/**
 *
 * @returns {jQuery}
 */
function muestraPsiquica(estadoGeneracion) {
    var div = recuadroBase();

    var muestraBotones = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);
    div.append(muestraSubtitulo(UI_PSIQUICA, true));

    divContenido.append(muestraCabecerasBaseBonosFinal());

    divContenido.append(muestraHabilidadPrimaria(HB_CV,_l(UI_CV),muestraBotones));
    divContenido.append(muestraCVLibres());

    divContenido.append(muestraHabilidadPrimaria(HB_PROYECCION_PSIQUICA,_l(UI_PROYECCION_PSIQUICA),muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_POTENCIAL_PSIQUICO,_l(UI_POTENCIAL_PSIQUICO),muestraBotones));

    divContenido.append(muestraInnatos(muestraBotones));

    if (muestraBotones) {
        var divBotonNuevo = getDiv("");
        divBotonNuevo.append(muestraBotonPequeño(_l(UI_BOTON_GASTAR_CV),{},dialogoCV,BOTON_CV));
        divContenido.append(divBotonNuevo);
    }

    divContenido.append(muestraDisciplinasYPoderes(muestraBotones));

    divContenido.append(muestraSubtitulo(UI_TABLAS, false));
    divContenido.append(muestraTablas([CATEGORIA_TABLA_PSIQUICAS],muestraBotones));

    div.append(divContenido);
    return div;
}

function muestraCVLibres() {
    var div = getDiv("row");
    var divEtiqueta = getDiv("four columns").addClass(CSS_TEXTO_SMALL).addClass(CSS_ETIQUETA).append(_l(UI_CV_LIBRES));
    var divValor = getDiv("one column").addClass(CSS_TEXTO_SMALL).addClass(CSS_VALOR_PERSONALES).append((personaje_actual.getHabilidadDePersonaje(HB_CV).valorFinalActual() - personaje_actual.cv_gastados));
    div.append(divEtiqueta).append(divValor);
    return div;
}

function muestraDisciplinasYPoderes(muestraBotones) {
    var div = getDiv("");
    var i;
    var divDisciplinas = getDiv(CSS_TEXTO_SMALL).addClass(CSS_MUESTRA_BLOCK);
    div.append(muestraSubtitulo(UI_AFINIDAD_CON_DISCIPLINAS, false));

    if (muestraBotones) {
        var divBotonNuevaDisciplina = getDiv("");
        divBotonNuevaDisciplina.append(muestraBotonPequeño(_l(UI_BOTON_GASTAR_CV),{},dialogoCV,BOTON_CV));
        divDisciplinas.append(divBotonNuevaDisciplina);
    } else if (personaje_actual.disciplinasPsiquicas.length == 0) {
        divDisciplinas.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (i=0; i < personaje_actual.disciplinasPsiquicas.length;i++) {
        var divDisciplina = getDiv(CSS_TEXTO_SMALL);
        var divNombreDisciplina = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE).append(_l(personaje_actual.disciplinasPsiquicas[i].getNombre()));
        addToolTip(divDisciplina,_l(personaje_actual.disciplinasPsiquicas[i].getDescripcion()));
        divDisciplinas.append(divDisciplina.append(divNombreDisciplina));
    }

    div.append(divDisciplinas);

    div.append(muestraSubtitulo(UI_PODERES_DOMINADOS, false));
    var divPoderes = getDiv("");

    if (muestraBotones) {
        var divBotonNuevoPoder = getDiv("");
        divBotonNuevoPoder.append(muestraBotonPequeño(_l(UI_BOTON_GASTAR_CV),{},dialogoCV,BOTON_CV));
        divPoderes.append(divBotonNuevoPoder);
    } else if (personaje_actual.poderesPsiquicosDominados.length == 0) {
        divPoderes.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (i=0; i < personaje_actual.poderesPsiquicosDominados.length;i++) {
        var divPoder = getDiv(CSS_TEXTO_SMALL);

        var divNombre = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE).append(_l(personaje_actual.poderesPsiquicosDominados[i].poder.nombre));
        var divFortalecimiento = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_MUESTRA_INLINE).append(" (+" + 10*personaje_actual.poderesPsiquicosDominados[i].fortalecimiento + ")");
        divPoderes.append(divPoder.append(divNombre).append(divFortalecimiento));
    }

    div.append(divPoderes);

    return div;
}

function muestraInnatos(muestraBotones) {
    var div = getDiv("row");

    var divNombre = getDiv("four columns");

    var divEtiqueta = getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL);

    var divValor = getDiv("one columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);

    var divCoste = getDiv(CSS_COSTE).addClass(CSS_TEXTO_SMALL);

    divCoste.append("[2 " +_l(UI_CV) + "] ");

    divEtiqueta.append(_l(UI_INNATO));

    divNombre.append(divCoste).append(divEtiqueta);
    divValor.append(personaje_actual.getInnatosPsiquicos())

    div.append(divNombre).append(divValor);

    var divBotones = getDiv("push_four two columns");

    var botonMasInnato = boton("small primary pretty btn",_l("+"),(personaje_actual.getHabilidadDePersonaje(HB_CV).valorFinalActual()-personaje_actual.cv_gastados < 2));

    var botonMenosInnato = boton("small primary pretty btn",_l("-"),(personaje_actual.innatosPsiquicos == 0));

    botonMasInnato.on("click", {cantidad: 1}, comprarInnato);

    botonMenosInnato.on("click", {cantidad: -1}, comprarInnato);

    divBotones.append(botonMasInnato).append(botonMenosInnato);

    if (muestraBotones) {
        div.append(divBotones);
    }
    return div;
}

function muestraCabecerasBaseBonosFinal() {
    var div = getDiv(CSS_TEXTO_SMALL);
    div.addClass("row");
    var divNombre = $("<div></div>").append(_l(UI_NOMBRE));
    divNombre.addClass("four columns");
    var divBase = $("<div></div>").append(_l(UI_BASE));
    divBase.addClass("one columns");
    var divBonos = $("<div></div>").append(_l(UI_BONOS));
    divBonos.addClass("two columns");
    var divFinal = $("<div></div>").append(_l(UI_FINAL));
    divFinal.addClass("one columns");

    div.append(divNombre).append(divBase).append(divBonos).append(divFinal);

    return div;
}
function muestraSecundarias(estadoGeneracion) {
    var div = recuadroBase();
    var muestraBotones = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));

    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);
    div.addClass("tablaSecundarias");

    div.append(muestraSubtitulo(UI_SECUNDARIAS, true));


    for (var i = 0; i <habilidades_secundarias.length; i++) {
        var grupoHab = habilidades_secundarias[i];

        divContenido.append(muestraSubtitulo(habilidades_secundarias_nombres_grupos[i], false));
        divContenido.append(muestraCabecerasBaseBonosFinal());

        for (var j = 0; j< grupoHab.length; j++) {
            var habilidadDePersonaje = personaje_actual.getHabilidadDePersonaje(grupoHab[j]);
            var coste = personaje_actual.getCoste(habilidadDePersonaje.getHabilidad().getNombre(),false);
            var valorBase = habilidadDePersonaje.valorBase(coste);
            var etiqueta = _l(habilidadDePersonaje.getHabilidad().getNombre());
            var divBotones = $("<div></div>");
            if (muestraBotones) {
                divBotones.append(muestraBotonMasMenosHabilidad(habilidadDePersonaje.getHabilidad().getNombre()).addClass(CSS_MUESTRA_INLINE));
                if (habilidadDePersonaje.getHabilidad().getEspecializacionesPosibles().length > 0) {
                    divBotones.append(muestraBotonElegirEspecialidad(habilidadDePersonaje.getHabilidad().getNombre()).addClass(CSS_MUESTRA_INLINE));
                }
            }
            if (habilidadDePersonaje.getEspecializacion() != "") {
                etiqueta += " (" + _l(habilidadDePersonaje.getEspecializacion()) + ")";
            }
            var bonos = personaje_actual.getBonos(BONO_HABILIDAD, habilidadDePersonaje.getHabilidad().getNombre(), CATEGORIA_BONO_CUALQUIERA);
            if (habilidadDePersonaje.getPenalizadorArmadura()) {
                var penalizaroArmadura = new Bono(BONO_HABILIDAD,habilidadDePersonaje.getHabilidad().getNombre(),getPenalizadorNaturalPorArmaduraActual(personaje_actual),"",false,BONO_NATURAL,ORIGEN_ARMADURA);
                bonos.push(penalizaroArmadura);
            }
            divContenido.append(
                muestraValorConBonosYCoste(etiqueta, habilidadDePersonaje.valorBase(coste), bonos, coste, divBotones, (valorBase != HABILIDAD_NO_USABLE), false)
            );
        }
    }

    div.append(divContenido);
    return div;

}


function muestraEquipamiento() {
    var div = recuadroBase();
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    div.append(muestraSubtitulo(UI_EQUIPAMIENTO, true));

    divContenido.append(muestraSubtitulo(UI_DINERO, false));

    var divDinero = getDiv("row");
    var divEtiqueta = getDiv("four columns").addClass(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).append(_l(UI_DINERO) + ": ");
    var divValorDinero = getDiv("six columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL).append(personaje_actual.getDinero().toString());

    divContenido.append(divDinero.append(divEtiqueta).append(divValorDinero));

    divContenido.append(muestraSubtitulo(UI_EQUIPAMIENTO, false));

    /**
     *
     * @type {EquipoComprado[]}
     */
    var equipo = personaje_actual.getEquipo();
    var divEquipo = getDiv("row");

    for (var i = 0; i < equipo.length; i++) {
        var itemEquipo = equipo[i];

        var divV = getDiv(CSS_TEXTO_SMALL);
        var divNombre = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE).append(itemEquipo.toString());
        divV.append(divNombre);
        var divCoste = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_MUESTRA_INLINE).append(" [" + itemEquipo.getCosteDinero().toString() + "]");
        divV.append(divCoste);
        divV.append(muestraBotonAnular(quitarEquipo,{item: itemEquipo}));
        divEquipo.append(divV);
    }

    divContenido.append(divEquipo);

    if (equipo.length == 0) {
        divContenido.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    divContenido.append(muestraSubtitulo(UI_EQUIPAMIENTO_ARMAS, false));

    /**
     *
     * @type {ArmaComprada[]}
     */
    var armas = personaje_actual.getArmas();
    var divEquipoArmas = getDiv("row").addClass(CSS_TEXTO_SMALL);

    var etiquetaEliminar= (personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_INICIADA)?_l(UI_VENDER):_l(UI_QUITAR);
    var divCabeceraArmas = getDiv("row");
    divCabeceraArmas.
        append(getDiv("one column").append(_l(UI_EQUIPADO))).
        append(getDiv("five columns").append(_l(UI_ARMA))).
        append(getDiv("four columns").append(_l(UI_PRECIO))).
        append(getDiv("two columns").append(etiquetaEliminar));

    divEquipoArmas.append(divCabeceraArmas);

    for (i = 0; i < armas.length; i++) {
        var itemArma = armas[i];
        var divVArma = getDiv(CSS_TEXTO_SMALL).addClass("row");

        var inputCheckEquipado = $("<input>").attr("type","checkbox").attr("id","arma"+i);
        if (itemArma.isEquipado()) {
            $(inputCheckEquipado).attr("checked",true);
        }
        var divCheckEquipado = getDiv("one column").attr("id","checkArma"+i).addClass(CSS_MUESTRA_INLINE).addClass(CSS_TEXTO_CENTRO);
        divCheckEquipado.append(inputCheckEquipado);
        divVArma.append(divCheckEquipado);
        $("#checkArma"+i).button();

        var divNombreArma = getDiv(CSS_ETIQUETA).addClass("five columns").addClass(CSS_MUESTRA_INLINE).append(itemArma.toString());
        divVArma.append(divNombreArma);

        var divCosteArma = getDiv(CSS_VALOR_PERSONALES).addClass("four columns").addClass(CSS_MUESTRA_INLINE).append(" [" + itemArma.getCosteDinero().toString() + "]");
        divVArma.append(divCosteArma);

        var divBotonVender = getDiv("two columns").append(muestraBotonAnular(quitarEquipo,{item: itemArma}));
        divVArma.append(divBotonVender);

        $(inputCheckEquipado).on("click",{arma:itemArma}, function(ev) {
            ev.data.arma.setEquipado(!ev.data.arma.isEquipado());
            lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
        });
        divEquipoArmas.append(divVArma);
    }

    divContenido.append(divEquipoArmas);

    if (armas.length == 0) {
        divContenido.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    divContenido.append(muestraSubtitulo(UI_EQUIPAMIENTO_ARMADURAS, false));

    /**
     *
     * @type {ArmaduraComprada[]}
     */
    var armaduras = personaje_actual.getArmaduras();
    var divEquipoArmaduras = getDiv("row").addClass(CSS_TEXTO_SMALL);

    var divCabeceraArmaduras = getDiv("row");
    divCabeceraArmaduras.
        append(getDiv("one column").append(_l(UI_EQUIPADO))).
        append(getDiv("four columns").append(_l(UI_ARMADURA))).
        append(getDiv("one columns").append(_l(UI_TIPO))).
        append(getDiv("four columns").append(_l(UI_PRECIO))).
        append(getDiv("two columns").append(etiquetaEliminar));

    divEquipoArmaduras.append(divCabeceraArmaduras);

    for (i = 0; i < armaduras.length; i++) {
        var itemArmadura = armaduras[i];
        var divVArmadura = getDiv(CSS_TEXTO_SMALL).addClass("row");

        var inputCheckEquipadoArmadura = $("<input>").attr("type","checkbox").attr("id","armadura"+i);
        if (itemArmadura.isEquipado()) {
            $(inputCheckEquipadoArmadura).attr("checked",true);
        }
        var divCheckEquipadoArmadura = getDiv("one column").attr("id","checkArmadura"+i).addClass(CSS_MUESTRA_INLINE).addClass(CSS_TEXTO_CENTRO);
        divCheckEquipadoArmadura.append(inputCheckEquipadoArmadura);
        divVArmadura.append(divCheckEquipadoArmadura);
        $("#checkArmadura"+i).button();

        var divNombreArmadura = getDiv(CSS_ETIQUETA).addClass("four columns").addClass(CSS_MUESTRA_INLINE).append(itemArmadura.toString());
        divVArmadura.append(divNombreArmadura);

        var divTipoArmadura = getDiv(CSS_ETIQUETA).addClass("one column").addClass(CSS_MUESTRA_INLINE).append(_l(itemArmadura.getClase()));
        divVArmadura.append(divTipoArmadura);

        var divCosteArmadura = getDiv(CSS_VALOR_PERSONALES).addClass("four columns").addClass(CSS_MUESTRA_INLINE).append(" [" + itemArmadura.getCosteDinero().toString() + "]");
        divVArmadura.append(divCosteArmadura);

        var divBotonVenderArmadura = getDiv("two columns").append(muestraBotonAnular(quitarEquipo,{item: itemArmadura}));
        divVArmadura.append(divBotonVenderArmadura);

        $(inputCheckEquipadoArmadura).on("click",{armadura:itemArmadura}, function(ev) {
            var armadura = ev.data.armadura;

            if (armadura.getClase() == ARMADURA_CLASE_DURA) {
                desequipaArmaduras(true);
            } else {
                if (!armadura.isEquipado()) {
                    var primeraBlanda = false;
                    var numBlandas = 0;
                    for (var k = 0; k < personaje_actual.armaduras.length; k++) {
                        if (personaje_actual.armaduras[k].isEquipado()) {
                            if (personaje_actual.armaduras[k].getClase() == ARMADURA_CLASE_BLANDA) {
                                if (!primeraBlanda) {
                                    primeraBlanda = personaje_actual.armaduras[k];
                                }
                                numBlandas++;
                            }
                        }
                    }
                    if (numBlandas == 2) {
                        primeraBlanda.setEquipado(false);
                    }
                }
            }
            ev.data.armadura.setEquipado(!ev.data.armadura.isEquipado());
            lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
            lanzarEvento(EVENT_CHARACTER_SECCION_EQUIPO);
        });

        divEquipoArmaduras.append(divVArmadura);
    }

    divContenido.append(divEquipoArmaduras);

    divContenido.append(muestraSubtitulo(UI_EQUIPAMIENTO_YELMOS, false));

    if (armaduras.length == 0) {
        divContenido.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }
    /**
     *
     * @type {YelmoComprado[]}
     */
    var yelmos = personaje_actual.getYelmos();
    var divEquipoYelmos = getDiv("row").addClass(CSS_TEXTO_SMALL);

    var divCabeceraYelmos = getDiv("row");
    divCabeceraYelmos.
        append(getDiv("one column").append(_l(UI_EQUIPADO))).
        append(getDiv("four columns").append(_l(UI_YELMO))).
        append(getDiv("one columns").append(_l(UI_TIPO))).
        append(getDiv("four columns").append(_l(UI_PRECIO))).
        append(getDiv("two columns").append(etiquetaEliminar));

    divEquipoYelmos.append(divCabeceraYelmos);

    for (i = 0; i < yelmos.length; i++) {
        var itemYelmo = yelmos[i];
        var divVYelmo = getDiv(CSS_TEXTO_SMALL).addClass("row");

        var inputCheckEquipadoYelmo = $("<input>").attr("type","checkbox").attr("id","yelmo"+i);
        if (itemYelmo.isEquipado()) {
            $(inputCheckEquipadoYelmo).attr("checked",true);
        }
        var divCheckEquipadoYelmo = getDiv("one column").attr("id","checkYelmo"+i).addClass(CSS_MUESTRA_INLINE).addClass(CSS_TEXTO_CENTRO);
        divCheckEquipadoYelmo.append(inputCheckEquipadoYelmo);
        divVYelmo.append(divCheckEquipadoYelmo);
        $("#checkYelmo"+i).button();

        var divNombreYelmo = getDiv(CSS_ETIQUETA).addClass("four columns").addClass(CSS_MUESTRA_INLINE).append(itemYelmo.toString());
        divVYelmo.append(divNombreYelmo);

        var divTipoYelmo = getDiv(CSS_ETIQUETA).addClass("one column").addClass(CSS_MUESTRA_INLINE).append(_l(itemYelmo.getClase()));
        divVYelmo.append(divTipoYelmo);

        var divCosteYelmo = getDiv(CSS_VALOR_PERSONALES).addClass("four columns").addClass(CSS_MUESTRA_INLINE).append(" [" + itemYelmo.getCosteDinero().toString() + "]");
        divVYelmo.append(divCosteYelmo);

        var divBotonVenderYelmo = getDiv("two columns").append(muestraBotonAnular(quitarEquipo,{item: itemYelmo}));
        divVYelmo.append(divBotonVenderYelmo);

        $(inputCheckEquipadoYelmo).on("click",{yelmo:itemYelmo}, function(ev) {
            var yelmo = ev.data.yelmo;

            if (!yelmo.isEquipado()) {
                desequipaYelmos();
                personaje_actual.capaYelmo = yelmo;
            } else {
                personaje_actual.capaYelmo = new TipoArmadura(ARMADURA_NINGUNA,[0,0,0,0,0,0,0],true);
            }

            ev.data.yelmo.setEquipado(!ev.data.yelmo.isEquipado());
            lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
            lanzarEvento(EVENT_CHARACTER_SECCION_EQUIPO);
        });

        divEquipoYelmos.append(divVYelmo);
    }

    divContenido.append(divEquipoYelmos);

    if (yelmos.length == 0) {
        divContenido.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    div.append(divContenido);
    return div;
}

function muestraDescripcion() {
    var div = recuadroBase();
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    div.append(muestraSubtitulo(UI_DESCRIPCION_TRASFONDO, true));

    divContenido.append(muestraSubtitulo(UI_DESCRIPCION, false));

    var divDescripcion = getDiv("row");

    var textAreaDescripcion = $("<textArea></textArea>").addClass("textAreaAU").attr("id","descripcionPersonaje").append(personaje_actual.getDescripcion());

    divDescripcion.append(textAreaDescripcion);

    divContenido.append(divDescripcion);

    divContenido.append(muestraSubtitulo(UI_TRASFONDO, false));

    var divTrasfondo = getDiv("row");

    var textAreaTrasfondo = $("<textArea></textArea>").addClass("textAreaAU").attr("id","trasfondoPersonaje").append(personaje_actual.getTrasfondo());

    divTrasfondo.append(textAreaTrasfondo);


    divContenido.append(divTrasfondo);

    div.append(divContenido);

    DISPATCHER.on("change","#descripcionPersonaje", function() {
        console.log("Editando descripcion");
        personaje_actual.setDescripcion($(this).val());
    });

    DISPATCHER.on("change","#trasfondoPersonaje", function() {
        console.log("Editando trasfondo");
        personaje_actual.setTrasfondo($(this).val());
    });

    return div;
}

/**
 *
 * @param {string} etiqueta Localizada
 * @param valorBase
 * @param bonos
 * @param coste
 * @param toAppend
 * @param usable
 * @param esPotencialPsiquico
 * @returns {*}
 */
function muestraValorConBonosYCoste(etiqueta, valorBase, bonos, coste, toAppend, usable, esPotencialPsiquico) {
    var divRow = getDiv("row");

    var divEtiqueta = getDiv("four columns").addClass(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL);

    var divValorBase = getDiv("one columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);

    var divBonos = getDiv("two columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);

    var divValor = getDiv("one columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);

    var divCoste;
    if (coste != 0) {
        divCoste = getDiv(CSS_COSTE).addClass(CSS_TEXTO_SMALL);
        divCoste.append("[" + coste + "] ");
        divEtiqueta.append(divCoste);
    } else {
        if (esPotencialPsiquico) {
            var costePotencial = siguienteCostePotencial(personaje_actual.getHabilidadDePersonaje(HB_POTENCIAL_PSIQUICO).CVsGastados);
            if (costePotencial != -1) {
                costePotencial = "[" + costePotencial + " " + _l(UI_CV) + "] ";
            } else {
                costePotencial = "[" + _l(UI_MAX) + "] ";
            }

            divCoste = getDiv(CSS_COSTE).addClass(CSS_TEXTO_SMALL);
            divCoste.append(costePotencial);
            divEtiqueta.append(divCoste);

        }
    }

    var valorBonos = 0;
    var tooltip = "";

    divEtiqueta.append(etiqueta + ":");

    if (usable) {
        divValorBase.append(valorBase);
        tooltip = valorBase + "("+_l(UI_BASE)+")";
    } else {
        divValorBase.append(_l(UI_NO_USABLE_SIN_RANGOS));
        tooltip = _l(UI_NO_USABLE_SIN_RANGOS) + "("+_l(UI_BASE)+")";
    }

    var valorFinal = parseInt(valorBase);
    for (var i = 0; i < bonos.length; i++) {
        /**
         *
         * @type {Bono}
         */
        var bono = bonos[i];
        var valorBono = bono.getBonoParaNivel(personaje_actual.getNivel(),personaje_actual);
        valorFinal += parseInt(valorBono);
        valorBonos += parseInt(valorBono);
        if (valorBono >= 0) {
            valorBono = "+" + valorBono;
        } else {
            valorBono = "" + valorBono;
        }
        tooltip += valorBono + " (" + _l(bono.origen) + ")";
    }
    if (valorBonos >= 0) {
        valorBonos = "+" + valorBonos;
    } else {
        valorBonos = "" + valorBonos;
    }
    divBonos.append(valorBonos);
    if (usable) {
        divValor.append("=" + valorFinal);
        tooltip += "=" + valorFinal + " ("+_l(UI_FINAL)+")";
    } else {
        divValor.append("=" + _l(UI_NO_USABLE_SIN_RANGOS));
        tooltip += "=" + _l(UI_NO_USABLE_SIN_RANGOS) + " ("+_l(UI_FINAL)+")";
    }
    addToolTip(divRow,tooltip);

    divRow.append(divEtiqueta).append(divValorBase).append(divBonos).append(divValor);

    if (toAppend != undefined) {
        var divAppend = getDiv("push_one three columns");
        divAppend.append(toAppend);
        divRow.append(divAppend);
    }

    return divRow;
}

/**
 *
 * @param coste
 * @param {string} etiqueta Localizada
 * @param valorBase
 * @param {{}} parametros descripcion ya localizada
 * @param toAppend
 * @returns {*}
 */
function muestraValorPuntual(coste, etiqueta, valorBase, parametros, toAppend) {
    var divRow = getDiv("row");
    var divEtiqueta = getDiv("four columns").addClass(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL);
    var divValorBase = getDiv("one columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);
    var divBonos = getDiv("two columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);
    var divValor = getDiv("one columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);

    var divCoste;
    if (coste != 0) {
        divCoste = getDiv(CSS_COSTE).addClass(CSS_TEXTO_SMALL);
        divCoste.append("[" + coste + "] ");
        divEtiqueta.append(divCoste);
    }

    var tooltip = "";

    divEtiqueta.append(etiqueta + ":");

    divValorBase.append(valorBase);
    tooltip = valorBase + "("+_l(UI_BASE)+")";

    var valorFinal = parseInt(valorBase);

    if (parametros.valorBonos) {
        parametros.valorBonos = modificadorBonito(parametros.valorBonos);
        tooltip += parametros.valorBonos + " ("+_l(UI_BONOS) +")";
        divBonos.append(parametros.valorBonos);
    }

    if (parametros.descripcion) {
        valorFinal += " " + parametros.descripcion;
    }

    divValor.append("=" + valorFinal);
    tooltip += "=" + valorFinal + " ("+_l(UI_FINAL)+")";
    addToolTip(divRow,tooltip);

    divRow.append(divEtiqueta).append(divValorBase).append(divBonos).append(divValor);

    if (toAppend != undefined) {
        var divAppend = getDiv("push_one three columns");
        divAppend.append(toAppend);
        divRow.append(divAppend);
    }

    return divRow;
}


function muestraTablas(tiposTablas,muestraBotones) {
    var div = getDiv("");

    var listables = 0;

    for (var i = 0; i < personaje_actual.tablasArmas.length; i++) {
        var tablaArmas = personaje_actual.tablasArmas[i];
        var listable = false;

        for (var j = 0; j < tiposTablas.length; j++) {
            if (tablaArmas.getCategoriaTabla() == tiposTablas[j]) {
                listable = true;
                listables++;
                break;
            }
        }

        if (listable) {
            var divV = getDiv(CSS_TEXTO_SMALL);
            var divNombre = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE).append(_l(tablaArmas.getNombre()));
            if (tablaArmas.getOpcion() != "") {
                divNombre.append(" (" + _l(tablaArmas.getOpcion()) + ")");
            }
            divV.append(divNombre);
            var divCoste = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_MUESTRA_INLINE).append(" [" + tablaArmas.getCoste(personaje_actual) + "]");
            divV.append(divCoste);
            if ((muestraBotones) && (tablaArmas.isAnulable())) {
                divV.append(muestraBotonAnular(anularTablaArmas,{tablaArmas: tablaArmas}));
            }
            div.append(divV);
        }
    }

    if (muestraBotones) {
        div.append(botonComprarNuevo(_l(UI_COMPRAR_TABLA_ARMAS),BOTON_TABLAS_ARMAS,dialogoTablasArmas,{}));
    } else if (listables == 0) {
        div.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    return div;
}

/**
 *
 * @param {{data:{tablaArmas:TablaArmasComprada}}} event
 */
function anularTablaArmas(event) {
    var tabla = event.data.tablaArmas;
    var coste = tabla.getCoste(personaje_actual);

    personaje_actual.addPDLibres(coste);
    personaje_actual.removeTablaArmas(tabla.getNombre(),tabla.getOpcion());
    muestraPersonaje();
}







