function dialogoElegirRaza() {
    var dialogElegirRaza = $("#dialogElegirRaza");
    dialogElegirRaza.empty();
    dialogElegirRaza.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: true,
        //show: "puff",
        title: DIAG_ELEGIR_RAZA_TITULO,
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true
    });
    dialogElegirRaza.on("close",mostrarPersonajeActual);

    for (var i = 0; i < razas_set.length ; i++) {
        var raza = razas_set[i];

        var divRaza = boton("big primary pretty btn",_l(raza.nombre),(raza.nombre == personaje_actual.raza.nombre));

        dialogElegirRaza.append(divRaza);
        divRaza.attr("raza",raza.nombre);
        divRaza.on("click", {raza:raza}, aplicarRaza);
        divRaza.on("mouseenter", function() {
            var razaAct = getRaza($(this).attr("raza"));
            var ventRaza = razaAct.getExplicacion();
            var divVent = $("<div></div>");

            for (var k = 0; k < ventRaza.length; k++) {
                var divUnaVentaja = $("<div></div>");
                divUnaVentaja.addClass("muestraBlock");

                var divNombre = $("<div></div>");
                var divDesc = $("<div></div>");
                var divreg = $("<div></div>");

                divNombre.addClass(CSS_MUESTRA_INLINE);
                divNombre.addClass("textoFuerte");
                divNombre.addClass(CSS_TEXTO_SMALLER);

                divDesc.addClass(CSS_MUESTRA_INLINE);
                divDesc.addClass(CSS_TEXTO_SMALLER);

                divreg.addClass(CSS_TEXTO_SMALLER);
                divreg.addClass(CSS_TEXTO_ITALIC);
                divreg.addClass(CSS_MUESTRA_INLINE);

                divNombre.append(ventRaza[k].nombre + ": ");
                divDesc.append(ventRaza[k].descripcion);
                divreg.append(" (" + ventRaza[k].reglas + ") ");
                divUnaVentaja.append(divNombre).append(divDesc).append(divreg);
                divVent.append(divUnaVentaja);
            }

            $(DIV_DESTINO_EXPLICACION_RAZA).empty().append(divVent);
        });
        divRaza.on("mouseleave", function() {
            //$(DIV_DESTINO_EXPLICACION_RAZA).empty();
        });
    }

    var divExplicacion = $("<div></div>");
    divExplicacion.addClass("explicacionRaza");
    dialogElegirRaza.append(divExplicacion);
}


