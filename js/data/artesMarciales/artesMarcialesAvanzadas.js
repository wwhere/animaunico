artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_EMP_BASE,
    A_M_EMP,
    "",
    A_M_EMP_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUAN_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MALLA_YUDDHA_AVANZADO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_EMP_BASE),
        new Bono(BONO_TURNO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_EMP_BASE)
    ],
    [ARTE_MARCIAL,[A_M_KEMPO,A_M_KUAN,A_M_MALLA_YUDDHA]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_EMP_ARCANO,
    A_M_EMP,
    "",
    A_M_EMP_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_EMP_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUAN_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MALLA_YUDDHA_SUPREMO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,280),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,260),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,260)
        ],0)
    ],
    10,
    [
        new Bono(BONO_TURNO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_EMP_ARCANO),
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20, ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_EMP_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_KEMPO,A_M_KUAN,A_M_MALLA_YUDDHA]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SELENE_BASE,
    A_M_SELENE,
    "",
    A_M_SELENE_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_AIKIDO_AVANZADO,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_SELENE_BASE),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SELENE_BASE)
    ],
    [ARTE_MARCIAL,[A_M_AIKIDO]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SELENE_ARCANO,
    A_M_SELENE,
    "",
    A_M_SELENE_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_AIKIDO_SUPREMO,0),
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SELENE_BASE,0),
        new Requisito(REQUISITO_INHUMANIDAD,"",0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,300),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,300)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_MAESTRO,A_M_SELENE_ARCANO),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_SELENE_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_AIKIDO]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SUYANTA_BASE,
    A_M_SUYANTA,
    "",
    A_M_SUYANTA_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_TAI_CHI_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    15,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SUYANTA_BASE)
    ],
    [ARTE_MARCIAL,[A_M_TAI_CHI]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SUYANTA_ARCANO,
    A_M_SUYANTA,
    "",
    A_M_SUYANTA_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SUYANTA_BASE,0),
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_TAI_CHI_SUPREMO,0),
        new Requisito(REQUISITO_INHUMANIDAD,"",0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,300)
    ],
    20,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,15,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_SUYANTA_ARCANO)
    ],
    [BONO_POD,ARTE_MARCIAL,[A_M_TAI_CHI]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_VELEZ_BASE,
    A_M_VELEZ,
    "",
    A_M_VELEZ_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_TAI_CHI_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU_AVANZADO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0)
    ],
    20,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_VELEZ_BASE),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_VELEZ_BASE)
    ],
    [ARTE_MARCIAL,[A_M_TAI_CHI,A_M_KUNG_FU]],
    [ATAQUE_ENE3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_VELEZ_ARCANO,
    A_M_VELEZ,
    "",
    A_M_VELEZ_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_VELEZ_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_TAI_CHI_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU_SUPREMO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,280)
    ],
    20,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,15,"",false,BONO_MAESTRO,A_M_VELEZ_ARCANO),
        new Bono(BONO_HABILIDAD,HB_PARADA,15,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_VELEZ_ARCANO)
    ],
    [BONO_POD,ARTE_MARCIAL,[A_M_TAI_CHI]],
    [ATAQUE_ENE3]
));


artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_ASAKUSEN_BASE,
    A_M_ASAKUSEN,
    "",
    A_M_ASAKUSEN_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,160),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,160)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_ASAKUSEN_BASE),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN_BASE),
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN_BASE),
        new Bono(BONO_TURNO,BONO_TURNO,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN_BASE),
        new Bono(BONO_DAÑO,BONO_DAÑO,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN_BASE)
    ],
    [ARTE_MARCIAL,[A_M_KUNG_FU]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_ASAKUSEN_ARCANO,
    A_M_ASAKUSEN,
    "",
    A_M_ASAKUSEN_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_ASAKUSEN_BASE,0),
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU_SUPREMO,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,280),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,280),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,280)
        ],0),
        new Requisito(REQUISITO_INHUMANIDAD,"",0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,"",false,BONO_MAESTRO,A_M_ASAKUSEN_ARCANO),
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_MAESTRO,A_M_ASAKUSEN_ARCANO),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_ASAKUSEN_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_KUNG_FU]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_LAMA_TSU_BASE,
    A_M_LAMA_TSU,
    "",
    A_M_LAMA_TSU_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_LAMA_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_DETECCION_KI,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ESTILO,120),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,220),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,220)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_LAMA_TSU_BASE),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_LAMA_TSU_BASE)
    ],
    [ARTE_MARCIAL,[A_M_LAMA]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_LAMA_TSU_ARCANO,
    A_M_LAMA_TSU,
    "",
    A_M_LAMA_TSU_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_LAMA_TSU_BASE,0),
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_LAMA_SUPREMO,0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_ERUDICION,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ESTILO,140),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,300),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,300)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_MAESTRO,A_M_LAMA_TSU_ARCANO),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_LAMA_TSU_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_LAMA]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SERAPHITE_BASE,
    A_M_SERAPHITE,
    "",
    A_M_SERAPHITE_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO_AVANZADO,0)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,180)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20,"",false,BONO_INNATO,A_M_SERAPHITE_BASE)
    ],
    [ARTE_MARCIAL,[A_M_SHOTOKAN,A_M_KEMPO]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SERAPHITE_ARCANO,
    A_M_SERAPHITE,
    "",
    A_M_SERAPHITE_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SERAPHITE_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO_SUPREMO,0)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,280)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20,"",false,BONO_MAESTRO,A_M_SERAPHITE_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_SHOTOKAN,A_M_KEMPO]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MELKAIAH_BASE,
    A_M_MELKAIAH,
    "",
    A_M_MELKAIAH_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_GRAPPLING_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_PANKRATION_AVANZADO,0)
        ], 0),
        new Requisito(REQUISITO_INHUMANIDAD,"",0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,160),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,160)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_MELKAIAH_BASE)
    ],
    [ARTE_MARCIAL,[A_M_GRAPPLING,A_M_PANKRATION]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MELKAIAH_ARCANO,
    A_M_MELKAIAH,
    "",
    A_M_MELKAIAH_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MELKAIAH_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_GRAPPLING_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_PANKRATION_SUPREMO,0)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,260),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,260),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,260)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_MELKAIAH_ARCANO),
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_MAESTRO,A_M_MELKAIAH_ARCANO),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_MELKAIAH_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_GRAPPLING,A_M_PANKRATION]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_DUMAH_BASE,
    A_M_DUMAH,
    "",
    A_M_DUMAH_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_CAPOEIRA_AVANZADO,0)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_DUMAH_BASE)
    ],
    [10,ROTURA_PLUS_10,TA_ENEMIGA_MENOS_2,ARTE_MARCIAL,[A_M_KEMPO,A_M_CAPOEIRA]],
    [ATAQUE_FIL3,ATAQUE_PEN3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_DUMAH_ARCANO,
    A_M_DUMAH,
    "",
    A_M_DUMAH_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_DUMAH_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_CAPOEIRA_SUPREMO,0)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,280),
        new Requisito(REQUISITO_INHUMANIDAD,"",0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_DUMAH_ARCANO)
    ],
    [20,ROTURA_PLUS_25,TA_ENEMIGA_MENOS_6,ARTE_MARCIAL,[A_M_KEMPO,A_M_CAPOEIRA]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MUSHIN_BASE,
    A_M_MUSHIN,
    "",
    A_M_MUSHIN_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_XING_QUAN_AVANZADO,0)
        ], 0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_MEDICINA,100),
            new Requisito(REQUISITO_ESPECIALIDAD,{habilidad: HB_MEDICINA, especializacion: UI_ESP_ANATOMIA},60)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    15,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_MUSHIN_BASE)
    ],
    [ARTE_MARCIAL,[A_M_XING_QUAN,A_M_KUNG_FU]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MUSHIN_ARCANO,
    A_M_MUSHIN,
    "",
    A_M_MUSHIN_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MUSHIN_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_XING_QUAN_SUPREMO,0)
        ], 0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_MEDICINA,120),
            new Requisito(REQUISITO_ESPECIALIDAD,{habilidad: HB_MEDICINA, especializacion: UI_ESP_ANATOMIA},80)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,300),
        new Requisito(REQUISITO_INHUMANIDAD,"",0)
    ],
    15,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_MUSHIN_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_XING_QUAN,A_M_KUNG_FU]],
    []
));


artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SHEPHON_BASE,
    A_M_SHEPHON,
    "",
    A_M_SHEPHON_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_AIKIDO_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUAN_AVANZADO,0)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_DEL_KI,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_SHEPHON_BASE),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SHEPHON_BASE)
    ],
    [ARTE_MARCIAL,[A_M_AIKIDO,A_M_KUAN]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SHEPHON_ARCANO,
    A_M_SHEPHON,
    "",
    A_M_SHEPHON_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHEPHON_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_AIKIDO_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUAN_SUPREMO,0)
        ], 0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,300),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,300)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_MAESTRO,A_M_SHEPHON_ARCANO),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_SHEPHON_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_AIKIDO,A_M_KUAN]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_HAKYOUKUKEN_BASE,
    A_M_HAKYOUKUKEN,
    "",
    A_M_HAKYOUKUKEN_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MOAI_THAI_AVANZADO,0)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_ENERGIA_NECESARIA,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    10,
    [
        new Bono(BONO_TURNO,BONO_TURNO,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_HAKYOUKUKEN_BASE),
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_HAKYOUKUKEN_BASE)
    ],
    [20,ARTE_MARCIAL,[A_M_SHOTOKAN,A_M_MOAI_THAI]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_HAKYOUKUKEN_ARCANO,
    A_M_HAKYOUKUKEN,
    "",
    A_M_HAKYOUKUKEN_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_HAKYOUKUKEN_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MOAI_THAI_SUPREMO,0)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,300),
        new Requisito(REQUISITO_INHUMANIDAD,"",0)
    ],
    10,
    [
        new Bono(BONO_TURNO,BONO_TURNO,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_HAKYOUKUKEN_ARCANO),
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_HAKYOUKUKEN_ARCANO)
    ],
    [30,ARTE_MARCIAL,[A_M_SHOTOKAN,A_M_MOAI_THAI]],
    []
));


artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_ENUTH_BASE,
    A_M_ENUTH,
    "",
    A_M_ENUTH_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SAMBO_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN_AVANZADO,0)
        ], 0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,160),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,160)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_ENUTH_BASE),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ENUTH_BASE)
    ],
    [ARTE_MARCIAL,[A_M_SAMBO,A_M_SHOTOKAN]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_ENUTH_ARCANO,
    A_M_ENUTH,
    "",
    A_M_ENUTH_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_ENUTH_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SAMBO_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN_SUPREMO,0)
        ], 0),
        new Requisito(REQUISITO_INHUMANIDAD,"",0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_ERUDICION,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,280),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,280),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,280)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,15,"",false,BONO_MAESTRO,A_M_ENUTH_ARCANO),
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,15,"",false,BONO_MAESTRO,A_M_ENUTH_ARCANO),
        new Bono(BONO_HABILIDAD,HB_PARADA,15,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_ENUTH_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_SAMBO,A_M_SHOTOKAN]],
    []
));


artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_HANJA_BASE,
    A_M_HANJA,
    "",
    A_M_HANJA_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SOO_BAHK_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ADVERTIR,200),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_DETECCION_KI,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_HANJA_BASE),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_HANJA_BASE)
    ],
    [ARTE_MARCIAL,[A_M_SOO_BAHK]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_HANJA_ARCANO,
    A_M_HANJA,
    "",
    A_M_HANJA_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_HANJA_BASE,0),
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SOO_BAHK_SUPREMO,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ADVERTIR,240),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,300),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,300)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20,"",false,BONO_MAESTRO,A_M_HANJA_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_SOO_BAHK]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_GODHAND_BASE,
    A_M_GODHAND,
    "",
    A_M_GODHAND_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_BOXEO_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN_AVANZADO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,"",false,BONO_INNATO,A_M_GODHAND_BASE)
    ],
    [ARTE_MARCIAL,[A_M_BOXEO,A_M_SHOTOKAN]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_GODHAND_ARCANO,
    A_M_GODHAND,
    "",
    A_M_GODHAND_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_GODHAND_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_BOXEO_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN_SUPREMO,0)
        ],0),
        new Requisito(REQUISITO_INHUMANIDAD,"",0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,300)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,15,"",false,BONO_MAESTRO,A_M_GODHAND_ARCANO)
    ],
    [ARTE_MARCIAL,[A_M_BOXEO,A_M_SHOTOKAN]],
    []
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_REX_FRAME_BASE,
    A_M_REX_FRAME,
    "",
    A_M_REX_FRAME_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MALLA_YUDDHA_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MOAI_THAI_AVANZADO,0)
        ],0),
        new Requisito(REQUISITO_INHUMANIDAD,"",0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_REX_FRAME_BASE),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_REX_FRAME_BASE),
        new Bono(BONO_ARMADURA_NATURAL,"",3,"",false,BONO_INNATO,A_M_REX_FRAME_BASE)
    ],
    [ARTE_MARCIAL,[A_M_MALLA_YUDDHA,A_M_MOAI_THAI]],
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_REX_FRAME_ARCANO,
    A_M_REX_FRAME,
    "",
    A_M_REX_FRAME_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_REX_FRAME_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MALLA_YUDDHA_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MOAI_THAI_SUPREMO,0)
        ],0),
        new Requisito(REQUISITO_ZEN,"",0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,300),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,300)
        ],0)
    ],
    20,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_MAESTRO,A_M_REX_FRAME_ARCANO),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_REX_FRAME_ARCANO),
        new Bono(BONO_ARMADURA_NATURAL,"",3,"",false,BONO_INNATO,A_M_REX_FRAME_ARCANO)

    ],
    [ARTE_MARCIAL,[A_M_MALLA_YUDDHA,A_M_MOAI_THAI]],
    []
));


artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_EXELION_BASE,
    A_M_EXELION,
    "",
    A_M_EXELION_BASE_D_V,
    false,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KARDAD_AVANZADO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_TAI_CHI_AVANZADO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTENSION_AURA_ARMA,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    15,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_EXELION_BASE)
    ],
    [BONO_POD,PRE,PRE], //TODO este daño base es el final, nunca se modifica
    []
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_EXELION_ARCANO,
    A_M_EXELION,
    "",
    A_M_EXELION_ARCANO_D_V,
    false,
    GRADO_ARCANO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_EXELION_BASE,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KARDAD_SUPREMO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_TAI_CHI_SUPREMO,0)
        ],0),
        new Requisito(REQUISITO_INHUMANIDAD,"",0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,300)
    ],
    20,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20,ARMA_SIN_ARMAS,false,BONO_MAESTRO,A_M_EXELION_ARCANO)
    ],
    [BONO_POD,PRE,PRE], //TODO este daño base es el final, nunca se modifica
    []
));