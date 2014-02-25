addEfectoTecnica(new EfectoTecnica(
    "Incrementar turno",
    "",
    EFECTO_REACCION,
    [
        new NivelEfectoTecnica("+25",1,2,5,1,1),
        new NivelEfectoTecnica("+50",2,4,10,1,1),
        new NivelEfectoTecnica("+75",4,6,15,2,1),
        new NivelEfectoTecnica("+100",6,9,20,3,1),
        new NivelEfectoTecnica("+125",8,11,25,4, 2),
        new NivelEfectoTecnica("+150",10,13,30,5, 2),
        new NivelEfectoTecnica("+175",12,15,35,6, 3),
        new NivelEfectoTecnica("+200",14,18,40,7, 3)
    ],
    AGI,
    new ElementosAfines([ELEMENTO_AIRE]),
    [
        new CaracSecunTecnica(DES, 1),
        new CaracSecunTecnica(POD, 3),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(CON, 2)
    ]
));
