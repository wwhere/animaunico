addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_AUMENTAR_ROTURA,
    "",
    EFECTO_ENTEREZA,
    [
        new NivelEfectoTecnica("+5",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("+10",2,4,10,1,2,4,1),
        new NivelEfectoTecnica("+15",4,6,15,2,4,7,1),
        new NivelEfectoTecnica("+20",6,9,20,3,6,11,1),
        new NivelEfectoTecnica("+25",8,11,25,4,8,14,2),
        new NivelEfectoTecnica("+30",12,15,30,5,10,18,2),
        new NivelEfectoTecnica("+35",14,18,35,6,12,21,2),
        new NivelEfectoTecnica("+40",18,22,40,8,16,-1,3)
    ],
    FUE,
    CLASE_ATAQUE,
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
    EFECTO_ENTEREZA,
    [
        new NivelEfectoTecnica("+10",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("+15",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("+20",3,5,10,2,4,7,1),
        new NivelEfectoTecnica("+25",4,6,10,2,4,7,1),
        new NivelEfectoTecnica("+30",5,8,15,3,6,11,2),
        new NivelEfectoTecnica("+35",6,9,20,3,6,11,2),
        new NivelEfectoTecnica("+40",7,10,25,4,8,-1,3)
    ],
    CON,
    CLASE_DEFENSA,
    new ElementosAfines([ELEMENTO_TIERRA,ELEMENTO_FUEGO,ELEMENTO_LUZ]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(DES, 4),
        new CaracSecunTecnica(FUE, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_DESTRUIR_ARMADURA,
    "",
    EFECTO_ENTEREZA,
    [
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_1,1,2,5,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_2,2,4,5,1,2,4,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_3,3,5,10,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_4,4,6,10,2,4,7,1),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_5,5,8,15,3,6,11,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_6,6,9,20,3,6,11,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_7,8,11,25,4,8,14,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_TA_8,10,13,30,5,10,-1,3),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_SIN_ARMADURA,12,15,40,6,12,-1,3)
    ],
    FUE,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_OSCURIDAD,ELEMENTO_FUEGO]),
    [
        new CaracSecunTecnica(POD, 1),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(CON, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ARMADURA,
    "",
    EFECTO_ENTEREZA,
    [
        new NivelEfectoTecnica("1",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("2",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("3",4,6,10,2,4,7,1),
        new NivelEfectoTecnica("4",6,9,15,2,4,7,1),
        new NivelEfectoTecnica("5",8,11,20,3,6,11,2),
        new NivelEfectoTecnica("6",10,13,25,3,6,11,2),
        new NivelEfectoTecnica("7",12,15,30,4,8,-1,2),
        new NivelEfectoTecnica("8",14,18,40,5,10,-1,3)
    ],
    CON,
    CLASE_DEFENSA,
    new ElementosAfines([ELEMENTO_TIERRA,ELEMENTO_AGUA,ELEMENTO_LUZ]),
    [
        new CaracSecunTecnica(POD, 1),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(FUE, 2),
        new CaracSecunTecnica(AGI, 3)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ARMADURA_INMODIFICABLE,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_VENTAJA_INMODIFICABLE,4,15,2,4,7,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ARMADURA_ARMADURA_FISICA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_VENTAJA_ARMADURA_FISICA,-1,-5,0,0,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ARMADURA_LENTITUD,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_VENTAJA_LENTITUD,-1,-10,0,0,0,1)
            ]
        )

    ]
));
