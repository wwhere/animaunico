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
    }
    enableButtonsPasosCreacion(personaje_actual.GENERACION_INICIADA);
    $(divDestino).empty().append(funcionRecarga(personaje_actual.GENERACION_INICIADA));
}

function recuadroBase() {
    var div = getDiv(CSS_RECUADRO);
    return div;
}

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
    divContenido.append(muestraPersonal(UI_NOMBRE, personaje_actual.getNombre(), modificarPersonales, elegirManualNombre));
    divContenido.append(muestraPersonal(UI_SEXO, personaje_actual.getSexo(), modificarPersonales, elegirManualSexo));
    divContenido.append(muestraPersonal(UI_RAZA, personaje_actual.getRaza().getNombre(), modificarPersonales,dialogoElegirRaza));
    divContenido.append(muestraPersonal(UI_PESO, personaje_actual.getPeso(), modificarPersonales, elegirPeso));
    divContenido.append(muestraPersonal(UI_ALTURA, personaje_actual.getAltura(), modificarPersonales, elegirAltura));
    divContenido.append(muestraPersonalConDivExtra(UI_CATEGORIA, personaje_actual.getCategoria().getNombre(), modificarPersonales, dialogoElegirCategoria,{}, muestraBotonPequeño("Cambiar cat.",{},cambiarCategoria)));

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

    divContenido.append(muestraPersonal(UI_PUNTOS_CANSANCIO, personaje_actual.getPuntosCansancio(), false));
    divContenido.append(muestraPersonal(UI_TIPO_MOVIMIENTO, personaje_actual.getTipoMovimiento(), false));
    divContenido.append(muestraPersonal(UI_APARIENCIA, personaje_actual.getApariencia(), modificarApariencia, elegirManualApariencia));
    divContenido.append(muestraPersonal(UI_TAMAÑO, personaje_actual.getTamaño(), false));

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

    divContenido.append(muestraPersonal(UI_NIVEL, personaje_actual.getNivel(), false));

    divContenido.append(muestraPersonal(UI_PUNTOS_DESARROLLO, personaje_actual.getPDTotales() + "(" + personaje_actual.getPDLibres() + " " + UI_PUNTOS_SIN_USAR + ")", false));
    if ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        var ul = $("<ul></ul>");
        ul.append($("<li></li>").append(muestraPersonal(UI_PD_COMBATE, personaje_actual.gastoActualPDsGrupoHabilidad(TIPO_HB_COMBATE) + "/" + personaje_actual.maxPDsGrupoHabilidad(TIPO_HB_COMBATE), false)));
        ul.append($("<li></li>").append(muestraPersonal(UI_PD_ATAQUE_DEFENSA, personaje_actual.gastoActualPDsAtaqueDefensa() + "/" + personaje_actual.maxPDsAtaqueDefensa(), false)));
        ul.append($("<li></li>").append(muestraPersonal(UI_PD_SOBRENATURAL, personaje_actual.gastoActualPDsGrupoHabilidad(TIPO_HB_SOBRENATURAL) + "/" + personaje_actual.maxPDsGrupoHabilidad(TIPO_HB_SOBRENATURAL), false)));
        ul.append($("<li></li>").append(muestraPersonal(UI_PD_PSIQUICA, personaje_actual.gastoActualPDsGrupoHabilidad(TIPO_HB_PSIQUICA) + "/" + personaje_actual.maxPDsGrupoHabilidad(TIPO_HB_PSIQUICA), false)));
        ul.append($("<li></li>").append(muestraPersonal(UI_PD_SECUNDARIAS, personaje_actual.gastoActualPDsSecundarias(), false)));
        divContenido.append(ul);
    }

    if ((estadoGeneracion == ESTADO_GENERACION_INICIADA)) {
        divContenido.append(muestraPersonal(UI_PUNTOS_CREACION, personaje_actual.getPCTotales() +
            "(" + personaje_actual.getPC("PC_libres_generales") + " " + UI_PUNTOS_SIN_USAR + ")" +
            "(" + personaje_actual.getPC("PC_libres_don") + " " + UI_PC_DON + ")" +
            "(" + personaje_actual.getPC("PC_libres_psiquicas") + " " + UI_PC_PSIQUICA + ")", false));
    }

    if (mostrarPDyPCArriba) {
        var divPDArriba = $("<p></p>").css("font-size","smaller");
        divPDArriba.css("margin-bottom","0px");
        var divPCArriba = $("<p></p>").css("font-size","smaller");
        divPCArriba.css("margin-bottom","0px");
        var divDestinoAlto =$("#infoSuperior");
        divDestinoAlto.empty();
        divDestinoAlto.append(divPDArriba.html("PD:" +personaje_actual.getPDLibres() + "/" + personaje_actual.getPDTotales()));
        divDestinoAlto.append(divPCArriba.html("PC:" +personaje_actual.getPCLibres() + "/" + personaje_actual.getPCTotales()));
    }


    if ((estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        divContenido.append(muestraPersonal(UI_AUMENTOS_CARACTERISTICAS, personaje_actual.getAumentosCaracteristicasLibres(), false));
    }

    divContenido.append(muestraPersonal(UI_PX, personaje_actual.getPX(), modificarPX, elegirPX));

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
 * @param {string} etiqueta
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

    divEtiqueta.append(UI_PUNTOS_VIDA + ":");
    var valorFinal = parseInt(personaje_actual.pv);

    var tooltip = personaje_actual.pv + "(base)";

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
        tooltip += valorBono + " (" + bono.origen + ")";
    }
    tooltip += "=" + valorFinal + " (final)";

    divValor.append(valorFinal);

    addToolTip(divValor,tooltip);

    divCampo.append(divEtiqueta).append(divValor);

    var divCoste = getDiv(CSS_COSTE);
    divCoste.addClass("textSmaller");
    divCoste.append("[" + personaje_actual.getCostePV() + "] ");

    var etiMultip = getDiv(CSS_ETIQUETA).append(UI_MULTIPLO_VIDA + ": ");
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

    divEtiqueta.append(UI_REGENERACION + ":");
    var valorFinal = parseInt(personaje_actual.getRegeneracionBase());

    var tooltip = personaje_actual.getRegeneracionBase() + "(base)";

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
        tooltip += valorBono + " (" + bono.origen + ")";
    }
    tooltip += "=" + valorFinal + " (final)";

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

    var divRow = getDiv(CSS_TEXTO_SMALL);
    divRow.addClass("row");
    var divNombre = getDiv("four columns");
    divNombre.append("Característica");
    var divValor = getDiv("three columns").addClass(CSS_TEXTO_CENTRO);
    divValor.append("Valor");
    var divBono = getDiv("three columns").addClass(CSS_TEXTO_CENTRO);
    divBono.append("Bono");
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
 * @param {string} nombre
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
        console.debug("Se muestran botones para " + nombre);
        divRow.append(divAumento);
        var botonMas = muestraBotonPequeño("+",{caracteristica:nombre},gastaAumentoCaracteristica,"");
        divAumento.append(botonMas);

        var botonMenos = muestraBotonPequeño("-",{caracteristica:nombre},recuperaAumentoCaracteristica,"")
        divAumento.append(botonMenos);

        if (personaje_actual.getAumentosCaracteristicasLibres() < 1) {
            disableButton(botonMas);
            console.debug("Mas desactivado");
        }

        disableButton(botonMenos);
        console.debug("Menos desactivado");
        if (personaje_actual.aumentoGastadoEn(nombre)) {
            enableButton(botonMenos);
            console.debug("Menos activado");
        }
    }

    divNombre.append(nombre);
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
    divContenido.append(muestraValorConBonos(UI_RF, personaje_actual.getPresencia(), personaje_actual.getBonos(BONO_RESISTENCIA, RF, CATEGORIA_BONO_CUALQUIERA),multiplicador));
    if (personaje_actual.hasFlag(FLAG_RE_A_MITAD)) {
        multiplicador = MULTIPLICADOR_MITAD;
    } else {
        multiplicador = MULTIPLICADOR_ENTERO;
    }
    divContenido.append(muestraValorConBonos(UI_RE, personaje_actual.getPresencia(), personaje_actual.getBonos(BONO_RESISTENCIA, RE, CATEGORIA_BONO_CUALQUIERA),multiplicador));
    if (personaje_actual.hasFlag(FLAG_RV_A_MITAD)) {
        multiplicador = MULTIPLICADOR_MITAD;
    } else {
        multiplicador = MULTIPLICADOR_ENTERO;
    }
    divContenido.append(muestraValorConBonos(UI_RV, personaje_actual.getPresencia(), personaje_actual.getBonos(BONO_RESISTENCIA, RV, CATEGORIA_BONO_CUALQUIERA),multiplicador));
    if (personaje_actual.hasFlag(FLAG_RM_A_MITAD)) {
        multiplicador = MULTIPLICADOR_MITAD;
    } else {
        multiplicador = MULTIPLICADOR_ENTERO;
    }
    divContenido.append(muestraValorConBonos(UI_RM, personaje_actual.getPresencia(), personaje_actual.getBonos(BONO_RESISTENCIA, RM, CATEGORIA_BONO_CUALQUIERA),multiplicador));
    if (personaje_actual.hasFlag(FLAG_RP_A_MITAD)) {
        multiplicador = MULTIPLICADOR_MITAD;
    } else {
        multiplicador = MULTIPLICADOR_ENTERO;
    }
    divContenido.append(muestraValorConBonos(UI_RP, personaje_actual.getPresencia(), personaje_actual.getBonos(BONO_RESISTENCIA, RP, CATEGORIA_BONO_CUALQUIERA),multiplicador));

    div.append(divContenido);
    return div;
}

