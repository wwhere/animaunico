
/**
 *
 */
function dialogoCM() {
    var dialogo = $("<div></div>");

    var actualizarDialogoKi = function() {
        dialogo.empty();

        dialogo.append(muestraCM());

        dialogo.append(muestraHabilidadesKi());

        dialogo.append(muestraBotonNuevaHabilidadKi());

        dialogo.append(muestraTecnicasKi());

        dialogo.append(muestraBotonCompraTecnicaKi());

        dialogo.append(muestraBotonNuevaTecnicaKi());

    };

    actualizarDialogoKi();

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        resizable: true,
        draggable: true,
        //show: "puff",
        title: _l(DIAG_PODERES_KI),
        position: "center",
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true,
        close: function() {
            dialogo.empty();
            removeActualizador(EVENT_CHARACTER_SECCION_KI,actualizarDialogoKi);
        }
    });

    addActualizador(EVENT_CHARACTER_SECCION_KI,actualizarDialogoKi);
}

/**
 *
 * @returns {jQuery}
 */
function muestraCM() {
    var div = getDiv("");
    div.append(muestraSubtitulo(UI_CONOCIMIENTO_MARCIAL, false));
    var divCM = getDiv(CSS_ETIQUETA_EFECTO_TECNICA);
    divCM.append(muestraHabilidadPrimaria(HB_CM,_l(UI_CM),FLAG_DOMINUS_EXXET_ENABLED));
    divCM.append(getDiv(CSS_ETIQUETA_EFECTO_TECNICA).append(_l(UI_CM) + " " + _l(UI_LIBRE) + ": " + (personaje_actual.getCMTotal() - personaje_actual.getCMGastado())));
    div.append(divCM);
    return div;
}

/**
 *
 * @returns {jQuery}
 */
function muestraBotonNuevaHabilidadKi() {
    var divBotonNuevaHabilidadKi = boton("medium primary pretty btn",_l(UI_COMPRAR_HABILIDAD_KI));

    divBotonNuevaHabilidadKi.on("click", comprarHabilidadKi);

    return divBotonNuevaHabilidadKi;
}

/**
 *
 * @returns {jQuery}
 */
function muestraBotonCompraTecnicaKi() {
    var divBotonComprarTecnicaKiExistente = boton("medium primary pretty btn",_l(UI_COMPRAR_TECNICA_EXISTENTE),noPuedeComprarTecnicas());

    divBotonComprarTecnicaKiExistente.on("click", comprarTecnicaKi);

    return divBotonComprarTecnicaKiExistente;
}

/**
 *
 * @returns {jQuery}
 */
function muestraBotonNuevaTecnicaKi() {
    var divBotonNuevaTecnicaKi = boton("medium primary pretty btn",_l(UI_CREAR_TECNICA_DOMINIO),noPuedeComprarTecnicas());

    divBotonNuevaTecnicaKi.on("click", crearTecnicaKi);

    return divBotonNuevaTecnicaKi;
}

/**
 *
 * @param {TecnicaKi} tecnicaKi
 */
