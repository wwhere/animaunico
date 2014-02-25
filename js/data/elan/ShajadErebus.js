var SHAJAD_EREBUS = "Erebus";

var shajadErebus = new BerylShajad(SHAJAD_EREBUS, SHAJAD);

var ELAN_EREBUS_CONOCIMIENTO_SOBRENATURAL = "Conocimiento sobrenatural";
ventajas_set.push(new Ventaja(
    ELAN_EREBUS_CONOCIMIENTO_SOBRENATURAL,
    "",
    "Este don otorga un bonificador especial a Ocultismo equivalente a su nivel de Elan.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [conocimientoSobrenaturalElan],
    GRUPO_ELAN
));
shajadErebus.addDon(
    new DonElan(
        "Conocimiento sobrenatural",
        "Este don otorga un bonificador especial a Ocultismo equivalente a su nivel de Elan.",
        5,
        10,
        [ELAN_EREBUS_CONOCIMIENTO_SOBRENATURAL],
        []
    )
);
var ELAN_EREBUS_PRESENCIA_TENEBROSA = "Presencia tenebrosa";
ventajas_set.push(new Ventaja(
    ELAN_EREBUS_PRESENCIA_TENEBROSA,
    "",
    "Este don otorga un bonificador especial a Intimidar equivalente a su nivel de Elan.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [presenciaTenebrosaElan],
    GRUPO_ELAN
));
shajadErebus.addDon(
    new DonElan(
        "Presencia tenebrosa",
        "Este don otorga un bonificador especial a Intimidar equivalente a su nivel de Elan.",
        5,
        20,
        [ELAN_EREBUS_PRESENCIA_TENEBROSA],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        "El camino de las pesadillas",
        "",
        5,
        30,
        [],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        "Susurros oníricos",
        "",
        10,
        40,
        [],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        "Místico nato",
        "",        15,
        50,
        [],
        []
    )
);
var ELAN_EREBUS_INFLUJO_SOBRENATURAL = "Influjo sobrenatural";
ventajas_set.push(new Ventaja(
    ELAN_EREBUS_INFLUJO_SOBRENATURAL,
    "",
    "Este don otorga dos puntos adicionales a su Voluntad o a su Poder, dependiendo de cuál sea la característica en la que basa principalmente sus habilidades.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [influjoSobrenaturalElan],
    GRUPO_ELAN
));
shajadErebus.addDon(
    new DonElan(
        "Influjo sobrenatural",
        "Este don otorga dos puntos adicionales a su Voluntad o a su Poder, dependiendo de cuál sea la característica en la que basa principalmente sus habilidades.",
        10,
        60,
        [ELAN_EREBUS_INFLUJO_SOBRENATURAL], //TODO elegir caracteristica
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        "Caminante de los sueños",
        "",
        10,
        60,
        [],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        "Los miedos cardinales",
        "",
        20,
        70,
        [],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        "Potenciación sobrenatural",
        "",
        15,
        80,
        [],
        []
    )
);
shajadErebus.addDon(
    new DonElan(
        "Nux, el miedo absoluto",
        "",
        10,
        90,
        ["Los miedos cardinales"],
        []
    )
);
var ELAN_EREBUS_DEMIURGO = "Demiurgo";
ventajas_set.push(new Ventaja(
    ELAN_EREBUS_DEMIURGO,
    "",
    "Este don otorga cinco puntos de características que puede repartir como desee entre su Inteligencia, Poder y Voluntad, según le convenga a sus habilidades.",
    NO_COMPRABLE,   //getRepetible
    new Array(0),      //coste
    [],    //incompatibles
    false,  //anulable
    [ELEGIR_REPARTO_5_INT_POD_VOL],
    [demiurgoElan],
    GRUPO_ELAN
));
shajadErebus.addDon(
    new DonElan(
        "Demiurgo",
        "Este don otorga cinco puntos de características que puede repartir como desee entre su Inteligencia, Poder y Voluntad, según le convenga a sus habilidades.",
        10,
        100,
        [ELAN_EREBUS_DEMIURGO],
        []
    )
);

berylShajad_set.push(shajadErebus);