function muestraValorConBonos(etiqueta, valorBase, bonos,multiplicador) {
    var divCampo = getDiv(CSS_CAMPO_PERSONALES);
    var divEtiqueta = getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL);
    var divValor = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL);

    if (multiplicador == undefined) {
        multiplicador = 1;
    }

    var tooltip = "";

    divEtiqueta.append(etiqueta + ":");
    divValor.append(valorBase + "(base)");
    tooltip = valorBase + "(base)";
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
        tooltip += valorBono + " (" + bono.origen + ")";
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
    tooltip += "=" + valorFinal + " (final)";
    divValor.append(valorBonos + "(bonos) =" + valorFinal + " (final)");

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
        var elanPersonaje = personaje_actual.elan[i];

        var divElan = getDiv(CSS_MUESTRA_BLOCK).addClass(CSS_TEXTO_SMALLER);
        var divEtiElan = getDiv(CSS_ETIQUETA).html(elanPersonaje.nombre);
        var divSincro = getDiv(CSS_COSTE).html("(" + elanPersonaje.getSincronizacion().toString() + "/" + (elanPersonaje.getSincronizacion()-elanPersonaje.getSinGastada()).toString() + " libre)");
        divElan.append(divEtiElan).append(divSincro);
        divContenido.append(divElan);

        if (elanPersonaje.dones.length > 0) {
            var divDones = getDiv(CSS_TABULADO);
            for (var j = 0; j < elanPersonaje.dones.length; j++) {
                var divNombreDon = getDiv(CSS_TEXTO_SMALLER).addClass(CSS_MUESTRA_BLOCK);
                divNombreDon.append(elanPersonaje.dones[j].nombre);
                addToolTip(divNombreDon,elanPersonaje.dones[j].descripcion);
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

    div.append(listaElementosPCComprados(UI_VENTAJAS,personaje_actual.ventajas,anularelementoPCComprado,puedeAñadir, dialogoVentajas,"Comprar ventaja"));

    return div;
}

function muestraDesventajas(estadoGeneracion) {
    var div = recuadroBase(estadoGeneracion);
    var puedeAñadir = false;

    if ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        puedeAñadir = true;
    }

    div.append(listaElementosPCComprados(UI_DESVENTAJAS,personaje_actual.desventajas,anularelementoPCComprado,puedeAñadir,dialogoDesventajas,"Comprar desventaja"));

    return div;
}

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

    divNombre.append(ventajaComprada.ventaja.nombre);

    if (ventajaComprada.opcion != "") {
        divNombre.append(" (" + ventajaComprada.opcion + ")");
    }
    if (ventajaComprada.origen == ORIGEN_PC) {
        divCoste.append(" [" + ventajaComprada.pc + "]");
    } else {
        divCoste.append(" (" + ventajaComprada.origen + ")");
    }

    addToolTip(div,ventajaComprada.ventaja.descripcion + "<hr>" + ventajaComprada.ventaja.descripcionEfecto);

    return div;
}

