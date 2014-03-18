//region codigo
var SPA = "spa";
var ENG = "eng";

var IDIOMA_UI = ENG;

var diccionario = {};

function setIdiomaUI() {
    var lang = navigator.language || navigator.userLanguage;

    if ((lang.lastIndexOf("es") != -1) || (lang.lastIndexOf("spa") != -1)) {
        IDIOMA_UI = ENG;
    } else {
        IDIOMA_UI = ENG;
    }
}

function L(id, spa, eng) {
    /**
     *
     * @type {string}
     */
    this.id = id;

    /**
     *
     * @type {string}
     */
    this[SPA] = spa;

    /**
     *
     * @type {string}
     */
    this[ENG] = eng;

    if (!diccionario["ANIMAUNICO_"+this.id]) {
        diccionario["ANIMAUNICO_"+this.id] = this;
    } else {
        console.log("Clave de diccionario repetida: [" + this.id + " / " + this[SPA] + " / " + this[ENG] + "]");
        console.log("--Clave previa: [" + diccionario["ANIMAUNICO_"+this.id].id + " / " + diccionario["ANIMAUNICO_"+this.id][SPA] + " / " + diccionario["ANIMAUNICO_"+this.id][ENG] + "]");
    }
}

L.prototype = {
    constructor: L,

    /**
     *
     * @returns {string}
     */
    toString : function() {
        return this[IDIOMA_UI];
    },

    getId : function() {
        return this.id;
    }
};

/**
 *
 * @param {string} clave La id de la cadena a mostrar en pantalla
 * @returns {string} La cadena localizada, según IDIOMA_UI
 * @private
 */
function _l(clave) {
    if (diccionario["ANIMAUNICO_"+clave]) {
        return diccionario["ANIMAUNICO_"+clave].toString();
    } else {
        return clave;
    }
}

function localizaHTML() {
    $(".localizable").each(function() {
            $(this).html(_l($(this).attr("loc")));
        }
    );
    document.title = _l(UI_TITULO);
}

//endregion codigo

var UI_NOMBRE = (new L("Nombre","Nombre","Name")).getId();
var UI_SEXO = (new L("Sexo","Sexo","Gender")).getId();
var UI_RAZA = (new L("Raza","Raza","Race")).getId();
var UI_PESO = (new L("Peso","Peso","Weight")).getId();
var UI_ALTURA = (new L("Altura","Altura","Height")).getId();
var UI_CATEGORIA = (new L("Categoría","Categoría","Class")).getId();
var UI_PUNTOS_CANSANCIO = (new L("Puntos de Cansancio","Puntos de Cansancio","Fatigue")).getId();
var UI_TIPO_MOVIMIENTO = (new L("Tipo de Movimiento","Tipo de Movimiento","Movement")).getId();
var UI_PUNTOS_VIDA = (new L("Puntos de vida","Puntos de vida","Life Points")).getId();
var UI_APARIENCIA = (new L("Apariencia","Apariencia","Appeareance")).getId();
var UI_TAMAÑO = (new L("Tamaño","Tamaño","Size")).getId();
var UI_ESTATUS_SOCIAL = (new L("Estatus Social","Estatus Social","Social Status")).getId();

var UI_REGENERACION = (new L("Regeneración","Regeneración","Regeneration")).getId();
var UI_PUNTOS_DESARROLLO = (new L("Puntos de Desarrollo","Puntos de Desarrollo","Development Points")).getId();
var UI_PUNTOS_CREACION = (new L("Puntos de Creación","Puntos de Creación","Creation Points")).getId();
var UI_AUMENTOS_CARACTERISTICAS = (new L("Aumentos de características","Aumentos de características","Attribute Enhancements")).getId();
var UI_PUNTOS_SIN_USAR = (new L("sin usar","sin usar","free")).getId();
var UI_PC_DON = (new L("del Don","del Don","from Gift")).getId();
var UI_PC_PSIQUICA = (new L("de psíquica","de psíquica","from Psychic")).getId();
var UI_NIVEL = (new L("Nivel","Nivel","Level")).getId();
var UI_PX = (new L("Puntos de Experiencia","Puntos de Experiencia","Experience Points")).getId();
var UI_ARQUETIPO = (new L("Arquetipo","Arquetipo","Archetype")).getId();
var UI_TURNO = (new L("Turno","Turno","Initiative")).getId();
var UI_TABLAS = (new L("Tablas","Tablas","Modules/Tables")).getId();
var UI_ARTES_MARCIALES = (new L("Artes Marciales","Artes Marciales","Martial Arts")).getId();
var UI_CM = (new L("CM","CM","MK")).getId();
var UI_ARMADURA = (new L("Armadura","Armadura","Armor")).getId();
var UI_ARMAS_MANEJADAS = (new L("Armas manejadas","Armas manejadas","Weapons known")).getId();
var UI_CAPACIDADES_FISICAS = (new L("Capacidades físicas","Capacidades físicas","Physical Abilities")).getId();
var UI_DESARROLLO = (new L("Desarrollo del personaje","Desarrollo del personaje","Character Development")).getId();
var UI_ELAN = (new L("Elan","Elan","Elan")).getId();

var UI_DESCRIPCION = (new L("Descripción","Descripción","Description")).getId();

var UI_COSTE_KI = (new L("Coste de Ki","Coste de Ki","Ki Cost")).getId();
var UI_MANTENIDA = (new L("Técnica mantenida","Técnica mantenida","Maintained Technique")).getId();
var UI_COSTE_MANTENIMIENTO = (new L("Coste de mantenimiento","Coste de mantenimiento","Maintenance Cost")).getId();

var UI_PD_COMBATE = (new L("PDs en combate","PDs en combate","Combat DPs")).getId();
var UI_PD_ATAQUE_DEFENSA = (new L("PDs en ataque y defensa","PDs en ataque y defensa","Attack and Defense DPs")).getId();
var UI_PD_SOBRENATURAL = (new L("PDs en sobrenaturales","PDs en sobrenaturales","Magic DPs")).getId();
var UI_PD_PSIQUICA = (new L("PDs en psíquicas","PDs en psíquicas","Psychic DPs")).getId();
var UI_PD_SECUNDARIAS = (new L("PDs en secundarias","PDs en secundarias","Secondary Skills DPs")).getId();

