ventajas_set.push(new Ventaja(
    DEV_NEPH_MENTE_COMPLEJA,
    "",
    DEV_NEPH_MENTE_COMPLEJA_DESC,
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
    DEV_NEPH_EL_OJO_DEL_ALMA,
    "",
    DEV_NEPH_EL_OJO_DEL_ALMA_DESC,
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
    DEV_NEPH_LAZOS_EXISTENCIALES,
    "",
    DEV_NEPH_LAZOS_EXISTENCIALES_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [lazosExistencialesDevahNephilim],
    GRUPO_RAZAS,
    []
));


desventajas_set.push(new Ventaja(
    DEV_NEPH_FRAGILIDAD_FISICA,
    "",
    DEV_NEPH_FRAGILIDAD_FISICA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [fragilidadFisicaDevahNephilim],
    GRUPO_RAZAS,
    []
));


desventajas_set.push(new Ventaja(
    DEV_NEPH_ALMA_INMORTAL,
    "",
    DEV_NEPH_ALMA_INMORTAL_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaDevahNephilim = new Raza(
    RAZA_NEPH_DEVAH,
    [
        getVentaja(DEV_NEPH_MENTE_COMPLEJA),
        getVentaja(DEV_NEPH_EL_OJO_DEL_ALMA),
        getVentaja(DEV_NEPH_LAZOS_EXISTENCIALES)
    ],
    [
        getVentaja(DEV_NEPH_FRAGILIDAD_FISICA),
        getVentaja(DEV_NEPH_ALMA_INMORTAL)
    ],
    2);

razas_set.push(razaDevahNephilim);

allRazas[RAZA_NEPH_DEVAH] = razaDevahNephilim;
