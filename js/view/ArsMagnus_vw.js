var TAG_ID_ARS_MAGNUS= "TagIdArsMagnus";

/**
 * @returns {jQuery}
 */
function muestraArsMagnus(estadoGeneracion) {
    var div = recuadroBase(estadoGeneracion);
    var arsMagnus = personaje_actual.getArsMagnus();

    var muestraBotones = ((estadoGeneracion == ESTADO_GENERACION_INICIADA) || (estadoGeneracion == ESTADO_GENERACION_SUBIENDO_NIVEL));

    div.append(muestraSubtitulo(UI_ARS_MAGNUS, true, false, []));

    var divContenido = getDiv(CSS_CONTENIDO_RECUADRO);

    if (muestraBotones) {
        var divBotonNuevo = getDiv("");
        divBotonNuevo.append(muestraBotonPequeño(_l(UI_BOTON_ARS_MAGNUS),{},prepararDialogoArsMagnus,BOTON_ARS_MAGNUS));
        divContenido.append(divBotonNuevo);
    } else if (arsMagnus.length == 0) {
        divContenido.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }
    for (var i = 0; i < arsMagnus.length; i++) {
        var arsMagnusActual = arsMagnus[i];

        var divArsMagnus = getDiv(CSS_TEXTO_SMALL);

        var divNombre = getDiv(CSS_ETIQUETA).append(_l(arsMagnusActual.getNombre()));

        divArsMagnus.append(divNombre);

        if ((muestraBotones) && (arsMagnusActual.isAnulable())) {
            divArsMagnus.append(muestraBotonAnular(anularArsMagnus,{arsMagnus: arsMagnusActual}));
        }

        divContenido.append(divArsMagnus);
    }

    div.append(divContenido);
    return div;
}

/**
 * Preparación para mostrar un cuadro de diálogo de elección de un arte marcial
 */
function prepararDialogoArsMagnus() {
    var arrayArsMagnus = [];
    var categorias = [];
    var i;

    categorias.push(new OpcionMostrable(_l(GRUPO_ARS_MAGNUS_MENORES),GRUPO_ARS_MAGNUS_MENORES,GRUPO_ARS_MAGNUS_MENORES));
    categorias.push(new OpcionMostrable(_l(GRUPO_ARS_MAGNUS_MAYORES),GRUPO_ARS_MAGNUS_MAYORES,GRUPO_ARS_MAGNUS_MAYORES));
    categorias.push(new OpcionMostrable(_l(GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON),GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON,GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON));
    categorias.push(new OpcionMostrable(_l(GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES),GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES,GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES));

    var arsMagnus;
    for (i=0;i<arsMagnusMenores.length;i++) {
        arsMagnus = arsMagnusMenores[i];
        arrayArsMagnus.push(new OpcionMostrable(_l(arsMagnus.getNombre()),arsMagnus.getNombre(),GRUPO_ARS_MAGNUS_MENORES,arsMagnus.getCostePD(personaje_actual) + " " + _l(UDS_PD) + "<hr>" + arsMagnus.getCosteCM() + " " + _l(UDS_CM)));
    }
    for (i=0;i<arsMagnusMayores.length;i++) {
        arsMagnus = arsMagnusMayores[i];
        arrayArsMagnus.push(new OpcionMostrable(_l(arsMagnus.getNombre()),arsMagnus.getNombre(),GRUPO_ARS_MAGNUS_MAYORES,arsMagnus.getCostePD(personaje_actual) + " " + _l(UDS_PD) + "<hr>" + arsMagnus.getCosteCM() + " " + _l(UDS_CM)));
    }
    for (i=0;i<arsMagnusArmasImposibles.length;i++) {
        arsMagnus = arsMagnusArmasImposibles[i];
        arrayArsMagnus.push(new OpcionMostrable(_l(arsMagnus.getNombre()),arsMagnus.getNombre(),GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES,arsMagnus.getCostePD(personaje_actual) + " " + _l(UDS_PD) + "<hr>" + arsMagnus.getCosteCM() + " " + _l(UDS_CM)));
    }
    for (i=0;i<arsMagnusSellosDragon.length;i++) {
        arsMagnus = arsMagnusSellosDragon[i];
        arrayArsMagnus.push(new OpcionMostrable(_l(arsMagnus.getNombre()),arsMagnus.getNombre(),GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON,arsMagnus.getCostePD(personaje_actual) + " " + _l(UDS_PD) + "<hr>" + arsMagnus.getCosteCM() + " " + _l(UDS_CM)));
    }

    muestraDialogoElegirOpciones(arrayArsMagnus, {}, {principal: aplicarArsMagnus, isDisabled: arsMagnusNoComprable}, true, categorias);
}

/**
 *
 * @param {{opcion:string}} parametros
 * @returns {boolean}
 */
function arsMagnusNoComprable(parametros) {
    var arsMagnus = getArsMagnus(parametros.opcion);

    return ( (!arsMagnus.cumpleRequisitos(personaje_actual)) || (personaje_actual.hasArsMagnus(parametros.opcion)) );
}



