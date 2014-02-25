var BERYL_AZRAEL = "Azrael";

var berylAzrael = new BerylShajad(BERYL_AZRAEL, BERYL);

var ELAN_AZRAEL_LIDER = "Líder";
ventajas_set.push(new Ventaja(
    ELAN_AZRAEL_LIDER,
    "",
    "Este don otorga un bonificador especial a Liderazgo equivalente a su nivel de Elan.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [liderElan],
    GRUPO_ELAN
));
berylAzrael.addDon(
    new DonElan(
        "Líder",
        "Bono especial a Liderazgo equivalente a su nivel de Elan.",
        5,
        10,
        [ELAN_AZRAEL_LIDER],
        []
    )
);
var ELAN_AZRAEL_VALOR_HEROES = "El valor de los héroes";
ventajas_set.push(new Ventaja(
    ELAN_AZRAEL_VALOR_HEROES,
    "",
    "Bonificador especial a su habilidad secundaria Frialdad equivalente a su nivel de Elan.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [valorHeroesElan],
    GRUPO_ELAN
));
berylAzrael.addDon(
    new DonElan(
        "El valor de los héroes",
        "Bono especial a su habilidad secundaria Frialdad equivalente a su nivel de Elan.",
        5,
        20,
        [ELAN_AZRAEL_VALOR_HEROES],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        "Exaltación del espíritu",
        "",
        10,
        30,
        [],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        "Sentido de la justicia",
        "",
        10,
        40,
        [],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        "Espíritu sagrado",
        "",
        5,
        50,
        [],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        "Aura de poder",
        "",
        10,
        60,
        [],
        ["Espíritu sagrado"]
    )
);
berylAzrael.addDon(
    new DonElan(
        "Inmunidad",
        "",
        15,
        60,
        [],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        "Destructor del mal",
        "",
        15,
        70,
        [],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        "Bendecido",
        "",
        20,
        70,
        [],
        []
    )
);
var ELAN_AZRAEL_GUERRERO_AZRAEL = "Guerrero de Azrael";
ventajas_set.push(new Ventaja(
    ELAN_AZRAEL_GUERRERO_AZRAEL,
    "",
    "Este don otorga un punto adicional en sus características de Fuerza y Destreza.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [guerreroAzraelElan],
    GRUPO_ELAN
));
berylAzrael.addDon(
    new DonElan(
        "Guerrero de Azrael",
        "Un punto adicional en sus características de Fuerza y Destreza.",
        10,
        80,
        [ELAN_AZRAEL_GUERRERO_AZRAEL],
        []
    )
);
berylAzrael.addDon(
    new DonElan(
        "Consagrar",
        "",
        15,
        90,
        [],
        ["Aura de poder"]
    )
);
berylAzrael.addDon(
    new DonElan(
        "Yihad",
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylAzrael);