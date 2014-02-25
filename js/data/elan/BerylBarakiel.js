var BERYL_BARAKIEL = "Barakiel";

var berylBarakiel = new BerylShajad(BERYL_BARAKIEL, BERYL);

var ELAN_BARAKIEL_ESTETICA = "Estética";
ventajas_set.push(new Ventaja(
    ELAN_BARAKIEL_ESTETICA,
    "",
    "Este don otorga un bonificador especial a Estilo equivalente a su nivel de Elan.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [esteticaElan],
    GRUPO_ELAN
));
berylBarakiel.addDon(
    new DonElan(
        "Estética",
        "Bonificador especial a la habilidad secundaria Estilo, equivalente al nivel de Elan que posee.",
        5,
        10,
        [ELAN_BARAKIEL_ESTETICA],
        []
    )
);
berylBarakiel.addDon(
    new DonElan(
        "Atrayente",
        "",
        10,
        20,
        [],
        []
    )
);
var ELAN_BARAKIEL_SABER_CIENCIA = "Saber de la ciencia";
ventajas_set.push(new Ventaja(
    ELAN_BARAKIEL_SABER_CIENCIA,
    "",
    "Este don otorga un bonificador especial a Ciencia equivalente a su nivel de Elan.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [saberCienciaElan],
    GRUPO_ELAN
));
berylBarakiel.addDon(
    new DonElan(
        "Saber de la ciencia",
        "Bonificador especial a la habilidad secundaria Ciencia equivalente al nivel de Elan.",
        10,
        30,
        [ELAN_BARAKIEL_SABER_CIENCIA],
        []
    )
);
berylBarakiel.addDon(
    new DonElan(
        "Percibir imperfecciones",
        "",
        10,
        40,
        [],
        []
    )
);
berylBarakiel.addDon(
    new DonElan(
        "Sentir el orden",
        "",
        5,
        40,
        [],
        []
    )
);
berylBarakiel.addDon(
    new DonElan(
        "Cuerpo perfecto",
        "",
        15,
        50,
        [],
        ["Belleza perfecta"]
    )
);
var ELAN_BARAKIEL_BELLEZA_PERFECTA = "Belleza perfecta";
ventajas_set.push(new Ventaja(
    ELAN_BARAKIEL_BELLEZA_PERFECTA,
    "",
    "Este don sube la Apariencia a 10.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [bellezaPerfectaElan],
    GRUPO_ELAN
));
berylBarakiel.addDon(
    new DonElan(
        "Belleza perfecta",
        "Su Apariencia llega a 10.",
        5,
        50,
        [ELAN_BARAKIEL_BELLEZA_PERFECTA],
        []
    )
);
berylBarakiel.addDon(
    new DonElan(
        "Aura de orden",
        "",
        10,
        60,
        [],
        []
    )
);
var ELAN_BARAKIEL_ESENCIA_BARAKIEL = "La esencia de Barakiel";
ventajas_set.push(new Ventaja(
    ELAN_BARAKIEL_ESENCIA_BARAKIEL,
    "",
    "Este don permite ignorar desventajas y debilidades.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [esenciaBarakielElan],
    GRUPO_ELAN
));
berylBarakiel.addDon(
    new DonElan(
        "La esencia de Barakiel",
        "Este don permite ignorar desventajas y debilidades.",
        20,
        70,
        [ELAN_BARAKIEL_ESENCIA_BARAKIEL],
        []
    )
);
berylBarakiel.addDon(
    new DonElan(
        "Incapaz de errar",
        "",
        10,
        70,
        [],
        []
    )
);
var ELAN_BARAKIEL_DIVINIDAD_CUERPO_ALMA = "Divinidad en cuerpo y alma";
ventajas_set.push(new Ventaja(
    ELAN_BARAKIEL_DIVINIDAD_CUERPO_ALMA,
    "",
    "Sube características hasta 10 + bono por raza.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [divinidadCuerpoAlmaElan],
    GRUPO_ELAN
));
berylBarakiel.addDon(
    new DonElan(
        "Divinidad en cuerpo y alma",
        "Sube características hasta 10 + bono por raza.", //TODO el bono por raza llega de otro modo
        20,
        80,
        [ELAN_BARAKIEL_DIVINIDAD_CUERPO_ALMA],
        ["Cuerpo perfecto"]
    )
);
berylBarakiel.addDon(
    new DonElan(
        "Inmortalidad",
        "",
        10,
        90,
        [],
        ["Cuerpo perfecto"]
    )
);
berylBarakiel.addDon(
    new DonElan(
        "Perfección absoluta",
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylBarakiel);