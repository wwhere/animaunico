var BERYL_URIEL = "Uriel";

var berylUriel = new BerylShajad(BERYL_URIEL, BERYL);

berylUriel.addDon(
    new DonElan(
        "Instinto de libertad",
        "",
        5,
        10,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        "Inadvertido",
        "",
        5,
        20,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        "Espíritu indomable",
        "",
        10,
        20,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        "Alma libre",
        "",
        5,
        30,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        "Visionario",
        "",
        10,
        40,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        "Medio de transporte",
        "",
        5,
        40,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        "Romper las cadenas",
        "",
        10,
        50,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        "Ojos del futuro",
        "",
        20,
        60,
        [],
        ["Visionario"]
    )
);
berylUriel.addDon(
    new DonElan(
        "Paso libre",
        "",
        15,
        60,
        [],
        []
    )
);
var ELAN_URIEL_COMUNION_URIEL = "Comunión con Uriel";
ventajas_set.push(new Ventaja(
    ELAN_URIEL_COMUNION_URIEL,
    "",
    "Este don otorga un punto adicional en sus características de Poder, Voluntad y Destreza.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [comunionUrielElan],
    GRUPO_ELAN
));
berylUriel.addDon(
    new DonElan(
        "Comunión con Uriel",
        "Este don otorga un punto adicional en sus características de Poder, Voluntad y Destreza.",
        10,
        70,
        [ELAN_URIEL_COMUNION_URIEL],
        []
    )
);
var ELAN_URIEL_ESENCIA_SOBRENATURAL = "Esencia sobrenatural";
ventajas_set.push(new Ventaja(
    ELAN_URIEL_ESENCIA_SOBRENATURAL,
    "",
    "Este don otorga Gnosis 30.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [esenciaSobrenaturalElan],
    GRUPO_ELAN
));
berylUriel.addDon(
    new DonElan(
        "Esencia sobrenatural",
        "Este don otorga Gnosis 30.",
        10,
        80,
        [ELAN_URIEL_ESENCIA_SOBRENATURAL],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        "Una segunda oportunidad",
        "",
        20,
        90,
        [],
        []
    )
);
berylUriel.addDon(
    new DonElan(
        "El Viajero",
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylUriel);