var TABLA_ESPECIAL = "Especial";
var TABLA_MANEJO_CATEGORIA = "TABLA_MANEJO_CATEGORIA";
var TABLA_SIN_EFECTO = "TABLA_SIN_EFECTO";
var TABLA_MANEJO_ARMAS = "TABLA_MANEJO_ARMAS";

var TABLA_ARMA_SIMILAR = "Arma Similar";
var TABLA_ARMA_MIXTA = "TABLA_ARMA_MIXTA";
var TABLA_ARMA_DISTINTA = "TABLA_ARMA_DISTINTA";
var TABLA_TIPOLOGIA = "TABLA_TIPOLOGIA";

tablasArmas_set.push(new TablaArmas(
    "Arma similar",
    "",
    "Otorga la capacidad de usar un arma adicional del mismo tipo que una que el personaje ya conoce.",
    10,
    TABLA_ESPECIAL,
    [TABLA_ARMA_SIMILAR],
    CATEGORIA_TABLA_ARMAS_GENERALES
));

tablasArmas_set.push(new TablaArmas(
    "Arma mixta",
    "",
    "Otorga la capacidad de usar un arma mixta que tiene, por lo menos, un mismo tipo en común con otra que el personaje ya conoce.",
    15,
    TABLA_ESPECIAL,
    [TABLA_ARMA_MIXTA],
    CATEGORIA_TABLA_ARMAS_GENERALES
));

tablasArmas_set.push(new TablaArmas(
    "Arma distinta / Desarmado",
    "",
    "Otorga la capacidad de usar un arma de un tipo que no conoce el personaje.",
    20,
    TABLA_ESPECIAL,
    [TABLA_ARMA_DISTINTA],
    CATEGORIA_TABLA_ARMAS_GENERALES
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de tipología",
    "",
    "Permite utilizar una determinada tipología de armas sin aplicar ningún penalizador a su habilidad marcial. Deben de elegirse las de una clase concreta, ya sea pura o mixta. Si por ejemplo el personaje domina el uso de las espadas, podrá manejar cualquiera de ellas sin negativos, pero no así un mandoble, al ser un arma de tipología mixta.",
    50,
    TABLA_ESPECIAL,
    [TABLA_TIPOLOGIA],
    CATEGORIA_TABLA_ARMAS_GENERALES
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de proyectiles",
    "",
    "Adquiere la pericia de usar cualquier arma de disparo con la misma habilidad de ataque.",
    50,
    TABLA_MANEJO_CATEGORIA,
    [CAT_ARMA_PROYECTILES],
    CATEGORIA_TABLA_ARMAS_GENERALES
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de lanzamiento",
    "",
    "Adquiere la pericia de lanzar toda clase de artefactos con la misma habilidad de ataque.",
    50,
    TABLA_MANEJO_CATEGORIA,
    [CAT_ARMA_LANZAMIENTO],
    CATEGORIA_TABLA_ARMAS_GENERALES
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de armas improvisadas",
    "",
    "Esta tabla permite utilizar cualquier tipo de objeto común como arma improvisada.",
    50,
    TABLA_SIN_EFECTO,
    [],
    CATEGORIA_TABLA_ARMAS_GENERALES
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Asesino",
    "",
    "Otorga pericia en las siguientes armas: Espada Corta, Ballesta de Mano, Garrote, Cerbatana y Estilete.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_ESPADA_CORTA,ARMA_BALLESTA_MANO,ARMA_GARROTE,ARMA_CERBATANA,ARMA_ESTILETE],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Bárbaro",
    "",
    "Otorga pericia en las siguientes armas: Hacha de Guerra, Hacha a dos manos, Mandoble, Espada Bastarda y Maza a Dos Manos.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_HACHA_GUERRA,ARMA_HACHA_DOS_MANOS,ARMA_MANDOBLE,ARMA_ESPADA_BASTARDA,ARMA_MAZA_PESADA],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Caballero",
    "",
    "Otorga pericia en las siguientes armas: Espada Larga, Lanza de Caballería, Maza, Espada Bastarda y Escudo Medio.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_ESPADA_LARGA,ARMA_LANZA_CABALLERIA,ARMA_MAZA,ARMA_ESPADA_BASTARDA,ARMA_ESCUDO],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Nómada",
    "",
    "Otorga pericia en las siguientes armas: Daga, Turcus, Arco Largo, Cimitarra y Lanza.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_DAGA,ARMA_TURCUS,ARMA_ARCO_LARGO,ARMA_CIMITARRA,ARMA_LANZA],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Gladiador",
    "",
    "Otorga pericia en las siguientes armas: Espada Corta, Red de Gladiador, Rodela, Tridente y Látigo.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_ESPADA_CORTA,ARMA_RED_GLADIADOR,ARMA_RODELA,ARMA_TRIDENTE,ARMA_LATIGO],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Cazador",
    "",
    "Otorga pericia en las siguientes armas: Jabalina, Arco, Espada Corta, Lanza y Boleadoras.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_JABALINA,ARMA_ARCO_LARGO,ARMA_ARCO_CORTO,ARMA_ARCO_LARGO_COMPUESTO,ARMA_LANZA,ARMA_BOLEADORAS],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Soldado",
    "",
    "Otorga pericia en las siguientes armas: Ballesta, Espada Larga, Alabarda, Lanza y Escudo Medio.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_BALLESTA,ARMA_ESPADA_LARGA,ARMA_ALABARDA,ARMA_LANZA,ARMA_ESCUDO],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Ninja",
    "",
    "Otorga pericia en las siguientes armas: Katana, Tanto, Garras, Shuriken y Kusari Gama.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_KATANA,ARMA_TANTO,ARMA_GARRAS,ARMA_SHURIKEN,ARMA_KUSARI_GAMA],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Duelista",
    "",
    "Otorga pericia en las siguientes armas: Estoque, Florete, Daga de Parada, Sable y Espada Larga.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_ESTOQUE,ARMA_FLORETE,ARMA_DAGA_PARADA,ARMA_SABLE,ARMA_ESPADA_LARGA],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Aborigen",
    "",
    "Otorga pericia en las siguientes armas: Jabalina, Lanza, Escudo Corporal, Arco y Cerbatana.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_JABALINA,ARMA_LANZA,ARMA_ESCUDO_CORPORAL,ARMA_ARCO_LARGO,ARMA_ARCO_CORTO,ARMA_ARCO_LARGO_COMPUESTO,ARMA_CERBATANA],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Pirata",
    "",
    "Otorga pericia en las siguientes armas: Arpón, Red de Gladiador, Garfio, Sable y Hacha de mano.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_ARPON,ARMA_RED_GLADIADOR,ARMA_GARFIO,ARMA_SABLE,ARMA_HACHA_MANO],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Bandido",
    "",
    "Otorga pericia en las siguientes armas: Daga, Ballesta, Espada Corta, Maza y Garrote.",
    50,
    TABLA_MANEJO_ARMAS,
    [ARMA_DAGA,ARMA_BALLESTA,ARMA_ESPADA_CORTA,ARMA_MAZA,ARMA_GARROTE],
    CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS
));

