//region Core Exxet
addVentaja(new Ventaja(
    "Repetir una tirada de características",
    "",
    "Te permite lanzar un dado adicional una vez que has generado las características de tu personaje, y utilizar el resultado obtenido en lugar de uno de los anteriores. La nueva cifra no podrá ser inferior al valor de tu tirada más baja.",
    REPETIBLE_TOTAL,   //getRepetible
    [1],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [repetirUnaTirada],
    GRUPO_CARACTERISTICAS,
    []
));
addVentaja(new Ventaja(
    "Sumar un punto a una característica",
    "",
    "Añade un punto al valor de una característica.",
    REPETIBLE_TOTAL,   //repetible
    [1],      //coste
    [],
    true,  //anulable
    [LISTA_CARACTERISTICAS],
    [sumarUnoAUnaCaracteristica],
    GRUPO_CARACTERISTICAS,
    []
));
addVentaja(new Ventaja(
    "Sustituir una característica por un nueve",
    "",
    "Sustituye una característica por un nueve sin importar cuál fuese su valor original.",
    REPETIBLE_TOTAL,   //repetible
    [2],      //coste
    [],
    true,  //anulable
    [LISTA_CARACTERISTICAS],
    [cambiarUnaCaracteristicaPorNueve],
    GRUPO_CARACTERISTICAS
));
addVentaja(new Ventaja(
    "Resistencia física excepcional",
    "",
    "Añade un bonificador especial de +25 a la Resistencia física (RF), Resistencia contra venenos (RV) y Resistencia contra enfermedades (RE). La inversión de un segundo punto de creación aumenta el nivel de las Resistencias a +50.",
    NO_REPETIBLE,   //repetible
    [1,2],      //coste
    [],
    true,  //anulable
    [],
    [resistenciaFisicaExcepcional],
    GRUPO_RESISTENCIAS
));
addVentaja(new Ventaja(
    "Resistencia mágica excepcional",
    "",
    "Añade un bonificador especial de +25 a la Resistencia mágica (RM). La inversión de un segundo punto de creación aumenta el nivel de la Resistencia a +50.",
    NO_REPETIBLE,   //repetible
    [1,2],      //coste
    [],
    true,  //anulable
    [],
    [resistenciaMagicaExcepcional],
    GRUPO_RESISTENCIAS
));
addVentaja(new Ventaja(
    "Resistencia psíquica excepcional",
    "",
    "Esta ventaja añade un bonificador especial de +25 a la Resistencia mental (RP) del personaje. La inversión de un segundo punto de creación aumenta el nivel de la Resistencia a +50.",
    NO_REPETIBLE,   //repetible
    [1,2],      //coste
    [],
    true,  //anulable
    [],
    [resistenciaPsiquicaExcepcional],
    GRUPO_RESISTENCIAS
));
var ventajaTemp = new Ventaja(
    "Acceso a una disciplina psíquica",
    "",
    "Esta ventaja permite utilizar un CV para adquirir afinidad a una única disciplina psíquica y a los poderes matriciales.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [
        new ElementoProhibido(VENTAJA,"Acceso libre a cualquier disciplina psíquica")
    ],    //incompatibles
    true,  //anulable
    [LISTA_DISCIPLINAS_PSIQUICAS],
    [accesoPsiquicoBasico],
    GRUPO_PSIQUICAS
);
ventajaTemp.isBasica = true;
addVentaja(ventajaTemp);
ventajaTemp = new Ventaja(
    "Acceso libre a cualquier disciplina psíquica",
    "",
    "Esta ventaja capacita al personaje a acceder libremente a tantas disciplinas psíquicas como desee empleando sus CV.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [
        new ElementoProhibido(VENTAJA,"Acceso a una disciplina psíquica")
    ],    //incompatibles
    true,  //anulable
    [],
    [accesoPsiquicoCompleto],
    GRUPO_PSIQUICAS
);
ventajaTemp.isBasica = true;
addVentaja(ventajaTemp);

