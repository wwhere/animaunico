/**
 *
 */
function dialogoElegirArmaTodas() {
    var catArmas = [];

    for (var i=0; i<armas_set.length;i++) {
        var arma = armas_set[i];
        var categoria = arma.getCategoria();

        if (categoria != CAT_ARMA_MUNICION) {
            catArmas.push(categoria);
        }
    }
    dialogoElegirArma(catArmas, {principal:aplicarArma, isDisabled: alwaysEnabled},{})
}

function dialogoElegirTipoArma(categoriasPermitidas, callback, parametros) {
    var i;
    var j;
    var arrayOpciones = [];

    categorias:
    for (i=0; i<categoriasPermitidas.length;i++) {
        var categoria = categoriasPermitidas[i];

        for (j=0; j < arrayOpciones.length; j++) {
            if (categoria == arrayOpciones[j].etiqueta) {
                continue categorias;
            }
        }

        arrayOpciones.push(new OpcionMostrable(_l(categoria),categoria,""));
    }

    parametros.elegir = true;

    muestraDialogoElegirOpciones(arrayOpciones, parametros, callback, true);
}

/**
 *
 * @param {string[]} categoriasPermitidas
 * @param callback
 * @param parametros
 */
function dialogoElegirArma(categoriasPermitidas, callback, parametros) {
    var arrayArmas = [];
    var categorias = [];
    var i;
    var j;
    var k;

    for (i=0; i<armas_set.length;i++) {
        var arma = armas_set[i];
        var categoria = arma.getCategoria();
        var categoriaLoc = arma.getCategoriaLoc();

        var permitida = false;
        for (k = 0; k < categoriasPermitidas.length; k++) {
            if (categoria == categoriasPermitidas[k]) {
                permitida = true;
                break;
            }
        }
        if (!permitida) {
            continue;
        }
        var categoriaLimpia = categoria.replace("/","");

        var yaListada = false;
        for (j=0; j < categorias.length; j++) {
            if (categorias[j].etiqueta == categoriaLoc) {
                yaListada = true;
                break;
            }
        }

        if (!yaListada) {
            categorias.push(new OpcionMostrable(categoriaLoc,categoriaLimpia+"ElegirArma",categoriaLimpia+"ElegirArma"));
        }

        arrayArmas.push(new OpcionMostrable(_l(arma.nombre),arma.nombre,categoriaLimpia+"ElegirArma"));

    }

    parametros.elegir = true;

    muestraDialogoElegirOpciones(arrayArmas, parametros, callback, true, categorias);
}

function muestraVentanaCompraEquipo() {
    var dialogo = getDiv();
    var zonaActual;
    var contenidoDialogo;

    var actualizarDialogoEquipo = function(activo) {
        dialogo.empty();
        contenidoDialogo = getDiv("");

        for (var j = 0; j < categorias_equipo.length; j++) {
            var categ = categorias_equipo[j];
            var divCateg = getDiv("contenedorBotonesVentajas");
            var gridCateg = $("<ul></ul>").addClass("three_up tiles").addClass(CSS_TEXTO_SMALL);

            contenidoDialogo.append("<h3>"+_l(categ)+"</h3>");

            for (var i =0; i < equipo_set[j].length; i++) {
                if (!equipo_set[j][i].isNoComprable()) {
                    var item = equipo_set[j][i];
                    var itemNormal = new EquipoComprado(item,0,"");
                    var itemBueno = new EquipoComprado(item,5,"");
                    var itemMalo = new EquipoComprado(item,-5,"");
                    var labelNormal = itemNormal.toString() + " [" + itemNormal.getCosteDinero().toString() + "]";
                    var labelBueno = itemBueno.toString() + " [" + itemBueno.getCosteDinero().toString() + "]";
                    var labelMalo = itemMalo.toString() + " [" + itemMalo.getCosteDinero().toString() + "]";
                    var botonItemNormal = boton("big pretty primary btn",labelNormal,!personaje_actual.puedeGastarse(itemNormal.getCosteDinero())).addClass("botonDialogoOpciones").css("width","100%");
                    var botonItemBueno = boton("big pretty primary btn",labelBueno,!personaje_actual.puedeGastarse(itemBueno.getCosteDinero())).addClass("botonDialogoOpciones").css("width","100%");
                    var botonItemMalo = boton("big pretty primary btn",labelMalo,!personaje_actual.puedeGastarse(itemMalo.getCosteDinero())).addClass("botonDialogoOpciones").css("width","100%");

                    gridCateg.append($("<li></li>").append(botonItemMalo));
                    gridCateg.append($("<li></li>").append(botonItemNormal));
                    gridCateg.append($("<li></li>").append(botonItemBueno));

                    botonItemMalo.on("click",{item: item}, function(event) {
                        var item = event.data.item;
                        personaje_actual.compra(item, false, -5);
                    });
                    botonItemBueno.on("click",{item: item}, function(event) {
                        var item = event.data.item;
                        personaje_actual.compra(item, false, 5);
                    });
                    botonItemNormal.on("click",{item: item}, function(event) {
                        var item = event.data.item;
                        personaje_actual.compra(item, false, 0);
                    });

                }
            }
            divCateg.append(gridCateg);
            contenidoDialogo.append(divCateg);
        }

        dialogo.append(contenidoDialogo);

        contenidoDialogo.accordion({
            heightStyle: "content",
            active: activo,
            collapsible: true
        });
    };

    actualizarDialogoEquipo(false);

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        resizable: true,
        draggable: true,
        title: _l(DIAG_COMPRA_EQUIPO),
        position: "center",
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true
    });

    dialogo.on("close",function( event, ui ) {
        dialogo.empty();
        removeActualizador(EVENT_CHARACTER_SECCION_EQUIPO,actualizarDialogoEquipo);
    });

    addActualizador(EVENT_CHARACTER_SECCION_EQUIPO,function() {
        actualizarDialogoEquipo($(contenidoDialogo).accordion("option","active"));
    });
}

