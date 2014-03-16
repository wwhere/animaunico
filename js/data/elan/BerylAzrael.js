var berylAzrael = new BerylShajad(BERYL_AZRAEL, BERYL);

ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_AZRAEL_LIDER,
    "",
    ELAN_VENTAJA_AZRAEL_LIDER_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [liderElan],
    GRUPO_ELAN
));
berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_LIDER,
        ELAN_AZRAEL_DON_LIDER_DESC,
        5,
        10,
        [ELAN_VENTAJA_AZRAEL_LIDER],
        []
    )
);

ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_AZRAEL_VALOR_HEROES,
    "",
    ELAN_VENTAJA_AZRAEL_VALOR_HEROES_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [valorHeroesElan],
    GRUPO_ELAN
));
berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_VALOR_HEROES,
        ELAN_AZRAEL_DON_VALOR_HEROES_DESC,
        5,
        20,
        [ELAN_VENTAJA_AZRAEL_VALOR_HEROES],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_EXALTACION_DEL_ESPIRITU,
        "",
        10,
        30,
        [],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_SENTIDO_DE_LA_JUSTICIA,
        "",
        10,
        40,
        [],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_ESPIRITU_SAGRADO,
        "",
        5,
        50,
        [],
        []
    )
);

berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_AURA_DE_PODER,
        "",
        10,
        60,
        [],
        [ELAN_AZRAEL_DON_ESPIRITU_SAGRADO]
    )
);

berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_INMUNIDAD,
        "",
        15,
        60,
        [],
        []
    )
);

berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_DESTRUCTOR_DEL_MAL,
        "",
        15,
        70,
        [],
        []
    )
);

berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_BENDECIDO,
        "",
        20,
        70,
        [],
        []
    )
);

ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_AZRAEL_GUERRERO_AZRAEL,
    "",
    ELAN_VENTAJA_AZRAEL_GUERRERO_AZRAEL_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [guerreroAzraelElan],
    GRUPO_ELAN
));
berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_GUERRERO_DE_AZRAEL,
        ELAN_AZRAEL_DON_GUERRERO_DE_AZRAEL_DESC,
        10,
        80,
        [ELAN_VENTAJA_AZRAEL_GUERRERO_AZRAEL],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_CONSAGRAR,
        "",
        15,
        90,
        [],
        [ELAN_AZRAEL_DON_AURA_DE_PODER]
    )
);
berylAzrael.addDon(
    new DonElan(
        ELAN_AZRAEL_DON_YIHAD,
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylAzrael);