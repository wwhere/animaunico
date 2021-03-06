var viaLibre = new ViaMagia(VIA_LIBRE_ACCESO,VIA_LIBRE_ACCESO_DESCRIPCION,"");

viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CREAR_LLAMAS, 10, [VIA_AGUA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_MOVER_OBJETOS, 10, [VIA_DESTRUCCION,VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CREAR_MUSICA, 10, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ASEAMIENTO, 10, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_SALTAR, 10, [VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_APERTURA, 10, [VIA_DESTRUCCION,VIA_FUEGO] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ATAR, 10, [VIA_DESTRUCCION,VIA_ILUSION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DETECCION_DE_MAGIA, 10, [VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DETENER_CAIDA, 10, [VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DESHACER_ESCRITURA, 10, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_MENSAJE_ESTATICO, 10, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CAMBIAR_DE_COLOR, 10, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CREAR_SONIDOS, 20, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_RECREAR_IMAGEN, 20, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ENCANTAR, 20, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_RESPIRAR_LIQUIDOS, 20, [VIA_TIERRA,VIA_FUEGO] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_TREPAR, 20, [VIA_AIRE] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_NIEBLA, 20, [VIA_FUEGO] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ZONA_RESBALADIZA, 20, [VIA_FUEGO] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_REPARACION, 20, [VIA_DESTRUCCION,VIA_ILUSION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PASAR_SIN_DEJAR_MARCA, 20, [VIA_LUZ] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ATRAER_ALIMAÑAS_MENORES, 20, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_BOLSA_INFINITA, 20, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_INHUMANIDAD, 20, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_NUBES, 30, [VIA_FUEGO,VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CAUSAR_MIEDO, 30, [VIA_LUZ] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PROTECCION_MAGICA, 30, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ESCUDO_MAGICO, 30, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CELERIDAD, 30, [VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_SERENIDAD, 30, [VIA_FUEGO,VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_RED, 30, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_COMPRENSION_DE_IDIOMAS, 30, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_LEVITACION, 30, [VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ENVIAR_MENSAJE, 30, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PROTECCION_ANTICONCEPTIVA, 30, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CERRAR_MAGICAMENTE, 30, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CERRAR_REALMENTE, 40, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PURIFICACION, 40, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CAMBIO_DE_ASPECTO, 40, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_MODIFICAR_EL_TAMAÑO, 40, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_INVOCAR_AGRESIVIDAD, 40, [VIA_LUZ] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ELIMINAR_CONJUROS, 40, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_RESISTENCIA_AL_DOLOR, 40, [VIA_ESENCIA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DESCARGA_DE_MAGIA, 40, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ELIMINAR_LOS_SUEÑOS, 40, [VIA_LUZ,VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_EXTENDER_LA_PRESENCIA, 40, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CURAR_ENFERMEDADES, 40, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PERCIBIR_SENTIMIENTOS, 40, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ANULACION_DE_MAGIA, 50, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DESHACER, 50, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_MALDICION, 50, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_LEER_LA_MENTE, 50, [VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ALTERAR_ENERGIA, 50, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ENVIAR_SUEÑOS, 50, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ABSORBER_INFORMACION, 50, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_AMISTAD, 50, [VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CAUSAR_ENFERMEDAD, 50, [VIA_ILUSION,VIA_AGUA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_TRANSPORTE_RAPIDO, 50, [VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ENLENTECER, 50, [VIA_AIRE] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_MOSTRAR_LO_INVISIBLE, 50, [VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CEGUERA, 60, [VIA_CREACION,VIA_LUZ] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_VISUALIZAR_CARTOGRAFIA, 60, [VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_SORDERA, 60, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_MUDEZ, 60, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CURAR_HERIDAS, 60, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ELIMINAR_CANSANCIO, 60, [VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_MONTURA_MAGICA, 60, [VIA_ILUSION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ANDAR_POR_LAS_PAREDES, 60, [VIA_AGUA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_FUSIONAR_CON_EL_CUERPO, 60, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_NUBE_ACIDA, 60, [VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DESPROTEGER, 60, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DORMIR, 60, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_AUMENTAR_CARACTERISTICAS_MENTALES, 70, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ALTERACION_MENOR, 70, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CREAR_EMOCIONES, 70, [VIA_ILUSION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PARALIZAR, 70, [VIA_AIRE] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_AUMENTAR_CARACTERISTICAS_FISICAS, 70, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ARMA_MAGICA, 70, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DEBILIDAD, 70, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CUERPO_A_MAGIA, 70, [VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_RESISTIR, 70, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_OLVIDO, 70, [VIA_ESENCIA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_RECHAZO, 70, [VIA_ESENCIA,VIA_AGUA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PLAGA, 70, [VIA_ILUSION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_INUTILIDAD, 80, [VIA_AGUA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ESFERA_DE_LEVITACION, 80, [VIA_TIERRA,VIA_AGUA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_VUELO, 80, [VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DOMINIO, 80, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ERUDICION_DEFENSIVA, 80, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_INVISIBILIDAD, 80, [VIA_ESENCIA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DESVIAR_TRAYECTORIA, 80, [VIA_FUEGO] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ESTANCAR_CONJURO, 80, [VIA_AIRE] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CONTENCION, 80, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_MARCA_DE_DETECCION, 80, [VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ERUDICION_OFENSIVA, 80, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_BLANCO_PERFECTO, 80, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DESENCANTAMIENTO, 90, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CONJURO_NATURAL, 90, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_INMORTALIDAD, 90, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ELIMINAR_NECESIDADES, 90, [VIA_ESENCIA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ROBAR_CONJURO, 90, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PORTAL, 90, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PRISMA_DE_MAGIA, 90, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_LOCALIZACION, 90, [VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_INMUNIDAD_FISICA, 90, [VIA_ESENCIA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_DEVOLUCION_DE_CONJURO, 90, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PREPARAR_CONJURO, 90, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_TELETRANSPORTE, 90, [VIA_TIERRA] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_OJO_DEL_TIEMPO, 100, [VIA_OSCURIDAD] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_SELLAR, 100, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_EL_DON_DEL_CONOCIMIENTO, 100, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_ESCUDAR_CONTRA_PODERES, 100, [VIA_CREACION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_FORTALECER_LA_MAGIA, 100, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_CONDICIONAMIENTO, 100, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_POSESION, 100, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_IMITAR_CONJURO, 100, [VIA_DESTRUCCION] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_MAGIA_INNATA, 100, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_VINCULAR_MANTENIMIENTO, 100, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_EL_MAGISTRADO, 100, [] ));
viaLibre.addConjuro(new Conjuro( CONJURO_LIBRE_PREDESTINACION, 100, [] ));



vias_set.push(viaLibre);