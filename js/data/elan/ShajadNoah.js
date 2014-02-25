var SHAJAD_NOAH = "Noah";

var shajadNoah = new BerylShajad(SHAJAD_NOAH, SHAJAD);

shajadNoah.addDon(
    new DonElan(
        "En las manos apropiadas",
        "",
        5,
        10,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        "Espíritu de superación",
        "",
        10,
        20,
        [],
        []
    )
);
var ELAN_NOAH_RESISTENTE = "Resistente";
ventajas_set.push(new Ventaja(
    ELAN_NOAH_RESISTENTE,
    "",
    "Este don otorga un bonificador especial a su RF equivalente a la mitad del Elan que posee.",
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
        "Resistente",
        "Este don otorga un bonificador especial a su RF equivalente a la mitad del Elan que posee.",
        5,
        20,
        [ELAN_NOAH_RESISTENTE],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        "Inhumano",
        "",
        5,
        30,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        "Ignorar penalizadores",
        "",
        10,
        40,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        "Potencia oscura",
        "",
        15,
        50,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        "Dote",
        "",
        10,
        60,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        "Mejorar ante los retos",
        "",
        15,
        70,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        "Aura de guerra",
        "",
        10,
        70,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        "Avatar oscuro",
        "",
        20,
        80,
        [],
        ["Inhumano"]
    )
);
shajadNoah.addDon(
    new DonElan(
        "La sombra de la guerra",
        "",
        15,
        90,
        [],
        []
    )
);
shajadNoah.addDon(
    new DonElan(
        "El Vencedor",
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(shajadNoah);