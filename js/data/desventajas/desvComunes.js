addDesventaja(new Ventaja(
    "Reducir dos puntos a una característica",
    "",
    "Reduce en dos puntos una de las características básicas. Limitación: Esta desventaja sólo puede adquirirse en una ocasión. No es posible disminuir una característica por debajo de 3.",
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_CARACTERISTICAS],
    [restarDosAUnaCaracteristica],
    GRUPO_CARACTERISTICAS,
    []
));
addDesventaja(new Ventaja(
    "Salud enfermiza",
    "",
    "La RE del personaje queda reducida a la mitad.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [saludEnfermiza],
    GRUPO_RESISTENCIAS,
    []
));
addDesventaja(new Ventaja(
    "Lenta curación",
    "",
    "El personaje recupera sólo la mitad de puntos de vida de cualquier cantidad que debiera recobrar, ya sea mediante regeneración normal o medios místicos.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Miopía",
    "",
    "Aplicará un negativo de –50 a cualquier tirada de la habilidad Advertir o Buscar en la que se emplee la vista y un –3 a cualquier control de Percepción que la requiera. Este penalizador también se aplicará a la puntería. Si consigue unas gafas, el negativo penalizador se reduciría como el Director de Juego considere conveniente.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Vulnerabilidad a los venenos",
    "",
    "La RV del personaje queda reducida a la mitad.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [vulnerabilidadVenenos],
    GRUPO_RESISTENCIAS,
    []
));
addDesventaja(new Ventaja(
    "Fácil posesión",
    "",
    "El personaje aplica un negativo de –50 a cualquier RP o RM que realice contra algún tipo de dominio o posesión capaz de modificar su conducta.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_RESISTENCIAS,
    []
));
addDesventaja(new Ventaja(
    "Vulnerabilidad a la magia",
    "",
    "La RM del personaje queda reducida a la mitad.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [vulnerabilidadMagia],
    GRUPO_RESISTENCIAS,
    []
));
addDesventaja(new Ventaja(
    "Vulnerable al frío",
    "",
    "El personaje sufre un penalizador de –80 a cualquier Resistencia contra ese elemento y un –30 a toda acción en climas extremos.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Vulnerable al calor",
    "",
    "El personaje sufre un penalizador de –80 a cualquier Resistencia contra ese elemento y un –30 a toda acción en climas extremos.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Extremidad atrofiada",
    "",
    "El personaje aplica un penalizador de –80 a todas las acciones físicas que requieran el uso del miembro atrofiado.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Debilidad física",
    "",
    "La RF del personaje queda reducida a la mitad.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [debilidadFisica],
    GRUPO_RESISTENCIAS,
    []
));
addDesventaja(new Ventaja(
    "Aspecto desagradable",
    "",
    "Reduce la apariencia del personaje a 2. Limitación: El personaje tiene que tener como mínimo un 7 en apariencia. Esta característica debe de haber sido generada mediante una tirada, no elegida libremente por el jugador.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [aspectoDesagradable],
    GRUPO_OTRAS,
    [FLAG_APARIENCIA_ALEATORIA,FLAG_APARIENCIA_MINIMA_7]
));
addDesventaja(new Ventaja(
    "Desafortunado",
    "",
    "El Director de Juego deberá interpretar el alcance de esta desventaja. En un grupo, alguien desafortunado será siempre el que caiga en la trampa aleatoria y el primero al que ataquen cuando el azar decida quién recibe el primer impacto.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Enfermedad grave",
    "",
    "El personaje aplicará un penalizador acumulativo de –10 a toda acción por cada mes que transcurra. El Director de Juego determinará una fecha en secreto, llegada la cual morirá.",
    NO_REPETIBLE,
    [-2],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Alergia grave",
    "",
    "Los negativos a toda acción por entrar en contacto con dicha sustancia variarán entre un –40 y un –80, dependiendo de la gravedad o del tiempo que se haya permanecido en contacto con dicho elemento.",
    REPETIBLE_OPCIONES,
    [-1],
    [],
    true,
    [LISTA_INTRODUCCION_USUARIO],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Sueño profundo",
    "",
    "El personaje aplicará un penalizador de –200 a cualquier tirada de percepción mientras duerme. Durante los diez asaltos posteriores a su despertar, aplicará un penalizador de –40 a toda acción.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Fobia grave",
    "",
    "El personaje aplicará el estado de miedo siempre que se encuentre con el objeto de su fobia.",
    REPETIBLE_OPCIONES,
    [-1],
    [],
    true,
    [LISTA_INTRODUCCION_USUARIO],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Mala suerte",
    "",
    "La cifra requerida para pifiar aumenta en dos puntos. En las habilidades normales pifiará con un resultado de 5 y, si es maestro, lo hará con 4.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Mudo",
    "",
    "El personaje no puede hablar.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Ciego",
    "",
    "El personaje no podrá usar ninguna habilidad que requiera ver. Aplicará en todo momento el penalizador de cegado.",
    NO_REPETIBLE,
    [-2],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Sordo",
    "",
    "El personaje no podrá emplear ninguna habilidad que requiera el uso del oído.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Aprendizaje lento",
    "",
    "El personaje tiene un penalizador de 4 puntos de experiencia a los otorgados por el Director de Juego al finalizar la sesión. El punto de desventaja adicional aumenta este penalizador a 8.",
    NO_REPETIBLE,
    [-1,-2],
    [],
    true,
    [],
    [],
    GRUPO_CAPACIDADES,
    []
));
addDesventaja(new Ventaja(
    "Reacción lenta",
    "",
    "El personaje aplicará un penalizador especial de –30 a su turno. El punto de desventaja adicional aumenta este negativo hasta –60.",
    NO_REPETIBLE,
    [-1,-2],
    [],
    true,
    [],
    [reaccionLenta],
    GRUPO_CAPACIDADES,
    []
));
addDesventaja(new Ventaja(
    "Arma exclusiva",
    "",
    "El personaje aplicará un penalizador de –30 a su habilidad de combate con cualquier arma distinta a la suya. Limitación: Esta desventaja sólo puede ser adquirida por los arquetipos de Luchador, Acechador, Domine o Sin Categoría.",
    NO_REPETIBLE, //TODO SOLO ARQUETIPOS INDICADOS
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Adicción o vicio grave",
    "",
    "El personaje aplicará un penalizador acumulativo de –10 por cada día que transcurra sin satisfacer su vicio.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [LISTA_INTRODUCCION_USUARIO],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Vulnerable al dolor",
    "",
    "Dobla cualquier penalizador causado por el dolor, ya sea producido por críticos o efectos místicos.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    "Exhausto",
    "",
    "Dobla los penalizadores a la acción provocados por la fatiga y resta un punto el Cansancio base del personaje.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [exhausto],
    GRUPO_CAPACIDADES,
    []
));