var UI_MULTIPLO_VIDA = (new L("Múltiplo de vida","Múltiplo de vida","Life Multiple")).getId();
var UI_PV_POR_NIVEL = (new L("PV por nivel","PV por nivel","LP per level")).getId();
var UI_TURNO_POR_NIVEL = (new L("Turno por nivel","Turno por nivel","Init per level")).getId();
var UI_CM_POR_NIVEL = (new L("CM por nivel","CM por nivel","MK per level")).getId();
var UI_NIVELES_PARA_CV = (new L("Niveles para CV","Niveles para CV","Levels for PP")).getId();

var UI_LIMITE_COMBATE = (new L("Máximo en Combate","Máximo en Combate","Combat Max")).getId();
var UI_ATAQUE = (new L("Ataque","Ataque","Attack")).getId();
var UI_PARADA = (new L("Parada","Parada","Block")).getId();
var UI_ESQUIVA = (new L("Esquiva","Esquiva","Dodge")).getId();
var UI_LLEVAR_ARMADURA = (new L("Llevar Armadura","Llevar Armadura","Wear Armor")).getId();
var UI_KI = (new L("Ki","Ki","Ki")).getId();
var UI_ACUMULACION_KI = (new L("Acumulación de Ki","Acumulación de Ki","Ki Accumulation")).getId();
var UI_KI_AGI = (new L("Ki Agilidad","Ki Agilidad","Agility Ki")).getId();
var UI_ACUMULACION_KI_AGI = (new L("Ac. de Ki Agilidad","Ac. de Ki Agilidad","Agility Ki Accum")).getId();
var UI_KI_DES = (new L("Ki Destreza","Ki Destreza","Dextery Ki")).getId();
var UI_ACUMULACION_KI_DES = (new L("Ac. de Ki Destreza","Ac. de Ki Destreza","Dextery Ki Accum")).getId();
var UI_KI_FUE = (new L("Ki Fuerza","Ki Fuerza","Strength Ki")).getId();
var UI_ACUMULACION_KI_FUE = (new L("Ac. de Ki Fuerza","Ac. de Ki Fuerza","Strength Ki Accum")).getId();
var UI_KI_CON = (new L("Ki Constitución","Ki Constitución","Constitution Ki")).getId();
var UI_ACUMULACION_KI_CON = (new L("Ac. de Ki Constitución","Ac. de Ki Constitución","Constitution Ki Accum")).getId();
var UI_KI_POD = (new L("Ki Poder","Ki Poder","Power Ki")).getId();
var UI_ACUMULACION_KI_POD = (new L("Ac. de Ki Poder","Ac. de Ki Poder","Power Ki Accum")).getId();
var UI_KI_VOL = (new L("Ki Voluntad","Ki Voluntad","Willpower Ki")).getId();
var UI_ACUMULACION_KI_VOL = (new L("Ac. de Ki Voluntad","Ac. de Ki Voluntad","Willpower Ki Accum")).getId();

var UI_HABILIDAD_NATURAL = (new L("Habilidad Natural (+10)","Habilidad Natural (+10)","Natural Skill (+10)")).getId();
var UI_BONIFICADOR_NATURAL_FISICO = (new L("Bonificador natural físico (añadir bono de característica)","Bonificador natural físico (añadir bono de característica)","Physical Natural Bonus (add ability bonus)")).getId();
var UI_BONIFICADOR_NATURAL_MENTAL = (new L("Bonificador natural mental (añadir bono de característica)","Bonificador natural mental (añadir bono de característica)","Mental Natural Bonus (add ability bonus)")).getId();
var UI_BONIFICADOR_NATURAL_EXTRA = (new L("Bonificador natural extra (añadir bono de característica)","Bonificador natural extra (añadir bono de característica)","Extra Natural Bonus (add ability bonus)")).getId();
var UI_BONO_NOVEL = (new L("Bono innato de Novel (+10)","Bono innato de Novel (+10)","Novel innate bonus (+10)")).getId();

var UI_ELEGIR = (new L("?","?","?")).getId();

var UI_LIMITE_SOBRENATURAL = (new L("Máximo en Sobrenatural","Máximo en Sobrenatural","Magic Max")).getId();
var UI_ZEON = (new L("Zeon","Zeon","Zeon")).getId();
var UI_ACT = (new L("ACT","ACT","MA")).getId();
var UI_PROYECCION_MAGICA = (new L("Proyección Mágica","Proyección Mágica","Magic Projection")).getId();
var UI_CONVOCAR = (new L("Convocar","Convocar","Summon")).getId();
var UI_DOMINAR = (new L("Dominar","Dominar","Control")).getId();
var UI_ATAR = (new L("Atar","Atar","Bind")).getId();
var UI_DESCONVOCAR = (new L("Desconvocar","Desconvocar","Banish")).getId();

var UI_LIMITE_PSIQUICA = (new L("Máximo en Psíquica","Máximo en Psíquica","Psychic Max")).getId();
var UI_CV = (new L("CV","CV","PP")).getId();
var UI_PROYECCION_PSIQUICA = (new L("Proyección Psíquica","Proyección Psíquica","Psychic Projection")).getId();
var UI_POTENCIAL_PSIQUICO = (new L("Potencial Psíquico","Potencial Psíquico","Psychic Potential")).getId();

var UI_ATLETICAS = (new L("Atléticas","Atléticas","Athletics")).getId();
var UI_SOCIALES = (new L("Sociales","Sociales","Social")).getId();
var UI_PERCEPTIVAS = (new L("Perceptivas","Perceptivas","Perception")).getId();
var UI_INTELECTUALES = (new L("Intelectuales","Intelectuales","Intellectual")).getId();
var UI_VIGOR = (new L("Vigor","Vigor","Vigor")).getId();
var UI_SUBTERFUGIO = (new L("Subterfugio","Subterfugio","Subterfuge")).getId();
var UI_CREATIVAS = (new L("Creativas","Creativas","Creative")).getId();

var UI_COSTES_REDUCIDOS = (new L("Costes Reducidos","Costes Reducidos","Reduced Costs")).getId();
var UI_BONOS_INNATOS = (new L("Bonos innatos","Bonos innatos","Innate Bonus")).getId();
var UI_POR_NIVEL = (new L("por nivel","por nivel","per level")).getId();
var UI_NINGUNO = (new L("Ninguno","Ninguno","None")).getId();

var UI_RF = (new L("Resistencia Física","Resistencia Física","Physical Resistance")).getId();
var UI_RE = (new L("Resistencia contra Enfermedades","Resistencia contra Enfermedades","Disease Resistance")).getId();
var UI_RV = (new L("Resistencia contra Venenos","Resistencia contra Venenos","Poison Resistance")).getId();
var UI_RM = (new L("Resistencia Mágica","Resistencia Mágica","Magic Resistance")).getId();
var UI_RP = (new L("Resistencia Psíquica","Resistencia Psíquica","Psychic Resistance")).getId();

var UI_DIALOGO_LOG_CAMBIOS_TITULO = (new L("Titulo Log de cambios","Log de cambios","Change log")).getId();
var UI_DIALOGO_LICENCIA_TITULO = (new L("Titulo Agradecimientos y licencia de software", "Agradecimientos y licencia de software", "Thanks and software license")).getId();

//region HTML estático
var UI_TITULO = (new L("TituloAnima", "Anima: UNICO - Generador de personajes", "Anima: UNICO - Character Generator")).getId();
var UI_MENU_PERSONAJE = (new L("Personaje", "Personaje", "Character")).getId();
var UI_MENU_CREACION = (new L("Creacion", "Creación", "Generation")).getId();
var UI_MENU_SOPORTE = (new L("Soporte", "Soporte", "Support")).getId();
var UI_BOTON_CREACION = (new L("Iniciar Creación","Iniciar Creación","Start Creation")).getId();
var UI_BOTON_RAZA = (new L("Elegir Raza","Elegir Raza","Choose Race")).getId();
var UI_BOTON_CATEGORIA = (new L("Elegir Categoría","Elegir Categoría","Choose Class")).getId();
var UI_BOTON_VENTAJAS = (new L("Comprar Ventajas","Comprar Ventajas","Buy Advantages")).getId();
var UI_BOTON_DESVENTAJAS = (new L("Elegir Desventajas","Elegir Desventajas","Choose Disadvantages")).getId();
var UI_BOTON_NATURALES = (new L("Elegir bonos Naturales","Elegir bonos Naturales","Choose Natural Bonuses")).getId();
var UI_BOTON_ARMA_INICIAL = (new L("Elegir arma inicial","Elegir arma inicial","Choose initial weapon")).getId();
var UI_BOTON_ARTES_MARCIALES = (new L("Comprar Artes Marciales","Comprar Artes Marciales","Buy Martial Arts")).getId();
var UI_BOTON_TABLAS_ARMAS = (new L("Comprar Tablas de Armas","Comprar Tablas de Armas","Buy Modules and Tables")).getId();
var UI_BOTON_GASTAR_CV = (new L("Gastar CVs","Gastar CVs","Spend PPs")).getId();
var UI_BOTON_GASTAR_CM = (new L("Gastar CM","Gastar CM","Spend MK")).getId();
var UI_BOTON_GASTAR_NIVELES_VIA = (new L("Gastar niveles de vía","Gastar niveles de vía","Spend Magic Levels")).getId();
var UI_BOTON_GASTAR_ELAN = (new L("Gastar elan","Gastar elan","Spend Elan")).getId();
var UI_BOTON_FINALIZAR_CREACION = (new L("Finalizar Creación","Finalizar Creación","End Creation")).getId();
var UI_BOTON_SUBIR_NIEVL = (new L("Subir nivel","Subir nivel","Level Up")).getId();
var UI_BOTON_GUARDAR = (new L("Guardar personaje","Guardar personaje","Save Character")).getId();
var UI_BOTON_CARGAR = (new L("Cargar personaje","Cargar personaje","Load Character")).getId();
var UI_BOTON_LOG_CAMBIOS = (new L("Log de cambios","Log de cambios","Change Log")).getId();
var UI_BOTON_LICENCIA = (new L("Agradecimientos y licencia de software","Agradecimientos y licencia de software","Thanks and software licence")).getId();
var UI_BOTON_SOPORTE = (new L("Informa de errores","Informa de errores","Report an error")).getId();
var UI_BOTON_COMENTARIOS = (new L("Comentarios, sugerencias ...","Comentarios, sugerencias ...","Comments, sugestions ...")).getId();
//endregion HTML estático

var UI_PERSONALES = (new L("Datos Personales","Datos Personales","Personal Info")).getId();
var UI_RESISTENCIAS = (new L("Resistencias","Resistencias","Resistances")).getId();
var UI_VENTAJAS = (new L("Ventajas","Ventajas","Advantages")).getId();
var UI_DESVENTAJAS = (new L("Desventajas","Desventajas","Disadvantages")).getId();
var UI_CARACTERISTICAS = (new L("Características","Características","Abilities")).getId();

var UI_CARACTERISTICA = (new L("Característica","Característica","Ability")).getId();
var UI_VALOR = (new L("Valor","Valor","Value")).getId();
var UI_BONO= (new L("Bono","Bono","Bonus")).getId();
var UI_BONOS= (new L("Bonos","Bonos","Bonuses")).getId();


var UI_COMBATE = (new L("Habilidades de Combate","Habilidades de Combate","Combat Skills")).getId();
var UI_DOMINIOS_KI = (new L("Dominios del Ki","Dominios del Ki","Ki")).getId();

var UI_SOBRENATURALES = (new L("Magia","Magia", "Magic")).getId();
var UI_CONVOCATORIA = (new L("Convocatoria","Convocatoria","Summoning")).getId();

