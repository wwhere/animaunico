var DISCIPLINA_TELEMETRIA = "Telemetría";
var DISCIPLINA_DESCRIPCION_TELEMETRIA = "";

var discTelemetria = new DisciplinaPsiquica(
    DISCIPLINA_TELEMETRIA,
    DISCIPLINA_DESCRIPCION_TELEMETRIA
);

discTelemetria.addPoder(new PoderPsiquico(
    "Percibir residuos",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 1","Una hora","Seis horas","Un día","Tres días","Una semana","Un mes","Un año","Una década","Un siglo"]
));
discTelemetria.addPoder(new PoderPsiquico(
    "Leer el pasado",
    2,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","Fatiga 2","Una hora","Seis horas","Un día","Una semana","Un mes","Un año"]
));
discTelemetria.addPoder(new PoderPsiquico(
    "Erudición humana",
    2,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","Un día / 80 RP","Una semana / 100 RP","Un mes / 120 RP","Un año / 140 RP","Diez años / 160 RP","Cincuenta años / 180 RP","Toda su vida / 200 RP"]
));
discTelemetria.addPoder(new PoderPsiquico(
    "Ver en la historia",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","Un año","Diez años","Un siglo","Un milenio","Cualquier periodo de tiempo"]
));

disciplinasPsiquicas_set.push(discTelemetria);
