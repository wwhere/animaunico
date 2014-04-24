
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
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PENALIZADOR_ACCION,2,5,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_CEGUERA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CEGUERA,5,15,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_RF,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_RF,2, 10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_AGI,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_CARACTERISTICAS,2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_CON,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_CARACTERISTICAS,2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_DES,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_CARACTERISTICAS,2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_FUE,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_CARACTERISTICAS,2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_INT,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_CARACTERISTICAS,2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_PER,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_CARACTERISTICAS,2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_POD,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_CARACTERISTICAS,2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_VOL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_REDUCCION_CARACTERISTICAS,2,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_PARALISIS_PARCIAL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PARALIZACION_PARCIAL,6,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DAÑO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_DAÑO,5,10,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_INCONSCIENCIA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_INCONSCIENCIA,8,15,0,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_COMA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_COMA,10,30,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_PARALISIS_TOTAL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_PARALIZACION_TOTAL,8,20,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_DRENAJE_VIDA,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_DRENAJE_DE_VIDA,8,15,0,2)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_CONTROL,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_CONTROL,10,40,0,3)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ESTADOS_MUERTE,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_NIVEL_MUERTE,12,50,0,3)
            ]
        )
    ],
    [COSTE_VENTAJAS_AUMENTA_DOS]
));
