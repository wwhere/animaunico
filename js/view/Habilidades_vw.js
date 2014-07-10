/**
 * Devuelve un div con la ui para mostrar y elegir los bonos de habilidad natural
 * @returns {jQuery}
 */
function mostrarBonosHabilidadNatural() {
    var divRetorno = getDiv();
    for (var i = 0; i < 5; i++) {
        var div = $("<div></div>");

        var etiqu = $("<div></div>");
        etiqu.addClass(CSS_MUESTRA_INLINE);
        etiqu.append(_l(UI_HABILIDAD_NATURAL) + " " + (i + 1) + ": ");

        var divNombre = $("<div></div>");
        divNombre.attr("id", "habilidadNaturalElegida" + i);
        divNombre.addClass(CSS_MUESTRA_INLINE);
        if (personaje_actual.getBonoHabilidadNatural(i, personaje_actual.getNivel()) != -1) {
            var nombreElegido = personaje_actual.getBonoHabilidadNatural(i, personaje_actual.getNivel()).getItem();
            divNombre.append(_l(nombreElegido));
        }
        etiqu.append(divNombre);

        div.append(etiqu);

        var botonBono = boton("medium pretty primary btn", _l(UI_ELEGIR));
        div.append(botonBono);

        botonBono.on("click", {indice: i, nivel: personaje_actual.getNivel()}, elegirHabilidadNatural);

        divRetorno.append(div);
    }
    return divRetorno;
}

function mostrarBonificadoresNaturales() {
    /*bonificador natural físico*/
    var divBonificadoresNaturales = $("<div></div>");

    var divFisico = $("<div></div>");

    var etiquFisico = $("<div></div>");
    etiquFisico.addClass(CSS_MUESTRA_INLINE);
    etiquFisico.append(_l(UI_BONIFICADOR_NATURAL_FISICO) + ": ");

    var divNombreFisico = $("<div></div>");
    divNombreFisico.addClass(CSS_MUESTRA_INLINE);
    divNombreFisico.attr("id", "bonificadorNaturalElegido" + TIPO_BONIFICADOR_NATURAL_FISICO);

    if (personaje_actual.getBonificadorNatural(TIPO_BONIFICADOR_NATURAL_FISICO, 1) != "") {
        var nombreElegidoFisico = personaje_actual.getBonificadorNatural(TIPO_BONIFICADOR_NATURAL_FISICO, 1);
        divNombreFisico.append(_l(nombreElegidoFisico));
    }
    etiquFisico.append(divNombreFisico);
    divFisico.append(etiquFisico);

    var botonFisico = boton("medium pretty primary btn", _l(UI_ELEGIR));
    divFisico.append(botonFisico);
    divBonificadoresNaturales.append(divFisico);

    botonFisico.on("click", {tipo: TIPO_BONIFICADOR_NATURAL_FISICO}, elegirBonificadorNatural);


    /*bonificador natural mental*/
    var divMental = $("<div></div>");

    var etiquMental = $("<div></div>");
    etiquMental.addClass(CSS_MUESTRA_INLINE);
    etiquMental.append(_l(UI_BONIFICADOR_NATURAL_MENTAL) + ": ");

    var divNombreMental = $("<div></div>");
    divNombreMental.addClass(CSS_MUESTRA_INLINE);
    divNombreMental.attr("id", "bonificadorNaturalElegido" + TIPO_BONIFICADOR_NATURAL_MENTAL);

    if (personaje_actual.getBonificadorNatural(TIPO_BONIFICADOR_NATURAL_MENTAL, 1) != "") {
        var nombreElegidoMental = personaje_actual.getBonificadorNatural(TIPO_BONIFICADOR_NATURAL_MENTAL, 1);
        divNombreMental.append(_l(nombreElegidoMental));
    }
    etiquMental.append(divNombreMental);

    divMental.append(etiquMental);


    var botonMental = boton("medium pretty primary btn", _l(UI_ELEGIR));
    divMental.append(botonMental);

    divBonificadoresNaturales.append(divMental);
    botonMental.on("click", {tipo: TIPO_BONIFICADOR_NATURAL_MENTAL}, elegirBonificadorNatural);

    if (personaje_actual.hasFlag(FLAG_BONO_NATURAL_EXTRA)) {
        /*bonificador natural extra*/
        var divExtra = $("<div></div>");

        var etiquExtra = $("<div></div>");
        etiquExtra.addClass(CSS_MUESTRA_INLINE);
        etiquExtra.append(_l(UI_BONIFICADOR_NATURAL_EXTRA) + ": ");

        var divNombreExtra = $("<div></div>");
        divNombreExtra.addClass(CSS_MUESTRA_INLINE);
        divNombreExtra.attr("id", "bonificadorNaturalElegido" + TIPO_BONIFICADOR_NATURAL_EXTRA);

        if (personaje_actual.getBonificadorNatural(TIPO_BONIFICADOR_NATURAL_EXTRA, 1) != "") {
            var nombreElegidoExtra = personaje_actual.getBonificadorNatural(TIPO_BONIFICADOR_NATURAL_EXTRA, 1);
            divNombreExtra.append(_l(nombreElegidoExtra));
        }
        etiquExtra.append(divNombreExtra);

        divExtra.append(etiquExtra);


        var botonExtra = boton("medium pretty primary btn", _l(UI_ELEGIR));
        divExtra.append(botonExtra);

        divBonificadoresNaturales.append(divExtra);
        botonExtra.on("click", {tipo: TIPO_BONIFICADOR_NATURAL_EXTRA}, elegirBonificadorNatural);
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

