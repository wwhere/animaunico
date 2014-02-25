arbolesTecnicasMuestra_set.push("Las Cadenas");
var lasCadenas = new TecnicaKi(1);
lasCadenas.setNombre("Volgarath");
lasCadenas.setArbolTecnicas("Las Cadenas");
lasCadenas.costeKi = new CosteKi(0,0,5,5,5,0);
lasCadenas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Habilidad de ataque"],allEfectosTecnicas["Habilidad de ataque"].getNivelesEfecto()[1]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Aumento de daño"],allEfectosTecnicas["Aumento de daño"].getNivelesEfecto()[2]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque a distancia"],allEfectosTecnicas["Ataque a distancia"].getNivelesEfecto()[4]));

tecnicasMuestra_set.push(lasCadenas);

lasCadenas = new TecnicaKi(1);
lasCadenas.setNombre("Exelion");
lasCadenas.setArbolTecnicas("Las Cadenas");
lasCadenas.costeKi = new CosteKi(0,0,6,5,6,0);
lasCadenas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Aumento de daño"],allEfectosTecnicas["Aumento de daño"].getNivelesEfecto()[3]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque con área"],allEfectosTecnicas["Ataque con área"].getNivelesEfecto()[2]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque a distancia"],allEfectosTecnicas["Ataque a distancia"].getNivelesEfecto()[4]));


tecnicasMuestra_set.push(lasCadenas);

lasCadenas = new TecnicaKi(2);
lasCadenas.setNombre("Dedalus");
lasCadenas.setArbolTecnicas("Las Cadenas");
lasCadenas.costeKi = new CosteKi(0,0,8,8,8,0);
lasCadenas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Habilidad de ataque"],allEfectosTecnicas["Habilidad de ataque"].getNivelesEfecto()[3]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Apresamiento"],allEfectosTecnicas["Apresamiento"].getNivelesEfecto()[5]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque a distancia"],allEfectosTecnicas["Ataque a distancia"].getNivelesEfecto()[4]));

tecnicasMuestra_set.push(lasCadenas);

lasCadenas = new TecnicaKi(2);
lasCadenas.setNombre("Oberon");
lasCadenas.setArbolTecnicas("Las Cadenas");
lasCadenas.costeKi = new CosteKi(0,0,11,10,10,0);
lasCadenas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Habilidad de parada"],allEfectosTecnicas["Habilidad de parada"].getNivelesEfecto()[2]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Escudo de energía"],allEfectosTecnicas["Escudo de energía"].getNivelesEfecto()[6]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Reflectar el ataque"],allEfectosTecnicas["Reflectar el ataque"].getNivelesEfecto()[0]));

tecnicasMuestra_set.push(lasCadenas);

lasCadenas = new TecnicaKi(3);
lasCadenas.setNombre("Garuda");
lasCadenas.setArbolTecnicas("Las Cadenas");
lasCadenas.costeKi = new CosteKi(0,4,12,9,12,6);
lasCadenas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque adicional"],allEfectosTecnicas["Ataque adicional"].getNivelesEfecto()[3]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Destruir armadura"],allEfectosTecnicas["Destruir armadura"].getNivelesEfecto()[5]));
lasCadenas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque a distancia"],allEfectosTecnicas["Ataque a distancia"].getNivelesEfecto()[4]));

tecnicasMuestra_set.push(lasCadenas);


//TODO Sirius

//TODO Basis