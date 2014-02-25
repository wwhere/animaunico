var A_M_AIKIDO = "Aikido";
var A_M_SHOTOKAN = "Shotokan";
var A_M_GRAPPLING = "Grappling";
var A_M_CAPOEIRA = "Capoeira";
var A_M_KUNG_FU = "Kung Fu";
var A_M_KEMPO = "Kempo";
var A_M_MOAI_THAI  = "Moai Thai";
var A_M_SAMBO = "Sambo";
var A_M_TAE_KWON_DO = "Tae Kwon Do";
var A_M_TAI_CHI = "Tai Chi";

artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_AIKIDO,
    "Aikido",
    "El daño del Aikido es de 10 más el bono de Fuerza de su usuario, pero al realizar un contraataque, añade el doble " +
        "del bono de Fuerza de su contrincante (con un bono mínimo de +5). Ataca en Contundentes y permite sujetar a sus " +
        "adversarios fácilmente, por lo que no aplica penalizadores al realizar una maniobra de Presa durante un contraataque.",
    [
        new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 40)
    ],
    10,      //CM
    [
        new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_AIKIDO),
        new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_AIKIDO)
    ],
    [10,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SHOTOKAN,
    "Shotokan",
    "Tiene un daño base de 30 más el bono de Fuerza de su usuario. Ataca en Contundentes.",
    [],
    10,
    [new Bono(BONO_HABILIDAD, HB_ATAQUE,10, ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SHOTOKAN)],
    [30,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_GRAPPLING,
    "Grappling",
    "El Grappling permite ejecutar las maniobras de combate Presa y Derribo sin ningún tipo de penalizador. Da una base de daño de 20 más el bono de Fuerza, y ataca en Contundentes.",
    [new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 40)],
    10,      //CM
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_CAPOEIRA,
    "Capoeira",
    "Los movimientos de Capoeira son tan desbocados que, cuando el personaje realice una maniobra de Ataque en área, se " +
        "considerará que está utilizando un arma grande y podrá afectar a cinco adversarios. Causa un daño de 20 más el bono de Fuerza, y ataca en Contundentes.",
    [new Requisito(REQUISITO_HABILIDAD, HB_BAILE, 40)],
    10,      //CM
    [new Bono(BONO_HABILIDAD,HB_ESQUIVA,10,"",false,BONO_INNATO,A_M_CAPOEIRA)],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_KUNG_FU,
    "Kung Fu",
    "Un maestro de Kung Fu puede elegir aplicar un bono de +10 entre sus habilidades de ataque, parada, esquiva, daño o " +
        "turno, según le convenga cada asalto. Debe decidir dónde empleará el bono antes de que se inicie el cálculo de " +
        "la iniciativa. En el caso de que lo utilice para mejorar la habilidad de ataque, parada o esquiva, no se " +
        "considera como un bono innato por categoría, por lo que puede aumentarlas por encima de +50. " +
        "El Kung Fu da una base de daño de 20 más el bono de Fuerza, y ataca en Contundentes.",
    [new Requisito(REQUISITO_HABILIDAD, HB_ACROBACIAS, 40),new Requisito(REQUISITO_HABILIDAD, HB_TRUCOS_MANOS, 40),new Requisito(REQUISITO_HABILIDAD, HB_ESTILO, 20)],
    10,      //CM
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_KEMPO,
    "Kempo",
    "Los rápidos encadenamientos de golpes permiten al maestro de Kempo realizar los ataques adicionales con un penalizador " +
        "de –10 a su habilidad, en lugar del –25 habitual. Da una base de daño 20 más el bono de Fuerza, y ataca en Contundentes.",
    [],
    10,      //CM
    [],
    [20,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_MOAI_THAI,
    "Moai Thai",
    "Tiene un daño base de 20 más el triple del bono de Fuerza de su usuario. Ataca en Contundentes.",
    [new Requisito(REQUISITO_HABILIDAD, HB_PROEZAS_FUERZA, 40)],
    10,      //CM
    [],
    [20,BONO_FUE,BONO_FUE,BONO_FUE],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_SAMBO,
    "Sambo",
    "Los practicantes de Sambo pueden reducir a la mitad los penalizadores de las siguientes maniobras de combate: Presa, " +
        "Ataque en área, Derribo y Desarmar. Otorga una base de daño de 20 más el bono de Fuerza del personaje (redondeando en grupos de 10 hacía arriba), y ataca en Contundentes.",
    [],
    10,      //CM
    [new Bono(BONO_HABILIDAD,HB_PARADA,10,ARMA_SIN_ARMAS,false,BONO_INNATO,A_M_SAMBO)],
    [20,BONO_FUE_RED],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_TAE_KWON_DO,
    "Tae Kwon Do",
    "Otorga una base de daño de 20 más el bono de Fuerza (redondeando en grupos de 10 hacía arriba). " +
        "Permite realizar un ataque adicional con las piernas una vez que el personaje haya agotado todos sus otros ataques. " +
        "Este ataque sufre tan sólo un penalizador de –20 a su habilidad, actuando de igual manera que lo hacen las armas " +
        "adicionales. Puede realizarse incluso tras haber utilizado algún arma. Ataca en Contundentes.",
    [],
    10,      //CM
    [],
    [20,BONO_FUE_RED],
    [ATAQUE_CON3]
));
artesMarcialesBasicas_set.push(new ArteMarcial(
    A_M_TAI_CHI,
    "Tai Chi",
    "El Tai Chi otorga una base de daño de 20 más el doble del bono de Poder (redondeando en grupos de 10 hacía arriba), " +
        "en representación del uso de la energía interna. Puesto que el Ki sólo lo utiliza como potenciador, ataca en Contundentes y no en energía.",
    [new Requisito(REQUISITO_HABILIDAD_KI,HAB_KI_USO_DEL_KI,0)],
    30,      //CM
    [],
    [20,BONO_POD_RED,BONO_POD_RED],
    [ATAQUE_CON3]
));