function muestraDialogoCrearTecnicaKi(tecnicaKi) {
    var dialogo = getDiv();
    var i;
    var j;
    var dialogInicializado = false;

    var actualizarDialogoCrearTecnica = function() {
        desactivarNotificaciones();
        comprobacionesRutinariasTecnica(tecnicaKi);
        activarNotificaciones();

        dialogo.empty();

        var divFila = getDiv("row");

        dialogo.append(divFila);

        var divListaEfectos = getDiv("four columns").addClass(CSS_TEXTO_SMALL);

        divFila.append(divListaEfectos);

        var divEfectos = getDiv();

        //region menu de efectos
        for( i = 0; i < TIPOS_EFECTOS_TECNICAS.length; i++) {
            var divCategoriaEfecto = $("<h3></h3>");
            divCategoriaEfecto.append(_l(TIPOS_EFECTOS_TECNICAS[i]));
            divEfectos.append(divCategoriaEfecto);
            var divEfectosCategoria = $("<div></div>");
            for (j = 0; j < efectosTecnicas.length; j++) {
                if (efectosTecnicas[j].getTipoEfecto() == TIPOS_EFECTOS_TECNICAS[i]) {
                    var divFilaEfectos = $("<div></div>").addClass("row");

                    var divEfectoNombre = $("<div></div>").addClass("seven columns");

                    divEfectoNombre.append(_l(efectosTecnicas[j].getNombre()));

                    var divEfectoCompraPrim = $("<div></div>").addClass("two columns");

                    var botonAñadePrimaria = boton("small primary pretty btn",_l("1ª"),!puedeComprarseEfecto(tecnicaKi,efectosTecnicas[j],true));
                    divEfectoCompraPrim.append(botonAñadePrimaria);
                    botonAñadePrimaria.on("click",{tecnicaKi:tecnicaKi, efecto:efectosTecnicas[j]},añadeEfectoPrimarioTecnica);

                    var divEfectoCompraSec = $("<div></div>").addClass("push_one two columns");

                    var botonAñadeSecundaria = boton("small secondary pretty btn",_l("2ª"),!puedeComprarseEfecto(tecnicaKi,efectosTecnicas[j],false));
                    divEfectoCompraSec.append(botonAñadeSecundaria);
                    botonAñadeSecundaria.on("click",{tecnicaKi:tecnicaKi, efecto:efectosTecnicas[j]},añadeEfectoSecundarioTecnica);

                    divFilaEfectos.append(divEfectoNombre).append(divEfectoCompraPrim).append(divEfectoCompraSec);

                    divEfectosCategoria.append(divFilaEfectos);
                }
            }
            divEfectos.append(divEfectosCategoria);
        }

        var divCategoriaDesventaja = $("<h3></h3>");
        divCategoriaDesventaja.append(_l(UI_DESVENTAJAS));
        divEfectos.append(divCategoriaDesventaja);
        var divListaDesventajas = $("<div></div>");
        for (j = 0; j < desventajasTecnicas.length; j++) {
            var divFilaDesventajas = $("<div></div>").addClass("row");

            var divDesventajaNombre = $("<div></div>").addClass("nine columns");

            divDesventajaNombre.append(_l(desventajasTecnicas[j].getNombre()));

            var divDesventajaCompra = $("<div></div>").addClass("three columns");

            var botonAñadeDesventaja = boton("small primary pretty btn",_l("+"),!puedeAñadirseDesventajaATecnica(tecnicaKi,desventajasTecnicas[i]));

            divDesventajaCompra.append(botonAñadeDesventaja);
            botonAñadeDesventaja.on("click",{tecnicaKi:tecnicaKi, desventaja:desventajasTecnicas[j]},añadeDesventajaTecnica);

            divFilaDesventajas.append(divDesventajaNombre).append(divDesventajaCompra);

            divListaDesventajas.append(divFilaDesventajas);
        }
        divEfectos.append(divListaDesventajas);

        divListaEfectos.append(divEfectos);

        //endregion menu de efectos

        var divResumenTecnica = getDiv("eight columns");

        var divDatosTecnica = getDiv();

        divResumenTecnica.append(divDatosTecnica);

        var divNombre = $("<div></div>").append(muestraPersonal(_l(UI_NOMBRE), tecnicaKi.getNombre(), true, elegirManualNombreTecnica, {tecnicaKi:tecnicaKi}));
        var divNivel  = $("<div></div>").append(muestraPersonal(_l(UI_NIVEL), tecnicaKi.getNivel(), true, elegirNivelTecnica, {tecnicaKi:tecnicaKi}));
        var divCoste = $("<div></div>").append(_l(UI_CM) + ": " + tecnicaKi.getCosteCM() + " / " + _l(UI_CM) + " " + _l(UI_MINIMO) + ": " + tecnicaKi.getMinCM() + " / " + _l(UI_CM) + " " + _l(UI_MAXIMO) + ": " + tecnicaKi.getMaxCM());
        var divDescripcion = $("<div></div>").append(muestraPersonal(_l(UI_DESCRIPCION), tecnicaKi.getDescripcion(), true, elegirManualDescripcionTecnica, {tecnicaKi:tecnicaKi}));
        var divCosteKi = $("<div></div>").append(muestraPersonal(_l(UI_COSTE_KI), tecnicaKi.getCosteKi().toString(), false));
        var divIsMantenida = $("<div></div>");
        if (tecnicaKi.isMantenida()) {
            divIsMantenida.append(muestraPersonal(_l(UI_MANTENIDA) + ". " + _l(UI_COSTE_MANTENIMIENTO), tecnicaKi.getCosteMantenimiento().toString(), false));
        }

        var divEfectosDeLaTecnica = $("<div></div>").append(_l(UI_EFECTOS_DE_LA_TECNICA)  + ":").addClass(CSS_TEXTO_SMALL);

        var filaEncabezados = $("<div></div>").addClass("row");
        var encabezadoNombre = $("<div></div>").addClass("three columns").append(_l(UI_EFECTO));
        var encabezadoCM = $("<div></div>").addClass("one columns").append(_l(UI_CM));
        var encabezadoKi = $("<div></div>").addClass("three columns").append(_l(UI_KI));
        var encabezadoMantenimiento = $("<div></div>").addClass("three columns").append(_l(UI_MANTENIMIENTO));
        var encabezadoBotonesVentajas = $("<div></div>").addClass("one columns").append(_l(UI_VENTAJAS));
        var encabezadoBoton = $("<div></div>").addClass("one columns").append(_l(UI_BORRAR));

        filaEncabezados.append(encabezadoNombre).append(encabezadoCM).append(encabezadoKi).append(encabezadoMantenimiento).append(encabezadoBotonesVentajas).append(encabezadoBoton);

        divEfectosDeLaTecnica.append(filaEncabezados);

        var ventajasOpcionalesElegidas;
        var efectoPrimario =tecnicaKi.getEfectoPrimario();
        if (efectoPrimario) {
            divEfectosDeLaTecnica.append(muestraEfectoTecnica(efectoPrimario,tecnicaKi, false));
            ventajasOpcionalesElegidas = efectoPrimario.getVentajasOpcionalesElegidas();
            for (i = 0;i<ventajasOpcionalesElegidas.length;i++) {
                divEfectosDeLaTecnica.append(muestraVentajaOpcionalEfectoTecnica(ventajasOpcionalesElegidas[i],efectoPrimario,tecnicaKi,true));
            }
        }
        var efectosSecundarios = tecnicaKi.getEfectosSecundarios();
        for (i = 0; i < efectosSecundarios.length;i++) {
            divEfectosDeLaTecnica.append(muestraEfectoTecnica(efectosSecundarios[i],tecnicaKi, true));
            ventajasOpcionalesElegidas = efectosSecundarios[i].getVentajasOpcionalesElegidas();
            for (j = 0;j<ventajasOpcionalesElegidas.length;j++) {
                divEfectosDeLaTecnica.append(muestraVentajaOpcionalEfectoTecnica(ventajasOpcionalesElegidas[j],efectosSecundarios[i],tecnicaKi,true));
            }
        }

        var filaEncabezadosDesv = $("<div></div>").addClass("row");
        var encabezadoNombreDesv = $("<div></div>").addClass("four columns").append(_l(UI_DESVENTAJA));
        var encabezadoCMDesv = $("<div></div>").addClass("seven columns").append(_l(UI_CM));
        var encabezadoBotonDesv = $("<div></div>").addClass("one columns").append(_l(UI_BORRAR));

        filaEncabezadosDesv.append(encabezadoNombreDesv).append(encabezadoCMDesv).append(encabezadoBotonDesv);

        var divDesventajas = $("<div></div>").append(_l(UI_DESVENTAJAS_DE_LA_TECNICA) + "(" + _l(UI_MAX) + " " + tecnicaKi.getMaxDesventajas() + "):").addClass(CSS_TEXTO_SMALL);

        divDesventajas.append(filaEncabezadosDesv);

        var desventajas = tecnicaKi.getDesventajas();
        for (i = 0; i < desventajas.length;i++) {
            divDesventajas.append(muestraDesventajaTecnica(desventajas[i],tecnicaKi,true));
        }

        divResumenTecnica.append(divNombre).append(divNivel).append(divDescripcion).append(divCoste).append(divCosteKi).append(divIsMantenida).append(divEfectosDeLaTecnica).append(divDesventajas);

        divFila.append(divResumenTecnica);

        /*** poder aumentar/disminuir CM y ki */
        divFila.append(muestraBotonPequeño(_l(UI_AUMENTAR_KI_DISMINUIR_CM),{tecnicaKi: tecnicaKi},dialogoAumentarKi,""));
        if (tecnicaKi.getTotalAumentosKi() > 0)
            divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " +5 " + _l(UI_CM),{tecnicaKi: tecnicaKi},dialogoAnularAumentoKi,""));
        
        var costeKi = tecnicaKi.getCosteKi();
        if (costeKi.numCaracteristicasBase() >= 3) {
            divFila.append(muestraBotonPequeño(_l(UI_AUMENTAR_CM_DISMINUIR_KI),{tecnicaKi: tecnicaKi},dialogoAumentarCM,""));

            if (tecnicaKi.kiReducidos[AGI] != 0)
                divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(AGI),{tecnicaKi: tecnicaKi, caracteristica: AGI},anularAumentoCM,""));
            if (tecnicaKi.kiReducidos[DES] != 0)
                divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(DES),{tecnicaKi: tecnicaKi, caracteristica: DES},anularAumentoCM,""));
            if (tecnicaKi.kiReducidos[CON] != 0)
                divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(CON),{tecnicaKi: tecnicaKi, caracteristica: CON},anularAumentoCM,""));
            if (tecnicaKi.kiReducidos[FUE] != 0)
                divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(FUE),{tecnicaKi: tecnicaKi, caracteristica: FUE},anularAumentoCM,""));
            if (tecnicaKi.kiReducidos[POD] != 0)
                divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(POD),{tecnicaKi: tecnicaKi, caracteristica: POD},anularAumentoCM,""));
            if (tecnicaKi.kiReducidos[VOL] != 0)
                divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(VOL),{tecnicaKi: tecnicaKi, caracteristica: VOL},anularAumentoCM,""));

        }

        divEfectos.accordion({
            heightStyle: "content"
        });

        if (dialogInicializado) {
            dialogo.dialog("option", "buttons", [{
                text: _l(UI_CREAR),
                disabled: !(tecnicaKi.isCorrecta() && personaje_actual.puedeComprarTecnicaKi(tecnicaKi)),
                click: function() {
                    dialogo.dialog( "close" );
                    personaje_actual.addTecnicaKi(tecnicaKi);
                    personaje_actual.addCMGastado(tecnicaKi.getCosteCM());
                }}]);
        }
    };

    actualizarDialogoCrearTecnica();

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        resizable: true,
        draggable: true,
        //show: "puff",
        title: _l(DIAG_CREACION_TECNICA),
        position: "center",
        width: ANCHO_COMPLETO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true,
        close: function() {
            dialogo.empty();
            removeActualizador(EVENT_TECNICA_CREACION,actualizarDialogoCrearTecnica);
        },
        buttons: [
            {
                text: _l(UI_CREAR),
                disabled: !(tecnicaKi.isCorrecta() && personaje_actual.puedeComprarTecnicaKi(tecnicaKi)),
                click: function() {
                    dialogo.dialog( "close" );
                    personaje_actual.addTecnicaKi(tecnicaKi);
                    personaje_actual.addCMGastado(tecnicaKi.getCosteCM());
                }
            }
        ]
    });
    dialogInicializado = true;

    addActualizador(EVENT_TECNICA_CREACION,actualizarDialogoCrearTecnica);
}

