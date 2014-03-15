artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_SELENE,
    A_M_SELENE,
    A_M_SELENE_D_V,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_AIKIDO,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD, HB_PARADA,200)
            ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_SELENE),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SELENE)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_MELKAIAH,
    A_M_MELKAIAH,
    A_M_MELKAIAH_D_V,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_GRAPPLING,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SAMBO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_INHUMANIDAD,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,160),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,160)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_MELKAIAH)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_DUMAH,
    A_M_DUMAH,
    A_M_DUMAH_D_V,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_CAPOEIRA,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_DUMAH),
        new Bono(BONO_DAÑO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_DUMAH),
        new Bono(BONO_ROTURA,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_DUMAH)
    ],
    [ROTURA_PLUS_10,TA_ENEMIGA_MENOS_2],
    [ATAQUE_PEN3,ATAQUE_FIL3]
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_EMP,
    A_M_EMP,
    A_M_EMP_D_V,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_TAE_KWON_DO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_EMP),
        new Bono(BONO_TURNO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_EMP)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_SHEPHON,
    A_M_SHEPHON,
    A_M_SHEPHON_D_V,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_AIKIDO,0),
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_CONTROL_DEL_KI,0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_SHEPHON),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SHEPHON)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_SERAPHITE,
    A_M_SERAPHITE,
    A_M_SERAPHITE_D_V,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,180)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SERAPHITE),
        new Bono(BONO_DAÑO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SERAPHITE)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_ASAKUSEN,
    A_M_ASAKUSEN,
    A_M_ASAKUSEN_D_V,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,160)
        ],0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,160)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN),
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_ASAKUSEN),
        new Bono(BONO_HABILIDAD,HB_PARADA,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN),
        new Bono(BONO_TURNO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN),
        new Bono(BONO_DAÑO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_VELEZ,
    A_M_VELEZ,
    A_M_VELEZ_D_V,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_TAI_CHI,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0)
    ],
    20,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_VELEZ),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_VELEZ)
    ],
    [],
    [ATAQUE_ENE3]
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_ENUTH,
    A_M_ENUTH,
    A_M_ENUTH_D_V,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SAMBO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN,0)
        ],0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,160)
        ],0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,160)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_ENUTH),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ENUTH)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_HAKYOUKUKEN,
    A_M_HAKYOUKUKEN,
    A_M_HAKYOUKUKEN_D_V,
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MOAI_THAI,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_ENERGIA_NECESARIA,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    10,
    [
        new Bono(BONO_TURNO,"",20,"",false,BONO_INNATO,A_M_HAKYOUKUKEN),
        new Bono(BONO_DAÑO,"",20, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_HAKYOUKUKEN),
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_HAKYOUKUKEN)
    ],
    [],
    []
));

