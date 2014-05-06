/**
 *
 * @returns {jQuery}
 */
function muestraBotonCompraTecnicaKi() {
    var divBotonComprarTecnicaKiExistente = boton("small primary pretty btn",_l(UI_COMPRAR_TECNICA_EXISTENTE),noPuedeComprarTecnicas());

    divBotonComprarTecnicaKiExistente.on("click", comprarTecnicaKi);

    return divBotonComprarTecnicaKiExistente;
}

/**
 *
 * @returns {jQuery}
 */
function muestraBotonNuevaTecnicaKi() {
    var divBotonNuevaTecnicaKi = boton("small primary pretty btn",_l(UI_CREAR_TECNICA_DOMINIO),noPuedeComprarTecnicas());

    divBotonNuevaTecnicaKi.on("click", crearTecnicaKi);

    return divBotonNuevaTecnicaKi;
}

/**
 *
 * @returns {jQuery}
 */
function muestraDatosBasicosTecnica(tecnicaKi) {
    var div = getDiv("");

    var divNombre = getDiv("").append(muestraPersonal(_l(UI_NOMBRE), tecnicaKi.getNombre(), true, elegirManualNombreTecnica, {tecnicaKi:tecnicaKi}));
    var divDescripcion = getDiv("").append(muestraPersonal(_l(UI_DESCRIPCION), tecnicaKi.getDescripcion(), true, elegirManualDescripcionTecnica, {tecnicaKi:tecnicaKi}));
    var divNivel  = getDiv("").append(muestraPersonal(_l(UI_NIVEL), tecnicaKi.getNivel(), true, elegirNivelTecnica, {tecnicaKi:tecnicaKi}));


    var divCoste = getDiv(CSS_CAMPO_PERSONALES).
        append(getDiv(CSS_ETIQUETA).append(_l(UI_CM) + ": ")).
        append(getDiv(CSS_VALOR_PERSONALES).append(tecnicaKi.getCosteCM())).
        append(getDiv(CSS_MUESTRA_INLINE).append(" ")).
        append(getDiv(CSS_ETIQUETA).append(_l(UI_CM) + " " + _l(UI_MINIMO) + ": ")).
        append(getDiv(CSS_VALOR_PERSONALES).append(tecnicaKi.getMinCM())).
        append(getDiv(CSS_MUESTRA_INLINE).append(" ")).
        append(getDiv(CSS_ETIQUETA).append(_l(UI_CM) + " " + _l(UI_MAXIMO) + ": ")).
        append(getDiv(CSS_VALOR_PERSONALES).append(tecnicaKi.getMaxCM())).
        append(getDiv(CSS_MUESTRA_INLINE).append(" "));

    var divCosteKi = getDiv("").append(muestraPersonal(_l(UI_COSTE_KI), tecnicaKi.getCosteKi().toString(), false));
    var divIsMantenida = getDiv("");
    if (tecnicaKi.isMantenida()) {
        divIsMantenida.append(muestraPersonal(_l(UI_MANTENIDA) + ". " + _l(UI_COSTE_MANTENIMIENTO), tecnicaKi.getCosteMantenimiento().toString(), false));
    } else if (tecnicaKi.isSostenida()) {
        divIsMantenida.append(muestraPersonal(_l(UI_SOSTENIDA) + ": ", _l(tecnicaKi.isSostenida()), false));
    }
    var divIsCombinable = getDiv("");
    if (tecnicaKi.isCombinable()) {
        divIsCombinable.append(muestraPersonal(_l(UI_COMBINABLE), "", false));
    }
    return div.append(divNombre).append(divDescripcion).append(divNivel).append(divCoste).append(divCosteKi).append(divIsMantenida).append(divIsCombinable);
}

function elegirEfecto(event) {

    var arrayOpciones = [];
    var categorias = [];
    for(var i = 0; i < TIPOS_EFECTOS_TECNICAS.length; i++) {
        categorias.push(new OpcionMostrable(_l(TIPOS_EFECTOS_TECNICAS[i]),TIPOS_EFECTOS_TECNICAS[i],TIPOS_EFECTOS_TECNICAS[i]));
    }
    for (i = 0; i < efectosTecnicas.length; i++) {
        arrayOpciones.push(new OpcionMostrable(_l(efectosTecnicas[i].getNombre()),efectosTecnicas[i].getNombre(),efectosTecnicas[i].getTipoEfecto(),efectosTecnicas[i].muestraNiveles(event.data.tipo)));
    }
    muestraDialogoElegirOpciones(arrayOpciones,{tecnicaKi:event.data.tecnicaKi,tipo:event.data.tipo},{principal:añadirEfecto,isDisabled:noPuedeComprarEfecto},true,categorias);
}

function noPuedeComprarEfecto(parametros) {
    return !puedeComprarseEfecto(parametros.tecnicaKi,getEfectoTecnicaKi(parametros.opcion),(parametros.tipo==1));
}

function añadirEfecto(parametros) {
    switch (parametros.tipo) {
        case 1:
            añadeEfectoPrimarioTecnica(parametros.tecnicaKi,getEfectoTecnicaKi(parametros.opcion));
            break;
        case 2:
        default:
            añadeEfectoSecundarioTecnica(parametros.tecnicaKi,getEfectoTecnicaKi(parametros.opcion));
            break;
    }
}

function elegirDesventaja(event) {


    var arrayOpciones = [];
    for (var i = 0; i < desventajasTecnicas.length; i++) {
        arrayOpciones.push(new OpcionMostrable(_l(desventajasTecnicas[i].getNombre()),desventajasTecnicas[i].getNombre(),"",desventajasTecnicas[i].getCosteCM() + " " + _l(UI_CM)));
    }
    muestraDialogoElegirOpciones(arrayOpciones,{tecnicaKi:event.data.tecnicaKi},{principal:añadirDesventaja,isDisabled:noPuedeComprarDesventaja},true);
}

function noPuedeComprarDesventaja(parametros) {
    return !puedeAñadirseDesventajaATecnica(parametros.tecnicaKi,getDesventajaTecnicaKi(parametros.opcion));
}

function añadirDesventaja(parametros) {
    añadeDesventajaTecnica(parametros.tecnicaKi,getDesventajaTecnicaKi(parametros.opcion));
}

function muestraEfectosTecnica(tecnicaKi) {
    var divEfectosDeLaTecnica = getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).
        append(_l(UI_EFECTOS_DE_LA_TECNICA)  + ":").
            append(muestraBotonPequeño("+1º",{tecnicaKi:tecnicaKi,tipo:1},elegirEfecto,"")).
            append(muestraBotonPequeño("+2º",{tecnicaKi:tecnicaKi,tipo:2},elegirEfecto,""))
        ;
    var filaEncabezados = getDiv("row");
    var encabezadoNombre = getDiv("two columns").addClass(CSS_COLOR_GRIS).append(_l(UI_EFECTO));
    var encabezadoCM = getDiv("one columns").addClass(CSS_COLOR_GRIS).append(_l(UI_CM));
    var encabezadoKi = getDiv("three columns").addClass(CSS_COLOR_GRIS).append(_l(UI_KI));
    var encabezadoMantenimiento = getDiv("five columns").addClass(CSS_COLOR_GRIS).append(_l(UI_MANTENIMIENTO));
    var encabezadoBoton = getDiv("one columns").addClass(CSS_COLOR_GRIS).append(_l(UI_BORRAR));
    filaEncabezados.append(encabezadoNombre).append(encabezadoCM).append(encabezadoKi).append(encabezadoMantenimiento).append(encabezadoBoton);
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
    return divEfectosDeLaTecnica;
}

/**
 *
 * @param {EfectoTecnicaElegido} efectoTecnicaElegido
 * @param {boolean} anulable
 * @param {TecnicaKi} tecnicaKi
 */
