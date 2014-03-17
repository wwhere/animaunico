
var shajadNoah = new BerylShajad(SHAJAD_NOAH, SHAJAD);

shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_EN_LAS_MANOS_APROPIADAS,
        "",
        5,
        10,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_ESPIRITU_DE_SUPERACION,
        "",
        10,
        20,
        [],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_NOAH_RESISTENTE,
    "",
    ELAN_VENTAJA_NOAH_RESISTENTE_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [resistenteElan],
    GRUPO_ELAN
));
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_RESISTENTE,
        ELAN_NOAH_DON_RESISTENTE_DESC,
        5,
        20,
        [ELAN_VENTAJA_NOAH_RESISTENTE],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_INHUMANO,
        "",
        5,
        30,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_IGNORAR_PENALIZADORES,
        "",
        10,
        40,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_POTENCIA_OSCURA,
        "",
        15,
        50,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_DOTE,
        "",
        10,
        60,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_MEJORAR_ANTE_LOS_RETOS,
        "",
        15,
        70,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_AURA_DE_GUERRA,
        "",
        10,
        70,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_AVATAR_OSCURO,
        "",
        20,
        80,
        [],
        [ELAN_NOAH_DON_INHUMANO]
    )
);
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_LA_SOMBRA_DE_LA_GUERRA,
        "",
        15,
        90,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        ELAN_NOAH_DON_EL_VENCEDOR,
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(shajadNoah);