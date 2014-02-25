addEfectoTecnica(new EfectoTecnica(
    "Estados",
    "",
    EFECTO_ESOTERICO,
    [
        new NivelEfectoTecnica("40",1,2,5,1,1),
        new NivelEfectoTecnica("60",2,4,5,1,1),
        new NivelEfectoTecnica("80",3,5,10,2,1),
        new NivelEfectoTecnica("100",5,8,15,3,1),
        new NivelEfectoTecnica("120",6,9,20,4,1),
        new NivelEfectoTecnica("140",8,11,20,5, 2),
        new NivelEfectoTecnica("180",10,13,30,6, 2),
        new NivelEfectoTecnica("200",14,18,50,8, 3),
        new NivelEfectoTecnica("240",18,22,80,10, 3)
    ],
    POD,
    new ElementosAfines([ELEMENTO_OSCURIDAD,ELEMENTO_LUZ]),
    [
        new CaracSecunTecnica(VOL, 1),
        new CaracSecunTecnica(FUE, 4),
        new CaracSecunTecnica(DES, 4),
        new CaracSecunTecnica(CON, 4)
    ],
    [
        new VentajaTecnica(
            "Estado añadido: Penalizador a la acción",
            "",
            [
                new NivelVentajaTecnica("Penalizador a la acción",2,5,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Ceguera",
            "",
            [
                new NivelVentajaTecnica("Ceguera",5,15,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Reducción de RF",
            "",
            [
                new NivelVentajaTecnica("Reducción de RF",2, 10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Reducción de características (AGI)",
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Reducción de características (CON)",
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Reducción de características (DES)",
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Reducción de características (FUE)",
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Reducción de características (INT)",
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Reducción de características (PER)",
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Reducción de características (POD)",
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Reducción de características (VOL)",
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Paralización parcial",
            "",
            [
                new NivelVentajaTecnica("Paralización parcial",6,10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Daño",
            "",
            [
                new NivelVentajaTecnica("Daño",5,10,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Inconsciencia",
            "",
            [
                new NivelVentajaTecnica("Inconsciencia",8,15,0,1)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Coma",
            "",
            [
                new NivelVentajaTecnica("Coma",10,30,0,2)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Paralización total",
            "",
            [
                new NivelVentajaTecnica("Paralización total",8,20,0,2)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Drenaje de vida",
            "",
            [
                new NivelVentajaTecnica("Drenaje de vida",8,15,0,2)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Control",
            "",
            [
                new NivelVentajaTecnica("Control",10,40,0,3)
            ]
        ),
        new VentajaTecnica(
            "Estado añadido: Muerte",
            "",
            [
                new NivelVentajaTecnica("Muerte",12,50,0,3)
            ]
        )
    ],
    [COSTE_VENTAJAS_AUMENTA_DOS]
));
