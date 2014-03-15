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


