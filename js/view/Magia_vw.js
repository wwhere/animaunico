/**
 *
 */
function dialogoMagia() {
    var dialogo = $("<div></div>");
    var titulo;

    var actualizarDialogoMagia = function() {
        dialogo.empty();

        dialogo.append(muestraSubtitulo(UI_NIVELES_VIA, true));
        var divNivelMagia = $("<div></div>");
        divNivelMagia.append(_l(UI_NIVELES_MAXIMOS_A_REPARTIR) + ": " + personaje_actual.nivelMagiaMaximo() + "<br>" + _l(UI_NIVELES_LIBRES_A_REPARTIR) + ": " + (personaje_actual.nivelMagiaMaximo()-personaje_actual.getNivelMagiaGastado()));
        dialogo.append(divNivelMagia);

        dialogo.append(muestraSubtitulo(UI_VIAS, false));

        var botonViaDisabled = false;

        if (personaje_actual.nivelMagiaMaximo()-personaje_actual.getNivelMagiaGastado() < 2) {
            botonViaDisabled = true;
        }

        if (!personaje_actual.hasFlag(FLAG_DON)) {
            botonViaDisabled = true;
        }

        if (personaje_actual.getViasMagia().length == VIAS_MAGICAS.length) {
            botonViaDisabled = true;
        }

        var divBotonNuevaVia = boton("medium primary pretty btn",_l(UI_ACCESO_NUEVA_VIA),botonViaDisabled);

        dialogo.append(divBotonNuevaVia);

        divBotonNuevaVia.on("click", accesoNuevaVia);

        var divZonaVias = $("<div></div>");
        var viasMagia = personaje_actual.getViasMagia();
        for (var i = 0; i < viasMagia.length;i++) {
            var nivelEnVia = viasMagia[i];
            var via = nivelEnVia.getVia();
            var coste = nivelEnVia.getNivel() * personaje_actual.getCosteVia(nivelEnVia.getVia().getNombre());
            titulo = $("<h3></h3>")
            titulo.append(_l(nivelEnVia.getVia().getNombre()) + " - " + _l(UI_NV) + ": " + nivelEnVia.getNivel() + " (" + coste + " " + _l(UI_NIVELES_VIA_GASTADOS) + ")");

            titulo.append(muestraBotonMasMenosNivelVia(nivelEnVia));

            titulo.append(muestraBotonAnular(eliminarAccesoViaMagia,{via: via, coste: coste}));

            divZonaVias.append(titulo);

            var divConjurosVia = $("<div></div>");

            for (var j = 2; j <= nivelEnVia.getNivel(); j += 2) {
                if (via.isNivelLibreAcceso(j)) {
                    divConjurosVia.append("<br><b>"+_l(UI_NIVEL)+" " + j + ": " + _l(UI_LIBRE_ACCESO));
                    if (nivelEnVia.getConjuroLibre(j) != undefined) {
                        var conjuroLibre = nivelEnVia.getConjuroLibre(j);
                        divConjurosVia.append(" - " + _l(conjuroLibre.getNombre()));
                    }
                    divConjurosVia.append("</b>");
                    divConjurosVia.append(muestraBotonElegirConjuroLibreAcceso(via,j));
                } else {
                    var conjuro = via.getConjuro(j);
                    divConjurosVia.append("<br><b>"+_l(UI_NIVEL)+" " + j + ": " + _l(conjuro.getNombre()) +  "</b>");
                }
            }

            divZonaVias.append(divConjurosVia);
        }

        titulo = $("<h3></h3>")
        titulo.append(_l(UI_CONJUROS));
        divZonaVias.append(titulo);
        var divConjurosSueltos = $("<div></div>");

        divConjurosSueltos.append(muestraBotonElegirConjuroSuelto());
        var conjurosSueltos = personaje_actual.getConjurosSueltos();
        for (var k = 0; k < conjurosSueltos.length; k++) {
            divConjurosSueltos.append("<br><b>"+_l(UI_NIVEL)+" " + conjurosSueltos[k].getNivel() + ": " + _l(conjurosSueltos[k].getNombre()) +  "</b>");
        }

        divZonaVias.append(divConjurosSueltos);
        dialogo.append(divZonaVias);
        divZonaVias.accordion({
            heightStyle: "content"
        });
    };

    actualizarDialogoMagia();

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        resizable: true,
        draggable: true,
        //show: "puff",
        title: _l(DIAG_PODERES_MAGIA),
        position: "center",
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true,
        close: function(event, ui) {dialogo.empty();}
    });

    dialogo.on("close",function() {
        dialogo.empty();
        removeActualizador(EVENT_CHARACTER_SECCION_MAGIA,actualizarDialogoMagia);
    });


    addActualizador(EVENT_CHARACTER_SECCION_MAGIA,actualizarDialogoMagia);
}


/**
 *
 * @param {NivelEnVia} nivelVia
 * @returns {jQuery}
 */
function muestraBotonMasMenosNivelVia(nivelVia) {
    var div = $("<div></div>");
    var divMas = boton("small primary pretty btn",_l("+"));
    var divMenos = boton("small secondary pretty btn",_l("+"));

//    divMas.css("width","1rem");
  //  divMenos.css("width","1rem");

    div.append(divMas).append(divMenos);

    divMas.on("click",{nivelEnVia: nivelVia,unidades: 2}, aumentaNivelViaClick);
    divMenos.on("click",{nivelEnVia: nivelVia,unidades: -2}, aumentaNivelViaClick);
    return div;
}

/**
 *
 * @param {ViaMagia} via
 * @param {number} nivel
 * @returns {jQuery}
 */
function muestraBotonElegirConjuroLibreAcceso(via,nivel) {
    var botonDiv = boton("small primary pretty btn",_l(UI_ELEGIR));

    botonDiv.on("click",{via:via,nivel:nivel},elegirConjuroLibreAcceso);

    return botonDiv;
}

function muestraBotonElegirConjuroSuelto() {
    var botonDiv = boton("small primary pretty btn",_l(UI_COMPRAR_CONJURO_SUELTO));

    botonDiv.on("click",{},elegirConjuroSuelto);

    return botonDiv;
}