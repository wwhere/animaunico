animaUnico.inicializar = function() {
    initHabilidades();

    initVentajas();

    initEquipo();

    initArtesMarciales();

    initCategorias();

    muestraControles();

    setIdiomaUI();

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
        personaje_actual.setRaza(getRaza(RAZA_HUMANO));
        personaje_actual.setCategoria(CATEGORIA_NOVEL);

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
};

function inicializar() {
    initHabilidades();

    initVentajas();

    initEquipo();

    initArtesMarciales();

    initCategorias();

    muestraControles();

    setIdiomaUI();

    /*Se extraen los valores de GET*/
    var queryDict = {};
    location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]});

    if (queryDict.carga == 1) {
        var idPersonaje = queryDict.id;
        jQuery.ajax('http://helechaloscuro.net/cake/Personaje/carga',{
            success : function(json, status, jqxhr) {
                cargarPersonaje(json);
                ALTO_DIALOGO =  $(window).height() * 0.8;
            },
            data : {
                id : idPersonaje
            },
            dataType : 'text',
            error : function(jqxhrm, errorType, exception) {
                console.log("Error de ajax: " + errorType);
            } //TODO username / password para autenticación HTTP
        });
    } else {
        personaje_actual = new Personaje();
        personaje_actual.setRaza(getRaza(RAZA_HUMANO));
        personaje_actual.setCategoria(CATEGORIA_NOVEL);

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

}

function mostrarPersonajeActual() {
    muestraPersonaje(personaje_actual);
}
