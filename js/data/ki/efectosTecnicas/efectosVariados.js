addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_CAPAZ_DAÑAR_ENERGIA,
    "",
    EFECTO_ESPECIAL,
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
    EFECTO_ESPECIAL,
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
    EFECTO_ESPECIAL,
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
    EFECTO_ESPECIAL,
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
    EFECTO_ESPECIAL,
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
    EFECTO_ESPECIAL,
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
    EFECTO_ESPECIAL,
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