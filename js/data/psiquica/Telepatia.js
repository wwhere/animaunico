var discTelepatia = new DisciplinaPsiquica(
    DISCIPLINA_TELEPATIA,
    DISCIPLINA_DESCRIPCION_TELEPATIA
);

discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_ESCANEO_ZONA,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"100 RP / 10 metros de radio","120 RP / 50 metros de radio","140 RP / 100 metros de radio","160 RP / 250 metros de radio","180 RP / 500 metros de radio","200 RP / 1 kilómetro de radio","220 RP / 10 kilómetros de radio","260 RP / 100 kilómetros de radio"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_LECTURA_MENTAL,
    "1",
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP","240 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_ILUSION_PSIQUICA,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"80 RP","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_ESCUDO_PSIQUICO,
    1,
    ACCION_PASIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"+10 RP","+30 RP","+50 RP","+80 RP","+120 RP","+160 RP","+200 RP","+240 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_COMUNICACION_MENTAL,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"100 metros","500 metros","1 kilómetro","10 kilómetros","100 kilómetros","1.000 kilómetros","5.000 kilómetros","Cualquier distancia"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_PROHIBICION_MENTAL,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_4,FATIGA_2,"80 RP","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_ANALISIS_MENTAL,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_6,FATIGA_4,FATIGA_2,"100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","240 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_CONEXION_PSIQUICA,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_6,FATIGA_4,FATIGA_2,"100 metros de radio","500 metros de radio",RADIO_1_KM,RADIO_10_KM,RADIO_100_KM,"1.000 kilómetros de radio","Cualquier distancia"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_MODIFICACION_RECUERDOS,
    2,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_8,FATIGA_6,FATIGA_4,FATIGA_2,"100 RP","120 RP","140 RP","160 RP","180 RP","200 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_FORMA_ASTRAL,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_8,FATIGA_6,FATIGA_4,FATIGA_2,"Hasta 10 kilómetros de radio","Hasta 100 kilómetros de radio","Hasta 500 kilómetros de radio","Hasta 1.000 kilómetros de radio","Hasta 5.000 kilómetros de radio","Cualquier distancia"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_ASALTO_PSIQUICO,
    2,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_8,FATIGA_4,FATIGA_2,"120 RP","140 RP","160 RP","180 RP","200 RP","220 RP","260 RP"]
));

discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_LOCALIZACION_PSIQUICA,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_8,FATIGA_6,FATIGA_4,FATIGA_2,"Hasta 10 kilómetros de radio 140 RP","Hasta 100 kilómetros de radio 160 RP","Hasta 500 kilómetros de radio 180 RP","Hasta 1.000 kilómetros de radio 200 RP","Hasta 5.000 kilómetros de radio 220 RP","Cualquier distancia 260 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_CONTROL_MENTAL,
    3,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4,"100 RP","120 RP","140 RP","160 RP","180 RP","220 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_MUERTE_PSIQUICA,
    3,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4,"140 RP","160 RP","180 RP","220 RP","240 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    PSI_PODER_TELEPATIA_AREA,
    3,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_4,"10 metros de radio","100 metros de radio",RADIO_1_KM,RADIO_10_KM,RADIO_100_KM,"500 kilómetros de radio"]
));

disciplinasPsiquicas_set.push(discTelepatia);