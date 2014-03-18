/*** habilidades de ki ****/

var HAB_KI_USO_DEL_KI = "Uso del Ki";
var HAB_KI_CONTROL_DEL_KI = "Control del Ki";
var HAB_KI_DETECCION_KI = "Detección del Ki";
var HAB_KI_ERUDICION = "Erudición";
var HAB_KI_ELIMINACION_PESO = "Eliminación de peso";
var HAB_KI_LEVITACION = "Levitación";
var HAB_KI_MOVIMIENTO_OBJETOS = "Movimiento de objetos";
var HAB_KI_VUELO = "Vuelo";
var HAB_KI_EXTRUSION_DE_PRESENCIA = "Extrusión de presencia";
var HAB_KI_ARMADURA_ENERGIA = "Armadura de energía";
var HAB_KI_EXTENSION_AURA_ARMA = "Extensión del aura al arma";
var HAB_KI_DESTRUCCION_KI = "Destrucción por Ki";
var HAB_KI_TRANSMISION_KI = "Transmisión del Ki";
var HAB_KI_CURACION_KI = "Curación por Ki";
var HAB_KI_USO_ENERGIA_NECESARIA = "Uso de la Energía Necesaria";
var HAB_KI_OCULTACION_KI = "Ocultación del Ki";
var HAB_KI_FALSA_MUERTE = "Falsa muerte";
var HAB_KI_ELIMINACION_NECESIDADES = "Eliminación de necesidades";
var HAB_KI_ELIMINACION_PENALIZADORES = "Eliminación de penalizadores";
var HAB_KI_RECUPERACION = "Recuperación";
var HAB_KI_AUMENTO_CARACTERISTICAS = "Aumento de características";
var HAB_KI_INHUMANIDAD = "Inhumanidad";
var HAB_KI_ZEN = "Zen";

/**** desventajas de técnicas ***/

var KI_TECN_DESV_ATADURA_ELEMENTAL_1 = "Atadura elemental (1 elemento)";
var KI_TECN_DESV_ATADURA_ELEMENTAL_2 = "Atadura elemental (2 elementos)";
var KI_TECN_DESV_DAÑO_REDUCIDO_MITAD = "Daño reducido (Mitad de daño)";
var KI_TECN_DESV_DAÑO_REDUCIDO_NINGUNO = "Daño reducido (Ningún daño)";
var KI_TECN_DESV_REQUERIMIENTOS_ESPECIALES_SIMPLE = "Requerimientos especiales (Intesidad simple)";
var KI_TECN_DESV_REQUERIMIENTOS_ESPECIALES_MAYOR = "Requerimientos especiales (Intesidad mayor)";
var KI_TECN_DESV_CONDICION_DETERMINADA = "Condición determinada";
var KI_TECN_DESV_PREDETERMINACION = "Predeterminación";

/**** efectos de accion de técnicas ***/

var KI_EFECTO_ATAQUE_ADICIONAL = "Ataque adicional";
var KI_EFECTO_VENTAJA_ATAQUE_ADICIONAL_ATAQUE_CONTINUO = "Ataque continuo";
var KI_EFECTO_TECNICA_VENTAJA_ATAQUE_CONTINUO = "Ataque continuo";
var KI_EFECTO_TECNICA_ATAQUE_ADICIONAL_BONO_CANSANCIO = "Bono de Cansancio añadido";
var KI_EFECTO_TECNICA_VENTAJA_CANSANCIO_AÑADIDO = "Cansancio añadido";
var KI_EFECTO_ATAQUE_ADICIONAL_LIMITADO = "Ataque adicional limitado";
var KI_EFECTO_VENTAJA_ATAQUE_ADICIONAL_LIMITADO_ATAQUE_CONTINUO = "Ataque continuo";
var KI_EFECTO_DEFENSA_ADICIONAL = "Defensa adicional";
var KI_EFECTO_NIVEL_ILIMITADAS = "Ilimitadas";
var KI_EFECTO_TECNICA_DEFENSA_ADICIONAL_BONO_CANSANCIO = "Bono de Cansancio añadido";
var KI_EFECTO_ACCION_ADICIONAL = "Acción adicional";
var KI_EFECTO_TECNICA_ACCION_ADICIONAL_BONO_CANSANCIO = "Bono de Cansancio añadido";

