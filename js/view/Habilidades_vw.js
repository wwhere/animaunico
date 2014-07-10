/**
 * Devuelve un div con la ui para mostrar y elegir los bonos de habilidad natural
 * @returns {jQuery}
 */
function mostrarBonosHabilidadNatural() {
    var divRetorno = getDiv();

    //Para cada nivel
    for (var n = 1; n <= personaje_actual.getNivel(); n++) {
        var divNivel = getDiv();
        var etiquetaNivel = getDiv(CSS_MUESTRA_BLOCK).addClass(CSS_TEXTO_FUERTE).append(_l(UI_NIVEL) + " " + n);
        divNivel.append(etiquetaNivel);

        //Se muestran las cinco elecciones de bono
        for (var i = 0; i < 5; i++) {
            var div = getDiv();
            var etiqu = getDiv(CSS_MUESTRA_INLINE).append(_l(UI_HABILIDAD_NATURAL) + " " + (i + 1) + ": ");

            var divNombre = getDiv(CSS_MUESTRA_INLINE).attr("id", "habilidadNaturalElegida" + i  + "_" + n);

            if (personaje_actual.getBonoHabilidadNatural(i, n) != -1) {
                var nombreElegido = personaje_actual.getBonoHabilidadNatural(i, n).getItem();
                divNombre.append(_l(nombreElegido));
            }
            etiqu.append(divNombre);

            div.append(etiqu);

            var botonBono = boton("medium pretty primary btn", _l(UI_ELEGIR));
            div.append(botonBono);

            botonBono.on("click", {indice: i, nivel: n}, elegirHabilidadNatural);

            divNivel.append(div);
        }

        divRetorno.append(divNivel);
    }
    return divRetorno;
}

function mostrarBonificadorNaturalEspecifico(etiqueta,tipo, n) {
    var divBonificador = getDiv();
    var divEtiqueta = getDiv(CSS_MUESTRA_INLINE).append(_l(etiqueta) + ": ");
    var divNombre = getDiv(CSS_MUESTRA_INLINE).attr("id", "bonificadorNaturalElegido" + tipo + "_" + n);

    var bono = personaje_actual.getBonificadorNatural(tipo, n);
    if (bono != "") {
        divNombre.append(_l(bono));
    }
    divEtiqueta.append(divNombre);
    divBonificador.append(divEtiqueta);

    var boton = boton("medium pretty primary btn", _l(UI_ELEGIR));
    boton.on("click", {tipo: tipo, nivel: n}, elegirBonificadorNatural);

    divBonificador.append(boton);

    return divBonificador;
}

function mostrarBonificadoresNaturales() {
    var divBonificadoresNaturales = getDiv();

    //Para cada nivel
    for (var n = 1; n <= personaje_actual.getNivel(); n++) {
        var divNivel = getDiv();
        var etiquetaNivel = getDiv(CSS_MUESTRA_BLOCK).addClass(CSS_TEXTO_FUERTE).append(_l(UI_NIVEL) + " " + n);
        divNivel.append(etiquetaNivel);

        /*bonificador natural físico*/
        divNivel.append(mostrarBonificadorNaturalEspecifico(UI_BONIFICADOR_NATURAL_FISICO,TIPO_BONIFICADOR_NATURAL_FISICO,n));

        /*bonificador natural mental*/
        divNivel.append(mostrarBonificadorNaturalEspecifico(UI_BONIFICADOR_NATURAL_MENTAL,TIPO_BONIFICADOR_NATURAL_MENTAL,n));

        /*bonificador natural extra*/
        if (personaje_actual.hasFlag(FLAG_BONO_NATURAL_EXTRA)) {
            /*bonificador natural extra*/
            divNivel.append(mostrarBonificadorNaturalEspecifico(UI_BONIFICADOR_NATURAL_EXTRA,TIPO_BONIFICADOR_NATURAL_EXTRA,n));
        }

        divBonificadoresNaturales.append(divNivel);
    }
    return divBonificadoresNaturales;
}

function mostrarBonosNovel() {
    var divRetorno = getDiv();
    for (var i = 0; i < 5; i++) {
        var divNovel = $("<div></div>");

        var etiquNovel = $("<div></div>");
        etiquNovel.addClass(CSS_MUESTRA_INLINE);
        etiquNovel.append(_l(UI_BONO_NOVEL) + " " + (i + 1) + ": ");

        var divNombreNovel = $("<div></div>");
        divNombreNovel.attr("id", "habilidadNaturalElegidaNovel" + i);
        divNombreNovel.addClass(CSS_MUESTRA_INLINE);
        if (personaje_actual.getBonoNovel(i, personaje_actual.getNivel()) != "") {
            var nombreElegidoNovel = personaje_actual.getBonoNovel(i, personaje_actual.getNivel());
            divNombreNovel.append(_l(nombreElegidoNovel));
        }
        etiquNovel.append(divNombreNovel);

        divNovel.append(etiquNovel);

        var botonNovel = boton("medium pretty primary btn", _l(UI_ELEGIR));
        botonNovel.css("cursor", "pointer");
        divNovel.append(botonNovel);

        botonNovel.on("click", {indice: i, nivel: personaje_actual.getNivel()}, elegirBonoNovel);

        divRetorno.append(divNovel);
    }
    return divRetorno;
}

