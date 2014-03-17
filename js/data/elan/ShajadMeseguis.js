var shajadMeseguis = new BerylShajad(SHAJAD_MESEGUIS, SHAJAD);

ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_MESEGUIS_SERENIDAD_MELANCOLIA,
    "",
    ELAN_VENTAJA_MESEGUIS_SERENIDAD_MELANCOLIA_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [serenidadMelancoliaElan],
    GRUPO_ELAN
));
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_LA_SERENIDAD_DE_LA_MELANCOLIA,
        ELAN_MESEGUIS_DON_LA_SERENIDAD_DE_LA_MELANCOLIA_DESC,
        5,
        10,
        [ELAN_VENTAJA_MESEGUIS_SERENIDAD_MELANCOLIA],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_CAMINO_DE_LA_VENGANZA,
        "",
        5,
        20,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_OJOS_DE_LA_PESADUMBRE,
        "",
        10,
        30,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_LAGRIMAS_POR_LOS_DEMAS,
        "",
        5,
        30,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_TRANSMITIR_EL_DOLOR,
        "",
        10,
        40,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_ESPIRITU_DE_LA_VENGANZA,
        "",
        10,
        40,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_LA_VOZ_DE_LOS_MUERTOS,
        "",
        10,
        50,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_VENGADOR_OSCURO,
        "",
        10,
        60,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_LA_VOZ_DEL_DOLOR,
        "",
        15,
        60,
        [],
        [ELAN_MESEGUIS_DON_TRANSMITIR_EL_DOLOR]
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_MAS_ALLA_DE_LA_MUERTE,
        "",
        10,
        70,
        [],
        [] //TODO poderes de monstruo
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_EJECUTOR_OSCURO,
        "",
        10,
        80,
        [],
        [ELAN_MESEGUIS_DON_VENGADOR_OSCURO]
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_ESPEJO_OSCURO,
        "",
        15,
        90,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        ELAN_MESEGUIS_DON_COMUNION_CON_LOS_CAIDOS,
        "",
        10,
        100,
        [],
        [ELAN_MESEGUIS_DON_LA_VOZ_DE_LOS_MUERTOS]
    )
);

berylShajad_set.push(shajadMeseguis);