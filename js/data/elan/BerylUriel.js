var berylUriel = new BerylShajad(BERYL_URIEL, BERYL);

berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_INSTINTO_DE_LIBERTAD,
        "",
        5,
        10,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_INADVERTIDO,
        "",
        5,
        20,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_ESPIRITU_INDOMABLE,
        "",
        10,
        20,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_ALMA_LIBRE,
        "",
        5,
        30,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_VISIONARIO,
        "",
        10,
        40,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_MEDIO_DE_TRANSPORTE,
        "",
        5,
        40,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_ROMPER_LAS_CADENAS,
        "",
        10,
        50,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_OJOS_DEL_FUTURO,
        "",
        20,
        60,
        [],
        [ELAN_URIEL_DON_VISIONARIO]
    )
);
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_PASO_LIBRE,
        "",
        15,
        60,
        [],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_URIEL_COMUNION_URIEL,
    "",
    ELAN_VENTAJA_URIEL_COMUNION_URIEL_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [comunionUrielElan],
    GRUPO_ELAN
));
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_COMUNION_CON_URIEL,
        ELAN_URIEL_DON_COMUNION_CON_URIEL_DESC,
        10,
        70,
        [ELAN_VENTAJA_URIEL_COMUNION_URIEL],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_URIEL_ESENCIA_SOBRENATURAL,
    "",
    ELAN_VENTAJA_URIEL_ESENCIA_SOBRENATURAL_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [esenciaSobrenaturalElan],
    GRUPO_ELAN
));
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_ESENCIA_SOBRENATURAL,
        ELAN_URIEL_DON_ESENCIA_SOBRENATURAL_DESC,
        10,
        80,
        [ELAN_VENTAJA_URIEL_ESENCIA_SOBRENATURAL],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_UNA_SEGUNDA_OPORTUNIDAD,
        "",
        20,
        90,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        ELAN_URIEL_DON_EL_VIAJERO,
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylUriel);