/**
 * Muestra el diálogo para elegir el tipo de método de generación de características.
 */
function mostrarDialogoTipoGeneracion() {
    var dialogMetodoCreacion = getDiv("");

    dialogMetodoCreacion.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: false,
        //////show: "puff",
        title: _l(DIAG_METODO_CREACION_TITULO),
        width: 500,
        height: 500,
        dialogClass: "no-close",
        closeOnEscape: false,
        close: function() {
            dialogMetodoCreacion.empty();
        }
    });

    var filaBotones = getDiv("row");
    dialogMetodoCreacion.append(filaBotones);

    var numeroMetodos = 4;

    if (PANTALLA_ENABLED) {
        numeroMetodos = 5;
    }

    for (var i = 1; i <= numeroMetodos; i++) {
        var divTipo = getDiv("two columns");
        var divBoton = boton("big primary btn pretty",_l(BTN_TIPO) + " " + i);
        divBoton.css("width","100%");

        divTipo.append(divBoton);
        filaBotones.append(divTipo);

        divBoton.on("click", {tipo:i}, function(event) {
            dialogMetodoCreacion.dialog("close");
            generarMetodo(event.data.tipo);
        });

        divBoton.on("mouseenter", {metodo:i}, function(event) {
            $("."+DIV_DESTINO_EXPLICACION_GENERACION).empty().append(_l(getExplicacionMetodo(event.data.metodo)));
        });
        divBoton.on("mouseleave", function() {
            $("."+DIV_DESTINO_EXPLICACION_GENERACION).empty();
        });
    }

    var divExplicacion = getDiv(DIV_DESTINO_EXPLICACION_GENERACION);
    dialogMetodoCreacion.append(divExplicacion);
}

/**
 * Muestra el diálogo para repartir valores entre las ocho características de personaje_actual
 * @param {number[]} valores Los valores a repartir
 * @param {number[]} valoresAbandonados Los valores que se han ignorado por diversos motivos
 */
function mostrarDialogoRepartoTiradasCaracteristicas(valores,valoresAbandonados) {
    var dialogo = getDiv("");
    dialogo.attr("id",DIV_DIALOGO_REPARTO_CARACTERISTICAS);

    var actualizaDialogoReparto = function(arrayValores, arrayAsignados, caracteristicasAsignadas, arrayAbandonados) {
        var divZonaCaracteristicas = getDiv("");
        var divValores = getDiv("");
        var divValoresAbandonados = getDiv("");
        var i, j;

        dialogo.empty();

        desactivarNotificaciones();

        divZonaCaracteristicas.append(
            getDiv("row").append(
                    getDiv("four columns").append(_l(UI_CARACTERISTICA))
                ).append(
                    getDiv("four columns").append(_l(UI_VALOR)).addClass(CSS_TEXTO_CENTRO)
                ).append(
                    getDiv("four columns").append(_l(UI_BONO)).addClass(CSS_TEXTO_CENTRO)
                )
        );

        for (i = 0;i<CARACTERISTICAS_NOMBRES.length;i++) {
            var divCaracteristica = getDiv("");
            divCaracteristica.droppable( {
                hoverClass: "ui-state-highlight"
            });
            divCaracteristica.on("drop", {caracteristica:CARACTERISTICAS_NOMBRES[i], indice:i}, function (event ,ui) {
                var indiceCarac;
                var valor = ui.draggable.attr("valor");
                var origen = ui.draggable.attr("origen");
                if (isNaN(origen)) {
                    //de una característica ya asignada
                    indiceCarac = getIndiceCaracteristica(origen);
                    origen = caracteristicasAsignadas[indiceCarac];
                    caracteristicasAsignadas[indiceCarac] = false;
                } else {
                    //de la zona de valores a asignar
                    arrayAsignados[origen] = true;
                }

                personaje_actual.setCaracteristica(event.data.caracteristica,valor);
                if (caracteristicasAsignadas[event.data.indice]) {
                    //ya estaba asignada, devolver el valor
                    arrayAsignados[caracteristicasAsignadas[event.data.indice]] = false;
                }
                caracteristicasAsignadas[event.data.indice] = origen;

                actualizaDialogoReparto(arrayValores,arrayAsignados,caracteristicasAsignadas,arrayAbandonados);
            });

            var divCarac = getDiv(CSS_CAMPO_CARACTERISTICAS);
            var divEtiqueta = getDiv(CSS_ETIQUETA_CARACTERISTICAS);
            var divValor = getDiv(CSS_VALOR_CARACTERISTICAS);
            var divBono = getDiv(CSS_BONO_CARACTERISTICAS);

            divEtiqueta.append(_l(CARACTERISTICAS_NOMBRES[i]));

            if (caracteristicasAsignadas[i]) {
                divValor.append(nuevoValorDraggable(personaje_actual.getCaracteristica(CARACTERISTICAS_NOMBRES[i]),CARACTERISTICAS_NOMBRES[i]));
                divBono.append(modificadorBonito(personaje_actual.getBonoCaracteristica(CARACTERISTICAS_NOMBRES[i])));
            } else {
                divValor.append("--");
                divBono.append("--");
            }

            divCarac.append(
                getDiv("row").append(
                        getDiv("four columns").append(divEtiqueta)
                    ).append(
                        getDiv("four columns").append(divValor).addClass(CSS_TEXTO_CENTRO)
                    ).append(
                        getDiv("four columns").append(divBono).addClass(CSS_TEXTO_CENTRO)
                    )
            );

            divCaracteristica.append(divCarac);
            divZonaCaracteristicas.append(divCaracteristica);
        }

        var divGridValores = getDiv("sixteen colgrid");
        var divRowValores = getDiv("row");

        for (j = 0; j < arrayValores.length; j++) {
            var divColValor = getDiv("two columns");
            if (!arrayAsignados[j]) {
                divColValor.append(nuevoValorDraggable(arrayValores[j],j));
            }
            divRowValores.append(divColValor);
        }

        divGridValores.append(divRowValores);
        divValores.append(divGridValores);

        var divRowValoresAbandonados = $("<ul></ul>").addClass("five_up tiles");

        for (j = 0; j < arrayAbandonados.length; j++) {
            divRowValoresAbandonados.append(nuevoValorAbandonado(arrayAbandonados[j]));
        }

        divValoresAbandonados.append(divRowValoresAbandonados);

        dialogo.append(divZonaCaracteristicas).append(divValores).append(divValoresAbandonados);

        var todoAsignado = true;
        for (i = 0; i<caracteristicasAsignadas.length;i++) {
            todoAsignado = todoAsignado && caracteristicasAsignadas[i];
        }
        if (todoAsignado) {
            dialogo.dialog("option","buttons", [
                {
                    text: "Ok",
                    disabled: false,
                    click: function() {
                        dialogo.dialog( "close" );
                        activarNotificaciones();
                        finAsignacionCaracteristicas();
                    }
                }
            ]);
        }
    };

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: false,
        ////show: "puff",
        title: _l(UI_REPARTO_CARACTERISTICAS),
        width: 500,
        height: 600,
        dialogClass: "no-close",
        closeOnEscape: false,
        buttons: [
            {
                text: "Ok",
                disabled: true,
                click: function() {
                    dialogo.dialog( "close" );
                    activarNotificaciones();
                    finAsignacionCaracteristicas();
                }
            }
        ]
    });

    actualizaDialogoReparto(valores,[false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false],valoresAbandonados);
}

