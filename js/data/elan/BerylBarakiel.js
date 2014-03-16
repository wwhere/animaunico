var berylBarakiel = new BerylShajad(BERYL_BARAKIEL, BERYL);

ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_BARAKIEL_ESTETICA,
    "",
    ELAN_VENTAJA_BARAKIEL_ESTETICA_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [esteticaElan],
    GRUPO_ELAN
));
berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_ESTETICA,
        ELAN_BARAKIEL_DON_ESTETICA_DESC,
        5,
        10,
        [ELAN_VENTAJA_BARAKIEL_ESTETICA],
        []
    )
);

berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_ATRAYENTE,
        "",
        10,
        20,
        [],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_BARAKIEL_SABER_DE_LACIENCIA,
    "",
    ELAN_VENTAJA_BARAKIEL_SABER_DE_LACIENCIA_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [saberCienciaElan],
    GRUPO_ELAN
));
berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_SABER_DE_LA_CIENCIA,
        ELAN_BARAKIEL_DON_SABER_DE_LA_CIENCIA_DESC,
        10,
        30,
        [ELAN_VENTAJA_BARAKIEL_SABER_DE_LACIENCIA],
        []
    )
);

berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_PERCIBIR_IMPERFECCIONES,
        "",
        10,
        40,
        [],
        []
    )
);

berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_SENTIR_EL_ORDEN,
        "",
        5,
        40,
        [],
        []
    )
);

berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_CUERPO_PERFECTO,
        "",
        15,
        50,
        [],
        [ELAN_BARAKIEL_DON_BELLEZA_PERFECTA]
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_BARAKIEL_BELLEZA_PERFECTA,
    "",
    ELAN_VENTAJA_BARAKIEL_BELLEZA_PERFECTA_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [bellezaPerfectaElan],
    GRUPO_ELAN
));

berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_BELLEZA_PERFECTA,
        ELAN_BARAKIEL_DON_BELLEZA_PERFECTA_DESC,
        5,
        50,
        [ELAN_VENTAJA_BARAKIEL_BELLEZA_PERFECTA],
        []
    )
);

berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_AURA_DE_ORDEN,
        "",
        10,
        60,
        [],
        []
    )
);

ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_BARAKIEL_ESENCIA_BARAKIEL,
    "",
    ELAN_VENTAJA_BARAKIEL_ESENCIA_BARAKIEL_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [esenciaBarakielElan],
    GRUPO_ELAN
));
berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_ESENCIA_BARAKIEL,
        ELAN_BARAKIEL_DON_ESENCIA_BARAKIEL_DESC,
        20,
        70,
        [ELAN_VENTAJA_BARAKIEL_ESENCIA_BARAKIEL],
        []
    )
);
berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_INCAPAZ_DE_ERRAR,
        "",
        10,
        70,
        [],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_BARAKIEL_DIVINIDAD_CUERPO_ALMA,
    "",
    ELAN_VENTAJA_BARAKIEL_DIVINIDAD_CUERPO_ALMA_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [divinidadCuerpoAlmaElan],
    GRUPO_ELAN
));
berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_DIVINIDAD_EN_CUERPO_Y_ALMA,
        ELAN_BARAKIEL_DON_DIVINIDAD_EN_CUERPO_Y_ALMA_DESC, //TODO el bono por raza llega de otro modo
        20,
        80,
        [ELAN_VENTAJA_BARAKIEL_DIVINIDAD_CUERPO_ALMA],
        [ELAN_BARAKIEL_DON_CUERPO_PERFECTO]
    )
);
berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_INMORTALIDAD,
        "",
        10,
        90,
        [],
        [ELAN_BARAKIEL_DON_CUERPO_PERFECTO]
    )
);
berylBarakiel.addDon(
    new DonElan(
        ELAN_BARAKIEL_DON_PERFECCION_ABSOLUTA,
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylBarakiel);