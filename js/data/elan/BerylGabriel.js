var berylGabriel = new BerylShajad(BERYL_GABRIEL, BERYL);

ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_GABRIEL_APTITUD_ARTISTICA,
    "",
    ELAN_VENTAJA_GABRIEL_APTITUD_ARTISTICA_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aptitudArtisticaGabriel],
    GRUPO_ELAN
));
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_APTITUD_ARTISTICA,
        ELAN_GABRIEL_DON_APTITUD_ARTISTICA_DESC,
        5,
        10,
        [ELAN_VENTAJA_GABRIEL_APTITUD_ARTISTICA],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_GRACIA,
        "",
        5,
        20,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_EMPATIA_POSITIVA,
        "",
        10,
        30,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_PACIFICADOR,
        "",
        10,
        40,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_INMUNIDAD_PSICOLOGICA,
        "",
        10,
        40,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_PERCEPCION_DE_SENTIMIENTOS,
        "",
        10,
        50,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_IMBUIR_SENTIMIENTOS,
        "",
        15,
        50,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_LAZO,
        "",
        15,
        60,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_AUXILIO,
        "",
        10,
        70,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_CANTO_DE_LA_PAZ,
        "",
        15,
        80,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_PROTECCION,
        "",
        20,
        90,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        ELAN_GABRIEL_DON_PARAISO,
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylGabriel);