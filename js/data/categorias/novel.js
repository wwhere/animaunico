var CAT_NOVEL = "Novel";
var CATEGORIA_NOVEL = new Categoria(CAT_NOVEL);

var BONO_NOVEL_CINCO_ELECCIONES = "bono innato novel 5 +10";
var BONO_NOVEL_CAMBIO_REDUCIDO = "bono innato novel cambio clase"; //TODO

CATEGORIA_NOVEL.descripcion = "";
CATEGORIA_NOVEL.arquetipo = ARQ_SIN_CATEGORIA;
CATEGORIA_NOVEL.multiploDeVida = 20;
CATEGORIA_NOVEL.pvPorNivel = 5;
CATEGORIA_NOVEL.turnoPorNivel = 5;
CATEGORIA_NOVEL.CMPorNivel = 20;
CATEGORIA_NOVEL.nivelesParaCV = 2;

//HABILIDADES PRIMARIAS
CATEGORIA_NOVEL.limiteCombate = 0.6;
CATEGORIA_NOVEL.habAtaque = 2;
CATEGORIA_NOVEL.habParada = 2;
CATEGORIA_NOVEL.habEsquiva = 2;
CATEGORIA_NOVEL.habArmadura = 2;
CATEGORIA_NOVEL.ki = 2;
CATEGORIA_NOVEL.acumulacionKi = 20;
CATEGORIA_NOVEL.limiteSobrenatural = 0.6;
CATEGORIA_NOVEL.zeon = 2;
CATEGORIA_NOVEL.costeACT = 60;
CATEGORIA_NOVEL.proyeccionMagica = 2;
CATEGORIA_NOVEL.convocar = 2;
CATEGORIA_NOVEL.dominar = 2;
CATEGORIA_NOVEL.atar = 2;
CATEGORIA_NOVEL.desconvocar = 2;
CATEGORIA_NOVEL.limitePsiquica = 0.6;
CATEGORIA_NOVEL.costeCV = 20;
CATEGORIA_NOVEL.proyeccionPsiquica = 2;

//HABILIDADES SECUNDARIAS
CATEGORIA_NOVEL.atleticas = 2;
CATEGORIA_NOVEL.sociales = 2;
CATEGORIA_NOVEL.perceptivas = 2;
CATEGORIA_NOVEL.intelectuales = 2;
CATEGORIA_NOVEL.vigor = 2;
CATEGORIA_NOVEL.subterfugio = 2;
CATEGORIA_NOVEL.creativas = 2;

//Costes reducidos
CATEGORIA_NOVEL.costesReducidos = [];

//BONIFICADORES INNATOS
CATEGORIA_NOVEL.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_ZEON,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_NOVEL}),
    new Bono(BONO_HABILIDAD,BONO_NOVEL_CINCO_ELECCIONES,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_NOVEL}),
    new Bono(BONO_HABILIDAD,BONO_NOVEL_CAMBIO_REDUCIDO,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_NOVEL})
];

//Al novel sólo le cuesta 20 PD cambiar de categoría
//a otra de cualquier arquetipo o viceversa (es
//decir, un luchador solo gasta 20 PD puntos para
//convertirse en novel).

categorias_set.push(CATEGORIA_NOVEL);