function dialogoAnularAumentoKi(event) {
    var opciones = [];
    if (event.data.tecnicaKi.kiAumentados[AGI] > 0) 
        opciones.push(AGI);
    if (event.data.tecnicaKi.kiAumentados[DES] > 0)
        opciones.push(DES);
    if (event.data.tecnicaKi.kiAumentados[CON] > 0)
        opciones.push(CON);
    if (event.data.tecnicaKi.kiAumentados[FUE] > 0)
        opciones.push(FUE);
    if (event.data.tecnicaKi.kiAumentados[POD] > 0)
        opciones.push(POD);
    if (event.data.tecnicaKi.kiAumentados[VOL] > 0)
        opciones.push(VOL);
    if (event.data.tecnicaKi.kiAumentados[AGI] > 1)
        opciones.push(AGI);
    if (event.data.tecnicaKi.kiAumentados[DES] > 1)
        opciones.push(DES);
    if (event.data.tecnicaKi.kiAumentados[CON] > 1)
        opciones.push(CON);
    if (event.data.tecnicaKi.kiAumentados[FUE] > 1)
        opciones.push(FUE);
    if (event.data.tecnicaKi.kiAumentados[POD] > 1)
        opciones.push(POD);
    if (event.data.tecnicaKi.kiAumentados[VOL] > 1)
        opciones.push(VOL);
    var gruposOpciones = [
        new GrupoOpciones(_l(UI_CANCELAR_MENOS_UNO_A_DOS_CARAC),opciones,2)
    ];
    dialogoSeleccionMultiple(gruposOpciones,{tecnicaKi: event.data.tecnicaKi},anularAumentoKi);
}

