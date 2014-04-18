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

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SHOTOKAN_BASE,
    A_M_SHOTOKAN,
    "",
    A_M_SHOTOKAN_BASE_D_V,
    true,
    GRADO_BASE,
    [],
    0,
    [
        new Bono(BONO_HABILIDAD, HB_ATAQUE,5, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SHOTOKAN_BASE)
    ],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SHOTOKAN_AVANZADO,
    A_M_SHOTOKAN,
    "",
    A_M_SHOTOKAN_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_SHOTOKAN_BASE,0),
        new Requisito(REQUISITO_HABILIDAD, HB_ATAQUE, 120),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,120),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,120)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD, HB_ATAQUE,5, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SHOTOKAN_AVANZADO)
    ],
    [30,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SHOTOKAN_SUPREMO,
    A_M_SHOTOKAN,
    "",
    A_M_SHOTOKAN_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_SHOTOKAN_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD, HB_ATAQUE, 200)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD, HB_ATAQUE,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SHOTOKAN_SUPREMO)
    ],
    [50,BONO_FUE],
    [ATAQUE_CON3]
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_BOXEO_BASE,
    A_M_BOXEO,
    "",
    A_M_BOXEO_BASE_D_V,
    true,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 30)
    ],
    0,
    [
        new Bono(BONO_TURNO, BONO_TURNO,5, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_BOXEO_BASE)
    ],
    [10,BONO_FUE,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_BOXEO_AVANZADO,
    A_M_BOXEO,
    "",
    A_M_BOXEO_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_BOXEO_BASE,0),
        new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 60),
        new Requisito(REQUISITO_HABILIDAD, HB_ATAQUE, 120),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,120),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,120)
        ],0)
    ],
    10,
    [
        new Bono(BONO_TURNO, BONO_TURNO,5, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_BOXEO_AVANZADO)
    ],
    [20,BONO_FUE,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_BOXEO_SUPREMO,
    A_M_BOXEO,
    "",
    A_M_BOXEO_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_BOXEO_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 120),
        new Requisito(REQUISITO_HABILIDAD, HB_ATAQUE, 200),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD, HB_ATAQUE,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_BOXEO_SUPREMO),
        new Bono(BONO_TURNO, BONO_TURNO,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_BOXEO_SUPREMO)
    ],
    [30,BONO_FUE,BONO_FUE],
    [ATAQUE_CON3]
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MOAI_THAI_BASE,
    A_M_MOAI_THAI,
    "",
    A_M_MOAI_THAI_BASE_D_V,
    true,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 30)
    ],
    0,
    [],
    [20,BONO_FUE,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MOAI_THAI_AVANZADO,
    A_M_MOAI_THAI,
    "",
    A_M_MOAI_THAI_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_MOAI_THAI_BASE,0),
        new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 40),
        new Requisito(REQUISITO_HABILIDAD, HB_ATAQUE, 130)
    ],
    10,
    [],
    [20,BONO_FUE,BONO_FUE,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MOAI_THAI_SUPREMO,
    A_M_MOAI_THAI,
    "",
    A_M_MOAI_THAI_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_MOAI_THAI_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 160),
        new Requisito(REQUISITO_HABILIDAD, HB_ATAQUE, 200)
    ],
    10,
    [],
    [20,BONO_FUE,BONO_FUE,BONO_FUE,BONO_FUE],
    [ATAQUE_CON3]
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_CAPOEIRA_BASE,
    A_M_CAPOEIRA,
    "",
    A_M_CAPOEIRA_BASE_D_V,
    true,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_BAILE, 20)
    ],
    0,
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_CAPOEIRA_AVANZADO,
    A_M_CAPOEIRA,
    "",
    A_M_CAPOEIRA_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_CAPOEIRA_BASE,0),
        new Requisito(REQUISITO_HABILIDAD, HB_BAILE, 40),
        new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,120)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD, HB_ESQUIVA,10, "",false,BONO_INNATO,A_M_CAPOEIRA_AVANZADO)
    ],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_CAPOEIRA_SUPREMO,
    A_M_CAPOEIRA,
    "",
    A_M_CAPOEIRA_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_CAPOEIRA_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD, HB_BAILE, 120),
        new Requisito(REQUISITO_HABILIDAD, HB_ESQUIVA, 200)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD, HB_ESQUIVA,10, "",false,BONO_INNATO,A_M_CAPOEIRA_SUPREMO)
    ],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));


artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MALLA_YUDDHA_BASE,
    A_M_MALLA_YUDDHA,
    "",
    A_M_MALLA_YUDDHA_BASE_D_V,
    true,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 20)
    ],
    0,
    [
        new Bono(BONO_ENTEREZA,BONO_ENTEREZA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_MALLA_YUDDHA_BASE)
    ],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MALLA_YUDDHA_AVANZADO,
    A_M_MALLA_YUDDHA,
    "",
    A_M_MALLA_YUDDHA_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_MALLA_YUDDHA_BASE,0),
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 40),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,120),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,120)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD, HB_PARADA,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_MALLA_YUDDHA_AVANZADO)
    ],
    [30,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MALLA_YUDDHA_SUPREMO,
    A_M_MALLA_YUDDHA,
    "",
    A_M_MALLA_YUDDHA_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_MALLA_YUDDHA_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 100),
        new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD, HB_PARADA,20, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_MALLA_YUDDHA_SUPREMO)
    ],
    [40,BONO_FUE],
    [ATAQUE_CON3]
));


artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SAMBO_BASE,
    A_M_SAMBO,
    "",
    A_M_SAMBO_BASE_D_V,
    true,
    GRADO_BASE,
    [],
    0,
    [],
    [10,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SAMBO_AVANZADO,
    A_M_SAMBO,
    "",
    A_M_SAMBO_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_SAMBO_BASE,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,130)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD, HB_PARADA,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SAMBO_AVANZADO)
    ],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SAMBO_SUPREMO,
    A_M_SAMBO,
    "",
    A_M_SAMBO_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_SAMBO_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD, HB_PARADA,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SAMBO_SUPREMO)
    ],
    [30,BONO_FUE],
    [ATAQUE_CON3]
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_KEMPO_BASE,
    A_M_KEMPO,
    "",
    A_M_KEMPO_BASE_D_V,
    true,
    GRADO_BASE,
    [],
    0,
    [],
    [10,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_KEMPO_AVANZADO,
    A_M_KEMPO,
    "",
    A_M_KEMPO_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_KEMPO_BASE,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,120)
    ],
    10,
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_KEMPO_SUPREMO,
    A_M_KEMPO,
    "",
    A_M_KEMPO_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_KEMPO_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD, HB_ATAQUE,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_KEMPO_SUPREMO)
    ],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_TAE_KWON_DO_BASE,
    A_M_TAE_KWON_DO,
    "",
    A_M_TAE_KWON_DO_BASE_D_V,
    true,
    GRADO_BASE,
    [],
    0,
    [],
    [10,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_TAE_KWON_DO_AVANZADO,
    A_M_TAE_KWON_DO,
    "",
    A_M_TAE_KWON_DO_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_TAE_KWON_DO_BASE,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,130),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,100),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,100)
        ],0)
    ],
    10,
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_TAE_KWON_DO_SUPREMO,
    A_M_TAE_KWON_DO,
    "",
    A_M_TAE_KWON_DO_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_TAE_KWON_DO_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    10,
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_LAMA_BASE,
    A_M_LAMA,
    "",
    A_M_LAMA_BASE_D_V,
    true,
    GRADO_BASE,
    [
        new Requisito(REQUISITO_HABILIDAD,HB_ESTILO,20)
    ],
    0,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_LAMA_BASE),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_LAMA_BASE)
    ],
    [10,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_LAMA_AVANZADO,
    A_M_LAMA,
    "",
    A_M_LAMA_AVANZADO_D_V,
    true,
    GRADO_AVANZADO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_LAMA_BASE,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ESTILO,40),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,130),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,130)
        ],0)
    ],
    10,
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_LAMA_SUPREMO,
    A_M_LAMA,
    "",
    A_M_LAMA_SUPREMO_D_V,
    true,
    GRADO_SUPREMO,
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_LAMA_AVANZADO,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ESTILO,80),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_LAMA_SUPREMO),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_LAMA_SUPREMO)
    ],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));

/*** POR AQUI****/

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
    A_M_TAI_CHI,
    A_M_TAI_CHI,
    A_M_TAI_CHI_D_V,
    [new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_DEL_KI,0)],
    30,      //CM
    [],
    [20,BONO_POD_RED,BONO_POD_RED],
    [ATAQUE_CON3]
));



