


ventajas_set.push(new Ventaja(
    VETALA_HIJOS_DE_LA_NOCHE,
    "",
    VETALA_HIJOS_DE_LA_NOCHE_DESC,
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
    VETALA_AGUANTE_AL_DAÑO_CRITICO,
    "",
    VETALA_AGUANTE_AL_DAÑO_CRITICO_DESC,
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
    VETALA_ULTRASONIDOS,
    "",
    VETALA_ULTRASONIDOS_DESC,
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
    VETALA_EXTASIS_SANGUINEO,
    "",
    VETALA_EXTASIS_SANGUINEO_DESC,
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
    VETALA_CURACION_RAPIDA,
    "",
    VETALA_CURACION_RAPIDA_DESC,
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
    VETALA_VULNERABLE_A_LA_LUZ,
    "",
    VETALA_VULNERABLE_A_LA_LUZ_DESC,
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
    VETALA_SU_VISION_DEL_MUNDO,
    "",
    VETALA_SU_VISION_DEL_MUNDO_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaVetala = new Raza(
    RAZA_VETALA,
    [
        getVentaja(VETALA_HIJOS_DE_LA_NOCHE),
        getVentaja(VETALA_AGUANTE_AL_DAÑO_CRITICO),
        getVentaja(VETALA_ULTRASONIDOS),
        getVentaja(VETALA_EXTASIS_SANGUINEO),
        getVentaja(VETALA_CURACION_RAPIDA)
    ],
    [
        getVentaja(VETALA_VULNERABLE_A_LA_LUZ),
        getVentaja(VETALA_SU_VISION_DEL_MUNDO)
    ],
    2);

razas_set.push(razaVetala);

allRazas[RAZA_VETALA] = razaVetala;