var UI_PSIQUICA = (new L("Poderes Psíquicos","Poderes Psíquicos","Psychic Powers")).getId();

var UI_SECUNDARIAS = (new L("Habilidades Secundarias","Habilidades Secundarias","Secondary Skills")).getId();

var UI_VACIO = (new L("","","")).getId();

var ERROR_ARTE_MARCIAL_ELIMINADA_ATAQUE_BAJO = (new L("Aviso: Arte marcial eliminada por no tener suficiente ataque/defensa","Aviso: Arte marcial eliminada por no tener suficiente ataque/defensa","Warning: Martial art dropped because of insuficiente attack/defense")).getId();
var ERROR_ARTE_MARCIAL_ELIMINADA_REQUISITOS = (new L("Aviso: Arte marcial eliminada por no cumplir requisitos","Aviso: Arte marcial eliminada por no cumplir requisitos","Warning: Martial art dropped for not meeting its requisites")).getId();
var ERR_ARTE_MARCIAL_ERRONEA = (new L("Error: Nombre de arte marcial erróneo","Error: Nombre de arte marcial erróneo","Error: Unknown martial art name")).getId();

var ERR_PODER_SIN_DIFICULTAD_MINIMA = (new L("Poder sin dificultad mínima","Poder sin dificultad mínima","Psychic power without minimum difficulty")).getId();

var UI_BERYL = (new L("Beryl","Beryl","Beryl")).getId();
var UI_SHAJAD = (new L("Shajad","Shajad","Shajad")).getId();

var ARMADURA_LOC_CAMISOLA = (new L("Camisola","Camisola","Half")).getId();
var ARMADURA_LOC_COMPLETA = (new L("Completa","Completa","Full")).getId();
var ARMADURA_LOC_PETO = (new L("Peto","Peto","Chest")).getId();

var ARMADURA_CLASE_BLANDA = (new L("Blanda","Blanda","Soft")).getId();
var ARMADURA_CLASE_DURA = (new L("Dura","Dura","Hard")).getId();

var TAM_ARMA_P = (new L("Pequeño","Pequeño","Small")).getId();
var TAM_ARMA_P3 = (new L("P","P","S")).getId();
var TAM_ARMA_M = (new L("Medio","Medio","Medium")).getId();
var TAM_ARMA_M3 = (new L("M","M","M")).getId();
var TAM_ARMA_G = (new L("Grande","Grande","Big")).getId();
var TAM_ARMA_G3 = (new L("G","G","B")).getId();
var TAM_ARMA_E = (new L("Enorme","Enorme","Enormous")).getId();
var TAM_ARMA_E3 = (new L("E","E","E")).getId();
var TAM_ARMA_GG = (new L("Gigante","Gigante","Gigantic")).getId();
var TAM_ARMA_GG3 = (new L("GG","GG","GG")).getId();

var CAT_ARMA_ARMA_CORTA = (new L("Arma Corta","Arma Corta","Short weapon")).getId();
var CAT_ARMA_HACHA = (new L("Hacha","Hacha","Axe")).getId();
var CAT_ARMA_MAZA = (new L("Maza","Maza","Mace")).getId();
var CAT_ARMA_ESPADA = (new L("Espada","Espada","Sword")).getId();
var CAT_ARMA_MANDOBLE = (new L("Mandoble","Mandoble","Large sword")).getId();
var CAT_ARMA_ASTA = (new L("Asta","Asta","Pole weapon")).getId();
var CAT_ARMA_CUERDA = (new L("Cuerda","Cuerda","String weapon")).getId();
var CAT_ARMA_ESCUDO = (new L("Escudo","Escudo","Shield")).getId();
var CAT_ARMA_SIN_ARMAS = (new L("Sin Armas","Sin Armas","Unarmed")).getId();
var CAT_ARMA_PROYECTILES = (new L("Arma de Proyectiles","Arma de Proyectiles","Projectile weapon")).getId();
var CAT_ARMA_MUNICION = (new L("Munición","Munición","Ammunition")).getId();
var CAT_ARMA_LANZAMIENTO = (new L("Arma Arrojadiza","Arma Arrojadiza","Thrown weapon")).getId();