/******* habilidades **********/

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
    divContenido.append(muestraValorConBonos(UI_TURNO, personaje_actual.turnoBase, personaje_actual.getBonos(BONO_TURNO, BONO_TURNO, CATEGORIA_BONO_CUALQUIERA)));

    divContenido.append(muestraSubtitulo(UI_TABLAS, false));
    divContenido.append(muestraTablas([CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS,CATEGORIA_TABLA_ARMAS_ESTILOS,CATEGORIA_TABLA_ARMAS_GENERALES],muestraBotones));

    div.append(divContenido);
    return div;
}

function muestraKi(estadoGeneracion) {
    var div = recuadroBase();

    var muestraBotones = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));

    div.append(muestraSubtitulo(UI_DOMINIOS_KI, true));

    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    divContenido.append(muestraCMPersonaje());


    divContenido.append(muestraCabecerasBaseBonosFinal());

    divContenido.append(muestraHabilidadPrimaria(HB_KI_AGI,UI_KI_AGI,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_KI_CON,UI_KI_CON,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_KI_DES,UI_KI_DES,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_KI_FUE,UI_KI_FUE,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_KI_POD,UI_KI_POD,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_KI_VOL,UI_KI_VOL,muestraBotones));

    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_AGI,UI_ACUMULACION_KI_AGI,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_CON,UI_ACUMULACION_KI_CON,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_DES,UI_ACUMULACION_KI_DES,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_FUE,UI_ACUMULACION_KI_FUE,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_POD,UI_ACUMULACION_KI_POD,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACUM_KI_VOL,UI_ACUMULACION_KI_VOL,muestraBotones));

    divContenido.append(muestraHabilidadesKi(muestraBotones));

    divContenido.append(muestraTecnicasKi(muestraBotones));

    div.append(divContenido);
    return div;
}

function muestraCMPersonaje() {
    var divCM = getDiv("");
    divCM.append(getDiv(CSS_MUESTRA_BLOCK).append(muestraValorConBonos(UI_CM, 0, personaje_actual.getBonos(BONO_CM, BONO_CM, CATEGORIA_BONO_CUALQUIERA))));
    var divCMlibreEti = getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).addClass(CSS_MUESTRA_INLINE).append("CM libre: ");
    var divCMlibreValor = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL).addClass(CSS_MUESTRA_INLINE).append(personaje_actual.getCMTotal()-personaje_actual.getCMGastado());
    divCM.append(getDiv(CSS_TEXTO_SMALL).append(divCMlibreEti).append(divCMlibreValor));
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
        div.append(botonComprarNuevo("Comprar habilidad del ki",BOTON_CM,dialogoCM,{}));
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
                    habKi[i].getNombre(),
                    habKi[i].getValorActual(personaje_actual),
                    personaje_actual.getBonos(BONO_KI, habKi[i].getNombre(), CATEGORIA_BONO_CUALQUIERA),
                    0,
                    divBotones,
                    true,
                    false)
            );
        } else {
            divHabilidad.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).append(habKi[i].getNombre()));
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
    var tecnicasKi = personaje_actual.getTecnicasKi();

    div.append(muestraSubtitulo(UI_TECNICAS_KI, false));

    if (muestraBotones) {
        var divBotonNuevo = $("<div></div>");
        divBotonNuevo.append(muestraBotonPequeño("Comprar técnica del dominio",{},dialogoCM,BOTON_CM));
        div.append(divBotonNuevo);
    } else if (tecnicasKi.length == 0) {
        div.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (var i = 0; i < tecnicasKi.length; i++) {
        var divTecnica = getDiv("");

        divTecnica.append(tecnicasKi[i].getNombre());
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

    div.append(muestraHabilidadPrimaria(HB_ATAQUE, UI_ATAQUE,muestraBotones));
    div.append(muestraHabilidadPrimaria(HB_PARADA, UI_PARADA,muestraBotones));

    div.append(muestraHabilidadPrimaria(HB_ESQUIVA, UI_ESQUIVA,muestraBotones));

    div.append(muestraHabilidadPrimaria(HB_ARMADURA, UI_LLEVAR_ARMADURA,muestraBotones));

    return div;
}

function muestraArmadura() {
    var div = getDiv(CSS_TEXTO_SMALL).addClass("sixteen colgrid");
    var divRow = getDiv("row");
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
            .append(divTA.append(TAS_ARMADURA[i] + ":"))
            .append(divValor.append(personaje_actual.getArmadura(TAS_ARMADURA[i])));
        divRow.append(divCol);
    }
    div.append(divRow);
    return div;
}

