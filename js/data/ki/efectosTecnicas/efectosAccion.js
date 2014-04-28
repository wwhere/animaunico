addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_ADICIONAL,
    "",
    EFECTO_ACCION,
    [
        new NivelEfectoTecnica("+1",6,9,20,3,6,11,1),
        new NivelEfectoTecnica("+2",12,15,30,6,12,21,1),
        new NivelEfectoTecnica("+3",18,22,40,9,18,32,1),
        new NivelEfectoTecnica("+4",24,29,50,12,24,42,2),
        new NivelEfectoTecnica("+5",30,36,60,15,30,-1,3)
    ],
    DES,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_AIRE,ELEMENTO_AGUA]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 3),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(CON, 1)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ATAQUE_ADICIONAL_ATAQUE_CONTINUO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_TECNICA_VENTAJA_ATAQUE_CONTINUO,10,30,5,10,18,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_TECNICA_ATAQUE_ADICIONAL_BONO_CANSANCIO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_TECNICA_VENTAJA_CANSANCIO_AÑADIDO,6,20,2,4,7,1)
            ]
        ),
        new VentajaTecnica(
            KI_EFECTO_TECNICA_ATAQUE_ADICIONAL_COMBO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_TECNICA_DESVENTAJA_COMBO_2_ATAQUES,-3,10,0,0,0,1),
                new NivelVentajaTecnica(KI_EFECTO_TECNICA_DESVENTAJA_COMBO_3_ATAQUES,-6,20,0,0,0,1)
            ]
        )
    ]
));

addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ATAQUE_ADICIONAL_LIMITADO,
    "",
    EFECTO_ACCION,
    [
        new NivelEfectoTecnica("+1",3,5,5,1,2,4,1),
        new NivelEfectoTecnica("+2",6,9,10,2,4,7,1),
        new NivelEfectoTecnica("+3",9,12,15,3,6,11,1),
        new NivelEfectoTecnica("+4",12,15,20,4,8,14,1),
        new NivelEfectoTecnica("+5",15,19,30,6,12,21,1),
        new NivelEfectoTecnica("+6",18,22,40,8,16,28,2),
        new NivelEfectoTecnica("+8",22,26,50,10,20,35,2),
        new NivelEfectoTecnica("+10",26,32,60,12,24,-1,3)
    ],
    DES,
    CLASE_ATAQUE,
    new ElementosAfines([ELEMENTO_AIRE,ELEMENTO_AGUA,ELEMENTO_OSCURIDAD]),
    [
        new CaracSecunTecnica(AGI, 2),
        new CaracSecunTecnica(POD, 3),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(CON, 1)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_VENTAJA_ATAQUE_ADICIONAL_LIMITADO_ATAQUE_CONTINUO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_TECNICA_VENTAJA_ATAQUE_CONTINUO,10,30,5,10,18,1)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_DEFENSA_ADICIONAL,
    "",
    EFECTO_ACCION,
    [
        new NivelEfectoTecnica("+1",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("+2",2,4,5,2,4,7,1),
        new NivelEfectoTecnica("+3",3,5,10,3,6,11,1),
        new NivelEfectoTecnica("+4",4,6,15,4,8,14,1),
        new NivelEfectoTecnica("+6",5,8,20,6,12,21,1),
        new NivelEfectoTecnica("+8",6,9,25,8,16,28,1),
        new NivelEfectoTecnica("+10",7,10,30,10,20,35,2),
        new NivelEfectoTecnica(KI_EFECTO_NIVEL_ILIMITADAS,8,11,35,12,24,-1,3)
    ],
    AGI,
    CLASE_DEFENSA,
    new ElementosAfines([ELEMENTO_LUZ]),
    [
        new CaracSecunTecnica(DES, 1),
        new CaracSecunTecnica(POD, 3),
        new CaracSecunTecnica(VOL, 3),
        new CaracSecunTecnica(CON, 2)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_TECNICA_DEFENSA_ADICIONAL_BONO_CANSANCIO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_TECNICA_VENTAJA_CANSANCIO_AÑADIDO,6,20,2,4,7,1)
            ]
        )
    ]
));
addEfectoTecnica(new EfectoTecnica(
    KI_EFECTO_ACCION_ADICIONAL,
    "",
    EFECTO_ACCION,
    [
        new NivelEfectoTecnica("+1",1,2,5,1,2,4,1),
        new NivelEfectoTecnica("+2",2,4,5,2,4,7,1),
        new NivelEfectoTecnica("+3",3,5,10,3,6,11,1),
        new NivelEfectoTecnica("+4",4,6,15,4,8,14,1),
        new NivelEfectoTecnica("+5",5,8,20,6,12,21,1),
        new NivelEfectoTecnica("+6",6,9,25,8,16,28,1),
        new NivelEfectoTecnica("+8",7,10,30,10,20,35,2),
        new NivelEfectoTecnica("+10",8,11,35,12,24,-1,3)
    ],
    DES,
    CLASE_VARIABLE,
    new ElementosAfines([ELEMENTO_AIRE]),
    [
        new CaracSecunTecnica(AGI, 1),
        new CaracSecunTecnica(POD, 3),
        new CaracSecunTecnica(VOL, 2),
        new CaracSecunTecnica(CON, 1)
    ],
    [
        new VentajaTecnica(
            KI_EFECTO_TECNICA_ACCION_ADICIONAL_BONO_CANSANCIO,
            "",
            [
                new NivelVentajaTecnica(KI_EFECTO_TECNICA_VENTAJA_CANSANCIO_AÑADIDO,6,20,1,2,4,1)
            ]
        )
    ]
));