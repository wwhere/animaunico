var SHAJAD_ZEMIAL = "Zemial";

var shajadZemial = new BerylShajad(SHAJAD_ZEMIAL, SHAJAD);

shajadZemial.addDon(
    new DonElan(
        "Asalto espiritual",
        "",
        5,
        10,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        "Ansia demencial",
        "",
        5,
        20,
        [],
        []
    )
);
var ELAN_ZEMIAL_DAÑO_INCREMENTADO = "Daño incrementado";
ventajas_set.push(new Ventaja(
    ELAN_ZEMIAL_DAÑO_INCREMENTADO,
    "",
    "Este don otorga un bonificador especial a daño base de cualquiera de sus ataques en una cantidad equivalente a la mitad de su nivel de Elan.",
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
        "Daño incrementado",
        "Este don otorga un bonificador especial a daño base de cualquiera de sus ataques en una cantidad equivalente a la mitad de su nivel de Elan.",
        10,
        30,
        [ELAN_ZEMIAL_DAÑO_INCREMENTADO],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        "Daño anímico",
        "",
        10,
        40,
        [],
        ["Asalto espiritual"]
    )
);
shajadZemial.addDon(
    new DonElan(
        "Destructor",
        "",
        15,
        50,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        "Señor de la destrucción (Tacto)",
        "",
        10,
        50,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        "Presencia exterminadora",
        "",
        10,
        60,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        "Señor de la destrucción (Vista)",
        "",
        10,
        60,
        [],
        ["Señor de la destrucción (Tacto)"]
    )
);
shajadZemial.addDon(
    new DonElan(
        "Señor de la destrucción (Aura)",
        "",
        10,
        70,
        [],
        ["Señor de la destrucción (Vista)"]
    )
);
shajadZemial.addDon(
    new DonElan(
        "Asalto destructor",
        "",
        15,
        80,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        "La sangre de la locura",
        "",
        20,
        90,
        [],
        []
    )
);
shajadZemial.addDon(
    new DonElan(
        "Portador de catástrofes",
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(shajadZemial);