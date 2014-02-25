
addEfectoTecnica(new EfectoTecnica(
    "Habilidad de ataque",
    "",
    EFECTO_OFENSIVO,
    [
        new NivelEfectoTecnica("+10", 2, 4, 5, 1, 1),
        new NivelEfectoTecnica("+25", 3, 5, 5, 2, 1),
        new NivelEfectoTecnica("+40", 4, 6, 10, 3, 1),
        new NivelEfectoTecnica("+50", 5, 8, 15, 4, 1),
        new NivelEfectoTecnica("+75", 8, 11, 20, 6, 1),
        new NivelEfectoTecnica("+90", 12, 15, 25, 8, 1),
        new NivelEfectoTecnica("+100", 14, 18, 30, 10, 1),
        new NivelEfectoTecnica("+125", 18, 22, 35, 12, 2),
        new NivelEfectoTecnica("+150", 22, 26, 40, 14, 2),
        new NivelEfectoTecnica("+175", 26, 32, 45, 16, 3),
        new NivelEfectoTecnica("+200", 30, 36, 50, 18, 3)
    ],
    DES,
    new ElementosAfines([ELEMENTO_AIRE, ELEMENTO_FUEGO, ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(FUE, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    "Habilidad de contraataque",
    "",
    EFECTO_OFENSIVO,
    [
        new NivelEfectoTecnica("+10", 1, 2, 5, 1, 1),
        new NivelEfectoTecnica("+25", 2, 4, 5, 2, 1),
        new NivelEfectoTecnica("+40", 3, 5, 10, 3, 1),
        new NivelEfectoTecnica("+50", 4, 6, 10, 4, 1),
        new NivelEfectoTecnica("+75", 6, 9, 15, 6, 1),
        new NivelEfectoTecnica("+90", 9, 12, 20, 8, 1),
        new NivelEfectoTecnica("+100", 12, 15, 25, 10, 1),
        new NivelEfectoTecnica("+125", 14, 18, 30, 12, 2),
        new NivelEfectoTecnica("+150", 18, 22, 35, 14, 2),
        new NivelEfectoTecnica("+175", 22, 26, 40, 16, 3),
        new NivelEfectoTecnica("+200", 26, 32, 45, 18, 3)
    ],
    DES,
    new ElementosAfines([ELEMENTO_AIRE, ELEMENTO_AGUA, ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(FUE, 2)
    ]
));