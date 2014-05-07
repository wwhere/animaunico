var DIV_DESTINO_CONTROLES = "#divControles";
var DIV_DESTINO_EXPLICACION_GENERACION = "explicacionMetodo";
var DIV_DIALOGO_REPARTO_CARACTERISTICAS = "dialogRepartoCaracteristicas";
var DIV_DESTINO_EXPLICACION_RAZA = ".explicacionRaza";
var DIV_DESTINO_EXPLICACION_ARMA = ".explicacionArma";
var DIV_DESTINO_EXPLICACION_VENTAJA = ".explicacionVentaja";
var DIV_DESTINO_EXPLICACION_DESVENTAJA = ".explicacionDesventaja";
var BOTON_CREACION = "BOTON_CREACION";
var BOTON_RAZA = "BOTON_RAZA";
var BOTON_CATEGORIA = "BOTON_CATEGORIA";
var BOTON_VENTAJAS = "BOTON_VENTAJAS";
var BOTON_BONOS_NATURALES = "BOTON_BONOS_NATURALES";
var BOTON_ARMA_INICIAL = "BOTON_ARMA_INICIAL";
var BOTON_TABLAS_ARMAS = "BOTON_TABLAS_ARMAS";
var BOTON_ARTES_MARCIALES = "BOTON_ARTES_MARCIALES";
var BOTON_ARS_MAGNUS = "BOTON_ARS_MAGNUS";
var BOTON_CV = "BOTON_CV";
var BOTON_CM = "BOTON_CM";
var BOTON_MAGIA = "BOTON_MAGIA";
var BOTON_ELAN = "BOTON_ELAN";
var BOTON_FINALIZAR_CREACION = "BOTON_FINALIZAR_CREACION";
var BOTON_COMPRAR_EQUIPO = "BOTON_COMPRAR_EQUIPO";
var BOTON_SUBIR_NIVEL = "BOTON_SUBIR_NIVEL";
var BOTON_GUARDAR = "BOTON_GUARDAR";
var BOTON_CARGAR = "BOTON_CARGAR";
var BOTON_LOG = "BOTON_LOG";
var BOTON_LICENCIA = "BOTON_LICENCIA";
var BOTON_SOPORTE = "BOTON_SOPORTE";
var BOTON_COMENTARIOS = "BOTON_COMENTARIOS";

/**
 *
 * @type {string[]}
 */
var BOTONES_BARRA_CONTROLES = [
    BOTON_CREACION,
    BOTON_RAZA,
    BOTON_CATEGORIA,
    BOTON_VENTAJAS,
    BOTON_BONOS_NATURALES,
    BOTON_ARMA_INICIAL,
    BOTON_ARTES_MARCIALES,
    BOTON_ARS_MAGNUS,
    BOTON_TABLAS_ARMAS,
    BOTON_CV,
    BOTON_CM,
    BOTON_MAGIA,
    BOTON_ELAN,
    BOTON_FINALIZAR_CREACION,
    BOTON_COMPRAR_EQUIPO,
    BOTON_SUBIR_NIVEL
];

/**
 * Crea los botones de la barra de controles
 */
