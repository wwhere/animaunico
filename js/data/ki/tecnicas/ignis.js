
arbolesTecnicasMuestra_set.push(KI_ARBOL_IGNIS);

var desventajaAtaduraElementalFuego = new DesventajaTecnicaElegida(allDesventajasTecnicas[KI_TECN_DESV_ATADURA_ELEMENTAL_1]);
desventajaAtaduraElementalFuego.ataduraElemental = new ElementosAfines([ELEMENTO_FUEGO]);

var ignis = new TecnicaKi(1);

ignis.setNombre(KI_TECNICA_FEUER);
ignis.setArbolTecnicas(KI_ARBOL_IGNIS);
ignis.costeKi = new CosteKi(0,0,0,3,1,5);
ignis.costeMantenimiento = new CosteKi(0,0,0,1,0,1);
var efecto = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO],allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO].getNivelesEfecto()[1]);
ignis.fijaComoPrimario(efecto);
ignis.setEfectoMantenido(efecto,true);
efecto = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_ELEMENTAL_FUEGO],allEfectosTecnicas[KI_EFECTO_ATAQUE_ELEMENTAL_FUEGO].getNivelesEfecto()[0]);
ignis.addEfectoSecundario(efecto);
ignis.setEfectoMantenido(efecto,true);

ignis.addDesventaja(desventajaAtaduraElementalFuego);

tecnicasMuestra_set.push(ignis);

ignis = new TecnicaKi(1);
ignis.setNombre(KI_TECNICA_LE_FEU);
ignis.setArbolTecnicas(KI_ARBOL_IGNIS);
ignis.costeKi = new CosteKi(0,0,3,1,3,5);
ignis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[2]));
ignis.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA],allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA].getNivelesEfecto()[2]));

ignis.addDesventaja(desventajaAtaduraElementalFuego);

tecnicasMuestra_set.push(ignis);

ignis = new TecnicaKi(2);
ignis.setNombre(KI_TECNICA_HORECKA);
ignis.setArbolTecnicas(KI_ARBOL_IGNIS);
ignis.costeKi = new CosteKi(0,0,6,2,6,10);
ignis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_MULTIPLICADOR_DAÑO],allEfectosTecnicas[KI_EFECTO_MULTIPLICADOR_DAÑO].getNivelesEfecto()[0]));
ignis.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA],allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA].getNivelesEfecto()[4]));

ignis.addDesventaja(desventajaAtaduraElementalFuego);

var desventajaMantenerActivoFeuer = new DesventajaTecnicaElegida(allDesventajasTecnicas[KI_TECN_DESV_CONDICION_DETERMINADA]);
desventajaMantenerActivoFeuer.descripcion = KI_ARBOL_IGNIS_CONDICION_ESPECIAL;
desventajaMantenerActivoFeuer.costeCM = -10;

ignis.addDesventaja(desventajaMantenerActivoFeuer);

tecnicasMuestra_set.push(ignis);

ignis = new TecnicaKi(2);
ignis.setNombre(KI_TECNICA_VATRA);
ignis.setArbolTecnicas(KI_ARBOL_IGNIS);
ignis.costeKi = new CosteKi(0,3,6,1,6,11);
ignis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[4]));
ignis.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO],allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO].getNivelesEfecto()[4]));
ignis.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_POTENCIAR_CRITICO],allEfectosTecnicas[KI_EFECTO_POTENCIAR_CRITICO].getNivelesEfecto()[2]));

ignis.addDesventaja(desventajaAtaduraElementalFuego);
ignis.addDesventaja(desventajaMantenerActivoFeuer);

tecnicasMuestra_set.push(ignis);

ignis = new TecnicaKi(3);
ignis.setNombre(KI_TECNICA_ELD);
ignis.setArbolTecnicas(KI_ARBOL_IGNIS);
ignis.costeKi = new CosteKi(0,0,10,10,0,19);
var efectoAtaque = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO],allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO].getNivelesEfecto()[0]);
efectoAtaque.addVentajaOpcional(new VentajaTecnicaElegida(efectoAtaque.getVentajasOpcionales()[0],efectoAtaque.getVentajasOpcionales()[0].nivelesVentaja[1]));
ignis.fijaComoPrimario(efectoAtaque);

ignis.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[8]));

ignis.addDesventaja(desventajaAtaduraElementalFuego);
ignis.addDesventaja(desventajaMantenerActivoFeuer);

tecnicasMuestra_set.push(ignis);
