addVentaja(new Ventaja(
    "Calibre",
    "",
    "Los CV invertidos para mejorar la Proyección Psíquica aumentarán su habilidad en +20 en lugar de +10.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    [FLAG_PSIQUICO]
));
addVentaja(new Ventaja(
    "Concentración extrema",
    "",
    "El psíquico dobla el bono que le reporta la concentración a su potencial. Por ejemplo, si se concentra un asalto completo obtiene un +20 en lugar de un +10.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    [FLAG_PSIQUICO]
));
addVentaja(new Ventaja(
    "Mantenimiento añadido",
    "",
    "Los poderes mantenidos innatamente se hallan un nivel de dificultad por encima de lo que le permite su potencial psíquico.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    [FLAG_PSIQUICO]
));
addVentaja(new Ventaja(
    "Resistencia a la fatiga psíquica",
    "",
    "Si el psíquico obtiene un fracaso en el uso de uno de sus poderes, no pierde puntos de Cansancio una vez que se ha quedado sin CVs libres por gastar. Los poderes de tercer nivel no son afectados por esta ventaja.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [
        new ElementoProhibido(VENTAJA,"Extenuación psíquica")
    ],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    [FLAG_PSIQUICO]
));
addVentaja(new Ventaja(
    "Recuperación de CVs",
    "",
    "El índice de recuperación de CVs libres es de un punto por cada diez minutos transcurridos. La inversión de Puntos de Creación adicionales lo acrecienta a uno cada cinco o un minuto respectivamente.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    [FLAG_PSIQUICO]
));
addVentaja(new Ventaja(
    "Desequilibrio psíquico",
    "",
    "El psíquico obtiene automáticamente un nivel de dificultad superior al que ha obtenido con su potencial al utilizar los poderes de una disciplina determinada.",
    REPETIBLE_OPCIONES,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    new Array(LISTA_DISCIPLINAS_PSIQUICAS),
    [],
    GRUPO_PSIQUICAS,
    [FLAG_PSIQUICO]
));
addVentaja(new Ventaja(
    "Concentración pasiva",
    "",
    "El psíquico puede concentrarse para potenciar un poder incluso mientras ejecuta acciones activas.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    [FLAG_PSIQUICO]
));

//region Pantalla del Director

addVentaja(new Ventaja(
    "Ambivalencia psíquica",
    "",
    "Al dividir el potencial psíquico para realizar más de un poder por asalto, obtiene un bono especial acumulativo de +5 por cada poder que declare.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    [FLAG_PSIQUICO, FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Modificador psíquico incrementado",
    "",
    "El personaje dobla cualquier modificador natural que tenga la disciplina psíquica que usa. Los negativos también son incrementados.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    [FLAG_PSIQUICO, FLAG_PANTALLA_ENABLED]
));
//endregion Pantalla del Director