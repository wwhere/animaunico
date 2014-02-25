var RAZA_DANJAYNI = "D'Anjayni";

var DANJ_OLVIDO = "Olvido (D'Anjayni)";
var DANJ_INDETECTABILIDAD = "Indetectabilidad (D'Anjayni)";
var DANJ_ROSTRO = "El rostro de la araña (D'Anjayni)";
var DANJ_PASAR = "Pasar sin dejar rastro (D'Anjayni)";
var DANJ_SUSURROS = "Susurros silenciosos (D'Anjayni)";

var DANJ_NATURALEZA = "Naturaleza observadora (D'Anjayni)";


ventajas_set.push(new Ventaja(
    DANJ_OLVIDO,
    "",
    "A términos de juego, cualquiera que vea o hable con el personaje deberá superar una Resistencia Mágica (RM) contra 120, " +
        "u olvidará su apariencia y la conversación que han mantenido. ",
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
    DANJ_INDETECTABILIDAD,
    "",
    "Su capacidad para evitar ser detectados por medios sobrenaturales les otorga un bono de +50 a cualquier Resistencia contra tales efectos. Además, poseen de manera innata la habilidad de Ocultación del Ki.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [indetectabilidadDanjayni],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DANJ_ROSTRO,
    "",
    "Mientras esté empleando El rostro de la araña, su habilidad de Olvido se resiente fuertemente, reduciendo la Resistencia a tan sólo 80.",
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
    DANJ_PASAR,
    "",
    "Su rastro se borra a medida que camina, por lo que si alguien intenta rastrearles, aplicará un -60 a su habilidad.",
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
    DANJ_SUSURROS,
    "",
    "Todo aquel que intente escucharlas aplicará un -80 a sus controles si no es su receptor.",
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
    DANJ_NATURALEZA,
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

var razaDanjayni = new Raza(RAZA_DANJAYNI, [
    getVentaja(DANJ_OLVIDO),
    getVentaja(DANJ_INDETECTABILIDAD),
    getVentaja(DANJ_ROSTRO),
    getVentaja(DANJ_PASAR),
    getVentaja(DANJ_SUSURROS)
], [
    getVentaja(DANJ_NATURALEZA)
], 1);

razas_set.push(razaDanjayni);

allRazas[RAZA_DANJAYNI] = razaDanjayni;