function muestraEfectoTecnica(efectoTecnicaElegido, tecnicaKi, anulable) {
    var div = getDiv("row");

    var divNombre = getDiv("two columns").addClass(CSS_ETIQUETA_EFECTO_TECNICA).append(efectoTecnicaElegido.getNombreCompleto());
    if (efectoTecnicaElegido.getVentajasOpcionales().length > 0) {
        var divBotonAddVentajaTecnica = boton("small primary pretty btn",_l("+"));

        divBotonAddVentajaTecnica.on("click",{tecnicaKi:tecnicaKi,efectoTecnica:efectoTecnicaElegido},addVentajaOpcionalEfectoTecnica);

        divNombre.append(divBotonAddVentajaTecnica);
    }

    var divCoste = getDiv("one columns").append(efectoTecnicaElegido.getCosteCM());

    var divCosteKi = getDiv("three columns").addClass(CSS_MUESTRA_INLINE).
        append(efectoTecnicaElegido.getCosteKi().toString()).
        append(muestraBotonPequeño(_l(UI_ELEGIR),{costeKi:efectoTecnicaElegido.getCosteKi()},muestraDialogoRecolocacionCosteKi,""));

    var divMantenimiento = getDiv("five columns").append(muestraMantenimiento(tecnicaKi,efectoTecnicaElegido));

    var divBoton = getDiv("one columns");
    if (anulable) {
        divBoton.append(muestraBotonAnular(quitaEfectoSecundario,{tecnicaKi:tecnicaKi,efecto:efectoTecnicaElegido}));
    }

    div.append(divNombre).append(divCoste).append(divCosteKi).append(divMantenimiento).append(divBoton);

    return div;
}

function muestraMantenimiento(tecnicaKi,efectoTecnicaElegido) {
    var subrow = getDiv("row");
    var subCol1 = getDiv("six columns");
    var subCol2 = getDiv("six columns");
    var contentMantenimiento = getDiv(CSS_FILA_EFECTO_TECNICA);
    var divCosteMantenimiento = getDiv(CSS_MUESTRA_INLINE);

    var textoId = efectoTecnicaElegido.getNombre().replace(/\s+/g, '')+"_mant";

    contentMantenimiento.attr("id",textoId);

    var divBotonMantenimientoOn = $("<input>")
        .attr("type","radio")
        .attr("id",textoId+"_on")
        .attr("name",textoId);
    var labelBotonOn = $("<label></label>").attr("for",textoId+"_on").append(_l(UI_MANT));

    var divBotonSostenimientoMenor = $("<input>")
        .attr("type","radio")
        .attr("id",textoId+"_sosmenor")
        .attr("name",textoId);
    var labelBotonSosMenor = $("<label></label>").attr("for",textoId+"_sosmenor").append(_l(UI_SOS_MENOR));

    var divBotonSostenimientoMayor = $("<input>")
        .attr("type","radio")
        .attr("id",textoId+"_sosmayor")
        .attr("name",textoId);
    var labelBotonSosMayor = $("<label></label>").attr("for",textoId+"_sosmayor").append(_l(UI_SOS_MAYOR));

    var divBotonMantenimientoOff = $("<input>")
        .attr("type","radio")
        .attr("id",textoId+"_off")
        .attr("name",textoId);
    var labelBotonOff = $("<label></label>").attr("for",textoId+"_off").append(_l(UI_NO));

    if (efectoTecnicaElegido.isMantenido()) {
        divBotonMantenimientoOn.attr("checked","checked");
    } else if (efectoTecnicaElegido.sostenido == TECNICA_SOSTENIDA_MENOR) {
        divBotonSostenimientoMenor.attr("checked","checked");
    } else if (efectoTecnicaElegido.sostenido == TECNICA_SOSTENIDA_MAYOR) {
        divBotonSostenimientoMayor.attr("checked","checked");
    } else {
        divBotonMantenimientoOff.attr("checked","checked");
    }

    contentMantenimiento.append(divBotonMantenimientoOff).append(labelBotonOff);

    if (!(tecnicaKi.isSostenida() || !efectoTecnicaElegido.isMantenible())) {
        contentMantenimiento.append(divBotonMantenimientoOn).append(labelBotonOn);
    }

    if (!(tecnicaKi.isMantenida() || !efectoTecnicaElegido.isSostenible(tecnicaKi.getNivel()))) {
        if (tecnicaKi.isSostenida() == TECNICA_SOSTENIDA_MENOR) {
            contentMantenimiento.append(divBotonSostenimientoMenor).append(labelBotonSosMenor);
        } else if (tecnicaKi.isSostenida() == TECNICA_SOSTENIDA_MAYOR) {
            contentMantenimiento.append(divBotonSostenimientoMayor).append(labelBotonSosMayor);
        } else {
            contentMantenimiento.append(divBotonSostenimientoMenor).append(labelBotonSosMenor).append(divBotonSostenimientoMayor).append(labelBotonSosMayor);
        }
    }

    contentMantenimiento.buttonset();

    if (efectoTecnicaElegido.isMantenido()) {
        divCosteMantenimiento.append(efectoTecnicaElegido.getCosteMantenimiento().toString());
        divCosteMantenimiento.append(muestraBotonPequeño(_l(UI_ELEGIR),{costeKi:efectoTecnicaElegido.getCosteMantenimiento()},muestraDialogoRecolocacionCosteKi,""));
    } else if (efectoTecnicaElegido.isSostenido()) {
        divCosteMantenimiento.append(efectoTecnicaElegido.getCosteSostenimiento(efectoTecnicaElegido.isSostenido()).toString());
        divCosteMantenimiento.append(muestraBotonPequeño(_l(UI_ELEGIR),{costeKi:efectoTecnicaElegido.getCosteSostenimiento(efectoTecnicaElegido.isSostenido())},muestraDialogoRecolocacionCosteKi,""));
    }


    divBotonMantenimientoOn.on("click",{tecnicaKi:tecnicaKi,efectoTecnica:efectoTecnicaElegido,activado:EFECTO_MANTENIDO},cambiaMantenimiento);
    divBotonMantenimientoOff.on("click",{tecnicaKi:tecnicaKi,efectoTecnica:efectoTecnicaElegido,activado:false},cambiaMantenimiento);
    divBotonSostenimientoMenor.on("click",{tecnicaKi:tecnicaKi,efectoTecnica:efectoTecnicaElegido,activado:EFECTO_SOSTENIDO_MENOR},cambiaMantenimiento);
    divBotonSostenimientoMayor.on("click",{tecnicaKi:tecnicaKi,efectoTecnica:efectoTecnicaElegido,activado:EFECTO_SOSTENIDO_MAYOR},cambiaMantenimiento);

    return subrow.
        append(subCol1.append(divCosteMantenimiento)).
        append(subCol2.append(contentMantenimiento));
}

