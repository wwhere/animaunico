var CATEGORIA_HECHICERO_MENTALISTA = new Categoria(CAT_HECHICERO_MENTALISTA);

CATEGORIA_HECHICERO_MENTALISTA.descripcion = "";
CATEGORIA_HECHICERO_MENTALISTA.arquetipo = ARQ_MISTICO_PSIQUICO;
CATEGORIA_HECHICERO_MENTALISTA.multiploDeVida = 20;
CATEGORIA_HECHICERO_MENTALISTA.pvPorNivel = 5;
CATEGORIA_HECHICERO_MENTALISTA.turnoPorNivel = 5;
CATEGORIA_HECHICERO_MENTALISTA.CMPorNivel = 10;
CATEGORIA_HECHICERO_MENTALISTA.nivelesParaCV = 1;

//HABILIDADES PRIMARIAS
CATEGORIA_HECHICERO_MENTALISTA.limiteCombate = 0.5;
CATEGORIA_HECHICERO_MENTALISTA.habAtaque = 3;
CATEGORIA_HECHICERO_MENTALISTA.habParada = 3;
CATEGORIA_HECHICERO_MENTALISTA.habEsquiva = 2;
CATEGORIA_HECHICERO_MENTALISTA.habArmadura = 3;
CATEGORIA_HECHICERO_MENTALISTA.ki = 3;
CATEGORIA_HECHICERO_MENTALISTA.acumulacionKi = 30;
CATEGORIA_HECHICERO_MENTALISTA.limiteSobrenatural = 0.5;
CATEGORIA_HECHICERO_MENTALISTA.zeon = 1;
CATEGORIA_HECHICERO_MENTALISTA.costeACT = 50;
CATEGORIA_HECHICERO_MENTALISTA.proyeccionMagica = 2;
CATEGORIA_HECHICERO_MENTALISTA.convocar = 2;
CATEGORIA_HECHICERO_MENTALISTA.dominar = 2;
CATEGORIA_HECHICERO_MENTALISTA.atar = 2;
CATEGORIA_HECHICERO_MENTALISTA.desconvocar = 2;
CATEGORIA_HECHICERO_MENTALISTA.limitePsiquica = 0.5;
CATEGORIA_HECHICERO_MENTALISTA.costeCV = 10;
CATEGORIA_HECHICERO_MENTALISTA.proyeccionPsiquica = 2;

//HABILIDADES SECUNDARIAS
CATEGORIA_HECHICERO_MENTALISTA.atleticas = 2;
CATEGORIA_HECHICERO_MENTALISTA.sociales = 2;
CATEGORIA_HECHICERO_MENTALISTA.perceptivas = 2;
CATEGORIA_HECHICERO_MENTALISTA.intelectuales = 2;
CATEGORIA_HECHICERO_MENTALISTA.vigor = 3;
CATEGORIA_HECHICERO_MENTALISTA.subterfugio = 2;
CATEGORIA_HECHICERO_MENTALISTA.creativas = 2;

//Costes reducidos
CATEGORIA_HECHICERO_MENTALISTA.costesReducidos = [];

//BONIFICADORES INNATOS
CATEGORIA_HECHICERO_MENTALISTA.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_ZEON,100,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_HECHICERO_MENTALISTA}),
    new Bono(BONO_HABILIDAD,HB_VALORACION_MAGICA,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_HECHICERO_MENTALISTA}),
    new Bono(BONO_HABILIDAD,HB_OCULTISMO,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_HECHICERO_MENTALISTA})
];

categorias_set.push(CATEGORIA_HECHICERO_MENTALISTA);