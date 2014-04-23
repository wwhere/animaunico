ventajas_set.push(new Ventaja(
    VETALA_NEPH_AGUANTE_AL_DAÑO_CRITICO,
    "",
    VETALA_NEPH_AGUANTE_AL_DAÑO_CRITICO_DESC,
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
    VETALA_NEPH_EXTASIS_SANGUINEO,
    "",
    VETALA_NEPH_EXTASIS_SANGUINEO_DESC,
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
    VETALA_NEPH_CURACION_RAPIDA,
    "",
    VETALA_NEPH_CURACION_RAPIDA_DESC,
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
    VETALA_NEPH_PIEL_FOTOSENSIBLE,
    "",
    VETALA_NEPH_PIEL_FOTOSENSIBLE_DESC,
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
    VETALA_NEPH_OBSESION_POR_LA_SANGRE,
    "",
    VETALA_NEPH_OBSESION_POR_LA_SANGRE_DESC,
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
    VETALA_NEPH_SALUD_ENFERMIZA,
    "",
    VETALA_NEPH_SALUD_ENFERMIZA_DESC,
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
    VETALA_NEPH_ALMA_INMORTAL,
    "",
    VETALA_NEPH_ALMA_INMORTAL_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaVetalaNephilim = new Raza(
    RAZA_NEPH_VETALA,
    [
        getVentaja(VETALA_NEPH_AGUANTE_AL_DAÑO_CRITICO),
        getVentaja(VETALA_NEPH_EXTASIS_SANGUINEO),
        getVentaja(VETALA_NEPH_CURACION_RAPIDA)
    ],
    [
        getVentaja(VETALA_NEPH_PIEL_FOTOSENSIBLE),
        getVentaja(VETALA_NEPH_OBSESION_POR_LA_SANGRE),
        getVentaja(VETALA_NEPH_SALUD_ENFERMIZA),
        getVentaja(VETALA_NEPH_ALMA_INMORTAL)
    ],
    2);

razas_set.push(razaVetalaNephilim);

allRazas[RAZA_NEPH_VETALA] = razaVetalaNephilim;
