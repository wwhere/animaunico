addDesventaja(new Ventaja(
    "Extenuación psíquica",
    "",
    "El personaje pierde el doble de puntos de Cansancio de lo que indique su fatiga psíquica. Límitación: Esta desventaja no puede cogerse en combinación con Resistencia a la fatiga psíquica.",
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [
        new ElementoProhibido(VENTAJA,"Resistencia a la fatiga psíquica")
    ],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    []
));
addDesventaja(new Ventaja(
    "Sin concentración",
    "",
    "Un psíquico con esta desventaja no podrá aplicar bonificadores a su potencial psíquico concentrándose.",
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    []
));
addDesventaja(new Ventaja(
    "Poder único",
    "",
    "El psíquico sólo podrá utilizar un único poder psíquico por asalto. Ello no le impide seguir usando otros mantenidos, siempre que los originara en asaltos anteriores.",
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    []
));
addDesventaja(new Ventaja(
    "Consumición psíquica",
    "",
    "Si un psíquico sufre un fracaso psíquico, pierde automáticamente los mismos puntos de vida que la cantidad por la que no alcanzó el potencial mínimo requerido.",
    NO_REPETIBLE,   //getRepetible
    [-2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_PSIQUICAS,
    []
));
