var SHAJAD_ERIOL = "Eriol";

var shajadEriol = new BerylShajad(SHAJAD_ERIOL, SHAJAD);

shajadEriol.addDon(
    new DonElan(
        "Otorgar fortuna y desgracia",
        "",
        10,
        10,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        "Alterar la Ley de la Casualidad",
        "",
        5,
        20,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        "Sentir el caos",
        "",
        5,
        30,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        "Robar la suerte",
        "",
        10,
        40,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        "Conjurar la providencia",
        "",
        10,
        50,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        "Estigma del caos",
        "",
        15,
        50,
        [],
        [] //TODO comprar poderes de monstruo
    )
);
shajadEriol.addDon(
    new DonElan(
        "Aura de caos",
        "",
        10,
        60,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        "Alterar el destino",
        "",
        15,
        70,
        [],
        ["Conjurar la providencia"]
    )
);
shajadEriol.addDon(
    new DonElan(
        "Forzar la suerte",
        "",
        15,
        80,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        "Truncar el sino",
        "",
        15,
        90,
        [],
        []
    )
);
shajadEriol.addDon(
    new DonElan(
        "Señor del Caos",
        "",
        10,
        100,
        [],
        ["Aura de caos"]
    )
);

berylShajad_set.push(shajadEriol);