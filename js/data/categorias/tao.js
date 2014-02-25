var CAT_TAO = "Tao";
var CATEGORIA_TAO = new Categoria(CAT_TAO);

var BONO_TAO = "artes marciales a medio coste";


CATEGORIA_TAO.descripcion = "";
CATEGORIA_TAO.arquetipo = ARQ_LUCHADOR_DOMINE;
CATEGORIA_TAO.multiploDeVida = 20;
CATEGORIA_TAO.pvPorNivel = 10;
CATEGORIA_TAO.turnoPorNivel = 5;
CATEGORIA_TAO.CMPorNivel = 30;
CATEGORIA_TAO.nivelesParaCV = 3;

//HABILIDADES PRIMARIAS
CATEGORIA_TAO.limiteCombate = 0.6;
CATEGORIA_TAO.habAtaque = 2;
CATEGORIA_TAO.habParada = 2;
CATEGORIA_TAO.habEsquiva = 2;
CATEGORIA_TAO.habArmadura = 2;
CATEGORIA_TAO.ki = 2;
CATEGORIA_TAO.acumulacionKi = 15;
CATEGORIA_TAO.limiteSobrenatural = 0.5;
CATEGORIA_TAO.zeon = 3;
CATEGORIA_TAO.costeACT = 70;
CATEGORIA_TAO.proyeccionMagica = 3;
CATEGORIA_TAO.convocar = 3;
CATEGORIA_TAO.dominar = 3;
CATEGORIA_TAO.atar = 3;
CATEGORIA_TAO.desconvocar = 3;
CATEGORIA_TAO.limitePsiquica = 0.5;
CATEGORIA_TAO.costeCV = 20;
CATEGORIA_TAO.proyeccionPsiquica = 3;

//HABILIDADES SECUNDARIAS
CATEGORIA_TAO.atleticas = 2;
CATEGORIA_TAO.sociales = 2;
CATEGORIA_TAO.perceptivas = 2;
CATEGORIA_TAO.intelectuales = 3;
CATEGORIA_TAO.vigor = 2;
CATEGORIA_TAO.subterfugio = 2;
CATEGORIA_TAO.creativas = 2;

//Costes reducidos
CATEGORIA_TAO.costesReducidos = [];

//BONIFICADORES INNATOS
CATEGORIA_TAO.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_ESTILO,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_TAO}),
    new Bono(BONO_TAO,BONO_TAO,0,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_TAO})
];

categorias_set.push(CATEGORIA_TAO);