/**** efectos DEFENSIVOS de técnicas ***/
var KI_EFECTO_HABILIDAD_PARADA = "Habilidad de parada";
var KI_EFECTO_HABILIDAD_PARADA_LIMITADA = "Habilidad de parada limitada";
var KI_EFECTO_HABILIDAD_ESQUIVA = "Habilidad de esquiva";
var KI_EFECTO_HABILIDAD_ESQUIVA_LIMITADA = "Habilidad de esquiva limitada";

/**** efectos DESTRUCTIVOS de técnicas ***/
var KI_EFECTO_MULTIPLICADOR_DAÑO = "Multiplicador al daño";
var KI_EFECTO_AUMENTO_DAÑO = "Aumento de daño";
var KI_EFECTO_VENTAJA_AUMENTO_DAÑO_SACRIFICIO = "Sacrificio";
var KI_EFECTO_NIVEL_SACRIFICIO_VITAL = "Sacrificio vital";
var KI_EFECTO_NIVEL_SACRIFICIO_VITAL_DOBLE = "Sacrificio vital doble";
var KI_EFECTO_NIVEL_SACRIFICIO_SALUD = "Sacrificio de salud";
var KI_EFECTO_NIVEL_SACRIFICIO_CARACTERISTICAS = "Sacrificio de características";

/**** efectos ESOTERICOS de técnicas ***/
var KI_EFECTO_ESTADOS = "Estados";
var KI_EFECTO_VENTAJA_ESTADOS_PENALIZADOR = "Estado añadido: Penalizador a la acción";
var KI_EFECTO_VENTAJA_ESTADOS_CEGUERA = "Estado añadido: Ceguera";
var KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_RF = "Estado añadido: Reducción de RF";
var KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_AGI = "Estado añadido: Reducción de características (AGI)";
var KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_CON = "Estado añadido: Reducción de características (CON)";
var KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_DES = "Estado añadido: Reducción de características (DES)";
var KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_FUE = "Estado añadido: Reducción de características (FUE)";
var KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_INT = "Estado añadido: Reducción de características (INT)";
var KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_PER = "Estado añadido: Reducción de características (PER)";
var KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_POD = "Estado añadido: Reducción de características (POD)";
var KI_EFECTO_VENTAJA_ESTADOS_REDUCIR_VOL = "Estado añadido: Reducción de características (VOL)";
var KI_EFECTO_VENTAJA_ESTADOS_PARALISIS_PARCIAL = "Estado añadido: Paralización parcial";
var KI_EFECTO_VENTAJA_ESTADOS_DAÑO = "Estado añadido: Daño";
var KI_EFECTO_VENTAJA_ESTADOS_INCONSCIENCIA = "Estado añadido: Inconsciencia";
var KI_EFECTO_VENTAJA_ESTADOS_COMA = "Estado añadido: Coma";
var KI_EFECTO_VENTAJA_ESTADOS_PARALISIS_TOTAL = "Estado añadido: Paralización total";
var KI_EFECTO_VENTAJA_ESTADOS_DRENAJE_VIDA = "Estado añadido: Drenaje de vida";
var KI_EFECTO_VENTAJA_ESTADOS_CONTROL = "Estado añadido: Control";
var KI_EFECTO_VENTAJA_ESTADOS_MUERTE = "Estado añadido: Muerte";
var KI_EFECTO_NIVEL_PENALIZADOR_ACCION = "Penalizador a la acción";
var KI_EFECTO_NIVEL_CEGUERA = "Ceguera";
var KI_EFECTO_NIVEL_REDUCCION_RF = "Reducción de RF";
var KI_EFECTO_NIVEL_REDUCCION_CARACTERISTICAS = "Reducción de características";
var KI_EFECTO_NIVEL_PARALIZACION_PARCIAL = "Paralización parcial";
var KI_EFECTO_NIVEL_DAÑO = "Daño";
var KI_EFECTO_NIVEL_INCONSCIENCIA = "Inconsciencia";
var KI_EFECTO_NIVEL_COMA = "Coma";
var KI_EFECTO_NIVEL_PARALIZACION_TOTAL = "Paralización total";
var KI_EFECTO_NIVEL_DRENAJE_DE_VIDA = "Drenaje de vida";
var KI_EFECTO_NIVEL_CONTROL = "Control";
var KI_EFECTO_NIVEL_MUERTE = "Muerte";

/**** efectos ESPECIALES de técnicas ***/
var KI_EFECTO_MANIOBRAS_COMBATE = "Maniobras de combate y apuntar";
var KI_EFECTO_AUMENTAR_ARMADURA = "Aumentar armadura";
var KI_EFECTO_DESTRUIR_ARMADURA = "Destruir armadura";
var KI_EFECTO_NIVEL_TA_1 = "-1 TA";
var KI_EFECTO_NIVEL_TA_2 = "-2 TA";
var KI_EFECTO_NIVEL_TA_3 = "-3 TA";
var KI_EFECTO_NIVEL_TA_4 = "-4 TA";
var KI_EFECTO_NIVEL_TA_5 = "-5 TA";
var KI_EFECTO_NIVEL_TA_6 = "-6 TA";
var KI_EFECTO_NIVEL_TA_7 = "-7 TA";
var KI_EFECTO_NIVEL_TA_8 = "-8 TA";
var KI_EFECTO_AUMENTAR_ROTURA = "Aumentar rotura";
var KI_EFECTO_AUMENTAR_ENTEREZA = "Aumentar entereza";
var KI_EFECTO_ATAQUE_DISTANCIA = "Ataque a distancia";
var KI_EFECTO_NIVEL_5_M = "5 metros";
var KI_EFECTO_NIVEL_10_M = "10 metros";
var KI_EFECTO_NIVEL_20_M = "20 metros";
var KI_EFECTO_NIVEL_50_M = "50 metros";
var KI_EFECTO_NIVEL_100_M = "100 metros";
var KI_EFECTO_NIVEL_250_M = "250 metros";
var KI_EFECTO_NIVEL_500_M = "500 metros";
var KI_EFECTO_NIVEL_1_KM = "1 kilómetro";
var KI_EFECTO_NIVEL_5_KM = "5 kilómetros";
var KI_EFECTO_NIVEL_10_KM = "10 kilómetros";
var KI_EFECTO_NIVEL_100_KM = "100 kilómetros";
var KI_EFECTO_ATAQUE_AREA = "Ataque con área";
var KI_EFECTO_NIVEL_1_M = "1 metro";
var KI_EFECTO_NIVEL_25_M = "25 metros";
var KI_EFECTO_VENTAJA_ATAQUE_AREA_ELECCION_BLANCO = "Elección de blanco";
var KI_EFECTO_NIVEL_ELECCION_BLANCO = "Elección de blanco";
var KI_EFECTO_TRANSPORTE_AUTOMATICO = "Transporte automático";
var KI_EFECTO_POTENCIAR_CRITICO = "Potenciar crítico";
var KI_EFECTO_VENTAJA_POTENCIAR_CRITICO_CRITICO_AUTOMATICO = "Crítico automático";
var KI_EFECTO_NIVEL_CRITICO_AUTOMATICO = "Crítico automático";
var KI_EFECTO_ARMAS_FISICAS_KI = "Armas físicas de Ki";
var KI_EFECTO_VENTAJA_ARMAS_FISICAS_PROYECTILES = "Proyectiles";
var KI_EFECTO_NIVEL_PROYECTILES = "Proyectiles";
var KI_EFECTO_APRESAMIENTO = "Apresamiento";
var KI_EFECTO_PROYECCION = "Proyección";
var KI_EFECTO_ESCUDO_ENERGIA = "Escudo de energía";
var KI_EFECTO_INTANGIBILIDAD = "Intangibilidad";
var KI_EFECTO_NIVEL_INTANGIBILIDAD = "Intangibilidad";
var KI_EFECTO_ESPEJISMO = "Espejismo";
var KI_EFECTO__VENTAJA_ESPEJISMO_INDETECCION = "Indetección";
var KI_EFECTO_REFLECTAR_ATAQUE = "Reflectar el ataque";
var KI_EFECTO_NIVEL_REFLECTAR = "Reflectar";
var KI_EFECTO_VENTAJA_REFLECTAR_ATAQUE_ELECCION_BLANCO = "Elección del blanco";
var KI_EFECTO_VENTAJA_REFLECTAR_ATAQUE_HAB_ESOTERICAS = "Reflectar habilidades esotéricas";
var KI_EFECTO_NIVEL_HABILIDADES_ESOTERICAS = "Reflectar habilidades esotéricas";
var KI_EFECTO_ATAQUE_CAPAZ_DAÑAR_ENERGIA = "Ataque capaz de dañar energía";
var KI_EFECTO_NIVEL_ATAQUE_CAPAZ_DAÑAR_ENERGIA = "Ataque capaz de dañar energía";
var KI_EFECTO_ATAQUE_ELEMENTAL_FUEGO = "Ataque elemental (Fuego)";
var KI_EFECTO_NIVEL_ELEMENTAL_FUEGO = "Elemental (Fuego)";
var KI_EFECTO_ATAQUE_ELEMENTAL_AIRE = "Ataque elemental (Aire)";
var KI_EFECTO_NIVEL_ELEMENTAL_AIRE = "Elemental (Aire)";
var KI_EFECTO_ATAQUE_ELEMENTAL_AGUA = "Ataque elemental (Agua)";
var KI_EFECTO_NIVEL_ELEMENTAL_AGUA = "Elemental (Agua)";
var KI_EFECTO_ATAQUE_ELEMENTAL_TIERRA = "Ataque elemental (Tierra)";
var KI_EFECTO_NIVEL_ELEMENTAL_TIERRA = "Elemental (Tierra)";
var KI_EFECTO_ATAQUE_SOBRENATURAL = "Ataque sobrenatural";
var KI_EFECTO_NIVEL_ENERGIA = "Energía";
var KI_EFECTO_ACUMULACION = "Acumulación";