addVentaja(new Ventaja(
    "Fondos iniciales",
    "",
    "Esta ventaja proporciona una cantidad de dinero inicial o equipo valorado en 2.000 Escudos de Oro (MO), 5.000 o 10.000.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [fondosIniciales],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Afinidad animal",
    "",
    "El alcance de esta ventaja debe de ser interpretada por el Director de Juego.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Regeneración básica",
    "",
    "Aumenta dos niveles la Regeneración del personaje.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [
        new ElementoProhibido(VENTAJA,"Regeneración avanzada"),
        new ElementoProhibido(VENTAJA,"Regeneración mayor")
    ],    //incompatibles
    true,  //anulable
    [],
    [aumentaRegeneracion,2,"Regeneración básica"],
    GRUPO_CAPACIDADES
));
addVentaja(new Ventaja(
    "Regeneración avanzada",
    "",
    "Aumenta cuatro niveles la Regeneración del personaje.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [
        new ElementoProhibido(VENTAJA,"Regeneración básica"),
        new ElementoProhibido(VENTAJA,"Regeneración mayor")
    ],    //incompatibles
    true,  //anulable
    [],
    [aumentaRegeneracion,4,"Regeneración avanzada"],
    GRUPO_CAPACIDADES
));
addVentaja(new Ventaja(
    "Regeneración mayor",
    "",
    "Aumenta seis niveles la Regeneración del personaje.",
    NO_REPETIBLE,   //repetible
    [3],      //coste
    [
        new ElementoProhibido(VENTAJA,"Regeneración básica"),
        new ElementoProhibido(VENTAJA,"Regeneración avanzada")
    ],    //incompatibles
    true,  //anulable
    [],
    [aumentaRegeneracion,6,"Regeneración mayor"],
    GRUPO_CAPACIDADES
));
addVentaja(new Ventaja(
    "Encanto",
    "",
    "El alcance de esta ventaja debe de ser interpretada por el Director de Juego.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Ambidestria",
    "",
    "Un personaje ambidiestro podrá efectuar maniobras con cualquier mano con idéntica habilidad. En combate, permite reducir a –10 los ataques efectuados con un arma adicional.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Visión nocturna",
    "",
    "Permite ignorar cualquier penalizador causado por la oscuridad, siempre que no se trate de un lugar con carencia absoluta de luz o algún tipo de oscuridad mágica, en cuyo caso, sólo quedan reducidos a la mitad.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Buena suerte",
    "",
    "Se reduce un punto la cifra requerida para pifiar. En circunstancias normales el personaje pifiará con un 2. Si alcanza la maestría en una habilidad, sólo pifiará con un 1.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Inquietante",
    "",
    "El personaje puede resultar inquietante si lo desea. El alcance de esta ventaja debe de ser interpretado por el Director de Juego.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Apto en un campo",
    "",
    "El coste de desarrollo de habilidades secundarias de ese campo se reduce en un punto. Si se da el caso de que la categoría del personaje posee una habilidad secundaria concreta dentro de dicho campo con un coste inferior al del resto de habilidades, este valor también se reducirá.",
    REPETIBLE_OPCIONES,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_TIPOS_SECUNDARIAS],
    [aptoEnUnCampo],
    GRUPO_SECUNDARIAS
));
addVentaja(new Ventaja(
    "Apto en una materia",
    "",
    "Esta ventaja reduce un punto el coste de desarrollo de una habilidad secundaria por cada Punto de Creación que se invierta.",
    REPETIBLE_OPCIONES,   //repetible
    [1,2],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_HABILIDADES_SECUNDARIAS],
    [aptoEnUnaMateria],
    GRUPO_SECUNDARIAS
));
addVentaja(new Ventaja(
    "Sentidos agudos",
    "",
    "Añade un punto a la Percepción del personaje a la hora de realizar controles de características y un bonificador especial de +50 a sus habilidades secundarias de Advertir y Buscar.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [sentidosAgudos],
    GRUPO_OTRAS
));
ventajaTemp = new Ventaja(
    "Don",
    "",
    "El personaje está dotado de la capacidad de ver y utilizar la magia. Añadirá además un bonificador especial de +10 a su RM, puesto que su naturaleza sobrenatural resiste mejor los efectos místicos. Nota: Ten en cuenta que tanto los hechiceros como otras categorías especializadas en el lanzamiento de conjuros requieren escoger esta ventaja para poder usar sortilegios.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [don],
    GRUPO_DON
);
ventajaTemp.isBasica = true;
addVentaja(ventajaTemp);

