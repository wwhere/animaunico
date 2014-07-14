/**
 *
 * @param {Personaje} personaje
 * @returns {string} HTML
 */
function printPlain(personaje) {
    var out = "";

    out += "<h3>" + personaje.getNombre() + "</h3>";
    out += "<div>" + "<b>" + _l(UI_RAZA) + ":</b>" + _l(personaje.getRaza().toString()) + "</div>";
    out += "<div>" + "<b>" + _l(UI_CATEGORIA) + ":</b>" + personaje.getStringCategoria() + "</div>";

    return out;
}

/**
 *
 */
function muestraVentanaImprimirPersonaje() {
    var ventana = getDiv();

    var impresion = getDiv(CSS_TEXTO_SMALL).addClass(CSS_ZONA_IMPRESION);

    impresion.append(printPlain(personaje_actual));

    ventana.append(impresion);

    ventana.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: false,
        title: _l(DIAG_IMPRIMIR_PERSONAJE),
        position: "center",
        closeOnEscape: true,
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        buttons: [
            {
                text: _l(UI_OK),
                click: function() {
                    $( this ).dialog( "close" );
                    $(this).empty();
                }
            }
        ]
    });
}