/**
 * Función auxiliar. Genera el valor draggable para mostrarDialogoRepartoTiradasCaracteristicas
 * @param {number} valor El valor a mostrar
 * @param {number|string} origen Un índice o la característica de la que viene
 * @returns {jQuery}
 */
function nuevoValorDraggable(valor, origen) {
    var div = getDiv("listaValores");
    div.addClass("valorCaracteristica");
    div.draggable( {
        cursor: "pointer",
        revert: "invalid"
    });
    div.attr("valor",valor);
    div.attr("origen",origen);
    div.append(valor);
    return div;
}

/**
 * Función auxiliar. Genera el valor abandonado para mostrarDialogoRepartoTiradasCaracteristicas
 * @param {number} valor El valor a mostrar
 * @returns {jQuery}
 */
function nuevoValorAbandonado(valor) {
    var div = $("<li></li>").addClass(CSS_TEXTO_CENTRO);
    div.addClass(CSS_VALOR_ABANDONADO);
    div.append(valor);
    return div;
}

/**
 * Muestra el diálogo para repartir puntos entre las ocho características de personaje_actual
 * @param {number} total El total de puntos a repartir
 * @param {boolean} diezCuestaDoble Indica si el décimo punto cuesta doble
 */
function mostrarDialogoRepartoPuntosCaracteristicas(total,diezCuestaDoble) {
    var dialogo = getDiv("");
    dialogo.attr("id",DIV_DIALOGO_REPARTO_CARACTERISTICAS);

    desactivarNotificaciones();

    var actualizaDialogoReparto = function(puntosTotales, puntosLibres) {
        var divValorTotal = getDiv("");
        var divZonaCaracteristicas = getDiv("");

        dialogo.empty();

        divZonaCaracteristicas.append(
            getDiv("row").append(
                    getDiv("four columns").append(_l(UI_CARACTERISTICA))
                ).append(
                    getDiv("four columns").append(_l(UI_VALOR)).addClass(CSS_TEXTO_CENTRO)
                ).append(
                    getDiv("four columns").append(_l(UI_BONO)).addClass(CSS_TEXTO_CENTRO)
                )
        );

        for (var i = 0;i<CARACTERISTICAS_NOMBRES.length;i++) {
            var divCaracteristica = getDiv("row");

            var divEtiqueta = getDiv(CSS_ETIQUETA_CARACTERISTICAS);
            var divValor = getDiv(CSS_VALOR_CARACTERISTICAS);
            var divBono = getDiv(CSS_BONO_CARACTERISTICAS);
            divEtiqueta.append(_l(CARACTERISTICAS_NOMBRES[i]));

            var divContenidoValor = $("<input>");
            divContenidoValor.prop("type","number");
            divContenidoValor.prop("value",personaje_actual.getCaracteristica(CARACTERISTICAS_NOMBRES[i]));

            divContenidoValor.addClass(CSS_MUESTRA_INLINE);
            divContenidoValor.addClass("spinnerMetodo4");
            divContenidoValor.spinner({
                incremental: false,
                max: 10,
                min: 1,
                page: 1
            });
            divContenidoValor.on("change",{caracteristica:CARACTERISTICAS_NOMBRES[i],divSpinner:divContenidoValor}, function(event, ui) {
                var caracteristica = event.data.caracteristica;
                var currentValue = personaje_actual.getCaracteristica(caracteristica);
                var newValue = event.data.divSpinner.spinner("value");
                var paso = newValue - currentValue;
                var actualizar = false;

                if ((newValue <= 10) && (newValue >= 1)) {
                    if (paso > 0) {
                        if (puntosLibres >= paso) {
                            actualizar = true;
                        }
                    } else {
                        if (puntosLibres <= puntosTotales-7+paso) {
                            actualizar = true;
                        }
                    }
                }

                if (actualizar) {
                    if (diezCuestaDoble) {
                        if ((currentValue < 10) && (newValue == 10)) {
                            paso++;
                        }
                        if ((currentValue == 10) && (newValue < 10)) {
                            paso--;
                        }
                    }
                    puntosLibres -= paso;
                    personaje_actual.setCaracteristica(caracteristica,newValue);
                }
                actualizaDialogoReparto(puntosTotales,puntosLibres);
            });

            divValor.append(divContenidoValor);

            divBono.append(modificadorBonito(personaje_actual.getBonoCaracteristica(CARACTERISTICAS_NOMBRES[i])));

            divCaracteristica.append(
                    getDiv("four columns").append(divEtiqueta)
                ).append(
                    getDiv("four columns").append(divValor).addClass(CSS_TEXTO_CENTRO)
                ).append(
                    getDiv("four columns").append(divBono).addClass(CSS_TEXTO_CENTRO)
                );

            divZonaCaracteristicas.append(divCaracteristica);

            dialogo.dialog( "option", "buttons", [ {
                text: "Ok",
                disabled: (puntosLibres > 0),
                click: function() {
                    $( this ).dialog( "close" );
                    activarNotificaciones();
                    finAsignacionCaracteristicas();
                }
            }]);

        }


        var divTotal = getDiv("");
        var divLibre = getDiv("");
        divTotal.append(_l(UI_TOTAL) + ": " + puntosTotales);
        divLibre.append(_l(UI_LIBRES) + ": " + puntosLibres);

        divValorTotal.append(divTotal).append(divLibre);

        dialogo.append(divZonaCaracteristicas).append(divValorTotal);
    };

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: false,
        ////show: "puff",
        title: _l(UI_REPARTO_CARACTERISTICAS),
        width: 500,
        height: 600,
        dialogClass: "no-close",
        closeOnEscape: false,
        buttons: [
            {
                text: "Ok",
                disabled: true,
                click: function() {
                    $( this ).dialog( "close" );
                    activarNotificaciones();
                    finAsignacionCaracteristicas();
                }
            }
        ]
    });

    for (var i = 0;i<CARACTERISTICAS_NOMBRES.length;i++) {
        personaje_actual.setCaracteristica(CARACTERISTICAS_NOMBRES[i],1);
    }

    actualizaDialogoReparto(total,total-8);
}



/**
 *
 * @param {function} callback
 * @param {{}} parametros
 * @param {jQuery} divExplicativo
 */
function muestraDialogoElegirCaracteristica(callback,parametros,divExplicativo) {
    var botones = [];
    for (var i = 0; i < CARACTERISTICAS_NOMBRES.length;i++) {
        botones.push({
            text: _l(ARACTERISTICAS_NOMBRES[i]),
            click: function(event) {
                $( this ).dialog("close" );
                callback(event.target.innerHTML,parametros)
            }
        });
    }
    var dialogo = "";
    if (divExplicativo != undefined) {
        dialogo = divExplicativo;
    } else {
        dialogo = $("<div></div>");
    }
    dialogo.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: false,
        ////show: "puff",
        title: _l(DIAG_ELEGIR_OPCIONES_TITULO),
        dialogClass: "no-close",
        closeOnEscape: false,
        buttons: botones,
        width: ANCHO_DIALOGO
    });

}

