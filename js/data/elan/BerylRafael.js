var BERYL_RAFAEL = "Rafael";

var berylRafael = new BerylShajad(BERYL_RAFAEL, BERYL);

var ELAN_RAFAEL_CONOCIMIENTO_NATURALEZA = "Conocimiento de la naturaleza";
ventajas_set.push(new Ventaja(
    ELAN_RAFAEL_CONOCIMIENTO_NATURALEZA,
    "",
    "Este don otorga un bonificador especial a Herbolaria equivalente a su nivel de Elan.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [conocimientoNaturalezaElan],
    GRUPO_ELAN
));
berylRafael.addDon(
    new DonElan(
        "Conocimiento de la naturaleza",
        "Este don otorga un bonificador especial a Herbolaria equivalente a su nivel de Elan.",
        5,
        10,
        [ELAN_RAFAEL_CONOCIMIENTO_NATURALEZA],
        []
    )
);
var ELAN_RAFAEL_CONOCIMIENTO_ANIMAL = "Conocimiento animal";
ventajas_set.push(new Ventaja(
    ELAN_RAFAEL_CONOCIMIENTO_ANIMAL,
    "",
    "Este don otorga un bonificador especial a Animales equivalente a su nivel de Elan.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [conocimientoAnimalElan],
    GRUPO_ELAN
));
berylRafael.addDon(
    new DonElan(
        "Conocimiento animal",
        "Este don otorga un bonificador especial a Animales equivalente a su nivel de Elan.",
        5,
        20,
        [ELAN_RAFAEL_CONOCIMIENTO_ANIMAL],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        "Curación",
        "",
        10,
        20,
        [],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        "Manto de fertilidad",
        "",
        5,
        30,
        [],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        "Eliminar venenos naturales",
        "",
        10,
        40,
        [],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        "Tótem",
        "",
        20,
        50,
        [],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        "Curación expandida",
        "",
        15,
        50,
        [],
        ["Curación"]
    )
);
berylRafael.addDon(
    new DonElan(
        "Los ojos de la naturaleza",
        "",
        10,
        60,
        [],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        "Invocar animales",
        "",
        10,
        60,
        [],
        []//TODO especificar animales a elegir
    )
);
berylRafael.addDon(
    new DonElan(
        "Transformación animal",
        "",
        10,
        70,
        [],
        []//TODO especificar animales a elegir
    )
);
berylRafael.addDon(
    new DonElan(
        "Invocación incrementada",
        "",
        10,
        80,
        [],
        ["Invocar animales"] //TODO especificar especie u opción
    )
);
berylRafael.addDon(
    new DonElan(
        "Curación ilimitada",
        "",
        20,
        90,
        [],
        ["Curación expandida"]
    )
);
berylRafael.addDon(
    new DonElan(
        "Conciencia de la naturaleza",
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylRafael);