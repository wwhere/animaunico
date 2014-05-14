var subviaCaos = new SubViaMagia(SUBVIA_CAOS,[VIA_NIGROMANCIA,VIA_ILUSION,VIA_ESENCIA,VIA_FUEGO,VIA_TIERRA,VIA_AGUA]);

subviaCaos.addConjuro(new Conjuro( CONJURO_CAOS_SENTIR_EL_CAOS, 4));
subviaCaos.addConjuro(new Conjuro( CONJURO_CAOS_AURA_DE_CAOS, 14));
subviaCaos.addConjuro(new Conjuro( CONJURO_CAOS_ALTERACION_DE_LA_PROBABILIDAD, 24));
subviaCaos.addConjuro(new Conjuro( CONJURO_CAOS_ALTERAR_LA_SUERTE, 34));
subviaCaos.addConjuro(new Conjuro( CONJURO_CAOS_CAMINOS_DEL_CAOS, 44));
subviaCaos.addConjuro(new Conjuro( CONJURO_CAOS_ABERRACION_CAOTICA, 54));
subviaCaos.addConjuro(new Conjuro( CONJURO_CAOS_MANIPULACION_DEL_CAOS, 64));
subviaCaos.addConjuro(new Conjuro( CONJURO_CAOS_MUTACION_CAOTICA, 74));
subviaCaos.addConjuro(new Conjuro( CONJURO_CAOS_CONTROL_DEL_CAOS, 84));
subviaCaos.addConjuro(new Conjuro( CONJURO_CAOS_CAOS_PRIMARIO, 94));

subvias_set.push(subviaCaos);

var subviaGuerra = new SubViaMagia(SUBVIA_GUERRA,[VIA_ESENCIA,VIA_AIRE,VIA_LUZ,VIA_AGUA,VIA_ILUSION,VIA_CREACION]);

subviaGuerra.addConjuro(new Conjuro( CONJURO_GUERRA_MORAL, 4));
subviaGuerra.addConjuro(new Conjuro( CONJURO_GUERRA_IRA_ANCESTRAL, 14));
subviaGuerra.addConjuro(new Conjuro( CONJURO_GUERRA_VELOCIDAD_EN_LA_BATALLA, 24));
subviaGuerra.addConjuro(new Conjuro( CONJURO_GUERRA_DESTRUCCION_DESENCADENADA, 34));
subviaGuerra.addConjuro(new Conjuro( CONJURO_GUERRA_PROTECCION_FINAL, 44));
subviaGuerra.addConjuro(new Conjuro( CONJURO_GUERRA_MARCHA_IMPLACABLE, 54));
subviaGuerra.addConjuro(new Conjuro( CONJURO_GUERRA_CAMPEON, 64));
subviaGuerra.addConjuro(new Conjuro( CONJURO_GUERRA_ORDENES_PRECISAS, 74));
subviaGuerra.addConjuro(new Conjuro( CONJURO_GUERRA_MAESTRO_DE_LA_GUERRA, 84));
subviaGuerra.addConjuro(new Conjuro( CONJURO_GUERRA_HASTA_MAS_ALLA_DEL_FIN, 94));

subvias_set.push(subviaGuerra);

var subviaLiterae = new SubViaMagia(SUBVIA_LITERAE,[VIA_NIGROMANCIA,VIA_DESTRUCCION,VIA_ESENCIA,VIA_FUEGO,VIA_AIRE,VIA_TIERRA]);

subviaLiterae.addConjuro(new Conjuro( CONJURO_LITERAE_PLUMA_DE_LA_REALIDAD, 4));
subviaLiterae.addConjuro(new Conjuro( CONJURO_LITERAE_MISIVA, 14));
subviaLiterae.addConjuro(new Conjuro( CONJURO_LITERAE_DIARIO_DE_VIAJE, 24));
subviaLiterae.addConjuro(new Conjuro( CONJURO_LITERAE_ORDEN_ESCRITA, 34));
subviaLiterae.addConjuro(new Conjuro( CONJURO_LITERAE_ESCUDO_DE_PALABRAS, 44));
subviaLiterae.addConjuro(new Conjuro( CONJURO_LITERAE_TEATRO_DE_LA_VIDA, 54));
subviaLiterae.addConjuro(new Conjuro( CONJURO_LITERAE_COMPENDIO, 64));
subviaLiterae.addConjuro(new Conjuro( CONJURO_LITERAE_DRAMATURGO, 74));
subviaLiterae.addConjuro(new Conjuro( CONJURO_LITERAE_SECUNDARIO, 84));
subviaLiterae.addConjuro(new Conjuro( CONJURO_LITERAE_TRAGEDIA, 94));

subvias_set.push(subviaLiterae);

var subviaMuerte = new SubViaMagia(SUBVIA_MUERTE,[VIA_CREACION,VIA_LUZ,VIA_ESENCIA,VIA_TIERRA,VIA_AGUA,VIA_AIRE,VIA_ILUSION]);

subviaMuerte.addConjuro(new Conjuro( CONJURO_MUERTE_AUTOPSIA, 4));
subviaMuerte.addConjuro(new Conjuro( CONJURO_MUERTE_RESISTENCIA_A_LA_MUERTE, 14));
subviaMuerte.addConjuro(new Conjuro( CONJURO_MUERTE_EXTERMINIO_MENOR, 24));
subviaMuerte.addConjuro(new Conjuro( CONJURO_MUERTE_GOLPE_DE_GRACIA, 34));
subviaMuerte.addConjuro(new Conjuro( CONJURO_MUERTE_PONER_EN_REPOSO, 44));
subviaMuerte.addConjuro(new Conjuro( CONJURO_MUERTE_SENTIR_LA_MUERTE, 54));
subviaMuerte.addConjuro(new Conjuro( CONJURO_MUERTE_MEMENTO_MORI, 64));
subviaMuerte.addConjuro(new Conjuro( CONJURO_MUERTE_MALDICION_MORTAL, 74));
subviaMuerte.addConjuro(new Conjuro( CONJURO_MUERTE_DETENER_LA_MUERTE, 84));
subviaMuerte.addConjuro(new Conjuro( CONJURO_MUERTE_LA_MUERTE, 94));

subvias_set.push(subviaMuerte);

var subviaMusical = new SubViaMagia(SUBVIA_MUSICAL,[VIA_DESTRUCCION,VIA_FUEGO,VIA_TIERRA,VIA_NIGROMANCIA]);

subviaMusical.addConjuro(new Conjuro( CONJURO_MUSICAL_TEMPO, 4));
subviaMusical.addConjuro(new Conjuro( CONJURO_MUSICAL_CANTABILE, 14));
subviaMusical.addConjuro(new Conjuro( CONJURO_MUSICAL_PLAGIO, 24));
subviaMusical.addConjuro(new Conjuro( CONJURO_MUSICAL_MEZZO_FORTE, 34));
subviaMusical.addConjuro(new Conjuro( CONJURO_MUSICAL_ADAGIO, 44));
subviaMusical.addConjuro(new Conjuro( CONJURO_MUSICAL_ALLEGRO, 54));
subviaMusical.addConjuro(new Conjuro( CONJURO_MUSICAL_PRESSTISIMO, 64));
subviaMusical.addConjuro(new Conjuro( CONJURO_MUSICAL_FORTISIMO, 74));
subviaMusical.addConjuro(new Conjuro( CONJURO_MUSICAL_MARZIALE, 84));
subviaMusical.addConjuro(new Conjuro( CONJURO_MUSICAL_ANIMA, 94));

subvias_set.push(subviaMusical);

var subviaNobleza = new SubViaMagia(SUBVIA_NOBLEZA,[VIA_CREACION,VIA_DESTRUCCION,VIA_ESENCIA,VIA_FUEGO,VIA_NIGROMANCIA]);

subviaNobleza.addConjuro(new Conjuro( CONJURO_NOBLEZA_ROSTRO, 4));
subviaNobleza.addConjuro(new Conjuro( CONJURO_NOBLEZA_PERFUME, 14));
subviaNobleza.addConjuro(new Conjuro( CONJURO_NOBLEZA_MUSA, 24));
subviaNobleza.addConjuro(new Conjuro( CONJURO_NOBLEZA_GUARDARROPA, 34));
subviaNobleza.addConjuro(new Conjuro( CONJURO_NOBLEZA_CONVERSACION_AGRADABLE, 44));
subviaNobleza.addConjuro(new Conjuro( CONJURO_NOBLEZA_GRANDEZA, 54));
subviaNobleza.addConjuro(new Conjuro( CONJURO_NOBLEZA_CONQUISTAR_CORAZONES, 64));
subviaNobleza.addConjuro(new Conjuro( CONJURO_NOBLEZA_PRESENCIA_ABSOLUTA, 74));
subviaNobleza.addConjuro(new Conjuro( CONJURO_NOBLEZA_PERFECCION, 84));
subviaNobleza.addConjuro(new Conjuro( CONJURO_NOBLEZA_EL_REY_DEL_MUNDO, 94));

subvias_set.push(subviaNobleza);

var subviaPaz = new SubViaMagia(SUBVIA_PAZ,[VIA_DESTRUCCION,VIA_OSCURIDAD,VIA_FUEGO,VIA_NIGROMANCIA,VIA_ILUSION]);

subviaPaz.addConjuro(new Conjuro( CONJURO_PAZ_ESCUDO_SALVADOR, 4));
subviaPaz.addConjuro(new Conjuro( CONJURO_PAZ_EQUILIBRIO_INTERIOR, 14));
subviaPaz.addConjuro(new Conjuro( CONJURO_PAZ_DEFENSOR, 24));
subviaPaz.addConjuro(new Conjuro( CONJURO_PAZ_DETECTAR_ARMONIA, 34));
subviaPaz.addConjuro(new Conjuro( CONJURO_PAZ_REMANSO_DE_PAZ, 44));
subviaPaz.addConjuro(new Conjuro( CONJURO_PAZ_SIGNO_DE_PAZ, 54));
subviaPaz.addConjuro(new Conjuro( CONJURO_PAZ_DEFENSA_ABSOLUTA, 64));
subviaPaz.addConjuro(new Conjuro( CONJURO_PAZ_ALAS_DE_SALVACION, 74));
subviaPaz.addConjuro(new Conjuro( CONJURO_PAZ_PAZ_ABSOLUTA, 84));
subviaPaz.addConjuro(new Conjuro( CONJURO_PAZ_PAX_IN_TERRAX, 94));

subvias_set.push(subviaPaz);

var subviaPecado = new SubViaMagia(SUBVIA_PECADO,[VIA_LUZ,VIA_ESENCIA,VIA_ILUSION,VIA_TIERRA,VIA_AGUA]);

subviaPecado.addConjuro(new Conjuro( CONJURO_PECADO_SENTIR_PECADO, 4));
subviaPecado.addConjuro(new Conjuro( CONJURO_PECADO_IMBUIR_PECADO, 14));
subviaPecado.addConjuro(new Conjuro( CONJURO_PECADO_GULA, 24));
subviaPecado.addConjuro(new Conjuro( CONJURO_PECADO_LUJURIA, 34));
subviaPecado.addConjuro(new Conjuro( CONJURO_PECADO_AVARICIA, 44));
subviaPecado.addConjuro(new Conjuro( CONJURO_PECADO_PEREZA, 54));
subviaPecado.addConjuro(new Conjuro( CONJURO_PECADO_SOBERBIA, 64));
subviaPecado.addConjuro(new Conjuro( CONJURO_PECADO_IRA, 74));
subviaPecado.addConjuro(new Conjuro( CONJURO_PECADO_ENVIDIA, 84));
subviaPecado.addConjuro(new Conjuro( CONJURO_PECADO_LA_SEMILLA_DEL_MAL, 94));

subvias_set.push(subviaPecado);

var subviaConocimiento = new SubViaMagia(SUBVIA_CONOCIMIENTO,[VIA_DESTRUCCION,VIA_TIERRA,VIA_FUEGO,VIA_ILUSION]);

subviaConocimiento.addConjuro(new Conjuro( CONJURO_CONOCIMIENTO_CATEGORIZAR, 4));
subviaConocimiento.addConjuro(new Conjuro( CONJURO_CONOCIMIENTO_CONOCIMIENTO, 14));
subviaConocimiento.addConjuro(new Conjuro( CONJURO_CONOCIMIENTO_SABER_DEBILIDAD, 24));
subviaConocimiento.addConjuro(new Conjuro( CONJURO_CONOCIMIENTO_SABER_LA_VERDAD, 34));
subviaConocimiento.addConjuro(new Conjuro( CONJURO_CONOCIMIENTO_CONOCIMIENTO_MAGICO, 44));
subviaConocimiento.addConjuro(new Conjuro( CONJURO_CONOCIMIENTO_CONOCIMIENTO_DE_COMBATE, 54));
subviaConocimiento.addConjuro(new Conjuro( CONJURO_CONOCIMIENTO_APRENDIZAJE, 64));
subviaConocimiento.addConjuro(new Conjuro( CONJURO_CONOCIMIENTO_CONSEJERO, 74));
subviaConocimiento.addConjuro(new Conjuro( CONJURO_CONOCIMIENTO_OTORGAR_CONOCIMIENTO, 84));
subviaConocimiento.addConjuro(new Conjuro( CONJURO_CONOCIMIENTO_VIDA, 94));

subvias_set.push(subviaConocimiento);

var subviaSangre = new SubViaMagia(SUBVIA_SANGRE,[VIA_LUZ,VIA_FUEGO,VIA_ILUSION,VIA_AIRE,VIA_TIERRA]);

subviaSangre.addConjuro(new Conjuro( CONJURO_SANGRE_RALENTIZAR_PULSO, 4));
subviaSangre.addConjuro(new Conjuro( CONJURO_SANGRE_COAGULAR, 14));
subviaSangre.addConjuro(new Conjuro( CONJURO_SANGRE_SANGRE_FRIA, 24));
subviaSangre.addConjuro(new Conjuro( CONJURO_SANGRE_CREACION_DE_SANGRE, 34));
subviaSangre.addConjuro(new Conjuro( CONJURO_SANGRE_TRANSFUSION, 44));
subviaSangre.addConjuro(new Conjuro( CONJURO_SANGRE_DESANGRAR, 54));
subviaSangre.addConjuro(new Conjuro( CONJURO_SANGRE_VAMPIRISMO, 64));
subviaSangre.addConjuro(new Conjuro( CONJURO_SANGRE_LAGRIMAS_DE_SANGRE, 74));
subviaSangre.addConjuro(new Conjuro( CONJURO_SANGRE_CORRIENTE_SANGUINEA, 84));
subviaSangre.addConjuro(new Conjuro( CONJURO_SANGRE_UN_MUNDO_DE_SANGRE, 94));

subvias_set.push(subviaSangre);

var subviaSueños = new SubViaMagia(SUBVIA_SUEÑOS,[VIA_LUZ,VIA_FUEGO,VIA_ILUSION,VIA_AIRE,VIA_TIERRA]);

subviaSueños.addConjuro(new Conjuro( CONJURO_SUEÑOS_SENTIR_LOS_SUEÑOS, 4));
subviaSueños.addConjuro(new Conjuro( CONJURO_SUEÑOS_SUEÑO_IMPERTURBABLE, 14));
subviaSueños.addConjuro(new Conjuro( CONJURO_SUEÑOS_ESPIAR_LOS_SUEÑOS, 24));
subviaSueños.addConjuro(new Conjuro( CONJURO_SUEÑOS_ALTERAR_LOS_SUEÑOS, 34));
subviaSueños.addConjuro(new Conjuro( CONJURO_SUEÑOS_CAMINANTE_NOCTAMBULO, 44));
subviaSueños.addConjuro(new Conjuro( CONJURO_SUEÑOS_SUEÑO_ETERNO, 54));
subviaSueños.addConjuro(new Conjuro( CONJURO_SUEÑOS_RASGAR_LA_MEMBRANA, 64));
subviaSueños.addConjuro(new Conjuro( CONJURO_SUEÑOS_DESTERRAR_A_LA_VIGILIA, 74));
subviaSueños.addConjuro(new Conjuro( CONJURO_SUEÑOS_ENTRE_SUEÑOS_Y_REALIDAD, 84));
subviaSueños.addConjuro(new Conjuro( CONJURO_SUEÑOS_HACER_LOS_SUEÑOS_REALIDAD, 94));

subvias_set.push(subviaSueños);

var subviaTiempo = new SubViaMagia(SUBVIA_TIEMPO,[VIA_LUZ,VIA_FUEGO,VIA_ILUSION,VIA_AIRE,VIA_TIERRA]);

