
var discTelemetria = new DisciplinaPsiquica(
    DISCIPLINA_TELEMETRIA,
    DISCIPLINA_DESCRIPCION_TELEMETRIA
);

discTelemetria.addPoder(new PoderPsiquico(
    PSI_PODER_PERCIBIR_RESIDUOS,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_1,"Una hora","Seis horas","Un día","Tres días","Una semana","Un mes","Un año","Una década","Un siglo"]
));
discTelemetria.addPoder(new PoderPsiquico(
    PSI_PODER_LEER_PASADO,
    2,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_8,FATIGA_6,FATIGA_4,FATIGA_2,"Una hora","Seis horas","Un día","Una semana","Un mes","Un año"]
));
discTelemetria.addPoder(new PoderPsiquico(
    PSI_PODER_ERUDICION_HUMANA,
    2,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_6,FATIGA_4,FATIGA_2,"Un día / 80 RP","Una semana / 100 RP","Un mes / 120 RP","Un año / 140 RP","Diez años / 160 RP","Cincuenta años / 180 RP","Toda su vida / 200 RP"]
));
discTelemetria.addPoder(new PoderPsiquico(
    PSI_PODER_VER_HISTORIA,
    3,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4,"Un año","Diez años","Un siglo","Un milenio","Cualquier periodo de tiempo"]
));

disciplinasPsiquicas_set.push(discTelemetria);