function muestraControles() {

    $("#"+BOTON_ELAN).off("click",dialogoElan);
    $("#"+BOTON_MAGIA).off("click",dialogoMagia);
    $("#"+BOTON_CV).off("click",dialogoCV);
    $("#"+BOTON_TABLAS_ARMAS).off("click",dialogoTablasArmas);
    $("#"+BOTON_ARMA_INICIAL).off("click",dialogoElegirArmaTodas);
    $("#"+BOTON_BONOS_NATURALES).off("click",dialogoBonosNaturales);
    $("#"+BOTON_CREACION).off("click",iniciarGeneracion);
    $("#"+BOTON_FINALIZAR_CREACION).off("click",finalizarGeneracion);
    $("#"+BOTON_SUBIR_NIVEL).off("click",subirNivel);
    $("#"+BOTON_GUARDAR).off("click",muestraDialogoGuardarPersonaje);
    $("#"+BOTON_CARGAR).off("click",muestraDialogoCargarPersonaje);
    $("#"+BOTON_LOG).off("click",mostrarLogCambios);
    $("#"+BOTON_LICENCIA).off("click",mostrarLicencia);
    $("#"+BOTON_COMPRAR_EQUIPO).off("click",muestraVentanaCompraEquipo);
    $("#BOTON_IDIOMA_ESPAÑOL").off("click",cambiaIdiomaEspañol);
    $("#BOTON_IDIOMA_INGLES").off("click",cambiaIdiomaIngles);

    $("#BOTON_IDIOMA_ESPAÑOL").on("click",cambiaIdiomaEspañol);
    $("#BOTON_IDIOMA_INGLES").on("click",cambiaIdiomaIngles);
    $("#"+BOTON_ELAN).on("click",dialogoElan);
    $("#"+BOTON_MAGIA).on("click",dialogoMagia);
    $("#"+BOTON_CV).on("click",dialogoCV);
    $("#"+BOTON_TABLAS_ARMAS).on("click",dialogoTablasArmas);
    $("#"+BOTON_ARMA_INICIAL).on("click",dialogoElegirArmaTodas);
    $("#"+BOTON_BONOS_NATURALES).on("click",dialogoBonosNaturales);
    $("#"+BOTON_CREACION).on("click",iniciarGeneracion);
    $("#"+BOTON_FINALIZAR_CREACION).on("click",finalizarGeneracion);
    $("#"+BOTON_SUBIR_NIVEL).on("click",subirNivel);
    $("#"+BOTON_GUARDAR).on("click",muestraDialogoGuardarPersonaje);
    $("#"+BOTON_CARGAR).on("click",muestraDialogoCargarPersonaje);
    $("#"+BOTON_LOG).on("click",mostrarLogCambios);
    $("#"+BOTON_LICENCIA).on("click",mostrarLicencia);
    $("#"+BOTON_COMPRAR_EQUIPO).on("click",muestraVentanaCompraEquipo);
}

/**
 * Activa o desactiva los botones de la barra de controles, menos el de índice 0 (que inicia el proceso para activar los demás)
 * @param {string} estadoGeneracion
 */
