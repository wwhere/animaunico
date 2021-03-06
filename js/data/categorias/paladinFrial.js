var CATEGORIA_PALADIN_FRIAL = new Categoria(CAT_PALADIN_FRIAL);


CATEGORIA_PALADIN_FRIAL.descripcion = "";
CATEGORIA_PALADIN_FRIAL.arquetipo = ARQ_LUCHADOR;
CATEGORIA_PALADIN_FRIAL.multiploDeVida = 15;
CATEGORIA_PALADIN_FRIAL.pvPorNivel = 15;
CATEGORIA_PALADIN_FRIAL.turnoPorNivel = 5;
CATEGORIA_PALADIN_FRIAL.CMPorNivel = 20;
CATEGORIA_PALADIN_FRIAL.nivelesParaCV = 3;

//HABILIDADES PRIMARIAS
CATEGORIA_PALADIN_FRIAL.limiteCombate = 0.6;
CATEGORIA_PALADIN_FRIAL.habAtaque = 2;
CATEGORIA_PALADIN_FRIAL.habParada = 2;
CATEGORIA_PALADIN_FRIAL.habEsquiva = 2;
CATEGORIA_PALADIN_FRIAL.habArmadura = 2;
CATEGORIA_PALADIN_FRIAL.ki = 2;
CATEGORIA_PALADIN_FRIAL.acumulacionKi = 20;
CATEGORIA_PALADIN_FRIAL.limiteSobrenatural = 0.5;
CATEGORIA_PALADIN_FRIAL.zeon = 2;
CATEGORIA_PALADIN_FRIAL.costeACT = 60;
CATEGORIA_PALADIN_FRIAL.proyeccionMagica = 3;
CATEGORIA_PALADIN_FRIAL.convocar = 3;
CATEGORIA_PALADIN_FRIAL.dominar = 3;
CATEGORIA_PALADIN_FRIAL.atar = 3;
CATEGORIA_PALADIN_FRIAL.desconvocar = 1;
CATEGORIA_PALADIN_FRIAL.limitePsiquica = 0.5;
CATEGORIA_PALADIN_FRIAL.costeCV = 20;
CATEGORIA_PALADIN_FRIAL.proyeccionPsiquica = 3;

//HABILIDADES SECUNDARIAS
CATEGORIA_PALADIN_FRIAL.atleticas = 2;
CATEGORIA_PALADIN_FRIAL.sociales = 1;
CATEGORIA_PALADIN_FRIAL.perceptivas = 2;
CATEGORIA_PALADIN_FRIAL.intelectuales = 2;
CATEGORIA_PALADIN_FRIAL.vigor = 2;
CATEGORIA_PALADIN_FRIAL.subterfugio = 3;
CATEGORIA_PALADIN_FRIAL.creativas = 2;

//Costes reducidos
CATEGORIA_PALADIN_FRIAL.costesReducidos = [
    new Coste(HB_RESISTENCIA_DOLOR, 1, true, UDS_PD)
];

//BONIFICADORES INNATOS
CATEGORIA_PALADIN_FRIAL.bonosInnatos = [
    new Bono(BONO_HABILIDAD,HB_PARADA,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_FRIAL}),
    new Bono(BONO_HABILIDAD,HB_ARMADURA,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_FRIAL}),
    new Bono(BONO_HABILIDAD,HB_LIDERAZGO,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_FRIAL}),
    new Bono(BONO_HABILIDAD,HB_RESISTENCIA_DOLOR,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_FRIAL}),
    new Bono(BONO_HABILIDAD,HB_ESTILO,5,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_FRIAL}),
    new Bono(BONO_HABILIDAD,HB_FRIALDAD,10,"",true,BONO_INNATO,ORIGEN_CATEGORIA,{categoriaPersonaje:CAT_PALADIN_FRIAL})
];

categorias_set.push(CATEGORIA_PALADIN_FRIAL);