function muestraVentanaAñadirEquipo() {
    var dialogo = getDiv();
    var zonaActual;
    var contenidoDialogo;

    var actualizarDialogoEquipo = function(activo) {
        dialogo.empty();
        contenidoDialogo = getDiv("");

        for (var j = 0; j < categorias_equipo.length; j++) {
            var categ = categorias_equipo[j];
            var divCateg = getDiv("contenedorBotonesVentajas");
            var gridCateg = $("<ul></ul>").addClass("three_up tiles").addClass(CSS_TEXTO_SMALL);

            contenidoDialogo.append("<h3>"+_l(categ)+"</h3>");

            for (var i =0; i < equipo_set[j].length; i++) {
                if (!equipo_set[j][i].isNoComprable()) {

                    var item = equipo_set[j][i];
                    var label = item.toString();
                    var botonItem = boton("big pretty primary btn",label,false).addClass("botonDialogoOpciones").css("width","100%");

                    gridCateg.append($("<li></li>").append(botonItem));

                    botonItem.on("click",{item: item}, function(event) {
                        seleccionaBono(event.data.item);
                    });
                }
            }
            divCateg.append(gridCateg);
            contenidoDialogo.append(divCateg);
        }

        dialogo.append(contenidoDialogo);

        contenidoDialogo.accordion({
            heightStyle: "content",
            active: activo,
            collapsible: true
        });
    };

    actualizarDialogoEquipo(false);

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        resizable: true,
        draggable: true,
        title: _l(DIAG_AÑADIR_EQUIPO),
        position: "center",
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true
    });

    dialogo.on("close",function( event, ui ) {
        dialogo.empty();
        removeActualizador(EVENT_CHARACTER_SECCION_EQUIPO,actualizarDialogoEquipo);
    });

    addActualizador(EVENT_CHARACTER_SECCION_EQUIPO,function() {
        actualizarDialogoEquipo($(contenidoDialogo).accordion("option","active"));
    });
}

function seleccionaBono(item) {
    var arrayOpciones = [];
    arrayOpciones.push(new OpcionMostrable("-5","-5",""));
    arrayOpciones.push(new OpcionMostrable("+0","+0",""));
    arrayOpciones.push(new OpcionMostrable("+5","+5",""));
    arrayOpciones.push(new OpcionMostrable("+10","+10",""));
    arrayOpciones.push(new OpcionMostrable("+15","+15",""));
    arrayOpciones.push(new OpcionMostrable("+20","+20",""));
    arrayOpciones.push(new OpcionMostrable("+25","+25",""));

    muestraDialogoElegirOpciones(arrayOpciones,{item:item},{principal:añadirObjeto,isDisabled:alwaysEnabled},true);
}

function añadirObjeto(parametros) {
    personaje_actual.compra(parametros.item, true, parseInt(parametros.opcion))
}