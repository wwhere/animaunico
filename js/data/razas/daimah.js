var RAZA_DAIMAH = "Daimah";

var DAIM_CUERPO = "Cuerpo felino (Daimah)";
var DAIM_SENTIR = "Sentir el bosque (Daimah)";
var DAIM_GARRAS = "Garras y dientes (Daimah)";
var DAIM_HABILIDAD = "Habilidad inhumana (Daimah)";
var DAIM_PEQUEÑO = "Pequeño tamaño (Daimah)";
var DAIM_NATURALEZA = "Naturaleza curativa (Daimah)";
var DAIM_RESISTENCIA = "Resistencia a las caídas (Daimah)";
var DAIM_INMUNIDAD = "Inmunidad natural (Daimah)";
var DAIM_ESENCIA = "Esencia mística (Daimah)";
var DAIM_MOVIMIENTO = "Movimiento por los bosques (Daimah)";
var DAIM_VER = "Ver la esencia (Daimah)";

ventajas_set.push(new Ventaja(
    DAIM_CUERPO,
    "",
    "Aplican un bono de +1 a sus características de AGI y DES, pero un -1 a su CON y VOL",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [cuerpoDaimah],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DAIM_SENTIR,
    "",
    "Son capaces de notar las sensaciones de los animales y las plantas, detectando si tienen miedo, se sienten tranquilos o les ocurre algo extraño.",
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
    DAIM_GARRAS,
    "",
    "Empleadas de este modo, tiene un daño base de 30 puntos más el bono de Fuerza. Lógicamente, es necesario desarrollar su habilidad de combate con ellas para no aplicar penalizadores.",
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
    DAIM_HABILIDAD,
    "",
    "La capacidad de los Daimah les permite alcanzar la dificultad de Inhumano en aquellos controles y habilidades que dependan de su Agilidad y su Destreza.",
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
    DAIM_PEQUEÑO,
    "",
    "Restan un punto de su característica de Tamaño",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaTamaño,-1],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DAIM_NATURALEZA,
    "",
    "Mientras esté en una espesa zona boscosa o selvática, el Nephilim suma ocho puntos a su nivel de Regeneración.",
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
    DAIM_RESISTENCIA,
    "",
    "Restan dos grados a la dificultad que necesitan superar para evitar daños en la Tabla 68.",
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
    DAIM_INMUNIDAD,
    "",
    "Por tanto, son inmunes a todos los venenos que provengan de animales o plantas naturales, al igual que a las enfermedades que no sean de origen místico.",
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
    DAIM_ESENCIA,
    "",
    "Están obligados a elegir la ventaja de Don.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,"Inmunidad sobrenatural")
    ],    //incompatibles
    false,  //anulable
    [],
    [obligadoComprarDon],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DAIM_MOVIMIENTO,
    "",
    "A pesar de lo espeso del follaje o de lo cerrado de la vegetación, un Daimah no tiene penalizadores al movimiento por moverse en este entorno.",
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
    DAIM_VER,
    "",
    "Esta habilidad se considera un poder innato de detección, pero un individuo puede resistirse naturalmente si supera una RM contra 140.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));


var razaDaimah = new Raza(
    RAZA_DAIMAH,
    [
        getVentaja(DAIM_CUERPO),
        getVentaja(DAIM_SENTIR),
        getVentaja(DAIM_GARRAS),
        getVentaja(DAIM_HABILIDAD),
        getVentaja(DAIM_NATURALEZA),
        getVentaja(DAIM_RESISTENCIA),
        getVentaja(DAIM_INMUNIDAD),
        getVentaja(DAIM_ESENCIA),
        getVentaja(DAIM_MOVIMIENTO),
        getVentaja(DAIM_VER)
    ],
    [
        getVentaja(DAIM_PEQUEÑO)
    ],
    1);

razas_set.push(razaDaimah);

allRazas[RAZA_DAIMAH] = razaDaimah;
