var RAZA_DUKZARIST = "Duk'zarist";

var DUK_PERFECCION = "Perfección física y anímica (Duk'zarist)";
var DUK_OJOS = "Ojos de fuego (Duk'zarist)";
var DUK_ACCIONES = "Acciones inhumanas (Duk'zarist)";
var DUK_PRESENTIR = "Presentir lo oscuro y lo luminoso (Duk'zarist)";
var DUK_LAZO = "Lazo de oscuridad y fuego (Duk'zarist)";
var DUK_RESISTENCIAS = "Resistencias excepcionales (Duk'zarist)";
var DUK_AGUANTE = "Aguante extremo a la Muerte (Duk'zarist)";
var DUK_CURACION = "Curación Rápida (Duk'zarist)";
var DUK_NECESIDADES = "Necesidades Limitadas (Duk'zarist)";
var DUK_OBLIGACION = "Obligación sobrenatural (Duk'zarist)";
var DUK_ALERGIA = "Alergia al Metal (Duk'zarist)";


ventajas_set.push(new Ventaja(
    DUK_PERFECCION,
    "",
    "aplican un bonificador excepcional de +1 a todas sus características (FUE, DES, AGI, CON, INT, POD, VOL, PER). " +
        "Sin embargo, por la misma causa son incapaces de elegir ninguna de las siguientes desventajas: " +
        "Miembro atrofiado, Salud enfermiza, Vulnerabilidad a los venenos, Miopía, Debilidad física, Enfermedad grave, Mudo, Ciego o Sordo.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,"Miembro atrofiado"),
        new ElementoProhibido(VENTAJA,"Salud enfermiza"),
        new ElementoProhibido(VENTAJA,"Vulnerabilidad a los venenos"),
        new ElementoProhibido(VENTAJA,"Miopía"),
        new ElementoProhibido(VENTAJA,"Debilidad física"),
        new ElementoProhibido(VENTAJA,"Enfermedad grave"),
        new ElementoProhibido(VENTAJA,"Mudo"),
        new ElementoProhibido(VENTAJA,"Ciego"),
        new ElementoProhibido(VENTAJA,"Sordo"),
        new ElementoProhibido(VENTAJA,"Inmunidad sobrenatural")
    ],    //incompatibles
    false,  //anulable
    [],
    [perfeccionDukZarist],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DUK_OJOS,
    "",
    "Sus ojos son capaces de ver en la oscuridad, por lo que aplican a la mitad cualquier penalizador que sufran por su causa. También pueden detectar fuentes de calor.",
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
    DUK_ACCIONES,
    "",
    "Por naturaleza, un Duk´zarist puede alcanzar la dificultad de Inhumano en los controles de dificultades.",
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
    DUK_PRESENTIR,
    "",
    "De un modo sobrenatural, perciben la esencia oscura o luminosa que desprenden sus almas.",
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
    DUK_LAZO,
    "",
    "Obtienen un bono especial de +10 a sus controles contra ellos. Un Duk´zarist no puede elegir la ventaja Desequilibrio mágico hacia la luz.",
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
    DUK_RESISTENCIAS,
    "",
    "Los primeros aplican un bonificador de +15 a todas sus Resistencias (RM, RP, RV y RE) salvo a la Física (RF), donde poseen un +20, mientras que las jóvenes tienen un +15 a todas ellas (RF, RP, RV y RE) salvo a la Mágica (RM), donde llegan a +20.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [resistenciasDukZarist],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DUK_AGUANTE,
    "",
    "No sólo pasan automáticamente los controles para superar el estado de entre la vida y la muerte, sino que además permanecen conscientes con un penalizador de -40 a toda acción mientras se encuentran con puntos de vida negativos.",
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
    DUK_CURACION,
    "",
    "Suman cinco puntos a su nivel de Regeneración natural.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaRegeneracion,5,DUK_CURACION],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DUK_NECESIDADES,
    "",
    "Disminuyen sus necesidades de sueño y comida hasta una séptima parte que la de cualquier otro ser humano, sin sufrir ningún tipo de negativo.",
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
    DUK_OBLIGACION,
    "",
    "Necesariamente, un Duk´zarist debe emplear sus Puntos de Creación para tener acceso a una habilidad psíquica o al Don. Como mínimo, debe elegir una de ambas ventajas, aunque nada les impide tomarlas ambas. En el caso de que adquiera poderes psíquicos, su devoción al fuego le obliga a que la primera disciplina elegida sea siempre piroquinesis.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [obligacionDukZarist],
    GRUPO_RAZAS,
    []
));

desventajas_set.push(new Ventaja(
    DUK_ALERGIA,
    "",
    "Si ponen su piel en contacto con metal que contenga algo de hierro, deberán superar un control de Resistencia usando su presencia base contra una dificultad de 40. Si el metal es hierro puro, la dificultad es de 60. Cuando su presencia base es veinte puntos mayor que la cantidad necesaria, ya no es necesario hacer ningún control. Los Duk´zarist que lo fallen desaparecen completamente, dejando caer al suelo sus pertenencias y ropajes vacíos.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));


var razaDukZarist = new Raza(
    RAZA_DUKZARIST,
    [
        getVentaja(DUK_PERFECCION),
        getVentaja(DUK_OJOS),
        getVentaja(DUK_ACCIONES),
        getVentaja(DUK_PRESENTIR),
        getVentaja(DUK_LAZO),
        getVentaja(DUK_RESISTENCIAS),
        getVentaja(DUK_AGUANTE),
        getVentaja(DUK_CURACION),
        getVentaja(DUK_NECESIDADES)
    ],
    [
        getVentaja(DUK_OBLIGACION),
        getVentaja(DUK_ALERGIA)
    ],
    3);

razas_set.push(razaDukZarist);

allRazas[RAZA_DUKZARIST] = razaDukZarist;