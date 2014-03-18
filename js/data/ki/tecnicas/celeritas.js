arbolesTecnicasMuestra_set.push(KI_ARBOL_CELERITAS);
var celeritas = new TecnicaKi(1);
celeritas.setNombre(KI_TECNICA_EXCISUM_AERIS);
celeritas.setArbolTecnicas(KI_ARBOL_CELERITAS);
celeritas.costeKi = new CosteKi(4,0,4,0,2,0);
celeritas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA],allEfectosTecnicas[KI_EFECTO_ATAQUE_DISTANCIA].getNivelesEfecto()[3]));
celeritas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_INCREMENTAR_TURNO],allEfectosTecnicas[KI_EFECTO_INCREMENTAR_TURNO].getNivelesEfecto()[1]));

tecnicasMuestra_set.push(celeritas);

celeritas = new TecnicaKi(1);
celeritas.setNombre(KI_TECNICA_VELOCITAS_VENTUS);
celeritas.setArbolTecnicas(KI_ARBOL_CELERITAS);
celeritas.costeKi = new CosteKi(7,0,7,0,4,0);
celeritas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_ADICIONAL_LIMITADO],allEfectosTecnicas[KI_EFECTO_ATAQUE_ADICIONAL_LIMITADO].getNivelesEfecto()[2]));
celeritas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_INCREMENTAR_TURNO],allEfectosTecnicas[KI_EFECTO_INCREMENTAR_TURNO].getNivelesEfecto()[1]));

tecnicasMuestra_set.push(celeritas);

celeritas = new TecnicaKi(2);
celeritas.setNombre(KI_TECNICA_EXCISUM_MAGISTER);
celeritas.setArbolTecnicas(KI_ARBOL_CELERITAS);
celeritas.costeKi = new CosteKi(8,0,8,0,5,0);
celeritas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[4]));
celeritas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_INCREMENTAR_TURNO],allEfectosTecnicas[KI_EFECTO_INCREMENTAR_TURNO].getNivelesEfecto()[4]));

tecnicasMuestra_set.push(celeritas);

celeritas = new TecnicaKi(2);
celeritas.setNombre(KI_TECNICA_MAGNUS_EXACTOR);
celeritas.setArbolTecnicas(KI_ARBOL_CELERITAS);
celeritas.costeKi = new CosteKi(7,0,7,0,3,0);
celeritas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA],allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA].getNivelesEfecto()[2]));
celeritas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_INCREMENTAR_TURNO],allEfectosTecnicas[KI_EFECTO_INCREMENTAR_TURNO].getNivelesEfecto()[5]));

tecnicasMuestra_set.push(celeritas);

celeritas = new TecnicaKi(3);
celeritas.setNombre(KI_TECNICA_SUMMUN);
celeritas.setArbolTecnicas(KI_ARBOL_CELERITAS);
celeritas.costeKi = new CosteKi(15,0,17,0,8,0);
celeritas.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_ADICIONAL_LIMITADO],allEfectosTecnicas[KI_EFECTO_ATAQUE_ADICIONAL_LIMITADO].getNivelesEfecto()[6]));
celeritas.addEfectoSecundario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_INCREMENTAR_TURNO],allEfectosTecnicas[KI_EFECTO_INCREMENTAR_TURNO].getNivelesEfecto()[6]));

tecnicasMuestra_set.push(celeritas);

