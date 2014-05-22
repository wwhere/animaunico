var CATEGORIA_BASICA = "CATEGORIA_BASICA";
var CATEGORIA_AVANZADA = "CATEGORIA_AVANZADA";

/**
 *
 */
function dialogoTablasArmas() {
    var arrayTablaArmas = [];
    var categorias = [];
    var i;
    var j;

    for (i=0;i<CATEGORIAS_TABLAS_ARMAS.length;i++) {
        categorias.push(new OpcionMostrable(_l(CATEGORIAS_TABLAS_ARMAS[i]),CATEGORIAS_TABLAS_ARMAS[i]+"ElegirTablaArmas",CATEGORIAS_TABLAS_ARMAS[i]+"ElegirTablaArmas"));
    }

    for (i=0; i<tablasArmas_set.length;i++) {
        var tablaArmas = tablasArmas_set[i];
        var categoria = tablaArmas.getCategoriaTabla();


        arrayTablaArmas.push(new OpcionMostrable(_l(tablaArmas.getNombre()),tablaArmas.getNombre(),categoria+"ElegirTablaArmas",_l(tablaArmas.getDescripcion())));

    }

    muestraDialogoElegirOpciones(arrayTablaArmas, {}, {principal: aplicarTablaArmas, isDisabled: tablaArmasDisabled}, true, categorias);
}

/**
 *
 * @param {{}} parametros
 * @returns {boolean}
 */
function tablaArmasDisabled(parametros) {
    var nombreTabla = parametros.opcion;
    var tabla = getTablaArmas(nombreTabla);

    if (tabla.getTipoTabla() == TABLA_ESPECIAL) {
        return false;
    }
    return personaje_actual.hasTablaArmas(nombreTabla) || !tabla.cumpleRequisitos(personaje_actual);
}


function muestraArmas() {
    var div = getDiv(CSS_TEXTO_SMALL);

    var listaArmas = personaje_actual.getArmas();
    for (var i = 0; i < listaArmas.length ; i++) {
        var arma = listaArmas[i];

        if (!arma.isEquipado())
            continue;

        var divRow = getDiv("row");
        divRow.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_ARMA)));
        divRow.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_ATAQUE)));
        divRow.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_DEFENSA)));
        divRow.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_DAÑO_BASE)));
        divRow.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_DAÑO_FINAL)));
        divRow.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_TURNO_FINAL)));
        div.append(divRow);

        var divRowArma = getDiv("row");
        divRowArma.append(getDiv("two columns").addClass(CSS_ETIQUETA).append(arma.toString()));
        divRowArma.append(getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(getAtaqueFinalConArma(personaje_actual,arma)));
        divRowArma.append(getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(getDefensaFinalConArma(personaje_actual,arma)));
        divRowArma.append(getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(arma.getDañoBase()));
        divRowArma.append(getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(getDañoFinalConArma(personaje_actual,arma)));
        var divTurno = getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(getTurnoFinalConArma(personaje_actual,arma));
        addToolTip(divTurno,getExplicacionTurnoFinalConArma(personaje_actual,arma));
        divRowArma.append(divTurno);
        div.append(divRowArma);

        var divRow2 = getDiv("row");
        divRow2.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_VELOCIDAD)));
        divRow2.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_ENTEREZA)));
        divRow2.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_ROTURA)));
        divRow2.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_PRESENCIA)));
        divRow2.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_CRITICO_1)));
        divRow2.append(getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_CRITICO_2)));
        div.append(divRow2);

        var divRowArma2 = getDiv("row");
        divRowArma2.append(getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(arma.getVelocidad()));
        divRowArma2.append(getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(arma.getEntereza()));
        divRowArma2.append(getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(arma.getRotura()));
        divRowArma2.append(getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(arma.getPresencia()));
        divRowArma2.append(getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(_l(arma.getCriticoPrimario())));
        divRowArma2.append(getDiv("two columns").addClass(CSS_COLOR_PALIDGREEN).append(_l(arma.getCriticoSecundario())));
        div.append(divRowArma2);

        var divRow3 = getDiv("row");
        //TODO divRow3.append(getDiv("two columns").append(_l(UI_CADENCIA_DE_FUEGO)));
        divRow3.append(getDiv("twelve columns").addClass(CSS_COLOR_GRIS).append(_l(UI_ESPECIAL)));
        div.append(divRow3);

        var divRowArma3 = getDiv("row");
        //TODO divRowArma3.append(getDiv("two columns").append());
        var especial = arma.getEspecial();
        var cadenaEspecial = "";
        for (var j = 0; j < especial.length; j++) {
            cadenaEspecial += _l(especial[j]);
            if (j < especial.length-1) {
                cadenaEspecial += ", ";
            }
        }
        divRowArma3.append(getDiv("twelve columns").addClass(CSS_COLOR_PALIDGREEN).append(cadenaEspecial));
        div.append(divRowArma3);

        div.append("<hr>");
    }

    return div;
}