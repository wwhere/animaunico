
var discIncrementoFisico = new DisciplinaPsiquica(
    DISCIPLINA_INCREMENTO_FISICO,
    DISCIPLINA_DESCRIPCION_INCREMENTO_FISICO
);

discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_INCREMENTAR_FUERZA,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_4,FATIGA_2,"+1","+2","+3","+4","+5","+6","+8","+10"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_INCREMENTAR_DESPLAZAMIENTO,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_6,FATIGA_4,FATIGA_2,"+1","+2","+3","+4","+5","+6","+8"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_INCREMENTAR_HABILIDAD,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_4,FATIGA_2,"+1","+2","+3","+4","+5","+6","+8","+10"]
));

discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_INHUMANIDAD,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_4,FATIGA_2, PSI_INHUMANIDAD_EFEC_3, PSI_INHUMANIDAD_EFEC_4, PSI_INHUMANIDAD_EFEC_5, PSI_INHUMANIDAD_EFEC_6, PSI_INHUMANIDAD_EFEC_7, PSI_INHUMANIDAD_EFEC_8, PSI_INHUMANIDAD_EFEC_9, PSI_INHUMANIDAD_EFEC_10]
));

discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_INCREMENTAR_CAPACIDAD_SALTO,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2, PSI_INCREMENTAR_SALTO_EFEC_2, PSI_INCREMENTAR_SALTO_EFEC_3, PSI_INCREMENTAR_SALTO_EFEC_4, PSI_INCREMENTAR_SALTO_EFEC_5, PSI_INCREMENTAR_SALTO_EFEC_6, PSI_INCREMENTAR_SALTO_EFEC_7, PSI_INCREMENTAR_SALTO_EFEC_8, PSI_INCREMENTAR_SALTO_EFEC_9, PSI_INCREMENTAR_SALTO_EFEC_10]
));

discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_INCREMENTAR_SENTIDO_ACROBATICO,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2, PSI_INCREMENTAR_ACROBACIAS_EFEC_2, PSI_INCREMENTAR_ACROBACIAS_EFEC_3, PSI_INCREMENTAR_ACROBACIAS_EFEC_4, PSI_INCREMENTAR_ACROBACIAS_EFEC_5, PSI_INCREMENTAR_ACROBACIAS_EFEC_6, PSI_INCREMENTAR_ACROBACIAS_EFEC_7, PSI_INCREMENTAR_ACROBACIAS_EFEC_8, PSI_INCREMENTAR_ACROBACIAS_EFEC_9, PSI_INCREMENTAR_ACROBACIAS_EFEC_10]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_INCREMENTO_REACCION,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_8,FATIGA_4,FATIGA_2,"+20","+40","+60","+80","+120","+160","+200"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_INCREMENTO_PERCEPCION,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_8,FATIGA_4,FATIGA_2,"+1","+2","+3","+4","+5","+6","+8"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_INCREMENTAR_AGUANTE,
    2,
    ACCION_PASIVA,
    true,
    "",
    [FATIGA_8,FATIGA_4,FATIGA_2,"+10","+20","+40","+80","+120","+160","+200"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_REGENERACION,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_8,FATIGA_6,FATIGA_4,"+1","+2","+4","+6","+8","+10","+12"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_INCREMENTO_TOTAL,
    3,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4,"+1","+2","+4","+6","+8"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_ELIMINACION_CANSANCIO,
    3,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4, PSI_ELIMINAR_CANSANCIO_EFEC_6, PSI_ELIMINAR_CANSANCIO_EFEC_7, PSI_ELIMINAR_CANSANCIO_EFEC_8, PSI_ELIMINAR_CANSANCIO_EFEC_9, PSI_ELIMINAR_CANSANCIO_EFEC_10]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    PSI_PODER_IMBUIR,
    3,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4,DIF_MDF,DIF_ABS,DIF_CIM,DIF_IMP,DIF_INH]
));

disciplinasPsiquicas_set.push(discIncrementoFisico);









