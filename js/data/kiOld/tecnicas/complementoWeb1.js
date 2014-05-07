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

/**************** SIRIUS**********************/
arbolesTecnicasMuestra_set.push(KI_ARBOL_SIRIUS);

var sirius = new TecnicaKi(1);
sirius.setNombre(KI_TECNICA_ITAMI);
sirius.setArbolTecnicas(KI_ARBOL_SIRIUS);
sirius.costeKi = new CosteKi(0,0,4,0,4,4);
sirius.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[2]));
var efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ESTADOS],allEfectosTecnicas[KI_EFECTO_ESTADOS].getNivelesEfecto()[3]);
efectoEstado.addVentajaOpcional(
    new VentajaTecnicaElegida(
        allEfectosTecnicas[KI_EFECTO_ESTADOS].getVentajaOpcionalPorNombre(KI_EFECTO_VENTAJA_ESTADOS_PENALIZADOR),
        allEfectosTecnicas[KI_EFECTO_ESTADOS].getVentajaOpcionalPorNombre(KI_EFECTO_VENTAJA_ESTADOS_PENALIZADOR).getNivelPorNombre(KI_EFECTO_NIVEL_PENALIZADOR_ACCION)));
sirius.addEfectoSecundario(efectoEstado);
sirius.addDesventaja(new DesventajaTecnicaElegida(allDesventajasTecnicas[KI_TECN_DESV_DAÑO_REDUCIDO_NINGUNO]));

tecnicasMuestra_set.push(sirius);

sirius = new TecnicaKi(1);
sirius.setNombre(KI_TECNICA_HAKAI);
sirius.setArbolTecnicas(KI_ARBOL_SIRIUS);
sirius.costeKi = new CosteKi(0,0,6,0,6,6);
sirius.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[2]));
efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ESTADOS],allEfectosTecnicas[KI_EFECTO_ESTADOS].getNivelesEfecto()[4]);
efectoEstado.addVentajaOpcional(
    new VentajaTecnicaElegida(
        allEfectosTecnicas[KI_EFECTO_ESTADOS].getVentajaOpcionalPorNombre(KI_EFECTO_VENTAJA_ESTADOS_DAÑO),
        allEfectosTecnicas[KI_EFECTO_ESTADOS].getVentajaOpcionalPorNombre(KI_EFECTO_VENTAJA_ESTADOS_DAÑO).getNivelPorNombre(KI_EFECTO_NIVEL_DAÑO)));
sirius.addEfectoSecundario(efectoEstado);

tecnicasMuestra_set.push(sirius);

sirius = new TecnicaKi(2);
sirius.setNombre(KI_TECNICA_TOMERU);
sirius.setArbolTecnicas(KI_ARBOL_SIRIUS);
sirius.costeKi = new CosteKi(0,0,8,0,8,9);
sirius.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[3]));
efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ESTADOS],allEfectosTecnicas[KI_EFECTO_ESTADOS].getNivelesEfecto()[5]);
efectoEstado.addVentajaOpcional(
    new VentajaTecnicaElegida(
        allEfectosTecnicas[KI_EFECTO_ESTADOS].getVentajaOpcionalPorNombre(KI_EFECTO_VENTAJA_ESTADOS_PARALISIS_TOTAL),
        allEfectosTecnicas[KI_EFECTO_ESTADOS].getVentajaOpcionalPorNombre(KI_EFECTO_VENTAJA_ESTADOS_PARALISIS_TOTAL).getNivelPorNombre(KI_EFECTO_NIVEL_PARALIZACION_TOTAL)));
sirius.addEfectoSecundario(efectoEstado);
sirius.addDesventaja(new DesventajaTecnicaElegida(allDesventajasTecnicas[KI_TECN_DESV_DAÑO_REDUCIDO_NINGUNO]));

tecnicasMuestra_set.push(sirius);

sirius = new TecnicaKi(2);
sirius.setNombre(KI_TECNICA_YOWAI);
sirius.setArbolTecnicas(KI_ARBOL_SIRIUS);
sirius.costeKi = new CosteKi(0,0,8,0,7,8);
sirius.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[3]));
efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ESTADOS],allEfectosTecnicas[KI_EFECTO_ESTADOS].getNivelesEfecto()[6]);
efectoEstado.addVentajaOpcional(
    new VentajaTecnicaElegida(
        allEfectosTecnicas[KI_EFECTO_ESTADOS].getVentajaOpcionalPorNombre(KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_RF),
        allEfectosTecnicas[KI_EFECTO_ESTADOS].getVentajaOpcionalPorNombre(KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_RF).getNivelPorNombre(KI_EFECTO_NIVEL_REDUCCION_RF)));
sirius.addEfectoSecundario(efectoEstado);
sirius.addDesventaja(new DesventajaTecnicaElegida(allDesventajasTecnicas[KI_TECN_DESV_DAÑO_REDUCIDO_NINGUNO]));

tecnicasMuestra_set.push(sirius);

sirius = new TecnicaKi(3);
sirius.setNombre(KI_TECNICA_KOROSU);
sirius.setArbolTecnicas(KI_ARBOL_SIRIUS);
sirius.costeKi = new CosteKi(0,0,11,0,11,10);
sirius.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[4]));
efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ESTADOS],allEfectosTecnicas[KI_EFECTO_ESTADOS].getNivelesEfecto()[5]);
efectoEstado.addVentajaOpcional(
    new VentajaTecnicaElegida(
        allEfectosTecnicas[KI_EFECTO_ESTADOS].getVentajaOpcionalPorNombre(KI_EFECTO_VENTAJA_ESTADOS_MUERTE),
        allEfectosTecnicas[KI_EFECTO_ESTADOS].getVentajaOpcionalPorNombre(KI_EFECTO_VENTAJA_ESTADOS_MUERTE).getNivelPorNombre(KI_EFECTO_NIVEL_MUERTE)));
sirius.addEfectoSecundario(efectoEstado);
sirius.addDesventaja(new DesventajaTecnicaElegida(allDesventajasTecnicas[KI_TECN_DESV_DAÑO_REDUCIDO_NINGUNO]));

tecnicasMuestra_set.push(sirius);

/**************** BASIS**********************/
arbolesTecnicasMuestra_set.push(KI_ARBOL_BASIS);

var basis = new TecnicaKi(1);
basis.setNombre(KI_TECNICA_TAJO_CARMESI);
basis.setArbolTecnicas(KI_ARBOL_BASIS);
basis.costeKi = new CosteKi(0,4,4,4,0,0);
basis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_PARADA],allEfectosTecnicas[KI_EFECTO_HABILIDAD_PARADA].getNivelesEfecto()[2]));
efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_AUMENTAR_ARMADURA],allEfectosTecnicas[KI_EFECTO_AUMENTAR_ARMADURA].getNivelesEfecto()[3]);
basis.addEfectoSecundario(efectoEstado);

tecnicasMuestra_set.push(basis);

basis = new TecnicaKi(1);
basis.setNombre(KI_TECNICA_ESCUDO_DEL_ALBA);
basis.setArbolTecnicas(KI_ARBOL_BASIS);
basis.costeKi = new CosteKi(0,6,4,5,0,0);
basis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[2]));
efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_DESTRUIR_ARMADURA],allEfectosTecnicas[KI_EFECTO_DESTRUIR_ARMADURA].getNivelesEfecto()[3]);
basis.addEfectoSecundario(efectoEstado);

tecnicasMuestra_set.push(basis);

basis = new TecnicaKi(2);
basis.setNombre(KI_TECNICA_DESTELLO_FINAL);
basis.setArbolTecnicas(KI_ARBOL_BASIS);
basis.costeKi = new CosteKi(0,6,5,6,3,0);
basis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_ATAQUE].getNivelesEfecto()[3]));
efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO],allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO].getNivelesEfecto()[3]);
basis.addEfectoSecundario(efectoEstado);
efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA],allEfectosTecnicas[KI_EFECTO_ATAQUE_AREA].getNivelesEfecto()[3]);
basis.addEfectoSecundario(efectoEstado);

tecnicasMuestra_set.push(basis);

basis = new TecnicaKi(2);
basis.setNombre(KI_TECNICA_IMPLOSION);
basis.setArbolTecnicas(KI_ARBOL_BASIS);
basis.costeKi = new CosteKi(0,6,6,6,0,0);
basis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_MULTIPLICADOR_DAÑO],allEfectosTecnicas[KI_EFECTO_MULTIPLICADOR_DAÑO].getNivelesEfecto()[1]));

tecnicasMuestra_set.push(basis);

basis = new TecnicaKi(3);
basis.setNombre(KI_TECNICA_EL_LATIDO_DEL_TRUENO);
basis.setArbolTecnicas(KI_ARBOL_BASIS);
basis.costeKi = new CosteKi(0,10,12,11,3,0);
basis.fijaComoPrimario(new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_PARADA],allEfectosTecnicas[KI_EFECTO_HABILIDAD_PARADA].getNivelesEfecto()[5]));
efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_HABILIDAD_CONTRATAQUE],allEfectosTecnicas[KI_EFECTO_HABILIDAD_CONTRATAQUE].getNivelesEfecto()[4]);
basis.addEfectoSecundario(efectoEstado);
efectoEstado = new EfectoTecnicaElegido(allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO],allEfectosTecnicas[KI_EFECTO_AUMENTO_DAÑO].getNivelesEfecto()[4]);
basis.addEfectoSecundario(efectoEstado);

tecnicasMuestra_set.push(basis);