tablasArmas_set.push(new TablaArmas(
    "Batto jutsu / Iai jutsu",
    "",
    "El personaje puede desenfundar su arma sin aplicar el penalizador de -25 a su habilidad de ataque o parada. No tiene efectos sobre armas a dos manos.",
    30,
    TABLA_SIN_EFECTO,
    [],
    CATEGORIA_TABLA_ARMAS_ESTILOS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Área",
    "",
    "Reduce a la mitad el penalizador de la maniobra Ataque en área, por lo que al ejecutarla, un personaje aplica sólo un -25 a su habilidad.",
    50,
    TABLA_SIN_EFECTO,
    [],
    CATEGORIA_TABLA_ARMAS_ESTILOS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Precisión",
    "",
    "Reduce a la mitad el penalizador de la maniobra Engatillar, por lo que un personaje sufre sólo un -50 a su habilidad al ejecutarla.",
    50,
    TABLA_SIN_EFECTO,
    [],
    CATEGORIA_TABLA_ARMAS_ESTILOS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Desarme",
    "",
    "Reduce a la mitad el penalizador de la maniobra Desarmar, por lo que un personaje sufre sólo un -20 a su habilidad al ejecutarla.",
    40,
    TABLA_SIN_EFECTO,
    [],
    CATEGORIA_TABLA_ARMAS_ESTILOS
));

tablasArmas_set.push(new TablaArmas(
    "Tabla de Ataque Encadenado",
    "",
    "Al realizar ataques adicionales, el personaje puede usar las armas de tamaño Grande aplicando el penalizador de armas de tamaño Medio (es decir, un -30), y las de tamaño Medio como si fueran Pequeñas (un -20). No tiene efectos sobre armas Pequeñas.",
    50,
    TABLA_SIN_EFECTO,
    [],
    CATEGORIA_TABLA_ARMAS_ESTILOS
));
