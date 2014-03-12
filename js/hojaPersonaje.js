var ANCHO_DIALOGO = 900;
var ALTO_DIALOGO = 700;
var ANCHO_COMPLETO = 900;


var UI_NOMBRE = new L("Nombre","Nombre","Name");
var UI_SEXO = new L("Sexo","Sexo","Gender");
var UI_RAZA = new L("Raza","Raza","Race");
var UI_PESO = new L("Peso","Peso","Weight");
var UI_ALTURA = new L("Altura","Altura","Height");
var UI_CATEGORIA = new L("Categoría","Categoría","Class");
var UI_PUNTOS_CANSANCIO = new L("Puntos de Cansancio","Puntos de Cansancio","Fatigue");
var UI_TIPO_MOVIMIENTO = new L("Tipo de Movimiento","Tipo de Movimiento","Movement");
var UI_PUNTOS_VIDA = new L("Puntos de vida","Puntos de vida","Life Points");
var UI_APARIENCIA = new L("Apariencia","Apariencia","Appeareance");
var UI_TAMAÑO = new L("Tamaño","Tamaño","Size");
var UI_REGENERACION = new L("Regeneración","Regeneración","Regeneration");
var UI_PUNTOS_DESARROLLO = new L("Puntos de Desarrollo","Puntos de Desarrollo","Development Points");
var UI_PUNTOS_CREACION = new L("Puntos de Creación","Puntos de Creación","Creation Points");
var UI_AUMENTOS_CARACTERISTICAS = new L("Aumentos de características","Aumentos de características","Attribute Enhancements");
var UI_PUNTOS_SIN_USAR = new L("sin usar","sin usar","free");
var UI_PC_DON = new L("del Don","del Don","from Gift");
var UI_PC_PSIQUICA = new L("de psíquica","de psíquica","from Psychic");
var UI_NIVEL = new L("Nivel","Nivel","Level");
var UI_PX = new L("Puntos de Experiencia","Puntos de Experiencia","Experience Points");
var UI_ARQUETIPO = new L("Arquetipo","Arquetipo","Archetype");
var UI_TURNO = new L("Turno","Turno","Initiative");
var UI_TABLAS = new L("Tablas","Tablas","Modules/Tables");
var UI_ARTES_MARCIALES = new L("Artes Marciales","Artes Marciales","Martial Arts");
var UI_CM = new L("CM","CM","MK");
var UI_ARMADURA = new L("Armadura","Armadura","Armor");
var UI_ARMAS_MANEJADAS = new L("Armas manejadas","Armas manejadas","Weapons known");
var UI_CAPACIDADES_FISICAS = new L("Capacidades físicas","Capacidades físicas","Physical Abilities");
var UI_DESARROLLO = new L("Desarrollo del personaje","Desarrollo del personaje","Character Development");
var UI_ELAN = new L("Elan","Elan","Elan");

var UI_DESCRIPCION = new L("Descripción","Descripción","Description");

var UI_COSTE_KI = new L("Coste de Ki","Coste de Ki","Ki Cost");
var UI_MANTENIDA = new L("Técnica mantenida","Técnica mantenida","Maintained Technique");
var UI_COSTE_MANTENIMIENTO = new L("Coste de mantenimiento","Coste de mantenimiento","Maintenance Cost");

var UI_PD_COMBATE = new L("PDs en combate","PDs en combate","Combat DPs");
var UI_PD_ATAQUE_DEFENSA = new L("PDs en ataque y defensa","PDs en ataque y defensa","Attack and Defense DPs");
var UI_PD_SOBRENATURAL = new L("PDs en sobrenaturales","PDs en sobrenaturales","Magic DPs");
var UI_PD_PSIQUICA = new L("PDs en psíquicas","PDs en psíquicas","Psychic DPs");
var UI_PD_SECUNDARIAS = new L("PDs en secundarias","PDs en secundarias","Secondary Skills DPs");

var UI_MULTIPLO_VIDA = new L("Múltiplo de vida","Múltiplo de vida","Life Multiple");
var UI_PV_POR_NIVEL = new L("PV por nivel","PV por nivel","LP per level");
var UI_TURNO_POR_NIVEL = new L("Turno por nivel","Turno por nivel","Init per level");
var UI_CM_POR_NIVEL = new L("CM por nivel","CM por nivel","MK per level");
var UI_NIVELES_PARA_CV = new L("Niveles para CV","Niveles para CV","Levels for PP");

var UI_LIMITE_COMBATE = new L("Máximo en Combate","Máximo en Combate","Combat Max");
var UI_ATAQUE = new L("Ataque","Ataque","Attack");
var UI_PARADA = new L("Parada","Parada","Block");
var UI_ESQUIVA = new L("Esquiva","Esquiva","Dodge");
var UI_LLEVAR_ARMADURA = new L("Llevar Armadura","Llevar Armadura","Wear Armor");
var UI_KI = new L("Ki","Ki","Ki");
var UI_ACUMULACION_KI = new L("Acumulación de Ki","Acumulación de Ki","Ki Accumulation");
var UI_KI_AGI = new L("Ki Agilidad","Ki Agilidad","Agility Ki");
var UI_ACUMULACION_KI_AGI = new L("Ac. de Ki Agilidad","Ac. de Ki Agilidad","Agility Ki Accum");
var UI_KI_DES = new L("Ki Destreza","Ki Destreza","Dextery Ki");
var UI_ACUMULACION_KI_DES = new L("Ac. de Ki Destreza","Ac. de Ki Destreza","Dextery Ki Accum");
var UI_KI_FUE = new L("Ki Fuerza","Ki Fuerza","Strength Ki");
var UI_ACUMULACION_KI_FUE = new L("Ac. de Ki Fuerza","Ac. de Ki Fuerza","Strength Ki Accum");
var UI_KI_CON = new L("Ki Constitución","Ki Constitución","Constitution Ki");
var UI_ACUMULACION_KI_CON = new L("Ac. de Ki Constitución","Ac. de Ki Constitución","Constitution Ki Accum");
var UI_KI_POD = new L("Ki Poder","Ki Poder","Power Ki");
var UI_ACUMULACION_KI_POD = new L("Ac. de Ki Poder","Ac. de Ki Poder","Power Ki Accum");
var UI_KI_VOL = new L("Ki Voluntad","Ki Voluntad","Willpower Ki");
var UI_ACUMULACION_KI_VOL = new L("Ac. de Ki Voluntad","Ac. de Ki Voluntad","Willpower Ki Accum");

var UI_HABILIDAD_NATURAL = new L("Habilidad Natural (+10)","Habilidad Natural (+10)","Natural Skill (+10)");
var UI_BONIFICADOR_NATURAL_FISICO = new L("Bonificador natural físico (añadir bono de característica)","Bonificador natural físico (añadir bono de característica)","Physical Natural Bonus (add ability bonus)");
var UI_BONIFICADOR_NATURAL_MENTAL = new L("Bonificador natural mental (añadir bono de característica)","Bonificador natural mental (añadir bono de característica)","Mental Natural Bonus (add ability bonus)");
var UI_BONIFICADOR_NATURAL_EXTRA = new L("Bonificador natural extra (añadir bono de característica)","Bonificador natural extra (añadir bono de característica)","Extra Natural Bonus (add ability bonus)");
var UI_BONO_NOVEL = new L("Bono innato de Novel (+10)","Bono innato de Novel (+10)","Novel innate bonus (+10)");

var UI_ELEGIR = new L("?","?","?");

var UI_LIMITE_SOBRENATURAL = new L("Máximo en Sobrenatural","Máximo en Sobrenatural","Magic Max");
var UI_ZEON = new L("Zeon","Zeon","Zeon");
var UI_ACT = new L("ACT","ACT","MA");
var UI_PROYECCION_MAGICA = new L("Proyección Mágica","Proyección Mágica","Magic Projection");
var UI_CONVOCAR = new L("Convocar","Convocar","Summon");
var UI_DOMINAR = new L("Dominar","Dominar","Control");
var UI_ATAR = new L("Atar","Atar","Bind");
var UI_DESCONVOCAR = new L("Desconvocar","Desconvocar","Banish");

var UI_LIMITE_PSIQUICA = new L("Máximo en Psíquica","Máximo en Psíquica","Psychic Max");
var UI_CV = new L("CV","CV","PP");
var UI_PROYECCION_PSIQUICA = new L("Proyección Psíquica","Proyección Psíquica","Psychic Projection");
var UI_POTENCIAL_PSIQUICO = new L("Potencial Psíquico","Potencial Psíquico","Psychic Potential");

var UI_ATLETICAS = new L("Atléticas","Atléticas","Athletics");
var UI_SOCIALES = new L("Sociales","Sociales","Social");
var UI_PERCEPTIVAS = new L("Perceptivas","Perceptivas","Perception");
var UI_INTELECTUALES = new L("Intelectuales","Intelectuales","Intellectual");
var UI_VIGOR = new L("Vigor","Vigor","Vigor");
var UI_SUBTERFUGIO = new L("Subterfugio","Subterfugio","Subterfuge");
var UI_CREATIVAS = new L("Creativas","Creativas","Creative");

var UI_COSTES_REDUCIDOS = new L("Costes Reducidos","Costes Reducidos","Reduced Costs");
var UI_BONOS_INNATOS = new L("Bonos innatos","Bonos innatos","Innate Bonus");
var UI_POR_NIVEL = new L("por nivel","por nivel","per level");
var UI_NINGUNO = new L("Ninguno","Ninguno","None");

var UI_RF = new L("Resistencia Física","Resistencia Física","Physical Resistance");
var UI_RE = new L("Resistencia contra Enfermedades","Resistencia contra Enfermedades","Disease Resistance");
var UI_RV = new L("Resistencia contra Venenos","Resistencia contra Venenos","Poison Resistance");
var UI_RM = new L("Resistencia Mágica","Resistencia Mágica","Magic Resistance");
var UI_RP = new L("Resistencia Psíquica","Resistencia Psíquica","Psychic Resistance");

var UI_BOTON_CREACION = new L("Iniciar Creación","Iniciar Creación","Start Creation");
var UI_BOTON_RAZA = new L("Elegir Raza","Elegir Raza","Choose Race");
var UI_BOTON_CATEGORIA = new L("Elegir Categoría","Elegir Categoría","Choose Class");
var UI_BOTON_VENTAJAS = new L("Comprar Ventajas","Comprar Ventajas","Buy Advantages");
var UI_BOTON_DESVENTAJAS = new L("Elegir Desventajas","Elegir Desventajas","Choose Disadvantages");
var UI_BOTON_NATURALES = new L("Elegir bonos Naturales","Elegir bonos Naturales","Choose Natural Bonuses");
var UI_BOTON_ARMA_INICIAL = new L("Elegir arma inicial","Elegir arma inicial","Choose initial weapon");
var UI_BOTON_ARTES_MARCIALES = new L("Comprar Artes Marciales","Comprar Artes Marciales","Buy Martial Arts");
var UI_BOTON_TABLAS_ARMAS = new L("Comprar Tablas de Armas","Comprar Tablas de Armas","Buy Modules and Tables");
var UI_BOTON_GASTAR_CV = new L("Gastar CVs","Gastar CVs","Spend PPs");
var UI_BOTON_GASTAR_CM = new L("Gastar CM","Gastar CM","Spend MK");
var UI_BOTON_GASTAR_NIVELES_VIA = new L("Gastar niveles de vía","Gastar niveles de vía","Spend Magic Levels");
var UI_BOTON_GASTAR_ELAN = new L("Gastar elan","Gastar elan","Spend Elan");
var UI_BOTON_FINALIZAR_CREACION = new L("Finalizar Creación","Finalizar Creación","End Creation");
var UI_BOTON_SUBIR_NIEVL = new L("Subir nivel","Subir nivel","Level Up");

var UI_BOTON_GUARDAR = new L("Guardar personaje","Guardar personaje","Save Character");
var UI_BOTON_CARGAR = new L("Cargar personaje","Cargar personaje","Load Character");

var UI_BOTON_SOPORTE = new L("Informa de errores","Informa de errores","Report an error");
var UI_BOTON_COMENTARIOS = new L("Comentarios, sugerencias ...","Comentarios, sugerencias ...","Comments, sugestions ...");

var UI_PERSONALES = new L("Datos Personales","Datos Personales","Personal Info");
var UI_RESISTENCIAS = new L("Resistencias","Resistencias","Resistances");
var UI_VENTAJAS = new L("Ventajas","Ventajas","Advantages");
var UI_DESVENTAJAS = new L("Desventajas","Desventajas","Disadvantages");
var UI_CARACTERISTICAS = new L("Características","Características","Abilities");

var UI_CARACTERISTICA = new L("Característica","Característica","Ability");
var UI_VALOR = new L("Valor","Valor","Value");
var UI_BONO= new L("Bono","Bono","Bonus");


var UI_COMBATE = new L("Habilidades de Combate","Habilidades de Combate","Combat Skills");
var UI_DOMINIOS_KI = new L("Dominios del Ki","Dominios del Ki","Ki");

var UI_SOBRENATURALES = new L("Magia","Magia", "Magic");
var UI_CONVOCATORIA = new L("Convocatoria","Convocatoria","Summoning");

var UI_PSIQUICA = new L("Poderes Psíquicos","Poderes Psíquicos","Psychic Powers");

var UI_SECUNDARIAS = new L("Habilidades Secundarias","Habilidades Secundarias","Secondary Skills");

var CSS_RECUADRO = "recuadroDatos";
var CSS_CAMPO_PERSONALES = "campoDatosPersonales";
var CSS_ETIQUETA_PERSONALES = "etiquetaPersonales";
var CSS_VALOR_PERSONALES = "valorPersonales";
var CSS_CAMPO_CARACTERISTICAS = "campoCaracteristicas";
var CSS_ETIQUETA_CARACTERISTICAS = "etiquetaCaracteristicas";
var CSS_VALOR_CARACTERISTICAS = "valorCaracteristicas";
var CSS_BONO_CARACTERISTICAS = "bonoCaracteristicas";
var CSS_BOTON_CREACION = "botonCreacion";
var CSS_ETIQUETA_CREACION = "etiquetaCreacion";
var CSS_FILA_EFECTO_TECNICA = "botonFilaEfectoTecnica";
var CSS_ETIQUETA_EFECTO_TECNICA = "etiquetaEfectoTecnica";
var CSS_CONTENIDO_RECUADRO = "contenidoRecuadro";
var CSS_LISTA_INLINE = "listaInline";
var CSS_ETIQUETA = "etiquetaCampoHoja";
var CSS_COSTE = "costeCampoHoja";
var CSS_TABULADO = "tabulado";
var CSS_TITULO_SECCION = "tituloSeccion";
var CSS_SUBTITULO_SECCION = "subtituloSeccion";
var CSS_CLASS_BOTONES_MAS_MENOS = "botonesMasMenos";
var CSS_CLASS_EXPLICACION_CATEGORIA = "explicacionCategoria";
var CSS_MUESTRA_BLOCK = "muestraBlock";
var CSS_TEXTO_FUERTE = "textoFuerte";
var CSS_MUESTRA_INLINE = "muestraInline";
var CSS_MUESTRA_INLINE_BLOCK = "muestraInlineBlock";
var CSS_TEXTO_ITALIC = "textoItalic";
var CSS_TEXTO_SMALLER = "textoSmaller";
var CSS_TEXTO_SMALL = "textoSmall";
var CSS_FLOAT_LEFT = "floatLeft";
var CSS_TEXTO_CENTRO = "textCenter";
var CSS_VALOR_ABANDONADO = "valorCaracteristicaTachado";

function getDiv(clase) {
    return $("<div></div>").addClass(clase);
}

