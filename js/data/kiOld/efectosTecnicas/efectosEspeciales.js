
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_MANIOBRAS_COMBATE,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("-10",1,2,5,1,1),
        new NivelEfectoTecnica("-25",2,4,5,1,1),
        new NivelEfectoTecnica("-50",3,5,10,2,1),
        new NivelEfectoTecnica("-75",4,6,10,2, 2),
        new NivelEfectoTecnica("-100",6,9,15,3, 2),
        new NivelEfectoTecnica("-120",8,11,20,3, 3)
    ],
    DES,
    new ElementosAfines([ELEMENTO_AIRE]),
    [
        new CaracSecunTecnica(AGI, 1),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(CON, 2)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_AUMENTAR_ARMADURA,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("1",1,2,5,1,1),
        new NivelEfectoTecnica("2",2,4,5,1,1),
        new NivelEfectoTecnica("3",4,6,10,2,1),
        new NivelEfectoTecnica("4",6,9,15,2,1),
        new NivelEfectoTecnica("5",8,11,20,3, 2),
        new NivelEfectoTecnica("6",10,13,25,3, 2),
        new NivelEfectoTecnica("7",12,15,30,4, 2),
        new NivelEfectoTecnica("8",14,18,40,5, 3)
    ],
    CON,
    new ElementosAfines([ELEMENTO_TIERRA,ELEMENTO_AGUA,ELEMENTO_LUZ]),
    [
        new CaracSecunTecnica(POD, 1),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(FUE, 2),
        new CaracSecunTecnica(AGI, 3)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_DESTRUIR_ARMADURA,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_1,1,2,5,1,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_2,2,4,5,1,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_3,3,5,10,2,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_4,4,6,10,2,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_5,5,8,15,3, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_6,6,9,20,3, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_7,8,11,25,4, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_8,10,13,30,5, 3)
    ],
    FUE,
    new ElementosAfines([ELEMENTO_OSCURIDAD,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(POD, 1),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(CON, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_AUMENTAR_ROTURA,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("+5",1,2,5,1,1),
        new NivelEfectoTecnica("+10",2,4,10,1,1),
        new NivelEfectoTecnica("+15",4,6,15,2,1),
        new NivelEfectoTecnica("+20",6,9,20,3,1),
        new NivelEfectoTecnica("+25",8,11,25,4, 2),
        new NivelEfectoTecnica("+30",12,15,30,5, 2),
        new NivelEfectoTecnica("+35",14,18,35,6, 2),
        new NivelEfectoTecnica("+40",18,22,40,8, 3)
    ],
    FUE,
    new ElementosAfines([ELEMENTO_TIERRA,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(DES, 4),
        new CaracSecunTecnica(CON, 2)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_AUMENTAR_ENTEREZA,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("+10",1,2,5,1,1),
        new NivelEfectoTecnica("+15",2,4,5,1,1),
        new NivelEfectoTecnica("+20",3,5,10,2,1),
        new NivelEfectoTecnica("+25",4,6,10,2,1),
        new NivelEfectoTecnica("+30",5,8,15,3, 2),
        new NivelEfectoTecnica("+35",6,9,20,3, 2),
        new NivelEfectoTecnica("+40",7,10,25,4, 3)
    ],
    FUE,
    new ElementosAfines([ELEMENTO_TIERRA,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(DES, 4),
        new CaracSecunTecnica(CON, 2)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_DISTANCIA,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_M,1,2,5,1,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_M,2,4,10,1,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_20_M,3,5,10,2,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_50_M,4,6,15,3,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_M,5,8,20,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_250_M,6,9,25,5, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_500_M,8,11,30,6, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_KM,10,13,35,8,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_KM,14,18,40,10, 3),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_KM,18,22,45,12, 3),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_KM,22,26,50,14, 3)
    ],
    POD,
    new ElementosAfines([ELEMENTO_AIRE,ELEMENTO_AGUA,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(AGI, 3),
        new CaracSecunTecnica(CON, 4)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_AREA,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_M,1,2,5,1,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_M,2,4,10,1,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_M,3,5,15,2,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_25_M,4,6,20,3,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_50_M,6,9,25,4, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_M,8,11,30,5, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_500_M,10,13,40,6, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_KM,12,15,50,8, 3),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_KM,16,20,60,10, 3)
    ],
    POD,
    new ElementosAfines([ELEMENTO_OSCURIDAD,ELEMENTO_LUZ,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(AGI, 3),
        new CaracSecunTecnica(CON, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ATAQUE_AREA_ELECCION_BLANCO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ELECCION_BLANCO,2,10,1,1)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_TRANSPORTE_AUTOMATICO,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_M,2,4,5,1,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_20_M,3,5,10,2,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_50_M,4,6,10,3,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_M,5,8,15,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_250_M,6,9,20,5,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_500_M,8,11,25,6, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_KM,10,13,30,7, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_KM,14,18,35,8, 2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_KM,18,22,40,10, 3),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_KM,22,26,50,12, 3)
    ],
    AGI,
    new ElementosAfines([ELEMENTO_AIRE,ELEMENTO_LUZ,ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(FUE, 2),
        new CaracSecunTecnica(POD, 3),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(CON, 2)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_POTENCIAR_CRITICO,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("+10",2,4,5,1,1),
        new NivelEfectoTecnica("+25",3,5,5,2,1),
        new NivelEfectoTecnica("+40",4,6,10,3,1),
        new NivelEfectoTecnica("+50",5,8,15,4,1),
        new NivelEfectoTecnica("+75",8,11,20,6,1),
        new NivelEfectoTecnica("+90",12,15,25,8,1),
        new NivelEfectoTecnica("+100",14,18,30,10,1),
        new NivelEfectoTecnica("+125",18,22,35,12, 2),
        new NivelEfectoTecnica("+150",22,26,40,14, 2),
        new NivelEfectoTecnica("+175",26,32,45,16, 3),
        new NivelEfectoTecnica("+200",30,36,50,18, 3)
    ],
    POD,
    new ElementosAfines([ELEMENTO_FUEGO,ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(FUE, 1),
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(CON, 2)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_POTENCIAR_CRITICO_CRITICO_AUTOMATICO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CRITICO_AUTOMATICO,8,30,4,1)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ARMAS_FISICAS_KI,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("+0",2,4,5,1,1),
        new NivelEfectoTecnica("+5",4,6,5,1,1),
        new NivelEfectoTecnica("+10",6,9,10,2,1),
        new NivelEfectoTecnica("+15",8,11,15,3, 2),
        new NivelEfectoTecnica("+20",10,13,20,4, 3)
    ],
    POD,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_OSCURIDAD,ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 1),
        new CaracSecunTecnica(FUE, 2),
        new CaracSecunTecnica(DES, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ARMAS_FISICAS_PROYECTILES,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PROYECTILES,2,10,1,1)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_APRESAMIENTO,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("4",2,4,5,1,1),
        new NivelEfectoTecnica("6",3,5,10,2,1),
        new NivelEfectoTecnica("8",4,6,10,3,1),
        new NivelEfectoTecnica("10",5,8,15,4,1),
        new NivelEfectoTecnica("12",6,9,20,5,1),
        new NivelEfectoTecnica("14",8,11,25,6, 2),
        new NivelEfectoTecnica("16",10,13,30,7, 2),
        new NivelEfectoTecnica("18",14,18,35,8, 3),
        new NivelEfectoTecnica("20",18,22,40,10, 3)
    ],
    FUE,
    new ElementosAfines([ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(DES, 1),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(POD, 2)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_PROYECCION,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("4",1,2,5,1,1),
        new NivelEfectoTecnica("6",2,4,5,2,1),
        new NivelEfectoTecnica("8",3,5,10,3,1),
        new NivelEfectoTecnica("10",4,6,10,4,1),
        new NivelEfectoTecnica("12",5,8,15,5,1),
        new NivelEfectoTecnica("14",6,9,20,6, 2),
        new NivelEfectoTecnica("16",8,11,25,7, 2),
        new NivelEfectoTecnica("18",10,13,30,8, 3),
        new NivelEfectoTecnica("20",12,15,35,10, 3)
    ],
    FUE,
    new ElementosAfines([ELEMENTO_TIERRA,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(POD, 1),
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(DES, 3)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ESCUDO_ENERGIA,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("100",2,4,5,1,1),
        new NivelEfectoTecnica("200",3,5,5,1,1),
        new NivelEfectoTecnica("300",4,6,10,2,1),
        new NivelEfectoTecnica("400",5,8,15,3,1),
        new NivelEfectoTecnica("500",8,11,20,4,1),
        new NivelEfectoTecnica("800",12,15,25,5, 2),
        new NivelEfectoTecnica("1.000",14,18,30,8, 2),
        new NivelEfectoTecnica("1.250",18,22,35,10, 2),
        new NivelEfectoTecnica("1.500",22,26,40,12, 3),
        new NivelEfectoTecnica("2.000",26,32,45,14, 3)
    ],
    POD,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AGUA]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(FUE, 2),
        new CaracSecunTecnica(DES, 3)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_INTANGIBILIDAD,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_INTANGIBILIDAD,3,5,10,2,1)
    ],
    POD,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_OSCURIDAD,ELEMENTO_AGUA]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 3),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(DES, 3)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ESPEJISMO,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("1",1,2,5,1,1),
        new NivelEfectoTecnica("2",2,4,5,2,1),
        new NivelEfectoTecnica("4",4,6,10,3,1),
        new NivelEfectoTecnica("6",6,9,10,4,1),
        new NivelEfectoTecnica("10",8,11,15,6, 2),
        new NivelEfectoTecnica("15",10,13,20,8, 2),
        new NivelEfectoTecnica("20",12,15,25,10, 2),
        new NivelEfectoTecnica("25",14,18,30,12, 3)
    ],
    VOL,
    new ElementosAfines([ELEMENTO_AGUA,ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(POD, 1),
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(DES, 3),
        new CaracSecunTecnica(CON, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO__VENTAJA_ESPEJISMO_INDETECCION,
            "",
            [
                new NivelVentajaTecnica(DIF_MED,1,5,0,1),
                new NivelVentajaTecnica(DIF_DIF,2,10,0,1),
                new NivelVentajaTecnica(DIF_MDF,3,10,0,1),
                new NivelVentajaTecnica(DIF_ABS,4,15,0,1),
                new NivelVentajaTecnica(DIF_CIM,5,15,0,1),
                new NivelVentajaTecnica(DIF_IMP,6,20,0,2),
                new NivelVentajaTecnica(DIF_INH,7,25,0,2),
                new NivelVentajaTecnica(DIF_ZEN,8,30,0,3)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_REFLECTAR_ATAQUE,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_REFLECTAR,12,15,30,8,2)
    ],
    POD,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_OSCURIDAD,ELEMENTO_AGUA]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(FUE, 2),
        new CaracSecunTecnica(AGI, 3),
        new CaracSecunTecnica(DES, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_REFLECTAR_ATAQUE_ELECCION_BLANCO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ELECCION_BLANCO,2,10,2,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_REFLECTAR_ATAQUE_HAB_ESOTERICAS,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_HABILIDADES_ESOTERICAS,4,20,1,1)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_CAPAZ_DAÑAR_ENERGIA,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ATAQUE_CAPAZ_DAÑAR_ENERGIA,1,2,5,1,1)
    ],
    POD,
    new ElementosAfines([ELEMENTO_FUEGO,ELEMENTO_LUZ,ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(DES, 3)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_ELEMENTAL_FUEGO,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ELEMENTAL_FUEGO,2,4,5,1,1)
    ],
    POD,
    new ElementosAfines([ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(DES, 3)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_ELEMENTAL_AIRE,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ELEMENTAL_AIRE,2,4,5,1,1)
    ],
    POD,
    new ElementosAfines([ELEMENTO_AIRE]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(DES, 3)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_ELEMENTAL_AGUA,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ELEMENTAL_AGUA,2,4,5,1,1)
    ],
    POD,
    new ElementosAfines([ELEMENTO_AGUA]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(DES, 3)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_ELEMENTAL_TIERRA,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ELEMENTAL_TIERRA,2,4,5,1,1)
    ],
    POD,
    new ElementosAfines([ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(DES, 3)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_SOBRENATURAL,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ENERGIA,5,8,10,1,1)
    ],
    POD,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(DES, 3)
    ]

));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ACUMULACION,
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("100",2,4,5,1,1),
        new NivelEfectoTecnica("200",3,5,5,1,1),
        new NivelEfectoTecnica("300",4,6,10,2,1),
        new NivelEfectoTecnica("400",5,8,15,3,1),
        new NivelEfectoTecnica("600",8,11,20,4,1),
        new NivelEfectoTecnica("800",12,15,25,5,1),
        new NivelEfectoTecnica("1.000",14,18,30,8, 2),
        new NivelEfectoTecnica("1.200",18,22,35,10, 2),
        new NivelEfectoTecnica("1.400",22,26,40,12, 3)
    ],
    CON,
    new ElementosAfines([ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(POD, 3),
        new CaracSecunTecnica(DES, 3)
    ]
));
