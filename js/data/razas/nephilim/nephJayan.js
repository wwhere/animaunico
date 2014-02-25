var RAZA_NEPH_JAYAN = "Nephilim Jayán";

var JAY_NEPH_GIGANTES = "Gigantes (Nephilim Jayán)";
var JAY_NEPH_CANSANCIO = "Aguante al cansancio (Nephilim Jayán)";
var JAY_NEPH_RESISTENCIA = "Resistencia al daño (Nephilim Jayán)";
var JAY_NEPH_FUERZA = "Fuerza descomunal (Nephilim Jayán)";
var JAY_NEPH_VISION = "Visión espiritual (Nephilim Jayán)";

var JAY_NEPH_DEBILIDAD = "Debilidad contra la magia (Nephilim Jayán)";
var JAY_NEPH_ALMA = "Alma inmortal (Nephilim Jayán)";

ventajas_set.push(new Ventaja(
    JAY_NEPH_GIGANTES,
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
    [giganteNephilimJayan],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    JAY_NEPH_CANSANCIO,
    "",
    "Aumentan un punto el valor máximo de su Cansancio.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaCansancio, 1],
    GRUPO_RAZAS,
    []
));

//noinspection MagicNumberJS
ventajas_set.push(new Ventaja(
    JAY_NEPH_RESISTENCIA,
    "",
    "Aplica un bonificador de +15 a su Resistencia Física (RF).",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaResistencia, RF, 15],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    JAY_NEPH_FUERZA,
    "",
    "Aument un punto el atributo de Fuerza del personaje. Adicionalmente, no es posible utilizar la desventaja de Reducir dos puntos una característica para rebajar la Fuerza del Nephilim.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [new ElementoProhibido(VENTAJA,"Reducir Dos Puntos Una Característica",FUE)],    //incompatibles
    false,  //anulable
    [],
    [aumentaCaracteristica, FUE, 1],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    JAY_NEPH_VISION,
    "",
    "Para hacerlo, el personaje debe cerrar los ojos y de un modo inconsciente podrá 'mirar' a los seres espirituales, aunque no será capaz de ver nada en el mundo material. Esta habilidad no permite al personaje ver conjuros, efectos místicos o matrices psíquicas, sino tan sólo almas invisibles al ojo humano.",
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
    JAY_NEPH_DEBILIDAD,
    "",
    "Sufre un penalizador de -10 a su Resistencia Mágica (RM).",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaResistencia, RM, -10],
    GRUPO_RAZAS,
    []
));

desventajas_set.push(new Ventaja(
    JAY_NEPH_ALMA,
    "",
    "Sufren un penalizador de -3 puntos a la experiencia que otorgue el Director de Juego al finalizar cada sesión.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimJayan = new Raza(RAZA_NEPH_JAYAN, [
    getVentaja(JAY_NEPH_GIGANTES),
    getVentaja(JAY_NEPH_CANSANCIO),
    getVentaja(JAY_NEPH_RESISTENCIA),
    getVentaja(JAY_NEPH_FUERZA),
    getVentaja(JAY_NEPH_VISION)
], [
    getVentaja(JAY_NEPH_DEBILIDAD),
    getVentaja(JAY_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimJayan);

allRazas[RAZA_NEPH_JAYAN] = razaNephilimJayan;
