var DISCIPLINA_INCREMENTO_FISICO = "Incremento Físico";
var DISCIPLINA_DESCRIPCION_INCREMENTO_FISICO = "";

var discIncrementoFisico = new DisciplinaPsiquica(
    DISCIPLINA_INCREMENTO_FISICO,
    DISCIPLINA_DESCRIPCION_INCREMENTO_FISICO
);

discIncrementoFisico.addPoder(new PoderPsiquico(
    "Incrementar Fuerza",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 4","Fatiga 2","Fuerza +1","Fuerza +2","Fuerza +3","Fuerza +4","Fuerza +5","Fuerza +6","Fuerza +8","Fuerza +10"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Incrementar desplazamiento",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","Tipo de movimiento +1","Tipo de movimiento +2","Tipo de movimiento +3","Tipo de movimiento +4","Tipo de movimiento +5","Tipo de movimiento +6","Tipo de movimiento +8"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Incrementar habilidad",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 4","Fatiga 2","Destreza o Agilidad +1","Destreza o Agilidad +2","Destreza o Agilidad +3","Destreza o Agilidad +4","Destreza o Agilidad +5","Destreza o Agilidad +6","Destreza o Agilidad +8","Destreza o Agilidad +10"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Inhumanidad",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 4","Fatiga 2","Inhumanidad","Inhumanidad, +5 a las habilidades atléticas","Inhumanidad, +10 a las habilidades atléticas","Inhumanidad, +20 a las habilidades atléticas","Zen, +30 a las habilidades atléticas","Zen, +40 a las habilidades atléticas","Zen, +60 a las habilidades atléticas","Zen, +80 a las habilidades atléticas"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Incrementar capacidad de salto",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","+10 a Saltar","+20 a Saltar","+40 a Saltar","+80 a Saltar","+120 a Saltar / Inhumanidad","+180 a Saltar / Inhumanidad","+220 a Saltar / Inhumanidad","+280 a Saltar / Zen","+320 a Saltar / Zen"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Incrementar el sentido acrobático",
    1,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 2","+10 a Acrobacias","+20 a Acrobacias","+40 a Acrobacias","+80 a Acrobacias","+120 a Acrobacias / Inhumanidad","+180 a Acrobacias / Inhumanidad","+220 a Acrobacias / Inhumanidad","+280 a Acrobacias / Zen","+320 a Acrobacias / Zen"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Incremento de reacción",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 4","Fatiga 2","+20 al turno","+40 al turno","+60 al turno","+80 al turno","+120 al turno","+160 al turno","+200 al turno"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Incremento de Percepción",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 4","Fatiga 2","Percepción +1","Percepción +2","Percepción +3","Percepción +4","Percepción +5","Percepción +6","Percepción +8"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Incrementar aguante",
    2,
    ACCION_PASIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 4","Fatiga 2","+10 a la RF","+20 a la RF","+40 a la RF","+80 a la RF","+120 a la RF","+160 a la RF","+200 a la RF"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Regeneración",
    2,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 8","Fatiga 6","Fatiga 4","+1 nivel de Regeneración","+2 niveles de Regeneración","+4 niveles de Regeneración","+6 niveles de Regeneración","+8 niveles de Regeneración","+10 niveles de Regeneración","+12 niveles de Regeneración"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Incremento total",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","Características físicas +1","Características físicas +2","Características físicas +4","Características físicas +6","Características físicas +8"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Eliminación de cansancio",
    3,
    ACCION_ACTIVA,
    false,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","2 puntos de Cansancio recuperados","4 puntos de Cansancio recuperados","6 puntos de Cansancio recuperados","10 puntos de Cansancio recuperados","Completamente recuperado"]
));
discIncrementoFisico.addPoder(new PoderPsiquico(
    "Imbuir",
    3,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 16","Fatiga 12","Fatiga 8","Fatiga 6","Fatiga 4","Poderes de nivel Muy Difícil","Poderes de nivel Absurdo","Poderes de nivel Casi Imposible","Poderes de nivel Imposible","Poderes de nivel Inhumano"]
));

disciplinasPsiquicas_set.push(discIncrementoFisico);









