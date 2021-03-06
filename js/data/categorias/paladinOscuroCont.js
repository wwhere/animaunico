var CATEGORIA_PALADIN_OSCURO_CONT = new Categoria(CAT_PALADIN_OSCURO_CONT);


CATEGORIA_PALADIN_OSCURO_CONT.descripcion = "";
CATEGORIA_PALADIN_OSCURO_CONT.arquetipo = ARQ_LUCHADOR;
CATEGORIA_PALADIN_OSCURO_CONT.multiploDeVida = 15;
CATEGORIA_PALADIN_OSCURO_CONT.pvPorNivel = 15;
CATEGORIA_PALADIN_OSCURO_CONT.turnoPorNivel = 5;
CATEGORIA_PALADIN_OSCURO_CONT.CMPorNivel = 20;
CATEGORIA_PALADIN_OSCURO_CONT.nivelesParaCV = 3;

//HABILIDADES PRIMARIAS
CATEGORIA_PALADIN_OSCURO_CONT.limiteCombate = 0.6;
CATEGORIA_PALADIN_OSCURO_CONT.habAtaque = 2;
CATEGORIA_PALADIN_OSCURO_CONT.habParada = 2;
CATEGORIA_PALADIN_OSCURO_CONT.habEsquiva = 2;
CATEGORIA_PALADIN_OSCURO_CONT.habArmadura = 2;
CATEGORIA_PALADIN_OSCURO_CONT.ki = 2;
CATEGORIA_PALADIN_OSCURO_CONT.acumulacionKi = 20;
CATEGORIA_PALADIN_OSCURO_CONT.limiteSobrenatural = 0.5;
CATEGORIA_PALADIN_OSCURO_CONT.zeon = 2;
CATEGORIA_PALADIN_OSCURO_CONT.costeACT = 60;
CATEGORIA_PALADIN_OSCURO_CONT.proyeccionMagica = 3;
CATEGORIA_PALADIN_OSCURO_CONT.convocar = 3;
CATEGORIA_PALADIN_OSCURO_CONT.dominar = 1;
CATEGORIA_PALADIN_OSCURO_CONT.atar = 3;
CATEGORIA_PALADIN_OSCURO_CONT.desconvocar = 3;
CATEGORIA_PALADIN_OSCURO_CONT.limitePsiquica = 0.5;
CATEGORIA_PALADIN_OSCURO_CONT.costeCV = 20;
CATEGORIA_PALADIN_OSCURO_CONT.proyeccionPsiquica = 3;

//HABILIDADES SECUNDARIAS
CATEGORIA_PALADIN_OSCURO_CONT.atleticas = 2;
CATEGORIA_PALADIN_OSCURO_CONT.sociales = 1;
CATEGORIA_PALADIN_OSCURO_CONT.perceptivas = 2;
CATEGORIA_PALADIN_OSCURO_CONT.intelectuales = 2;
CATEGORIA_PALADIN_OSCURO_CONT.vigor = 2;
CATEGORIA_PALADIN_OSCURO_CONT.subterfugio = 2;
CATEGORIA_PALADIN_OSCURO_CONT.creativas = 2;

//Costes reducidos
CATEGORIA_PALADIN_OSCURO_CONT.costesReducidos = [
    new Coste(HB_FRIALDAD, 1, true, UDS_PD)
];

//BONIFICADORES INNATOS
CATEGORIA_PALADIN_OSCURO_CONT.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_ATAQUE,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_CONT}),
    new Bono(BONO_HABILIDAD,HB_ARMADURA,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_CONT}),
    new Bono(BONO_HABILIDAD,HB_DOMINAR,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_CONT}),
    new Bono(BONO_HABILIDAD,HB_ZEON,20,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_CONT}),
    new Bono(BONO_HABILIDAD,HB_INTIMIDAR,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_CONT}),
    new Bono(BONO_HABILIDAD,HB_FRIALDAD,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_CONT}),
    new Bono(BONO_HABILIDAD,HB_ESTILO,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_CONT}),
    new Bono(BONO_HABILIDAD,HB_PERSUASION,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_OSCURO_CONT})
];

categorias_set.push(CATEGORIA_PALADIN_OSCURO_CONT);