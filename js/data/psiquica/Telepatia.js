var DISCIPLINA_TELEPATIA = "Telepatía";
var DISCIPLINA_DESCRIPCION_TELEPATIA = "";

var discTelepatia = new DisciplinaPsiquica(
    DISCIPLINA_TELEPATIA,
    DISCIPLINA_DESCRIPCION_TELEPATIA
);

discTelepatia.addPoder(new PoderPsiquico(
    "Escaneo de zona",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","100 RP / 10 metros de radio","120 RP / 50 metros de radio","140 RP / 100 metros de radio","160 RP / 250 metros de radio","180 RP / 500 metros de radio","200 RP / 1 kilómetro de radio","220 RP / 10 kilómetros de radio","260 RP / 100 kilómetros de radio"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Lectura mental",
    "1",
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP","240 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Ilusión psíquica",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","80 RP","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Escudo psíquico",
    1,
    ACCION_PASIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","+10 RP","+30 RP","+50 RP","+80 RP","+120 RP","+160 RP","+200 RP","+240 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Comunicación mental",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","100 metros","500 metros","1 kilómetro","10 kilómetros","100 kilómetros","1.000 kilómetros","5.000 kilómetros","Cualquier distancia"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Prohibición mental",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 4","Fatiga 2","80 RP","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Análisis mental",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP","240 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Conexión psíquica",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","100 metros de radio","500 metros de radio","1 kilómetro de radio","10 kilómetros de radio","100 kilómetros de radio","1.000 kilómetros de radio","Cualquier distancia"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Modificación de recuerdos",
    2,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","100 RP","120 RP","140 RP","160 RP","180 RP","200 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Forma astral",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","Hasta 10 kilómetros de radio","Hasta 100 kilómetros de radio","Hasta 500 kilómetros de radio","Hasta 1.000 kilómetros de radio","Hasta 5.000 kilómetros de radio","Cualquier distancia"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Asalto psíquico",
    2,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 8","Fatiga 4","Fatiga 2","120 RP","140 RP","160 RP","180 RP","200 RP","220 RP","260 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Localización psíquica",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","Hasta 10 kilómetros de radio 140 RP","Hasta 100 kilómetros de radio 160 RP","Hasta 500 kilómetros de radio 180 RP","Hasta 1.000 kilómetros de radio 200 RP","Hasta 5.000 kilómetros de radio 220 RP","Cualquier distancia 260 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Control mental",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","100 RP","120 RP","140 RP","160 RP","180 RP","220 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Muerte psíquica",
    3,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","140 RP","160 RP","180 RP","220 RP","240 RP"]
));
discTelepatia.addPoder(new PoderPsiquico(
    "Área",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 4","10 metros de radio","100 metros de radio","1 kilómetro de radio","10 kilómetros de radio","100 kilómetros de radio","500 kilómetros de radio"]
));

disciplinasPsiquicas_set.push(discTelepatia);