/**** efectos OFENSIVOS de técnicas ***/
var KI_EFECTO_HABILIDAD_ATAQUE = "Habilidad de ataque";
var KI_EFECTO_HABILIDAD_CONTRATAQUE = "Habilidad de contraataque";
var KI_EFECTO_INCREMENTAR_TURNO = "Incrementar turno";

/*************** TECNICAS DE MUESTRA *************/
var KI_ARBOL_CELERITAS = "Celéritas";
var KI_TECNICA_EXCISUM_AERIS = "Excisum Aeris";
var KI_TECNICA_VELOCITAS_VENTUS = "Velocitas Ventus";
var KI_TECNICA_EXCISUM_MAGISTER = "Excisum Magister";
var KI_TECNICA_MAGNUS_EXACTOR = "Magnus Exactor";
var KI_TECNICA_SUMMUN = "Summun";
var KI_ARBOL_EL_DRAGON = "El Dragón";
var KI_TECNICA_LAS_ESCAMAS = "Las escamas";
var KI_TECNICA_LAS_GARRAS = "Las garras";
var KI_TECNICA_EL_COLMILLO = "El colmillo";
var KI_TECNICA_LA_COLA = "La cola";
var KI_TECNICA_EL_ALIENTO_DEL_DRAGON = "El aliento del Dragón";

var KI_ARBOL_IGNIS = "Ignis";
var KI_TECNICA_FEUER = "Feuer";
var KI_TECNICA_LE_FEU = "Le Feu";
var KI_TECNICA_HORECKA = "Horecka";
var KI_ARBOL_IGNIS_CONDICION_ESPECIAL = "Mantener activo Feuer";
var KI_TECNICA_VATRA = "Vatra";
var KI_TECNICA_ELD = "Eld";

/*************** TECNICAS DE MUESTRA COMPLEMENTO WEB 1*************/
var KI_ARBOL_LAS_CADENAS = "Las Cadenas";
var KI_TECNICA_VOLGARATH = "Volgarath";
var KI_TECNICA_EXELION = "Exelion";
var KI_TECNICA_DEDALUS = "Dedalus";
var KI_TECNICA_OBERON = "Oberon";
var KI_TECNICA_GARUDA = "Garuda";




















