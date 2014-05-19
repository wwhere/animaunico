
addHabilidadKi(new HabilidadKi(HAB_KI_USO_DEL_KI, "", 40, [], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_CONTROL_DEL_KI, "", 30, [HAB_KI_USO_DEL_KI], efectoControlKi, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_DETECCION_KI, "", 20, [HAB_KI_CONTROL_DEL_KI], efectoDeteccionKi, true, HB_ADVERTIR, []));
addHabilidadKi(new HabilidadKi(HAB_KI_ERUDICION, "", 10, [HAB_KI_DETECCION_KI], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_ELIMINACION_PESO, "", 10, [HAB_KI_USO_DEL_KI], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_LEVITACION, "", 20, [HAB_KI_ELIMINACION_PESO], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_MOVIMIENTO_OBJETOS, "", 10, [HAB_KI_LEVITACION], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_VUELO, "", 20, [HAB_KI_LEVITACION], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_EXTRUSION_DE_PRESENCIA, "", 10, [HAB_KI_USO_DEL_KI], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_ARMADURA_ENERGIA, "", 10, [HAB_KI_EXTRUSION_DE_PRESENCIA], efectoKiArmaduraEnergia, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_EXTENSION_AURA_ARMA, "", 10, [HAB_KI_EXTRUSION_DE_PRESENCIA], efectoExtrusionAura, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_DESTRUCCION_KI, "", 20, [HAB_KI_EXTRUSION_DE_PRESENCIA], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_TRANSMISION_KI, "", 10, [HAB_KI_USO_DEL_KI], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_CURACION_KI, "", 10, [HAB_KI_TRANSMISION_KI], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_USO_ENERGIA_NECESARIA, "", 10, [HAB_KI_USO_DEL_KI], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_OCULTACION_KI, "", 10, [HAB_KI_USO_ENERGIA_NECESARIA], efectoOcultacionKi, true, HB_OCULTARSE, []));
addHabilidadKi(new HabilidadKi(HAB_KI_FALSA_MUERTE, "", 10, [HAB_KI_OCULTACION_KI], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_ELIMINACION_NECESIDADES, "", 10, [HAB_KI_USO_ENERGIA_NECESARIA], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_ELIMINACION_PENALIZADORES, "", 20, [HAB_KI_USO_ENERGIA_NECESARIA], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_RECUPERACION, "", 20, [HAB_KI_ELIMINACION_PENALIZADORES], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_AUMENTO_CARACTERISTICAS, "", 20, [HAB_KI_USO_ENERGIA_NECESARIA], sinEfecto, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_INHUMANIDAD, "", 30, [HAB_KI_USO_DEL_KI], efectoInhumanidad, false, []));
addHabilidadKi(new HabilidadKi(HAB_KI_ZEN, "", 50, [HAB_KI_INHUMANIDAD], efectoZen, false, []));

