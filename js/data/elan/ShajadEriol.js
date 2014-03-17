

var shajadEriol = new BerylShajad(SHAJAD_ERIOL, SHAJAD);

shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_OTORGAR_FORTUNA_Y_DESGRACIA,
        "",
        10,
        10,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_ALTERAR_LA_LEY_DE_LA_CASUALIDAD,
        "",
        5,
        20,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_SENTIR_EL_CAOS,
        "",
        5,
        30,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_ROBAR_LA_SUERTE,
        "",
        10,
        40,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_CONJURAR_LA_PROVIDENCIA,
        "",
        10,
        50,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_ESTIGMA_DEL_CAOS,
        "",
        15,
        50,
        [],
        [] //TODO comprar poderes de monstruo
    )
);
shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_AURA_DE_CAOS,
        "",
        10,
        60,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_ALTERAR_EL_DESTINO,
        "",
        15,
        70,
        [],
        [ELAN_ERIOL_DON_CONJURAR_LA_PROVIDENCIA]
    )
);
shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_FORZAR_LA_SUERTE,
        "",
        15,
        80,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_TRUNCAR_EL_SINO,
        "",
        15,
        90,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        ELAN_ERIOL_DON_SEÑOR_DEL_CAOS,
        "",
        10,
        100,
        [],
        [ELAN_ERIOL_DON_AURA_DE_CAOS]
    )
);

berylShajad_set.push(shajadEriol);