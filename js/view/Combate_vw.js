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
        categorias.push(new OpcionMostrable(_l(CATEGORIAS_TABLAS_ARMAS[i]),CATEGORIAS_TABLAS_ARMAS[i],CATEGORIAS_TABLAS_ARMAS[i]+"ElegirTablaArmas"));
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
    return personaje_actual.hasTablaArmas(nombreTabla);
}


