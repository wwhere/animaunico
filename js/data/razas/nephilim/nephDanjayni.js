var RAZA_NEPH_DANJAYNI = "Nephilim D'Anjayni";

var DANJ_NEPH_INDETECTABILIDAD = "Indetectabilidad (Nephilim D'Anjayni)";
var DANJ_NEPH_OLVIDO = "Olvido (Nephilim D'Anjayni)";
var DANJ_NEPH_SUSURROS = "Susurros silenciosos (Nephilim D'Anjayni)";
var DANJ_NEPH_PASAR = "Pasar sin dejar rastro (Nephilim D'Anjayni)";

var DANJ_NEPH_APARIENCIA = "Apariencia común (Nephilim D'Anjayni)";
var DANJ_NEPH_ALMA = "Alma inmortal (Nephilim D'Anjayni)";

ventajas_set.push(new Ventaja(
    DANJ_NEPH_INDETECTABILIDAD,
    "",
    "Todos los D´Anjayni aplican un bonificador de +30 a cualquiera de sus Resistencias contra efectos de detección. Además, aprenden de manera innata la habilidad de Ocultación del Ki, que desarrollan aplicando también un bono de +30.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [indetectabilidadNephilimDanjayni],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DANJ_NEPH_OLVIDO,
    "",
    "A términos de juego, cualquiera que vea o hable con el personaje deberá superar una Resistencia Mágica (RM) contra 100, u olvidará su apariencia y la conversación que han mantenido. Esta habilidad se considera equivalente a un efecto místico automático cuya condición consiste, simplemente, en encontrarse con el personaje y que este se marche sin haberle dicho su nombre. No es posible percatarse del funcionamiento de esta habilidad, ni siquiera para alguien con la capacidad de ver magia. Los afectados no se darán cuenta de que lo ocurrido es innatural, sino que pensarán simplemente que son incapaces de acordarse o que no se han fijado bien. Un hechicero deberá superar un control de Valoración mágica contra una dificultad de Imposible para percatarse del uso de esta habilidad. El olvido deja de tener efecto en cualquier momento en el que el D´Anjayni se presenta con su verdadero nombre durante la conversación, o se encuentra con individuos que saben exactamente quién es.",
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
    DANJ_NEPH_SUSURROS,
    "",
    "Todo aquel que intente escucharlas aplicará un -60 a sus controles si no es su receptor.",
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
    DANJ_NEPH_PASAR,
    "",
    "Su rastro se borra a medida que camina, por lo que si alguien intenta rastrearles, aplicará un -40 a su habilidad.",
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
    DANJ_NEPH_APARIENCIA,
    "",
    "No podrán tener nunca una apariencia inferior a 3 o superior a 7.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aparienciaNephilimDanjayni],
    GRUPO_RAZAS,
    []
));

desventajas_set.push(new Ventaja(
    DANJ_NEPH_ALMA,
    "",
    "Penalizador de -3 puntos a la experiencia que otorgue el Director de Juego.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimDanjayni = new Raza(RAZA_NEPH_DANJAYNI, [
    getVentaja(DANJ_NEPH_INDETECTABILIDAD),
    getVentaja(DANJ_NEPH_OLVIDO),
    getVentaja(DANJ_NEPH_SUSURROS),
    getVentaja(DANJ_NEPH_PASAR)
], [
    getVentaja(DANJ_NEPH_APARIENCIA),
    getVentaja(DANJ_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimDanjayni);

allRazas[RAZA_NEPH_DANJAYNI] = razaNephilimDanjayni;
