
var shajadErebus = new BerylShajad(SHAJAD_EREBUS, SHAJAD);

ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_EREBUS_CONOCIMIENTO_SOBRENATURAL,
    "",
    ELAN_VENTAJA_EREBUS_CONOCIMIENTO_SOBRENATURAL_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [conocimientoSobrenaturalElan],
    GRUPO_ELAN
));
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_CONOCIMIENTO_SOBRENATURAL,
        ELAN_EREBUS_DON_CONOCIMIENTO_SOBRENATURAL_DESC,
        5,
        10,
        [ELAN_VENTAJA_EREBUS_CONOCIMIENTO_SOBRENATURAL],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_EREBUS_PRESENCIA_TENEBROSA,
    "",
    ELAN_VENTAJA_EREBUS_PRESENCIA_TENEBROSA_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [presenciaTenebrosaElan],
    GRUPO_ELAN
));
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_PRESENCIA_TENEBROSA,
        ELAN_EREBUS_DON_PRESENCIA_TENEBROSA_DESC,
        5,
        20,
        [ELAN_VENTAJA_EREBUS_PRESENCIA_TENEBROSA],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_EL_CAMINO_DE_LAS_PESADILLAS,
        "",
        5,
        30,
        [],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_SUSURROS_ONIRICOS,
        "",
        10,
        40,
        [],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_MISTICO_NATO,
        "",        15,
        50,
        [],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_EREBUS_INFLUJO_SOBRENATURAL,
    "",
    ELAN_VENTAJA_EREBUS_INFLUJO_SOBRENATURAL_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [influjoSobrenaturalElan],
    GRUPO_ELAN
));
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_INFLUJO_SOBRENATURAL,
        ELAN_EREBUS_DON_INFLUJO_SOBRENATURAL_DESC,
        10,
        60,
        [ELAN_VENTAJA_EREBUS_INFLUJO_SOBRENATURAL], //TODO elegir caracteristica
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_CAMINANTE_DE_LOS_SUEÑOS,
        "",
        10,
        60,
        [],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_LOS_MIEDOS_CARDINALES,
        "",
        20,
        70,
        [],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_POTENCIACION_SOBRENATURAL,
        "",
        15,
        80,
        [],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_NUX_EL_MIEDO_ABSOLUTO,
        "",
        10,
        90,
        [ELAN_EREBUS_DON_LOS_MIEDOS_CARDINALES],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_EREBUS_DEMIURGO,
    "",
    ELAN_VENTAJA_EREBUS_DEMIURGO_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [ELEGIR_REPARTO_5_INT_POD_VOL],
    [demiurgoElan],
    GRUPO_ELAN
));
shajadErebus.addDon(
    new DonElan(
        ELAN_EREBUS_DON_DEMIURGO,
        ELAN_EREBUS_DON_DEMIURGO_DESC,
        10,
        100,
        [ELAN_VENTAJA_EREBUS_DEMIURGO],
        []
    )
);

berylShajad_set.push(shajadErebus);