function enableButtonsPasosCreacion(estadoGeneracion) {

    var activar = 0;

    switch (estadoGeneracion) {
        case ESTADO_GENERACION_INICIADA:
            activar = 1;
            break;
        case ESTADO_GENERACION_PERSONAJE_HECHO:
            activar = 2;
            break;
        case ESTADO_GENERACION_SUBIENDO_NIVEL:
            activar = 3;
            break;
        case ESTADO_GENERACION_NINGUNO:
        default:
            activar = 0;
            break;
    }

    for (var i = 1; i < BOTONES_BARRA_CONTROLES.length; i++) {
        botonActivado(
            $("#"+BOTONES_BARRA_CONTROLES[i]),
            !((activar==0)||(activar==2))
        );
    }

    var botonArtesMarciales = $("#"+BOTON_ARTES_MARCIALES);
    if (personaje_actual.numArtesMarciales() >= personaje_actual.maxArtesMarciales()) {
        botonActivado(botonArtesMarciales,false);
        addToolTip(botonArtesMarciales,_l(UI_NECESITAS_40_ATAQUE_DEFENSA));
    } else {
        botonActivado(botonArtesMarciales,true);
    }

    botonActivado($("#"+BOTON_CV),!((activar==0) || (personaje_actual.getHabilidadDePersonaje(HB_CV).valorFinalActual() == 0)));

    botonActivado($("#"+BOTON_MAGIA), !((activar==0) || (personaje_actual.nivelMagiaMaximo() == 0)) );

    botonActivado($("#"+BOTON_ELAN), !((activar==0) || (personaje_actual.getElan().length == 0)) );

    botonActivado($("#"+BOTON_FINALIZAR_CREACION), !(((activar==0)||(activar==2)) || (!personajeCompleto())) );

    botonActivado($("#"+BOTON_SUBIR_NIVEL), (activar==2) );

    botonActivado($("#"+BOTON_GUARDAR), (activar!=0));

    //menu Personaje
    var menuPersonaje = $("#menuPersonaje").empty();
    var liNuevo, liSubir, liGuardar, liCargar;

    liNuevo = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_CREACION).append(_l(UI_BOTON_CREACION)));
    if (activar==2) {
        liSubir = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_SUBIR_NIVEL).append(_l(UI_BOTON_SUBIR_NIEVL)));
    } else {
        liSubir = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_SUBIR_NIEVL));
    }
    if (activar!=0) {
        liGuardar = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_GUARDAR).append(_l(UI_BOTON_GUARDAR)));
    } else {
        liGuardar = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_GUARDAR));
    }
    liCargar = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_CARGAR).append(_l(UI_BOTON_CARGAR)));

    menuPersonaje.append(liNuevo).append(liSubir).append(liGuardar).append(liCargar);

    //menu Creacion
    var menuCreacion = $("#menuCreacion").empty();

    var liBonosNaturales;
    var liArmaInicial;
    var liTablaArmas;
    var liCM;
    if (((activar==1)||(activar==3))) {
        liBonosNaturales = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_BONOS_NATURALES).append(_l(UI_BOTON_NATURALES)));
        liArmaInicial = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_ARMA_INICIAL).append(_l(UI_BOTON_ARMA_INICIAL)));
        liTablaArmas = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_TABLAS_ARMAS).append(_l(UI_BOTON_TABLAS_ARMAS)));
        liCM = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_CM).append(_l(UI_BOTON_GASTAR_CM)));
    } else {
        liBonosNaturales = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_NATURALES));
        liArmaInicial = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_ARMA_INICIAL));
        liTablaArmas = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_TABLAS_ARMAS));
        liCM = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_GASTAR_CM));
    }

    var liArtesMarciales;

    if (personaje_actual.numArtesMarciales() >= personaje_actual.maxArtesMarciales()) {
        liArtesMarciales = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_ARTES_MARCIALES));
    } else {
        liArtesMarciales = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_ARTES_MARCIALES).append(_l(UI_BOTON_ARTES_MARCIALES)));
    }

    var liMagia, liCV, liElan, liFinCreacion;

    if (!((activar==0) || (personaje_actual.nivelMagiaMaximo() == 0))) {
        liMagia = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_MAGIA).append(_l(UI_BOTON_GASTAR_NIVELES_VIA)));
    } else {
        liMagia = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_GASTAR_NIVELES_VIA));
    }

    if (!((activar==0) || (personaje_actual.getHabilidadDePersonaje(HB_CV).valorFinalActual() == 0)) ) {
        liCV = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_CV).append(_l(UI_BOTON_GASTAR_CV)));
    } else {
        liCV = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_GASTAR_CV));
    }

    if (!((activar==0) || (personaje_actual.getElan().length == 0)) ) {
        liElan = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_ELAN).append(_l(UI_BOTON_GASTAR_ELAN)));
    } else {
        liElan = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_GASTAR_ELAN));
    }

    var liEquipo = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_COMPRAR_EQUIPO).append(_l(UI_BOTON_COMPRAR_EQUIPO)));

    if (!(((activar==0)||(activar==2)) || (!personajeCompleto()))) {
        liFinCreacion = $("<li></li>").append($("<a></a>").prop("href","#").prop("id",BOTON_FINALIZAR_CREACION).append(_l(UI_BOTON_FINALIZAR_CREACION)));
    } else {
        liFinCreacion = $("<li></li>").addClass("desactivado").append(_l(UI_BOTON_FINALIZAR_CREACION));
    }

    menuCreacion.append(liBonosNaturales).append(liArmaInicial).append(liTablaArmas).append(liArtesMarciales).append(liCM).append(liMagia).append(liCV).append(liElan).append("<hr>").append(liEquipo).append("<hr>").append(liFinCreacion);

    muestraControles();
}



/**
 * Muestra un diálogo modal en el que se da a elegir entre varias opciones. Al elegir una se pasa a una función concreta con ciertos parámetros.
 * @param {string} opciones las opciones (en forma de strings) a elegir. Se identifican con las constantes LISTA_etc
 * @param {{}} parametros estructura con los parametros que se pasaran tal cual a la función callback.
 * @param {{principal: function, isDisabled: function}} callbacks función a llamar al elegir una opción.
 */
function muestraDialogoElegirOpcion(opciones, parametros, callback) {
    var i;
    var j;
    var arrayOpciones = [];
    var categorias = [];

    switch (opciones) {
        case  LISTA_CARACTERISTICAS :
            for (i = 0; i < CARACTERISTICAS_NOMBRES.length; i++) {
                arrayOpciones.push(new OpcionMostrable(_l(CARACTERISTICAS_NOMBRES[i]),CARACTERISTICAS_NOMBRES[i],""));
            }
            muestraDialogoElegirOpciones(arrayOpciones, parametros, {principal: callback.principal, isDisabled: callback.isDisabled}, true);
            break;
        case  LISTA_TIPOS_SECUNDARIAS :
            for (i = 0; i < habilidades_secundarias_nombres_grupos.length; i++) {
                arrayOpciones.push(new OpcionMostrable(_l(habilidades_secundarias_nombres_grupos[i]),habilidades_secundarias_nombres_grupos[i],habilidades_secundarias_nombres_grupos[i],""));
            }
            muestraDialogoElegirOpciones(arrayOpciones, parametros, {principal: callback.principal, isDisabled: callback.isDisabled}, true);
            break;
        case  LISTA_HABILIDADES_SECUNDARIAS :
            for (i = 0; i < habilidades_secundarias.length;i++) {
                var grupoHabi = habilidades_secundarias[i];
                categorias.push(new OpcionMostrable(_l(habilidades_secundarias_nombres_grupos[i]),habilidades_secundarias_nombres_grupos[i],habilidades_secundarias_nombres_grupos[i]));
                for (j = 0; j < grupoHabi.length; j++) {
                    arrayOpciones.push(new OpcionMostrable(_l(grupoHabi[j]),grupoHabi[j],habilidades_secundarias_nombres_grupos[i]));
                }
            }
            muestraDialogoElegirOpciones(arrayOpciones, parametros, {principal: callback.principal, isDisabled: callback.isDisabled}, true, categorias);
            break;
        case  LISTA_DISCIPLINAS_PSIQUICAS :
            for (i = 0; i < disciplinasPsiquicas_set.length;i++) {
                var disciplina = disciplinasPsiquicas_set[i];
                if (!disciplina.isLibre()) {
                    arrayOpciones.push(new OpcionMostrable(_l(disciplina.getNombre()),disciplina.getNombre(),"",_l(disciplina.getDescripcion())));
                }
            }
            muestraDialogoElegirOpciones(arrayOpciones, parametros, {principal: callback.principal, isDisabled: callback.isDisabled}, true);
            break;
        case  LISTA_AJUSTE_TAMAÑO :
            for (i = -5; i <= 5; i++) {
                if (personaje_actual.getTamaño()>(-1*i)) {
                    arrayOpciones.push(new OpcionMostrable(i,i,""));
                }
            }
            muestraDialogoElegirOpciones(arrayOpciones, parametros, {principal: callback.principal, isDisabled: callback.isDisabled}, true);
            break;
        case  LISTA_HABILIDAD_COMBATE :
            arrayOpciones.push(new OpcionMostrable(_l(HB_ATAQUE),HB_ATAQUE,""));
            arrayOpciones.push(new OpcionMostrable(_l(HB_PARADA),HB_PARADA,""));
            arrayOpciones.push(new OpcionMostrable(_l(HB_ESQUIVA),HB_ESQUIVA,""));
            muestraDialogoElegirOpciones(arrayOpciones, parametros, {principal: callback.principal, isDisabled: callback.isDisabled}, true);
            break;
        case  LISTA_PODER_PSIQUICO :
            var dificultadMaxima = DIF_ZEN;
            if (parametros.elementoPC.getNombre() == "Acceso a poderes psíquicos naturales") {
                switch(parseInt(parametros.coste)) {
                    case 1:
                        dificultadMaxima = DIF_DIF;
                        break;
                    case 2:
                        dificultadMaxima = DIF_MDF;
                        break;
                    case 3:
                        dificultadMaxima = DIF_ABS;
                        break;
                }
            }

            for (i = 0; i < disciplinasPsiquicas_set.length; i++) {
                var disciplinaAct = disciplinasPsiquicas_set[i];
                categorias.push(new OpcionMostrable(_l(disciplinaAct.getNombre()),disciplinaAct.getNombre(),disciplinaAct.getNombre()));
                var poderesPsiquicos = disciplinaAct.getPoderesPsiquicos();
                for (j = 0; j < poderesPsiquicos.length; j++) {
                    var poder = poderesPsiquicos[j];
                    if (indiceDificultad(poder.dificultadMinima()) <= indiceDificultad(dificultadMaxima)) {
                        arrayOpciones.push(new OpcionMostrable(_l(poder.getNombre()),poder.getNombre(),disciplinaAct.getNombre(),_l(poder.getDescripcion())));
                    }
                }
            }
            muestraDialogoElegirOpciones(arrayOpciones, parametros, {principal: callback.principal, isDisabled: callback.isDisabled}, true, categorias);
            break;
        case  LISTA_SHAJADS_BERYLS :
            for (i = 0; i < berylShajad_set.length;i++) {
                arrayOpciones.push(new OpcionMostrable(_l(berylShajad_set[i].getNombre()),berylShajad_set[i].getNombre(), berylShajad_set[i].getTipo()));
            }
            categorias.push(new OpcionMostrable(_l(UI_BERYL),UI_BERYL, BERYL));
            categorias.push(new OpcionMostrable(_l(UI_SHAJAD),UI_SHAJAD, SHAJAD));
            muestraDialogoElegirOpciones(arrayOpciones, parametros, {principal: callback.principal, isDisabled: callback.isDisabled}, true, categorias);
            break;
        case  LISTA_VIAS_MAGIA :
            for (i = 0; i < VIAS_MAGICAS.length;i++) {
                arrayOpciones.push(new OpcionMostrable(_l(VIAS_MAGICAS[i]),VIAS_MAGICAS[i],""));
            }
            muestraDialogoElegirOpciones(arrayOpciones, parametros, {principal: callback.principal, isDisabled: callback.isDisabled}, true);
            break;
        case  LISTA_DESEQUILIBRIO_SEPHIROTICO :
            var gruposOpciones = [
                new GrupoOpciones(_l(VIA_FUEGO)+"/"+_l(VIA_AGUA),[VIA_AGUA,VIA_FUEGO],1),
                new GrupoOpciones(_l(VIA_AIRE)+"/"+_l(VIA_TIERRA),[VIA_AIRE,VIA_TIERRA],1),
                new GrupoOpciones(_l(VIA_LUZ)+"/"+_l(VIA_OSCURIDAD),[VIA_LUZ,VIA_OSCURIDAD],1),
                new GrupoOpciones(_l(VIA_ESENCIA)+"/"+_l(VIA_ILUSION),[VIA_ESENCIA,VIA_ILUSION],1),
                new GrupoOpciones(_l(VIA_CREACION)+"/"+_l(VIA_DESTRUCCION),[VIA_CREACION,VIA_DESTRUCCION],1)
            ];
            parametros.isDesequilibrioSephirotico = true;
            dialogoSeleccionMultiple(gruposOpciones,parametros,callback.principal);
            break;
        case  LISTA_INTRODUCCION_USUARIO :
        case  LISTA_DESCRIPCION :
            parametros.opcion = prompt(_l(UI_ESPECIFICA),"");
            callback.principal(parametros);
            break;
    }
}

/**
 *
 * @param {OpcionMostrable[]} arrayOpciones
 * @param {{}} parametros
 * @param {{}} callback
 * @param {boolean} permitirCierre
 * @param {OpcionMostrable[]} [categorias] Ya localizado
 */
function muestraDialogoElegirOpciones(arrayOpciones, parametros, callback, permitirCierre, categorias) {
    var dialogo = getDiv("");

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: true,
        ////show: "puff",
        title: _l(DIAG_ELEGIR_OPCIONES_TITULO),
        position: "center",
        closeOnEscape: permitirCierre,
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        close: function(event, ui) {dialogo.empty();}
    });

    if (!permitirCierre) {
        dialogo.dialog("option","dialogClass", "no-close");
    }

    var contenidoDialogo = getDiv("");
    var gridGeneral = $("<ul></ul>").addClass("four_up tiles");

    if (categorias != undefined) {
        for (var j = 0; j < categorias.length; j++) {
            /**
             *
             * @type {OpcionMostrable}
             */
            var categ = categorias[j];
            var divCateg = getDiv("contenedorBotonesVentajas");
            var gridCateg = $("<ul></ul>").addClass("four_up tiles");

            contenidoDialogo.append("<h3>"+categ.etiqueta+"</h3>");
            gridCateg.attr("id",categ.opcion.replace(/\s+/g, ''));
            divCateg.append(gridCateg);
            contenidoDialogo.append(divCateg);
        }
    } else {
        contenidoDialogo.append(gridGeneral);
    }

    dialogo.append(contenidoDialogo);

    for (var i = 0; i < arrayOpciones.length;i++) {
        parametros.opcion = arrayOpciones[i].opcion;
        if (arrayOpciones[i].categoria != undefined) {
            parametros.categoria = arrayOpciones[i].categoria;
        }
        var botonOpcion = boton("big pretty primary btn",arrayOpciones[i].etiqueta,callback.isDisabled(parametros));
        botonOpcion.addClass("botonDialogoOpciones");
        if (arrayOpciones[i].tooltip != undefined) {
            addToolTip(botonOpcion,arrayOpciones[i].tooltip);
        }

        botonOpcion.css("width","100%");

        if (categorias != undefined) {
            $("#"+arrayOpciones[i].categoria.replace(/\s+/g, '')).append($("<li></li>").append(botonOpcion));
        } else {
            gridGeneral.append($("<li></li>").append(botonOpcion));
        }
        botonOpcion.on("click",{opcion: arrayOpciones[i].opcion, categoria: arrayOpciones[i].categoria}, function(event) {
            dialogo.dialog("close" );
            dialogo.empty();
            parametros.opcion = event.data.opcion;
            parametros.categoria = event.data.categoria;
            callback.principal(parametros);
        });
    }



    if (categorias != undefined) {
        contenidoDialogo.accordion({
            heightStyle: "content"
        });
    }
}

