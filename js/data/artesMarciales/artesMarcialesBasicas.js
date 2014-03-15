artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_AIKIDO,
    A_M_AIKIDO,
    A_M_AIKIDO_D_V,
    [
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 40)
    ],
    10,      //CM
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_AIKIDO),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_AIKIDO)
    ],
    [10,BONO_FUE],
    [ATAQUE_CON3]
));
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
    A_M_KUNG_FU,
    A_M_KUNG_FU,
    A_M_KUNG_FU_D_V,
    [new Requisito(REQUISITO_HABILIDAD, HB_ACROBACIAS, 40),new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 40),new Requisito(REQUISITO_HABILIDAD, HB_ESTILO, 20)],
    10,      //CM
    [],
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



