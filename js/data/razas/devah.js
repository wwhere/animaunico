


ventajas_set.push(new Ventaja(
    DEV_MENTE_Y_ALMA_SUPERIOR,
    "",
    DEV_MENTE_Y_ALMA_SUPERIOR_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [menteYAlmaSuperiorDevah],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DEV_TAMAÑO_INNATURAL,
    "",
    DEV_TAMAÑO_INNATURAL_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaTamaño,2],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DEV_EL_OJO_DEL_ALMA,
    "",
    DEV_EL_OJO_DEL_ALMA_DESC,
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
    DEV_COMUNICACION_SOBRENATURAL,
    "",
    DEV_COMUNICACION_SOBRENATURAL_DESC,
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
    DEV_MENTE_COMPLEJA,
    "",
    DEV_MENTE_COMPLEJA_DESC,
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
    DEV_LAZOS_EXISTENCIALES,
    "",
    DEV_LAZOS_EXISTENCIALES_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [lazosExistencialesDevah],
    GRUPO_RAZAS,
    []
));


desventajas_set.push(new Ventaja(
    DEV_FRAGILIDAD_FISICA,
    "",
    DEV_FRAGILIDAD_FISICA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [fragilidadFisicaDevah],
    GRUPO_RAZAS,
    []
));

desventajas_set.push(new Ventaja(
    DEV_ALMA_INNATURAL,
    "",
    DEV_ALMA_INNATURAL_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [almaInnaturalDevah],
    GRUPO_RAZAS,
    []
));

var razaDevah = new Raza(
    RAZA_DEVAH,
    [
        getVentaja(DEV_COMUNICACION_SOBRENATURAL),
        getVentaja(DEV_EL_OJO_DEL_ALMA),
        getVentaja(DEV_LAZOS_EXISTENCIALES),
        getVentaja(DEV_MENTE_COMPLEJA),
        getVentaja(DEV_MENTE_Y_ALMA_SUPERIOR),
        getVentaja(DEV_TAMAÑO_INNATURAL)
    ],
    [
        getVentaja(DEV_ALMA_INNATURAL),
        getVentaja(DEV_FRAGILIDAD_FISICA)
    ],
    2);

razas_set.push(razaDevah);

allRazas[RAZA_DEVAH] = razaDevah;
