ventajas_set.push(new Ventaja(
    DANJ_OLVIDO,
    "",
    DANJ_OLVIDO_DESC,
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
    DANJ_INDETECTABILIDAD,
    "",
    DANJ_INDETECTABILIDAD_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [indetectabilidadDanjayni],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    DANJ_ROSTRO,
    "",
    DANJ_ROSTRO_DESC,
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
    DANJ_PASAR,
    "",
    DANJ_PASAR_DESC,
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
    DANJ_SUSURROS,
    "",
    DANJ_SUSURROS_DESC,
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
    DANJ_NATURALEZA,
    "",
    DANJ_NATURALEZA_DESC,
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaDanjayni = new Raza(RAZA_DANJAYNI, [
    getVentaja(DANJ_OLVIDO),
    getVentaja(DANJ_INDETECTABILIDAD),
    getVentaja(DANJ_ROSTRO),
    getVentaja(DANJ_PASAR),
    getVentaja(DANJ_SUSURROS)
], [
    getVentaja(DANJ_NATURALEZA)
], 1);

razas_set.push(razaDanjayni);

allRazas[RAZA_DANJAYNI] = razaDanjayni;
