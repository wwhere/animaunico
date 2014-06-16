
function dialogoCV() {
    var dialogo = getDiv();

    var actualizarDialogoPsiquica = function() {
        var titulo;
        var contenido;
        var cvLibres = personaje_actual.getHabilidadDePersonaje(HB_CV).valorFinalActual() - personaje_actual.getCVGastados();

        dialogo.empty();

        /**
         * CVs, potencial psíquico e innatos
         */
        dialogo.append(muestraSubtitulo(UI_CVS_POTENCIAL, false, false, []));

        var divHabilidades = getDiv();

        divHabilidades.append(muestraCabecerasBaseBonosFinal());

        var divCVs = getDiv().append(muestraHabilidadPrimaria(HB_CV,_l(UI_CV),true));
        var divCVsLibres = getDiv().append(muestraValorPuntual(0,_l(UI_CV_LIBRES),cvLibres,{}));
        var divPotencial = getDiv().append(muestraHabilidadPrimaria(HB_POTENCIAL_PSIQUICO,_l(UI_POTENCIAL_PSIQUICO),true));
        var botonMasInnato = boton("small primary pretty btn",_l("+"),(cvLibres < 2));
        var botonMenosInnato = boton("small secondary pretty btn",_l("-"),(personaje_actual.getInnatosPsiquicos() == 0));
        var divBotones = getDiv().append(botonMasInnato).append(botonMenosInnato);
        var divInnatos = getDiv().append(muestraValorPuntual("2 CV",_l(UI_INNATO),personaje_actual.getInnatosPsiquicos(),{},divBotones));

        botonMasInnato.on("click", {cantidad: 1}, comprarInnato);
        botonMenosInnato.on("click", {cantidad: -1}, comprarInnato);

        divHabilidades.append(divCVs).append(divCVsLibres).append(divPotencial).append(divInnatos);

        dialogo.append(divHabilidades);

        /**
         * Disciplinas y poderes
         */
        dialogo.append(muestraSubtitulo(UI_DISCIPLINAS_DOMINADAS, false, false, []));

        var botonAfinidadDisciplinaDisabled = false;

        if (cvLibres < 1) {
            botonAfinidadDisciplinaDisabled = true;
        }

        if (!personaje_actual.hasFlag(FLAG_PSIQUICO)) {
            botonAfinidadDisciplinaDisabled = true;
        } else if (!personaje_actual.hasFlag(FLAG_ACCESO_TODAS_DISCIPLINAS)) {
            if (personaje_actual.getDisciplinasPsiquicas().length == personaje_actual.getAccesoDisciplinas().length) {
                botonAfinidadDisciplinaDisabled = true;
            }
        }
        var divBotonNuevaDisciplina = muestraBotonPequeño(_l(UI_AFINIDAD_CON_NUEVA_DISCIPLINA) + "[1 " + _l(UI_CV) + "]",{},afinidadNuevaDisciplina,"");
            //boton("medium primary pretty btn",,botonAfinidadDisciplinaDisabled);

        dialogo.append(divBotonNuevaDisciplina);

        if (botonAfinidadDisciplinaDisabled) {
            disableButton(divBotonNuevaDisciplina);
        }


        var zonasDisciplinas = getDiv();
        /**
         *
         * @type {DisciplinaPsiquicaAccedida[]}
         */
        var disciplinasPsiquicas = personaje_actual.getDisciplinasPsiquicas();
        for (var i = 0; i < disciplinasPsiquicas.length; i++) {
            titulo = $("<h3></h3>").append(_l(disciplinasPsiquicas[i].getNombre()));

            titulo.append(muestraBotonAnular(eliminarAfinidadDisciplina,{disciplina: disciplinasPsiquicas[i]}));

            contenido = getDiv().attr("id","disciplinaPsiquica" + disciplinasPsiquicas[i].getNombre().replace(/\s+/g, ''));
            appendPoderesPsiquicos(contenido,disciplinasPsiquicas[i].disciplina);

            zonasDisciplinas.append(titulo).append(contenido);
        }

        var poderesMatriciales = getDisciplina(DISCIPLINA_PODERES_MATRICIALES);
        titulo = $("<h3></h3>").append(_l(poderesMatriciales.getNombre()));
        contenido = getDiv().attr("id","disciplinaPsiquica" + poderesMatriciales.getNombre().replace(/\s+/g, ''));
        if (personaje_actual.hasFlag(FLAG_PSIQUICO)) {
            appendPoderesPsiquicos(contenido,poderesMatriciales);
        }
        zonasDisciplinas.append(titulo).append(contenido);

        zonasDisciplinas.accordion({
            heightStyle: "content"
        });
        dialogo.append(zonasDisciplinas);
    };

    actualizarDialogoPsiquica();

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        resizable: true,
        draggable: true,
        title: _l(DIAG_PODERES_PSIQUICOS),
        position: "center",
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true
    });

    dialogo.on("close",function( event, ui ) {
        dialogo.empty();
        removeActualizador(EVENT_CHARACTER_SECCION_PSIQUICA,actualizarDialogoPsiquica);
    });


    addActualizador(EVENT_CHARACTER_SECCION_PSIQUICA,actualizarDialogoPsiquica);
}


function appendPoderesPsiquicos(elemento, disciplinaPsiquica) {
    var poderesDominados = personaje_actual.getPoderesDominadosDisciplina(disciplinaPsiquica);

    var noQuedanCV = (personaje_actual.getHabilidadDePersonaje(HB_CV).valorFinalActual()-personaje_actual.getCVGastados() == 0);

    var nuevoPoder = muestraBotonPequeño(_l(UI_DOMINAR_NUEVO_PODER) + "[1 " + _l(UI_CV) + "]",{disciplina: disciplinaPsiquica},elegirPoderADominar,"");

    elemento.append(nuevoPoder);

    if (((poderesDominados.length == disciplinaPsiquica.getPoderesPsiquicos().length) || noQuedanCV)) {
        disableButton(nuevoPoder);
    }

    for (var i = 0; i < poderesDominados.length; i++) {
        var poder = poderesDominados[i];
        var divPoder = getDiv();

        var botonMas = boton("small primary pretty btn",_l("+"),((poder.getFortalecimiento() == 10) || noQuedanCV));
        var botonMenos = boton("small primary pretty btn",_l("-"),(poder.getFortalecimiento() == 0));
        var divBotones = getDiv().append(botonMas).append(botonMenos);

        var labelPoder = muestraValorPuntual(" " + _l(UI_NV) + ":" + poder.getPoder().getNivel() + " ",_l(poder.getPoder().getNombre()),poder.getFortalecimiento()*10,{descripcion:_l(UI_POTENCIAL)},divBotones);

        divPoder.append(labelPoder);

        botonMas.on("click", {disciplina: disciplinaPsiquica, poder: poder, cantidad: 1}, fortalecerPoderPsiquico);

        botonMenos.on("click", {disciplina: disciplinaPsiquica, poder: poder, cantidad: -1}, fortalecerPoderPsiquico);

        divPoder.append(botonMas).append(botonMenos).append(muestraBotonAnular(eliminarPoderDominado,{disciplina: disciplinaPsiquica, poder: poder}));

        elemento.append(divPoder);
    }
}


function elegirPoderADominar(event) {
    var disciplina = event.data.disciplina;

    var arrayOpciones = [];
    var poderesPsiquicos = disciplina.getPoderesPsiquicos();
    for (var j = 0; j < poderesPsiquicos.length; j++) {
        var poder = poderesPsiquicos[j];
        arrayOpciones.push(new OpcionMostrable(_l(poder.getNombre()),poder.getNombre(),"",_l(poder.getDescripcion())));
    }

    muestraDialogoElegirOpciones(arrayOpciones, {disciplina: disciplina}, {principal: dominarPoder, isDisabled: noPuedeDominarPoder}, true);
}


