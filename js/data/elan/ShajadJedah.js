var shajadJedah = new BerylShajad(SHAJAD_JEDAH, SHAJAD);

ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_JEDAH_DON_POLITICA,
    "",
    ELAN_VENTAJA_JEDAH_DON_POLITICA_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [donPoliticaElan],
    GRUPO_ELAN
));
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_DON_DE_LA_POLITICA,
        ELAN_JEDAH_DON_DON_DE_LA_POLITICA_DESC,
        5,
        10,
        [ELAN_VENTAJA_JEDAH_DON_POLITICA],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_DOMINACION_INCREMENTADA,
        "",
        10,
        20,
        [],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_SOMBRA,
        "",
        5,
        30,
        [],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_AFINIDAD_OSCURA,
        "",
        5,
        40,
        [],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_JEDAH_PODER_CONOCIMIENTO,
    "",
    ELAN_VENTAJA_JEDAH_PODER_CONOCIMIENTO_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [poderConocimientoElan],
    GRUPO_ELAN
));
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_EL_PODER_DEL_CONOCIMIENTO,
        ELAN_JEDAH_DON_EL_PODER_DEL_CONOCIMIENTO_DESC,
        10,
        50,
        [ELAN_VENTAJA_JEDAH_PODER_CONOCIMIENTO],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_EL_DOMINADOR_HABLA,
        "",
        10,
        50,
        [],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_CADENA_DE_MANDO,
        "",
        10,
        60,
        [],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_SEÑOR_DE_LAS_SOMBRAS,
        "",
        15,
        65,
        [],
        [ELAN_JEDAH_DON_AFINIDAD_OSCURA]
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_JEDAH_PODER_OSCURO,
    "",
    ELAN_VENTAJA_JEDAH_PODER_OSCURO_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [poderOscuroElan],
    GRUPO_ELAN
));
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_PODER_OSCURO,
        ELAN_JEDAH_DON_PODER_OSCURO_DESC,
        15,
        70,
        [ELAN_VENTAJA_JEDAH_PODER_OSCURO],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_EL_DOMINADOR_VISTA,
        "",
        10,
        70,
        [],
        [ELAN_JEDAH_DON_EL_DOMINADOR_HABLA]
    )
);
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_ESENCIA_SOBRENATURAL,
        "",
        15,
        80,
        [],
        []//TODO gnosis 30
    )
);
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_EL_DOMINADOR_AURA,
        "",
        10,
        90,
        [],
        [ELAN_JEDAH_DON_EL_DOMINADOR_VISTA]
    )
);
shajadJedah.addDon(
    new DonElan(
        ELAN_JEDAH_DON_MAESTRO_DE_MARIONETAS,
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(shajadJedah);