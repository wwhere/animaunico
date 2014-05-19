if (ARCANA_EXXET_ENABLED) {

    var discTeletransport = new DisciplinaPsiquica(
        DISCIPLINA_TELETRANSPORTE,
        DISCIPLINA_DESCRIPCION_TELETRANSPORTE
    );



    discTeletransport.addPoder(new PoderPsiquico(
        PSI_PODER_RECOLOCAR_OBJETO,
        1,
        ACCION_ACTIVA,
        false,
        "",
        [ FATIGA_2, FATIGA_1, DIF_MED, DIF_DIF, DIF_MDF, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discTeletransport.addPoder(new PoderPsiquico(
        PSI_PODER_AUTORRECOLOCACION,
        1,
        ACCION_ACTIVA,
        false,
        "",
        [ FATIGA_6, FATIGA_4, FATIGA_2, DIF_DIF, DIF_MDF, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discTeletransport.addPoder(new PoderPsiquico(
        PSI_PODER_TRANSPORTE_DEFENSIVO,
        1,
        ACCION_PASIVA,
        true,
        "",
        [ FATIGA_6, FATIGA_4, FATIGA_2, DIF_DIF, DIF_MDF, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discTeletransport.addPoder(new PoderPsiquico(
        PSI_PODER_AUTORRECOLOCACION_MAYOR,
        2,
        ACCION_ACTIVA,
        false,
        "",
        [ FATIGA_12, FATIGA_8, FATIGA_6, FATIGA_4, FATIGA_2, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discTeletransport.addPoder(new PoderPsiquico(
        PSI_PODER_ALEPH,
        3,
        ACCION_ACTIVA,
        true,
        "",
        [ FATIGA_16, FATIGA_12, FATIGA_8, FATIGA_6, FATIGA_4, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discTeletransport.addPoder(new PoderPsiquico(
        PSI_PODER_RECOLOCAR_OBJETO_MAYOR,
        3,
        ACCION_ACTIVA,
        false,
        "",
        [ FATIGA_24, FATIGA_20, FATIGA_16, FATIGA_12, FATIGA_8, FATIGA_4, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discTeletransport.addPoder(new PoderPsiquico(
        PSI_PODER_TELETRANSPORTE,
        3,
        ACCION_ACTIVA,
        false,
        "",
        [ FATIGA_12, FATIGA_8, FATIGA_6, FATIGA_4, FATIGA_2, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));

    disciplinasPsiquicas_set.push(discTeletransport);

}