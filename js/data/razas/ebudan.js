
ventajas_set.push(new Ventaja(
    EBUD_ORINIE,
    "",
    EBUD_ORINIE_DESC,
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
    EBUD_ALAS,
    "",
    EBUD_ALAS_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [alasSerafinEbudan],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    EBUD_ESENCIA,
    "",
    EBUD_ESENCIA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaEbudan = new Raza(
    RAZA_EBUDAN,
    [
        getVentaja(EBUD_ORINIE),
        getVentaja(EBUD_ALAS),
        getVentaja(EBUD_ESENCIA)
    ],
    [],
    1
);

razas_set.push(razaEbudan);

allRazas[RAZA_EBUDAN] = razaEbudan;
