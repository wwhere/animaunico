var A_M_SELENE = "Selene";
var A_M_MELKAIAH = "Melkaiah";
var A_M_DUMAH = "Dumah";
var A_M_EMP = "Emp";
var A_M_SHEPHON = "Shephon";
var A_M_SERAPHITE = "Seraphite";
var A_M_ASAKUSEN = "Asakusen";
var A_M_VELEZ = "Velez";
var A_M_ENUTH = "Enuth";
var A_M_HAKYOUKUKEN = "Hakyoukuken";

artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_SELENE,
    "Selene",
    "Dobla el bono del contraataque si utiliza su Acción Respuesta para atacar a su contrincante usando este arte marcial.",
    [
        new Requisito(REQUISITO_ARTE_MARCIAL, A_M_AIKIDO,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD, HB_PARADA,200)
            ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_SELENE),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SELENE)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_MELKAIAH,
    "Melkaiah",
    "Bonificador de +3 a los controles de Fuerza o Destreza al ejecutar maniobras de Derribo y Presa.",
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_GRAPPLING,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SAMBO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_INHUMANIDAD,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,160),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,160)
        ],0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_MELKAIAH)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_DUMAH,
    "Dumah",
    "UBono de +10 al daño final del estilo empleado, y puede optar entre Filo o Penetrantes a la hora de atacar a su oponente. " +
        "La magnitud de sus cortes es tal que reduce dos puntos la TA de cualquier armadura defensora. Del mismo modo, también añade un +10 a la rotura de sus ataques.",
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_CAPOEIRA,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_DUMAH),
        new Bono(BONO_DAÑO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_DUMAH),
        new Bono(BONO_ROTURA,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_DUMAH)
    ],
    [ROTURA_PLUS_10,TA_ENEMIGA_MENOS_2],
    [ATAQUE_PEN3,ATAQUE_FIL3]
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_EMP,
    "Emp",
    "Permite a sus usuarios realizar la maniobra Desarmar sin aplicar ningún penalizador a su habilidad, añadiendo un bonificador de +3 al valor de su característica en los controles enfrentados.",
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_TAE_KWON_DO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_EMP),
        new Bono(BONO_TURNO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_EMP)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_SHEPHON,
    "Shephon",
    "Cuando el personaje declare entrar en modalidad de Defensa total, aumenta el bonificador de dicha maniobra hasta +60.",
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_AIKIDO,0),
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,200),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,200)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_CONTROL_DEL_KI,0)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_SHEPHON),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SHEPHON)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_SERAPHITE,
    "Seraphite",
    "Bono de +10 al daño final del estilo básico empleado. " +
        "Si lo desea, puede además aumentar temporalmente su habilidad de ataque en +20, a cambio de sufrir un penalizador de -30 a su defensa. " +
        "Esta última capacidad debe declararse antes de calcular la iniciativa.",
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KEMPO,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,180)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,20, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SERAPHITE),
        new Bono(BONO_DAÑO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SERAPHITE)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_ASAKUSEN,
    "Asakusen",
    "El Asakusen hace que el bono variable de +10 del Kung Fu se aplique a la vez en todos los campos, es decir, un +10 " +
        "a la habilidad de esquiva, ataque, parada, turno y daño cuando se utilicen artes marciales. Aun así, " +
        "el personaje puede seguir añadiendo un +10 especial a una de ellas, del modo que se explica en el Kung Fu.",
    [
        new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU,0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,160)
        ],0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,160)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN),
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_ASAKUSEN),
        new Bono(BONO_HABILIDAD,HB_PARADA,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN),
        new Bono(BONO_TURNO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN),
        new Bono(BONO_DAÑO,"",10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ASAKUSEN)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_VELEZ,
    "Velez",
    "Permite a los personajes golpear en la TA de Energía. " +
        "Los ataques realizados con este arte marcial pueden seguir parándose con normalidad, dado que no son intangibles.",
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_TAI_CHI,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_KUNG_FU,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_EXTRUSION_DE_PRESENCIA,0)
    ],
    20,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_VELEZ),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_VELEZ)
    ],
    [],
    [ATAQUE_ENE3]
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_ENUTH,
    "Enuth",
    "Permite aplicar un bonificador de +20 a las tiradas para calcular el Nivel de Crítico, " +
        "cuando el personaje ejecute un golpe con el objetivo de dejar inconsciente. Puede, además, reducir libremente " +
        "el daño producido hasta la cantidad que el atacante decida, incluso después de que ambos luchadores hayan lanzado los dados.",
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SAMBO,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN,0)
        ],0),
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_HABILIDAD,HB_ESQUIVA,160),
            new Requisito(REQUISITO_HABILIDAD,HB_PARADA,160)
        ],0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,160)
    ],
    10,
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,20,"",false,BONO_INNATO,A_M_ENUTH),
        new Bono(BONO_HABILIDAD,HB_PARADA,20,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_ENUTH)
    ],
    [],
    []
));
artesMarcialesAvanzadas_set.push(new ArteMarcial(
    A_M_HAKYOUKUKEN,
    "Hakyoukuken",
    "Bono de +20 al daño final del arte marcial empleado. " +
        "La mayor parte de armaduras no ofrecen protección contra sus ataques, por lo que restan –2 a su TA si son blandas. " +
        "Al destrozar internamente a sus enemigos, se añade un +20 a las tiradas para calcular el nivel del crítico de un ataque " +
        "con este arte marcial. Esta última habilidad sólo sirve contra seres orgánicos.",
    [
        new Requisito(REQUISITO_UNO_DE_LOS_SIGUIENTES,[
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_MOAI_THAI,0),
            new Requisito(REQUISITO_ARTE_MARCIAL,A_M_SHOTOKAN,0)
        ],0),
        new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_ENERGIA_NECESARIA,0),
        new Requisito(REQUISITO_HABILIDAD,HB_ATAQUE,200)
    ],
    10,
    [
        new Bono(BONO_TURNO,"",20,"",false,BONO_INNATO,A_M_HAKYOUKUKEN),
        new Bono(BONO_DAÑO,"",20, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_HAKYOUKUKEN),
        new Bono(BONO_HABILIDAD,HB_ATAQUE,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_HAKYOUKUKEN)
    ],
    [],
    []
));