addVentaja(new Ventaja(
    "Aprendizaje innato",
    "",
    "Otorga un bono de categoría de +10 por nivel en una habilidad secundaria. Este bono se suma a cualquier otro bonificador innato que pudiera obtener el personaje gracias a su categoría. La inversión de un punto adicional aumenta el bono a +20.",
    REPETIBLE_OPCIONES,   //repetible
    [1,2],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_HABILIDADES_SECUNDARIAS],
    [aprendizajeInnato],
    GRUPO_SECUNDARIAS
));
addVentaja(new Ventaja(
    "Aprendizaje innato en un campo",
    "",
    "Otorga un bono de categoría de +5 o +10 por nivel a todas las habilidades de un campo. Estos bonificadores se suman a cualquier otro bono innato que pudiera obtener el personaje por su categoría.",
    REPETIBLE_OPCIONES,   //repetible
    [2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_TIPOS_SECUNDARIAS],
    [aprendizajeInnatoCampo],
    GRUPO_SECUNDARIAS
));
addVentaja(new Ventaja(
    "Conocedor de todas las materias",
    "",
    "El personaje no aplica nunca el penalizador de –30 por no haber invertido PD en una habilidad secundaria y tiene un bonificador natural de 10 en todas sus habilidades secundarias, que se suma directamente al bono que le otorgue su característica.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [conocedorTodasMaterias],
    GRUPO_SECUNDARIAS
));
addVentaja(new Ventaja(
    "Sueño ligero",
    "",
    "El personaje sólo aplica un penalizador de –20 a su habilidad de Advertir mientras duerme.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Reflejos rápidos",
    "",
    "Otorga un bonificador especial de +25 al turno. Los Puntos de Creación adicionales aumentarán el bono a +45 y a +60 respectivamente.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [reflejosRapidos],
    GRUPO_CAPACIDADES
));
addVentaja(new Ventaja(
    "Inmunidad al dolor y al cansancio",
    "",
    "Los penalizadores provocados por el dolor y el Cansancio se reducen a la mitad.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Tamaño no natural",
    "",
    "El personaje puede aumentar o disminuir hasta cinco puntos su Tamaño en el momento de su creación.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_AJUSTE_TAMAÑO],
    [ajusteTamaño],
    GRUPO_CAPACIDADES
));
addVentaja(new Ventaja(
    "Afortunado",
    "",
    "El alcance de esta ventaja debe de ser interpretada por el Director de Juego. En cualquier caso, nunca sufrirá los efectos negativos de una trampa o de un ataque que se determinen mediante el azar.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Armadura natural",
    "",
    "Otorga un Tipo de Armadura natural de 2 contra todas las clases de ataques salvo las de energía. Aunque cuenta como una protección, no se aplican penalizadores al turno por emplear capas de armaduras adicionales.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [armaduraNatural],
    GRUPO_CAPACIDADES
));
addVentaja(new Ventaja(
    "Armadura mística",
    "",
    "Otorga un Tipo de Armadura natural de 4 contra los ataques basados en Energía. Aunque cuenta como una armadura, no se aplican penalizadores al turno por emplear capas de protección adicionales.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [armaduraMistica],
    GRUPO_CAPACIDADES
));
addVentaja(new Ventaja(
    "Artefacto",
    "",
    "El jugador y el Director de Juego deberán ponerse de acuerdo con las habilidades del artefacto. Los puntos invertidos adicionalmente aumentan teóricamente las capacidades del objeto.",
    REPETIBLE_TOTAL,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_DESCRIPCION],
    [],
    GRUPO_OTRAS
));
ventajaTemp = new Ventaja(
    "Acceso a poderes psíquicos naturales",
    "",
    "El personaje es capaz de utilizar de manera natural un único poder mental determinado. En realidad no es un verdadero psíquico, por lo que no puede emplear CVs para adquirir nuevas habilidades ni para potenciar el poder que posee. Su potencial psíquico no se basa en su Voluntad ni requiere lanzar dados para calcularlo, sino que tiene automáticamente un valor de Difícil (DIF). El poder elegido puede ser de cualquier nivel, pero si tiene un requerimiento base superior a Difícil no es posible utilizarlo. Puede usarse una vez por minuto sin que el personaje sufra ningún tipo de penalización, pero cada uso adicional sin el periodo de descanso requerido causa la pérdida de un punto de Cansancio. La inversión de puntos adicionales aumenta el potencial psíquico natural a Muy Difícil (MDF) y a Absurdo (ABS), respectivamente.",
    REPETIBLE_OPCIONES,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_PODER_PSIQUICO],
    [],
    GRUPO_PSIQUICAS
);
ventajaTemp.isBasica = true;
addVentaja(ventajaTemp);

addVentaja(new Ventaja(
    "Maestro marcial",
    "",
    "Añade 40 puntos al Conocimiento Marcial base. Los Puntos de Creación adicionales aumentan el añadido a 80 y 120 puntos respectivamente.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [maestroMarcial],
    GRUPO_KI
));
addVentaja(new Ventaja(
    "Infatigable",
    "",
    "Aumenta tres puntos el Cansancio del personaje. Los Puntos de Creación adicionales lo incrementan seis y nueve puntos respectivamente.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [infatigable],
    GRUPO_CAPACIDADES
));
addVentaja(new Ventaja(
    "Ver lo sobrenatural",
    "",
    "El personaje ve lo sobrenatural, tanto magia y matrices psíquicas como criaturas espirituales. Por tanto, no aplica el penalizador de cegado en ninguna de dichas situaciones.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [verLoSobrenatural],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Sentido del peligro",
    "",
    "El personaje no puede ser cogido por sorpresa, salvo por una diferencia de 150 en turno contra su adversario.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS
));
addVentaja(new Ventaja(
    "Curtido",
    "",
    "El personaje comienza con 50 puntos de experiencia añadidos. Los Puntos de Creación adicionales aumentan los puntos de experiencia iniciales a 100 y a 150, respectivamente. Este aumento permite subir de nivel de modo convencional si se alcanzan los puntos de experiencia necesarios.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [curtido],
    GRUPO_CAPACIDADES
));
addVentaja(new Ventaja(
    "Recuperación de Ki",
    "",
    "El personaje recupera un punto de Ki por característica cada diez minutos, en lugar de uno por hora. La inversión de puntos adicionales disminuye el tiempo a cinco y un minuto respectivamente.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_KI
));
addVentaja(new Ventaja(
    "Elan",
    "",
    "El personaje tiene Elan de 20 de la entidad que elija. La inversión de puntos adicionales aumenta su nivel a 40 y 50 respectivamente.",
    REPETIBLE_TOTAL,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_SHAJADS_BERYLS],
    [elan],
    GRUPO_CAPACIDADES
));
addVentaja(new Ventaja(
    "Aprendizaje",
    "",
    "Obtiene un beneficio adicional de 3 puntos de experiencia a la cantidad que le otorgue el Director de Juego al finalizar cada sesión de juego. Los Puntos de Creación adicionales aumentan el beneficio a 6 y 9 puntos respectivamente.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_CAPACIDADES
));
//endregion Core Exxet

