
ventajas_set.push(new Ventaja(
    JAY_GIGANTES,
    "",
    JAY_GIGANTES_DESC,
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
    [giganteJayan],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    JAY_FISICO,
    "",
    JAY_FISICO_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [
        new ElementoProhibido(VENTAJA,DESV_REDUCIR_DOS_PUNTOS_A_UNA_CARACTERISTICA,FUE)
    ],
    [fisicoJayan],
    GRUPO_RAZAS,
    []
));

//noinspection MagicNumberJS

ventajas_set.push(new Ventaja(
    JAY_CANSANCIO,
    "",
    JAY_CANSANCIO_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaCansancio, 3],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    JAY_RESISTENCIA,
    "",
    JAY_RESISTENCIA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aumentaResistencia, RF, 20],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    JAY_OJO,
    "",
    JAY_OJO_DESC,
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
    JAY_ARMAS,
    "",
    JAY_ARMAS_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [armasJayan],
    GRUPO_RAZAS,
    []
));


desventajas_set.push(new Ventaja(
    JAY_FUERZA,
    "",
    JAY_FUERZA_DESC,
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
    JAY_DEBILIDAD,
    "",
    JAY_DEBILIDAD_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [debilidadJayan],
    GRUPO_RAZAS,
    []
));

var razaJayan = new Raza(
    RAZA_JAYAN,
    [
        getVentaja(JAY_GIGANTES),
        getVentaja(JAY_FISICO),
        getVentaja(JAY_CANSANCIO),
        getVentaja(JAY_RESISTENCIA),
        getVentaja(JAY_OJO),
        getVentaja(JAY_ARMAS),
        getVentaja(JAY_FUERZA)
    ],
    [
        getVentaja(JAY_DEBILIDAD)
    ],
    1);

razas_set.push(razaJayan);

allRazas[RAZA_JAYAN] = razaJayan;
