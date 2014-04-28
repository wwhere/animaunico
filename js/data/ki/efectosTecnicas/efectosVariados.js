addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_CAPAZ_DAÑAR_ENERGIA,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ATAQUE_CAPAZ_DAÑAR_ENERGIA,1,2,5,1,2,4,1)
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
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ELEMENTAL_FUEGO,2,4,5,1,2,4,1)
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
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ELEMENTAL_AIRE,2,4,5,1,2,4,1)
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
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ELEMENTAL_AGUA,2,4,5,1,2,4,1)
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
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ELEMENTAL_TIERRA,2,4,5,1,2,4,1)
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
    KI_EFECTO_ARMAS_FISICAS_KI,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica("+0",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("+5",4,6,5,1,2,4,1),
        new NivelEfectoTecnica("+10",6,9,10,2,4,7,1),
        new NivelEfectoTecnica("+15",8,11,15,3,6,11,2),
        new NivelEfectoTecnica("+20",10,13,20,4,8,-1,3)
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
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PROYECTILES,2,10,1,2,4,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ARMAS_FISICAS_ARMAS_ADICIONALES,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_1_ARMA_ADICIONAL,1,5,1,2,4,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_2_A_3_ARMAS_ADICIONALES,2,10,2,4,7,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_4_A_10_ARMAS_ADICIONALES,4,15,3,6,11,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ILIMITADAS,6,20,4,8,14,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_SOBRENATURAL,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ENERGIA,5,8,10,1,2,4,1)
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
    KI_EFECTO_ABSORCION_DE_KI,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_HASTA_5,1,2,5,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_HASTA_10,2,4,10,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_HASTA_15,4,6,15,3,6,11,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_HASTA_20,6,9,20,4,8,14,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_HASTA_25,8,11,25,6,12,21,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_SIN_LIMITE,10,13,30,8,16,-1,3)
    ],
    POD,
    new ElementosAfines([ELEMENTO_AGUA,ELEMENTO_AIRE,ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 3),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(DES, 4)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_APRESAMIENTO,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica("4",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("6",3,5,10,2,4,7,1),
        new NivelEfectoTecnica("8",4,6,10,3,6,11,1),
        new NivelEfectoTecnica("10",5,8,15,4,8,14,1),
        new NivelEfectoTecnica("12",6,9,20,5,10,18,1),
        new NivelEfectoTecnica("14",8,11,25,6,12,21,2),
        new NivelEfectoTecnica("16",10,13,30,7,14,25,2),
        new NivelEfectoTecnica("18",14,18,35,8,16,-1,3),
        new NivelEfectoTecnica("20",18,22,40,10,20,-1,3)
    ],
    FUE,
    new ElementosAfines([ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(DES, 1),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(POD, 2)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_APRESAMIENTO_PRESA_EXISTENCIAL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PRESA_EXISTENCIAL,1,5,1,2,4,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_CHOQUE_FISICO,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_CHOQUE,1,2,5,1,2,4,1)
    ],
    POD,
    new ElementosAfines([ELEMENTO_TIERRA,ELEMENTO_AGUA,ELEMENTO_LUZ]),
    [
        new CaracSecunTecnica(DES, 3),
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 1),
        new CaracSecunTecnica(FUE, 1)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_APRESAMIENTO_PRESA_EXISTENCIAL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PRESA_EXISTENCIAL,1,5,1,2,4,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ACUMULACION,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica("100",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("200",3,5,5,1,2,4,1),
        new NivelEfectoTecnica("300",4,6,10,2,4,7,1),
        new NivelEfectoTecnica("400",5,8,15,3,6,11,1),
        new NivelEfectoTecnica("600",8,11,20,4,8,14,1),
        new NivelEfectoTecnica("800",12,15,25,5,10,18,1),
        new NivelEfectoTecnica("1.000",14,18,30,8,16,28,2),
        new NivelEfectoTecnica("1.200",18,22,35,10,20,35,2),
        new NivelEfectoTecnica("1.400",22,26,40,12,24,-1,3)
    ],
    CON,
    new ElementosAfines([ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(POD, 3),
        new CaracSecunTecnica(DES, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ACUMULACION_REGENERACION,
            "",
            [
                new NivelVentajaTecnica("100",1,5,1,2,4,1),
                new NivelVentajaTecnica("250",2,10,2,4,7,1),
                new NivelVentajaTecnica("500",4,15,3,6,11,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ESPEJISMO,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica("1",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("2",2,4,5,2,4,7,1),
        new NivelEfectoTecnica("4",4,6,10,3,6,11,1),
        new NivelEfectoTecnica("6",6,9,10,4,8,14,1),
        new NivelEfectoTecnica("10",8,11,15,6,12,21,2),
        new NivelEfectoTecnica("15",10,13,20,8,16,28,2),
        new NivelEfectoTecnica("20",12,15,25,10,20,35,2),
        new NivelEfectoTecnica("25",14,18,30,12,24,-1,3)
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
                new NivelVentajaTecnica(DIF_MED,1,5,1,2,4,1),
                new NivelVentajaTecnica(DIF_DIF,2,10,1,2,4,1),
                new NivelVentajaTecnica(DIF_MDF,3,10,2,4,7,1),
                new NivelVentajaTecnica(DIF_ABS,4,15,2,4,7,1),
                new NivelVentajaTecnica(DIF_CIM,5,15,3,6,11,1),
                new NivelVentajaTecnica(DIF_IMP,6,20,3,6,11,2),
                new NivelVentajaTecnica(DIF_INH,7,20,4,8,14,2),
                new NivelVentajaTecnica(DIF_ZEN,8,30,4,8,-1,3)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESPEJISMO_MODIFICACION_ASPECTO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_MODIFICACION_ASPECTO,2,10,2,4,7,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESPEJISMO_ILUSIONES_FANTASMALES,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_RP_140,3,10,2,4,7,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_RP_180,4,15,3,6,11,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_RP_240,6,20,4,8,14,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ESCUDO_ENERGIA,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica("100",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("200",3,5,5,1,2,4,1),
        new NivelEfectoTecnica("300",4,6,10,2,4,7,1),
        new NivelEfectoTecnica("400",5,8,15,3,6,11,1),
        new NivelEfectoTecnica("500",8,11,20,4,8,14,1),
        new NivelEfectoTecnica("800",12,15,25,5,10,18,2),
        new NivelEfectoTecnica("1.000",14,18,30,8,16,28,2),
        new NivelEfectoTecnica("1.250",18,22,35,10,20,35,2),
        new NivelEfectoTecnica("1.500",22,26,40,12,24,-1,3),
        new NivelEfectoTecnica("2.000",26,32,45,14,28,-1,3)
    ],
    POD,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AGUA]),
    [
        new CaracSecunTecnica(AGI, 3),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(FUE, 2),
        new CaracSecunTecnica(DES, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESCUDO_ENERGIA_REGENERACION,
            "",
            [
                new NivelVentajaTecnica("100",1,5,1,2,4,1),
                new NivelVentajaTecnica("250",2,10,2,4,7,1),
                new NivelVentajaTecnica("500",4,15,3,6,11,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ESTADOS,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica("40",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("60",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("80",3,5,10,2,4,7,1),
        new NivelEfectoTecnica("100",5,8,15,3,6,11,1),
        new NivelEfectoTecnica("120",6,9,20,4,8,14,1),
        new NivelEfectoTecnica("140",8,11,20,5,10,18,2),
        new NivelEfectoTecnica("160",14,18,35,6,12,21,2),
        new NivelEfectoTecnica("180",20,24,50,8,16,-1,3),
        new NivelEfectoTecnica("200",28,32,80,10,20,-1,3)
    ],
    POD,
    new ElementosAfines([ELEMENTO_OSCURIDAD,ELEMENTO_LUZ]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(FUE, 4),
        new CaracSecunTecnica(DES, 4),
        new CaracSecunTecnica(CON, 4)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_CEGUERA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CEGUERA,6,15,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_COMA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_COMA,14,40,0,0,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_CONTROL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CONTROL,14,40,0,0,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DAÑO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_DAÑO,1,5,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DOBLE_DAÑO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_DOBLE_DAÑO,5,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DOLOR,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_DOLOR,3,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DOLOR_EXTREMO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_DOLOR_EXTREMO,6,15,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DRENAJE_VIDA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_DRENAJE_DE_VIDA,8,15,0,0,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DRENAJE_KI,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_DRENAJE_DE_KI,8,20,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_FASCINACION,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_FASCINACION,6,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_ILUSION,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ILUSION,7,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_ILUSION_FANTASMAL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ILUSION_FANTASMAL,11,20,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_ILUSION_MAYOR,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ILUSION_MAYOR,9,15,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_INCONSCIENCIA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_INCONSCIENCIA,12,35,0,0,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_MIEDO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_MIEDO,3,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_MUERTE,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_MUERTE,20,50,0,0,-1,3)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_PARALISIS_PARCIAL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PARALIZACION_PARCIAL,6,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_PARALISIS_TOTAL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PARALIZACION_TOTAL,12,20,0,0,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_PENALIZADOR_ACCION_MAYOR,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PENALIZADOR_ACCION_MAYOR,1,5,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_PENALIZADOR_ACCION_MENOR,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PENALIZADOR_ACCION_MENOR,1,5,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCCION_DE_CARACTERISTICAS,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_DE_CARACTERISTICAS,4,5,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_AGI,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCIR_AGI,2,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_CON,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCIR_CON,2,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_DES,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCIR_DES,2,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_FUE,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCIR_FUE,2,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_INT,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCIR_INT,2,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_PER,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCIR_PER,2,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_POD,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCIR_POD,2,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_VOL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCIR_VOL,2,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_RF,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_RF,2,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_RP,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_RP,2,10,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_TERROR,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_TERROR,6,15,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_CONDICION_PREDETERMINADA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_BESO,1,10,0,0,0,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CONTACTO_FISICO,2,5,0,0,0,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CONTACTO_VISUAL_MUTUO,8,15,0,0,0,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CONTACTO_VISUAL_UN_BLANCO,12,30,0,0,0,2),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CONTACTO_VISUAL_VARIOS_BLANCOS,16,40,0,0,-1,3),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_POR_EL_AIRE,20,50,0,0,-1,3),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_POR_SONIDO_UN_BLANCO,13,35,0,0,0,2),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_POR_SONIDO_VARIOS_BLANCOS,18,45,0,0,-1,3),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_POR_SUPERFICIE,12,30,0,0,0,2),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_POR_TODA_SUPERFICIE,18,45,0,0,-1,3)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DISTANCIA_DEL_EFECTO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_1_M,1,5,0,0,0,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_5_M,3,5,0,0,0,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_10_M,5,10,0,0,0,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_25_M,8,10,0,0,0,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_50_M,12,15,0,0,0,2),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_100_M,15,20,0,0,0,2),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_150_M,20,25,0,0,-1,3),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_500_M,25,30,0,0,-1,3)
            ]
        )

    ],
    [COSTE_VENTAJAS_AUMENTA_DOS]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_IMPACTO,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica("4",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("6",2,4,5,2,4,7,1),
        new NivelEfectoTecnica("8",3,5,10,3,6,11,1),
        new NivelEfectoTecnica("10",4,6,10,4,8,14,1),
        new NivelEfectoTecnica("12",5,8,15,5,10,18,1),
        new NivelEfectoTecnica("14",6,9,20,6,12,21,2),
        new NivelEfectoTecnica("16",8,11,25,7,14,25,2),
        new NivelEfectoTecnica("18",10,13,30,8,16,-1,3),
        new NivelEfectoTecnica("20",12,15,35,10,20,-1,3)
    ],
    FUE,
    new ElementosAfines([ELEMENTO_TIERRA,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(DES, 3),
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(POD, 1)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_IMPACTO_ATRAER,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ATRAER,1,5,1,2,4,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_INTERRUPCION,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_DAÑO,1,2,5,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_DAÑO_MAS_20,2,4,10,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_DAÑO_MAS_40,4,6,15,3,6,11,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_DAÑO_MAS_60,6,9,20,4,8,14,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_DAÑO_MAS_80,8,11,25,6,12,21,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_DAÑO_MAS_100,12,15,30,8,16,28,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_DAÑO_MAS_120,12,20,35,10,20,-1,3)
    ],
    VOL,
    new ElementosAfines([ELEMENTO_AGUA,ELEMENTO_AIRE,ELEMENTO_LUZ]),
    [
        new CaracSecunTecnica(DES, 3),
        new CaracSecunTecnica(FUE, 2),
        new CaracSecunTecnica(CON, 3),
        new CaracSecunTecnica(POD, 1)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_INTERRUPCION_TIPO_DE_INTERRUPCION,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_KI,2,5,1,2,4,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_MAGIA,2,5,1,2,4,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_HABILIDADES_PSIQUICAS,2,5,1,2,4,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_INTANGIBILIDAD,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_INTANGIBILIDAD,3,5,10,2,4,7,1)
    ],
    POD,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_OSCURIDAD,ELEMENTO_AGUA]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 3),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(DES, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_INTANGIBILIDAD_AFECTAR_A_OTROS,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PRESENCIA_SIMPLE,1,5,1,2,4,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PRESENCIA_EXTENDIDA,3,10,2,4,7,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_INTANGIBILIDAD_FUSION,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_FUSION,2,10,2,4,7,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_MARCA,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_MARCA_MENOR,4,6,10,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_MARCA_MAYOR,10,13,25,4,8,14,2)
    ],
    POD,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_OSCURIDAD,ELEMENTO_AIRE]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2),
        new CaracSecunTecnica(FUE, 3),
        new CaracSecunTecnica(DES, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_MARCA_PERMANENCIA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PROLONGADA,4,10,0,0,0,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ETERNA,10,30,2,4,7,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_POTENCIAR_CRITICO,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica("+10",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("+25",3,5,5,2,4,7,1),
        new NivelEfectoTecnica("+40",4,6,10,3,6,11,1),
        new NivelEfectoTecnica("+50",5,8,15,4,8,14,1),
        new NivelEfectoTecnica("+75",8,11,20,6,12,21,1),
        new NivelEfectoTecnica("+90",12,15,25,8,16,28,1),
        new NivelEfectoTecnica("+100",14,18,30,10,20,35,1),
        new NivelEfectoTecnica("+125",18,22,35,12,24,42,2),
        new NivelEfectoTecnica("+150",22,26,40,14,28,49,2),
        new NivelEfectoTecnica("+175",26,32,45,16,32,-1,3),
        new NivelEfectoTecnica("+200",30,36,50,18,36,-1,3)
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
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CRITICO_AUTOMATICO,8,30,4,8,14,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_POTENCIAR_CRITICO_REAL,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica("+10",3,5,10,2,4,7,1),
        new NivelEfectoTecnica("+25",5,8,20,4,8,14,1),
        new NivelEfectoTecnica("+40",7,9,25,6,12,21,1),
        new NivelEfectoTecnica("+50",9,12,35,8,16,28,2),
        new NivelEfectoTecnica("+75",12,15,50,10,20,35,2),
        new NivelEfectoTecnica("+90",16,20,60,12,24,-1,3),
        new NivelEfectoTecnica("+100",18,22,65,14,28,-1,3)
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
            KI_EFECTO_VENTAJA_POTENCIAR_CRITICO_REAL_CRITICO_AUTOMATICO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CRITICO_AUTOMATICO,8,30,4,8,14,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_REFLECTAR_ATAQUE,
    "",
    EFECTO_VARIADO,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_REFLECTAR,12,15,30,8,16,28,2)
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
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ELECCION_BLANCO,2,10,2,4,7,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_REFLECTAR_ATAQUE_HAB_ESOTERICAS,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_HABILIDADES_ESOTERICAS,4,20,1,2,4,1)
            ]
        )
    ]
));