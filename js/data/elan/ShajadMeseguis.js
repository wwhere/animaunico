var SHAJAD_MESEGUIS = "Meseguis";

var shajadMeseguis = new BerylShajad(SHAJAD_MESEGUIS, SHAJAD);

var ELAN_MESEGUIS_SERENIDAD_MELANCOLIA = "La serenidad de la melancolía";
ventajas_set.push(new Ventaja(
    ELAN_MESEGUIS_SERENIDAD_MELANCOLIA,
    "",
    "Este don otorga un bonificador especial a Frialdad y Resistir el dolor equivalente a su nivel de Elan.",
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
        "La serenidad de la melancolía",
        "Este don otorga un bonificador especial a Frialdad y Resistir el dolor equivalente a su nivel de Elan.",
        5,
        10,
        [ELAN_MESEGUIS_SERENIDAD_MELANCOLIA],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "Camino de la venganza",
        "",
        5,
        20,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "Ojos de la pesadumbre",
        "",
        10,
        30,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "Lágrimas por los demás",
        "",
        5,
        30,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "Transmitir el dolor",
        "",
        10,
        40,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "Espíritu de la venganza",
        "",
        10,
        40,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "La voz de los muertos",
        "",
        10,
        50,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "Vengador oscuro",
        "",
        10,
        60,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "La voz del dolor",
        "",
        15,
        60,
        [],
        ["Transmitir el dolor"]
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "Más allá de la muerte",
        "",
        10,
        70,
        [],
        [] //TODO poderes de monstruo
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "Ejecutor oscuro",
        "",
        10,
        80,
        [],
        ["Vengador oscuro"]
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "Espejo oscuro",
        "",
        15,
        90,
        [],
        []
    )
);
shajadMeseguis.addDon(
    new DonElan(
        "Comunión con los caídos",
        "",
        10,
        100,
        [],
        ["La voz de los muertos"]
    )
);

berylShajad_set.push(shajadMeseguis);