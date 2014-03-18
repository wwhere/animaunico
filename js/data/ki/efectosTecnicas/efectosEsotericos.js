
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ESTADOS,
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
            KI_EFECTO_VENTAJA_ESTADOS_PENALIZADOR,
            "",
            [
                new NivelVentajaTecnica("Penalizador a la acción",2,5,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_CEGUERA,
            "",
            [
                new NivelVentajaTecnica("Ceguera",5,15,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_RF,
            "",
            [
                new NivelVentajaTecnica("Reducción de RF",2, 10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_AGI,
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_CON,
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_DES,
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_FUE,
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_INT,
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_PER,
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_POD,
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_VOL,
            "",
            [
                new NivelVentajaTecnica("Reducción de características",2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_PARALISIS_PARCIAL,
            "",
            [
                new NivelVentajaTecnica("Paralización parcial",6,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DAÑO,
            "",
            [
                new NivelVentajaTecnica("Daño",5,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_INCONSCIENCIA,
            "",
            [
                new NivelVentajaTecnica("Inconsciencia",8,15,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_COMA,
            "",
            [
                new NivelVentajaTecnica("Coma",10,30,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_PARALISIS_TOTAL,
            "",
            [
                new NivelVentajaTecnica("Paralización total",8,20,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DRENAJE_VIDA,
            "",
            [
                new NivelVentajaTecnica("Drenaje de vida",8,15,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_CONTROL,
            "",
            [
                new NivelVentajaTecnica("Control",10,40,0,3)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_MUERTE,
            "",
            [
                new NivelVentajaTecnica("Muerte",12,50,0,3)
            ]
        )
    ],
    [COSTE_VENTAJAS_AUMENTA_DOS]
));
