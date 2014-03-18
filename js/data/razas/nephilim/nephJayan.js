
ventajas_set.push(new Ventaja(
    JAY_NEPH_GIGANTES,
    "",
    JAY_NEPH_GIGANTES_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,VENT_TAMAÑO_NO_NATURAL,-5),
        new ElementoProhibido(VENTAJA,VENT_TAMAÑO_NO_NATURAL,-4),
        new ElementoProhibido(VENTAJA,VENT_TAMAÑO_NO_NATURAL,-3),
        new ElementoProhibido(VENTAJA,VENT_TAMAÑO_NO_NATURAL,-2),
        new ElementoProhibido(VENTAJA,VENT_TAMAÑO_NO_NATURAL,-1)
    ],    //incompatibles
    false,  //anulable
    [],
    [giganteNephilimJayan],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    JAY_NEPH_CANSANCIO,
    "",
    JAY_NEPH_CANSANCIO_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaCansancio, 1],
    GRUPO_RAZAS,
    []
));

//noinspection MagicNumberJS

ventajas_set.push(new Ventaja(
    JAY_NEPH_RESISTENCIA,
    "",
    JAY_NEPH_RESISTENCIA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaResistencia, RF, 15],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    JAY_NEPH_FUERZA,
    "",
    JAY_NEPH_FUERZA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [new ElementoProhibido(VENTAJA,DESV_REDUCIR_DOS_PUNTOS_A_UNA_CARACTERISTICA,FUE)],    //incompatibles
    false,  //anulable
    [],
    [aumentaCaracteristica, FUE, 1],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    JAY_NEPH_VISION,
    "",
    JAY_NEPH_VISION_DESC,
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
    JAY_NEPH_DEBILIDAD,
    "",
    JAY_NEPH_DEBILIDAD_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaResistencia, RM, -10],
    GRUPO_RAZAS,
    []
));


desventajas_set.push(new Ventaja(
    JAY_NEPH_ALMA,
    "",
    JAY_NEPH_ALMA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimJayan = new Raza(RAZA_NEPH_JAYAN, [
    getVentaja(JAY_NEPH_GIGANTES),
    getVentaja(JAY_NEPH_CANSANCIO),
    getVentaja(JAY_NEPH_RESISTENCIA),
    getVentaja(JAY_NEPH_FUERZA),
    getVentaja(JAY_NEPH_VISION)
], [
    getVentaja(JAY_NEPH_DEBILIDAD),
    getVentaja(JAY_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimJayan);

allRazas[RAZA_NEPH_JAYAN] = razaNephilimJayan;
