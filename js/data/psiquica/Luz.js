if (ARCANA_EXXET_ENABLED) {

    var discLuz = new DisciplinaPsiquica(
        DISCIPLINA_LUZ,
        DISCIPLINA_DESCRIPCION_LUZ
    );



    discLuz.addPoder(new PoderPsiquico(
        PSI_PODER_MANIPULAR_LA_LUZ,
        1,
        ACCION_ACTIVA,
        true,
        "",
        [ FATIGA_4, FATIGA_2, FATIGA_1, DIF_DIF, DIF_MDF, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discLuz.addPoder(new PoderPsiquico(
        PSI_PODER_CREAR_LUZ,
        1,
        ACCION_ACTIVA,
        true,
        "",
        [ FATIGA_2, FATIGA_1, DIF_MED, DIF_DIF, DIF_MDF, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discLuz.addPoder(new PoderPsiquico(
        PSI_PODER_FLASH_DE_LUZ,
        1,
        ACCION_ACTIVA,
        false,
        "",
        [ FATIGA_2, FATIGA_1, DIF_MED, DIF_DIF, DIF_MDF, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discLuz.addPoder(new PoderPsiquico(
        PSI_PODER_PANTALLA_DE_LUZ,
        2,
        ACCION_PASIVA,
        true,
        "",
        [ FATIGA_6, FATIGA_4, FATIGA_2, FATIGA_1, DIF_MDF, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discLuz.addPoder(new PoderPsiquico(
        PSI_PODER_HOLOGRAMA,
        2,
        ACCION_ACTIVA,
        true,
        "",
        [ FATIGA_8, FATIGA_6, FATIGA_4, FATIGA_2, FATIGA_1, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discLuz.addPoder(new PoderPsiquico(
        PSI_PODER_LASER,
        3,
        ACCION_ACTIVA,
        false,
        "",
        [ FATIGA_16, FATIGA_12, FATIGA_8, FATIGA_6, FATIGA_4, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));


    disciplinasPsiquicas_set.push(discLuz);

}