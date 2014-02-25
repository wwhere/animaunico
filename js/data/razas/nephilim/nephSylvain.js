var RAZA_NEPH_SYLVAIN = "Nephilim Sylvain";

var SYLV_NEPH_RESISTENCIAS = "Resistencias excepcionales (Nephilim Sylvain)";
var SYLV_NEPH_DESEQUILIBRIO = "Desequilibrio hacia la Luz (Nephilim Sylvain)";
var SYLV_NEPH_CURACION = "Curación Rápida (Nephilim Sylvain)";
var SYLV_NEPH_PRESENTIR = "Presentir lo oscuro y lo luminoso (Nephilim Sylvain)";
var SYLV_NEPH_NECESIDADES = "Necesidades Limitadas (Nephilim Sylvain)";

var SYLV_NEPH_ALMA = "Alma inmortal (Nephilim Sylvain)";

ventajas_set.push(new Ventaja(
    SYLV_NEPH_RESISTENCIAS,
    "",
    "Aplican un bonificador de +10 a su Resistencia Mágica (RM) y Psíquica (RP), un +20 a su Resistencia contra Enfermedades (RE) y un +5 a sus Resistencias Físicas y contra Venenos (RF y RV, respectivamente). Un Nephilim no puede elegir las desventajas de: Salud enfermiza, Enfermedad grave incurable y Vulnerabilidad a la magia.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,"Salud enfermiza"),
        new ElementoProhibido(VENTAJA,"Enfermedad grave incurable"),
        new ElementoProhibido(VENTAJA,"Vulnerabilidad a la magia"),
        new ElementoProhibido(VENTAJA,"Inmunidad sobrenatural")
    ],    //incompatibles
    false,  //anulable
    [],
    [resistenciasExcepcionalesNephilimSylvain],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    SYLV_NEPH_DESEQUILIBRIO,
    "",
    "Esta habilidad les otorga una Resistencia especial de +10 contra cualquier efecto basado en dicho elemento. Adicionalmente, esta afinidad les impide elegir la ventaja de Desequilibrio Mágico hacia la Oscuridad.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [new ElementoProhibido(VENTAJA,"Desequilibrio elemental","Oscuridad")],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    SYLV_NEPH_CURACION,
    "",
    "Suman un punto a su nivel de Regeneración natural.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaRegeneracion,1,SYLV_NEPH_CURACION],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    SYLV_NEPH_PRESENTIR,
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

ventajas_set.push(new Ventaja(
    SYLV_NEPH_NECESIDADES,
    "",
    "Sus necesidades se reducen a la mitad de las de una persona normal. Eso no significa que no tengan hambre por comer de una manera escasa, sino que, en la práctica, no requieren tantos alimentos para sobrevivir.",
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
    SYLV_NEPH_ALMA,
    "",
    "Sufren un penalizador de -4 puntos a la experiencia que otorgue el Director de Juego al finalizar cada sesión.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimSylvain = new Raza(RAZA_NEPH_SYLVAIN, [
    getVentaja(SYLV_NEPH_RESISTENCIAS),
    getVentaja(SYLV_NEPH_DESEQUILIBRIO),
    getVentaja(SYLV_NEPH_CURACION),
    getVentaja(SYLV_NEPH_PRESENTIR),
    getVentaja(SYLV_NEPH_NECESIDADES)
], [
    getVentaja(SYLV_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimSylvain);

allRazas[RAZA_NEPH_SYLVAIN] = razaNephilimSylvain;