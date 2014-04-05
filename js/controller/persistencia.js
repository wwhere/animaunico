function doLogin() {
    $.ajax
    ({
        type: "POST",
        url: "http://helechaloscuro.net/cake/users/login",
        dataType: 'json',
        async: false,
        username: $("input#username").val(),
        password: $("input#password").val(),
        data: '{ "username"="'+$("input#username").val()+'","password":"'+$("input#password").val()+'" }',
        success: function (){
            //TODO esconder boton login
        }
    });
}

function muestraDialogoGuardarPersonaje() {
    var dialogo  = $("#dialogFileSystem");
    dialogo.empty();

    var personajeSerializado = JSON.stringify(personaje_actual);

    /**Metodo 0: servidor */
    var enlaceServidorDiv = $("<div></div>");

    var tituloServidor = getDiv(CSS_SUBTITULO_SECCION).append(_l(UI_PERSIS_METODO_SERVIDOR));
    var textoServidor = getDiv(CSS_TEXTO_SMALL);
    var explicacionServidor = getDiv().append(_l(UI_PERSIS_METODO_SERVIDOR_DESC));

    var formServidor = $("<form name='salvaPersonaje' action='http://www.helechaloscuro.net/cake/personajes/salva' method='post' target='_blank'>" +
        "<textarea name='nombre' hidden>"+personaje_actual.getNombre()+"</textarea> " +
        "<textarea name='categoria' hidden>"+personaje_actual.getStringCategoria() +"</textarea> " +
        "<input type='text' name='nivel' hidden value='"+personaje_actual.getNivel()+"'/> " +
        "<textarea name='raza' hidden>"+_l(personaje_actual.getRaza().toString()) +"</textarea> " +
        "<textarea name='descripcion' hidden>"+personaje_actual.getDescripcion() +"</textarea> " +
        "<textarea name='trasfondo' hidden>"+personaje_actual.getTrasfondo() +"</textarea> " +
        "<textarea name='json' hidden>"+personajeSerializado+"</textarea> " +
        "<input type='submit' value='Guardar'/>" +
        "</form>" );

    dialogo
        .append(enlaceServidorDiv
            .append(tituloServidor)
            .append(textoServidor
                .append(explicacionServidor)
                .append(formServidor)
            )
        );

    /**Metodo 1: por enlace de descarga */
    var enlaceDescargaDiv = $("<div></div>");

    var tituloEnlace = getDiv(CSS_SUBTITULO_SECCION).append(_l(UI_PERSIS_METODO_ENLACE));
    var textoEnlace = getDiv(CSS_TEXTO_SMALL);
    var explicacionEnlace = getDiv().append(_l(UI_PERSIS_METODO_ENLACE_DESC));

    var enlace = $("<a href='#' onclick='descarga();'>" + _l(UI_PERSIS_METODO_ENLACE_TEXTO) + "</a>");
    dialogo.append(enlaceDescargaDiv.append(tituloEnlace).append(textoEnlace.append(explicacionEnlace).append(enlace)));

    /**Mettodo 2: por copia y pega*/
    var copiaPegaDiv = $("<div></div>");
    var tituloCopiaPega = getDiv(CSS_SUBTITULO_SECCION).append(_l(UI_PERSIS_METODO_COPIA));
    var textoCopiaPega = getDiv(CSS_TEXTO_SMALL);
    var explicacionCopiaPega = getDiv().append(_l(UI_PERSIS_METODO_COPIA_DESC));
    var copiaPega = $("<textarea></textarea>").append(personajeSerializado);
    var botonCopiaPega = muestraBotonPequeño(_l(UI_PERSIS_METODO_COPIA_TEXTO),{texto:personajeSerializado},copiaAlPortapapeles);
    dialogo.append(copiaPegaDiv.append(tituloCopiaPega).append(textoCopiaPega.append(explicacionCopiaPega).append(copiaPega).append(botonCopiaPega)));

    /**Mettodo 3: web storage*/
/*    var webStorageDiv = $("<div></div>");
    var tituloWebStorage = getDiv(CSS_SUBTITULO_SECCION).append("Método 3: Almacenamiento Web");
    var textoWebStorage = getDiv(CSS_TEXTO_SMALL);
    var explicacionWebStorage = "";
    if (typeof(Storage)!=="undefined") {
        explicacionWebStorage = getDiv().append("Con este método el personaje se almacenará internamente en tu ordenador, en el navegador web y luego podrás cargarlo desde allí.");
    } else {
        explicacionWebStorage = getDiv().append("Tu navegador no permite usar este método. Lo siento.");
    }

    var botonWebStorage = muestraBotonPequeño("Guarda en el navegador",{texto:personajeSerializado},guardaEnWebStorage);
    dialogo.append(webStorageDiv.append(tituloWebStorage).append(textoWebStorage.append(explicacionWebStorage).append(botonWebStorage)));
*/
    dialogo.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: false,
        closeOnEscape: true,
        ////show: "puff",
        title: _l(UI_BOTON_GUARDAR),
        width: 500,
        height: 500
    });
}

function copiaAlPortapapeles(event) {
    window.prompt(_l(UI_PERSIS_METODO_COPIA_GUIA), event.data.texto);
}

function descarga() {
    download(personaje_actual.getNombre()+".animaUnico",JSON.stringify(personaje_actual));
}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
}

function muestraDialogoCargarPersonaje() {
//    personaje_actual = parseObject(prompt("Introduzca personaje..."));

    var dialogo  = $("#dialogFileSystem");
    dialogo.empty();

    /**Metodo 0: servidor */
    var enlaceServidorDiv = $("<div></div>");
    var tituloServidor = getDiv(CSS_SUBTITULO_SECCION).append(_l(UI_PERSIS_METODO_SERVIDOR));
    var textoServidor = getDiv(CSS_TEXTO_SMALL);

    var explicacionServidor = getDiv().append(_l(UI_PERSIS_METODO_SERVIDOR_CARGA_DESC));
    var enlaceCargaServidor = $("<a href='http://helechaloscuro.net/cake/personajes/index' target='_blank'>" + _l(UI_PERSIS_METODO_SERVIDOR_CARGA_TEXTO) + "</a>");
    dialogo.append(enlaceServidorDiv.append(tituloServidor).append(textoServidor.append(explicacionServidor).append(enlaceCargaServidor)));

    /**Metodo 1: carga de fichero */
    var enlaceDescargaDiv = $("<div></div>");

    var tituloEnlace = getDiv(CSS_SUBTITULO_SECCION).append(_l(UI_PERSIS_METODO_CARGA_FICHERO));
    var textoEnlace = getDiv(CSS_TEXTO_SMALL);

    var explicacionEnlace = getDiv().append(_l(UI_PERSIS_METODO_CARGA_FICHERO_DESC));
    var inputDiv = $("<input>");
    inputDiv.attr("type","file");
    inputDiv.attr("id","loadCharacterFile");
    inputDiv.attr("name","file");
    inputDiv.attr("accept",".animaUnico");

    dialogo.append(enlaceDescargaDiv.append(tituloEnlace).append(textoEnlace.append(explicacionEnlace).append(inputDiv)));
    document.getElementById('loadCharacterFile').addEventListener('change', function (evt) {
        dialogo.dialog("close" );
        handleCharacterFileLoad(evt);
    }, false);

    /**Mettodo 2: por copia y pega*/
    var copiaPegaDiv = $("<div></div>");
    var tituloCopiaPega = getDiv(CSS_SUBTITULO_SECCION).append(_l(UI_PERSIS_METODO_COPIA));
    var textoCopiaPega = getDiv(CSS_TEXTO_SMALL);

    var explicacionCopiaPega = getDiv().append(_l(UI_PERSIS_METODO_COPIA_CARGA_DESC));
    var copiaPega = $("<textarea></textarea>").attr("id","zonaCargaPersonaje");

    var botonCopiaPega = muestraBotonPequeño(UI_PERSIS_METODO_COPIA_CARGA,{},cargaCopiaPega);
    dialogo.append(copiaPegaDiv.append(tituloCopiaPega).append(textoCopiaPega.append(explicacionCopiaPega).append(copiaPega).append(botonCopiaPega)));

    /**Mettodo 3: web storage*/
/*    var webStorageDiv = $("<div></div>");
    var tituloWebStorage = getDiv(CSS_SUBTITULO_SECCION).append("Método 3: Almacenamiento Web");
    var textoWebStorage = getDiv(CSS_TEXTO_SMALL);
    var explicacionWebStorage = "";
    var listaPersonajes = getDiv("");
    if (typeof(Storage)!=="undefined") {
        explicacionWebStorage = getDiv().append("Con este método el personaje se carga internamente de tu ordenador, en el navegador web. En estos momentos sólo se carga el último guardado");
        if (localStorage.getItem("numPersonajes")) {
            listaPersonajes.append(cargaDeWebStorage());
        }
    } else {
        explicacionWebStorage = getDiv().append("Tu navegador no permite usar este método. Lo siento.");
    }
    dialogo.append(webStorageDiv.append(tituloWebStorage).append(textoWebStorage.append(explicacionWebStorage).append(listaPersonajes)));
*/

    dialogo.dialog({
        modal: true,
        autoOpen: true,
        draggable: true,
        resizable: false,
        closeOnEscape: true,
        ////show: "puff",
        title: _l(UI_BOTON_CARGAR),
        width: 500,
        height: 500
    });

}

