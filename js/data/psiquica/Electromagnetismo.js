if (ARCANA_EXXET_ENABLED) {

    var discElectromagnetismo = new DisciplinaPsiquica(
        DISCIPLINA_ELECTROMAGNETISMO,
        DISCIPLINA_DESCRIPCION_ELECTROMAGNETISMO
    );



    discElectromagnetismo.addPoder(new PoderPsiquico(
        PSI_PODER_PERCIBIR_ELECTRICIDAD,
        1,
        ACCION_ACTIVA,
        false,
        "",
        [ FATIGA_4, FATIGA_2, FATIGA_1, RADIO_10_M, RADIO_25_M, RADIO_50_M, RADIO_100_M, RADIO_500_M, RADIO_1_KM, RADIO_5_KM]
    ));
    discElectromagnetismo.addPoder(new PoderPsiquico(
        PSI_PODER_CREAR_ELECTRICIDAD,
        1,
        ACCION_ACTIVA,
        true,
        "",
        [ FATIGA_2, FATIGA_1,INTENSIDAD_1, INTENSIDAD_3, INTENSIDAD_5, INTENSIDAD_7, INTENSIDAD_10, INTENSIDAD_13, INTENSIDAD_16, INTENSIDAD_20]
    ));
    discElectromagnetismo.addPoder(new PoderPsiquico(
        PSI_PODER_CONTROLAR_ELECTRICIDAD,
        1,
        ACCION_ACTIVA,
        true,
        "",
        [FATIGA_2, FATIGA_1,INTENSIDAD_4_RF_80, INTENSIDAD_6_RF_100, INTENSIDAD_8_RF_120, INTENSIDAD_12_RF_140, INTENSIDAD_16_RF_160, INTENSIDAD_20_RF_180, INTENSIDAD_25_RF_200, INTENSIDAD_30_RF_240]
    ));
    discElectromagnetismo.addPoder(new PoderPsiquico(
        PSI_PODER_MANIPULACION_MAGNETICA,
        1,
        ACCION_ACTIVA,
        true,
        "",
        [FATIGA_4, FATIGA_2, FATIGA_1, DIF_DIF, DIF_MDF, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discElectromagnetismo.addPoder(new PoderPsiquico(
        PSI_PODER_ESCUDO_MAGNETICO,
        2,
        ACCION_PASIVA,
        true,
        "",
        [FATIGA_4,FATIGA_2, FATIGA_1, PV_600, PV_800, PV_1200, PV_1800, PV_2500,PV_4000, PV_6000]
    ));
    discElectromagnetismo.addPoder(new PoderPsiquico(
        PSI_PODER_LEER_IMPULSOS_MAGNETICOS,
        2,
        ACCION_ACTIVA,
        true,
        "",
        [FATIGA_4,FATIGA_2, FATIGA_1, RADIO_10_M, RADIO_25_M, RADIO_50_M, RADIO_100_M, RADIO_150_M,RADIO_250_M, RADIO_1_KM]
    ));
    discElectromagnetismo.addPoder(new PoderPsiquico(
        PSI_PODER_ARCO_ELECTRICO,
        2,
        ACCION_ACTIVA,
        false,
        "",
        [FATIGA_4,FATIGA_2, FATIGA_1, DAÑO_60, DAÑO_80, DAÑO_120, DAÑO_140, DAÑO_160,DAÑO_180, DAÑO_200]
    ));
    discElectromagnetismo.addPoder(new PoderPsiquico(
        PSI_PODER_ATAQUE_DE_ACELERACION_MAGNETICA,
        3,
        ACCION_ACTIVA,
        false,
        "",
        [FATIGA_12,FATIGA_10, FATIGA_8, FATIGA_6, FATIGA_4, FATIGA_2, DIF_CIM, DIF_IMP,DIF_INH, DIF_ZEN]
    ));
    discElectromagnetismo.addPoder(new PoderPsiquico(
        PSI_PODER_CONTROLAR_IMPULSOS_ELECTRICOS,
        3,
        ACCION_ACTIVA,
        false,
        "",
        [FATIGA_12,FATIGA_10, FATIGA_8, FATIGA_6, FATIGA_4, FATIGA_2, DIF_CIM, DIF_IMP,DIF_INH, DIF_ZEN]
    ));

    disciplinasPsiquicas_set.push(discElectromagnetismo);

}