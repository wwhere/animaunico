
ventajas_set.push(new Ventaja(
    SYLV_CARACTERISTICAS,
    "",
    SYLV_CARACTERISTICAS_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,VENT_INMUNIDAD_SOBRENATURAL)
    ],    //incompatibles
    false,  //anulable
    [],
    [caracteristicasSobrehumanasSylvain],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    SYLV_RESISTENCIAS,
    "",
    SYLV_RESISTENCIAS_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [new ElementoProhibido(VENTAJA,DESV_FACIL_POSESION),
        new ElementoProhibido(VENTAJA,DESV_VULNERABILIDAD_A_LA_MAGIA)
    ],    //incompatibles
    false,  //anulable
    [],
    [resistenciasAnimicasExcepcionalesSylvain],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    SYLV_INMUNIDAD,
    "",
    SYLV_INMUNIDAD_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,DESV_SALUD_ENFERMIZA),
        new ElementoProhibido(VENTAJA,DESV_VULNERABILIDAD_A_LOS_VENENOS),
        new ElementoProhibido(VENTAJA,DESV_ENFERMEDAD_GRAVE)
    ],    //incompatibles
    false,  //anulable
    [],
    [inmunidadEnfermedadesVenenosSylvain],
    GRUPO_RAZAS,
    []
));



ventajas_set.push(new Ventaja(
    SYLV_INHUMANAS,
    "",
    SYLV_INHUMANAS_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
    ],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    SYLV_NECESIDADES,
    "",
    SYLV_NECESIDADES_DESC,
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
    SYLV_CURACION,
    "",
    SYLV_CURACION_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaRegeneracion,3,SYLV_CURACION],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    SYLV_PRESENTIR,
    "",
    SYLV_PRESENTIR_DESC,
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
    SYLV_LAZO,
    "",
    SYLV_LAZO_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [new ElementoProhibido(VENTAJA,VENT_DESEQUILIBRIO_ELEMENTAL,ELEMENTO_OSCURIDAD)],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));


desventajas_set.push(new Ventaja(
    SYLV_OBLIGACION,
    "",
    SYLV_OBLIGACION_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [obligadoComprarDon],
    GRUPO_RAZAS,
    []
));


desventajas_set.push(new Ventaja(
    SYLV_VISION,
    "",
    SYLV_VISION_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaSylvain = new Raza(RAZA_SYLVAIN, [
    getVentaja(SYLV_CARACTERISTICAS),
    getVentaja(SYLV_RESISTENCIAS),
    getVentaja(SYLV_INMUNIDAD),
    getVentaja(SYLV_INHUMANAS),
    getVentaja(SYLV_NECESIDADES),
    getVentaja(SYLV_CURACION),
    getVentaja(SYLV_PRESENTIR),
    getVentaja(SYLV_LAZO)
], [
    getVentaja(SYLV_OBLIGACION),
    getVentaja(SYLV_VISION)
], 2);

razas_set.push(razaSylvain);

allRazas[RAZA_SYLVAIN] = razaSylvain;

