var berylMikael = new BerylShajad(BERYL_MIKAEL, BERYL);

berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_LUZ_DE_ESPERANZA,
        "",
        5,
        10,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_EXTIRPAR_ENFERMEDADES,
        "",
        10,
        20,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_MANTENER_EN_EL_MUNDO,
        "",
        5,
        30,
        [],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_MIKAEL_RESISTENCIA_CELESTIAL,
    "",
    ELAN_VENTAJA_MIKAEL_RESISTENCIA_CELESTIAL_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [resistenciaCelestialElan],
    GRUPO_ELAN
));
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_RESISTENCIA_CELESTIAL,
        ELAN_MIKAEL_DON_RESISTENCIA_CELESTIAL_DESC,
        20,
        40,
        [ELAN_VENTAJA_MIKAEL_RESISTENCIA_CELESTIAL],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_EXORCIZAR_EL_MAL,
        "",
        15,
        50,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_AURA,
        "",
        10,
        50,
        [],
        [ELAN_MIKAEL_DON_RESISTENCIA_CELESTIAL]
    )
);
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_MILAGRO,
        "",
        10,
        60,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_DESHACER_ESTADOS_NEGATIVOS,
        "",
        10,
        70,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_SALVADOR,
        "",
        10,
        70,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_AYUDA_CELESTIAL,
        "",
        15,
        80,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_LEVANTATE_Y_ANDA,
        "",
        20,
        90,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        ELAN_MIKAEL_DON_Y_AL_TERCER_DIA_RESUCITO,
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylMikael);