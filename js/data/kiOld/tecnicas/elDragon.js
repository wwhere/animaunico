arbolesTecnicasMuestra_set.push(KI_ARBOL_EL_DRAGON);

var dragon = new TecnicaKi(1);

dragon.setNombre(KI_TECNICA_LAS_ESCAMAS);
dragon.setArbolTecnicas(KI_ARBOL_EL_DRAGON);
dragon.costeKi = new CosteKi(1,3,3,0,0,0);
dragon.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_DEFENSA_ADICIONAL],allEfectosTecnicas[KI_EFECTO_DEFENSA_ADICIONAL].getNivelesEfecto()[4]));

tecnicasMuestra_set.push(dragon);

dragon = new TecnicaKi(1);

dragon.setNombre(KI_TECNICA_LAS_GARRAS);
dragon.setArbolTecnicas(KI_ARBOL_EL_DRAGON);
dragon.costeKi = new CosteKi(4,4,4,2,0,0);
dragon.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_ADICIONAL],allEfectosTecnicas[KI_EFECTO_ATAQUE_ADICIONAL].getNivelesEfecto()[0]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO],allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO].getNivelesEfecto()[2]));

tecnicasMuestra_set.push(dragon);

dragon = new TecnicaKi(2);

dragon.setNombre(KI_TECNICA_EL_COLMILLO);
dragon.setArbolTecnicas(KI_ARBOL_EL_DRAGON);
dragon.costeKi = new CosteKi(6,8,5,3,0,0);
dragon.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_DESTRUIR_ARMADURA],allEfectosTecnicas[KI_EFECTO_DESTRUIR_ARMADURA].getNivelesEfecto()[5]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_MANIOBRAS_COMBATE],allEfectosTecnicas[KI_EFECTO_MANIOBRAS_COMBATE].getNivelesEfecto()[2]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[3]));

tecnicasMuestra_set.push(dragon);

dragon = new TecnicaKi(2);

dragon.setNombre(KI_TECNICA_LA_COLA);
dragon.setArbolTecnicas(KI_ARBOL_EL_DRAGON);
dragon.costeKi = new CosteKi(6,8,6,2,0,0);
dragon.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[2]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA],allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA].getNivelesEfecto()[3]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_PROYECCION],allEfectosTecnicas[KI_EFECTO_PROYECCION].getNivelesEfecto()[6]));

tecnicasMuestra_set.push(dragon);

dragon = new TecnicaKi(3);
dragon.setNombre(KI_TECNICA_EL_ALIENTO_DEL_DRAGON);
dragon.setArbolTecnicas(KI_ARBOL_EL_DRAGON);
dragon.costeKi = new CosteKi(10,10,10,15,6,0);
dragon.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA],allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA].getNivelesEfecto()[7]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA],allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA].getNivelesEfecto()[5]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_CAPAZ_DAÑAR_ENERGIA],allEfectosTecnicas[KI_EFECTO_ATAQUE_CAPAZ_DAÑAR_ENERGIA].getNivelesEfecto()[0]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_MULTIPLICADOR_DAÑO],allEfectosTecnicas[KI_EFECTO_MULTIPLICADOR_DAÑO].getNivelesEfecto()[0]));

var desventajaPredeterminacion = allDesventajasTecnicas[KI_TECN_DESV_PREDETERMINACION];
dragon.addDesventaja(new DesventajaTecnicaElegida(desventajaPredeterminacion));

tecnicasMuestra_set.push(dragon);