var REGLA_ARMA_PRECISA = (new L("Precisa","Precisa","Precise")).getId();
var REGLA_ARMA_PRECISA_EXP = (new L("Este tipo de armas permite al personaje disminuir a la mitad los penalizadores de los golpes apuntados, y los de la maniobra de Engatillar. Sólo se aplica en ataques cuerpo a cuerpo, no con proyectiles lanzados.","Este tipo de armas permite al personaje disminuir a la mitad los penalizadores de los golpes apuntados, y los de la maniobra de Engatillar. Sólo se aplica en ataques cuerpo a cuerpo, no con proyectiles lanzados.","Este tipo de armas permite al personaje disminuir a la mitad los penalizadores de los golpes apuntados, y los de la maniobra de Engatillar. Sólo se aplica en ataques cuerpo a cuerpo, no con proyectiles lanzados.")).getId(); //TODO
var REGLA_ARMA_DOS_MANOS = (new L("Arma a dos manos","Arma a dos manos","Two-handed weapon")).getId();
var REGLA_ARMA_DOS_MANOS_EXP = (new L("Son las que se usan necesariamente con ambas manos. Las de este tipo permiten al personaje doblar el bono de Fuerza para calcular su daño final.","Son las que se usan necesariamente con ambas manos. Las de este tipo permiten al personaje doblar el bono de Fuerza para calcular su daño final.","Son las que se usan necesariamente con ambas manos. Las de este tipo permiten al personaje doblar el bono de Fuerza para calcular su daño final.")).getId(); //TODO
var REGLA_ARMA_UNA_O_DOS_MANOS = (new L("Arma a una o dos manos","Arma a una o dos manos","One or two handed weapon")).getId();
var REGLA_ARMA_UNA_O_DOS_MANOS_EXP = (new L("Pueden utilizarse indistintamente con una o ambas manos. Si se usan con las dos, también permiten doblar el bono de Fuerza para calcular su daño final. En ellas aparecen indicados dos números en la fuerza requerida; el primero es el necesario para usarla con dos manos, y el segundo con sólo una.","Pueden utilizarse indistintamente con una o ambas manos. Si se usan con las dos, también permiten doblar el bono de Fuerza para calcular su daño final. En ellas aparecen indicados dos números en la fuerza requerida; el primero es el necesario para usarla con dos manos, y el segundo con sólo una.","Pueden utilizarse indistintamente con una o ambas manos. Si se usan con las dos, también permiten doblar el bono de Fuerza para calcular su daño final. En ellas aparecen indicados dos números en la fuerza requerida; el primero es el necesario para usarla con dos manos, y el segundo con sólo una.")).getId(); //TODO
var REGLA_ARMA_COMPLEJA = (new L("Compleja","Compleja","Complex")).getId();
var REGLA_ARMA_COMPLEJA_EXP = (new L("Esta clase de armas es excepcionalmente difícil de utilizar. Por ello, un personaje aumenta dos puntos su índice de Pifia, fracasando con un resultado de 5 en un D100. Si alcanza la maestría con ella, desaparece completamente este penalizador.","Esta clase de armas es excepcionalmente difícil de utilizar. Por ello, un personaje aumenta dos puntos su índice de Pifia, fracasando con un resultado de 5 en un D100. Si alcanza la maestría con ella, desaparece completamente este penalizador.","Esta clase de armas es excepcionalmente difícil de utilizar. Por ello, un personaje aumenta dos puntos su índice de Pifia, fracasando con un resultado de 5 en un D100. Si alcanza la maestría con ella, desaparece completamente este penalizador.")).getId();
var REGLA_ARMA_LANZABLE = (new L("Lanzable","Lanzable","Throwable")).getId();
var REGLA_ARMA_LANZABLE_EXP = (new L("Todas las armas con esta regla especial están equilibradas o pensadas para ser usadas a distancia. Los personajes que tengan habilidad con ellas podrán emplearlas tanto físicamente como arrojándolas, sin la necesidad de adquirir la Tabla de armas de lanzamiento.","Todas las armas con esta regla especial están equilibradas o pensadas para ser usadas a distancia. Los personajes que tengan habilidad con ellas podrán emplearlas tanto físicamente como arrojándolas, sin la necesidad de adquirir la Tabla de armas de lanzamiento.","Todas las armas con esta regla especial están equilibradas o pensadas para ser usadas a distancia. Los personajes que tengan habilidad con ellas podrán emplearlas tanto físicamente como arrojándolas, sin la necesidad de adquirir la Tabla de armas de lanzamiento.")).getId();
var REGLA_ARMA_PRESA = (new L("Presa","Presa","Snare")).getId();
var REGLA_ARMA_PRESA_EXP = (new L("Son aquellas que permiten, a quienes las empleen, utilizar maniobras específicas de Presa para atrapar al oponente. Al contrario de lo que ocurre con las manos desnudas, al presar con ellas, un personaje no puede elegir usar sus propias características, sino que deberá utilizar la Fuerza natural del arma. Dicha característica representa su capacidad innata para trabar a sus adversarios. Naturalmente, se siguen utilizando los bonificadores a los controles enfrentados que se apliquen por la diferencia entre las habilidades de los contendientes. En el caso de las armas de calidad, cada bono natural de +5 añade un +1 a su Fuerza para presar.","Son aquellas que permiten, a quienes las empleen, utilizar maniobras específicas de Presa para atrapar al oponente. Al contrario de lo que ocurre con las manos desnudas, al presar con ellas, un personaje no puede elegir usar sus propias características, sino que deberá utilizar la Fuerza natural del arma. Dicha característica representa su capacidad innata para trabar a sus adversarios. Naturalmente, se siguen utilizando los bonificadores a los controles enfrentados que se apliquen por la diferencia entre las habilidades de los contendientes. En el caso de las armas de calidad, cada bono natural de +5 añade un +1 a su Fuerza para presar.","Son aquellas que permiten, a quienes las empleen, utilizar maniobras específicas de Presa para atrapar al oponente. Al contrario de lo que ocurre con las manos desnudas, al presar con ellas, un personaje no puede elegir usar sus propias características, sino que deberá utilizar la Fuerza natural del arma. Dicha característica representa su capacidad innata para trabar a sus adversarios. Naturalmente, se siguen utilizando los bonificadores a los controles enfrentados que se apliquen por la diferencia entre las habilidades de los contendientes. En el caso de las armas de calidad, cada bono natural de +5 añade un +1 a su Fuerza para presar.")).getId(); //TODO
var REGLA_ARMA_TRABA_EL_ARMA = (new L("Traba el arma","Traba el arma","Weapon catcher")).getId();
var REGLA_ARMA_TRABA_EL_ARMA_EXP = (new L("Artefactos que, por su diseño y características, disponen de la oportunidad de trabar o desarmar al oponente. Si realizando una parada con una de estas armas se consigue un contraataque, el personaje podrá realizar un ataque para Desarmar al adversario sin ningún tipo de penalizador.","Artefactos que, por su diseño y características, disponen de la oportunidad de trabar o desarmar al oponente. Si realizando una parada con una de estas armas se consigue un contraataque, el personaje podrá realizar un ataque para Desarmar al adversario sin ningún tipo de penalizador.","Artefactos que, por su diseño y características, disponen de la oportunidad de trabar o desarmar al oponente. Si realizando una parada con una de estas armas se consigue un contraataque, el personaje podrá realizar un ataque para Desarmar al adversario sin ningún tipo de penalizador.")).getId(); //TODO


var AVISO_RECUPERADOS_PD_HABILIDAD = (new L("PD recuperados para ajustar valor de habilidad","PD recuperados para ajustar valor de habilidad","free DP back after adjusting skill value")).getId();




