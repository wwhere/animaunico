var BERYL_GABRIEL = "Gabriel";

var berylGabriel = new BerylShajad(BERYL_GABRIEL, BERYL);

var ELAN_GABRIEL_APTITUD_ARTISTICA = "Guerrero de Azrael";
ventajas_set.push(new Ventaja(
    ELAN_GABRIEL_APTITUD_ARTISTICA,
    "",
    "Este don otorga un bonificador especial a sus habilidades secundarias Arte y Música equivalente a su nivel de Elan.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [aptitudArtisticaGabriel],
    GRUPO_ELAN
));
berylGabriel.addDon(
    new DonElan(
        "Aptitud artística",
        "Este don otorga un bonificador especial a sus habilidades secundarias Arte y Música equivalente a su nivel de Elan.",
        5,
        10,
        [ELAN_GABRIEL_APTITUD_ARTISTICA],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Gracia",
        "",
        5,
        20,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Empatía positiva",
        "",
        10,
        30,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Pacificador",
        "",
        10,
        40,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Inmunidad psicológica (Gabriel)",
        "",
        10,
        40,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Percepción de sentimientos",
        "",
        10,
        50,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Imbuir sentimientos",
        "",
        15,
        50,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Lazo",
        "",
        15,
        60,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Auxilio",
        "",
        10,
        70,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Canto de La Paz",
        "",
        15,
        80,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Protección",
        "",
        20,
        90,
        [],
        []
    )
);
berylGabriel.addDon(
    new DonElan(
        "Paraíso",
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylGabriel);