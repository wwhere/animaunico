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