function muestraManejoArmas() {
    var div = getDiv(CSS_TEXTO_SMALL);
    var divInicial = getDiv(CSS_MUESTRA_BLOCK);
    var divEtiInicial = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE).append("Arma inicial: ");
    var divValorInicial = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_MUESTRA_INLINE).append(personaje_actual.getArmaInicial());
    div.append(divInicial.append(divEtiInicial).append(divValorInicial));
    if (personaje_actual.manejoArmas.length > 1) {
        var divAdicional = getDiv(CSS_MUESTRA_BLOCK);
        var divMasArmasEti = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE).append("Otras armas: ");
        divAdicional.append(divMasArmasEti);
        for (var i = 0; i < personaje_actual.manejoArmas.length; i++) {
            var divMasValor = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_LISTA_INLINE).addClass(CSS_MUESTRA_INLINE).append(personaje_actual.manejoArmas[i].nombre);
            divAdicional.append(divMasValor);
        }
        div.append(divAdicional);
    }
    return div;
}


function muestraSobrenatural(estadoGeneracion) {
    var div = recuadroBase();

    var muestraBotones = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);
    div.append(muestraSubtitulo(UI_SOBRENATURALES, true));
    divContenido.append(muestraCabecerasBaseBonosFinal());

    divContenido.append(muestraHabilidadPrimaria(HB_ZEON,UI_ZEON,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ACT,UI_ACT,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_PROYECCION_MAGICA,UI_PROYECCION_MAGICA,muestraBotones));

    divContenido.append(muestraMagiaInnata());

    divContenido.append(muestraSubtitulo(UI_VIAS, false));
    divContenido.append(muestraViasMagia(muestraBotones));

    divContenido.append(muestraSubtitulo(UI_CONJUROS, false));
    divContenido.append(muestraConjurosSueltos(muestraBotones));

    divContenido.append(muestraSubtitulo(UI_TABLAS, false));
    divContenido.append(muestraTablas([CATEGORIA_TABLA_MISTICAS],muestraBotones));

    divContenido.append(muestraSubtitulo(UI_CONVOCATORIA, false));
    divContenido.append(muestraCabecerasBaseBonosFinal());

    divContenido.append(muestraHabilidadPrimaria(HB_CONVOCAR,UI_CONVOCAR,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_DOMINAR,UI_DOMINAR,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_ATAR,UI_ATAR,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_DESCONVOCAR,UI_DESCONVOCAR,muestraBotones));

    div.append(divContenido);
    return div;
}