function anularAumentoKi(parametros) {
    parametros.tecnicaKi.removeAumentoKi(parametros.gruposOpciones[0].opcionesElegidas[0],parametros.gruposOpciones[0].opcionesElegidas[1]);
}

function anularAumentoCM(event) {
    event.data.tecnicaKi.removeAumentoCM(event.data.caracteristica);
}

function comprobacionesRutinariasTecnica(tecnica) {
    if ((tecnica.getCosteKi().numCaracteristicasBase() < 3) && (tecnica.getTotalAumentosCM() > 0)) {
        tecnica.quitarAumentosCM();
    }
}

function dialogoAumentarKi(event) {
    var opciones = [];
    var coste = event.data.tecnicaKi.getCosteKi();
    if (coste.getCoste(AGI) > 0) {
        opciones.push(AGI);
        opciones.push(AGI);
    }
    if (coste.getCoste(DES) > 0) {
        opciones.push(DES);
        opciones.push(DES);
    }
    if (coste.getCoste(CON) > 0) {
        opciones.push(CON);
        opciones.push(CON);
    }
    if (coste.getCoste(POD) > 0) {
        opciones.push(POD);
        opciones.push(POD);
    }
    if (coste.getCoste(VOL) > 0) {
        opciones.push(VOL);
        opciones.push(VOL);
    }
    if (coste.getCoste(FUE) > 0) {
        opciones.push(FUE);
        opciones.push(FUE);
    }
    var gruposOpciones = [
        new GrupoOpciones(_l(UI_APLICAR_MENOS_UNO_A_DOS_CARAC),opciones,2)
    ];
    dialogoSeleccionMultiple(gruposOpciones,{tecnicaKi: event.data.tecnicaKi},aumentarKiDisminuirCM);
}