//region Pantalla del Director

addDesventaja(new Ventaja(
    "Endeble",
    "",
    "Cuando los pv bajan por debajo de un tercio del total sufre un -30 a toda acción hasta recuperarse.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_CAPACIDADES,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    "Cobardía",
    "",
    "Al encontrarse con un riesgo real, sufre el estado de Miedo. Si supera un control MDF de Frialdad puede reducir el penalizador a -20.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    "Patoso",
    "",
    "Sufre un penalizador de -30 a toda habilidad manual que requiera coordinación y un -3 a todos los controles enfrentados de DES.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    "Sin bonificador natural",
    "",
    "No aplica el bonificador natural por nivel.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [sinBonificadorNatural],
    GRUPO_SECUNDARIAS,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    "Insufrible",
    "",
    "A interpretar por el DJ.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    "Novato",
    "",
    "Empieza con 100px menos que los demás.",
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [novato],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    "Destino aciago",
    "",
    "No puede obtener tiradas abiertas.",
    NO_REPETIBLE,
    [-2],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));


addDesventaja(new Ventaja(
    "Maldito",
    "",
    "Interpretado por el DJ.",
    REPETIBLE_OPCIONES,
    [-1,-2],
    [],
    true,
    [LISTA_INTRODUCCION_USUARIO],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));
//endregion Pantalla del Director