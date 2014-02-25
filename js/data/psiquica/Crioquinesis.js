var DISCIPLINA_CRIOQUINESIS = "Crioquinesis";
var DISCIPLINA_DESCRIPCION_CRIOQUINESIS = "";


var discCrioquinesis = new DisciplinaPsiquica(
    DISCIPLINA_CRIOQUINESIS,
    DISCIPLINA_DESCRIPCION_CRIOQUINESIS
);

discCrioquinesis.addPoder(new PoderPsiquico(
    "Percibir temperatura",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 4","Fatiga 2","Fatiga 1","10 metros de radio","50 metros de radio","100 metros de radio","500 metros de radio","1 kilómetro de radio","10 kilómetros de radio","100 kilómetros de radio"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Congelar",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","80 RF","100 RF","120 RF","140 RF","160 RF","180 RF","220 RF"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Crear frío",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 1","1 intensidad","3 intensidades","5 intensidades","7 intensidades","10 intensidades","13 intensidades","16 intensidades","20 intensidades","25 intensidades"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Eliminar el frío",
    1,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 1","-1 intensidad / 80 RF","-3 intensidades / 100 RF","-5 intensidades / 120 RF","-7 intensidades / 140 RF","-10 intensidades / 160 RF","-15 intensidades / 180 RF","-20 intensidades / 200 RF","-30 intensidades / 220 RF","-40 intensidades / 260 RF"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Control sobre el frío",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","4 intensidades / 80 RF","6 intensidades / 100 RF","8 intensidades / 120 RF","12 intensidades / 140 RF","16 intensidades / 160 RF","20 intensidades / 180 RF","25 intensidades / 200 RF","30 intensidades / 240 RF"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Esquirlas de hielo",
    2,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","Fatiga 1","Daño base 80","Daño base 100","Daño base 120","Daño base 160 / Área de 5 metros","Daño base 200 / Área de 25 metros"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Disminuir la temperatura ambiental",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","Fatiga 1","-5º / 1 kilómetro de radio","-10º / 5 kilómetros de radio","-15º / 10 kilómetros de radio","-20º / 25 kilómetros de radio","-30º / 50 kilómetros de radio","-40º / 100 kilómetros de radio"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Escudo de hielo",
    2,
    ACCION_PASIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","600 PV","800 PV","1.200 PV","1.800 PV","2.500 PV","4.000 PV","6.000 PV"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Cristalizar",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","120 RF","140 RF","160 RF","180 RF","220 RF"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Un instante eterno",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","120 RF / 5 metros de radio","140 RF / 10 metros de radio","160 RF / 20 metros de radio","180 RF / 50 metros de radio","200 RF / 100 metros de radio"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Cero absoluto",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","5 metros de radio","10 metros de radio","20 metros de radio","50 metros de radio","100 metros de radio"]
));
discCrioquinesis.addPoder(new PoderPsiquico(
    "Frío mayor",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 20","Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","30 intensidades","40 intensidades","50 intensidades","60 intensidades"]
));

disciplinasPsiquicas_set.push(discCrioquinesis);

if (CUMPLEMENTO_WEB_1_ENABLED) {
    discCrioquinesis.addPoder(new PoderPsiquico(
        "Inmunidad al frío",
        2,
        ACCION_PASIVA,
        true,
        "Permite al psíquico, o al individuo designado por este, ser inmune al efecto de varias intensidades de frío, incluso si se trata de uno de carácter sobrenatural. En el caso de que se reciba un ataque basado en dicho elemento, cada intensidad a la que es inmune disminuye 5 puntos el daño base del ataque, y aumenta en +5 las Resistencias contra sus efectos.",
        ["Fatiga 4","Fatiga 2","Fatiga 1","5 intensidades","10 intensidades","15 intensidades","20 intensidades","30 intensidades","40 intensidades","50 intensidades"]
    ));
};