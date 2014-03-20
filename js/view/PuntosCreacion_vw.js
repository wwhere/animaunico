function dialogoVentajas() {
    dialogoPuntosCreacion(DIAG_COMPRAR_VENTAJAS_TITULO, true);
}

function dialogoDesventajas() {
    dialogoPuntosCreacion(DIAG_ELEGIR_DESVENTAJAS_TITULO, false);
}

/**
 *
 * @param {string} tituloDialogo No localizado
 * @param {boolean} esVentajas
 */
function dialogoPuntosCreacion(tituloDialogo, esVentajas) {
    var dialogPuntosCreacion = $("#dialogPuntosCreacion");
    dialogPuntosCreacion.empty();

    var divAcord = $("<div></div>");

    for (var j = 0; j < categoriasDeVentajasComprables.length; j++) {
        var categ = categoriasDeVentajasComprables[j];
        var divCateg = $("<div></div>");
        if (esVentajas) {
            divAcord.append("<h3>"+_l(categ)+"</h3>");
            divCateg.attr("id",categ.replace(/\s+/g, ''));
        } else {
            divAcord.append("<h3>"+_l(categ.replace("Ventaja","Desventaja"))+"</h3>");
            divCateg.attr("id",categ.replace(/\s+/g, '')+"Desv");
        }
        divCateg.addClass("contenedorBotonesVentajas");
        divAcord.append(divCateg);
    }
    dialogPuntosCreacion.append(divAcord);

    /**
     *
     * @type {Ventaja[]}
     */
    var arrayPC;
    if (esVentajas) {
        arrayPC = ventajas_set;
    } else {
        arrayPC = desventajas_set;
    }

    for (var i = 0; i < arrayPC.length ; i++) {
        /**
         *
         * @type {Ventaja}
         */
        var elemento = arrayPC[i];

        if (elemento.repetible != NO_COMPRABLE) {


            var labelVent = _l(elemento.nombre) + "<br>[";
            for (var k = 0;k<elemento.costes.length;k++) {
                labelVent += elemento.costes[k];
                if (k < elemento.costes.length-1) {
                    labelVent += ",";
                }
            }
            labelVent += "]";

            var isDisabled = !personaje_actual.puedeComprar(elemento);

            var divElemento = boton("big primary pretty btn",labelVent,isDisabled);

            if (esVentajas) {
                $("#"+elemento.grupo.replace(/\s+/g, '')).append(divElemento);
                divElemento.attr("ventaja",elemento.nombre);
            } else {
                $("#"+elemento.grupo.replace(/\s+/g, '')+"Desv").append(divElemento);
                divElemento.attr("desventaja",elemento.nombre);
            }
            divElemento.on("click",
                {
                    elementoPC:elemento,
                    isVentaja: esVentajas
                },
                aplicarElementoPC);
            divElemento.on("mouseenter", function() {
                var elementoAct;
                if (esVentajas) {
                    elementoAct = getVentaja($(this).attr("ventaja"));
                } else {
                    elementoAct = getVentaja($(this).attr("desventaja"));
                }

                var divGeneral = $("<div></div>");
                divGeneral.addClass(CSS_TEXTO_SMALLER);

                var descripcion = _l(elementoAct.descripcion) + " - " + _l(elementoAct.descripcionEfecto);
                var divDescripcion = $("<div></div>");
                divDescripcion.addClass(CSS_TEXTO_ITALIC);
                divDescripcion.addClass("muestraBlock");
                divDescripcion.append(descripcion);
                divGeneral.append(divDescripcion);


                $(DIV_DESTINO_EXPLICACION_VENTAJA).empty().append(divGeneral);
            });
            divElemento.on("mouseleave", function() {
                //$(DIV_DESTINO_EXPLICACION_VENTAJA).empty();
            });
        }

    }

    divAcord.accordion({
        heightStyle: "content"
    });

    var divExplicacion = $("<div></div>");
    divExplicacion.addClass("explicacionVentaja");
    dialogPuntosCreacion.append(divExplicacion);

    dialogPuntosCreacion.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: true,
        //show: "puff",
        title: _l(tituloDialogo),
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true
    });
}




