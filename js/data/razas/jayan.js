var RAZA_JAYAN = "Jayán";

var JAY_GIGANTES = "Gigantes (Jayán)";
var JAY_FISICO = "Físico excepcional (Jayán)";
var JAY_CANSANCIO = "Aguante al cansancio (Jayán)";
var JAY_RESISTENCIA = "Resistencia física (Jayán)";
var JAY_OJO = "El tercer ojo (Jayán)";
var JAY_ARMAS = "Armas naturales (Jayán)";
var JAY_FUERZA = "Fuerza inhumana (Jayán)";

var JAY_DEBILIDAD = "Debilidad contra magia (Jayán)";

ventajas_set.push(new Ventaja(
    JAY_GIGANTES,
    "",
    "Suman dos puntos a su característica de Tamaño y no pueden elegir la ventaja Tamaño desigual para disminuirlo.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,"Tamaño no natural",-5),
        new ElementoProhibido(VENTAJA,"Tamaño no natural",-4),
        new ElementoProhibido(VENTAJA,"Tamaño no natural",-3),
        new ElementoProhibido(VENTAJA,"Tamaño no natural",-2),
        new ElementoProhibido(VENTAJA,"Tamaño no natural",-1)
    ],    //incompatibles
    false,  //anulable
    [],
    [giganteJayan],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    JAY_FISICO,
    "",
    "Suman un +2 a su característica de FUE y un +1 a su CON. Adicionalmente, no es posible utilizar la desventaja de Reducir dos puntos a una característica para rebajar su Fuerza.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [
        new ElementoProhibido(VENTAJA,"Reducir dos puntos a una característica",FUE)
    ],
    [fisicoJayan],
    GRUPO_RAZAS,
    []
));

//noinspection MagicNumberJS
ventajas_set.push(new Ventaja(
    JAY_CANSANCIO,
    "",
    "Aplican un bonificador de tres puntos al valor máximo de su Cansancio",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaCansancio, 3],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    JAY_RESISTENCIA,
    "",
    "Obtienen +20 a su RF.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaResistencia, RF, 20],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    JAY_OJO,
    "",
    "Esta habilidad no funciona con conjuros, efectos místicos o matrices psíquicas.",
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
    JAY_ARMAS,
    "",
    "Incluso desarmados, sus ataques producen un daño base de 40 ó 60 más el bono de Fuerza, dependiendo de su tamaño (Ver la Tabla 82). Naturalmente, es necesario desarrollar su habilidad de combate con ellas para no aplicar penalizadores.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [armasJayan],
    GRUPO_RAZAS,
    []
));

desventajas_set.push(new Ventaja(
    JAY_FUERZA,
    "",
    "Su increíble físico permite a los Jayán realizar acciones de dificultad Inhumana en todos aquellos controles que dependan de la característica de Fuerza.",
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
    JAY_DEBILIDAD,
    "",
    "Aplican un penalizador de -20 a su RM. Además, restan un punto de su característica de POD.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [debilidadJayan],
    GRUPO_RAZAS,
    []
));

var razaJayan = new Raza(
    RAZA_JAYAN,
    [
        getVentaja(JAY_GIGANTES),
        getVentaja(JAY_FISICO),
        getVentaja(JAY_CANSANCIO),
        getVentaja(JAY_RESISTENCIA),
        getVentaja(JAY_OJO),
        getVentaja(JAY_ARMAS),
        getVentaja(JAY_FUERZA)
    ],
    [
        getVentaja(JAY_DEBILIDAD)
    ],
    1);

razas_set.push(razaJayan);

allRazas[RAZA_JAYAN] = razaJayan;
