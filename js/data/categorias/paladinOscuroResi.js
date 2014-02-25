var CAT_PALADIN_OSCURO_RES = "Paladín Oscuro (Resistir Dolor)";
var CATEGORIA_PALADIN_OSCURO_RES = new Categoria(CAT_PALADIN_OSCURO_RES);


CATEGORIA_PALADIN_OSCURO_RES.descripcion = "";
CATEGORIA_PALADIN_OSCURO_RES.arquetipo = ARQ_LUCHADOR;
CATEGORIA_PALADIN_OSCURO_RES.multiploDeVida = 15;
CATEGORIA_PALADIN_OSCURO_RES.pvPorNivel = 15;
CATEGORIA_PALADIN_OSCURO_RES.turnoPorNivel = 5;
CATEGORIA_PALADIN_OSCURO_RES.CMPorNivel = 20;
CATEGORIA_PALADIN_OSCURO_RES.nivelesParaCV = 3;

//HABILIDADES PRIMARIAS
CATEGORIA_PALADIN_OSCURO_RES.limiteCombate = 0.6;
CATEGORIA_PALADIN_OSCURO_RES.habAtaque = 2;
CATEGORIA_PALADIN_OSCURO_RES.habParada = 2;
CATEGORIA_PALADIN_OSCURO_RES.habEsquiva = 2;
CATEGORIA_PALADIN_OSCURO_RES.habArmadura = 2;
CATEGORIA_PALADIN_OSCURO_RES.ki = 2;
CATEGORIA_PALADIN_OSCURO_RES.acumulacionKi = 20;
CATEGORIA_PALADIN_OSCURO_RES.limiteSobrenatural = 0.5;
CATEGORIA_PALADIN_OSCURO_RES.zeon = 2;
CATEGORIA_PALADIN_OSCURO_RES.costeACT = 60;
CATEGORIA_PALADIN_OSCURO_RES.proyeccionMagica = 3;
CATEGORIA_PALADIN_OSCURO_RES.convocar = 3;
CATEGORIA_PALADIN_OSCURO_RES.dominar = 1;
CATEGORIA_PALADIN_OSCURO_RES.atar = 3;
CATEGORIA_PALADIN_OSCURO_RES.desconvocar = 3;
CATEGORIA_PALADIN_OSCURO_RES.limitePsiquica = 0.5;
CATEGORIA_PALADIN_OSCURO_RES.costeCV = 20;
CATEGORIA_PALADIN_OSCURO_RES.proyeccionPsiquica = 3;

//HABILIDADES SECUNDARIAS
CATEGORIA_PALADIN_OSCURO_RES.atleticas = 2;
CATEGORIA_PALADIN_OSCURO_RES.sociales = 1;
CATEGORIA_PALADIN_OSCURO_RES.perceptivas = 2;
CATEGORIA_PALADIN_OSCURO_RES.intelectuales = 2;
CATEGORIA_PALADIN_OSCURO_RES.vigor = 2;
CATEGORIA_PALADIN_OSCURO_RES.subterfugio = 2;
CATEGORIA_PALADIN_OSCURO_RES.creativas = 2;

//Costes reducidos
CATEGORIA_PALADIN_OSCURO_RES.costesReducidos = [
    new Coste(HB_FRIALDAD, 1, true, UDS_PD)
];

//BONIFICADORES INNATOS
CATEGORIA_PALADIN_OSCURO_RES.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_ATAQUE,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_RES}),
    new Bono(BONO_HABILIDAD,HB_ARMADURA,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_RES}),
    new Bono(BONO_HABILIDAD,HB_INTIMIDAR,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_RES}),
    new Bono(BONO_HABILIDAD,HB_FRIALDAD,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_RES}),
    new Bono(BONO_HABILIDAD,HB_RESISTENCIA_DOLOR,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_RES}),
    new Bono(BONO_HABILIDAD,HB_ESTILO,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_RES}),
    new Bono(BONO_HABILIDAD,HB_PERSUASION,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_RES})
];
categorias_set.push(CATEGORIA_PALADIN_OSCURO_RES);