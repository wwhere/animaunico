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

function elegirDesequilibrioOfensivoMagico() {
    var arrayOpciones = [];
    var numOpciones = (personaje_actual.desequilibrioOfensivoMagicoCambioMaximo / 5);
    var valorActual = personaje_actual.desequilibrioOfensivoMagico;

    for (i = 1; i <= numOpciones; i++) {
        var valorMas = valorActual + i*5;
        var valorMenos = valorActual -i*5;
        if (valorMas <= 30)
            arrayOpciones.push(new OpcionMostrable(modificadorBonito(valorMas),valorMas,""));
        if (valorMenos >= -30)
            arrayOpciones.push(new OpcionMostrable(valorMenos,valorMenos,""));
    }
    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: asignarDesequilibrioOfensivoMagico, isDisabled: alwaysEnabled}, true);

}

function muestraEspecializacionInvocacion() {
    var divRow = getDiv("row");

    var divEtiqueta = getDiv("four columns").addClass(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).append(_l(UI_ESPECIALIZADO_EN_INVOCACION));

    var valor  = _l(UI_NO);
    if (personaje_actual.especializadoInvocacion) {
        valor = _l(UI_SI);
    }
    var divValorBase = getDiv("two columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL).append(valor);

    var divBoton = getDiv("push_one one column").append(muestraBotonPequeño(_l(UI_CAMBIAR_ESPECIALIZACION),{},function() {
        personaje_actual.setEspecializadoEnInvocacion(!personaje_actual.especializadoInvocacion);
    },""));

    divRow.append(divEtiqueta).append(divValorBase);

    if ((personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_INICIADA) ||(personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        divRow.append(divBoton);
    }

    return divRow;

}

function muestraElementalismo() {
    var divRow = getDiv("row");

    var divEtiqueta = getDiv("four columns").addClass(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).append(_l(UI_ELEMENTALISMO));

    var divValorBase = getDiv("two columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL).append(_l(personaje_actual.elementalismo));

    var divBoton = getDiv("push_one one column").append(muestraBotonPequeño(_l(UI_ESPECIFICAR),{},eligeElementalismo,""));

    divRow.append(divEtiqueta).append(divValorBase);

    if ((personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_INICIADA) ||(personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        divRow.append(divBoton);
    }

    return divRow;
}

function eligeElementalismo() {
    var arrayOpciones = [];

    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_AGUA),ELEMENTALISMO_AGUA,""));
    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_FUEGO),ELEMENTALISMO_FUEGO,""));
    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_AIRE),ELEMENTALISMO_AIRE,""));
    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_TIERRA),ELEMENTALISMO_TIERRA,""));
    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_LUZ),ELEMENTALISMO_LUZ,""));
    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_OSCURIDAD),ELEMENTALISMO_OSCURIDAD,""));

    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: asignarElementalismo, isDisabled: alwaysEnabled}, true);

}
function muestraInvocaciones(muestraBotones) {
    var div = getDiv("");
    var i;
    var divInvocaciones = getDiv("row");

    var invocaciones = personaje_actual.getInvocaciones();

    if (muestraBotones) {
        div.append(muestraBotonElegirInvocacion());
    } else if (invocaciones.length == 0) {
        div.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (i=0; i < invocaciones.length;i++) {
        var invocacion = invocaciones[i];
        var divInvocacion = getDiv(CSS_TEXTO_SMALL).addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_CENTRO).addClass("six columns");
        divInvocacion.append(invocacion.toString()).append(muestraBotonAnular(eliminarInvocacion,{invocacion: invocacion}));
        divInvocaciones.append(divInvocacion);
    }

    div.append(divInvocaciones);
    return div;
}

function muestraBotonElegirInvocacion() {
    var botonDiv = boton("small primary pretty btn",_l(UI_ELEGIR_INVOCACION));

    botonDiv.on("click",{},elegirInvocacion);

    return botonDiv;
}