
ventajas_set.push(new Ventaja(
    DUK_NEPH_RESISTENCIAS,
    "",
    DUK_NEPH_RESISTENCIAS_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,VENT_INMUNIDAD_SOBRENATURAL)
    ],    //incompatibles
    false,  //anulable
    [],
    [resistenciasNephilimDukZarist],
    GRUPO_RAZAS,
    []
));



ventajas_set.push(new Ventaja(
    DUK_NEPH_DESEQUILIBRIO,
    "",
    DUK_NEPH_DESEQUILIBRIO_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [new ElementoProhibido(VENTAJA,VENT_DESEQUILIBRIO_ELEMENTAL,ELEMENTO_LUZ)],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DUK_NEPH_AGUANTE,
    "",
    DUK_NEPH_AGUANTE_DESC,
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
    DUK_NEPH_CURACION,
    "",
    DUK_NEPH_CURACION_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaRegeneracion,1,DUK_NEPH_CURACION],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DUK_NEPH_NECESIDADES,
    "",
    DUK_NEPH_NECESIDADES_DESC,
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
    DUK_NEPH_PRESENTIR,
    "",
    DUK_NEPH_PRESENTIR_DESC,
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
    DUK_NEPH_VISION,
    "",
    DUK_NEPH_VISION_DESC,
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
    DUK_NEPH_FUEGO,
    "",
    DUK_NEPH_FUEGO_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [fuegoNephilimDukZarist],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DUK_NEPH_CUERPOS,
    "",
    DUK_NEPH_CUERPOS_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [
        new ElementoProhibido(VENTAJA,DESV_EXTREMIDAD_ATROFIADA),
        new ElementoProhibido(VENTAJA,DESV_SALUD_ENFERMIZA),
        new ElementoProhibido(VENTAJA,DESV_VULNERABILIDAD_A_LOS_VENENOS),
        new ElementoProhibido(VENTAJA,DESV_MIOPIA),
        new ElementoProhibido(VENTAJA,DESV_DEBILIDAD_FISICA),
        new ElementoProhibido(VENTAJA,DESV_ENFERMEDAD_GRAVE),
        new ElementoProhibido(VENTAJA,DESV_MUDO),
        new ElementoProhibido(VENTAJA,DESV_CIEGO),
        new ElementoProhibido(VENTAJA,DESV_SORDO)
    ],
    [],
    GRUPO_RAZAS,
    []
));


desventajas_set.push(new Ventaja(
    DUK_NEPH_ALERGIA,
    "",
    DUK_NEPH_ALERGIA_DESC,
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
    DUK_NEPH_ALMA,
    "",
    DUK_NEPH_ALMA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimDukZarist = new Raza(RAZA_NEPH_DUKZARIST, [
    getVentaja(DUK_NEPH_RESISTENCIAS),
    getVentaja(DUK_NEPH_DESEQUILIBRIO),
    getVentaja(DUK_NEPH_AGUANTE),
    getVentaja(DUK_NEPH_CURACION),
    getVentaja(DUK_NEPH_NECESIDADES),
    getVentaja(DUK_NEPH_PRESENTIR),
    getVentaja(DUK_NEPH_VISION),
    getVentaja(DUK_NEPH_FUEGO),
    getVentaja(DUK_NEPH_CUERPOS)
], [
    getVentaja(DUK_NEPH_ALERGIA),
    getVentaja(DUK_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimDukZarist);

allRazas[RAZA_NEPH_DUKZARIST] = razaNephilimDukZarist;