function aumentarKiDisminuirCM(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    var caracteristicas = parametros.gruposOpciones[0].opcionesElegidas;

    tecnicaKi.addAumentoKi(caracteristicas[0],caracteristicas[1]);
}

function dialogoAumentarCM(event) {
    var arrayOpciones = [];

    arrayOpciones.push(new OpcionMostrable("-1 " + _l(UI_KI) + " " + _l(AGI),AGI,""));
    arrayOpciones.push(new OpcionMostrable("-1 " + _l(UI_KI) + " " + _l(DES),DES,""));
    arrayOpciones.push(new OpcionMostrable("-1 " + _l(UI_KI) + " " + _l(CON),CON,""));
    arrayOpciones.push(new OpcionMostrable("-1 " + _l(UI_KI) + " " + _l(FUE),FUE,""));
    arrayOpciones.push(new OpcionMostrable("-1 " + _l(UI_KI) + " " + _l(POD),POD,""));
    arrayOpciones.push(new OpcionMostrable("-1 " + _l(UI_KI) + " " + _l(VOL),VOL,""));

    muestraDialogoElegirOpciones(arrayOpciones,{tecnicaKi:event.data.tecnicaKi},{principal:aumentarCMDisminuirKi,isDisabled:alwaysEnabled},true);
}

function aumentarCMDisminuirKi(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    var caracteristica = parametros.opcion;

    tecnicaKi.addAumentoCM(caracteristica);
}

/**
 *
 * @param {EfectoTecnicaElegido} efectoTecnicaElegido
 * @param {boolean} anulable
 * @param {TecnicaKi} tecnicaKi
 */
