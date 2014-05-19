if (ARCANA_EXXET_ENABLED) {

    var discHipersensibilidad = new DisciplinaPsiquica(
        DISCIPLINA_HIPERSENSIBILIDAD,
        DISCIPLINA_DESCRIPCION_HIPERSENSIBILIDAD
    );



    discHipersensibilidad.addPoder(new PoderPsiquico(
        PSI_PODER_FILTRAR_SENTIDOS,
        1,
        ACCION_PASIVA,
        true,
        "",
        [ FATIGA_1, DIF_FAC, DIF_MED, DIF_DIF, DIF_MDF, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discHipersensibilidad.addPoder(new PoderPsiquico(
        PSI_PODER_DESPLAZAR_SENTIDOS,
        2,
        ACCION_ACTIVA,
        true,
        "",
        [ FATIGA_4, FATIGA_2, DIF_MED, DIF_DIF, DIF_MDF, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));
    discHipersensibilidad.addPoder(new PoderPsiquico(
        PSI_PODER_SENTIDOS_SUPERIORES,
        3,
        ACCION_ACTIVA,
        true,
        "",
        [ FATIGA_12, FATIGA_10, FATIGA_8, FATIGA_6, FATIGA_4, DIF_ABS, DIF_CIM, DIF_IMP, DIF_INH, DIF_ZEN]
    ));

    disciplinasPsiquicas_set.push(discHipersensibilidad);

}