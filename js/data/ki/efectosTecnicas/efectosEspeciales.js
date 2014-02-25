addEfectoTecnica(new EfectoTecnica(
    "Maniobras de combate y apuntar",
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
    "Aumentar armadura",
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
    "Destruir armadura",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("-1 TA",1,2,5,1,1),
        new NivelEfectoTecnica("-2 TA",2,4,5,1,1),
        new NivelEfectoTecnica("-3 TA",3,5,10,2,1),
        new NivelEfectoTecnica("-4 TA",4,6,10,2,1),
        new NivelEfectoTecnica("-5 TA",5,8,15,3, 2),
        new NivelEfectoTecnica("-6 TA",6,9,20,3, 2),
        new NivelEfectoTecnica("-7 TA",8,11,25,4, 2),
        new NivelEfectoTecnica("-8 TA",10,13,30,5, 3)
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
    "Aumentar rotura",
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
    "Aumentar entereza",
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
    "Ataque a distancia",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("5 metros",1,2,5,1,1),
        new NivelEfectoTecnica("10 metros",2,4,10,1,1),
        new NivelEfectoTecnica("20 metros",3,5,10,2,1),
        new NivelEfectoTecnica("50 metros",4,6,15,3,1),
        new NivelEfectoTecnica("100 metros",5,8,20,4,1),
        new NivelEfectoTecnica("250 metros",6,9,25,5, 2),
        new NivelEfectoTecnica("500 metros",8,11,30,6, 2),
        new NivelEfectoTecnica("1 kilómetro",10,13,35,8,2),
        new NivelEfectoTecnica("5 kilómetros",14,18,40,10, 3),
        new NivelEfectoTecnica("10 kilómetros",18,22,45,12, 3),
        new NivelEfectoTecnica("100 kilómetros",22,26,50,14, 3)
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
    "Ataque con área",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("1 metro",1,2,5,1,1),
        new NivelEfectoTecnica("5 metros",2,4,10,1,1),
        new NivelEfectoTecnica("10 metros",3,5,15,2,1),
        new NivelEfectoTecnica("25 metros",4,6,20,3,1),
        new NivelEfectoTecnica("50 metros",6,9,25,4, 2),
        new NivelEfectoTecnica("100 metros",8,11,30,5, 2),
        new NivelEfectoTecnica("500 metros",10,13,40,6, 2),
        new NivelEfectoTecnica("1 kilómetro",12,15,50,8, 3),
        new NivelEfectoTecnica("5 kilómetros",16,20,60,10, 3)
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
            "Elección de blanco",
            "",
            [
                new NivelVentajaTecnica("Elección de blanco",2,10,1,1)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    "Transporte automático",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("10 metros",2,4,5,1,1),
        new NivelEfectoTecnica("20 metros",3,5,10,2,1),
        new NivelEfectoTecnica("50 metros",4,6,10,3,1),
        new NivelEfectoTecnica("100 metros",5,8,15,4,1),
        new NivelEfectoTecnica("250 metros",6,9,20,5,1),
        new NivelEfectoTecnica("500 metros",8,11,25,6, 2),
        new NivelEfectoTecnica("1 kilómetro",10,13,30,7, 2),
        new NivelEfectoTecnica("5 kilómetros",14,18,35,8, 2),
        new NivelEfectoTecnica("10 kilómetros",18,22,40,10, 3),
        new NivelEfectoTecnica("100 kilómetros",22,26,50,12, 3)
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
    "Potenciar crítico",
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
            "Crítico automático",
            "",
            [
                new NivelVentajaTecnica("Crítico automático",8,30,4,1)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    "Armas físicas de Ki",
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
            "Proyectiles",
            "",
            [
                new NivelVentajaTecnica("Proyectiles",2,10,1,1)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    "Apresamiento",
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
    "Proyección",
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
    "Escudo de energía",
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
    "Intangibilidad",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("Intangibilidad",3,5,10,2,1)
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
    "Espejismo",
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
            "Indetección",
            "",
            [
                new NivelVentajaTecnica("Media",1,5,0,1),
                new NivelVentajaTecnica("Difícil",2,10,0,1),
                new NivelVentajaTecnica("Muy Difícil",3,10,0,1),
                new NivelVentajaTecnica("Absurdo",4,15,0,1),
                new NivelVentajaTecnica("Casi Imposible",5,15,0,1),
                new NivelVentajaTecnica("Imposible",6,20,0,2),
                new NivelVentajaTecnica("Inhumano",7,25,0,2),
                new NivelVentajaTecnica("Zen",8,30,0,3)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    "Reflectar el ataque",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("Reflectar",12,15,30,8,2)
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
            "Elección del blanco",
            "",
            [
                new NivelVentajaTecnica("Elección del blanco",2,10,2,1)
            ]
        ),
        new VentajaTecnica(
            "Reflectar habilidades esotéricas",
            "",
            [
                new NivelVentajaTecnica("Reflectar habilidades esotéricas",4,20,1,1)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    "Ataque capaz de dañar energía",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("Ataque capaz de dañar energía",1,2,5,1,1)
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
    "Ataque elemental (Fuego)",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("Elemental (Fuego)",2,4,5,1,1)
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
    "Ataque elemental (Aire)",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("Elemental (Aire)",2,4,5,1,1)
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
    "Ataque elemental (Agua)",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("Elemental (Agua)",2,4,5,1,1)
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
    "Ataque elemental (Tierra)",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("Elemental (Tierra)",2,4,5,1,1)
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
    "Ataque sobrenatural",
    "",
    EFECTO_ESPECIAL,
    [
        new NivelEfectoTecnica("Energía",5,8,10,1,1)
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
    "Acumulación",
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