//region Almacenamiento web
function guardaEnWebStorage(event) {
    var numPersonajes = 0;
    if (localStorage.getItem("numPersonajes")) {
        numPersonajes = Number(localStorage.getItem("numPersonajes")) + 1;
    } else {
        numPersonajes = 1;
    }

    var prefijo = "per"+numPersonajes;

    localStorage.setItem("numPersonajes", numPersonajes);
    localStorage.setItem(prefijo, event.data.texto);
    localStorage.setItem(prefijo+"_Nombre", personaje_actual.getNombre());
    localStorage.setItem(prefijo+"_Categoria", personaje_actual.getStringCategoria());
    localStorage.setItem(prefijo+"_Raza", personaje_actual.getRaza());
    localStorage.setItem(prefijo+"_Nivel", personaje_actual.getNivel());
}

function cargaDeWebStorage(event) {
    var numPersonajes = Number(localStorage.getItem("numPersonajes"));
    var div = getDiv(CSS_TEXTO_SMALL);
    for (var i = 1; i <= numPersonajes; i++) {
        var personaje = localStorage.getItem("per"+i);
        var nombre = localStorage.getItem("per"+i+"_Nombre");
        var categoria = localStorage.getItem("per"+i+"_Categoria");
        var raza = localStorage.getItem("per"+i+"_Raza");
        var nivel = localStorage.getItem("per"+i+"_Nivel");
        var divNombre = getDiv(CSS_MUESTRA_INLINE).append(nombre + " [" + categoria + " " + raza + "]");
        var botonCarga = muestraBotonPequeño("Carga",{personaje:personaje},lanzaCargado);
        div.append(divNombre).append(botonCarga);
    }
    return div;
}
//endregion Almacenamiento web

function lanzaCargado(event) {
    cargarPersonaje(event.data.personaje);
}

function cargaCopiaPega() {
    var texto = $("#zonaCargaPersonaje")[0].value;
    cargarPersonaje(texto);
}
function sv(item) {
    return JSON.stringify(item);
}

function handleCharacterFileLoad(evt) {

    /** @type FileReader */
    var reader;

    for (var i = 0; i < evt.target.files.length; i++) {
        /**  @type FileList */
        var f = evt.target.files[i]; // FileList object
        reader = new FileReader();

        reader.onload = (function(theFile) {
            return function(e) {
                cargarPersonaje(e.target.result);
            };
        })(f);

        reader.readAsText(f);
    }
}

/**
 *
 * @param {string[]} v
 * @returns {Elan[]}
 */
function parseArrayElan(v) {
    var elan = [];

    for (var i = 0; i < v.length;i++) {
        var nuevoElan = new Elan("",0);
        parseElan(nuevoElan,v[i]);
        elan.push(nuevoElan);
    }

    return elan;
}

function parseElan(elan,texto) {
    parseObject(texto, function(k,v) {
        switch (k) {
            case 'dones':
                elan[k] = parseArrayDonElan(v);
                break;
            default:
                elan[k] = v;
        }
    });
}

/**
 *
 * @param {string[]} a
 */
function parseArrayDonElan(a) {
    var dones = [];
    for (var i = 0; i < a.length; i++) {
        var don = new DonElan("","",0,0,[],[]);
        parseStandard(don, a[i]);
    }
    return dones;
}

function parseStandard(elemento,texto) {
    parseObject(texto, function(k,v) {
        elemento[k] = v;
    });
}

/**
 *
 * @param {string} v
 * @returns {NivelEnVia[]}
 */
function parseArrayNivelEnVia(v) {
    var viasMagia = [];

    for (var i = 0; i < v.length;i++) {
        var nivelEnVia = new NivelEnVia(getVia(VIA_AGUA),0);
        parseNivelEnVia(nivelEnVia,v[i]);
        viasMagia.push(nivelEnVia);
    }

    return viasMagia;
}

