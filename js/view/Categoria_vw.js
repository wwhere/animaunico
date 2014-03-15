var DIV_DIALOG_ELEGIR_CATEGORIA = "#dialogElegirCategoria";
var DESTINO_EXPLICACION_CATEGORIA = "explicacionCategoria";

/**
 *
 */
function dialogoElegirCategoria() {
    var dialogElegirCategoria = $(DIV_DIALOG_ELEGIR_CATEGORIA);
    dialogElegirCategoria.empty();

    dialogElegirCategoria.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: true,
        closeOnEscape: true,
        ////show: "puff",
        title: _l(DIAG_ELEGIR_CATEGORIA_TITULO),
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO
    });



    var gridCategorias = $("<ul></ul>").addClass("four_up tiles");

    for (var i = 0; i < categorias_set.length ; i++) {
        var categoria = categorias_set[i];

        var divCategoria = boton("big primary btn pretty",_l(categoria.getNombre()),!puedeElegirCategoria(categoria.getNombre()));
        divCategoria.css("width","100%");

        gridCategorias.append( $("<li></li>").append(divCategoria));

        divCategoria.on("click", {categoria:categoria}, function(event) {
            dialogElegirCategoria.dialog("close");
            aplicarCategoria(event.data.categoria);
        });

        divCategoria.on("mouseenter", {categoria:categoria}, mostrarDetallesCategoria);
    }

    dialogElegirCategoria.append(gridCategorias);

    var divExplicacion = $("<div></div>");
    divExplicacion.addClass(CSS_CLASS_EXPLICACION_CATEGORIA);
    divExplicacion.attr("id",DESTINO_EXPLICACION_CATEGORIA);
    dialogElegirCategoria.append(divExplicacion);
}

/**
 *
 * @param {jQuery} elementoBase
 * @param {Categoria} categoria
 */
function mostrarCostesReducidosCategoria(elementoBase, categoria) {
    var divCostesReducidos = $("<div></div>");
    divCostesReducidos.addClass(CSS_MUESTRA_BLOCK);
    divCostesReducidos.addClass(CSS_TEXTO_FUERTE);
    divCostesReducidos.append(_l(UI_COSTES_REDUCIDOS));
    elementoBase.append(divCostesReducidos);
    var costesReducidos = categoria.getCostesReducidos();
    if (costesReducidos.length == 0) {
        var divCostesReducidosNinguno = $("<div></div>");
        divCostesReducidosNinguno.addClass(CSS_MUESTRA_BLOCK);
        divCostesReducidosNinguno.append(_l(UI_NINGUNO));
        elementoBase.append(divCostesReducidosNinguno);
    } else {
        for (var i = 0; i < costesReducidos.length; i++) {
            var _costeReducido = costesReducidos[i];

            var divCosteRed = $("<div></div>");
            divCosteRed.addClass(CSS_MUESTRA_BLOCK);
            var divCosteRedEti = $("<div></div>");
            divCosteRedEti.addClass(CSS_MUESTRA_INLINE);
            divCosteRedEti.addClass(CSS_TEXTO_FUERTE);
            divCosteRedEti.append(_l(_costeReducido.getNombre()) + ": ");
            var divCosteRedTex = $("<div></div>");
            divCosteRedTex.addClass(CSS_MUESTRA_INLINE);
            divCosteRedTex.append(_costeReducido.getCoste());
            divCosteRed.append(divCosteRedEti).append(divCosteRedTex);
            elementoBase.append(divCosteRed);
        }
    }
}

/**
 *
 * @param {jQuery} elemento
 * @param {Categoria} categoria
 */
function mostrarBonosInnatosCategoria(elemento, categoria) {
    var divBonosInnatos = $("<div></div>");
    divBonosInnatos.addClass(CSS_MUESTRA_BLOCK);
    divBonosInnatos.addClass(CSS_TEXTO_FUERTE);
    divBonosInnatos.append(_l(UI_BONOS_INNATOS));
    elemento.append(divBonosInnatos);
    var bonosInnatos = categoria.getBonosInnatos();
    if (bonosInnatos.length == 0) {
        var divBonosInnatosNinguno = $("<div></div>");
        divBonosInnatosNinguno.addClass(CSS_MUESTRA_BLOCK);
        divBonosInnatosNinguno.append(_l(UI_NINGUNO));
        elemento.append(divBonosInnatosNinguno);
    } else {
        for (var i = 0; i < bonosInnatos.length; i++) {
            var _bonoInnato = bonosInnatos[i];

            var divBonoInn = $("<div></div>");
            divBonoInn.addClass(CSS_MUESTRA_BLOCK);
            var divBonoInnEti = $("<div></div>");
            divBonoInnEti.addClass(CSS_MUESTRA_INLINE);
            divBonoInnEti.addClass(CSS_TEXTO_FUERTE);
            divBonoInnEti.append(_l(_bonoInnato.item) + ": ");
            var divBonoInnTex = $("<div></div>");
            divBonoInnTex.addClass(CSS_MUESTRA_INLINE);
            divBonoInnTex.append("+" + _bonoInnato.bono + " " + _l(UI_POR_NIVEL));
            divBonoInn.append(divBonoInnEti).append(divBonoInnTex);
            elemento.append(divBonoInn);

        }
    }
}

