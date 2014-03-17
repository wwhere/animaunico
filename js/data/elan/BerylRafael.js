
var berylRafael = new BerylShajad(BERYL_RAFAEL, BERYL);

ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_RAFAEL_CONOCIMIENTO_NATURALEZA,
    "",
    ELAN_VENTAJA_RAFAEL_CONOCIMIENTO_NATURALEZA_DESC,
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
        ELAN_RAFAEL_DON_CONOCIMIENTO_DE_LA_NATURALEZA,
        ELAN_RAFAEL_DON_CONOCIMIENTO_DE_LA_NATURALEZA_DESC,
        5,
        10,
        [ELAN_VENTAJA_RAFAEL_CONOCIMIENTO_NATURALEZA],
        []
    )
);
ventajas_set.push(new Ventaja(
    ELAN_VENTAJA_RAFAEL_CONOCIMIENTO_ANIMAL,
    "",
    ELAN_VENTAJA_RAFAEL_CONOCIMIENTO_ANIMAL_DESC,
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
        ELAN_RAFAEL_DON_CONOCIMIENTO_ANIMAL,
        ELAN_RAFAEL_DON_CONOCIMIENTO_ANIMAL_DESC,
        5,
        20,
        [ELAN_VENTAJA_RAFAEL_CONOCIMIENTO_ANIMAL],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_CURACION,
        "",
        10,
        20,
        [],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_MANTO_DE_FERTILIDAD,
        "",
        5,
        30,
        [],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_ELIMINAR_VENENOS_NATURALES,
        "",
        10,
        40,
        [],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_TOTEM,
        "",
        20,
        50,
        [],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_CURACION_EXPANDIDA,
        "",
        15,
        50,
        [],
        [ELAN_RAFAEL_DON_CURACION]
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_LOS_OJOS_DE_LA_NATURALEZA,
        "",
        10,
        60,
        [],
        []
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_INVOCAR_ANIMALES,
        "",
        10,
        60,
        [],
        []//TODO especificar animales a elegir
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_TRANSFORMACION_ANIMAL,
        "",
        10,
        70,
        [],
        []//TODO especificar animales a elegir
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_INVOCACION_INCREMENTADA,
        "",
        10,
        80,
        [],
        [ELAN_RAFAEL_DON_INVOCAR_ANIMALES] //TODO especificar especie u opción
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_CURACION_ILIMITADA,
        "",
        20,
        90,
        [],
        [ELAN_RAFAEL_DON_CURACION_EXPANDIDA]
    )
);
berylRafael.addDon(
    new DonElan(
        ELAN_RAFAEL_DON_CONCIENCIA_DE_LA_NATURALEZA,
        "",
        10,
        100,
        [],
        []
    )
);

berylShajad_set.push(berylRafael);