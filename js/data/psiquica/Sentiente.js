var DISCIPLINA_SENTIENTE = "Sentiente";
var DISCIPLINA_DESCRIPCION_SENTIENTE = "";

var discSentiente = new DisciplinaPsiquica(
    DISCIPLINA_SENTIENTE,
    DISCIPLINA_DESCRIPCION_SENTIENTE
);

discSentiente.addPoder(new PoderPsiquico(
    "Percibir sentimientos",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP","240 RP"]
));
discSentiente.addPoder(new PoderPsiquico(
    "Detectar sentimientos",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","80 RP / 10 metros de radio","100 RP / 50 metros de radio","120 RP / 100 metros de radio","140 RP / 250 metros de radio","160 RP / 500 metros de radio","180 RP / 1 kilómetro de radio","200 RP / 10 kilómetros de radio","220 RP / 100 kilómetros de radio"]
));
discSentiente.addPoder(new PoderPsiquico(
    "Conectar sentidos",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","60 RP / 10 metros de radio","80 RP / 100 metros de radio","100 RP / 500 metros de radio","120 RP / 1 kilómetro de radio","140 RP / 10 kilómetros de radio","160 RP / 100 kilómetros de radio","180 RP / 1.000 kilómetros de radio","200 RP / cualquier distancia"]
));
discSentiente.addPoder(new PoderPsiquico(
    "Intensificar sentimientos",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP","240 RP"]
));
discSentiente.addPoder(new PoderPsiquico(
    "Eliminar sentidos",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","100 RP","120 RP","140 RP","160 RP","180 RP","220 RP"]
));
discSentiente.addPoder(new PoderPsiquico(
    "Crear sentimientos",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 4","Fatiga 2","80 RP","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP"]
));
discSentiente.addPoder(new PoderPsiquico(
    "Cargar con sentimientos",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","100 RP / área de 5 metros","120 RP / área de 10 metros","140 RP / área de 25 metros","160 RP / área de 50 metros","180 RP / área de 100 metros","220 RP / área de 500 metros"]
));
discSentiente.addPoder(new PoderPsiquico(
    "Trasladar los sentidos",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","1 kilómetro de radio","10 kilómetros de radio","100 kilómetros de radio","500 kilómetros de radio","1.000 kilómetros de radio","Cualquier distancia"]
));
discSentiente.addPoder(new PoderPsiquico(
    "Área",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 4","10 metros de radio","100 metros de radio","1 kilómetro de radio","10 kilómetros de radio","100 kilómetros de radio","500 kilómetros de radio"]
));
discSentiente.addPoder(new PoderPsiquico(
    "Destruir sentimientos",
    3,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","120 RP","140 RP","160 RP","180 RP","200 RP"]
));

disciplinasPsiquicas_set.push(discSentiente);
