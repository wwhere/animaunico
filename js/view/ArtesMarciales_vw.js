var TAG_ID_ARTE_MARCIAL = "TagIdArteMarcial";

/**
 * Bloque con las artes marciales conocidas por personaje_actual
 * @returns {jQuery}
 */
function muestraArtesMarciales(estadoGeneracion) {
    var div = recuadroBase(estadoGeneracion);
    var artesMarciales = personaje_actual.getArtesMarciales();

    var muestraBotones = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));

    div.append(muestraSubtitulo(UI_ARTES_MARCIALES, true));

    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    if (muestraBotones) {
        var divBotonNuevo = getDiv("");
        divBotonNuevo.append(muestraBotonPequeño(UI_BOTON_ARTES_MARCIALES,{},prepararDialogoArtesMarciales,BOTON_ARTES_MARCIALES));
        divContenido.append(divBotonNuevo);
    } else if (artesMarciales.length == 0) {
        divContenido.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }
    for (var i = 0; i < artesMarciales.length; i++) {
        var arteMarcial = artesMarciales[i];
        var primera = (artesMarciales.length == 1);

        var divArteMarcial = getDiv(CSS_TEXTO_SMALL);

        var divNombre = getDiv(CSS_ETIQUETA).append(_l(arteMarcial.getNombre()));

        divArteMarcial.append(divNombre);

        addToolTip(divNombre,_l(arteMarcial.getDescripcion()));

        if ((muestraBotones) && (arteMarcial.isAnulable())) {
            divArteMarcial.append(muestraBotonAnular(anularArteMarcial,{arteMarcial: arteMarcial, esPrimera: primera}));
        }

        divContenido.append(divArteMarcial);
    }

    div.append(divContenido);
    return div;
}

/**
 * Preparación para mostrar un cuadro de diálogo de elección de un arte marcial
 */
function prepararDialogoArtesMarciales() {
    var arrayArtesMarciales = [];
    var categorias = [];
    var i;

    categorias.push(new OpcionMostrable(_l(UI_ARTES_MARCIALES_BASICAS),UI_ARTES_MARCIALES_BASICAS,CATEGORIA_BASICA + TAG_ID_ARTE_MARCIAL));
    categorias.push(new OpcionMostrable(_l(UI_ARTES_MARCIALES_AVANZADAS),UI_ARTES_MARCIALES_AVANZADAS,CATEGORIA_AVANZADA + TAG_ID_ARTE_MARCIAL));

    for (i=0;i<artesMarcialesBasicas_set.length;i++) {
        arrayArtesMarciales.push(new OpcionMostrable(_l(artesMarcialesBasicas_set[i].getNombre()),artesMarcialesBasicas_set[i].getNombre(),CATEGORIA_BASICA + TAG_ID_ARTE_MARCIAL,_l(artesMarcialesBasicas_set[i].getDescripcion()) + "<hr>" + _l(artesMarcialesBasicas_set[i].getDescripcionVentajas())));
    }
    for (i=0;i<artesMarcialesAvanzadas_set.length;i++) {
        arrayArtesMarciales.push(new OpcionMostrable(_l(artesMarcialesAvanzadas_set[i].getNombre()),artesMarcialesAvanzadas_set[i].getNombre(),CATEGORIA_AVANZADA + TAG_ID_ARTE_MARCIAL,_l(artesMarcialesAvanzadas_set[i].getDescripcion()) + "<hr>" + _l(artesMarcialesAvanzadas_set[i].getDescripcionVentajas())));
    }

    /**
     *
     * @type {PuedeComprar}
     */
    var puedeComprar = personaje_actual.puedeComprarNuevaArteMarcial();
    if (puedeComprar.puedeComprar) {
        muestraDialogoElegirOpciones(arrayArtesMarciales, {}, {principal: aplicarArteMarcial, isDisabled: arteMarcialNoComprable}, true, categorias);
    } else {
        alert(puedeComprar.mensajeFallo);
    }
}

/**
 *
 * @param {{opcion:string}} parametros
 * @returns {boolean}
 */
function arteMarcialNoComprable(parametros) {
    var arteMarcial = getArteMarcial(parametros.opcion);

    return ( (!arteMarcial.cumpleRequisitos(personaje_actual)) || (personaje_actual.hasArteMarcial(parametros.opcion)) );
}


