
ventajas_set.push(new Ventaja(
    DUK_PERFECCION,
    "",
    DUK_PERFECCION_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,DESV_EXTREMIDAD_ATROFIADA),
        new ElementoProhibido(VENTAJA,DESV_SALUD_ENFERMIZA),
        new ElementoProhibido(VENTAJA,DESV_VULNERABILIDAD_A_LOS_VENENOS),
        new ElementoProhibido(VENTAJA,DESV_MIOPIA),
        new ElementoProhibido(VENTAJA,DESV_DEBILIDAD_FISICA),
        new ElementoProhibido(VENTAJA,DESV_ENFERMEDAD_GRAVE),
        new ElementoProhibido(VENTAJA,DESV_MUDO),
        new ElementoProhibido(VENTAJA,DESV_CIEGO),
        new ElementoProhibido(VENTAJA,DESV_SORDO),
        new ElementoProhibido(VENTAJA,VENT_INMUNIDAD_SOBRENATURAL)
    ],    //incompatibles
    false,  //anulable
    [],
    [perfeccionDukZarist],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DUK_OJOS,
    "",
    DUK_OJOS_DESC,
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
    DUK_ACCIONES,
    "",
    DUK_ACCIONES_DESC,
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
    DUK_PRESENTIR,
    "",
    DUK_PRESENTIR_DESC,
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
    DUK_LAZO,
    "",
    DUK_LAZO_DESC,
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
    DUK_RESISTENCIAS,
    "",
    DUK_RESISTENCIAS_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [resistenciasDukZarist],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DUK_AGUANTE,
    "",
    DUK_AGUANTE_DESC,
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
    DUK_CURACION,
    "",
    DUK_CURACION_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaRegeneracion,5,DUK_CURACION],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DUK_NECESIDADES,
    "",
    DUK_NECESIDADES_DESC,
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
    DUK_OBLIGACION,
    "",
    DUK_OBLIGACION_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [obligacionDukZarist],
    GRUPO_RAZAS,
    []
));


desventajas_set.push(new Ventaja(
    DUK_ALERGIA,
    "",
    DUK_ALERGIA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));


var razaDukZarist = new Raza(
    RAZA_DUKZARIST,
    [
        getVentaja(DUK_PERFECCION),
        getVentaja(DUK_OJOS),
        getVentaja(DUK_ACCIONES),
        getVentaja(DUK_PRESENTIR),
        getVentaja(DUK_LAZO),
        getVentaja(DUK_RESISTENCIAS),
        getVentaja(DUK_AGUANTE),
        getVentaja(DUK_CURACION),
        getVentaja(DUK_NECESIDADES)
    ],
    [
        getVentaja(DUK_OBLIGACION),
        getVentaja(DUK_ALERGIA)
    ],
    3);

razas_set.push(razaDukZarist);

allRazas[RAZA_DUKZARIST] = razaDukZarist;