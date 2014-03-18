
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_PARADA,
    "",
    EFECTO_DEFENSIVO,
    [
        new NivelEfectoTecnica("+10",2,4,5,1,1),
        new NivelEfectoTecnica("+25",3,5,5,1,1),
        new NivelEfectoTecnica("+40",4,6,10,2,1),
        new NivelEfectoTecnica("+50",5,8,15,3,1),
        new NivelEfectoTecnica("+75",8,11,20,4,1),
        new NivelEfectoTecnica("+90",12,15,25,5,1),
        new NivelEfectoTecnica("+100",14,18,30,8,1),
        new NivelEfectoTecnica("+125",18,22,35,10, 2),
        new NivelEfectoTecnica("+150",22,26,40,12, 2),
        new NivelEfectoTecnica("+175",26,32,45,14, 3),
        new NivelEfectoTecnica("+200",30,36,50,16, 3)
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
        new NivelEfectoTecnica("+10",1,2,5,1,1),
        new NivelEfectoTecnica("+25",2,4,5,1,1),
        new NivelEfectoTecnica("+40",3,5,10,1,1),
        new NivelEfectoTecnica("+50",4,6,10,2,1),
        new NivelEfectoTecnica("+75",6,9,15,3,1),
        new NivelEfectoTecnica("+90",8,11,20,4,1),
        new NivelEfectoTecnica("+100",10,13,25,6,1),
        new NivelEfectoTecnica("+125",12,15,30,8, 2),
        new NivelEfectoTecnica("+150",16,20,35,10, 2),
        new NivelEfectoTecnica("+175",20,24,40,12, 3),
        new NivelEfectoTecnica("+200",24,29,45,14, 3)
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
        new NivelEfectoTecnica("+10",2,4,5,1,1),
        new NivelEfectoTecnica("+25",3,5,5,1,1),
        new NivelEfectoTecnica("+40",4,6,10,2,1),
        new NivelEfectoTecnica("+50",5,8,15,3,1),
        new NivelEfectoTecnica("+75",8,11,20,4,1),
        new NivelEfectoTecnica("+90",12,15,25,5,1),
        new NivelEfectoTecnica("+100",14,18,30,8,1),
        new NivelEfectoTecnica("+125",18,22,35,10, 2),
        new NivelEfectoTecnica("+150",22,26,40,12, 2),
        new NivelEfectoTecnica("+175",26,32,45,14, 3),
        new NivelEfectoTecnica("+200",30,36,50,16, 3)
    ],
    AGI,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AIRE,ELEMENTO_AGUA]),
    [
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(FUE, 2)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_HABILIDAD_ESQUIVA_LIMITADA,
    "",
    EFECTO_DEFENSIVO,
    [
        new NivelEfectoTecnica("+10",1,2,5,1,1),
        new NivelEfectoTecnica("+25",2,4,5,1,1),
        new NivelEfectoTecnica("+40",3,5,10,1,1),
        new NivelEfectoTecnica("+50",4,6,10,2,1),
        new NivelEfectoTecnica("+75",6,9,15,3,1),
        new NivelEfectoTecnica("+90",8,11,20,4,1),
        new NivelEfectoTecnica("+100",10,13,25,6,1),
        new NivelEfectoTecnica("+125",12,15,30,8, 2),
        new NivelEfectoTecnica("+150",16,20,35,10, 2),
        new NivelEfectoTecnica("+175",20,24,40,12, 3),
        new NivelEfectoTecnica("+200",24,29,45,14, 3)
    ],
    AGI,
    new ElementosAfines([ELEMENTO_LUZ,ELEMENTO_AIRE,ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(DES, 2),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(CON, 2)
    ]
));

