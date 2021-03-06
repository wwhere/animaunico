/**
 *
 */
function dialogoElan() {
    var dialogo = $("<div></div>");

    var zonasElan = $("<div></div>");
    var elanPersonaje = personaje_actual.getElan();
    for (var i = 0; i < elanPersonaje.length; i++) {
        var titulo = $("<h3></h3>");
        titulo.append(_l(elanPersonaje[i].getNombre()) + " - " + _l(UI_SINCRONIZACION) + ": " + elanPersonaje[i].getSincronizacion() + " / " + _l(UI_LIBRE) + ": " + elanPersonaje[i].sincLibre());
        var contenido = $("<div></div>");
        contenido.attr("id","donesElan" + elanPersonaje[i].getNombre());
        appendDonesElan(contenido,elanPersonaje[i].getNombre(),dialogo);
        zonasElan.append(titulo).append(contenido);
    }
    zonasElan.accordion({
        heightStyle: "content"
    });
    dialogo.append(zonasElan);

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: true,
        ////show: "puff",
        title: _l(DIAG_ELEGIR_OPCIONES_TITULO),
        position: "center",
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true,
        close: function(event, ui) {dialogo.empty();}
    });
}

/**
 *
 * @param {jQuery} elemento
 * @param {string} nombre
 * @param {jQuery} dialogo
 */
function appendDonesElan(elemento, nombre, dialogo) {
    var elan = getElan(nombre);
    var dones = elan.getDones();

    var gridBotones = $("<ul></ul>").addClass("three_up tiles");

    for (var i = 0; i < dones.length; i++) {
        var labelBoton = "[" + dones[i].getCoste() + "] " + _l(dones[i].getNombre()) + "<br>";
        labelBoton += _l(ELAN_SYNC_REQ) + " " + dones[i].getElanMinimo();
        if (dones[i].getDonesRequisito().length > 0) {
            labelBoton += ", ";
            /**
             *
             * @type {string[]}
             */
            var donesRequisito = dones[i].getDonesRequisito();
            for (var j = 0; j < donesRequisito.length; j++) {
                labelBoton += _l(donesRequisito[j]);
                if (j+1 < donesRequisito.length) {
                    labelBoton += ", ";
                }
            }
        }
        var botonDon = boton("big primary pretty btn",labelBoton,!dones[i].puedeComprarse());
        botonDon.css("width", "100%");

        botonDon.on("click",{indice: i}, function(event) {
            var i = event.data.indice;
            dialogo.dialog("close" );
            aplicarDonElan(dones[i],nombre);
        });

        gridBotones.append($("<li></li>").append(botonDon));
    }
    elemento.append(gridBotones);
}
