var SHAJAD_JEDAH = "Jedah";

var shajadJedah = new BerylShajad(SHAJAD_JEDAH, SHAJAD);

var ELAN_JEDAH_DON_POLITICA = "Don de la política";
ventajas_set.push(new Ventaja(
    ELAN_JEDAH_DON_POLITICA,
    "",
    "Este don otorga un bonificador especial a sus habilidades secundarias Persuasión y Liderazgo equivalente a su nivel de Elan.",
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
        "Don de la política",
        "Este don otorga un bonificador especial a sus habilidades secundarias Persuasión y Liderazgo equivalente a su nivel de Elan.",
        5,
        10,
        [ELAN_JEDAH_DON_POLITICA],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        "Dominación incrementada",
        "",
        10,
        20,
        [],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        "Sombra",
        "",
        5,
        30,
        [],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        "Afinidad oscura",
        "",
        5,
        40,
        [],
        []
    )
);
var ELAN_JEDAH_PODER_CONOCIMIENTO = "El poder del conocimiento";
ventajas_set.push(new Ventaja(
    ELAN_JEDAH_PODER_CONOCIMIENTO,
    "",
    "Este don otorga un bonificador especial a todas las habilidades secundarias Intelectuales, equivalente a la mitad de su nivel de Elan.",
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
        "El poder del conocimiento",
        "Este don otorga un bonificador especial a todas las habilidades secundarias Intelectuales, equivalente a la mitad de su nivel de Elan.",
        10,
        50,
        [ELAN_JEDAH_PODER_CONOCIMIENTO],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        "El Dominador (Habla)",
        "",
        10,
        50,
        [],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        "Cadena de mando",
        "",
        10,
        60,
        [],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        "Señor de las sombras",
        "",
        15,
        65,
        [],
        ["Afinidad oscura"]
    )
);
var ELAN_JEDAH_PODER_OSCURO = "Comunión con Uriel";
ventajas_set.push(new Ventaja(
    ELAN_JEDAH_PODER_OSCURO,
    "",
    "Este don otorga un punto adicional en sus características de Poder, Voluntad e Inteligencia.",
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
        "Poder oscuro",
        "Este don otorga un punto adicional en sus características de Poder, Voluntad e Inteligencia.",
        15,
        70,
        [ELAN_JEDAH_PODER_OSCURO],
        []
    )
);
shajadJedah.addDon(
    new DonElan(
        "El Dominador (Vista)",
        "",
        10,
        70,
        [],
        ["El Dominador (Habla)"]
    )
);
shajadJedah.addDon(
    new DonElan(
        "Esencia sobrenatural",
        "",
        15,
        80,
        [],
        []//TODO gnosis 30
    )
);
shajadJedah.addDon(
    new DonElan(
        "El Dominador (Aura)",
        "",
        10,
        90,
        [],
        ["El Dominador (Vista)"]
    )
);
shajadJedah.addDon(
    new DonElan(
        "Maestro de marionetas",
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(shajadJedah);