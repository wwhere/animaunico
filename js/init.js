animaUnico.inicializar = function() {
    initHabilidades();

    initVentajas();

    initEquipo();

    initArtesMarciales();

    initCategorias();

    muestraControles();

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

function inicializar() {
    initHabilidades();

    initVentajas();

    initEquipo();

    initArtesMarciales();

    initCategorias();

    muestraControles();

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

function mostrarPersonajeActual() {
    muestraPersonaje(personaje_actual);
}
