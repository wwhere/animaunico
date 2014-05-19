if (ARCANA_EXXET_ENABLED) {

    var discCausalidad = new DisciplinaPsiquica(
        DISCIPLINA_CAUSALIDAD,
        DISCIPLINA_DESCRIPCION_CAUSALIDAD
    );



    discCausalidad.addPoder(new PoderPsiquico(
        PSI_PODER_CREAR_CAOS,
        1,
        ACCION_ACTIVA,
        true,
        "",
        [ FATIGA_12, FATIGA_8, FATIGA_6, FATIGA_4, FATIGA_2, RADIO_50_M, RADIO_500_M, RADIO_1_KM, RADIO_2_KM, RADIO_5_KM]
    ));
    discCausalidad.addPoder(new PoderPsiquico(
        PSI_PODER_ELIMINAR_LEY_DE_LA_CAUSALIDAD,
        2,
        ACCION_ACTIVA,
        true,
        "",
        [ FATIGA_12, FATIGA_8,FATIGA_6, FATIGA_4, FATIGA_2, RESULTADO_3, RESULTADO_4, RESULTADO_5, RESULTADO_6, RESULTADO_8]
    ));
    discCausalidad.addPoder(new PoderPsiquico(
        PSI_PODER_ALTERAR_EL_CLIMA,
        2,
        ACCION_ACTIVA,
        false,
        "",
        [FATIGA_6, FATIGA_4,FATIGA_2, FATIGA_1, RADIO_1_KM, RADIO_2_KM, RADIO_5_KM, RADIO_10_KM, RADIO_15_KM, RADIO_20_KM]
    ));
    discCausalidad.addPoder(new PoderPsiquico(
        PSI_PODER_CREAR_ORDEN,
        3,
        ACCION_ACTIVA,
        true,
        "",
        [FATIGA_12, FATIGA_8, FATIGA_6, FATIGA_4, FATIGA_2, RADIO_50_M, RADIO_500_M, RADIO_1_KM, RADIO_2_KM, RADIO_5_KM]
    ));
    discCausalidad.addPoder(new PoderPsiquico(
        PSI_PODER_CONTROLAR_LA_CAUSALIDAD,
        3,
        ACCION_ACTIVA,
        false,
        "",
        [FATIGA_16,FATIGA_12, FATIGA_8, FATIGA_6, FATIGA_4, FATIGA_2, DIF_CIM, DIF_IMP,DIF_INH, DIF_ZEN]
    ));

    disciplinasPsiquicas_set.push(discCausalidad);

}