//region Pantalla del Director
addVentaja(new Ventaja(
    "Difícil de matar",
    "",
    "Obtiene un bonificador de +10, +20 o +30 pv por nivel. También un +10, +20 o +30 a los controles de Resistencia de " +
        "las reglas opcionales de Entre la vida y la muerte",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [dificilDeMatar],
    GRUPO_CAPACIDADES,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Al límite",
    "",
    "Cuando los pv bajan por debajo de una cuarta parte del total, gana  un bono +20 a toda acción.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_CAPACIDADES,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Inmunidad sobrenatural",
    "",
    "Ignora los conjuros de valor zeónico 60, 90 o 120 o inferiores, y supera cualquier RM de efecto místico no mayor de 80, 100 o 120. No puede acceder al Don o Ver lo Sobrenatural, y no puede esta ventaja ser comprada por Sylvain, Duk'zarist o Daimah",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [
        new ElementoProhibido(VENTAJA,"Don"),
        new ElementoProhibido(VENTAJA,"Ver lo sobrenatural")
    ],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_RESISTENCIAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Sin límite de familiares",
    "",
    "Puede crear un lazo de familiar con tantas criaturas como desee.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Sentido del combate",
    "",
    "El personaje consigue un bono innato de +5 a ataque, parada o esquiva.",
    NO_REPETIBLE,   //repetible
    [3],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_HABILIDAD_COMBATE],
    [sentidoDelCombate],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Bonificador natural incrementado",
    "",
    "El personaje obtiene un bonificador natural adicional.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [bonificadorNaturalIncrementado],
    GRUPO_SECUNDARIAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Uso de armadura",
    "",
    "El personaje consigue un bono innato de +5, +10 o +15 a llevar armadura.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [usoDeArmadura],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Versátil",
    "",
    "Al personaje le cuesta la mitad de PD cambiar de categoría y no tiene que esperar dos niveles.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [versatil],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Superviviente",
    "",
    "El personaje aguanta en puntos de vida negativa diez veces el valor de su CON, en lugar de sólo cinco. Además suma +40 a su RF para estabilizare. Al salir de entre la vida y la muerte, el negativo será sólo de -30. " +
        "Si se usan las reglas opcionales de puntos de vida en negativos, el +40 es a los controles para resistir.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_RESISTENCIAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Tocado por el destino",
    "",
    "Una ocasión por partida, puede repetir una tirada y elegir el nuevo resultado. Puede adquirirse tantas veces como se quiera.",
    REPETIBLE_TOTAL,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Inmunidad psíquica",
    "",
    "Obtiene un +60 a todo control de Frialdad dedicado a mitigar sus estados emocionales. No es compatible con Fobia, Cobardía o Adicción Grave",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [
        new ElementoProhibido(VENTAJA,"Fobia grave"),
        new ElementoProhibido(VENTAJA,"Cobardía"),
        new ElementoProhibido(VENTAJA,"Adicción o vicio grave")
    ],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_RESISTENCIAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Habilidoso",
    "",
    "Obtiene un bono de +30 a Trucos de manos y puede aplicar un +3 a cualquier control enfrentado de DES.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [habilidoso],
    GRUPO_SECUNDARIAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Libre albedrío",
    "",
    "Obtiene un bono de +60 a todo control de Resistencia relacionado con posesión o dominación.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_RESISTENCIAS,
    [FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Seductor",
    "",
    "Obtiene un bono de +60 en los controles de Persuasión relacionados con la seducción.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_SECUNDARIAS,
    [FLAG_PANTALLA_ENABLED]
));
//endregion Pantalla del Director