/**
 *
 * @param {*} opcion
 * @returns {boolean} Siempre devuelve false
 */
function alwaysEnabled(opcion) {
    return false;
}

/**
 *
 * @param {function} callback
 * @param {{}} parametros
 * @returns {jQuery}
 */
function muestraBotonAnular(callback, parametros) {
    var botonAnular = boton("small pretty primary btn",_l("X"));

    if (parametros) {
        botonAnular.on("click", parametros, callback);
    } else {
        botonAnular.on("click", callback);
    }
    return botonAnular;
}

/**
 *
 * @param {GrupoOpciones[]} gruposOpciones
 * @param {function} callback
 * @param {object} parametros
 */
function dialogoSeleccionMultiple(gruposOpciones, parametros, callback) {
    var dialogo = getDiv();

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: true,
        ////show: "puff",
        title: _l(DIAG_ELEGIR_OPCIONES_TITULO),
        position: "center",
        closeOnEscape: true,
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        close: function(event, ui) {dialogo.empty();},
        buttons: [
            {
                text: "Ok",
                click: function() {
                    $( this ).dialog( "close" );
                    parametros.gruposOpciones = gruposOpciones;
                    callback(parametros);
                }
            }
        ]
    });

    for (var i = 0; i < gruposOpciones.length;i++) {
        var grOp = gruposOpciones[i];
        dialogo.append(grOp.etiqueta);
        var divBotones = $("<div></div>").attr("id","botones"+i);
        for (var j = 0; j < grOp.opciones.length;j++) {
            var inputCheck = $("<input>").attr("type","checkbox").attr("id","checkBotones"+i+"_"+j).addClass("checkBotones"+i);
            var labelCheck = $("<label></label>").attr("for","checkBotones"+i+"_"+j).append(_l(grOp.opciones[j]));
            divBotones.append(inputCheck).append(labelCheck);

            inputCheck.on("click", {grupoOpciones:gruposOpciones[i], claseChecks:".checkBotones"+i, item:grOp.opciones[j]}, function(event) {
                var grupoOpciones = event.data.grupoOpciones;
                var claseChecks = event.data.claseChecks;
                var item = event.data.item;
                if (this.checked) {
                    grupoOpciones.opcionesElegidas[grupoOpciones.checked] = item;
                    $(this).attr("indice",grupoOpciones.checked);
                    grupoOpciones.checked++;
                    if (grupoOpciones.checked  == grupoOpciones.numAElegir) {
                        $(claseChecks).prop("disabled",true);
                        $(claseChecks+":checked").prop("disabled",false);
                    }
                } else {
                    var indice = $(this).attr("indice");
                    $(this).removeAttr("indice");
                    if (grupoOpciones.checked > 1) {
                        grupoOpciones.opcionesElegidas[indice] = grupoOpciones.opcionesElegidas[grupoOpciones.checked-1];
                        grupoOpciones.opcionesElegidas[grupoOpciones.checked-1] = "";
                    } else {
                        grupoOpciones.opcionesElegidas[indice]  = "";
                    }
                    grupoOpciones.checked--;
                    if (grupoOpciones.checked  < grupoOpciones.numAElegir) {
                        $(claseChecks).prop("disabled",false);
                    }
                }
            });
        }
        divBotones.buttonset();
        dialogo.append(divBotones);
    }
}

