
ventajas_set.push(new Ventaja(
    DAIM_NEPH_SENTIR,
    "",
    DAIM_NEPH_SENTIR_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [
        new ElementoProhibido(VENTAJA,VENT_INMUNIDAD_SOBRENATURAL)
    ],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DAIM_NEPH_MOVIMIENTO,
    "",
    DAIM_NEPH_MOVIMIENTO_DESC,
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
    DAIM_NEPH_VER,
    "",
    DAIM_NEPH_VER_DESC,
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
    DAIM_NEPH_PEQUEÑO,
    "",
    DAIM_NEPH_PEQUEÑO_DESC,
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
    DAIM_NEPH_NATURALEZA,
    "",
    DAIM_NEPH_NATURALEZA_DESC,
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
    DAIM_NEPH_ALMA,
    "",
    DAIM_NEPH_ALMA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimDaimah = new Raza(RAZA_NEPH_DAIMAH, [
    getVentaja(DAIM_NEPH_SENTIR),
    getVentaja(DAIM_NEPH_MOVIMIENTO),
    getVentaja(DAIM_NEPH_VER),
    getVentaja(DAIM_NEPH_PEQUEÑO),
    getVentaja(DAIM_NEPH_NATURALEZA)
], [
    getVentaja(DAIM_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimDaimah);

allRazas[RAZA_NEPH_DAIMAH] = razaNephilimDaimah;
