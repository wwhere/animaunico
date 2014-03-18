
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_MULTIPLICADOR_DAÑO,
    "",
    EFECTO_DESTRUCTIVO,
    [
        new NivelEfectoTecnica("x2",10,15,25,4,1),
        new NivelEfectoTecnica("x3",15,20,40,8, 2),
        new NivelEfectoTecnica("x4",20,30,80,12, 3)
    ],
    FUE,
    [ELEMENTO_FUEGO,ELEMENTO_TIERRA],
    [
        new CaracSecunTecnica(DES, 3),
        new CaracSecunTecnica(POD, 1),
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 2)
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_AUMENTO_DAÑO,
    "",
    EFECTO_DESTRUCTIVO,
    [
        new NivelEfectoTecnica("+10",1,2,5,1,1),
        new NivelEfectoTecnica("+25",2,4,5,1,1),
        new NivelEfectoTecnica("+40",3,5,10,1,1),
        new NivelEfectoTecnica("+50",4,6,15,2,1),
        new NivelEfectoTecnica("+75",6,9,20,3,1),
        new NivelEfectoTecnica("+90",8,11,25,4,1),
        new NivelEfectoTecnica("+100",10,13,30,5,1),
        new NivelEfectoTecnica("+125",14,18,35,6, 2),
        new NivelEfectoTecnica("+150",16,20,40,8, 2),
        new NivelEfectoTecnica("+175",18,22,45,10, 3),
        new NivelEfectoTecnica("+200",20,24,50,12, 3)
    ],
    FUE,
    [ELEMENTO_FUEGO,ELEMENTO_TIERRA],
    [
        new CaracSecunTecnica(DES, 3),
        new CaracSecunTecnica(POD, 2),
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(CON, 1)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_AUMENTO_DAÑO_SACRIFICIO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_SACRIFICIO_VITAL,4,15,3,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_SACRIFICIO_VITAL_DOBLE,10,50,4,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_SACRIFICIO_SALUD,2,10,2,1),
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_SACRIFICIO_CARACTERISTICAS,2,10,2,1)
            ]
        )
    ]
));
