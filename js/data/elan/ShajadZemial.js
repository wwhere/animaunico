
var shajadZemial = new BerylShajad(SHAJAD_ZEMIAL, SHAJAD);

shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_ASALTO_ESPIRITUAL,
        "",
        5,
        10,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_ANSIA_DEMENCIAL,
        "",
        5,
        20,
        [],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_ZEMIAL_DAÑO_INCREMENTADO,
    "",
    ELAN_VENTAJA_ZEMIAL_DAÑO_INCREMENTADO_DESC,
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [ELEGIR_POD_VOL],
    [dañoIncrementadoElan],
    GRUPO_ELAN
));
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_DAÑO_INCREMENTADO,
        ELAN_ZEMIAL_DON_DAÑO_INCREMENTADO_DESC,
        10,
        30,
        [ELAN_VENTAJA_ZEMIAL_DAÑO_INCREMENTADO],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_DAÑO_ANIMICO,
        "",
        10,
        40,
        [],
        [ELAN_ZEMIAL_DON_ASALTO_ESPIRITUAL]
    )
);
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_DESTRUCTOR,
        "",
        15,
        50,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_SEÑOR_DE_LA_DESTRUCCION_TACTO,
        "",
        10,
        50,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_PRESENCIA_EXTERMINADORA,
        "",
        10,
        60,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_SEÑOR_DE_LA_DESTRUCCION_VISTA,
        "",
        10,
        60,
        [],
        [ELAN_ZEMIAL_DON_SEÑOR_DE_LA_DESTRUCCION_TACTO]
    )
);
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_SEÑOR_DE_LA_DESTRUCCION_AURA,
        "",
        10,
        70,
        [],
        [ELAN_ZEMIAL_DON_SEÑOR_DE_LA_DESTRUCCION_VISTA]
    )
);
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_ASALTO_DESTRUCTOR,
        "",
        15,
        80,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_LA_SANGRE_DE_LA_LOCURA,
        "",
        20,
        90,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        ELAN_ZEMIAL_DON_PORTADOR_DE_CATASTROFES,
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(shajadZemial);