function muestraDesventajasTecnica(tecnicaKi) {
    var divDesventajas = getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).append(_l(UI_DESVENTAJAS_DE_LA_TECNICA) + "(" + _l(UI_MAX) + " " + tecnicaKi.getMaxDesventajas() + "):").
            append(muestraBotonPequeño("+",{tecnicaKi:tecnicaKi},elegirDesventaja,""));

    var filaEncabezadosDesv = getDiv("row");
    var encabezadoNombreDesv = getDiv("four columns").addClass(CSS_COLOR_GRIS).append(_l(UI_DESVENTAJA));
    var encabezadoCMDesv = getDiv("seven columns").addClass(CSS_COLOR_GRIS).append(_l(UI_CM));
    var encabezadoBotonDesv = getDiv("one columns").addClass(CSS_COLOR_GRIS).append(_l(UI_BORRAR));
    filaEncabezadosDesv.append(encabezadoNombreDesv).append(encabezadoCMDesv).append(encabezadoBotonDesv);
    divDesventajas.append(filaEncabezadosDesv);

    var desventajas = tecnicaKi.getDesventajas();
    for (i = 0; i < desventajas.length;i++) {
        divDesventajas.append(muestraDesventajaTecnica(desventajas[i],tecnicaKi,true));
    }
    return divDesventajas;
}

function muestraBotonesAumentoKi(tecnicaKi) {
    var divFila = getDiv("row");
    /*** poder aumentar/disminuir CM y ki */
    var costeKi = tecnicaKi.getCosteKi();
    if (costeKi.numCaracteristicasBase() >= 1) {
        divFila.append(muestraBotonPequeño(_l(UI_AUMENTAR_KI_DISMINUIR_CM),{tecnicaKi: tecnicaKi},dialogoAumentarKi,"").addClass("two columns"));
    }
    if (tecnicaKi.getTotalAumentosKi() > 0)
        divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " +5 " + _l(UI_CM),{tecnicaKi: tecnicaKi},dialogoAnularAumentoKi,"").addClass("two columns"));

    return divFila;
}

function muestraBotonesCombinable(tecnicaKi) {
    var divFila = getDiv("row");

    if (tecnicaKi.isCombinable()) {
        divFila.append(muestraBotonPequeño(_l(UI_QUITAR_COMBINABLE),{tecnicaKi: tecnicaKi},quitarCombinable,"").addClass("two columns"));
        divFila.append(tecnicaKi.getCosteCombinable().toString());
        divFila.append(muestraBotonPequeño(_l(UI_ELEGIR),{costeKi:tecnicaKi.getCosteCombinable()},muestraDialogoRecolocacionCosteKi,""));
    } else {
        divFila.append(muestraBotonPequeño(_l(UI_HACER_COMBINABLE),{tecnicaKi: tecnicaKi},hacerCombinable,"").addClass("two columns"));
    }

    return divFila;
}

function quitarCombinable(event) {
    event.data.tecnicaKi.setCombinable(false);
}

function hacerCombinable(event) {
    event.data.tecnicaKi.setCombinable(true);
}

function muestraBotonesAumentoCM(tecnicaKi) {
    var divFila = getDiv("row");
    var costeKi = tecnicaKi.getCosteKi();
    if (costeKi.numCaracteristicasBase() >= 3) {
        divFila.append(muestraBotonPequeño(_l(UI_AUMENTAR_CM_DISMINUIR_KI),{tecnicaKi: tecnicaKi},dialogoAumentarCM,"").addClass("two columns"));

        if (tecnicaKi.kiReducidos[AGI] != 0)
            divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(AGI),{tecnicaKi: tecnicaKi, caracteristica: AGI},anularAumentoCM,"").addClass("two columns"));
        if (tecnicaKi.kiReducidos[DES] != 0)
            divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(DES),{tecnicaKi: tecnicaKi, caracteristica: DES},anularAumentoCM,"").addClass("two columns"));
        if (tecnicaKi.kiReducidos[CON] != 0)
            divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(CON),{tecnicaKi: tecnicaKi, caracteristica: CON},anularAumentoCM,"").addClass("two columns"));
        if (tecnicaKi.kiReducidos[FUE] != 0)
            divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(FUE),{tecnicaKi: tecnicaKi, caracteristica: FUE},anularAumentoCM,"").addClass("two columns"));
        if (tecnicaKi.kiReducidos[POD] != 0)
            divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(POD),{tecnicaKi: tecnicaKi, caracteristica: POD},anularAumentoCM,"").addClass("two columns"));
        if (tecnicaKi.kiReducidos[VOL] != 0)
            divFila.append(muestraBotonPequeño(_l(UI_ANULAR) + " -1 " + _l(UI_KI) + " " + _l(VOL),{tecnicaKi: tecnicaKi, caracteristica: VOL},anularAumentoCM,"").addClass("two columns"));

    }
    return divFila;
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
        //FIXME esto no debería ir aquí
        desactivarNotificaciones();
        comprobacionesRutinariasTecnica(tecnicaKi);
        activarNotificaciones();

        dialogo.empty();

        var divFila = getDiv("row");
        var divResumenTecnica = getDiv("twelve columns");

        divResumenTecnica.append(muestraDatosBasicosTecnica(tecnicaKi));
        divResumenTecnica.append(muestraEfectosTecnica(tecnicaKi));
        divResumenTecnica.append(muestraDesventajasTecnica(tecnicaKi));

        divFila.append(divResumenTecnica);
        dialogo.append(divFila);

        var divFilaCombinable = getDiv("row");

        divFilaCombinable.append(muestraBotonesCombinable(tecnicaKi));

        dialogo.append(divFilaCombinable);

        var divFilaControles = getDiv("row");

        divFilaControles.append(muestraBotonesAumentoKi(tecnicaKi));
        divFilaControles.append(muestraBotonesAumentoCM(tecnicaKi));

        dialogo.append(divFilaControles);

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
                text: _l(UI_GUARDAR_TECNICA),
                disabled: true,
                click: function() {
                    //TODO guardar en servidor
                }
            },
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
    var div = getDiv("row");

    var divNombre = getDiv("four columns");
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