function muestraEfectoTecnica(efectoTecnicaElegido, tecnicaKi, anulable) {
    var div = $("<div></div>").addClass("row");

    var divNombre = $("<div></div>").addClass("three columns");
    var contentNombre = $("<div></div>");
    contentNombre.addClass(CSS_ETIQUETA_EFECTO_TECNICA).append(efectoTecnicaElegido.getNombreCompleto());
    divNombre.append(contentNombre);

    var divCoste = $("<div></div>").addClass("one columns");
    var contentCoste = $("<div></div>");
    contentCoste.append(efectoTecnicaElegido.getCosteCM());
    divCoste.append(contentCoste);

    var divCosteKi = $("<div></div>").addClass("three columns");
    var contentCosteKi = getDiv(CSS_MUESTRA_INLINE);
    contentCosteKi.append(efectoTecnicaElegido.getCosteKi().toString());
    divCosteKi.append(contentCosteKi);
    divCosteKi.append(muestraBotonPequeño(_l(UI_ELEGIR),{costeKi:efectoTecnicaElegido.getCosteKi()},muestraDialogoRecolocacionCosteKi,""));

    var divMantenimiento = $("<div></div>").addClass("three columns");
    var subrow = $("<div></div>").addClass("row");
    var subCol1 = $("<div></div>").addClass("six columns");
    var subCol2 = $("<div></div>").addClass("six columns");
    var contentMantenimiento = $("<div></div>").addClass(CSS_FILA_EFECTO_TECNICA);
    var divCosteMantenimiento = $("<div></div>").addClass(CSS_MUESTRA_INLINE);
    if (efectoTecnicaElegido.isMantenible()) {
        var isMantenida = efectoTecnicaElegido.isMantenido();
        contentMantenimiento.attr("id",efectoTecnicaElegido.getNombre().replace(/\s+/g, '')+"_mant");
        var divBotonMantenimientoOn = $("<input>")
            .attr("type","radio")
            .attr("id",efectoTecnicaElegido.getNombre().replace(/\s+/g, '')+"_mantOn")
            .attr("name",efectoTecnicaElegido.getNombre().replace(/\s+/g, '')+"_mant");
        var labelBotonOn = $("<label></label>").attr("for",efectoTecnicaElegido.getNombre().replace(/\s+/g, '')+"_mantOn").append(_l(UI_ON));

        var divBotonMantenimientoOff = $("<input>")
            .attr("type","radio")
            .attr("id",efectoTecnicaElegido.getNombre().replace(/\s+/g, '')+"_mantOff")
            .attr("name",efectoTecnicaElegido.getNombre().replace(/\s+/g, '')+"_mant");
        var labelBotonOff = $("<label></label>").attr("for",efectoTecnicaElegido.getNombre().replace(/\s+/g, '')+"_mantOff").append(_l(UI_OFF));

        if (isMantenida) {
            divBotonMantenimientoOn.attr("checked","checked");
        } else {
            divBotonMantenimientoOff.attr("checked","checked");
        }

        contentMantenimiento.append(divBotonMantenimientoOn).append(labelBotonOn).append(divBotonMantenimientoOff).append(labelBotonOff);
        contentMantenimiento.buttonset();

        if (efectoTecnicaElegido.isMantenido()) {
            divCosteMantenimiento.append(efectoTecnicaElegido.getCosteMantenimiento().toString());
            divCosteMantenimiento.append(muestraBotonPequeño(_l(UI_ELEGIR),{costeKi:efectoTecnicaElegido.getCosteMantenimiento()},muestraDialogoRecolocacionCosteKi,""));
        }

        divBotonMantenimientoOn.on("click",{tecnicaKi:tecnicaKi,efectoTecnica:efectoTecnicaElegido,activado:true},cambiaMantenimiento);
        divBotonMantenimientoOff.on("click",{tecnicaKi:tecnicaKi,efectoTecnica:efectoTecnicaElegido,activado:false},cambiaMantenimiento);
    }
    subCol1.append(divCosteMantenimiento);
    subCol2.append(contentMantenimiento);
    subrow.append(subCol1).append(subCol2);
    divMantenimiento.append(subrow);


    var divBotonesVentajas = $("<div></div>").addClass("one columns");
    if (efectoTecnicaElegido.getVentajasOpcionales().length > 0) {
        var divBotonAddVentajaTecnica = boton("small primary pretty btn",_l("+"));

        divBotonAddVentajaTecnica.on("click",{tecnicaKi:tecnicaKi,efectoTecnica:efectoTecnicaElegido},addVentajaOpcionalEfectoTecnica);

        divBotonesVentajas.append(divBotonAddVentajaTecnica);
    }

    var divBoton = $("<div></div>").addClass("one columns");
    if (anulable) {
        divBoton.append(muestraBotonAnular(quitaEfectoSecundario,{tecnicaKi:tecnicaKi,efecto:efectoTecnicaElegido}));
    }

    div.append(divNombre).append(divCoste).append(divCosteKi).append(divMantenimiento).append(divBotonesVentajas).append(divBoton);

    return div;
}

/**
 *
 * @param {VentajaTecnicaElegida} ventajaElegida
 * @param {EfectoTecnicaElegido} efectoTecnicaElegido
 * @param {boolean} anulable
 * @param {TecnicaKi} tecnicaKi
 */
