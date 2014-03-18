
var discSentiente = new DisciplinaPsiquica(
    DISCIPLINA_SENTIENTE,
    DISCIPLINA_DESCRIPCION_SENTIENTE
);

discSentiente.addPoder(new PoderPsiquico(
    PSI_PODER_PERCIBIR_SENTIMIENTOS,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP","240 RP"]
));
discSentiente.addPoder(new PoderPsiquico(
    PSI_PODER_DETECTAR_SENTIMIENTOS,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"80 RP / 10 metros de radio","100 RP / 50 metros de radio","120 RP / 100 metros de radio","140 RP / 250 metros de radio","160 RP / 500 metros de radio","180 RP / 1 kilómetro de radio","200 RP / 10 kilómetros de radio","220 RP / 100 kilómetros de radio"]
));
discSentiente.addPoder(new PoderPsiquico(
    PSI_PODER_CONECTAR_SENTIDOS,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"60 RP / 10 metros de radio","80 RP / 100 metros de radio","100 RP / 500 metros de radio","120 RP / 1 kilómetro de radio","140 RP / 10 kilómetros de radio","160 RP / 100 kilómetros de radio","180 RP / 1.000 kilómetros de radio","200 RP / cualquier distancia"]
));
discSentiente.addPoder(new PoderPsiquico(
    PSI_PODER_INTENSIFICAR_SENTIMIENTOS,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP","240 RP"]
));
discSentiente.addPoder(new PoderPsiquico(
    PSI_PODER_ELIMINAR_SENTIDOS,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_8,FATIGA_6,FATIGA_4,FATIGA_2,"100 RP","120 RP","140 RP","160 RP","180 RP","220 RP"]
));
discSentiente.addPoder(new PoderPsiquico(
    PSI_PODER_CREAR_SENTIMIENTOS,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_8,FATIGA_4,FATIGA_2,"80 RP","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP"]
));

discSentiente.addPoder(new PoderPsiquico(
    PSI_PODER_CARGAR_CON_SENTIMIENTOS,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_8,FATIGA_6,FATIGA_4,FATIGA_2,"100 RP / área de 5 metros","120 RP / área de 10 metros","140 RP / área de 25 metros","160 RP / área de 50 metros","180 RP / área de 100 metros","220 RP / área de 500 metros"]
));

discSentiente.addPoder(new PoderPsiquico(
    PSI_PODER_TRASLADAR_SENTIDOS,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_8,FATIGA_6,FATIGA_4,FATIGA_2,RADIO_1_KM,RADIO_10_KM,RADIO_100_KM,"500 kilómetros de radio","1.000 kilómetros de radio","Cualquier distancia"]
));
discSentiente.addPoder(new PoderPsiquico(
    PSI_PODER_AREA,
    3,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_4,"10 metros de radio","100 metros de radio",RADIO_1_KM,RADIO_10_KM,RADIO_100_KM,"500 kilómetros de radio"]
));
discSentiente.addPoder(new PoderPsiquico(
    PSI_PODER_DESTRUIR_SENTIMIENTOS,
    3,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4,"120 RP","140 RP","160 RP","180 RP","200 RP"]
));

disciplinasPsiquicas_set.push(discSentiente);