/**
 *
 * @param {jQuery} elemento
 * @param {Categoria} categoria
 */
function mostrarDescripcionCategoria(elemento, categoria) {
    var descripcion = categoria.getDescripcion();
    var divDescripcion = $("<div></div>");
    divDescripcion.addClass(CSS_TEXTO_ITALIC);
    divDescripcion.addClass(CSS_MUESTRA_BLOCK);
    divDescripcion.append(_l(descripcion));
    elemento.append(divDescripcion);
}

/**
 *
 * @param {jQuery} elemento
 * @param {Categoria} categoria
 */
function mostrarArquetipoCategoria(elemento, categoria) {
    var arquetipo = categoria.getArquetipo().toString();
    var divArquetipo = $("<div></div>");
    divArquetipo.addClass(CSS_MUESTRA_BLOCK);
    var divArqEti = $("<div></div>");
    divArqEti.addClass(CSS_MUESTRA_INLINE);
    divArqEti.addClass(CSS_TEXTO_FUERTE);
    divArqEti.append(_l(UI_ARQUETIPO) + ": ");
    var divArqTex = $("<div></div>");
    divArqTex.addClass(CSS_MUESTRA_INLINE);
    divArqTex.append(arquetipo);
    divArquetipo.append(divArqEti).append(divArqTex);
    elemento.append(divArquetipo);
}

/**
 *
 * @param {jQuery} elementoUno
 * @param {jQuery} elementoDos
 * @param {Categoria} categoria
 */
function mostrarCostesCategoria(elementoUno, elementoDos, categoria) {
    var costes = categoria.getCostes();
    for (var i = 0; i < costes.length; i++) {
        var _coste = costes[i];

        var divCoste = $("<div></div>");
        divCoste.addClass(CSS_MUESTRA_BLOCK);
        var divCosteEti = $("<div></div>");
        divCosteEti.addClass(CSS_MUESTRA_INLINE);
        divCosteEti.addClass(CSS_TEXTO_FUERTE);
        divCosteEti.append(_l(_coste.getNombre()) + ": ");
        var divCosteTex = $("<div></div>");
        divCosteTex.addClass(CSS_MUESTRA_INLINE);
        divCosteTex.append(_coste.getCoste());
        divCoste.append(divCosteEti).append(divCosteTex);
        if (i < costes.length / 2) {
            elementoUno.append(divCoste);
        } else {
            elementoDos.append(divCoste);
        }

    }
}

/**
 *
 * @param {{}} event
 */
function mostrarDetallesCategoria(event) {
    var categoriaAct = event.data.categoria;

    var divGeneral = $("<div></div>");
    divGeneral.addClass(CSS_TEXTO_SMALLER);

    var divIzquierda = $("<div></div>");
    divIzquierda.addClass(CSS_FLOAT_LEFT);
    divIzquierda.css("width","50%");
    divIzquierda.css("margin-right","1em");

    var divDerecha = $("<div></div>");
    divDerecha.addClass(CSS_FLOAT_LEFT);
    divDerecha.css("width","40%");

    mostrarDescripcionCategoria(divIzquierda, categoriaAct);
    mostrarArquetipoCategoria(divIzquierda, categoriaAct);
    mostrarCostesCategoria(divIzquierda, divDerecha, categoriaAct);
    mostrarCostesReducidosCategoria(divDerecha, categoriaAct);
    mostrarBonosInnatosCategoria(divDerecha, categoriaAct);

    divGeneral.append(divIzquierda).append(divDerecha);

    $("#"+DESTINO_EXPLICACION_CATEGORIA).empty().append(divGeneral);
}