var UDS_PD = (new L("uds PD","PD","DP")).getId();
var UDS_PC = (new L("uds PC","PC","CP")).getId();
var UDS_PORCENT = (new L("uds %","%","%")).getId();
var UDS_CV = (new L("uds CV","CV","PP")).getId();
var UDS_CM = (new L("uds CM","CM","MK")).getId();
var UDS_ELAN = (new L("uds elan","elan","elan")).getId();
var UDS_NIVELES_VIA = (new L("uds niveles de magia","niveles de magia","magic levels")).getId();

var FUE = (new L("Fuerza","Fuerza","Strength")).getId();
var DES = (new L("Destreza","Destreza","Dextery")).getId();
var AGI = (new L("Agilidad","Agilidad","Agility")).getId();
var CON = (new L("Constitución","Constitución","Constitution")).getId();
var INT = (new L("Inteligencia","Inteligencia","Intelligence")).getId();
var POD = (new L("Poder","Poder","Power")).getId();
var VOL = (new L("Voluntad","Voluntad","Willpower")).getId();
var PER = (new L("Percepción","Percepción","Perception")).getId();

var FUE3 = (new L("FUE","FUE","STR")).getId();
var DES3 = (new L("DES","DES","DEX")).getId();
var AGI3 = (new L("AGI","AGI","AGI")).getId();
var CON3 = (new L("CON","CON","CON")).getId();
var INT3 = (new L("INT","INT","INT")).getId();
var POD3 = (new L("POD","POD","POW")).getId();
var VOL3 = (new L("VOL","VOL","WP")).getId();
var PER3 = (new L("PER","PER","PER")).getId();

var ERR_CARACTERISTICA_ERRONEA = (new L("Error: Nombre de característica erróneo","Error: Nombre de característica erróneo","Error: Wrong ability name")).getId();
var ERR_VALOR_CARACTERISTICA_ERRONEO = (new L("Error: Valor de característica fuera de rango","Error: Valor de característica fuera de rango","Error: Ability value out of bounds")).getId();


var NOM_ARQ_LUCHADOR = (new L("Luchador","Luchador","Fighter")).getId();
var NOM_ARQ_MISTICO = (new L("Místico","Místico","Mystic")).getId();
var NOM_ARQ_PSIQUICO = (new L("Psíquico","Psíquico","Psychic")).getId();
var NOM_ARQ_ACECHADOR = (new L("Acechador","Acechador","Prowler")).getId();
var NOM_ARQ_DOMINE = (new L("Domine","Domine","Domine")).getId();
var NOM_ARQ_SIN_CATEGORIA = (new L("Sin Categoría","Sin Categoría","Novel")).getId();

var ORIGEN_MULTIPLO_VIDA = (new L("Múltiplos de vida","Múltiplos de vida","LP Multiples")).getId();

var ERR_HABILIDAD_ERRONEA = (new L("Error: Nombre de habilidad erróneo","Error: Nombre de habilidad erróneo","Error: wrong skill name")).getId();
var ERR_TIPO_HABILIDAD_ERRONEO = (new L("Error: Nombre de tipo de habilidad erróneo","Error: Nombre de tipo de habilidad erróneo","Error: wrong skill group name")).getId();


var SEXO_HOMBRE = (new L("Hombre","Hombre","Male")).getId();
var SEXO_MUJER = (new L("Mujer","Mujer","Female")).getId();

var DIF_RUT = (new L("Rutinario","Rutinario","Rutinario")).getId();
var DIF_RUT3 = (new L("RUT","RUT","RUT")).getId();

var DIF_FAC = (new L("Fácil","Fácil","Easy")).getId();
var DIF_FAC3 = (new L("FAC","FAC","EAS")).getId();

var DIF_MED = (new L("Media","Media","Medium")).getId();
var DIF_MED3 = (new L("MED","MED","MED")).getId();

var DIF_DIF = (new L("Difícil","Difícil","Hard")).getId();
var DIF_DIF3 = (new L("DIF","DIF","HRD")).getId();

var DIF_MDF = (new L("Muy Difícil","Muy Difícil","Very Hard")).getId();
var DIF_MDF3 = (new L("MDF","MDF","VHR")).getId();

var DIF_ABS = (new L("Absurdo","Absurdo","Absurd")).getId();
var DIF_ABS3 = (new L("ABS","ABS","ABS")).getId();

var DIF_CIM = (new L("Casi Imposible","Casi Imposible","Almost Impossible")).getId();
var DIF_CIM3 = (new L("CIM","CIM","AIM")).getId();

var DIF_IMP = (new L("Imposible","Imposible","Impossible")).getId();
var DIF_IMP3 = (new L("IMP","IMP","IMP")).getId();

var DIF_INH = (new L("Inhumano","Inhumano","Inhuman")).getId();
var DIF_INH3 = (new L("INH","INH","INH")).getId();

var DIF_ZEN = (new L("Zen","Zen","Zen")).getId();
var DIF_ZEN3 = (new L("ZEN","ZEN","ZEN")).getId();


var ERR_DIFICULTAD_DESCONOCIDA = (new L("Error: dificultad desconocida","Error: dificultad desconocida","Error: Unknown Difficulty")).getId();


