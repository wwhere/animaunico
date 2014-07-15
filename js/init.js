animaUnico.inicializar = function() {
    initHabilidades();

    initVentajas();

    initEquipo();

    initArtesMarciales();

    initCategorias();

    muestraControles();

    setIdiomaUI();

    localizaHTML();

    /*Se extraen los valores de GET*/
    var queryDict = {};
    location.search.substr(1).split("&").forEach(
        function(item) {
            queryDict[item.split("=")[0]] = item.split("=")[1]
        }
    );

    if (queryDict.carga == 1) {
        var idPersonaje = queryDict.id;
        jQuery.ajax('http://helechaloscuro.net/cake/personajes/carga/'+idPersonaje,{
            success : function(json, status, jqxhr) {
                cargarPersonaje(json);
                ALTO_DIALOGO =  $(window).height() * 0.8;
            },
            dataType : 'text',
            error : function(jqxhrm, errorType, exception) {

            } //TODO username / password para autenticación HTTP
        });
    } else {
        personaje_actual = new Personaje();
//        personaje_actual.setRaza(getRaza(RAZA_HUMANO));
  //      personaje_actual.setCategoria(CATEGORIA_NOVEL);

        muestraPersonaje(personaje_actual);

        var primeraVisita = true;

        if (typeof(Storage) !== "undefined") {
            if (localStorage.ultimosCambiosVistos == CURRENT_VERSION) {
                primeraVisita = false;
            }
        }

        if (primeraVisita) {
            mostrarLogCambios();
        }
        ALTO_DIALOGO =  $(window).height() * 0.8;
    }

    inicializarAreasContraibles();

};

function inicializar() {
    console.log("COPIA LOCAL");
    initHabilidades();

    initVentajas();

    initEquipo();

    initArtesMarciales();

    initCategorias();

    muestraControles();

    setIdiomaUI();

    localizaHTML();

    /*Se extraen los valores de GET*/
    var queryDict = {};
    location.search.substr(1).split("&").forEach(
        function(item) {
            queryDict[item.split("=")[0]] = item.split("=")[1]
        }
    );

    if (queryDict.carga == 1) {
        var idPersonaje = queryDict.id;
        jQuery.ajax('http://helechaloscuro.net/cake/personajes/carga/'+idPersonaje,{
            success : function(json, status, jqxhr) {
                cargarPersonaje(json);
                ALTO_DIALOGO =  $(window).height() * 0.8;
            },
            dataType : 'text',
            error : function(jqxhrm, errorType, exception) {

            } //TODO username / password para autenticación HTTP
        });
    } else {
        personaje_actual = new Personaje();
//        personaje_actual.setRaza(getRaza(RAZA_HUMANO));
  //      personaje_actual.setCategoria(CATEGORIA_NOVEL);

        muestraPersonaje(personaje_actual);

        var primeraVisita = true;

        if (typeof(Storage) !== "undefined") {
            if (localStorage.ultimosCambiosVistos == CURRENT_VERSION) {
                primeraVisita = false;
            }
        }

        if (primeraVisita) {
            mostrarLogCambios();
        }
        ALTO_DIALOGO =  $(window).height() * 0.8;
    }

    inicializarAreasContraibles();

    inicializarRivets();


}

function mostrarPersonajeActual() {
    muestraPersonaje(personaje_actual);
}

function inicializarAreasContraibles() {
    $(document).on("click","." + CSS_TITULO_SECCION,{},function(event) {
        if (!$(this).parent(".recuadroDatos").hasClass("seccionCerrada")) {
            cierraSeccion(this);
        } else {
            abreSeccion(this);
        }
    });
}

function cierraSeccion(seccion) {
    $(seccion).parent(".recuadroDatos").addClass("seccionCerrada");
    $(seccion).prepend($("<div></div>").html("V ").addClass("flechaAbajo").css("display","inline"));
    $(seccion).append($("<div></div>").html(" V").addClass("flechaAbajo").css("display","inline"));
}

function abreSeccion(seccion) {
    $(seccion).parent(".recuadroDatos").removeClass("seccionCerrada");
    $(seccion).children(".flechaAbajo").remove();
}

function inicializarRivets() {
    rivets.formatters.l = function(value){
        return _l(value);
    };

    rivets.formatters.nombre = function(value){
        return value.nombre;
    };

    rivets.adapters['ç'] = {
        subscribe: function(obj, keypath, callback) {
        },
        unsubscribe: function(obj, keypath, callback) {
        },
        read: function(obj, keypath) {
            return obj.caracteristicas[parseInt(keypath)]
        },
        publish: function(obj, keypath, value) {
        }
    };

    rivets.adapters['Ç'] = {
        subscribe: function(obj, keypath, callback) {
        },
        unsubscribe: function(obj, keypath, callback) {
        },
        read: function(obj, keypath) {
            return modificadorBonito(getBonoPorValor(obj.caracteristicas[parseInt(keypath)]));
        },
        publish: function(obj, keypath, value) {
        }
    }

}