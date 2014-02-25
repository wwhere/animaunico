var RAZA_SYLVAIN = "Sylvain";

var SYLV_CARACTERISTICAS = "Características sobrehumanas (Sylvain)";
var SYLV_RESISTENCIAS = "Resistencias anímicas excepcionales (Sylvain)";
var SYLV_INMUNIDAD = "Inmunidad a las enfermedades y venenos naturales (Sylvain)";
var SYLV_INHUMANAS = "Acciones inhumanas (Sylvain)";
var SYLV_NECESIDADES = "Necesidades Limitadas (Sylvain)";
var SYLV_CURACION = "Curación Rápida (Sylvain)";
var SYLV_PRESENTIR = "Presentir lo oscuro y lo luminoso (Sylvain)";
var SYLV_OBLIGACION = "Obligación mágica (Sylvain)";
var SYLV_VISION = "Su visión del mundo (Sylvain)";
var SYLV_LAZO = "Lazo hacia la luz (Sylvain)";

ventajas_set.push(new Ventaja(
    SYLV_CARACTERISTICAS,
    "",
    "Aplica un bono de +1 a las características de DES, AGI, POD e INT, pero sufren un penalizador de -1 a su FUE y CON.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,"Inmunidad sobrenatural")
    ],    //incompatibles
    false,  //anulable
    [],
    [caracteristicasSobrehumanasSylvain],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    SYLV_RESISTENCIAS,
    "",
    "aplican un bono de +30 a su Resistencia Mágica y Psíquica (RM y RP). Un Sylvain no puede elegir las desventajas de Vulnerabilidad a la magia o Fácil posesión.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [new ElementoProhibido(VENTAJA,"Fácil posesión"),
        new ElementoProhibido(VENTAJA,"Vulnerabilidad a la magia")
    ],    //incompatibles
    false,  //anulable
    [],
    [resistenciasAnimicasExcepcionalesSylvain],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    SYLV_INMUNIDAD,
    "",
    "Obtienen además un bono de +20 a su RE y un +10 a su RV. No pueden elegir las desventajas de: Salud enfermiza, Vulnerable a los venenos o enfermedad grave incurable.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,"Salud enfermiza"),
        new ElementoProhibido(VENTAJA,"Vulnerabilidad a los venenos"),
        new ElementoProhibido(VENTAJA,"Enfermedad grave")
    ],    //incompatibles
    false,  //anulable
    [],
    [inmunidadEnfermedadesVenenosSylvain],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    SYLV_INHUMANAS,
    "",
    "Por naturaleza, un Sylvain puede alcanzar la dificultad de Inhumano en los controles de dificultades.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
    ],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    SYLV_NECESIDADES,
    "",
    "Disminuyen sus necesidades de sueño y comida hasta una quinta parte de las que necesita un humano.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    SYLV_CURACION,
    "",
    "Suman tres puntos a su nivel de Regeneración natural.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaRegeneracion,3,SYLV_CURACION],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    SYLV_PRESENTIR,
    "",
    "De un modo sobrenatural, perciben la esencia oscura o luminosa que desprenden sus almas. Esta habilidad no les permite reconocer a un individuo que se halle oculto por un conjuro o mediante una habilidad del Ki.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

desventajas_set.push(new Ventaja(
    SYLV_LAZO,
    "",
    "Cualquier ser de dicho elemento sentirá afinidad hacia ellos y no pueden elegir la ventaja Desequilibrio hacia la oscuridad. Además, poseen un bono especial de +10 a cualquier control de Resistencia que realicen contra efectos de lumínicos, y un penalizador equivalente contra la oscuridad.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [new ElementoProhibido(VENTAJA,"Desequilibrio elemental","Oscuridad")],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

desventajas_set.push(new Ventaja(
    SYLV_OBLIGACION,
    "",
    "Están obligados a elegir la ventaja de Don.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [obligadoComprarDon],
    GRUPO_RAZAS,
    []
));

desventajas_set.push(new Ventaja(
    SYLV_VISION,
    "",
    "Sufre un penalizador de -3 a los puntos de experiencia que obtenga al finalizar una sesión de juego.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaSylvain = new Raza(RAZA_SYLVAIN, [
    getVentaja(SYLV_CARACTERISTICAS),
    getVentaja(SYLV_RESISTENCIAS),
    getVentaja(SYLV_INMUNIDAD),
    getVentaja(SYLV_INHUMANAS),
    getVentaja(SYLV_NECESIDADES),
    getVentaja(SYLV_CURACION),
    getVentaja(SYLV_PRESENTIR),
    getVentaja(SYLV_LAZO)
], [
    getVentaja(SYLV_OBLIGACION),
    getVentaja(SYLV_VISION)
], 2);

razas_set.push(razaSylvain);

allRazas[RAZA_SYLVAIN] = razaSylvain;

