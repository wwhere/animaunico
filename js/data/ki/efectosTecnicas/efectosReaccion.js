addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_INCREMENTAR_TURNO,
    "",
    EFECTO_REACCION,
    [
        new NivelEfectoTecnica("+25",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("+50",2,4,10,1,2,4,1),
        new NivelEfectoTecnica("+75",4,6,15,2,4,7,1),
        new NivelEfectoTecnica("+100",6,9,20,3,6,11,1),
        new NivelEfectoTecnica("+125",8,11,25,4,8,14,2),
        new NivelEfectoTecnica("+150",10,13,30,5,10,18,2),
        new NivelEfectoTecnica("+175",12,15,35,6,12,-1,3),
        new NivelEfectoTecnica("+200",14,18,40,7,14,-1,3)
    ],
    AGI,
    CLASE_VARIABLE,
    new ElementosAfines([ELEMENTO_AIRE]),
    [
        new CaracSecunTecnica(DES, 1),
        new CaracSecunTecnica(POD, 3),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(CON, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_RECUPERAR_ACCION,
    "",
    EFECTO_REACCION,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_RECUPERAR_ACCION,6,9,25,2,4,7,1)
    ],
    VOL,
    CLASE_VARIABLE,
    new ElementosAfines([ELEMENTO_AIRE,ELEMENTO_AGUA,ELEMENTO_LUZ]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(DES, 3),
        new CaracSecunTecnica(CON, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_PREVISION,
    "",
    EFECTO_REACCION,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_A_MITAD,3,5,10,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_COMPLETO,6,9,25,3,6,11,1)
    ],
    POD,
    CLASE_VARIABLE,
    new ElementosAfines([ELEMENTO_AIRE,ELEMENTO_FUEGO,ELEMENTO_LUZ]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(FUE, 1),
        new CaracSecunTecnica(DES, 3),
        new CaracSecunTecnica(CON, 2)
    ]
));
