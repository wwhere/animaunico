/**
 *
 */
function muestraVentanaImprimirPersonaje() {
    var ventana = getDiv();
    var rivetsView;
    var impresion = getDiv(CSS_TEXTO_SMALL).attr("id","personaje");

    $.get("printTemplate1.html", function (data) {
        impresion.append(data);
        rivetsView = rivets.bind($('#personaje'), {
            p: personaje_actual,
            habilidades:habilidades_set
        });
    });

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
                    $("#personaje").printArea({
                        mode: "popup",
                        popTitle: "Anima: UNICO",
                        popClose: true
                    });
                    $( this ).dialog( "close" );
                    $(this).empty();
                }
            }
        ]
    });

    ventana.on("dialogclose",function() {
        rivetsView.unbind();
    });



}