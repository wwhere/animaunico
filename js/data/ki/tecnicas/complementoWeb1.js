arbolesTecnicasMuestra_set.push(KI_ARBOL_LAS_CADENAS);
var lasCadenas = new TecnicaKi(1);
lasCadenas.setNombre(KI_TECNICA_VOLGARATH);
lasCadenas.setArbolTecnicas(KI_ARBOL_LAS_CADENAS);
lasCadenas.costeKi = new CosteKi(0,0,5,5,5,0);
lasCadenas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[1]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO],allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO].getNivelesEfecto()[2]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA],allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA].getNivelesEfecto()[4]));

tecnicasMuestra_set.push(lasCadenas);

lasCadenas = new TecnicaKi(1);

lasCadenas.setNombre(KI_TECNICA_EXELION);
lasCadenas.setArbolTecnicas(KI_ARBOL_LAS_CADENAS);
lasCadenas.costeKi = new CosteKi(0,0,6,5,6,0);
lasCadenas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO],allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO].getNivelesEfecto()[3]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA],allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA].getNivelesEfecto()[2]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA],allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA].getNivelesEfecto()[4]));


tecnicasMuestra_set.push(lasCadenas);

lasCadenas = new TecnicaKi(2);
lasCadenas.setNombre(KI_TECNICA_DEDALUS);
lasCadenas.setArbolTecnicas(KI_ARBOL_LAS_CADENAS);
lasCadenas.costeKi = new CosteKi(0,0,8,8,8,0);
lasCadenas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[3]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_APRESAMIENTO],allEfectosTecnicas[KI_EFECTO_APRESAMIENTO].getNivelesEfecto()[5]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA],allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA].getNivelesEfecto()[4]));

tecnicasMuestra_set.push(lasCadenas);

lasCadenas = new TecnicaKi(2);
lasCadenas.setNombre(KI_TECNICA_OBERON);
lasCadenas.setArbolTecnicas(KI_ARBOL_LAS_CADENAS);
lasCadenas.costeKi = new CosteKi(0,0,11,10,10,0);
lasCadenas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_PARADA],allEfectosTecnicas[KI_EFECTO_HABILIDAD_PARADA].getNivelesEfecto()[2]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ESCUDO_ENERGIA],allEfectosTecnicas[KI_EFECTO_ESCUDO_ENERGIA].getNivelesEfecto()[6]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_REFLECTAR_ATAQUE],allEfectosTecnicas[KI_EFECTO_REFLECTAR_ATAQUE].getNivelesEfecto()[0]));

tecnicasMuestra_set.push(lasCadenas);

lasCadenas = new TecnicaKi(3);
lasCadenas.setNombre(KI_TECNICA_GARUDA);
lasCadenas.setArbolTecnicas(KI_ARBOL_LAS_CADENAS);
lasCadenas.costeKi = new CosteKi(0,4,12,9,12,6);
lasCadenas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_ADICIONAL],allEfectosTecnicas[KI_EFECTO_ATAQUE_ADICIONAL].getNivelesEfecto()[3]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_DESTRUIR_ARMADURA],allEfectosTecnicas[KI_EFECTO_DESTRUIR_ARMADURA].getNivelesEfecto()[5]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA],allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA].getNivelesEfecto()[4]));

tecnicasMuestra_set.push(lasCadenas);


//TODO Sirius

//TODO Basis