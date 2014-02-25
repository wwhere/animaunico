var BERYL_MIKAEL = "Mikael";

var berylMikael = new BerylShajad(BERYL_MIKAEL, BERYL);

berylMikael.addDon(
    new DonElan(
        "Luz de esperanza",
        "",
        5,
        10,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        "Extirpar enfermedades",
        "",
        10,
        20,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        "Mantener en el mundo",
        "",
        5,
        30,
        [],
        []
    )
);
var ELAN_MIKAEL_RESISTENCIA_CELESTIAL = "Resistencia celestial";
ventajas_set.push(new Ventaja(
    ELAN_MIKAEL_RESISTENCIA_CELESTIAL,
    "",
    "Este don otorga un bonificador especial a todas las Resistencias del personaje, equivalente a la mitad de su Elan.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [resistenciaCelestialElan],
    GRUPO_ELAN
));
berylMikael.addDon(
    new DonElan(
        "Resistencia celestial",
        "Este don otorga un bonificador especial a todas las Resistencias del personaje, equivalente a la mitad de su Elan.",
        20,
        40,
        [ELAN_MIKAEL_RESISTENCIA_CELESTIAL],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        "Exorcizar el mal",
        "",
        15,
        50,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        "Aura",
        "",
        10,
        50,
        [],
        ["Resistencia celestial"]
    )
);
berylMikael.addDon(
    new DonElan(
        "Milagro",
        "",
        10,
        60,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        "Deshacer estados negativos",
        "",
        10,
        70,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        "Salvador",
        "",
        10,
        70,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        "Ayuda celestial",
        "",
        15,
        80,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        "Levántate y anda",
        "",
        20,
        90,
        [],
        []
    )
);
berylMikael.addDon(
    new DonElan(
        "Y al tercer día resucitó",
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylMikael);