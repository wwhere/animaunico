var DISCIPLINA_PODERES_MATRICIALES = "Poderes Matriciales";
var DISCIPLINA_DESCRIPCION_PODERES_MATRICIALES = "";

var discPoderesMatriciales = new DisciplinaPsiquica(
    DISCIPLINA_PODERES_MATRICIALES,
    DISCIPLINA_DESCRIPCION_PODERES_MATRICIALES
);

discPoderesMatriciales.libre = true;

discPoderesMatriciales.addPoder(new PoderPsiquico(
    "Sentir matrices",
    0,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 1","10 metros de radio. Permite ver matrices psíquicas activas","25 metros de radio. Detecta poderes latentes en las personas","50 metros de radio / Permite reconocer el poder que se esté utilizando","100 metros de radio","250 metros de radio / Nota las disciplinas a las que es afín un psíquico","500 metros de radio. Mide el potencial de otro psíquico","1 kilómetro de radio / Detecta los CV libres que le quedan a otro psíquico","5 kilómetros de radio. Nota los poderes que posee otro psíquico","100 kilómetros de radio"]
));
discPoderesMatriciales.addPoder(new PoderPsiquico(
    "Destruir matrices",
    0,
    ACCION_PASIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","Poderes de nivel Medio","Poderes de nivel Difícil","Poderes de nivel Muy Difícil","Poderes de nivel Absurdo","Poderes de nivel Casi Imposible","Poderes de nivel Imposible","Poderes de nivel Inhumano"]
));
discPoderesMatriciales.addPoder(new PoderPsiquico(
    "Ocultar matrices",
    0,
    ACCION_PASIVA,
    true,
    "",
    ["Fatiga 2","Fatiga 1","-2 grados de dificultad","-3 grados de dificultad","-4 grados de dificultad","-5 grados de dificultad","-6 grados de dificultad","-7 grados de dificultad","-8 grados de dificultad","-9 grados de dificultad"]
));
discPoderesMatriciales.addPoder(new PoderPsiquico(
    "Conectar matrices",
    0,
    ACCION_ACTIVA,
    true,
    "",
    ["Fatiga 6","Fatiga 4","Fatiga 2","2 individuos","3 individuos","4 individuos","6 individuos","8 individuos","10 individuos","20 individuos"]
));

disciplinasPsiquicas_set.push(discPoderesMatriciales);