var UI_ESP_PERROS =  (new L("Perros","Perros","Dogs")).getId();
var UI_ESP_LOBOS =  (new L("Lobos","Lobos","Wolves")).getId();
var UI_ESP_LOROS =  (new L("Loros","Loros","Parrots")).getId();
var UI_ESP_ELEFANTES =  (new L("Elefantes","Elefantes","Elephants")).getId();
var UI_ESP_CABALLOS =  (new L("Caballos","Caballos","Horses")).getId();
var UI_ESP_MATEMATICAS =  (new L("Matemáticas","Matemáticas","Mathematics")).getId();
var UI_ESP_MECANICA =  (new L("Mecánica","Mecánica","Mechanic")).getId();
var UI_ESP_ASTRONOMIA =  (new L("Astronomía","Astronomía","Astronomy")).getId();
var UI_ESP_FILOSOFIA =  (new L("Filosofía","Filosofía","Philosophy")).getId();
var UI_ESP_ABEL =  (new L("Abel","Abel","Abel")).getId();
var UI_ESP_GUERRAS_CRUZ =  (new L("Guerras de la Cruz","Guerras de la Cruz","Wars of the Cross")).getId();
var UI_ESP_IMPERIO_ABEL =  (new L("Imperio de Abel","Imperio de Abel","Abel Empire")).getId();
var UI_ESP_FABULAS =  (new L("Fábulas","Fábulas","Fables")).getId();
var UI_ESP_ECONOMIA =  (new L("Economía","Economía","Economics")).getId();
var UI_ESP_PINTURA =  (new L("Pintura","Pintura","Painting")).getId();
var UI_ESP_ESCULTURA =  (new L("Escultura","Escultura","Sculpting")).getId();
var UI_ESP_BAILES_SALON =  (new L("Baile de Salón","Baile de Salón","Formal Dancing")).getId();
var UI_ESP_BAILES_ESPHERIA =  (new L("Bailes de Espheria","Bailes de Espheria","Spheria Dances")).getId();
var UI_ESP_BAILES_ANTIGUOS =  (new L("Bailes Antiguos","Bailes Antiguos","Old Dances")).getId();
var UI_ESP_ARMADURAS_PESADAS =  (new L("Armaduras pesadas","Armaduras pesadas","Heavy Armor")).getId();
var UI_ESP_ESPADAS =  (new L("Espadas","Espadas","Swords")).getId();
var UI_ESP_UTENSILIOS_COCINA =  (new L("Utensilios de cocina","Utensilios de cocina","Kitchen utensils")).getId();
var UI_ESP_FLAUTA =  (new L("Flauta","Flauta","Flute")).getId();
var UI_ESP_CLAVICORDIO =  (new L("Clavicordio","Clavicordio","Clavichord")).getId();
var UI_ESP_ARPA =  (new L("Arpa","Arpa","Harp")).getId();
var UI_ESP_JUEGOS_CARTAS =  (new L("Juegos de cartas","Juegos de cartas","Card games")).getId();
var UI_ESP_MALABARES =  (new L("Malabares","Malabares","Juggling")).getId();

var ATAQUE_FIL = (new L("ata FILo","FILo","CUTting")).getId();
var ATAQUE_CON = (new L("ata CONtundente","CONtundente","IMPact")).getId();
var ATAQUE_PEN = (new L("ata PENetrante","PENetrante","THRusting")).getId();
var ATAQUE_CAL = (new L("ata CALor","CALor","HOT")).getId();
var ATAQUE_FRI = (new L("ata FRIo","FRIo","COLd")).getId();
var ATAQUE_ELE = (new L("ata ELEctricidad","ELEctricidad","ELEctricity")).getId();
var ATAQUE_ENE = (new L("ata ENErgía","ENErgía","ENErgy")).getId();
var ATAQUE_FIL3 = (new L("ata FIL","FIL","CUT")).getId();
var ATAQUE_CON3 = (new L("ata CON","CON","IMP")).getId();
var ATAQUE_PEN3 = (new L("ata PEN","PEN","THR")).getId();
var ATAQUE_CAL3 = (new L("ata CAL","CAL","HOT")).getId();
var ATAQUE_FRI3 = (new L("ata FRI","FRI","COL")).getId();
var ATAQUE_ELE3 = (new L("ata ELE","ELE","ELE")).getId();
var ATAQUE_ENE3 = (new L("ata ENE","ENE","ENE")).getId();

var DISP_TOTAL = (new L("Disponibilidad normal","Disponibilidad normal","Normal availability")).getId();
var DISP_B = (new L("Disponibilidad B","Disponibilidad B","Availability B")).getId();
var DISP_A = (new L("Disponibilidad A","Disponibilidad A","Availability A")).getId();
var NO_DISPONIBLE = (new L("No disponible","No disponible","Not available")).getId();


var ACCION_ACTIVA = (new L("Activa","Activa","Active")).getId();
var ACCION_PASIVA = (new L("Pasiva","Pasiva","Passive")).getId();

var ALERT_ARTE_MARCIAL_ATAQUE_DEFENSA_BAJOS = (new L("Aviso Limite Artes Marciales","No puedes aprender más artes marciales. Mejora más tu ataque y defensa","You can't learn more martial arts. Raise your attack and defenses.")).getId();

var ELAN_SYNC_REQ = (new L("Sinc. Req.","Sinc. Req.","Synch. Req.")).getId();

new L("E", "E", "S");
new L("1ª", "1ª", "1st");
new L("2ª", "2ª", "2nd");


var UI_COMPRAR_TECNICA_EXISTENTE = (new L("Comprar técnica de dominio existente","Comprar técnica de dominio existente","Buy pre-existent technique")).getId();
var UI_COMPRAR_HABILIDAD_KI = (new L("Comprar habilidad de ki", "Comprar habilidad de ki", "Buy Ki Ability")).getId();
var UI_CREAR_TECNICA_DOMINIO = (new L("Crear técnica de dominio", "Crear técnica de dominio", "Design own ki technique")).getId();
var UI_ACCESO_NUEVA_VIA = (new L("Acceso a nueva vía de magia","Acceso a nueva vía de magia","Access to new spell list")).getId();
var UI_COMPRAR_CONJURO_SUELTO = (new L("Comprar conjuro suelto","Comprar conjuro suelto","Cherry pick spell")).getId();
var UI_TOTAL = (new L("Total","Total", "Total")).getId();
var UI_LIBRES = (new L("Libres", "Libres", "Free")).getId();
var UI_LIBRE = (new L("Libre", "Libre", "Free")).getId();

var DIAG_ELEGIR_CATEGORIA_TITULO = (new L("Seleccionar categoría","Seleccionar categoría","Choose class")).getId();

var UI_ARTES_MARCIALES_BASICAS = (new L("Artes Marciales Básicas","Artes Marciales Básicas","Basic Martial Arts")).getId();
var UI_ARTES_MARCIALES_AVANZADAS = (new L("Artes Marciales Avanzadas","Artes Marciales Avanzadas","Advanced Martial Arts")).getId();