function muestraVentajaOpcionalEfectoTecnica(ventajaElegida, efectoTecnicaElegido, tecnicaKi, anulable) {
    var div = getDiv("row");

    var divNombre = getDiv("push_one two columns");
    var contentNombre= getDiv(CSS_ETIQUETA_EFECTO_TECNICA).append(_l(ventajaElegida.getNombre()));
    divNombre.append(contentNombre);

    var divCoste = getDiv("one columns");
    var contentCoste = getDiv().append("+" + ventajaElegida.getCosteCM());
    divCoste.append(contentCoste);

    var divCosteKi = getDiv("three columns");
    var contentKi = getDiv().append("+" + ventajaElegida.getCosteKi().toString());
    divCosteKi.append(contentKi);

    var divMantenimiento = getDiv("three columns");
    var contentMantenimiento= getDiv(CSS_FILA_EFECTO_TECNICA);
    divMantenimiento.append(contentMantenimiento);

    var divBoton = getDiv("push_one one columns");
    if (anulable) {
        divBoton.append(muestraBotonAnular(quitaVentajaEfecto,{tecnicaKi:tecnicaKi,efecto:efectoTecnicaElegido,ventaja:ventajaElegida}));
    }

    div.append(divNombre).append(divCoste).append(divCosteKi).append(divMantenimiento).append(divBoton);

    return div;
}

/**
 *
 * @param {{data:{tecnicaKi:TecnicaKi,efectoTecnica:EfectoTecnicaElegido}}} event
 */
function addVentajaOpcionalEfectoTecnica(event) {
    var tecnicaKi = event.data.tecnicaKi;
    var efecto = event.data.efectoTecnica;

    var arrayOpciones = [];

    var ventajasOpc = efecto.getVentajasOpcionales();

    for (var i = 0; i < ventajasOpc.length; i++) {
        arrayOpciones.push(new OpcionMostrable(_l(ventajasOpc[i].getNombre()),ventajasOpc[i].getNombre(),"",_l(ventajasOpc[i].getDescripcion())));
    }

    var parametros = {
        tecnicaKi:tecnicaKi,
        efecto:efecto
    };

    muestraDialogoElegirOpciones(arrayOpciones,parametros,{principal:ventajaEfectoTecnicaElegida,isDisabled:noPuedePonerseVentajaEfectoTecnica},true);
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi, efecto:EfectoTecnicaElegido, opcion: string}} parametros
 */
function ventajaEfectoTecnicaElegida(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    var efecto = parametros.efecto;
    var nombreVentaja = parametros.opcion;
    var ventaja = efecto.getVentajaOpcionalPorNombre(nombreVentaja);

    parametros.ventaja = ventaja;

    if (ventaja.getNivelesVentaja().length > 1) {

        var arrayOpciones = [];

        var niveles = ventaja.getNivelesVentaja();

        for (var i = 0; i < niveles.length; i++) {
            arrayOpciones.push(new OpcionMostrable(_l(niveles[i].getNombre()),niveles[i].getNombre(),"",_l(UI_CM)+": " + niveles[i].getCosteCM() + ", "+_l(UI_COSTE_KI)+": " + niveles[i].getCosteKi()));
        }

        muestraDialogoElegirOpciones(arrayOpciones,parametros,{principal:nivelVentajaEfectoTecnicaElegida,isDisabled:noPuedePonerseNivelVentajaEfectoTecnica},true);
    } else {
        parametros.opcion = ventaja.getNivelesVentaja()[0].getNombre();
        if (!noPuedePonerseNivelVentajaEfectoTecnica(parametros)) {
            nivelVentajaEfectoTecnicaElegida(parametros);
        }
    }
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi, efecto:EfectoTecnicaElegido, ventaja:VentajaTecnica, opcion: string}} parametros
 */
function nivelVentajaEfectoTecnicaElegida(parametros) {
    var tecnicaKi = parametros.tecnicaKi;
    var efecto = parametros.efecto;
    var ventaja = parametros.ventaja;
    var nivelVentaja = ventaja.getNivelPorNombre(parametros.opcion);

    var ventajaElegida = new VentajaTecnicaElegida(ventaja,nivelVentaja);

    tecnicaKi.addVentajaEfecto(efecto,ventajaElegida);
}

function noPuedePonerseNivelVentajaEfectoTecnica(parametros) {
    //TODO
    return false;
}

/**
 *
 * @param {{tecnicaKi:TecnicaKi, efecto:EfectoTecnicaElegido, opcion: string}} parametros
 */
function noPuedePonerseVentajaEfectoTecnica(parametros) {
    var puede = true;
    var tecnicaKi = parametros.tecnicaKi;
    var efecto = parametros.efecto;
    var nombreVentaja = parametros.opcion;

    var ventajasElegidas = efecto.getVentajasOpcionalesElegidas();

    for (var i = 0; i < ventajasElegidas.length; i++) {
        if (ventajasElegidas[i].getNombre() == nombreVentaja) {
            puede = false;
        }
    }

    return !puede;
}

