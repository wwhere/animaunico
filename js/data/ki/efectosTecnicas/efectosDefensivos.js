
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_PARADA,
    "",
    EFECTO_DEFENSIVO,
    [
        new NivelEfectoTecnica("+10",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("+25",3,5,5,1,2,4,1),
        new NivelEfectoTecnica("+40",4,6,10,2,4,7,1),
        new NivelEfectoTecnica("+50",5,8,15,3,6,11,1),
        new NivelEfectoTecnica("+75",9,12,20,4,8,14,1),
        new NivelEfectoTecnica("+90",12,15,25,5,10,18,1),
        new NivelEfectoTecnica("+100",14,18,30,8,16,28,1),
        new NivelEfectoTecnica("+125",18,22,35,10,20,35,2),
        new NivelEfectoTecnica("+150",22,26,40,12,24,42,2),
        new NivelEfectoTecnica("+175",26,32,45,14,28,-1,3),
        new NivelEfectoTecnica("+200",30,36,50,16,32,-1,3)
    ],
    DES,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AGUA,ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(FUE, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_PARADA_COMPLETA,
    "",
    EFECTO_DEFENSIVO,
    [
        new NivelEfectoTecnica("+10",4,6,10,2,4,7,1),
        new NivelEfectoTecnica("+25",6,9,15,4,8,14,1),
        new NivelEfectoTecnica("+40",9,12,20,6,12,21,1),
        new NivelEfectoTecnica("+50",12,15,35,9,18,32,2),
        new NivelEfectoTecnica("+75",18,22,50,12,24,42,2),
        new NivelEfectoTecnica("+90",26,32,65,15,30,-1,3),
        new NivelEfectoTecnica("+100",30,36,75,18,36,-1,3)
    ],
    DES,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AGUA,ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(FUE, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_PARADA_LIMITADA,
    "",
    EFECTO_DEFENSIVO,
    [
        new NivelEfectoTecnica("+10",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("+25",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("+40",3,5,10,1,2,4,1),
        new NivelEfectoTecnica("+50",4,6,10,2,4,7,1),
        new NivelEfectoTecnica("+75",6,9,15,3,6,11,1),
        new NivelEfectoTecnica("+90",8,11,20,4,8,14,1),
        new NivelEfectoTecnica("+100",10,13,25,6,12,21,1),
        new NivelEfectoTecnica("+125",12,15,30,8,16,28,2),
        new NivelEfectoTecnica("+150",16,20,35,10,20,35,2),
        new NivelEfectoTecnica("+175",20,24,40,12,24,-1,3),
        new NivelEfectoTecnica("+200",24,29,45,14,28,-1,3)
    ],
    DES,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AGUA,ELEMENTO_TIERRA]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(FUE, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_ESQUIVA,
    "",
    EFECTO_DEFENSIVO,
    [
        new NivelEfectoTecnica("+10",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("+25",3,5,5,1,2,4,1),
        new NivelEfectoTecnica("+40",4,6,10,2,4,7,1),
        new NivelEfectoTecnica("+50",5,8,15,3,6,11,1),
        new NivelEfectoTecnica("+75",9,12,20,4,8,14,1),
        new NivelEfectoTecnica("+90",12,15,25,5,10,18,1),
        new NivelEfectoTecnica("+100",14,18,30,8,16,28,1),
        new NivelEfectoTecnica("+125",18,22,35,10,20,35,2),
        new NivelEfectoTecnica("+150",22,26,40,12,24,42,2),
        new NivelEfectoTecnica("+175",26,32,45,14,28,-1,3),
        new NivelEfectoTecnica("+200",30,36,50,16,32,-1,3)
    ],
    AGI,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AIRE,ELEMENTO_AGUA]),
    [
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(CON, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_ESQUIVA_COMPLETA,
    "",
    EFECTO_DEFENSIVO,
    [
        new NivelEfectoTecnica("+10",4,6,10,2,4,7,1),
        new NivelEfectoTecnica("+25",6,9,15,4,8,14,1),
        new NivelEfectoTecnica("+40",9,12,20,6,12,21,1),
        new NivelEfectoTecnica("+50",12,15,35,9,18,32,2),
        new NivelEfectoTecnica("+75",18,22,50,12,24,42,2),
        new NivelEfectoTecnica("+90",26,32,65,15,30,-1,3),
        new NivelEfectoTecnica("+100",30,36,75,18,36,-1,3)
    ],
    AGI,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AGUA,ELEMENTO_AIRE]),
    [
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(CON, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_ESQUIVA_LIMITADA,
    "",
    EFECTO_DEFENSIVO,
    [
        new NivelEfectoTecnica("+10",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("+25",2,4,5,1,2,4,1),
        new NivelEfectoTecnica("+40",3,5,10,1,2,4,1),
        new NivelEfectoTecnica("+50",4,6,10,2,4,7,1),
        new NivelEfectoTecnica("+75",6,9,15,3,6,11,1),
        new NivelEfectoTecnica("+90",8,11,20,4,8,14,1),
        new NivelEfectoTecnica("+100",10,13,25,6,12,21,1),
        new NivelEfectoTecnica("+125",12,15,30,8,16,28,2),
        new NivelEfectoTecnica("+150",16,20,35,10,20,35,2),
        new NivelEfectoTecnica("+175",20,24,40,12,24,-1,3),
        new NivelEfectoTecnica("+200",24,29,45,14,28,-1,3)
    ],
    AGI,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AGUA,ELEMENTO_AIRE]),
    [
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(CON, 2)
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_DEFENSA_PREDETERMINADA,
    "",
    EFECTO_DEFENSIVO,
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
    DES,
    new ElementosAfines([ELEMENTO_LUZ, ELEMENTO_TIERRA, ELEMENTO_AGUA]),
    [
        new CaracSecunTecnica(AGI, 1),
        new CaracSecunTecnica(CON, 3),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(POD, 2)
    ]
));