var UI_BTN_TIPO = (new L("Tipo", "Tipo", "Type")).getId();
var UI_REPARTO_CARACTERISTICAS = (new L("Asigna los valores","Asigna los valores","Assign the points")).getId();

var UI_NECESITAS_40_ATAQUE_DEFENSA = (new L("Necesitas 40 de ataque y defensa por cada arte marcial.", "Necesitas 40 de ataque y defensa por cada arte marcial.", "You need 40 in attack and defenses for each martial art")).getId();


var UI_ESPECIFICA = (new L("Especifica","Especifica","Specify")).getId();

var UI_SINCRONIZACION = (new L("Sincronizacion", "Sincronización", "Synchronization")).getId();

var UI_CONOCIMIENTO_MARCIAL = (new L("Conocimiento Marcial","Conocimiento Marcial","Martial Knowledge")).getId();
var UI_HABILIDADES_KI = (new L("Habilidades del Ki","Habilidades del Ki","Ki Abilities")).getId();
var UI_TECNICAS_KI = (new L("Técnicas de Dominio","Técnicas de Dominio","Ki Techniques")).getId();

var UI_MINIMO = (new L("Minimo", "Mínimo", "Min.")).getId();
var UI_MAXIMO = (new L("Maximo", "Máximo", "Max.")).getId();
var UI_MIN = (new L("Min", "Min.", "Min.")).getId();
var UI_MAX = (new L("Max", "Max.", "Max.")).getId();

var UI_EFECTOS_DE_LA_TECNICA = (new L("Efectos de la técnica","Efectos de la técnica","Technique Effects")).getId();
var UI_EFECTO = (new L("Efecto","Efecto","Effect")).getId();
var UI_MANTENIMIENTO = (new L("Mantenimiento","Mantenimiento","Maintenance")).getId();
var UI_BORRAR = (new L("Borrar","Borrar","Delete")).getId();

var UI_DESVENTAJA = (new L("Desventaja","Desventaja","Disadvantage")).getId();
var UI_DESVENTAJAS_DE_LA_TECNICA = (new L("Desventajas de la técnica","Desventajas de la técnica","Technique disadvantages")).getId();

var UI_CREAR = (new L("Crear","Crear","Create")).getId();

var UI_ON = (new L("ON", "ON", "ON")).getId();
var UI_OFF = (new L("OFF", "OFF", "OFF")).getId();

var UI_NIVELES_VIA = (new L("Niveles de vía","Niveles de vía","Spell levels")).getId();
var UI_VIAS = (new L("Vías de magia","Vías de magia","Spell Lists")).getId();
var UI_CONJUROS = (new L("Conjuros sueltos","Conjuros sueltos","Cherry picked spells")).getId();


var UI_NIVELES_MAXIMOS_A_REPARTIR = (new L("Niveles máximos a repartir","Niveles máximos a repartir","Max levels to assign")).getId();
var UI_NIVELES_LIBRES_A_REPARTIR = (new L("Niveles libres a repartir","Niveles libres a repartir","Free levels to assign")).getId();


var UI_NV = (new L("Nv", "Nv", "Lv")).getId();
var UI_NIVELES_VIA_GASTADOS = (new L("niveles gastados", "niveles gastados", "spent levels")).getId();
var UI_LIBRE_ACCESO = (new L("Libre acceso", "Libre acceso", "Free access")).getId();

var UI_DISCIPLINAS_DOMINADAS = (new L("Disciplinas dominadas","Disciplinas dominadas","Dominated Disciplines")).getId();
var UI_CVS_POTENCIAL = (new L("CVs, Potencial Psíquico e Innatos","CVs, Potencial Psíquico e Innatos","PP, Psychic Potential and Innates")).getId();
var UI_CV_LIBRES = (new L("CV Libres","CV Libres","Free PP")).getId();
var UI_INNATO = (new L("Innatos","Innatos","Innates")).getId();

var UI_AFINIDAD_CON_NUEVA_DISCIPLINA = (new L("Afinidad con nueva disciplina","Afinidad con nueva disciplina","Affinity with new Discipline")).getId();
var UI_DOMINAR_NUEVO_PODER = (new L("Dominar un nuevo poder","Dominar un nuevo poder","Dominate new Power")).getId();

var UI_POTENCIAL = (new L("potencial","potencial","potential")).getId();

var UI_CAMBIAR_CAT = (new L("Cambiar cat.","Cambiar cat.","Change class")).getId();
var UI_BASE = (new L("base","base","base")).getId();
var UI_FINAL = (new L("final","final","final")).getId();

var UI_COMPRAR_VENTAJA = (new L("Comprar ventaja","Comprar ventaja","Buy Advantage")).getId();
var UI_COMPRAR_DESVENTAJA = (new L("Comprar desventaja","Comprar desventaja","Buy Disadvantage")).getId();
var UI_COMPRAR_TECNICA_DE_KI = (new L("Comprar técnica del dominio","Comprar técnica del dominio","Buy Ki Technique")).getId();
var UI_ARMA_INICIAL = (new L("Arma inicial","Arma inicial","Initial weapon")).getId();
var UI_OTRAS_ARMAS = (new L("Otras armas", "Otras armas", "Other weapons")).getId();
var UI_MAGIA_INNATA = (new L("Magia innata","Magia innata","Innate Magic")).getId();
var UI_AUMENTAR_NIVELES_EN_VIAS = (new L("Aumentar niveles en vías","Aumentar niveles en vías","Raise spell lists levels")).getId();
var UI_AFINIDAD_CON_DISCIPLINAS = (new L("Afinidad con disciplinas","Afinidad con disciplinas","Affinity with Disciplines")).getId();
var UI_PODERES_DOMINADOS = (new L("Poderes dominados","Poderes dominados","Dominated powers")).getId();

var UI_COMPRAR_TABLA_ARMAS = (new L("Comprar tabla de armas","Comprar tabla de armas","Buy Table Weapon/Combat Style")).getId();