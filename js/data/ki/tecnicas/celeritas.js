arbolesTecnicasMuestra_set.push("Celéritas");
var celeritas = new TecnicaKi(1);
celeritas.setNombre("Excisum Aeris");
celeritas.setArbolTecnicas("Celéritas");
celeritas.costeKi = new CosteKi(4,0,4,0,2,0);
celeritas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque a distancia"],allEfectosTecnicas["Ataque a distancia"].getNivelesEfecto()[3]));
celeritas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Incrementar turno"],allEfectosTecnicas["Incrementar turno"].getNivelesEfecto()[1]));

tecnicasMuestra_set.push(celeritas);

celeritas = new TecnicaKi(1);
celeritas.setNombre("Velocitas Ventus");
celeritas.setArbolTecnicas("Celéritas");
celeritas.costeKi = new CosteKi(7,0,7,0,4,0);
celeritas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque adicional limitado"],allEfectosTecnicas["Ataque adicional limitado"].getNivelesEfecto()[2]));
celeritas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Incrementar turno"],allEfectosTecnicas["Incrementar turno"].getNivelesEfecto()[1]));

tecnicasMuestra_set.push(celeritas);

celeritas = new TecnicaKi(2);
celeritas.setNombre("Excisum Magister");
celeritas.setArbolTecnicas("Celéritas");
celeritas.costeKi = new CosteKi(8,0,8,0,5,0);
celeritas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Habilidad de ataque"],allEfectosTecnicas["Habilidad de ataque"].getNivelesEfecto()[4]));
celeritas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Incrementar turno"],allEfectosTecnicas["Incrementar turno"].getNivelesEfecto()[4]));

tecnicasMuestra_set.push(celeritas);

celeritas = new TecnicaKi(2);
celeritas.setNombre("Magnus Exactor");
celeritas.setArbolTecnicas("Celéritas");
celeritas.costeKi = new CosteKi(7,0,7,0,3,0);
celeritas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque con área"],allEfectosTecnicas["Ataque con área"].getNivelesEfecto()[2]));
celeritas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Incrementar turno"],allEfectosTecnicas["Incrementar turno"].getNivelesEfecto()[5]));

tecnicasMuestra_set.push(celeritas);

celeritas = new TecnicaKi(3);
celeritas.setNombre("Summun");
celeritas.setArbolTecnicas("Celéritas");
celeritas.costeKi = new CosteKi(15,0,17,0,8,0);
celeritas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas["Ataque adicional limitado"],allEfectosTecnicas["Ataque adicional limitado"].getNivelesEfecto()[6]));
celeritas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas["Incrementar turno"],allEfectosTecnicas["Incrementar turno"].getNivelesEfecto()[6]));

tecnicasMuestra_set.push(celeritas);

