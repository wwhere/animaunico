addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_BERSERKER,
        [],
        30,
        10,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MENORES
);
addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_YUUSE_BATOJUTSU,
        [
            new Requisito(REQUISITO_TABLA,TABLA_BATTO_JUTSU_IAI_JUTSU,0)
        ],
        20,
        10,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MENORES
);
addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_KIAI,
        [
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_DEL_KI,0),
            new Requisito(REQUISITO_ARTE_MARCIAL_GRADO, GRADO_AVANZADO,1)
        ],
        10,
        10,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MENORES
);
addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_GUARDIAN,
        [],
        30,
        10,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MENORES
);
addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_MANIOBRA_ESPECIAL,
        [],
        30,
        10,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MENORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_ASHURIAM,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",220),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_ENERGIA_NECESARIA,0),
            new Requisito(REQUISITO_ZEN,"",0),
            new Requisito(REQUISITO_CARACTERISTICA,POD,11)
        ],
        80,
        80,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_AGNITUM,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",180),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_ERUDICION,0),
            new Requisito(REQUISITO_CARACTERISTICA,PER,11)
        ],
        30,
        30,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_CAOS_MEISTER,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",250),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",250),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,250)
            ],0),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_ENERGIA_NECESARIA,0),
            new Requisito(REQUISITO_CARACTERISTICA,POD,11)
        ],
        80,
        100,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_ETHERIAL,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",200)
        ],
        40,
        40,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_HAIMA,
        [
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",200),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200)
            ],0),
            new Requisito(REQUISITO_CARACTERISTICA,VOL,10),
            new Requisito(REQUISITO_VENTAJA,VENT_SANGRE_ETERNA,0)
        ],
        30,
        30,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_MAGNUM,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",200),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTENSION_AURA_ARMA,0)
        ],
        30,
        50,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_INFINIUM,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",200),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_CARACTERISTICA,AGI,11)
        ],
        40,
        40,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_MATRIX,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",150),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",150),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,150)
            ],0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_MULTIPLICACION_DE_CUERPOS,0)
        ],
        50,
        50,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_MUNDUS,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",200),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",200),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200)
            ],0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_MOVIMIENTO_DE_MASAS,0),
            new Requisito(REQUISITO_INHUMANIDAD,"",0)
        ],
        30,
        50,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_RAIKOU,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",200),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_CARACTERISTICA,DES,10),
            new Requisito(REQUISITO_CARACTERISTICA,AGI,10)
        ],
        60,
        60,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_REM,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",150),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",180),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,180)
            ],0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_ERUDICION,0),
            new Requisito(REQUISITO_CARACTERISTICA,PER,10)
        ],
        40,
        60,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_SAMIEL,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",200),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",200),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200)
            ],0),
            new Requisito(REQUISITO_INHUMANIDAD,"",0)
        ],
        60,
        60,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_SHINKYOU,
        [
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",250),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,250)
            ],0),
            new Requisito(REQUISITO_CARACTERISTICA,PER,10)
        ],
        60,
        80,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_SUMMUN,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",180),
            new Requisito(REQUISITO_CARACTERISTICA,DES,11)
        ],
        30,
        30,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_TRANSFORMACION_EL_DESPERTAR,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",200),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",200),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200)
            ],0),
            new Requisito(REQUISITO_INHUMANIDAD,"",0)
        ],
        50,
        50,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_TRANSFORMACION_PODER_FISICO,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",200),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",200),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200)
            ],0),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_ENERGIA_NECESARIA,0)
        ],
        30,
        50,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_TRANSFORMACION_ELIODON,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",150),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",150),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,150)
            ],0),
            new Requisito(REQUISITO_VENTAJA,VENT_SANGRE_DE_LAS_GRANDES_BESTIAS,0)
        ],
        20,
        40,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_TRANSFORMACION_RUPTURA_DEL_DESTINO,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",250),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",250),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,250)
            ],0),
            new Requisito(REQUISITO_ZEN,"",0)
        ],
        100,
        100,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_TRANSFORMACION_LOS_SELLOS_DEL_DRAGON,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",160),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",160),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160)
            ],0),
            new Requisito(REQUISITO_VENTAJA,VENT_SANGRE_DE_EL_DRAGON,0)
        ],
        20,
        50,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);

addArsMagnus(
    new ArsMagnus(
        SELLO_DEL_DRAGON_1,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,ARS_MAGNUS_TRANSFORMACION_LOS_SELLOS_DEL_DRAGON,0)
        ],
        0,
        5,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);

addArsMagnus(
    new ArsMagnus(
        SELLO_DEL_DRAGON_2,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,SELLO_DEL_DRAGON_1,0)
        ],
        0,
        5,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);

addArsMagnus(
    new ArsMagnus(
        SELLO_DEL_DRAGON_3,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,SELLO_DEL_DRAGON_2,0)
        ],
        0,
        10,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);
addArsMagnus(
    new ArsMagnus(
        SELLO_DEL_DRAGON_4,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,SELLO_DEL_DRAGON_3,0)
        ],
        0,
        10,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);

addArsMagnus(
    new ArsMagnus(
        SELLO_DEL_DRAGON_5,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,SELLO_DEL_DRAGON_4,0)
        ],
        0,
        15,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);


addArsMagnus(
    new ArsMagnus(
        SELLO_DEL_DRAGON_6,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,SELLO_DEL_DRAGON_5,0)
        ],
        0,
        15,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);

addArsMagnus(
    new ArsMagnus(
        SELLO_DEL_DRAGON_7,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,SELLO_DEL_DRAGON_6,0)
        ],
        0,
        20,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);
addArsMagnus(
    new ArsMagnus(
        SELLO_DEL_DRAGON_8,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,SELLO_DEL_DRAGON_7,0)
        ],
        0,
        20,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);

addArsMagnus(
    new ArsMagnus(
        SELLO_DEL_DRAGON_9,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,SELLO_DEL_DRAGON_8,0)
        ],
        0,
        25,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);

addArsMagnus(
    new ArsMagnus(
        SELLO_DEL_DRAGON_10,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,SELLO_DEL_DRAGON_9,0)
        ],
        0,
        25,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON
);


addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_UMBRA,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",150),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_ENERGIA_NECESARIA,0),
            new Requisito(REQUISITO_INHUMANIDAD,"",0)
        ],
        30,
        50,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_MAYORES
);


addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_ARIES,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",150),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",150),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,150)
            ],0),
            new Requisito(REQUISITO_INHUMANIDAD,"",0)
        ],
        40,
        40,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_TAURUS,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",120),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_MANDOBLE,0),
                new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_HACHA_DOS_MANOS,0),
                new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_MAZA_PESADA,0)
            ],0)
        ],
        20,
        30,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_GEMINI,
        [
            new Requisito(REQUISITO_CARACTERISTICA,DES,11),
            new Requisito(REQUISITO_INHUMANIDAD,"",0)
        ],
        50,
        50,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_CANCER,
        [
            new Requisito(REQUISITO_CARACTERISTICA,DES,10),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_DEL_KI,0),
            new Requisito(REQUISITO_HABILIDAD,HB_TRUCOS_MANOS,50)
        ],
        40,
        20,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_CANCER_MAGISTER,
        [
            new Requisito(REQUISITO_CARACTERISTICA,DES,11),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTENSION_AURA_ARMA,0),
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",200),
            new Requisito(REQUISITO_ARS_MAGNUS,ARS_MAGNUS_CANCER,0)
        ],
        30,
        30,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_LEO,
        [
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_TODOS_LOS_SIGUIENTES, [
                    new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_PISTOLA_MECHA,0),
                    new Requisito(REQUISITO_CATEGORIA_ARMA_MANEJADA,CAT_ARMA_ESPADA,0)
                ],0),
                new Requisito(REQUISITO_TODOS_LOS_SIGUIENTES, [
                    new Requisito(REQUISITO_CATEGORIA_ARMA_MANEJADA,CAT_ARMA_ESPADA,0),
                    new Requisito(REQUISITO_TABLA,TABLA_TABLA_DE_LANZAMIENTO,0)
                ],0),
                new Requisito(REQUISITO_TODOS_LOS_SIGUIENTES, [
                    new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_LANZA,0),
                    new Requisito(REQUISITO_TABLA,TABLA_TABLA_DE_LANZAMIENTO,0)
                ],0),
                new Requisito(REQUISITO_TODOS_LOS_SIGUIENTES, [
                    new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_LANZA,0),
                    new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_ARCABUZ,0)
                ],0),
                new Requisito(REQUISITO_TODOS_LOS_SIGUIENTES, [
                    new Requisito(REQUISITO_ARMA_MANEJADA,CAT_ARMA_MAZA,0),
                    new Requisito(REQUISITO_TABLA,TABLA_TABLA_DE_LANZAMIENTO,0)
                ],0),
                new Requisito(REQUISITO_TODOS_LOS_SIGUIENTES, [
                    new Requisito(REQUISITO_ARMA_MANEJADA,CAT_ARMA_MAZA,0),
                    new Requisito(REQUISITO_TABLA,ARMA_CAÑON,0)
                ],0)
            ],0)
        ],
        20,
        10,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);



addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_VIRGO,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",140),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTENSION_AURA_ARMA,0),
            new Requisito(REQUISITO_HABILIDAD,HB_MUSICA,100)
        ],
        50,
        50,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_LIBRA,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",160),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTENSION_AURA_ARMA,0),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",160),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160)
            ],0)
        ],
        30,
        20,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_SCORPIO,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",140),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTENSION_AURA_ARMA,0),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_TODOS_LOS_SIGUIENTES, [
                    new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_ESPADA_LARGA,0),
                    new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_LATIGO,0)
                ],0),
                new Requisito(REQUISITO_TODOS_LOS_SIGUIENTES, [
                    new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_SABLE,0),
                    new Requisito(REQUISITO_ARMA_MANEJADA,ARMA_LATIGO,0)
                ],0)
            ],0)
        ],
        10,
        10,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_SAGITTARIUS,
        [
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",140),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTENSION_AURA_ARMA,0),
            new Requisito(REQUISITO_TABLA,TABLA_TABLA_DE_LANZAMIENTO,0),
            new Requisito(REQUISITO_HABILIDAD,HB_TRUCOS_MANOS,60),
            new Requisito(REQUISITO_CARACTERISTICA,DES,9)
        ],
        40,
        30,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_SAGITTARIUS_MAGISTER,
        [
            new Requisito(REQUISITO_ARS_MAGNUS,ARS_MAGNUS_SAGITTARIUS,0),
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",200),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_CARACTERISTICA,DES,11)
        ],
        30,
        30,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_CAPRICORNIUS,
        [
            new Requisito(REQUISITO_HABILIDAD,HB_MEDICINA,80),
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",100),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_CARACTERISTICA,DES,9)
        ],
        20,
        20,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_AQUARIUS,
        [
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTENSION_AURA_ARMA,0),
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",150),
            new Requisito(REQUISITO_INHUMANIDAD,"",0),
            new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
                new Requisito(REQUISITO_HABILIDAD_PARADA,"",150),
                new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,150)
            ],0)

        ],
        20,
        20,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_PISCIS,
        [
            new Requisito(REQUISITO_CARACTERISTICA,DES,10),
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",120),
            new Requisito(REQUISITO_INHUMANIDAD,"",0)
        ],
        10,
        20,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);

addArsMagnus(
    new ArsMagnus(
        ARS_MAGNUS_OPHIUCOS,
        [
            new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTENSION_AURA_ARMA,0),
            new Requisito(REQUISITO_HABILIDAD_ATAQUE,"",250),
            new Requisito(REQUISITO_ZEN,"",0)
        ],
        10,
        20,
        [FLAG_DOMINUS_EXXET_ENABLED]
    ),
    GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES
);