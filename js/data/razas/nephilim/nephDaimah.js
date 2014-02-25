var RAZA_NEPH_DAIMAH = "Nephilim Daimah";

var DAIM_NEPH_SENTIR = "Sentir el bosque (Nephilim Daimah)";
var DAIM_NEPH_MOVIMIENTO = "Movimiento por los bosques (Nephilim Daimah)";
var DAIM_NEPH_VER = "Ver la esencia (Nephilim Daimah)";
var DAIM_NEPH_PEQUEÑO = "Pequeño tamaño (Nephilim Daimah)";
var DAIM_NEPH_NATURALEZA = "Naturaleza curativa (Nephilim Daimah)";

var DAIM_NEPH_ALMA = "Alma inmortal (Nephilim Daimah)";

ventajas_set.push(new Ventaja(
    DAIM_NEPH_SENTIR,
    "",
    "Son capaces de notar las sensaciones de los animales y las plantas, detectando si tienen miedo, se sienten tranquilos o les ocurre algo extraño.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,"Inmunidad sobrenatural")
    ],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DAIM_NEPH_MOVIMIENTO,
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
    DAIM_NEPH_VER,
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

ventajas_set.push(new Ventaja(
    DAIM_NEPH_PEQUEÑO,
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
    DAIM_NEPH_NATURALEZA,
    "",
    "Mientras esté en una espesa zona boscosa o selvática, el Nephilim suma tres puntos a su nivel de Regeneración.",
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
    DAIM_NEPH_ALMA,
    "",
    "Penalizador de -2 puntos a la experiencia que otorgue el Director de Juego al finalizar cada sesión.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimDaimah = new Raza(RAZA_NEPH_DAIMAH, [
    getVentaja(DAIM_NEPH_SENTIR),
    getVentaja(DAIM_NEPH_MOVIMIENTO),
    getVentaja(DAIM_NEPH_VER),
    getVentaja(DAIM_NEPH_PEQUEÑO),
    getVentaja(DAIM_NEPH_NATURALEZA)
], [
    getVentaja(DAIM_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimDaimah);

allRazas[RAZA_NEPH_DAIMAH] = razaNephilimDaimah;
