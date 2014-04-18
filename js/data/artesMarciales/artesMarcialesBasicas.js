artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_AIKIDO_BASE,
    A_M_AIKIDO,
    "",
    A_M_AIKIDO_BASE_D_V,
    true,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 20)
    ],
    0,      //CM
    [],
    [10,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_AIKIDO_AVANZADO,
    A_M_AIKIDO,
    "",
    A_M_AIKIDO_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 40),
        new Requisito(REQUISITO_HABILIDAD, HB_ATAQUE, 100),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,120),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,120)
        ],0),
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_AIKIDO_BASE,0)
    ],
    10,      //CM
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_AIKIDO_AVANZADO),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_AIKIDO_AVANZADO)
    ],
    [10,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_AIKIDO_SUPREMO,
    A_M_AIKIDO,
    "",
    A_M_AIKIDO_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 80),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0),
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_AIKIDO_AVANZADO,0)
    ],
    10,      //CM
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_AIKIDO_SUPREMO),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_AIKIDO_SUPREMO),
        new Bono(BONO_DAÑO,BONO_DAÑO,BONO_FUE,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_AIKIDO_SUPREMO) //TODO comprobar si se puede pasar el bono tal cual
    ],
    [10,BONO_FUE,BONO_FUE,BONO_FUE],
    [ATAQUE_CON3]
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_KUNG_FU_BASE,
    A_M_KUNG_FU,
    "",
    A_M_KUNG_FU_BASE_D_V,
    true,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_ACROBACIAS, 20),
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 20),
        new Requisito(REQUISITO_HABILIDAD, HB_ESTILO, 10)
    ],
    0,      //CM
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_KUNG_FU_AVANZADO,
    A_M_KUNG_FU,
    "",
    A_M_KUNG_FU_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_ACROBACIAS, 40),
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 40),
        new Requisito(REQUISITO_HABILIDAD, HB_ESTILO, 20),
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_KUNG_FU_BASE,0),
        new Requisito(REQUISITO_HABILIDAD, HB_ATAQUE, 120),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,120),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,120)
        ],0)
    ],
    10,      //CM
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_KUNG_FU_SUPREMO,
    A_M_KUNG_FU,
    "",
    A_M_KUNG_FU_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_KUNG_FU_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD, HB_ACROBACIAS, 120),
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 120),
        new Requisito(REQUISITO_HABILIDAD, HB_ESTILO, 100),
        new Requisito(REQUISITO_HABILIDAD, HB_ATAQUE, 200),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0)
    ],
    10,      //CM
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3, ATAQUE_PEN3]
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_PANKRATION_BASE,
    A_M_PANKRATION,
    "",
    A_M_PANKRATION_BASE_D_V,
    true,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_ATLETISMO, 30),
        new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 30)
    ],
    0,      //CM
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_PANKRATION_AVANZADO,
    A_M_PANKRATION,
    "",
    A_M_PANKRATION_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_ATLETISMO, 50),
        new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 50),
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_PANKRATION_BASE,0),
        new Requisito(REQUISITO_HABILIDAD, HB_ATAQUE, 110),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,110),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,110)
        ],0)
    ],
    10,      //CM
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_PANKRATION_SUPREMO,
    A_M_PANKRATION,
    "",
    A_M_PANKRATION_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_PANKRATION_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 120),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0)
    ],
    10,      //CM
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_PANKRATION_SUPREMO),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_PANKRATION_SUPREMO)
    ],
    [20,BONO_FUE],
    [ATAQUE_CON3, ATAQUE_PEN3]
));
/****POR AQUI*****/
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SHOTOKAN,
    A_M_SHOTOKAN,
    A_M_SHOTOKAN_D_V,
    [],
    10,
    [new Bono(BONO_HABILIDAD, HB_ATAQUE,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SHOTOKAN)],
    [30,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_GRAPPLING,
    A_M_GRAPPLING,
    A_M_GRAPPLING_D_V,
    [new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 40)],
    10,      //CM
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_CAPOEIRA,
    A_M_CAPOEIRA,
    A_M_CAPOEIRA_D_V,
    [new Requisito(REQUISITO_HABILIDAD, HB_BAILE, 40)],
    10,      //CM
    [new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_CAPOEIRA)],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_KEMPO,
    A_M_KEMPO,
    A_M_KEMPO_D_V,
    [],
    10,      //CM
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MOAI_THAI,
    A_M_MOAI_THAI,
    A_M_MOAI_THAI_D_V,
    [new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 40)],
    10,      //CM
    [],
    [20,BONO_FUE,BONO_FUE,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SAMBO,
    A_M_SAMBO,
    A_M_SAMBO_D_V,
    [],
    10,      //CM
    [new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SAMBO)],
    [20,BONO_FUE_RED],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_TAE_KWON_DO,
    A_M_TAE_KWON_DO,
    A_M_TAE_KWON_DO_D_V,
    [],
    10,      //CM
    [],
    [20,BONO_FUE_RED],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_TAI_CHI,
    A_M_TAI_CHI,
    A_M_TAI_CHI_D_V,
    [new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_DEL_KI,0)],
    30,      //CM
    [],
    [20,BONO_POD_RED,BONO_POD_RED],
    [ATAQUE_CON3]
));