/**
 *
 * @param {DesventajaTecnicaElegida} desventajaElegida
 * @param {boolean} anulable
 * @param {TecnicaKi} tecnicaKi
 */
function muestraDesventajaTecnica(desventajaElegida, tecnicaKi, anulable) {
    var div = $("<div></div>").addClass("row");

    var divNombre = $("<div></div>").addClass("four columns");
    divNombre.addClass(CSS_ETIQUETA_EFECTO_TECNICA).append(_l(desventajaElegida.getNombre()));

    var divCoste = $("<div></div>").addClass("seven columns");
    divCoste.append(desventajaElegida.getCosteCM());

    var divBoton = $("<div></div>").addClass("one columns");
    if (anulable) {
        divBoton.append(muestraBotonAnular(quitaDesventajaTecnica,{tecnicaKi:tecnicaKi,desventaja:desventajaElegida}));
    }

    div.append(divNombre).append(divCoste).append(divBoton);

    return div;
}

/**
 *
 * @param {CosteKi} costeKi
 */
function dialogoRecolocacionCosteKi(costeKi) {
    var dialogo = $("<div></div>");

    var actualizaDialogoColocacionKi = function() {
        dialogo.empty();

        var divFila = getDiv("row");
        var divColOrigen = getDiv("five columns");
        var divColDestino = getDiv("push_two five columns");

        var divOrigen = getDiv("");
        var divDestino = getDiv("");

        var divNombreOrigen = getDiv(CSS_TEXTO_CENTRO);
        divNombreOrigen.append(_l(costeKi.caracbase));
        var divCosteOrigen = getDiv(CSS_TEXTO_CENTRO);
        divCosteOrigen.append(costeKi.getCoste(costeKi.caracbase));

        divOrigen.append(divNombreOrigen).append(divCosteOrigen);
        divColOrigen.append(divOrigen);

        var caracsDestino = costeKi.getCaracteristicasDestino();

        for (var i = 0; i < caracsDestino.length; i++) {
            var carDest = caracsDestino[i];

            var divNombreDestino = getDiv(CSS_TEXTO_CENTRO);
            divNombreDestino.append(_l(carDest) + " (+" + costeKi.mod[carDest] + ")");
            var divCosteDestino = getDiv(CSS_TEXTO_CENTRO);
            divCosteDestino.append(costeKi.getCoste(carDest));

            var divBotones = muestraBotonMasMenosCosteKi(costeKi, carDest);

            divDestino.append(divNombreDestino).append(divCosteDestino).append(divBotones);
        }

        divColDestino.append(divDestino);

        divFila.append(divColOrigen).append(divColDestino);
        dialogo.append(divFila);
    };

    actualizaDialogoColocacionKi();

    addActualizador(EVENT_COSTE_KI_CAMBIO,actualizaDialogoColocacionKi);

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        resizable: true,
        draggable: true,
        //show: "puff",
        title: _l(DIAG_REASIGNA_COSTE_KI),
        position: "center",
        closeOnEscape: true,
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        close: function() {
            dialogo.empty();
            removeActualizador(EVENT_COSTE_KI_CAMBIO,actualizaDialogoColocacionKi);
            lanzarEvento(EVENT_TECNICA_CREACION);
        },
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
 * @returns {jQuery}
 * @param {CosteKi} costeKi
 * @param {string} caracDestino
 */
function muestraBotonMasMenosCosteKi(costeKi, caracDestino) {
    var div = $("<div></div>");
    var divMas = boton("small primary pretty btn",_l("+"));
    var divMenos = boton("small secondary pretty btn",_l("-"));

//    divMas.css("width","1rem");
  //  divMenos.css("width","1rem");

    div.append(divMas).append(divMenos);

    divMas.on("click",{costeKi: costeKi,caracDestino: caracDestino, unidades: 1}, aumentaCaracCosteKiClick);
    divMenos.on("click",{costeKi: costeKi,caracDestino: caracDestino, unidades: -1}, aumentaCaracCosteKiClick);
    return div;
}

/**
 *
 * @param {{data:{costeKi:CosteKi,caracDestino:string,unidades:number}}} event
 */
function aumentaCaracCosteKiClick(event) {
    event.data.costeKi.pasaCoste(event.data.caracDestino,event.data.unidades);
    lanzarEvento(EVENT_COSTE_KI_CAMBIO)
}

/**
 *
 * @param {{data:{costeKi:CosteKi}}} event
 */
function muestraDialogoRecolocacionCosteKi(event) {
    dialogoRecolocacionCosteKi(event.data.costeKi);
}