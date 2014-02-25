var TAG_ID_ARTE_MARCIAL = "TagIdArteMarcial";
var ALERT_ARTE_MARCIAL_ATAQUE_DEFENSA_BAJOS = "No puedes aprender más artes marciales. Mejora más tu ataque y defensa";

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
        divBotonNuevo.append(muestraBotonPequeño("Comprar artes marciales",{},prepararDialogoArtesMarciales,BOTON_ARTES_MARCIALES));
        divContenido.append(divBotonNuevo);
    } else if (artesMarciales.length == 0) {
        divContenido.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }
    for (var i = 0; i < artesMarciales.length; i++) {
        var arteMarcial = artesMarciales[i];
        var primera = (artesMarciales.length == 1);

        var divArteMarcial = getDiv(CSS_TEXTO_SMALL);

        var divNombre = getDiv(CSS_ETIQUETA).append(arteMarcial.getNombre());

        divArteMarcial.append(divNombre);

        addToolTip(divNombre,arteMarcial.getDescripcion());

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

    categorias.push(new OpcionMostrable(UI_ARTES_MARCIALES_BASICAS,CATEGORIA_BASICA + TAG_ID_ARTE_MARCIAL));
    categorias.push(new OpcionMostrable(UI_ARTES_MARCIALES_AVANZADAS,CATEGORIA_AVANZADA + TAG_ID_ARTE_MARCIAL));

    for (i=0;i<artesMarcialesBasicas_set.length;i++) {
        arrayArtesMarciales.push(new OpcionMostrable(artesMarcialesBasicas_set[i].getNombre(),CATEGORIA_BASICA + TAG_ID_ARTE_MARCIAL,artesMarcialesBasicas_set[i].getDescripcion() + "<hr>" + artesMarcialesBasicas_set[i].getDescripcionVentajas()));
    }
    for (i=0;i<artesMarcialesAvanzadas_set.length;i++) {
        arrayArtesMarciales.push(new OpcionMostrable(artesMarcialesAvanzadas_set[i].getNombre(),CATEGORIA_AVANZADA + TAG_ID_ARTE_MARCIAL,artesMarcialesAvanzadas_set[i].getDescripcion() + "<hr>" + artesMarcialesAvanzadas_set[i].getDescripcionVentajas()));
    }

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


