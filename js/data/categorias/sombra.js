var CAT_SOMBRA = "Sombra";
var CATEGORIA_SOMBRA = new Categoria(CAT_SOMBRA);

CATEGORIA_SOMBRA.descripcion = "";
CATEGORIA_SOMBRA.arquetipo = ARQ_LUCHADOR_ACECHADOR;
CATEGORIA_SOMBRA.multiploDeVida = 20;
CATEGORIA_SOMBRA.pvPorNivel = 5;
CATEGORIA_SOMBRA.turnoPorNivel = 10;
CATEGORIA_SOMBRA.CMPorNivel = 25;
CATEGORIA_SOMBRA.nivelesParaCV = 3;

//HABILIDADES PRIMARIAS
CATEGORIA_SOMBRA.limiteCombate = 0.6;
CATEGORIA_SOMBRA.habAtaque = 2;
CATEGORIA_SOMBRA.habParada = 3;
CATEGORIA_SOMBRA.habEsquiva = 2;
CATEGORIA_SOMBRA.habArmadura = 2;
CATEGORIA_SOMBRA.ki = 2;
CATEGORIA_SOMBRA.acumulacionKi = 20;
CATEGORIA_SOMBRA.limiteSobrenatural = 0.5;
CATEGORIA_SOMBRA.zeon = 3;
CATEGORIA_SOMBRA.costeACT = 70;
CATEGORIA_SOMBRA.proyeccionMagica = 3;
CATEGORIA_SOMBRA.convocar = 3;
CATEGORIA_SOMBRA.dominar = 3;
CATEGORIA_SOMBRA.atar = 3;
CATEGORIA_SOMBRA.desconvocar = 3;
CATEGORIA_SOMBRA.limitePsiquica = 0.5;
CATEGORIA_SOMBRA.costeCV = 20;
CATEGORIA_SOMBRA.proyeccionPsiquica = 3;

//HABILIDADES SECUNDARIAS
CATEGORIA_SOMBRA.atleticas = 2;
CATEGORIA_SOMBRA.sociales = 2;
CATEGORIA_SOMBRA.perceptivas = 2;
CATEGORIA_SOMBRA.intelectuales = 3;
CATEGORIA_SOMBRA.vigor = 2;
CATEGORIA_SOMBRA.subterfugio = 2;
CATEGORIA_SOMBRA.creativas = 2;

//Costes reducidos
CATEGORIA_SOMBRA.costesReducidos = [];

//BONIFICADORES INNATOS
CATEGORIA_SOMBRA.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_ATAQUE,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_SOMBRA}),
    new Bono(BONO_HABILIDAD,HB_ESQUIVA,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_SOMBRA}),
    new Bono(BONO_HABILIDAD,HB_ADVERTIR,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_SOMBRA}),
    new Bono(BONO_HABILIDAD,HB_BUSCAR,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_SOMBRA}),
    new Bono(BONO_HABILIDAD,HB_OCULTARSE,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_SOMBRA}),
    new Bono(BONO_HABILIDAD,HB_SIGILO,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_SOMBRA}),
    new Bono(BONO_KI,HAB_KI_OCULTACION_KI,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_SOMBRA})
];

categorias_set.push(CATEGORIA_SOMBRA);