addHabilidadKi(new HabilidadKi(HAB_KI_MOVIMIENTO_DE_MASAS, "", 20, [HAB_KI_MOVIMIENTO_OBJETOS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ARMADURA_DE_ENERGIA_MAYOR, "", 10, [HAB_KI_ARMADURA_ENERGIA], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_HAB_KI_ARMADURA_DE_ENERGIA_ARCANA, "", 10, [HAB_KI_ARMADURA_DE_ENERGIA_MAYOR], efectoKiArmaduraEnergia, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ATAQUE_ELEMENTAL_FUEGO, "", 10, [HAB_KI_EXTENSION_AURA_ARMA], efectoKiAtaqueElementalFuego, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ATAQUE_ELEMENTAL_AIRE, "", 10, [HAB_KI_EXTENSION_AURA_ARMA], efectoKiAtaqueElementalAire, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ATAQUE_ELEMENTAL_AGUA, "", 10, [HAB_KI_EXTENSION_AURA_ARMA], efectoKiAtaqueElementalAgua, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ATAQUE_ELEMENTAL_TIERRA, "", 10, [HAB_KI_EXTENSION_AURA_ARMA], efectoKiAtaqueElementalTierra, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ATAQUE_ELEMENTAL_LUZ, "", 10, [HAB_KI_EXTENSION_AURA_ARMA], efectoKiAtaqueElementalLuz, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ATAQUE_ELEMENTAL_OSCURIDAD, "", 10, [HAB_KI_EXTENSION_AURA_ARMA], efectoKiAtaqueElementalOscuridad, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_DAÑO_INCREMENTADO, "", 10, [HAB_KI_EXTENSION_AURA_ARMA], efectoKiDañoIncrementado, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ALCANCE_INCREMENTADO, "", 10, [HAB_KI_EXTENSION_AURA_ARMA], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_VELOCIDAD_INCREMENTADA, "", 10, [HAB_KI_EXTENSION_AURA_ARMA], efectoKiVelocidadIncrementada, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ABSORCION_DE_ENERGIA, "", 30, [HAB_KI_EXTRUSION_DE_PRESENCIA], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ESCUDO_FISICO, "", 10, [HAB_KI_EXTRUSION_DE_PRESENCIA], efectoKiEscudoFisico, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_CURACION_SUPERIOR, "", 10, [HAB_KI_CURACION_KI], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_ESTABILIZAR, "", 10, [HAB_KI_CURACION_KI], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_SACRIFICIO_VITAL, "", 10, [HAB_KI_TRANSMISION_KI], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_AURA_DE_OCULTACION, "", 10, [HAB_KI_OCULTACION_KI], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_INMUNIDAD_ELEMENTAL_FUEGO, "", 20, [HAB_KI_ELIMINACION_NECESIDADES], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_INMUNIDAD_ELEMENTAL_FRIO, "", 20, [HAB_KI_ELIMINACION_NECESIDADES], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_INMUNIDAD_ELEMENTAL_ELECTRICIDAD, "", 20, [HAB_KI_ELIMINACION_NECESIDADES], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_RESTITUIR_A_OTROS, "", 10, [HAB_KI_RECUPERACION], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_INCREMENTO_SUPERIOR, "", 20, [HAB_KI_AUMENTO_CARACTERISTICAS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_TECNICAS_DE_COMBATE_IMPROVISADAS, "", 50, [HAB_KI_USO_DEL_KI], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_FORZAR_TECNICAS, "", 20, [HAB_KI_USO_DEL_KI], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_AURA_DE_COMBATE, "", 40, [HAB_KI_CONTROL_DEL_KI], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_DOMINIO_FISICO, "", 10, [HAB_KI_CONTROL_DEL_KI], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_CAMBIO_FISICO, "", 30, [HAB_KI_DOMINIO_FISICO], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_CAMBIO_SUPERIOR, "", 20, [HAB_KI_CAMBIO_FISICO], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_MULTIPLICACION_DE_CUERPOS, "", 30, [HAB_KI_DOMINIO_FISICO], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_MULTIPLICACION_DE_CUERPOS_MAYOR, "", 30, [HAB_KI_MULTIPLICACION_DE_CUERPOS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_MULTIPLICACION_DE_CUERPOS_ARCANA, "", 40, [HAB_KI_MULTIPLICACION_DE_CUERPOS_MAYOR], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_MAGNITUD, "", 30, [HAB_KI_MULTIPLICACION_DE_CUERPOS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_MAGNITUD_ARCANA, "", 40, [HAB_KI_MAGNITUD], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_CONTROL_DE_LA_EDAD, "", 20, [HAB_KI_DOMINIO_FISICO], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_KI_IMITACION_DE_TECNICAS, "", 50, [HAB_KI_CONTROL_DEL_KI], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));

addHabilidadKi(new HabilidadKi(HAB_NEMESIS_USO_DEL_NEMESIS, "", 70, [], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_ARMADURA_DE_VACIO, "", 20, [HAB_NEMESIS_USO_DEL_NEMESIS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_NOHT, "", 30, [HAB_NEMESIS_ARMADURA_DE_VACIO], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_ANULACION_DE_KI, "", 30, [HAB_NEMESIS_USO_DEL_NEMESIS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_ANULACION_DE_KI_MAYOR, "", 20, [HAB_NEMESIS_ANULACION_DE_KI], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_ANULACION_DE_MAGIA, "", 30, [HAB_NEMESIS_USO_DEL_NEMESIS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_ANULACION_DE_MAGIA_MAYOR, "", 20, [HAB_NEMESIS_ANULACION_DE_MAGIA], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_ANULACION_DE_MATRICES, "", 30, [HAB_NEMESIS_USO_DEL_NEMESIS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_ANULACION_DE_MATRICES_MAYOR, "", 20, [HAB_NEMESIS_ANULACION_DE_MATRICES], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_ANULACION_DE_LAZOS, "", 30, [HAB_NEMESIS_USO_DEL_NEMESIS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_EXTRUSION_DE_VACIO, "", 30, [HAB_NEMESIS_USO_DEL_NEMESIS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_CUERPO_DE_VACIO, "", 10, [HAB_NEMESIS_USO_DEL_NEMESIS], efectoNemesisCuerpoDeVacio, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_SIN_NECESIDADES, "", 10, [HAB_NEMESIS_CUERPO_DE_VACIO], efectoNemesisCuerpoDeVacio, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_MOVIMIENTO_DE_VACIO, "", 20, [HAB_NEMESIS_CUERPO_DE_VACIO], efectoNemesisCuerpoDeVacio, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_FORMA_DE_VACIO, "", 30, [HAB_NEMESIS_CUERPO_DE_VACIO, HAB_NEMESIS_EXTRUSION_DE_VACIO], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_ESENCIA_DE_VACIO, "", 20, [HAB_NEMESIS_CUERPO_DE_VACIO], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_UNO_CON_LA_NADA, "", 40, [HAB_NEMESIS_ESENCIA_DE_VACIO], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_AURA_DE_VACIO, "", 30, [HAB_NEMESIS_USO_DEL_NEMESIS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_INDETECCION, "", 10, [HAB_NEMESIS_USO_DEL_NEMESIS], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_INHUMANIDAD, "", 20, [HAB_NEMESIS_USO_DEL_NEMESIS], efectoInhumanidad, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_NEMESIS_ZEN, "", 40, [HAB_NEMESIS_INHUMANIDAD], efectoZen, false, [FLAG_DOMINUS_EXXET_ENABLED]));

addHabilidadKi(new HabilidadKi(HAB_SELLO_KI_AIRE_MENOR, "", 30, [], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_SELLO_KI_AIRE_MAYOR, "", 60, [HAB_SELLO_KI_AIRE_MENOR], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_SELLO_KI_AGUA_MENOR, "", 30, [], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_SELLO_KI_AGUA_MAYOR, "", 60, [HAB_SELLO_KI_AGUA_MENOR], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_SELLO_KI_FUEGO_MENOR, "", 30, [], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_SELLO_KI_FUEGO_MAYOR, "", 60, [HAB_SELLO_KI_FUEGO_MENOR], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_SELLO_KI_METAL_MENOR, "", 30, [], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_SELLO_KI_METAL_MAYOR, "", 60, [HAB_SELLO_KI_METAL_MENOR], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_SELLO_KI_MADERA_MENOR, "", 30, [], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));
addHabilidadKi(new HabilidadKi(HAB_SELLO_KI_MADERA_MAYOR, "", 60, [HAB_SELLO_KI_MADERA_MENOR], sinEfecto, false, [FLAG_DOMINUS_EXXET_ENABLED]));







