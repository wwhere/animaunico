
ventajas_set.push(new Ventaja(
    DANJ_NEPH_INDETECTABILIDAD,
    "",
    DANJ_NEPH_INDETECTABILIDAD_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [indetectabilidadNephilimDanjayni],
    GRUPO_RAZAS,
    []
));


ventajas_set.push(new Ventaja(
    DANJ_NEPH_OLVIDO,
    "",
    DANJ_NEPH_OLVIDO_DESC,
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
    DANJ_NEPH_SUSURROS,
    "",
    DANJ_NEPH_SUSURROS_DESC,
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
    DANJ_NEPH_PASAR,
    "",
    DANJ_NEPH_PASAR_DESC,
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
    DANJ_NEPH_APARIENCIA,
    "",
    DANJ_NEPH_APARIENCIA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aparienciaNephilimDanjayni],
    GRUPO_RAZAS,
    []
));


desventajas_set.push(new Ventaja(
    DANJ_NEPH_ALMA,
    "",
    DANJ_NEPH_ALMA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimDanjayni = new Raza(RAZA_NEPH_DANJAYNI, [
    getVentaja(DANJ_NEPH_INDETECTABILIDAD),
    getVentaja(DANJ_NEPH_OLVIDO),
    getVentaja(DANJ_NEPH_SUSURROS),
    getVentaja(DANJ_NEPH_PASAR)
], [
    getVentaja(DANJ_NEPH_APARIENCIA),
    getVentaja(DANJ_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimDanjayni);

allRazas[RAZA_NEPH_DANJAYNI] = razaNephilimDanjayni;
