addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_DISTANCIA,
    "",
    EFECTO_ESPACIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_M,1,2,5,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_M,2,4,10,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_20_M,3,5,10,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_50_M,4,6,15,3,6,11,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_M,5,8,20,4,8,14,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_250_M,6,9,25,5,10,18,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_500_M,8,11,30,6,12,21,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_KM,10,13,35,8,16,28,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_KM,14,18,40,10,20,-1,3),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_KM,18,22,45,12,24,-1,3),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_KM,22,26,50,14,28,-1,3)
    ],
    POD,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_AIRE,ELEMENTO_AGUA,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(AGI, 3),
        new CaracSecunTecnica(CON, 4)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ATAQUE_DISTANCIA_PROYECCION,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_VENTAJA_PROYECCION,4,10,1,2,4,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_NIVEL_VENTAJA_ESTELA_DESTRUCCION,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_VENTAJA_ESTELA_DESTRUCCION,8,20,1,2,4,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_DISTANCIA_REAL,
    "",
    EFECTO_ESPACIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_M,2,4,10,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_M,4,6,15,3,6,11,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_20_M,6,9,20,4,8,14,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_50_M,8,11,25,5,10,18,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_M,10,13,35,6,12,21,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_250_M,12,15,45,8,16,28,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_500_M,16,20,55,10,20,35,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_KM,20,24,70,12,24,-1,3)
    ],
    POD,
    CLASE_ATAQUE,
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
    EFECTO_ESPACIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_M,1,2,5,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_M,2,4,10,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_M,3,5,15,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_25_M,4,6,20,3,6,11,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_50_M,6,9,25,4,8,14,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_M,8,11,30,5,10,18,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_500_M,10,13,40,6,12,21,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_KM,12,15,50,8,16,-1,3),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_KM,16,20,60,10,20,-1,3)
    ],
    POD,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_OSCURIDAD,ELEMENTO_LUZ,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(CON, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ATAQUE_AREA_ELECCION_BLANCO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ELECCION_BLANCO,2,10,1,2,4,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_AREA_REAL,
    "",
    EFECTO_ESPACIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_M,2,4,10,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_M,4,6,15,3,6,11,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_M,6,9,20,4,8,14,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_25_M,8,11,30,5,10,18,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_50_M,12,15,45,6,12,21,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_M,16,20,65,8,16,-1,3)
    ],
    POD,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_OSCURIDAD,ELEMENTO_LUZ,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(CON, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ATAQUE_AREA_REAL_ELECCION_BLANCO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_ELECCION_BLANCO,2,10,1,2,4,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_PARADA_AREA,
    "",
    EFECTO_ESPACIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_M,1,2,5,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_M,2,4,5,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_M,3,5,10,3,6,11,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_25_M,4,6,15,4,8,14,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_50_M,5,8,20,5,10,18,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_M,6,9,25,6,12,21,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_500_M,8,11,30,7,14,-1,3),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_KM,10,13,35,8,16,-1,3)
    ],
    POD,
    CLASE_DEFENSA,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AGUA,ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(FUE, 2),
        new CaracSecunTecnica(CON, 2)
    ]
));


addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_TRANSPORTE_AUTOMATICO,
    "",
    EFECTO_ESPACIAL,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_M,2,4,5,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_20_M,3,5,10,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_50_M,4,6,10,3,6,11,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_M,5,8,15,4,8,14,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_250_M,6,9,20,5,10,18,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_500_M,8,11,25,6,12,21,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_1_KM,10,13,30,7,14,25,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_5_KM,14,18,35,8,16,28,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_10_KM,18,22,40,10,20,-1,3),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_100_KM,22,26,50,12,24,-1,3)
    ],
    AGI,
    CLASE_VARIABLE,
    new ElementosAfines([ELEMENTO_AIRE,ELEMENTO_LUZ,ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(FUE, 2),
        new CaracSecunTecnica(POD, 3),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(CON, 2)
    ]
));
