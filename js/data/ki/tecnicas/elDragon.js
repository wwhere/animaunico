arbolesTecnicasMuestra_set.push("El Dragón");

var dragon = new TecnicaKi(1);
dragon.setNombre("Las escamas");
dragon.setArbolTecnicas("El Dragón");
dragon.costeKi = new CosteKi(1,3,3,0,0,0);
dragon.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Defensa adicional"],allEfectosTecnicas["Defensa adicional"].getNivelesEfecto()[4]));

tecnicasMuestra_set.push(dragon);

dragon = new TecnicaKi(1);
dragon.setNombre("Las garras");
dragon.setArbolTecnicas("El Dragón");
dragon.costeKi = new CosteKi(4,4,4,2,0,0);
dragon.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque adicional"],allEfectosTecnicas["Ataque adicional"].getNivelesEfecto()[0]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Aumento de daño"],allEfectosTecnicas["Aumento de daño"].getNivelesEfecto()[2]));

tecnicasMuestra_set.push(dragon);

dragon = new TecnicaKi(2);
dragon.setNombre("El colmillo");
dragon.setArbolTecnicas("El Dragón");
dragon.costeKi = new CosteKi(6,8,5,3,0,0);
dragon.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Destruir armadura"],allEfectosTecnicas["Destruir armadura"].getNivelesEfecto()[5]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Maniobras de combate y apuntar"],allEfectosTecnicas["Maniobras de combate y apuntar"].getNivelesEfecto()[2]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Habilidad de ataque"],allEfectosTecnicas["Habilidad de ataque"].getNivelesEfecto()[3]));

tecnicasMuestra_set.push(dragon);

dragon = new TecnicaKi(2);
dragon.setNombre("La cola");
dragon.setArbolTecnicas("El Dragón");
dragon.costeKi = new CosteKi(6,8,6,2,0,0);
dragon.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Habilidad de ataque"],allEfectosTecnicas["Habilidad de ataque"].getNivelesEfecto()[2]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque con área"],allEfectosTecnicas["Ataque con área"].getNivelesEfecto()[3]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Proyección"],allEfectosTecnicas["Proyección"].getNivelesEfecto()[6]));

tecnicasMuestra_set.push(dragon);

dragon = new TecnicaKi(3);
dragon.setNombre("El aliento del Dragón");
dragon.setArbolTecnicas("El Dragón");
dragon.costeKi = new CosteKi(10,10,10,15,6,0);
dragon.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque a distancia"],allEfectosTecnicas["Ataque a distancia"].getNivelesEfecto()[7]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque con área"],allEfectosTecnicas["Ataque con área"].getNivelesEfecto()[5]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque capaz de dañar energía"],allEfectosTecnicas["Ataque capaz de dañar energía"].getNivelesEfecto()[0]));
dragon.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Multiplicador al daño"],allEfectosTecnicas["Multiplicador al daño"].getNivelesEfecto()[0]));

var desventajaPredeterminacion = allDesventajasTecnicas["Predeterminación"];
dragon.addDesventaja(new DesventajaTecnicaElegida(desventajaPredeterminacion));

tecnicasMuestra_set.push(dragon);

