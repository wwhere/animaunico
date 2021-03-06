var CATEGORIA_HECHICERO = new Categoria(CAT_HECHICERO);

CATEGORIA_HECHICERO.descripcion = "";
CATEGORIA_HECHICERO.arquetipo = ARQ_MISTICO;
CATEGORIA_HECHICERO.multiploDeVida = 20;
CATEGORIA_HECHICERO.pvPorNivel = 5;
CATEGORIA_HECHICERO.turnoPorNivel = 5;
CATEGORIA_HECHICERO.CMPorNivel = 10;
CATEGORIA_HECHICERO.nivelesParaCV = 3;

//HABILIDADES PRIMARIAS
CATEGORIA_HECHICERO.limiteCombate = 0.5;
CATEGORIA_HECHICERO.habAtaque = 3;
CATEGORIA_HECHICERO.habParada = 3;
CATEGORIA_HECHICERO.habEsquiva = 2;
CATEGORIA_HECHICERO.habArmadura = 3;
CATEGORIA_HECHICERO.ki = 3;
CATEGORIA_HECHICERO.acumulacionKi = 30;
CATEGORIA_HECHICERO.limiteSobrenatural = 0.6;
CATEGORIA_HECHICERO.zeon = 1;
CATEGORIA_HECHICERO.costeACT = 50;
CATEGORIA_HECHICERO.proyeccionMagica = 2;
CATEGORIA_HECHICERO.convocar = 2;
CATEGORIA_HECHICERO.dominar = 2;
CATEGORIA_HECHICERO.atar = 2;
CATEGORIA_HECHICERO.desconvocar = 2;
CATEGORIA_HECHICERO.limitePsiquica = 0.5;
CATEGORIA_HECHICERO.costeCV = 20;
CATEGORIA_HECHICERO.proyeccionPsiquica = 3;

//HABILIDADES SECUNDARIAS
CATEGORIA_HECHICERO.atleticas = 2;
CATEGORIA_HECHICERO.sociales = 2;
CATEGORIA_HECHICERO.perceptivas = 2;
CATEGORIA_HECHICERO.intelectuales = 2;
CATEGORIA_HECHICERO.vigor = 3;
CATEGORIA_HECHICERO.subterfugio = 2;
CATEGORIA_HECHICERO.creativas = 2;

//Costes reducidos
CATEGORIA_HECHICERO.costesReducidos = [
    new Coste(HB_VALORACION_MAGICA, 1, true, UDS_PD)
];

//BONIFICADORES INNATOS
CATEGORIA_HECHICERO.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_ZEON,100,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_HECHICERO}),
    new Bono(BONO_HABILIDAD,HB_VALORACION_MAGICA,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_HECHICERO}),
    new Bono(BONO_HABILIDAD,HB_OCULTISMO,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_HECHICERO})
];
categorias_set.push(CATEGORIA_HECHICERO);