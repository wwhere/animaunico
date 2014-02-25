var CAT_ASESINO = "Asesino";
var CATEGORIA_ASESINO = new Categoria(CAT_ASESINO);

CATEGORIA_ASESINO.descripcion = "";
CATEGORIA_ASESINO.arquetipo = ARQ_ACECHADOR;
CATEGORIA_ASESINO.multiploDeVida = 20;
CATEGORIA_ASESINO.pvPorNivel = 5;
CATEGORIA_ASESINO.turnoPorNivel = 10;
CATEGORIA_ASESINO.CMPorNivel = 20;
CATEGORIA_ASESINO.nivelesParaCV = 3;

//HABILIDADES PRIMARIAS
CATEGORIA_ASESINO.limiteCombate = 0.5;
CATEGORIA_ASESINO.habAtaque = 2;
CATEGORIA_ASESINO.habParada = 3;
CATEGORIA_ASESINO.habEsquiva = 2;
CATEGORIA_ASESINO.habArmadura = 3;
CATEGORIA_ASESINO.ki = 2;
CATEGORIA_ASESINO.acumulacionKi = 25;
CATEGORIA_ASESINO.limiteSobrenatural = 0.5;
CATEGORIA_ASESINO.zeon = 3;
CATEGORIA_ASESINO.costeACT = 70;
CATEGORIA_ASESINO.proyeccionMagica = 3;
CATEGORIA_ASESINO.convocar = 3;
CATEGORIA_ASESINO.dominar = 3;
CATEGORIA_ASESINO.atar = 3;
CATEGORIA_ASESINO.desconvocar = 3;
CATEGORIA_ASESINO.limitePsiquica = 0.5;
CATEGORIA_ASESINO.costeCV = 20;
CATEGORIA_ASESINO.proyeccionPsiquica = 3;

//HABILIDADES SECUNDARIAS
CATEGORIA_ASESINO.atleticas = 2;
CATEGORIA_ASESINO.sociales = 2;
CATEGORIA_ASESINO.perceptivas = 1;
CATEGORIA_ASESINO.intelectuales = 3;
CATEGORIA_ASESINO.vigor = 3;
CATEGORIA_ASESINO.subterfugio = 2;
CATEGORIA_ASESINO.creativas = 2;

//Costes reducidos
CATEGORIA_ASESINO.costesReducidos = [
    new Coste(HB_SIGILO, 1, true, UDS_PD),
    new Coste(HB_FRIALDAD, 2, true, UDS_PD),
    new Coste(HB_MEMORIZAR, 2, true, UDS_PD)
];

//BONIFICADORES INNATOS
CATEGORIA_ASESINO.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_ATAQUE,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_ASESINO}),
    new Bono(BONO_HABILIDAD,HB_ADVERTIR,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_ASESINO}),
    new Bono(BONO_HABILIDAD,HB_BUSCAR,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_ASESINO}),
    new Bono(BONO_HABILIDAD,HB_OCULTARSE,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_ASESINO}),
    new Bono(BONO_HABILIDAD,HB_SIGILO,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_ASESINO}),
    new Bono(BONO_HABILIDAD,HB_VENENOS,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_ASESINO}),
    new Bono(BONO_HABILIDAD,HB_FRIALDAD,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_ASESINO}),
    new Bono(BONO_HABILIDAD,HB_TRAMPERIA,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_ASESINO})
];

categorias_set.push(CATEGORIA_ASESINO);

