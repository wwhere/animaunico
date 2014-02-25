var RAZA_NEPH_DUKZARIST = "Nephilim Duk'zarist";

var DUK_NEPH_RESISTENCIAS = "Resistencias excepcionales (Nephilim Duk'zarist)";
var DUK_NEPH_DESEQUILIBRIO = "Desequilibrio hacia la Oscuridad (Nephilim Duk'zarist)";
var DUK_NEPH_AGUANTE = "Aguante a la Muerte (Nephilim Duk'zarist)";
var DUK_NEPH_CURACION = "Curación Rápida (Nephilim Duk'zarist)";
var DUK_NEPH_NECESIDADES = "Necesidades Limitadas (Nephilim Duk'zarist)";
var DUK_NEPH_PRESENTIR = "Presentir lo oscuro y lo luminoso (Nephilim Duk'zarist)";
var DUK_NEPH_VISION = "Visión nocturna (Nephilim Duk'zarist)";
var DUK_NEPH_FUEGO = "Devoción al Fuego (Nephilim Duk'zarist)";
var DUK_NEPH_CUERPOS = "Cuerpos perfectos (Nephilim Duk'zarist)";
var DUK_NEPH_ALERGIA = "Alergia al Metal (Nephilim Duk'zarist)";
var DUK_NEPH_ALMA = "Alma inmortal (Nephilim Duk'zarist)";

ventajas_set.push(new Ventaja(
    DUK_NEPH_RESISTENCIAS,
    "",
    "Las almas masculinas aplican un bonificador de +15 a todas sus Resistencias (RM, RP, RV y RE) salvo la Resistencia Física (RF), donde poseen un +20. Por el contrario, las femeninas tienen un +15 a todas sus Resistencias (RF, RP, RV y RE) salvo la Mágica, donde tienen un +20 (RM).",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,"Inmunidad sobrenatural")
    ],    //incompatibles
    false,  //anulable
    [],
    [resistenciasNephilimDukZarist],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DUK_NEPH_DESEQUILIBRIO,
    "",
    "Esta habilidad les otorga una Resistencia especial de +10 contra cualquier efecto basado en dicho elemento. Adicionalmente, esta afinidad les impide elegir la ventaja de Desequilibrio Mágico hacia la Luz.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [new ElementoProhibido(VENTAJA,"Desequilibrio elemental","Luz")],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DUK_NEPH_AGUANTE,
    "",
    "Cuando entran en el estado de entre la vida y la muerte, no necesitan superar el control de Resistencia Física para sobrevivir, ya que su alma se afianza tanto al cuerpo que superan automáticamente estos controles.",
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
    DUK_NEPH_CURACION,
    "",
    "Suman un punto a su nivel de Regeneración natural.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaRegeneracion,1,DUK_NEPH_CURACION],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DUK_NEPH_NECESIDADES,
    "",
    "Disminuyen sus necesidades de sueño y comida hasta una tercera parte que la de cualquier otro ser humano, sin sufrir ningún tipo de negativo.",
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
    DUK_NEPH_PRESENTIR,
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
    DUK_NEPH_VISION,
    "",
    "A efectos de juego, esta capacidad no está tan desarrollada como la que se adquiere mediante un Punto de Creación, pero permite disminuir a la mitad cualquier penalizador que el Nephilim sufra a su percepción por causa de la oscuridad natural.",
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
    DUK_NEPH_FUEGO,
    "",
    "Si desarrolla sus habilidades mentales, tiene la obligación de adquirir como primera disciplina la Piroquinesis.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [fuegoNephilimDukZarist],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DUK_NEPH_CUERPOS,
    "",
    "El Nephilim no puede elegir ninguna de las siguientes desventajas: Miembro atrofiado, Salud enfermiza, Vulnerabilidad a los venenos, Miopía, Debilidad física, Enfermedad grave, Mudo, Ciego o Sordo.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [
        new ElementoProhibido(VENTAJA,"Miembro atrofiado"),
        new ElementoProhibido(VENTAJA,"Salud enfermiza"),
        new ElementoProhibido(VENTAJA,"Vulnerabilidad a los venenos"),
        new ElementoProhibido(VENTAJA,"Miopía"),
        new ElementoProhibido(VENTAJA,"Debilidad física"),
        new ElementoProhibido(VENTAJA,"Enfermedad grave"),
        new ElementoProhibido(VENTAJA,"Mudo"),
        new ElementoProhibido(VENTAJA,"Ciego"),
        new ElementoProhibido(VENTAJA,"Sordo")
    ],
    [],
    GRUPO_RAZAS,
    []
));

desventajas_set.push(new Ventaja(
    DUK_NEPH_ALERGIA,
    "",
    "Si pone su piel en contacto con un metal que contenga una aleación de hierro, deberá superar un control usando su presencia base contra una dificultad de 60, o sufrirá una reacción adversa que le produce un negativo a la acción equivalente a la cantidad por la que falló la tirada. Si el metal es hierro puro, la tirada es contra 80. Estos negativos desaparecen a un ritmo de 10 puntos por minuto. Un Nephilim Duk´zarist puede utilizar ropas y guantes para evitar estos efectos.",
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
    DUK_NEPH_ALMA,
    "",
    "Sufren un penalizador de -5 puntos a la experiencia que otorgue el Director de Juego al finalizar cada sesión.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimDukZarist = new Raza(RAZA_NEPH_DUKZARIST, [
    getVentaja(DUK_NEPH_RESISTENCIAS),
    getVentaja(DUK_NEPH_DESEQUILIBRIO),
    getVentaja(DUK_NEPH_AGUANTE),
    getVentaja(DUK_NEPH_CURACION),
    getVentaja(DUK_NEPH_NECESIDADES),
    getVentaja(DUK_NEPH_PRESENTIR),
    getVentaja(DUK_NEPH_VISION),
    getVentaja(DUK_NEPH_FUEGO),
    getVentaja(DUK_NEPH_CUERPOS)
], [
    getVentaja(DUK_NEPH_ALERGIA),
    getVentaja(DUK_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimDukZarist);

allRazas[RAZA_NEPH_DUKZARIST] = razaNephilimDukZarist;