/**
 *
 * @param {string} etiqueta ya localizada
 * @param {string[]} opciones NO localizadas
 * @param {number} numAElegir
 */
function GrupoOpciones(etiqueta, opciones, numAElegir) {
    /**
     *
     * @type {string} Ya localizado
     */
    this.etiqueta = etiqueta;
    /**
     *
     * @type {string[]} No localizadas
     */
    this.opciones = opciones;
    this.numAElegir = numAElegir;
    this.checked = 0;
    this.opcionesElegidas = [];
}

/**
 *
 * @param {string} label Ya localizada
 * @param parametros
 * @param callback
 * @param id
 * @returns {*}
 */
function muestraBotonPequeño(label, parametros, callback, id) {
    var divBoton = boton("small primary btn pretty",label);

    divBoton.attr("id",id);
    divBoton.on("click",parametros,callback);
    return divBoton;
}

/**
 *
 * @param {string} label Ya localizada
 * @param parametros
 * @param callback
 * @param id
 * @returns {*}
 */
function muestraBotonMediano(label, parametros, callback, id) {
    var divBoton = boton("medium primary btn pretty",label);

    divBoton.attr("id",id);
    divBoton.on("click",parametros,callback);
    return divBoton;
}

/**
 *
 * @param {string} clase
 * @param {string} labelId Ya localizado
 * @param {boolean} [disabled]
 * @returns {*}
 */
function boton(clase, labelId, disabled) {
    var boton = getDiv(clase);
    boton.append("<a href='#'>"+ labelId + "</a>");

    if (disabled) {
        disableButton(boton);
    }

    return boton;
}

function eventoDesactivado(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}

function disableButton(bot) {
    bot.addClass("disabledButton");

    bot.on("click",eventoDesactivado);
}

function enableButton(bot) {
    bot.removeClass("disabledButton");

    bot.off("click",eventoDesactivado);
}

function botonActivado(boton, activado) {
    if (activado) {
        enableButton(boton);
    } else {
        disableButton(boton);
    }
}

var applyContainerHeight = function() {
    var height = $(window).height();
    try {
        $(".ui-dialog").dialog("option","height",height * 0.8);
    } catch (err) {

    }
};


$(window).on("resize",function() {
    applyContainerHeight();
    ALTO_DIALOGO =  $(window).height() * 0.8;
    ALTO_DIALOGO =  $(window).height() * 0.8;
});