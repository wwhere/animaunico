
ventajas_set.push(new Ventaja(
    SYLV_NEPH_RESISTENCIAS,
    "",
    SYLV_NEPH_RESISTENCIAS_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,DESV_SALUD_ENFERMIZA),
        new ElementoProhibido(VENTAJA,DESV_ENFERMEDAD_GRAVE),
        new ElementoProhibido(VENTAJA,DESV_VULNERABILIDAD_A_LA_MAGIA),
        new ElementoProhibido(VENTAJA,VENT_INMUNIDAD_SOBRENATURAL)
    ],    //incompatibles
    false,  //anulable
    [],
    [resistenciasExcepcionalesNephilimSylvain],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    SYLV_NEPH_DESEQUILIBRIO,
    "",
    SYLV_NEPH_DESEQUILIBRIO_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [new ElementoProhibido(VENTAJA,VENT_DESEQUILIBRIO_ELEMENTAL,ELEMENTO_OSCURIDAD)],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    SYLV_NEPH_CURACION,
    "",
    SYLV_NEPH_CURACION_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaRegeneracion,1,SYLV_NEPH_CURACION],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    SYLV_NEPH_PRESENTIR,
    "",
    SYLV_NEPH_PRESENTIR_DESC,
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
    SYLV_NEPH_NECESIDADES,
    "",
    SYLV_NEPH_NECESIDADES_DESC,
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
    SYLV_NEPH_ALMA,
    "",
    SYLV_NEPH_ALMA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimSylvain = new Raza(RAZA_NEPH_SYLVAIN, [
    getVentaja(SYLV_NEPH_RESISTENCIAS),
    getVentaja(SYLV_NEPH_DESEQUILIBRIO),
    getVentaja(SYLV_NEPH_CURACION),
    getVentaja(SYLV_NEPH_PRESENTIR),
    getVentaja(SYLV_NEPH_NECESIDADES)
], [
    getVentaja(SYLV_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimSylvain);

allRazas[RAZA_NEPH_SYLVAIN] = razaNephilimSylvain;