/**
 * Muestra el diálogo para elegir los bonos naturales
 */
function dialogoBonosNaturales() {
    var dialogBonosNaturales = $("#dialogBonosNaturales");

    //Preparar diálogo
    dialogBonosNaturales.empty();
    var divGeneral = getDiv();

    //Bonos de habilidad natural
    divGeneral.append(mostrarBonosHabilidadNatural());

    //Bonos naturales
    if (!personaje_actual.hasFlag(FLAG_SIN_BONIFICADOR_NATURAL)) {
        divGeneral.append(mostrarBonificadoresNaturales());
    }

    //Bonos de novel
    if (personaje_actual.getCategoria().getNombre() == CAT_NOVEL) {
        divGeneral.append(mostrarBonosNovel());
    }

    //Mostrar diálogo
    dialogBonosNaturales.append(divGeneral);
    dialogBonosNaturales.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: true,
        ////show: "puff",
        title: _l(DIAG_ELEGIR_BONOS_NATURALES_TITULO),
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true,
        buttons: [
            {
                text: "Ok",
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
        ]
    });
}

/**
 *
 * @param {string} nombreHabilidad
 * @returns {jQuery}
 */
function muestraBotonMasMenosHabilidad(nombreHabilidad) {
    var div = $("<div></div>");
    var divMas = boton("small primary pretty btn",_l("+"));
    var divMenos = boton("small secondary pretty btn",_l("-"));

//    divMas.css("width", "1rem")
  //  divMenos.css("width", "1rem")

    div.append(divMas).append(divMenos);

    divMas.on("click",{nombreHabilidad: nombreHabilidad,unidades: 1}, aumentaHabilidadClick);
    divMenos.on("click",{nombreHabilidad: nombreHabilidad,unidades: -1}, aumentaHabilidadClick);
    return div;
}

function muestraBotonElegirEspecialidad(nombreHabilidad) {
    var div = $("<div></div>");
    var divBoton = boton("small info pretty btn",_l("E"));
//    divBoton.css("width", "1rem")
    div.append(divBoton);

    divBoton.on("click",{nombreHabilidad: nombreHabilidad}, eligeEspecialidad);
    return div;
}

/**
 *
 * @param {{principal:function,isDisabled:function}} callback
 * @param {{}} parametro
 * @param {string} [soloFisicasOMentales]
 */
function muestraDialogoElegirOpcionHabilidad(callback,parametro,soloFisicasOMentales) {
    var arrayOpciones =  [];
    var categorias = [];
    var i;
    var j;
    var grupoHabi;
    var habi;

    if (!soloFisicasOMentales) {
        soloFisicasOMentales = "habNatural";
    }

    for (i = 0; i < habilidades_secundarias.length;i++) {
        grupoHabi = habilidades_secundarias[i];
        categorias.push(new OpcionMostrable(_l(habilidades_secundarias_nombres_grupos[i]),habilidades_secundarias_nombres_grupos[i]+"_tipo"+soloFisicasOMentales,habilidades_secundarias_nombres_grupos[i]+"_tipo"+soloFisicasOMentales));
        for (j = 0; j < grupoHabi.length; j++) {
            habi = getHabilidad(grupoHabi[j]);
            if ((soloFisicasOMentales == TIPO_BONIFICADOR_NATURAL_EXTRA) || (soloFisicasOMentales == "habNatural") ||
                ((soloFisicasOMentales == TIPO_BONIFICADOR_NATURAL_FISICO) && ((habi.getCaracteristica() == FUE) || (habi.getCaracteristica() == DES) || (habi.getCaracteristica() == AGI) || (habi.getCaracteristica() == CON))) ||
                ((soloFisicasOMentales == TIPO_BONIFICADOR_NATURAL_MENTAL) && ((habi.getCaracteristica() == INT) || (habi.getCaracteristica() == VOL) || (habi.getCaracteristica() == POD) || (habi.getCaracteristica() == PER)))) {
                arrayOpciones.push(new OpcionMostrable(_l(habi.getNombre()),habi.getNombre(),habilidades_secundarias_nombres_grupos[i]+"_tipo"+soloFisicasOMentales));
            }
        }
    }
    muestraDialogoElegirOpciones(arrayOpciones, parametro, {principal: callback.principal, isDisabled: callback.isDisabled}, true, categorias);
}