function muestraMagiaInnata() {
    var div = getDiv(CSS_TEXTO_SMALL);
    var divEtiqueta = getDiv(CSS_ETIQUETA).append("Magia innata: ");
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
        divBotonNuevo.append(muestraBotonPequeño("Aumentar niveles en vías",{},dialogoMagia,BOTON_MAGIA));
        div.append(divBotonNuevo);
    } else if (viasMagia.length == 0) {
        div.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (i=0; i < viasMagia.length;i++) {
        var divVia = getDiv(CSS_TEXTO_SMALL);
        var divNombre = getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).addClass(CSS_MUESTRA_INLINE).append(viasMagia[i].getVia().getNombre());
        var divNivel = getDiv(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL).addClass(CSS_MUESTRA_INLINE).append(" (nv " + viasMagia[i].getNivel() + ")");
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
                divConjuro.append(conjuro.getNombre() + " (" +conjuro.getNivel()+")" );
                addToolTip(divConjuro,"Nivel: "+conjuro.getNivel()/*+"<hr>"+conjuro.getEfecto()*/);
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
        divConjuro.append(conjuro.getNombre() + " (" +conjuro.getNivel()+")" );
        addToolTip(divConjuro,"Nivel: "+conjuro.getNivel()/*+"<hr>"+conjuro.getEfecto()*/);
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

    divContenido.append(muestraHabilidadPrimaria(HB_CV,UI_CV,muestraBotones));
    divContenido.append(muestraCVLibres());

    divContenido.append(muestraHabilidadPrimaria(HB_PROYECCION_PSIQUICA,UI_PROYECCION_PSIQUICA,muestraBotones));
    divContenido.append(muestraHabilidadPrimaria(HB_POTENCIAL_PSIQUICO,UI_POTENCIAL_PSIQUICO,muestraBotones));

    divContenido.append(muestraInnatos(muestraBotones));

    if (muestraBotones) {
        var divBotonNuevo = getDiv("");
        divBotonNuevo.append(muestraBotonPequeño("Gastar CVs",{},dialogoCV,BOTON_CV));
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
    var divEtiqueta = getDiv("four columns").addClass(CSS_TEXTO_SMALL).addClass(CSS_ETIQUETA).append("CV Libres");
    var divValor = getDiv("one column").addClass(CSS_TEXTO_SMALL).addClass(CSS_VALOR_PERSONALES).append((personaje_actual.getHabilidadDePersonaje(HB_CV).valorFinalActual() - personaje_actual.cv_gastados));
    div.append(divEtiqueta).append(divValor);
    return div;
}

function muestraDisciplinasYPoderes(muestraBotones) {
    var div = getDiv("");
    var i;
    var divDisciplinas = getDiv(CSS_TEXTO_SMALL);
    div.append(muestraSubtitulo("Afinidad con disciplinas", false));

    if (muestraBotones) {
        var divBotonNuevaDisciplina = getDiv("");
        divBotonNuevaDisciplina.append(muestraBotonPequeño("Gastar CVs",{},dialogoCV,BOTON_CV));
        divDisciplinas.append(divBotonNuevaDisciplina);
    } else if (personaje_actual.disciplinasPsiquicas.length == 0) {
        divDisciplinas.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (i=0; i < personaje_actual.disciplinasPsiquicas.length;i++) {
        var divDisciplina = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_BLOCK).append(personaje_actual.disciplinasPsiquicas[i].nombre);
        addToolTip(divDisciplina,personaje_actual.disciplinasPsiquicas[i].getDescripcion());
        divDisciplinas.append(divDisciplina);
    }

    div.append(divDisciplinas);

    div.append(muestraSubtitulo("Poderes dominados", false));
    var divPoderes = getDiv("");

    if (muestraBotones) {
        var divBotonNuevoPoder = getDiv("");
        divBotonNuevoPoder.append(muestraBotonPequeño("Gastar CVs",{},dialogoCV,BOTON_CV));
        divPoderes.append(divBotonNuevoPoder);
    } else if (personaje_actual.poderesPsiquicosDominados.length == 0) {
        divPoderes.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (i=0; i < personaje_actual.poderesPsiquicosDominados.length;i++) {
        var divPoder = getDiv(CSS_TEXTO_SMALL);

        var divNombre = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE).append(personaje_actual.poderesPsiquicosDominados[i].poder.nombre);
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

    divCoste.append("[2 CV] ");

    divEtiqueta.append("Innatos");

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
    var divNombre = $("<div>Nombre</div>");
    divNombre.addClass("four columns");
    var divBase = $("<div>Base</div>");
    divBase.addClass("one columns");
    var divBonos = $("<div>Bonos</div>");
    divBonos.addClass("two columns");
    var divFinal = $("<div>Final</div>");
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
            var etiqueta = habilidadDePersonaje.getHabilidad().getNombre();
            var divBotones = $("<div></div>");
            if (muestraBotones) {
                divBotones.append(muestraBotonMasMenosHabilidad(habilidadDePersonaje.getHabilidad().getNombre()).addClass(CSS_MUESTRA_INLINE));
                if (habilidadDePersonaje.getHabilidad().getEspecializacionesPosibles().length > 0) {
                    divBotones.append(muestraBotonElegirEspecialidad(habilidadDePersonaje.getHabilidad().getNombre()).addClass(CSS_MUESTRA_INLINE));
                }
            }
            if (habilidadDePersonaje.getEspecializacion() != "") {
                etiqueta += " (" + habilidadDePersonaje.getEspecializacion() + ")";
            }
            divContenido.append(
                muestraValorConBonosYCoste(etiqueta, habilidadDePersonaje.valorBase(coste), personaje_actual.getBonos(BONO_HABILIDAD, habilidadDePersonaje.getHabilidad().getNombre(), CATEGORIA_BONO_CUALQUIERA), coste, divBotones, (valorBase != HABILIDAD_NO_USABLE), false)
            );
        }
    }

    div.append(divContenido);
    return div;

}

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
                costePotencial = "[" + costePotencial + " CV] ";
            } else {
                costePotencial = "[max] ";
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
        tooltip = valorBase + "(base)";
    } else {
        divValorBase.append(UI_NO_USABLE_SIN_RANGOS);
        tooltip = UI_NO_USABLE_SIN_RANGOS + "(base)";
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
        tooltip += valorBono + " (" + bono.origen + ")";
    }
    if (valorBonos >= 0) {
        valorBonos = "+" + valorBonos;
    } else {
        valorBonos = "" + valorBonos;
    }
    divBonos.append(valorBonos);
    if (usable) {
        divValor.append("=" + valorFinal);
        tooltip += "=" + valorFinal + " (final)";
    } else {
        divValor.append("=" + UI_NO_USABLE_SIN_RANGOS);
        tooltip += "=" + UI_NO_USABLE_SIN_RANGOS + " (final)";
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
    tooltip = valorBase + "(base)";

    var valorFinal = parseInt(valorBase);

    if (parametros.valorBonos) {
        parametros.valorBonos = modificadorBonito(parametros.valorBonos);
        tooltip += parametros.valorBonos + " (bonos)";
        divBonos.append(parametros.valorBonos);
    }

    if (parametros.descripcion) {
        valorFinal += " " + parametros.descripcion;
    }

    divValor.append("=" + valorFinal);
    tooltip += "=" + valorFinal + " (final)";
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
            var divNombre = getDiv(CSS_ETIQUETA).addClass(CSS_MUESTRA_INLINE).append(tablaArmas.getNombre());
            if (tablaArmas.getOpcion() != "") {
                divNombre.append(" (" + tablaArmas.getOpcion() + ")");
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
        div.append(botonComprarNuevo("Comprar tabla de armas",BOTON_TABLAS_ARMAS,dialogoTablasArmas,{}));
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







