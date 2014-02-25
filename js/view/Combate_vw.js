var UI_ARTES_MARCIALES_BASICAS = "Artes Marciales Básicas";
var UI_ARTES_MARCIALES_AVANZADAS = "Artes Marciales Avanzadas";
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
        categorias.push(new OpcionMostrable(CATEGORIAS_TABLAS_ARMAS[i],CATEGORIAS_TABLAS_ARMAS[i]+"ElegirTablaArmas"));
    }

    for (i=0; i<tablasArmas_set.length;i++) {
        var tablaArmas = tablasArmas_set[i];
        var categoria = tablaArmas.getCategoriaTabla();


        arrayTablaArmas.push(new OpcionMostrable(tablaArmas.getNombre(),categoria+"ElegirTablaArmas",tablaArmas.getDescripcion()));

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


