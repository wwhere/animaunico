/**
 * Created by Guille on 5/12/13.
 */

var DIAG_LOG_CAMBIOS = "Log de cambios";
var DIAG_LICENCIA = "Agradecimientos y licencia de software";

var CURRENT_VERSION = 25;

function mostrarLogCambios() {
    $("#logCambios").dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: false,
        ////show: "puff",
        title: DIAG_LOG_CAMBIOS,
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
        title: DIAG_LICENCIA,
        position: "center",
        closeOnEscape: true,
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO
    });
}