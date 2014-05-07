addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_ATAQUE,
    "",
    EFECTO_OFENSIVO,
    [
        new NivelEfectoTecnica("+10", 2, 4, 5, 1, 2, 4, 1),
        new NivelEfectoTecnica("+25", 3, 5, 5, 2, 4, 7, 1),
        new NivelEfectoTecnica("+40", 4, 6, 10, 3, 6, 11, 1),
        new NivelEfectoTecnica("+50", 5, 8, 15, 4, 8, 14, 1),
        new NivelEfectoTecnica("+75", 9, 12, 20, 6, 12, 21, 1),
        new NivelEfectoTecnica("+90", 12, 15, 25, 8, 16, 28, 1),
        new NivelEfectoTecnica("+100", 14, 18, 30, 10, 20, 35, 1),
        new NivelEfectoTecnica("+125", 18, 22, 35, 12, 24, 42, 2),
        new NivelEfectoTecnica("+150", 22, 26, 40, 14, 28, 49, 2),
        new NivelEfectoTecnica("+175", 26, 32, 45, 16, 32, -1, 3),
        new NivelEfectoTecnica("+200", 30, 36, 50, 18, 36, -1, 3)
    ],
    DES,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_AIRE, ELEMENTO_FUEGO, ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(FUE, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_ATAQUE_COMPLETA,
    "",
    EFECTO_OFENSIVO,
    [
        new NivelEfectoTecnica("+10", 4, 6, 10, 2, 4, 7, 1),
        new NivelEfectoTecnica("+25", 8, 11, 15, 5, 10, 18, 1),
        new NivelEfectoTecnica("+40", 10, 13, 20, 8, 16, 28, 1),
        new NivelEfectoTecnica("+50", 12, 15, 30, 10, 20, 35, 2),
        new NivelEfectoTecnica("+75", 18, 22, 50, 14, 28, 49, 2),
        new NivelEfectoTecnica("+90", 24, 29, 60, 18, 36, -1, 3),
        new NivelEfectoTecnica("+100", 28, 32, 70, 20, 40, -1, 3)
    ],
    DES,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_AIRE, ELEMENTO_FUEGO, ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(FUE, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_PREDETERMINADO,
    "",
    EFECTO_OFENSIVO,
    [
        new NivelEfectoTecnica("80", 2, 4, 5, 1, 2, 4, 1),
        new NivelEfectoTecnica("120", 4, 6, 5, 2, 4, 7, 1),
        new NivelEfectoTecnica("140", 6, 9, 5, 3, 6, 11, 1),
        new NivelEfectoTecnica("180", 8, 11, 10, 4, 8, 14, 1),
        new NivelEfectoTecnica("240", 12, 15, 15, 6, 12, 21, 1),
        new NivelEfectoTecnica("280", 16, 20, 25, 8, 16, 28, 2),
        new NivelEfectoTecnica("320", 20, 24, 35, 10, 20, 35, 2),
        new NivelEfectoTecnica("440", 26, 32, 45, 12, 24, -1, 3)
    ],
    POD,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_LUZ, ELEMENTO_TIERRA, ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(FUE, 3)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_CONTRATAQUE,
    "",
    EFECTO_OFENSIVO,
    [
        new NivelEfectoTecnica("+10", 1, 2, 5, 1, 2, 4, 1),
        new NivelEfectoTecnica("+25", 2, 4, 5, 2, 4, 7, 1),
        new NivelEfectoTecnica("+40", 3, 5, 10, 3, 6, 11, 1),
        new NivelEfectoTecnica("+50", 4, 6, 10, 4, 8, 14, 1),
        new NivelEfectoTecnica("+75", 6, 9, 15, 6, 12, 21, 1),
        new NivelEfectoTecnica("+90", 9, 12, 20, 8, 16, 28, 1),
        new NivelEfectoTecnica("+100", 12, 15, 25, 10, 20, 35, 1),
        new NivelEfectoTecnica("+125", 14, 18, 30, 12, 24, 42, 2),
        new NivelEfectoTecnica("+150", 18, 22, 35, 14, 28, 49, 2),
        new NivelEfectoTecnica("+175", 22, 26, 40, 16, 32, -1, 3),
        new NivelEfectoTecnica("+200", 26, 32, 45, 18, 36, -1, 3)
    ],
    DES,
    CLASE_CONTRAATAQUE,
    new ElementosAfines([ELEMENTO_AIRE, ELEMENTO_AGUA, ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(FUE, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_MANIOBRAS_DE_COMBATE_Y_APUNTAR,
    "",
    EFECTO_OFENSIVO,
    [
        new NivelEfectoTecnica("-10",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("-25",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("-50",3,5,10,2,4,7,1),
        new NivelEfectoTecnica("-75",4,6,10,2,4,7,2),
        new NivelEfectoTecnica("-100",6,9,15,3,6,11,2),
        new NivelEfectoTecnica("-120",8,11,20,3,6,-1,3)
    ],
    DES,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_AIRE]),
    [
        new CaracSecunTecnica(AGI, 1),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(CON, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_MANIOBRAS_DE_COMBATE_Y_APUNTAR_REALES,
    "",
    EFECTO_OFENSIVO,
    [
        new NivelEfectoTecnica("-10",2,4,10,2,4,7,1),
        new NivelEfectoTecnica("-25",4,6,15,3,6,11,1),
        new NivelEfectoTecnica("-50",6,9,20,4,8,14,2)
    ],
    DES,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_AIRE]),
    [
        new CaracSecunTecnica(AGI, 1),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(CON, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_INDIRECTO,
    "",
    EFECTO_OFENSIVO,
    [
        new NivelEfectoTecnica("1",3,5,10,2,4,7,1),
        new NivelEfectoTecnica("2",6,9,20,4,8,14,2),
        new NivelEfectoTecnica("3",9,12,30,6,12,-1,3)
    ],
    POD,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_AIRE,ELEMENTO_AGUA,ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(CON, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_CAMUFLAR_ATAQUE,
    "",
    EFECTO_OFENSIVO,
    [
        new NivelEfectoTecnica("80", 1, 2, 5, 1, 2, 4, 1),
        new NivelEfectoTecnica("120", 2, 4, 5, 1, 2, 4, 1),
        new NivelEfectoTecnica("140", 3, 5, 5, 1, 2, 4, 1),
        new NivelEfectoTecnica("180", 5, 8, 10, 2, 4, 7, 1),
        new NivelEfectoTecnica("240", 6, 9, 10, 3, 6, 11, 1),
        new NivelEfectoTecnica("280", 7, 10, 15, 4, 8, 14, 2),
        new NivelEfectoTecnica("320", 8, 11, 20, 5, 10, 18, 2),
        new NivelEfectoTecnica("440", 10, 13, 25, 6, 12, -1, 3)
    ],
    POD,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_AIRE, ELEMENTO_AGUA, ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(CON, 3),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(DES, 1)
    ]
));