
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
    var div = $("<div></div>");
    div.append(muestraSubtitulo(_l(UI_CONOCIMIENTO_MARCIAL), false));
    var divCM = $("<div></div>").addClass(CSS_ETIQUETA_EFECTO_TECNICA);
    divCM.append(muestraValorConBonos(_l(UI_CONOCIMIENTO_MARCIAL), 0, personaje_actual.getBonos(BONO_CM, BONO_CM, CATEGORIA_BONO_CUALQUIERA)).addClass(CSS_MUESTRA_INLINE));
    divCM.append(" - " + _l(UI_CM) + " " + _l(UI_LIBRE) + ": " + (personaje_actual.getCMTotal() - personaje_actual.getCMGastado()));
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
    var dialogo = $("<div></div>");
    var i;
    var j;
    var dialogInicializado = false;

    var actualizarDialogoCrearTecnica = function() {
        dialogo.empty();

        var divFila = $("<div></div>");
        divFila.addClass("row");

        dialogo.append(divFila);

        var divListaEfectos = $("<div></div>");
        divListaEfectos.addClass("four columns").addClass(CSS_TEXTO_SMALL);

        divFila.append(divListaEfectos);

        var divEfectos = $("<div></div>");

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

        var divResumenTecnica = $("<div></div>");
        divResumenTecnica.addClass("eight columns");

        var divDatosTecnica = $("<div></div>");

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
        closeOnEscape: true,
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
    var div = $("<div></div>").addClass("row");

    var divNombre = $("<div></div>").addClass("push_one two columns");
    var contentNombre= $("<div></div>");
    contentNombre.addClass(CSS_ETIQUETA_EFECTO_TECNICA).append(_l(ventajaElegida.getNombre()));
    divNombre.append(contentNombre);

    var divCoste = $("<div></div>").addClass("one columns");
    var contentCoste = $("<div></div>");
    contentCoste.append("+" + ventajaElegida.getCosteCM());
    divCoste.append(contentCoste);

    var divCosteKi = $("<div></div>").addClass("three columns");
    var contentKi = $("<div></div>");
    contentKi.append("+" + ventajaElegida.getCosteKi().toString());
    divCosteKi.append(contentKi);

    var divMantenimiento = $("<div></div>").addClass("three columns");
    var contentMantenimiento= $("<div></div>").addClass(CSS_FILA_EFECTO_TECNICA);
    if (efectoTecnicaElegido.isMantenible()) {
        //TODO ¿no falta algo aqui?
    }
    divMantenimiento.append(contentMantenimiento);

    var divBoton = $("<div></div>").addClass("push_one one columns");
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
    var divMenos = boton("small secondary pretty btn",_l("+"));

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