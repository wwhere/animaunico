var CATEGORIA_GUERRERO_CONJURADOR = new Categoria(CAT_GUERRERO_CONJURADOR);

CATEGORIA_GUERRERO_CONJURADOR.descripcion = "";
CATEGORIA_GUERRERO_CONJURADOR.arquetipo = ARQ_LUCHADOR_MISTICO;
CATEGORIA_GUERRERO_CONJURADOR.multiploDeVida = 20;
CATEGORIA_GUERRERO_CONJURADOR.pvPorNivel = 10;
CATEGORIA_GUERRERO_CONJURADOR.turnoPorNivel = 5;
CATEGORIA_GUERRERO_CONJURADOR.CMPorNivel = 20;
CATEGORIA_GUERRERO_CONJURADOR.nivelesParaCV = 3;

//HABILIDADES PRIMARIAS
CATEGORIA_GUERRERO_CONJURADOR.limiteCombate = 0.5;
CATEGORIA_GUERRERO_CONJURADOR.habAtaque = 2;
CATEGORIA_GUERRERO_CONJURADOR.habParada = 2;
CATEGORIA_GUERRERO_CONJURADOR.habEsquiva = 2;
CATEGORIA_GUERRERO_CONJURADOR.habArmadura = 2;
CATEGORIA_GUERRERO_CONJURADOR.ki = 2;
CATEGORIA_GUERRERO_CONJURADOR.acumulacionKi = 20;
CATEGORIA_GUERRERO_CONJURADOR.limiteSobrenatural = 0.5;
CATEGORIA_GUERRERO_CONJURADOR.zeon = 1;
CATEGORIA_GUERRERO_CONJURADOR.costeACT = 60;
CATEGORIA_GUERRERO_CONJURADOR.proyeccionMagica = 3;
CATEGORIA_GUERRERO_CONJURADOR.convocar = 1;
CATEGORIA_GUERRERO_CONJURADOR.dominar = 1;
CATEGORIA_GUERRERO_CONJURADOR.atar = 1;
CATEGORIA_GUERRERO_CONJURADOR.desconvocar = 1;
CATEGORIA_GUERRERO_CONJURADOR.limitePsiquica = 0.5;
CATEGORIA_GUERRERO_CONJURADOR.costeCV = 20;
CATEGORIA_GUERRERO_CONJURADOR.proyeccionPsiquica = 3;

//HABILIDADES SECUNDARIAS
CATEGORIA_GUERRERO_CONJURADOR.atleticas = 2;
CATEGORIA_GUERRERO_CONJURADOR.sociales = 2;
CATEGORIA_GUERRERO_CONJURADOR.perceptivas = 2;
CATEGORIA_GUERRERO_CONJURADOR.intelectuales = 2;
CATEGORIA_GUERRERO_CONJURADOR.vigor = 2;
CATEGORIA_GUERRERO_CONJURADOR.subterfugio = 2;
CATEGORIA_GUERRERO_CONJURADOR.creativas = 2;

//Costes reducidos
CATEGORIA_GUERRERO_CONJURADOR.costesReducidos = [];

//BONIFICADORES INNATOS
CATEGORIA_GUERRERO_CONJURADOR.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_ZEON,20,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_GUERRERO_CONJURADOR}),
    new Bono(BONO_HABILIDAD,HB_ATAQUE,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_GUERRERO_CONJURADOR}),
    new Bono(BONO_HABILIDAD,HB_PARADA,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_GUERRERO_CONJURADOR}),
    new Bono(BONO_HABILIDAD,HB_ESQUIVA,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_GUERRERO_CONJURADOR}),
    new Bono(BONO_HABILIDAD,HB_CONVOCAR,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_GUERRERO_CONJURADOR}),
    new Bono(BONO_HABILIDAD,HB_DOMINAR,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_GUERRERO_CONJURADOR}),
    new Bono(BONO_HABILIDAD,HB_ATAR,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_GUERRERO_CONJURADOR}),
    new Bono(BONO_HABILIDAD,HB_DESCONVOCAR,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_GUERRERO_CONJURADOR}),
    new Bono(BONO_HABILIDAD,HB_OCULTISMO,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_GUERRERO_CONJURADOR})
];
categorias_set.push(CATEGORIA_GUERRERO_CONJURADOR);