subviaTiempo.addConjuro(new Conjuro( CONJURO_TIEMPO_CONOCIMIENTO_TEMPORAL, 4));
subviaTiempo.addConjuro(new Conjuro( CONJURO_TIEMPO_ACELERACION_TEMPORAL, 14));
subviaTiempo.addConjuro(new Conjuro( CONJURO_TIEMPO_LENTITUD_TEMPORAL, 24));
subviaTiempo.addConjuro(new Conjuro( CONJURO_TIEMPO_ESTANCAR_EL_TIEMPO, 34));
subviaTiempo.addConjuro(new Conjuro( CONJURO_TIEMPO_DETENER_EL_TIEMPO, 44));
subviaTiempo.addConjuro(new Conjuro( CONJURO_TIEMPO_RETROEVOLUCIONAR, 54));
subviaTiempo.addConjuro(new Conjuro( CONJURO_TIEMPO_DESHACER_EL_TIEMPO, 64));
subviaTiempo.addConjuro(new Conjuro( CONJURO_TIEMPO_SALTO_TEMPORAL, 74));
subviaTiempo.addConjuro(new Conjuro( CONJURO_TIEMPO_BUCLE_TEMPORAL, 84));
subviaTiempo.addConjuro(new Conjuro( CONJURO_TIEMPO_SOLAPAR_EL_TIEMPO, 94));

subvias_set.push(subviaTiempo);

var subviaUmbral = new SubViaMagia(SUBVIA_UMBRAL,[VIA_LUZ,VIA_ESENCIA,VIA_AGUA,VIA_CREACION,VIA_DESTRUCCION]);

subviaUmbral.addConjuro(new Conjuro( CONJURO_UMBRAL_OJOS_DEL_OTRO_LADO, 4));
subviaUmbral.addConjuro(new Conjuro( CONJURO_UMBRAL_SOMBRA_DEL_MIEDO, 14));
subviaUmbral.addConjuro(new Conjuro( CONJURO_UMBRAL_SUSURROS_DEL_OTRO_LADO, 24));
subviaUmbral.addConjuro(new Conjuro( CONJURO_UMBRAL_SENDA_DE_LA_LOCURA, 34));
subviaUmbral.addConjuro(new Conjuro( CONJURO_UMBRAL_ACECHAR_EN_LOS_SUEÑOS, 44));
subviaUmbral.addConjuro(new Conjuro( CONJURO_UMBRAL_AGUDIZAR, 54));
subviaUmbral.addConjuro(new Conjuro( CONJURO_UMBRAL_TERROR, 64));
subviaUmbral.addConjuro(new Conjuro( CONJURO_UMBRAL_SEÑOR_DE_LOS_LOCOS, 74));
subviaUmbral.addConjuro(new Conjuro( CONJURO_UMBRAL_ENCARNACION_DEL_MIEDO, 84));
subviaUmbral.addConjuro(new Conjuro( CONJURO_UMBRAL_EL_MIEDO_HECHO_CARNE, 94));

subvias_set.push(subviaUmbral);

var subviaVacio = new SubViaMagia(SUBVIA_VACIO,[VIA_LUZ,VIA_CREACION,VIA_TIERRA,VIA_FUEGO,VIA_ILUSION,VIA_ESENCIA]);

subviaVacio.addConjuro(new Conjuro( CONJURO_VACIO_SOMBRA_DE_VACIO, 4));
subviaVacio.addConjuro(new Conjuro( CONJURO_VACIO_ONDA_VACUA, 14));
subviaVacio.addConjuro(new Conjuro( CONJURO_VACIO_ESCUDO_DE_VACIO, 24));
subviaVacio.addConjuro(new Conjuro( CONJURO_VACIO_VERTICE_DE_REALIDAD, 34));
subviaVacio.addConjuro(new Conjuro( CONJURO_VACIO_NEGRA_HOJA_DE_PERDICION, 44));
subviaVacio.addConjuro(new Conjuro( CONJURO_VACIO_AURA_DE_VACIO, 54));
subviaVacio.addConjuro(new Conjuro( CONJURO_VACIO_PUNTOS_NEGROS, 64));
subviaVacio.addConjuro(new Conjuro( CONJURO_VACIO_PROTECCION_CONTRA_EL_VACIO, 74));
subviaVacio.addConjuro(new Conjuro( CONJURO_VACIO_IMPLOSION, 84));
subviaVacio.addConjuro(new Conjuro( CONJURO_VACIO_PUERTA_A_NINGUNA_PARTE, 94));

subvias_set.push(subviaVacio);
