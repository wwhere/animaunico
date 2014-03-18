


ventajas_set.push(new Ventaja(
    DAIM_CUERPO,
    "",
    DAIM_CUERPO_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [cuerpoDaimah],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DAIM_SENTIR,
    "",
    DAIM_SENTIR_DESC,
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
    DAIM_GARRAS,
    "",
    DAIM_GARRAS_DESC,
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
    DAIM_HABILIDAD,
    "",
    DAIM_HABILIDAD_DESC,
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
    DAIM_PEQUEÑO,
    "",
    DAIM_PEQUEÑO_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaTamaño,-1],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DAIM_NATURALEZA,
    "",
    DAIM_NATURALEZA_DESC,
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
    DAIM_RESISTENCIA,
    "",
    DAIM_RESISTENCIA_DESC,
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
    DAIM_INMUNIDAD,
    "",
    DAIM_INMUNIDAD_DESC,
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
    DAIM_ESENCIA,
    "",
    DAIM_ESENCIA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,VENT_INMUNIDAD_SOBRENATURAL)
    ],    //incompatibles
    false,  //anulable
    [],
    [obligadoComprarDon],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DAIM_MOVIMIENTO,
    "",
    DAIM_MOVIMIENTO_DESC,
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
    DAIM_VER,
    "",
    DAIM_VER_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));


var razaDaimah = new Raza(
    RAZA_DAIMAH,
    [
        getVentaja(DAIM_CUERPO),
        getVentaja(DAIM_SENTIR),
        getVentaja(DAIM_GARRAS),
        getVentaja(DAIM_HABILIDAD),
        getVentaja(DAIM_NATURALEZA),
        getVentaja(DAIM_RESISTENCIA),
        getVentaja(DAIM_INMUNIDAD),
        getVentaja(DAIM_ESENCIA),
        getVentaja(DAIM_MOVIMIENTO),
        getVentaja(DAIM_VER)
    ],
    [
        getVentaja(DAIM_PEQUEÑO)
    ],
    1);

razas_set.push(razaDaimah);

allRazas[RAZA_DAIMAH] = razaDaimah;
