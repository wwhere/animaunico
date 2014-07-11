var CURRENT_VERSION = 78;

function mostrarLogCambios() {
    var div = recuadroBase();
    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    div.append(muestraSubtitulo(UI_DIALOGO_LOG_CAMBIOS_TITULO, true, true, [{texto:"X",delegado:cerrarLogCambios}]));
    divContenido.append($("#logCambios").html());
    div.append(divContenido);
    $("#contenidoResaltado").empty().append(div);
/*    $("#logCambios").dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: false,
        ////show: "puff",
        title: _l(UI_DIALOGO_LOG_CAMBIOS_TITULO),
        position: "center",
        closeOnEscape: true,
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO
    });*/

    localStorage.ultimosCambiosVistos = CURRENT_VERSION;
}

function cerrarLogCambios() {
    $("#contenidoResaltado").empty();
}

function mostrarLicencia() {
    $("#licencia").dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: false,
        ////show: "puff",
        title: _l(UI_DIALOGO_LICENCIA_TITULO),
        position: "center",
        closeOnEscape: true,
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO
    });
}