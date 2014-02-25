
addVentaja(new Ventaja(
    "Apto para el desarrollo de la magia",
    "",
    "El personaje añade 3 puntos a su característica de Inteligencia para calcular la Inteligencia Requerida de los conjuros. Este bonificador no se aplica para ninguna otra habilidad, ni siquiera para calcular su nivel de magia.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    new Array(aptoDesarrolloMagia),
    GRUPO_DON,
    [FLAG_DON]
));
addVentaja(new Ventaja(
    "Potencial enfrentado",
    "",
    "El personaje aplica un bonificador de +50 a sus tiradas para calcular el resultado del choque de conjuros.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    [FLAG_DON]
));
addVentaja(new Ventaja(
    "Recuperación superior de magia",
    "",
    "El personaje recupera sus puntos de Zeon al doble de su regeneración zeónica. Los Puntos de Creación adicionales le permiten aumentarla al triple y al cuádruple de lo normal.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    [FLAG_DON]
));
addVentaja(new Ventaja(
    "Magia innata mejorada",
    "",
    "Los conjuros innatos del brujo tienen un potencial de +10 a lo indicado por su ACT. Los Puntos de Creación adicionales aumentan el valor de los conjuros innatos a +20 y +30 respectivamente.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    new Array(magiaInnataMejorada),
    GRUPO_DON,
    [FLAG_DON]
));
addVentaja(new Ventaja(
    "Inutilidad somática",
    "",
    "El personaje no reduce su ACT por no ser capaz de gesticular.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    [FLAG_DON]
));
addVentaja(new Ventaja(
    "Inutilidad oral",
    "",
    "El personaje puede lanzar conjuros en completo silencio sin ver reducido su ACT.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    [FLAG_DON]
));
addVentaja(new Ventaja(
    "Desequilibrio elemental",
    "",
    "El personaje dispone de un bono especial de +20 a su ACT y un +20 a su RM en la vía mágica que elija. Cuando utilice conjuros de la vía opuesta, aplicará un penalizador de –20 a su ACT y un –20 a su RM. Si la vía elegida es la nigromancia, el penalizador se aplicará a todas las demás.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    new Array(LISTA_VIAS_MAGIA),
    [],
    GRUPO_DON,
    [FLAG_DON]
));
addVentaja(new Ventaja(
    "Desequilibrio sephirótico",
    "",
    "El brujo dispone de un bono especial de +20 a su ACT y un +20 en su RM en las cinco vías mágicas de un segmento del árbol que elija. En el resto aplicará un penalizador de –20 a su ACT y un –20 a su RM. La nigromancia no está incluida en esta ventaja, al encontrarse fuera del árbol.",
    NO_REPETIBLE,   //repetible
    [2],      //coste
    [],    //incompatibles
    true,  //anulable
    new Array(LISTA_DESEQUILIBRIO_SEPHIROTICO),
    [],
    GRUPO_DON,
    [FLAG_DON]
));
addVentaja(new Ventaja(
    "Conocimiento natural de vía",
    "",
    "Esta ventaja otorga conocimientos innatos de una vía a nivel 40 sin invertir en ella puntos de nivel de magia. Al ser un conocimiento natural, el hechicero puede seguir desarrollandola a partir de nivel 40 gastando en ella nuevos puntos de nivel de magia.",
    REPETIBLE_OPCIONES,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    new Array(LISTA_VIAS_MAGIA),
    new Array(conocimientoNaturalVia),
    GRUPO_DON,
    [FLAG_DON]
));


//region Pantalla del Director

addVentaja(new Ventaja(
    "Magia opuesta",
    "",
    "El personaje no dobla el coste de nivel de las vías opuestas.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [magiaOpuesta],
    GRUPO_DON,
    [FLAG_DON, FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Naturaleza mágica",
    "",
    "Obtiene un bono innato de +50, +100 ó +150 puntos de Zeon por nivel.",
    NO_REPETIBLE,   //repetible
    [1,2,3],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [naturalezaMagica],
    GRUPO_DON,
    [FLAG_DON, FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Poder natural",
    "",
    "Para calcular el potencial máximo de sus conjuros, el personaje utiliza su característica se Poder en lugar de su Inteligencia.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    [FLAG_DON, FLAG_PANTALLA_ENABLED]
));

addVentaja(new Ventaja(
    "Dicción mágica",
    "",
    "No reduce el ACT al ejecutar conjuros inscritos en grimorios, pergaminos o libros, usando su potencial al máximo incluso si no es capaz de gesticular.",
    NO_REPETIBLE,   //repetible
    [1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    [FLAG_DON, FLAG_PANTALLA_ENABLED]
));
//endregion Pantalla del Director
