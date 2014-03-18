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
            if (categorias[j].etiqueta == categoria) {
                yaListada = true;
                break;
            }
        }

        if (!yaListada) {
            categorias.push(new OpcionMostrable(categoriaLoc,categoria,categoriaLimpia+"ElegirArma"));
        }

        arrayArmas.push(new OpcionMostrable(_l(arma.nombre),arma.nombre,categoriaLimpia+"ElegirArma"));

    }

    parametros.elegir = true;

    muestraDialogoElegirOpciones(arrayArmas, parametros, callback, true, categorias);
}

function muestraVentanaCompraEquipo() {
    var dialogo = getDiv();

    var actualizarDialogoEquipo = function() {
        dialogo.empty();
        var contenidoDialogo = getDiv("");

        var gridGeneral = $("<ul></ul>").addClass("four_up tiles");

            for (var j = 0; j < categorias_equipo.length; j++) {
                var categ = categorias_equipo[j];
                var divCateg = getDiv("contenedorBotonesVentajas");
                var gridCateg = $("<ul></ul>").addClass("four_up tiles");

                contenidoDialogo.append("<h3>"+categ+"</h3>");

                for (var i =0; i < equipo_set[j].length; i++) {
                    var item = equipo_set[j][i];
                    var label = item.toString() + " [" + item.getCosteDinero().toString() + "]";
                    var botonItem = boton("big pretty primary btn",label,!personaje_actual.puedeGastarse(item.getCosteDinero()));
                    botonItem.addClass("botonDialogoOpciones");
                    botonItem.css("width","100%");

                    gridCateg.append($("<li></li>").append(botonItem));

                    botonItem.on("click",{item: item}, function(event) {
                        item = event.data.item;
                        personaje_actual.compra(item);
                    });


                }
                divCateg.append(gridCateg);
                contenidoDialogo.append(divCateg);
            }

        dialogo.append(contenidoDialogo);

            contenidoDialogo.accordion({
                heightStyle: "content"
            });
    };

    actualizarDialogoEquipo();

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        resizable: true,
        draggable: true,
        title: DIAG_COMPRA_EQUIPO,
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

    addActualizador(EVENT_CHARACTER_SECCION_EQUIPO,actualizarDialogoEquipo);
}
