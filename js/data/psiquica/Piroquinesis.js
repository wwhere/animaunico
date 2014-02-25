var DISCIPLINA_PIROQUINESIS = "Piroquinesis";
var DISCIPLINA_DESCRIPCION_PIROQUINESIS = "";


var discPiroquinesis = new DisciplinaPsiquica(
    DISCIPLINA_PIROQUINESIS,
    DISCIPLINA_DESCRIPCION_PIROQUINESIS
);

discPiroquinesis.addPoder(new PoderPsiquico(
    "Crear fuego",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 1","1 intensidad","3 intensidades","5 Intensidades","7 intensidades","10 intensidades","13 intensidades","16 intensidades","20 intensidades","25 intensidades"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    "Mitigar fuego",
    1,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 1","-1 intensidad / 80 RF","-3 intensidades / 100 RF","-5 intensidades / 120 RF","-7 intensidades / 140 RF","-10 intensidades / 160 RF","-15 intensidades / 180 RF","-20 intensidades / 200 RF","-30 intensidades / 220 RF","-40 intensidades / 260 RF"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    "Controlar el fuego",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","4 intensidades / 80 RF","6 intensidades / 100 RF","8 intensidades / 120 RF","12 intensidades / 140 RF","16 intensidades / 160 RF","20 intensidades / 180 RF","25 intensidades / 200 RF","30 intensidades / 240 RF"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    "Inmolar",
    1,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 4","Fatiga 2","Fatiga 1","Daño 60 / 5 metros de radio","Daño 80 / 10 metros de radio","Daño 100 / 20 metros de radio","Daño 120 / 30 metros de radio","Daño 150 / 50 metros de radio","Daño 200 / 100 metros de radio","Daño 250 / 200 metros de radio"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    "Mantenimiento ígneo",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 4","Fatiga 2","Fatiga 1","5 intensidades","10 intensidades","15 intensidades","20 intensidades","30 intensidades","40 intensidades","50 intensidades"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    "Inmunidad al fuego",
    2,
    ACCION_PASIVA,
    true,
    "",
    ["Fatiga 4","Fatiga 2","Fatiga 1","5 intensidades","10 intensidades","15 intensidades","20 intensidades","30 intensidades","40 intensidades","50 intensidades"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    "Barrera ígnea",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","Fatiga 1","Daño base 60 / 5 metros de longitud","Daño base 80 / 10 metros de longitud","Daño base 120 / 20 metros de longitud","Daño base 160 / 30 metros de longitud","Daño base 200 / 40 metros de longitud","Daño base 240 / 50 metros de longitud"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    "Aumentar temperatura ambiental",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","Fatiga 1","+5ºC / 1 kilómetro de radio","+10ºC / 5 kilómetros de radio","+15ºC / 10 kilómetros de radio","+20ºC / 25 kilómetros de radio","+30ºC / 50 kilómetros de radio","+40ºC / 100 kilómetros de radio"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    "Consumir",
    3,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","120 RF / Daño automático de 80","140 RF / Daño automático de 120","160 RF / Daño automático de 160","180 RF / Daño automático de 200","220 RF / Daño automático de 250"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    "Nova",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","10 puntos de vida","20 puntos de vida","30 puntos de vida","40 puntos de vida","60 puntos de vida","80 puntos de vida","120 puntos de vida"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    "Fuego mayor",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 20","Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","30 intensidades","40 intensidades","50 intensidades","60 intensidades"]
));

disciplinasPsiquicas_set.push(discPiroquinesis);
