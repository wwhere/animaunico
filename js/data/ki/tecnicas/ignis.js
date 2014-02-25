arbolesTecnicasMuestra_set.push("Ignis");

var desventajaAtaduraElementalFuego = new DesventajaTecnicaElegida(allDesventajasTecnicas["Atadura elemental (1 elemento)"]);
desventajaAtaduraElementalFuego.ataduraElemental = new ElementosAfines([ELEMENTO_FUEGO]);

var ignis = new TecnicaKi(1);
ignis.setNombre("Feuer");
ignis.setArbolTecnicas("Ignis");
ignis.costeKi = new CosteKi(0,0,0,3,1,5);
ignis.costeMantenimiento = new CosteKi(0,0,0,1,0,1);
var efecto = new EfectoTecnicaElegido(allEfectosTecnicas["Aumento de daño"],allEfectosTecnicas["Aumento de daño"].getNivelesEfecto()[1]);
ignis.fijaComoPrimario(efecto);
ignis.setEfectoMantenido(efecto,true);
efecto = new EfectoTecnicaElegido(allEfectosTecnicas["Ataque elemental (Fuego)"],allEfectosTecnicas["Ataque elemental (Fuego)"].getNivelesEfecto()[0]);
ignis.addEfectoSecundario(efecto);
ignis.setEfectoMantenido(efecto,true);

ignis.addDesventaja(desventajaAtaduraElementalFuego);

tecnicasMuestra_set.push(ignis);

ignis = new TecnicaKi(1);
ignis.setNombre("Le Feu");
ignis.setArbolTecnicas("Ignis");
ignis.costeKi = new CosteKi(0,0,3,1,3,5);
ignis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Habilidad de ataque"],allEfectosTecnicas["Habilidad de ataque"].getNivelesEfecto()[2]));
ignis.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque a distancia"],allEfectosTecnicas["Ataque a distancia"].getNivelesEfecto()[2]));

ignis.addDesventaja(desventajaAtaduraElementalFuego);

tecnicasMuestra_set.push(ignis);

ignis = new TecnicaKi(2);
ignis.setNombre("Horecka");
ignis.setArbolTecnicas("Ignis");
ignis.costeKi = new CosteKi(0,0,6,2,6,10);
ignis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Multiplicador al daño"],allEfectosTecnicas["Multiplicador al daño"].getNivelesEfecto()[0]));
ignis.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque con área"],allEfectosTecnicas["Ataque con área"].getNivelesEfecto()[4]));

ignis.addDesventaja(desventajaAtaduraElementalFuego);

var desventajaMantenerActivoFeuer = new DesventajaTecnicaElegida(allDesventajasTecnicas["Condición determinada"]);
desventajaMantenerActivoFeuer.descripcion = "Mantener activo Feuer";
desventajaMantenerActivoFeuer.costeCM = -10;

ignis.addDesventaja(desventajaMantenerActivoFeuer);

tecnicasMuestra_set.push(ignis);

ignis = new TecnicaKi(2);
ignis.setNombre("Vatra");
ignis.setArbolTecnicas("Ignis");
ignis.costeKi = new CosteKi(0,3,6,1,6,11);
ignis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Habilidad de ataque"],allEfectosTecnicas["Habilidad de ataque"].getNivelesEfecto()[4]));
ignis.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Aumento de daño"],allEfectosTecnicas["Aumento de daño"].getNivelesEfecto()[4]));
ignis.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Potenciar crítico"],allEfectosTecnicas["Potenciar crítico"].getNivelesEfecto()[2]));

ignis.addDesventaja(desventajaAtaduraElementalFuego);
ignis.addDesventaja(desventajaMantenerActivoFeuer);

tecnicasMuestra_set.push(ignis);

ignis = new TecnicaKi(3);
ignis.setNombre("Eld");
ignis.setArbolTecnicas("Ignis");
ignis.costeKi = new CosteKi(0,0,10,10,0,19);
var efectoAtaque = new EfectoTecnicaElegido(allEfectosTecnicas["Aumento de daño"],allEfectosTecnicas["Aumento de daño"].getNivelesEfecto()[0]);
efectoAtaque.addVentajaOpcional(new VentajaTecnicaElegida(efectoAtaque.getVentajasOpcionales()[0],efectoAtaque.getVentajasOpcionales()[0].nivelesVentaja[1]));
ignis.fijaComoPrimario(efectoAtaque);

ignis.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Habilidad de ataque"],allEfectosTecnicas["Habilidad de ataque"].getNivelesEfecto()[8]));

ignis.addDesventaja(desventajaAtaduraElementalFuego);
ignis.addDesventaja(desventajaMantenerActivoFeuer);

tecnicasMuestra_set.push(ignis);