function parseNivelEnVia(nivelEnVia,texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'via':
                nivelEnVia[k] = parseViaMagia(v);
                break;
            case 'conjurosLibres':
                //nivelEnVia[k] = parseArrayConjurosLibres(v, nivelEnVia);
                break;
            case 'nivel4':
            case 'nivel8':
            case 'nivel14':
            case 'nivel18':
            case 'nivel24':
            case 'nivel28':
            case 'nivel34':
            case 'nivel38':
            case 'nivel44':
            case 'nivel48':
            case 'nivel54':
            case 'nivel58':
            case 'nivel64':
            case 'nivel68':
            case 'nivel74':
            case 'nivel78':
            case 'nivel84':
            case 'nivel88':
            case 'nivel94':
            case 'nivel98':
                nivelEnVia[k] = parseConjuroLibre(v, k.substr(5));
                if (!nivelEnVia.conjurosLibres) {
                    nivelEnVia.conjurosLibres = [];
                }
                nivelEnVia.conjurosLibres.push(nivelEnVia[k]);
                break;
            default:
                nivelEnVia[k] = v;
        }
    });
}

function parseViaMagia(texto) {
    return getVia(texto);
}

/**
 *
 * @param {string} v
 */
function parseArrayCategorias(v) {
    var categorias = [];

    for (var i = 0; i < v.length;i++) {
        var categoria = getCategoria(v[i]);
        categorias.push(categoria);
    }

    return categorias;
}

function parseArrayAumentosCaracteristicas(v) {
    var aumentos = [];

    for (var i = 0; i < v.length;i++) {
        var aumento = new AumentoCaracteristicas();
        parseStandard(aumento,v[i]);
        aumentos.push(aumento);
    }

    return aumentos;
}
/**
 *
 * @param {string} v
 * @returns {Conjuro[]}
 */
function parseArrayConjuros(v) {
    var conjuros = [];

    for (var i = 0; i < v.length;i++) {
        //var conjuro = new Conjuro("",1,"",[],"",new NivelesConjuro(0,0,0,0,false),new NivelesConjuro(0,0,0,0,false),new NivelesConjuro(0,0,0,0,false),new NivelesConjuro(0,0,0,0,false));
        //parseConjuro(conjuro,v[i]);
        var conjuro = getConjuro(v[i]);
        conjuros.push(conjuro);
    }

    return conjuros;
}

/**
 *
 * @param {string} v
 * @returns {Conjuro[]}
 */
function parseConjuroLibre(v, nivelAprendido) {
    return getConjuroLibreAprendido(getConjuroLibreAcceso(v),nivelAprendido);
}

function parseConjuro(conjuro, texto) {
    parseObject(texto,function(k,v) {
        //noinspection FallThroughInSwitchStatementJS
        switch (k) {
            case 'mantenimiento':
                if (v == false) {
                    conjuro[k] = v;
                    break;
                }
            case 'costesZeon':
            case 'intReq':
            case 'objetivo':
                conjuro[k] = new NivelesConjuro(0,0,0,0,false);
                parseStandard(conjuro[k],v);
                break;
            default:
                conjuro[k] = v;
        }
    });
}

/**
 *
 * @param {string} v
 * @returns {Bono[]}
 */
function parseArrayBonos(v) {
    var bonos = [];

    for (var i = 0; i < v.length;i++) {
        var bono = new Bono("","",0,"",false,"","");
        parseStandard(bono,v[i]);
        bonos.push(bono);
    }

    return bonos;
}

/**
 *
 * @param {string} v
 * @returns {Coste[]}
 */
function parseArrayCostesReducidos(v) {
    var costesReducidos = [];

    for (var i = 0; i < v.length;i++) {
        var coste = new Coste("",0,false,"");
        parseStandard(coste,v[i]);
        costesReducidos.push(coste);
    }

    return costesReducidos;
}
/**
 *
 * @param {string} v
 * @returns {BonificadorNatural[]}
 */
function parseArrayBonificadoresNaturales(v) {
    var bonificadoresNaturales = [];

    for (var i = 0; i < v.length;i++) {
        var bono = new BonificadorNatural();
        parseStandard(bono,v[i]);
        bonificadoresNaturales.push(bono);
    }

    return bonificadoresNaturales;
}


/**
 *
 * @param {string} v
 * @returns {ElementoPCComprado[]}
 */
function parseArrayElementoPCComprado(v) {
    var ventajas = [];
    var elementoPC = new Ventaja("","","","",[],[],false,[],null,"");
    for (var i = 0; i < v.length;i++) {
        //noinspection JSValidateTypes
        var ventaja = new ElementoPCComprado(elementoPC,0,"","");
        parseElementoPCComprado(ventaja,v[i]);
        ventajas.push(ventaja);
    }

    return ventajas;
}

