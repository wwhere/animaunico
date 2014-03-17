addDesventaja(new Ventaja(
    DESV_OBLIGACION_ORAL,
    "",
    DESV_OBLIGACION_ORAL_DESC,
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    DESV_OBLIGACION_SOMATICA,
    "",
    DESV_OBLIGACION_SOMATICA_DESC,
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    DESV_EXTENUACION_MAGICA,
    "",
    DESV_EXTENUACION_MAGICA_DESC,
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    DESV_LENTA_RECUPERACION_DE_LA_MAGIA,
    "",
    DESV_LENTA_RECUPERACION_DE_LA_MAGIA_DESC,
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [
        new ElementoProhibido(VENTAJA,DESV_MAGIA_ESTANCA)
    ],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    DESV_MAGIA_ATADA_A_ACCION,
    "",
    DESV_MAGIA_ATADA_A_ACCION_DESC,
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_INTRODUCCION_USUARIO],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    DESV_MAGIA_ESTANCA,
    "",
    DESV_MAGIA_ESTANCA_DESC,
    NO_REPETIBLE,   //getRepetible
    [-2],      //coste
    [
        new ElementoProhibido(VENTAJA,DESV_LENTA_RECUPERACION_DE_LA_MAGIA)
    ],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    DESV_LAZO_EXISTENCIAL,
    "",
    DESV_LAZO_EXISTENCIAL_DESC,
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [lazoExistencial],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    DESV_BRUJERIA,
    "",
    DESV_BRUJERIA_DESC,
    NO_REPETIBLE,   //getRepetible
    [-2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
