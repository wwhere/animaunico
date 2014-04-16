/**
 * Created by Guille on 5/12/13.
 */

var CURRENT_VERSION = 50;

function mostrarLogCambios() {
    $("#logCambios").dialog({
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
    });

    localStorage.ultimosCambiosVistos = CURRENT_VERSION;
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