function parseElementoPCComprado(elemento, texto) {
    parseObject(texto,function(k,v) {
        //noinspection FallThroughInSwitchStatementJS
        switch (k) {
            case 'ventaja':
                elemento[k] = parseVentaja(v);
                break;
            case 'repartoCostes':
                elemento[k] = new RepartoCostes();
                parseStandard(elemento[k],v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

function parseVentaja(texto) {
    return getVentaja(texto);
}


/**
 *
 * @param {string} v
 * @returns {ElementoProhibido[]}
 */
function parseArrayElementoProhibido(v) {
    var prohibidos = [];

    for (var i = 0; i < v.length;i++) {
        var proh = new ElementoProhibido("","");
        parseStandard(proh,v[i]);
        prohibidos.push(proh);
    }

    return prohibidos;
}

/**
 *
 * @param {string} v
 * @returns {HabilidadDePersonaje[]}
 */
function parseArrayHabilidadDePersonaje(v) {
    var allHabilidades = [];

    for (var i = 0; i < v.length;i++) {
        var habi = new HabilidadDePersonaje(getHabilidad(HB_ADVERTIR));
        parseHabilidadDePersonaje(habi,v[i]);
        allHabilidades.push(habi);
        personaje_actual[habi.getNombre()] = habi;
    }

    return allHabilidades;
}

function parseHabilidadDePersonaje(elemento,texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'habilidad':
                elemento[k] = parseHabilidad(v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

function parseHabilidad(texto) {
    return getHabilidad(texto);
}

/**
 *
 * @param {string} v
 * @returns {Arma[]}
 */
function parseArrayArma(v) {
    var armas = [];

    for (var i = 0; i < v.length;i++) {
        armas.push(parseArma(v[i]));
    }

    return armas;
}

function parseArma(texto) {
    return getArma(texto);
}

function parseYelmoComprado(elemento,texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'yelmo':
                elemento[k] = parseEquipo(v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

/**
 *
 * @param {string} v
 * @returns {YelmoComprado[]}
 */
function parseArrayYelmoComprado(v) {
    var equipo = [];

    for (var i = 0; i < v.length;i++) {
        var item = new YelmoComprado("",0);
        parseYelmoComprado(item,v[i]);
        equipo.push(item);
    }

    return equipo;
}

function parseArmaduraComprada(elemento,texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'armadura':
                elemento[k] = parseEquipo(v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

/**
 *
 * @param {string} v
 * @returns {ArmaduraComprada[]}
 */
function parseArrayArmaduraComprada(v) {
    var equipo = [];

    for (var i = 0; i < v.length;i++) {
        var item = new ArmaduraComprada("",0);
        parseArmaduraComprada(item,v[i]);
        equipo.push(item);
    }

    return equipo;
}

/**
 *
 * @param {string} v
 * @returns {EquipoComprado[]}
 */
function parseArrayEquipo(v,armas,armaduras,yelmos,equipo) {
    for (var i = 0; i < v.length;i++) {
        var item = getEquipo(v[i]);
        if (esArma(item)) {
            armas.push(new ArmaComprada(item,0));
        } else if (esArmadura(item)) {
            armaduras.push(new ArmaduraComprada(item,0));
        } else if (esYelmo(item)) {
            yelmos.push(new YelmoComprado(item,0));
        } else {
            equipo.push(new EquipoComprado(item,0,""));
        }

    }
}

/**
 *
 * @param {string} v
 * @returns {EquipoComprado[]}
 */
function parseArrayEquipoComprado(v) {
    var equipo = [];

    for (var i = 0; i < v.length;i++) {
        var item = new EquipoComprado("",0,"");
        parseEquipoComprado(item,v[i]);
        equipo.push(item);
    }

    return equipo;
}

function parseArmaComprada(elemento,texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'arma':
                elemento[k] = parseArma(v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

/**
 *
 * @param {string} v
 * @returns {ArmaComprada[]}
 */
function parseArrayArmaComprada(v) {
    var equipo = [];

    for (var i = 0; i < v.length;i++) {
        var item = new ArmaComprada("",0);
        parseArmaComprada(item,v[i]);
        equipo.push(item);
    }

    return equipo;
}

function parseEquipoComprado(elemento,texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'equipoComprado':
                elemento[k] = parseEquipo(v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

function parseEquipo(texto) {
    return getEquipo(texto);
}

/**
 *
 * @param {string} v
 * @returns {TablaArmasComprada[]}
 */
function parseArrayTablasArmasComprada(v) {
    var tablas = [];
    var tablaTemp = new TablaArmas("", "", "", 0, "", [], "", []);

    for (var i = 0; i < v.length;i++) {
        var tabla = new TablaArmasComprada(tablaTemp,"");
        parseTablaArmasComprada(tabla,v[i]);
        tablas.push(tabla);
    }

    return tablas;
}

function parseTablaArmasComprada(elemento, texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'tablaArmas':
                elemento[k] = getTablaArmas(v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

/**
 *
 * @param {string} v
 * @returns {ArteMarcialComprada[]}
 */
function parseArrayArtesMarcialesCompradas(v) {
    var artesMarcialesCompradas = [];

    for (var i = 0; i < v.length;i++) {
        artesMarcialesCompradas.push(parseArteMarcialComprada(v[i]));
    }

    return artesMarcialesCompradas;
}

function parseArteMarcialComprada(texto) {
    var nombreArteMarcial;
    var anulable;

    parseObject(texto,function(k,v) {
        switch (k) {
            case 'arteMarcial':
                nombreArteMarcial = v;
                break;
            case 'anulable':
                anulable = v;
                break;
        }
    });

    var arteMarcialComprado = new ArteMarcialComprada(getArteMarcial(nombreArteMarcial));
    arteMarcialComprado.anulable = anulable;

    return arteMarcialComprado;
}

/**
 *
 * @param {string} v
 * @returns {HabilidadKiComprada[]}
 */
function parseArrayHabilidadKiComprada(v) {
    var habis = [];

    for (var i = 0; i < v.length;i++) {
        var habKi = new HabilidadKiComprada(getHabilidadKi(HAB_KI_DESTRUCCION_KI),false,false);
        parseHabilidadKiComprada(habKi,v[i]);
        habis.push(habKi);
    }

    return habis;
}

function parseHabilidadKiComprada(elemento,texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'habilidadKi':
                elemento[k] = parseHabilidadKi(v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

function parseHabilidadKi(texto) {
    return getHabilidadKi(texto);
}

/**
 *
 * @param {string} v
 * @returns {TecnicaKiComprada[]}
 */
function parseArrayTecnicaKiComprada(v) {
    var tecs = [];
    for (var i = 0; i < v.length;i++) {
        var tecnica = new TecnicaKiComprada("");
        parseTecnicaKiComprada(tecnica,v[i]);
        tecs.push(tecnica);
    }
    return tecs;
}

function parseTecnicaKiComprada(elemento,texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'tecnicaKi':
                var tecnica = new TecnicaKi(1);
                parseTecnicaKi(tecnica,v);
                elemento[k] = tecnica;
                break;
            default:
                elemento[k] = v;
        }
    });
}

function parseTecnicaKi(elemento,texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'efectoPrimario':
                if (v == false) {
                    elemento[k] = false;
                } else {
                    elemento[k] = new EfectoTecnicaElegido();
                    parseEfectoTecnicaElegido(elemento[k], v);
                }
                break;
            case 'efectosSecundarios':
                elemento[k] = parseArrayEfectoTecnicaElegido(v, elemento);
                break;
            case 'desventajas':
                elemento[k] = parseArrayDesventajaTecnicaElegida(v);
                break;
            case 'ataduraElemental':
                elemento[k] = new ElementosAfines([]);
                parseStandard(elemento[k],v);
                break;
            case 'costeKi':
            case 'costeMantenimiento':
                if (v == false) {
                    elemento[k] = false;
                } else {
                    elemento[k] = new CosteKi(0,0,0,0,0,0,AGI);
                    parseStandard(elemento[k],v);
                }
                break;
            case 'allEfectos':
                break;
            default:
                elemento[k] = v;
        }
    });
}

function parseArrayEfectoTecnicaElegido(v, tecnica) {
    var array = [];

    for (var i = 0; i < v.length;i++) {
        var elemento = new EfectoTecnicaElegido();
        parseEfectoTecnicaElegido(elemento, v[i]);
        array.push(elemento);
    }

    return array;
}

function parseEfectoTecnicaElegido(elemento, texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'efectoTecnica':
                elemento[k] = parseEfectoTecnica(v);
                break;
            case 'nivelElegido':
                elemento[k] = parseNivelEfectoTecnica(v);
                break;
            case 'ventajasOpcionalesElegidas':
                elemento[k] = parseArrayVentajaTecnicaElegida(v);
                break;
            case 'caracSec':
                elemento[k] = parseArrayCaracSecunTecnica(v);
                break;
            case 'costeKi':
            case 'costeMantenimiento':
                elemento[k] = new CosteKi(0,0,0,0,0,0,AGI);
                parseStandard(elemento[k],v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

function parseEfectoTecnica(texto) {
    return getEfectoTecnicaKi(texto);
}

function parseNivelEfectoTecnica(texto) {
    var valores = texto.split("--");
    var nombreNivelEfectoTecnica = valores[0].replace("_PLUS_","+");
    var nombreEfectoTecnica = valores[1];
    var efecto = getEfectoTecnicaKi(nombreEfectoTecnica);
    return efecto.getNivelEfectoPorNombre(nombreNivelEfectoTecnica);
}

function parseArrayVentajaTecnicaElegida(v) {
    var array = [];

    for (var i = 0; i < v.length;i++) {
        var elemento = new VentajaTecnicaElegida();
        parseVentajaTecnicaElegida(elemento, v[i]);
        array.push(elemento);
    }

    return array;
}

function parseVentajaTecnicaElegida(elemento, texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'ventajaTecnica':
                elemento[k] = parseVentajaTecnica(v);
                break;
            case 'nivelElegido':
                elemento[k] = parseNivelVentajaTecnica(v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

function parseVentajaTecnica(texto) {
    var valores = texto.split("--");
    var nombreVentajaTecnica = valores[0];
    var nombreEfectoTecnica = valores[1];
    var efecto = getEfectoTecnicaKi(nombreEfectoTecnica);
    return efecto.getVentajaOpcionalPorNombre(nombreVentajaTecnica);
}

function parseNivelVentajaTecnica(texto) {
    var valores = texto.split("--");
    var nombreNivelVentajaTecnica = valores[0];
    var nombreVentajaTecnica = valores[1];
    var nombreEfectoTecnica = valores[2];
    var efecto = getEfectoTecnicaKi(nombreEfectoTecnica);
    var ventaja = efecto.getVentajaOpcionalPorNombre(nombreVentajaTecnica);
    return ventaja.getNivelPorNombre(nombreNivelVentajaTecnica);
}

function parseArrayDesventajaTecnicaElegida(v) {
    var array = [];

    for (var i = 0; i < v.length;i++) {
        var elemento = new DesventajaTecnicaElegida(new DesventajaTecnica("","",[],[],0,0));
        parseDesventajaTecnicaElegida(elemento, v[i]);
        array.push(elemento);
    }

    return array;
}

function parseDesventajaTecnicaElegida(elemento,texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'desventajaTecnica':
                elemento[k] = parseDesventajaTecnica(v);
                break;
            case 'ataduraElemental':
                elemento[k] = new ElementosAfines([]);
                parseStandard(elemento[k],v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

function parseDesventajaTecnica(texto) {
    return getDesventajaTecnicaKi(texto);
}

function parseArrayCaracSecunTecnica(v) {
    var array = [];

    for (var i = 0; i < v.length;i++) {
        var elemento = new CaracSecunTecnica("",0);
        parseStandard(elemento,v[i]);
        array.push(elemento);
    }

    return array;
}



/**
 *
 * @param {string} v
 * @returns {Invocacion[]}
 */
function parseArrayInvocaciones(v) {
    var array = [];

    for (var i = 0; i < v.length;i++) {
        array.push(getInvocacion(v[i]));
    }

    return array;
}

/**
 *
 * @param {string} v
 * @returns {DisciplinaPsiquica[]}
 */
function parseArrayDisciplinaPsiquicaAccedida(v) {
    var array = [];

    for (var i = 0; i < v.length;i++) {
        var elemento = new DisciplinaPsiquicaAccedida("");
        parseDisciplinaPsiquicaAccedida(elemento,v[i]);
        array.push(elemento);
    }

    return array;
}

function parseDisciplinaPsiquicaAccedida(elemento, texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'disciplina':
                elemento[k] = getDisciplina(v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

function parseArrayPoderPsiquico(v) {
    var array = [];

    for (var i = 0; i < v.length;i++) {
        array.push(parsePoderPsiquico(v[i]));
    }

    return array;
}

function parsePoderPsiquico(texto) {
    var valores = texto.split("--");
    var nombrePoderPsiquico = valores[0];
    var nombreDisciplinaPsiquica = valores[1];
    var disciplina = getDisciplina(nombreDisciplinaPsiquica);
    return getPoder(disciplina,nombrePoderPsiquico);
}

/**
 *
 * @param {string} v
 * @returns {PoderPsiquicoDominado[]}
 */
function parseArrayPoderPsiquicoDominado(v) {
    var array = [];

    for (var i = 0; i < v.length;i++) {
        var elemento = new PoderPsiquicoDominado();
        parsePoderPsiquicoDominado(elemento,v[i]);
        array.push(elemento);
    }

    return array;
}

function parsePoderPsiquicoDominado(elemento, texto) {
    parseObject(texto,function(k,v) {
        switch (k) {
            case 'poder':
                elemento[k] = parsePoderPsiquico(v);
                break;
            case 'disciplina':
                elemento[k] = getDisciplina(v);
                break;
            default:
                elemento[k] = v;
        }
    });
}

/**
 *
 * @param {string} v
 * @returns {Dinero}
 */
function parseDinero(v) {
    var dinero = new Dinero(0,0,0);

    parseStandard(dinero,v);

    return dinero;
}

function parseNumTecnicas(v) {
    var numTecnicas = {nivel1:0,nivel2:0,nivel3:0};
    parseStandard(numTecnicas,v);
    return numTecnicas;
}

/**
 *
 * @param {string} v
 * @returns {TipoArmadura}
 */
function parseTipoArmadura(v) {
    var tipoArmadura = new TipoArmadura("",[0,0,0,0,0,0],false);
    parseStandard(tipoArmadura,v);
    return tipoArmadura;
}

function cargarPersonaje(cadena) {
    personaje_actual = new Personaje();

    var allHabilidades;

    json_parse(cadena, function(k, v) {
        switch (k) {
            case 'raza' :
                personaje_actual.raza = getRaza(v);
                break;
            case 'categoria':
            case 'proximaCategoria':
                personaje_actual[k] = getCategoria(v);
                break;
            case 'aumentosCaracteristicas':
                personaje_actual.aumentosCaracteristicas = parseArrayAumentosCaracteristicas(v);
                break;
            case 'categoriasPorNiveles':
                personaje_actual.categoriasPorNiveles = parseArrayCategorias(v);
                break;
            case 'armaduraNatural':
            case 'capaArmaduraDura':
            case 'capaArmaduraBlanda1':
            case 'capaArmaduraBlanda2':
            case 'capaYelmo':
                personaje_actual[k] = parseTipoArmadura(v);
                break;
            case 'elan':
                personaje_actual[k] = parseArrayElan(v);
                break;
            case 'viasMagia':
                personaje_actual[k] = parseArrayNivelEnVia(v);
                break;
            case 'conjurosSueltos':
                personaje_actual[k] = parseArrayConjuros(v);
                break;
            case 'bonos':
                personaje_actual[k] = parseArrayBonos(v);
                break;
            case 'costesReducidos':
                personaje_actual[k] = parseArrayCostesReducidos(v);
                break;
            case 'bonificadoresNaturales':
                personaje_actual[k] = parseArrayBonificadoresNaturales(v);
                break;
            case 'ventajas':
            case 'desventajas':
                personaje_actual[k] = parseArrayElementoPCComprado(v);
                break;
            case 'prohibidos':
                personaje_actual[k] = parseArrayElementoProhibido(v);
                break;
            case 'allHabilidades':
                allHabilidades = v;
                break;
            case 'manejoArmas':
                personaje_actual[k] = parseArrayArma(v);
                break;
            case 'tablasArmas':
                personaje_actual[k] = parseArrayTablasArmasComprada(v);
                break;
            case 'artesMarciales':
                personaje_actual[k] = parseArrayArtesMarcialesCompradas(v);
                break;
            case 'habilidadesKi':
                personaje_actual[k] = parseArrayHabilidadKiComprada(v);
                break;
            case 'tecnicasKi':
                personaje_actual[k] = parseArrayTecnicaKiComprada(v);
                break;
            case 'numTecnicas':
                personaje_actual.numTecnicas = parseNumTecnicas(v);
                break;
            case 'disciplinasPsiquicas':
                personaje_actual[k] = parseArrayDisciplinaPsiquicaAccedida(v);
                break;
            case 'invocaciones':
                personaje_actual[k] = parseArrayInvocaciones(v);
                break;
            case 'poderesPsiquicosDominados':
                personaje_actual[k] = parseArrayPoderPsiquicoDominado(v);
                break;
            case 'dinero':
                personaje_actual[k] = parseDinero(v);
                break;
            case 'equipo':
                var armas = [];
                var armaduras = [];
                var yelmos = [];
                var equipo = [];
                parseArrayEquipo(v,armas,armaduras,yelmos,equipo);
                personaje_actual.equipoComprado = equipo;
                personaje_actual.armas = armas;
                personaje_actual.armaduras = armaduras;
                personaje_actual.yelmos = yelmos;
                break;
            case 'equipoComprado':
                personaje_actual[k] = parseArrayEquipoComprado(v);
                break;
            case 'armas':
                personaje_actual[k] = parseArrayArmaComprada(v);
                break;
            case 'armaduras':
                personaje_actual[k] = parseArrayArmaduraComprada(v);
                break;
            case 'yelmos':
                personaje_actual[k] = parseArrayYelmoComprado(v);
                break;
            default:
                personaje_actual[k] = v;
        }
    });

    personaje_actual['allHabilidades'] = parseArrayHabilidadDePersonaje(allHabilidades);

    mostrarPersonajeActual();
    PERSONAJE_EN_MARCHA = true;
}