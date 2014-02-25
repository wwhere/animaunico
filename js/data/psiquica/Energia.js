var DISCIPLINA_ENERGIA = "Energía";
var DISCIPLINA_DESCRIPCION_ENERGIA = "";

var discEnergia = new DisciplinaPsiquica(
    DISCIPLINA_ENERGIA,
    DISCIPLINA_DESCRIPCION_ENERGIA
);

discEnergia.addPoder(new PoderPsiquico(
    "Crear energía",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","1 intensidad","3 intensidades","5 intensidades","7 intensidades","10 intensidades","13 intensidades","16 intensidades","20 intensidades"]
));
discEnergia.addPoder(new PoderPsiquico(
    "Percibir energía",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","10 metros de radio","50 metros de radio","100 metros de radio","250 metros de radio","500 metros de radio","1 kilómetro de radio","10 kilómetros de radio","100 kilómetros de radio"]
));
discEnergia.addPoder(new PoderPsiquico(
    "Creación de energía",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 4","Fatiga 2","Fatiga 1","1 metro cúbico","2 metros cúbicos","3 metros cúbicos","4 metros cúbicos","5 metros cúbicos","10 metros cúbicos","20 metros cúbicos"]
));
discEnergia.addPoder(new PoderPsiquico(
    "Descarga de energía",
    1,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 4","Fatiga 2","Fatiga 1","Daño 50","Daño 70","Daño 100","Daño 120","Daño 140 / Afecta a seres inmateriales","Daño 180 / Afecta a seres inmateriales","Daño 220 / Afecta a seres inmateriales"]
));
discEnergia.addPoder(new PoderPsiquico(
    "Escudo de energía",
    1,
    ACCION_PASIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","300 PV","500 PV","800 PV","1.000 PV","1.400 PV","2.000 PV","3.000 PV"]
));
discEnergia.addPoder(new PoderPsiquico(
    "Deshacer energía",
    2,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","-1 intensidad / 100 RF","-3 intensidades / 120 RF","-5 intensidades / 140 RF","-8 intensidades / 160 RF","-12 intensidades / 180 RF","-18 intensidades / 200 RF","-24 intensidades / 240 RF"]
));
discEnergia.addPoder(new PoderPsiquico(
    "Inmunidad",
    2,
    ACCION_PASIVA,
    true,
    "",
    ["Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","10 intensidades","15 intensidades","20 intensidades","30 intensidades","40 intensidades"]
));
discEnergia.addPoder(new PoderPsiquico(
    "Controlar energía",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","4 intensidades / 80 RF","6 intensidades / 100 RF","8 intensidades / 120 RF","12 intensidades / 140 RF","16 intensidades / 160 RF","20 intensidades / 180 RF","25 intensidades / 220 RF"]
));
discEnergia.addPoder(new PoderPsiquico(
    "Modificar naturaleza",
    2,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","6 intensidades / 100 RF","8 intensidades / 120 RF","12 intensidades / 140 RF","16 intensidades / 160 RF","20 intensidades / 180 RF","25 intensidades / 220 RF"]
));
discEnergia.addPoder(new PoderPsiquico(
    "Cúpula de energía",
    3,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","Daño 100 / 25 metros de radio","Daño 120 / 50 metros de radio","Daño 140 / 100 metros de radio","Daño 160 / 200 metros de radio Puede dañar a seres inmateriales","Daño 200 / 500 metros de radio Puede dañar a seres inmateriales"]
));
discEnergia.addPoder(new PoderPsiquico(
    "Energía mayor",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 20","Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","25 intensidades","35 intensidades","45 intensidades","55 intensidades"]
));

disciplinasPsiquicas_set.push(discEnergia);
