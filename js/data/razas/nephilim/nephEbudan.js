
ventajas_set.push(new Ventaja(
    EBUD_NEPH_ORINIE,
    "",
    EBUD_NEPH_ORINIE_DESC,
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
    EBUD_NEPH_ALAS,
    "",
    EBUD_NEPH_ALAS_DESC,
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
    EBUD_NEPH_ESENCIA,
    "",
    EBUD_NEPH_ESENCIA_DESC,
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
    EBUD_NEPH_ALMA,
    "",
    EBUD_NEPH_ALMA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimEbudan = new Raza(RAZA_NEPH_EBUDAN, [
    getVentaja(EBUD_NEPH_ORINIE),
    getVentaja(EBUD_NEPH_ALAS),
    getVentaja(EBUD_NEPH_ESENCIA)
], [
    getVentaja(EBUD_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimEbudan);

allRazas[RAZA_NEPH_EBUDAN] = razaNephilimEbudan;
