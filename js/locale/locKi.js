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




































