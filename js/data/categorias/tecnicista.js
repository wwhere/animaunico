var CAT_TECNICISTA = "Tecnicista";
var CATEGORIA_TECNICISTA = new Categoria(CAT_TECNICISTA);


CATEGORIA_TECNICISTA.descripcion = "";
CATEGORIA_TECNICISTA.arquetipo = ARQ_DOMINE;
CATEGORIA_TECNICISTA.multiploDeVida = 20;
CATEGORIA_TECNICISTA.pvPorNivel = 5;
CATEGORIA_TECNICISTA.turnoPorNivel = 5;
CATEGORIA_TECNICISTA.CMPorNivel = 50;
CATEGORIA_TECNICISTA.nivelesParaCV = 3;

//HABILIDADES PRIMARIAS
CATEGORIA_TECNICISTA.limiteCombate = 0.6;
CATEGORIA_TECNICISTA.habAtaque = 2;
CATEGORIA_TECNICISTA.habParada = 2;
CATEGORIA_TECNICISTA.habEsquiva = 2;
CATEGORIA_TECNICISTA.habArmadura = 2;
CATEGORIA_TECNICISTA.ki = 1;
CATEGORIA_TECNICISTA.acumulacionKi = 10;
CATEGORIA_TECNICISTA.limiteSobrenatural = 0.5;
CATEGORIA_TECNICISTA.zeon = 3;
CATEGORIA_TECNICISTA.costeACT = 70;
CATEGORIA_TECNICISTA.proyeccionMagica = 3;
CATEGORIA_TECNICISTA.convocar = 3;
CATEGORIA_TECNICISTA.dominar = 3;
CATEGORIA_TECNICISTA.atar = 3;
CATEGORIA_TECNICISTA.desconvocar = 3;
CATEGORIA_TECNICISTA.limitePsiquica = 0.5;
CATEGORIA_TECNICISTA.costeCV = 20;
CATEGORIA_TECNICISTA.proyeccionPsiquica = 3;

//HABILIDADES SECUNDARIAS
CATEGORIA_TECNICISTA.atleticas = 2;
CATEGORIA_TECNICISTA.sociales = 2;
CATEGORIA_TECNICISTA.perceptivas = 2;
CATEGORIA_TECNICISTA.intelectuales = 3;
CATEGORIA_TECNICISTA.vigor = 2;
CATEGORIA_TECNICISTA.subterfugio = 2;
CATEGORIA_TECNICISTA.creativas = 2;

//Costes reducidos
CATEGORIA_TECNICISTA.costesReducidos = [];

//BONIFICADORES INNATOS
CATEGORIA_TECNICISTA.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_ATAQUE,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_TECNICISTA})
];


categorias_set.push(CATEGORIA_TECNICISTA);