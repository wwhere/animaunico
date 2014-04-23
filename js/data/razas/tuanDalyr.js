


ventajas_set.push(new Ventaja(
    TUAN_DALYR_ARMAS_NATURALES,
    "",
    TUAN_DALYR_ARMAS_NATURALES_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [armasNaturalesTuanDalyr],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    TUAN_DALYR_TRANSFORMACION,
    "",
    TUAN_DALYR_TRANSFORMACION_DESC,
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
    TUAN_DALYR_SENTIDO_DE_ANIMAL,
    "",
    TUAN_DALYR_SENTIDO_DE_ANIMAL_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [sentidoDeAnimalTuanDalyr],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    TUAN_DALYR_HIJOS_DE_LA_LUNA,
    "",
    TUAN_DALYR_HIJOS_DE_LA_LUNA_DESC,
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
    TUAN_DALYR_RASGOS_ANIMALES,
    "",
    TUAN_DALYR_RASGOS_ANIMALES_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));



var razaTuanDalyr = new Raza(
    RAZA_TUAN_DALYR,
    [
        getVentaja(TUAN_DALYR_ARMAS_NATURALES),
        getVentaja(TUAN_DALYR_TRANSFORMACION),
        getVentaja(TUAN_DALYR_SENTIDO_DE_ANIMAL),
        getVentaja(TUAN_DALYR_HIJOS_DE_LA_LUNA)
    ],
    [
        getVentaja(TUAN_DALYR_RASGOS_ANIMALES)
    ],
    2);

razas_set.push(razaTuanDalyr);

allRazas[RAZA_TUAN_DALYR] = razaTuanDalyr;
