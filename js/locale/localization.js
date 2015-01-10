//region codigo
var SPA = "spa";
var ENG = "eng";
var FRA = "fra";

var IDIOMA_UI = ENG;

var diccionario = {};

function idioma(idioma) {
    console.log("Paso a idioma " + idioma);
    IDIOMA_UI = idioma;

    mostrarPersonajeActual();

    //TODO actualizar menús
}

function cambiaIdiomaEspañol() {
    idioma(SPA);
}

function cambiaIdiomaIngles() {
    idioma(ENG);
}

function cambiaIdiomaFrances() {
    idioma(FRA);
}

function setIdiomaUI() {
    var lang = navigator.language || navigator.userLanguage;

    if ((lang.lastIndexOf("es") != -1) || (lang.lastIndexOf("spa") != -1)) {
        IDIOMA_UI = SPA;
    } else if ((lang.lastIndexOf("fr") != -1) || (lang.lastIndexOf("fra") != -1) || (lang.lastIndexOf("fre") != -1)) {
        IDIOMA_UI = FRA;
    }else {
        IDIOMA_UI = ENG;
    }
}

function L(id, spa, eng, fra) {
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

    /**
     *
     * @type {string}
     */
    this[FRA] = fra;

    if (!diccionario["ANIMAUNICO_"+this.id]) {
        diccionario["ANIMAUNICO_"+this.id] = this;
    } else {
        console.log("Clave de diccionario repetida: [" + this.id + " / " + this[SPA] + " / " + this[ENG] + " / " + this[FRA] + "]");
        console.log("--Clave previa: [" + diccionario["ANIMAUNICO_"+this.id].id + " / " + diccionario["ANIMAUNICO_"+this.id][SPA] + " / " + diccionario["ANIMAUNICO_"+this.id][ENG] + " / " + diccionario["ANIMAUNICO_"+this.id][FRA] + "]");
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

new L("E", "E", "S", "E");
new L("1ª", "1ª", "1st", "1er");
new L("2ª", "2ª", "2nd", "2e");

var UI_NO = (new L("UI_NO","No","No","Non")).getId();
var UI_SI = (new L("UI_SI","Sí","Yes","Oui")).getId();
var UI_NOMBRE = (new L("Nombre","Nombre","Name","Nom")).getId();
var UI_SEXO = (new L("Sexo","Sexo","Gender","Genre")).getId();
var UI_RAZA = (new L("Raza","Raza","Race","Race")).getId();
var UI_PESO = (new L("Peso","Peso","Weight","Poids")).getId();
var UI_ALTURA = (new L("Altura","Altura","Height","Taille")).getId();
var UI_CATEGORIA = (new L("Categoría","Categoría","Class","Classe")).getId();
var UI_PUNTOS_CANSANCIO = (new L("Puntos de Cansancio","Puntos de Cansancio","Fatigue","Points de fatigue")).getId();
var UI_TIPO_MOVIMIENTO = (new L("Tipo de Movimiento","Tipo de Movimiento","Movement","Mouvement")).getId();
var UI_PUNTOS_VIDA = (new L("Puntos de vida","Puntos de vida","Life Points","Points de vie")).getId();
var UI_APARIENCIA = (new L("Apariencia","Apariencia","Appeareance","Apparence")).getId();
var UI_TAMAÑO = (new L("Tamaño","Tamaño","Size","Taille")).getId();
var UI_ESTATUS_SOCIAL = (new L("Estatus Social","Estatus Social","Social Status","Status Social")).getId();
var UI_EQUIPAMIENTO = (new L("Secc Equipamiento","Equipamiento","Equipment","Equipement")).getId();
var UI_EQUIPAMIENTO_ARMAS = (new L("Secc Equipamiento armas","Armas","Weapons","Armes")).getId();
var UI_EQUIPAMIENTO_ARMADURAS = (new L("Secc Equipamiento armaduras","Armaduras","Armors","Armures")).getId();
var UI_EQUIPAMIENTO_YELMOS = (new L("Secc Equipamiento yelmos","Yelmos","Helms","Casques")).getId();
var UI_DINERO = (new L("Secc Dinero","Dinero","Money","Argent")).getId();
var UI_DESCRIPCION_TRASFONDO = (new L("Secc Descripcion Trasfondo","Descripción y trasfondo","Description and background","Description et passé")).getId();
var UI_TRASFONDO = (new L("Secc Trasfondo","Trasfondo","Background","Passé")).getId();
var CLASE_SOCIAL_POBRE = (new L("CS_Pobre","Pobre","Poor","Pauvre")).getId();
var CLASE_SOCIAL_MEDIO = (new L("CS_Media","Media","Medium","Moyen")).getId();
var CLASE_SOCIAL_ALTO = (new L("CS_Alta","Alta","High","Haute")).getId();
var CLASE_SOCIAL_BAJA_NOBLEZA = (new L("CS_Baja_Nobleza","Baja Nobleza","Low Nobility","Basse Noblesse")).getId();
var UI_REGENERACION = (new L("Regeneración","Regeneración","Regeneration","Régénération")).getId();
var UI_PUNTOS_DESARROLLO = (new L("Puntos de Desarrollo","Puntos de Desarrollo","Development Points","Points de Formation")).getId();
var UI_PUNTOS_CREACION = (new L("Puntos de Creación","Puntos de Creación","Creation Points","Points de Création")).getId();
var UI_AUMENTOS_CARACTERISTICAS = (new L("Aumentos de características","Aumentos de características","Attribute Enhancements","Augmentation de caractéristiques")).getId();
var UI_PUNTOS_SIN_USAR = (new L("sin usar","sin usar","free","libre")).getId();
var UI_PC_DON = (new L("del Don","del Don","from Gift","du Don")).getId();
var UI_PC_PSIQUICA = (new L("de psíquica","de psíquica","from Psychic","du Psychique")).getId();
var UI_PC_TRASFONDO = (new L("de trasfondo","de trasfondo","from Background","du Passé")).getId();
var UI_NIVEL = (new L("Nivel","Nivel","Level","Niveau")).getId();
var UI_PX = (new L("Puntos de Experiencia","Puntos de Experiencia","Experience Points","Points d'Expérience")).getId();
var UI_ARQUETIPO = (new L("Arquetipo","Arquetipo","Archetype","Archétype")).getId();
var UI_TURNO = (new L("Turno","Turno","Initiative","Initiative")).getId();
var UI_TABLAS = (new L("Tablas","Tablas","Modules","Modules")).getId();
var UI_ESTADISTICAS_ARMAS = (new L("UI_ESTADISTICAS_ARMAS","Armas","Weapons","Armes")).getId();
var UI_ARTES_MARCIALES = (new L("Artes Marciales","Artes Marciales","Martial Arts","Arts Martiaux")).getId();
var UI_ARS_MAGNUS = (new L("UI_ARTS_MAGNUS","Ars Magnus","Ars Magnus","Ars Magnus")).getId();
var UI_CM = (new L("CM","CM","MK","DI")).getId();
var UI_ARMA = (new L("UI_ARMA","Arma","Weapon","Armes")).getId();
var UI_ARMADURA = (new L("Armadura","Armadura","Armor","Armure")).getId();
var UI_ARMAS_MANEJADAS = (new L("Armas manejadas","Armas manejadas","Weapons known","Armes Connues")).getId();
var UI_CAPACIDADES_FISICAS = (new L("Capacidades físicas","Capacidades físicas","Physical Abilities","Capacités physiques")).getId();
var UI_DESARROLLO = (new L("Desarrollo del personaje","Desarrollo del personaje","Character Development","Développement de personnage")).getId();
var UI_ELAN = (new L("Elan","Elan","Elan","Elan")).getId();
var UI_DESEQUILIBRIO_OFENSIVO_MAGICO = (new L("UI_DESEQUILIBRIO_OFENSIVO_MAGICO","Desequilibrio Ofensivo Mágico","Magical Offensive Unbalance","Déséquilibre Magique Offensif")).getId();
var UI_DESCRIPCION = (new L("Descripción","Descripción","Description","Description")).getId();
var UI_COSTE_KI = (new L("Coste de Ki","Coste de Ki","Ki Cost","Coût en Ki")).getId();
var UI_MANTENIDA = (new L("Técnica mantenida","Técnica mantenida","Maintained Technique","Technique maintenue")).getId();
var UI_COSTE_MANTENIMIENTO = (new L("Coste de mantenimiento","Coste de mantenimiento","Maintenance Cost","Coût de maintien")).getId();
var UI_PD_COMBATE = (new L("PDs en combate","PDs en combate","Combat DPs","PFs en martial")).getId();
var UI_PD_ATAQUE_DEFENSA = (new L("PDs en ataque y defensa","PDs en ataque y defensa","Attack and Defense DPs","PFs en attaque et défense")).getId();
var UI_PD_SOBRENATURAL = (new L("PDs en sobrenaturales","PDs en sobrenaturales","Magic DPs","PFs en mystique")).getId();
var UI_PD_PSIQUICA = (new L("PDs en psíquicas","PDs en psíquicas","Psychic DPs","PFs en psychique")).getId();
var UI_PD_SECUNDARIAS = (new L("PDs en secundarias","PDs en secundarias","Secondary Abilities DPs","PFs en secondaires")).getId();
var UI_MULTIPLO_VIDA = (new L("UI Múltiplo de vida","Múltiplo de vida","Life Multiple","Multiplicateur de Vie")).getId();
var UI_PV_POR_NIVEL = (new L("UI PV por nivel","PV por nivel","LP per level","PV par niveau")).getId();
var UI_TURNO_POR_NIVEL = (new L("UI Turno por nivel","Turno por nivel","Init per level","Initiative par niveau")).getId();
var UI_CM_POR_NIVEL = (new L("UI CM por nivel","CM por nivel","MK per level","DI par niveau")).getId();
var UI_NIVELES_PARA_CV = (new L("UI Niveles para CV","Niveles para CV","Levels for PP","Niveaux par PPP")).getId();
var UI_LIMITE_COMBATE = (new L("UI Máximo en Combate","Máximo en Combate","Combat Max","Maximum en Martial")).getId();
var UI_ATAQUE = (new L("UI Ataque","Ataque","Attack","Attaque")).getId();
var UI_DEFENSA = (new L("UI Defensa","Defensa","Defense","Défense")).getId();
var UI_DAÑO_BASE = (new L("UI_DAÑO_BASE","Daño base","Base Dmg.","Dégâts de base")).getId();
var UI_DAÑO_FINAL = (new L("UI_DAÑO_FINAL","Daño final","Final Dmg.","Dégâts finaux")).getId();
var UI_VELOCIDAD = (new L("UI_VELOCIDAD","Velocidad","Speed","Vitesse")).getId();
var UI_TURNO_FINAL = (new L("UI_TURNO_FINAL","Turno final","Final Init.","Init. Finale")).getId();
var UI_CRITICO_1 = (new L("UI_CRITICO_1","Crit. 1","Crit. 1","Mode 1")).getId();
var UI_CRITICO_2 = (new L("UI_CRITICO_2","Crit. 2","Crit. 2","Mode 2")).getId();
var UI_CADENCIA_DE_FUEGO = (new L("UI_CADENCIA_DE_FUEGO","CdF","ROF","CdT")).getId();
var UI_ESPECIAL = (new L("UI_ESPECIAL","Especial","Special","Spécial")).getId();
var UI_ENTEREZA = (new L("UI_ENTEREZA","Entereza","Fortitude","Solidité")).getId();
var UI_ROTURA = (new L("UI_ROTURA","Rotura","Breakage","Fracassement")).getId();
var UI_PRESENCIA = (new L("UI_PRESENCIA","Presencia","Presence","Présence")).getId();
var UI_PARADA = (new L("UI Parada","Parada","Block","Parade")).getId();
var UI_ESQUIVA = (new L("UI Esquiva","Esquiva","Dodge","Esquive")).getId();
var UI_LLEVAR_ARMADURA = (new L("UI Llevar Armadura","Llevar Armadura","Wear Armor","Port d'armure")).getId();
var UI_KI = (new L("UI_Ki","Ki","Ki","Ki")).getId();
var UI_ACUMULACION_KI = (new L("UI_ACUMULACION_KI","Acumulación de Ki","Ki Accumulation","Accumulation de Ki")).getId();
var UI_KI_AGI = (new L("UI Ki Agilidad","Ki Agilidad","Agility Ki","Ki Agilité")).getId();
var UI_ACUMULACION_KI_AGI = (new L("UI_KI_AGI","Ac. de Ki Agilidad","Agility Ki Accum","Ac. de Ki Agilité")).getId();
var UI_KI_DES = (new L("UI_KI_DES","Ki Destreza","Dextery Ki","Ki Dexterité")).getId();
var UI_ACUMULACION_KI_DES = (new L("UI_ACUMULACION_KI_DES","Ac. de Ki Destreza","Dextery Ki Accum","Ac. de Ki Dexterité")).getId();
var UI_KI_FUE = (new L("UI_KI_FUE","Ki Fuerza","Strength Ki","Ki Force")).getId();
var UI_ACUMULACION_KI_FUE = (new L("UI_ACUMULACION_KI_FUE","Ac. de Ki Fuerza","Strength Ki Accum","Ac. de Ki Force")).getId();
var UI_KI_CON = (new L("UI_KI_CON","Ki Constitución","Constitution Ki","Ki Constitution")).getId();
var UI_ACUMULACION_KI_CON = (new L("UI_ACUMULACION_KI_CON","Ac. de Ki Constitución","Constitution Ki Accum","Ac. de Ki Constitution")).getId();
var UI_KI_POD = (new L("UI_KI_POD","Ki Poder","Power Ki","Ki Pouvoir")).getId();
var UI_ACUMULACION_KI_POD = (new L("UI_ACUMULACION_KI_POD","Ac. de Ki Poder","Power Ki Accum","Ac. de Ki Pouvoir")).getId();
var UI_KI_VOL = (new L("UI_KI_VOL","Ki Voluntad","Willpower Ki","Ki Volonté")).getId();
var UI_ACUMULACION_KI_VOL = (new L("UI_ACUMULACION_KI_VOL","Ac. de Ki Voluntad","Willpower Ki Accum","Ac. de Ki Volonté")).getId();

var UI_HABILIDAD_NATURAL = (new L("Habilidad Natural (+10)","Habilidad Natural (+10)","Natural Ability (+10)","Amélioration Naturelle (+10)")).getId();
var UI_BONIFICADOR_NATURAL_FISICO = (new L("Bonificador natural físico (añadir bono de característica)","Bonificador natural físico (añadir bono de característica)","Physical Natural Bonus (add attribute bonus)","Bonus naturel physique (ajoute modificateur de caractéristique)")).getId();
var UI_BONIFICADOR_NATURAL_MENTAL = (new L("Bonificador natural mental (añadir bono de característica)","Bonificador natural mental (añadir bono de característica)","Mental Natural Bonus (add attribute bonus)","Bonus naturel mental (ajoute modificateur de caractéristique)")).getId();
var UI_BONIFICADOR_NATURAL_EXTRA = (new L("Bonificador natural extra (añadir bono de característica)","Bonificador natural extra (añadir bono de característica)","Extra Natural Bonus (add attribute bonus)","Bonus naturel supplémentaire (ajoute modificateur de caractéristique)")).getId();
var UI_BONO_NOVEL = (new L("Bono innato de Novel (+10)","Bono innato de Novel (+10)","Freeman Innate Bonus (+10)","Bonus Inné de Touche-à-tout (+10)")).getId();
var UI_BONOS_HABILIDAD_NATURAL = (new L("UI_BONOS_HABILIDAD_NATURAL","Bonos de Habilidad Natural","Natural Ability Bonuses","Bonus d'Amélioration Naturelle")).getId();
var UI_BONOS_NATURALES = (new L("UI_BONOS_NATURALES","Bonos Naturales","Natural Bonuses","Bonus Naturels")).getId();
var UI_BONOS_NOVEL = (new L("UI_BONOS_NOVEL","Bonos de Novel","Freelance Innate Bonuses","Bonus de Touche-à-tout")).getId();
var UI_ELEGIR = (new L("?","?","?","?")).getId();
var UI_LIMITE_SOBRENATURAL = (new L("Máximo en Sobrenatural","Máximo en Sobrenatural","Magic Max","Maximum en Mystique")).getId();
var UI_ZEON = (new L("UI Zeon","Zeon","Zeon","Zéon")).getId();
var UI_ACT = (new L("UI ACT","ACT","MA","AMR")).getId();
var UI_PROYECCION_MAGICA = (new L("UI Proyección Mágica","Proyección Mágica","Magic Projection","Projection Magique")).getId();
var UI_CONVOCAR = (new L("UI Convocar","Convocar","Summon","Convoquer")).getId();
var UI_DOMINAR = (new L("UI Dominar","Dominar","Control","Dominer")).getId();
var UI_ATAR = (new L("UI Atar","Atar","Bind","Lier")).getId();
var UI_DESCONVOCAR = (new L("UI Desconvocar","Desconvocar","Banish","Révoquer")).getId();
var UI_LIMITE_PSIQUICA = (new L("Máximo en Psíquica","Máximo en Psíquica","Psychic Max","Maximum en psychique")).getId();
var UI_CV = (new L("UI CV","CV","PP","PPP")).getId();
var UI_PROYECCION_PSIQUICA = (new L("UI Proyección Psíquica","Proyección Psíquica","Psychic Projection","Projection Psychique")).getId();
var UI_POTENCIAL_PSIQUICO = (new L("UI Potencial Psíquico","Potencial Psíquico","Psychic Potential","Talent Psychique")).getId();
var UI_ATLETICAS = (new L("UI Atléticas","Atléticas","Athletics","Athlétiques")).getId();
var UI_SOCIALES = (new L("UI Sociales","Sociales","Social","Sociales")).getId();
var UI_PERCEPTIVAS = (new L("UI Perceptivas","Perceptivas","Perception","Sensorielles")).getId();
var UI_INTELECTUALES = (new L("UI Intelectuales","Intelectuales","Intellectual","Intellectuelles")).getId();
var UI_VIGOR = (new L("UI Vigor","Vigor","Vigor","Vitales")).getId();
var UI_SUBTERFUGIO = (new L("UI Subterfugio","Subterfugio","Subterfuge","Clandestines")).getId();
var UI_CREATIVAS = (new L("UI Creativas","Creativas","Creative","Créatives")).getId();
var UI_COSTES_REDUCIDOS = (new L("Costes Reducidos","Costes Reducidos","Reduced Costs","Coûts réduits")).getId();
var UI_BONOS_INNATOS = (new L("Bonos innatos","Bonos innatos","Innate Bonus","Bonus inné")).getId();
var UI_POR_NIVEL = (new L("por nivel","por nivel","per level","par niveau")).getId();
var UI_NINGUNO = (new L("Ninguno","Ninguno","None","Aucun")).getId();
var UI_RF = (new L("Resistencia Física","Resistencia Física","Physical Resistance","Résistance Physique")).getId();
var UI_RE = (new L("Resistencia contra Enfermedades","Resistencia contra Enfermedades","Disease Resistance","Résistance aux Maladies")).getId();
var UI_RV = (new L("Resistencia contra Venenos","Resistencia contra Venenos","Poison Resistance","Résistance aux Poisons")).getId();
var UI_RM = (new L("Resistencia Mágica","Resistencia Mágica","Magic Resistance","Résistance Mystique")).getId();
var UI_RP = (new L("Resistencia Psíquica","Resistencia Psíquica","Psychic Resistance","Résistance Psychique")).getId();

var UI_DIALOGO_LOG_CAMBIOS_TITULO = (new L("Titulo Log de cambios","Log de cambios","Change log","Journal des modifications")).getId();
var UI_DIALOGO_LICENCIA_TITULO = (new L("Titulo Agradecimientos y licencia de software","Agradecimientos y licencia de software","Thanks and software license","Remerciements et licence du logiciel")).getId();
var UI_TITULO = (new L("TituloAnima","Anima: UNICO - Generador de personajes","Anima: UNICO - Character Generator","Anima: UNICO - Générateur de personnage")).getId();
var UI_MENU_PERSONAJE = (new L("Personaje","Personaje","Character","Personnage")).getId();
var UI_MENU_CREACION = (new L("Creacion","Creación","Generation","Création")).getId();
var UI_MENU_SOPORTE = (new L("Soporte","Soporte","Support","Support")).getId();
var UI_BOTON_CREACION = (new L("Iniciar Creación","Iniciar Creación","Start Creation","Commencer la Création")).getId();
var UI_BOTON_RAZA = (new L("Elegir Raza","Elegir Raza","Choose Race","Choisir la Race")).getId();
var UI_BOTON_CATEGORIA = (new L("Elegir Categoría","Elegir Categoría","Choose Class","Choisir la Classe")).getId();
var UI_BOTON_VENTAJAS = (new L("Comprar Ventajas","Comprar Ventajas","Buy Advantages","Acheter des Avantages")).getId();
var UI_BOTON_DESVENTAJAS = (new L("Elegir Desventajas","Elegir Desventajas","Choose Disadvantages","Choisir des Désavantages")).getId();
var UI_BOTON_NATURALES = (new L("Elegir bonos Naturales","Elegir bonos Naturales","Choose Natural Bonuses","Choisir les bonus Naturels")).getId();
var UI_BOTON_ARMA_INICIAL = (new L("Elegir arma inicial","Elegir arma inicial","Choose initial weapon","Choisir l'arme initial")).getId();
var UI_BOTON_ARTES_MARCIALES = (new L("Comprar Artes Marciales","Comprar Artes Marciales","Buy Martial Arts","Achter des Arts Martiaux")).getId();
var UI_BOTON_ARS_MAGNUS = (new L("UI_BOTON_ARS_MAGNUS","Comprar Ars Magnus","Buy Ars Magnus","Acheter des Ars Magnus")).getId();
var UI_BOTON_TABLAS_ARMAS = (new L("Comprar Tablas de Armas","Comprar Tablas de Armas","Buy Modules and Tables","Acheter des Modules d'Armes")).getId();
var UI_BOTON_GASTAR_CV = (new L("Gastar CVs","Gastar CVs","Spend PPs","Dépenser des PPP")).getId();
var UI_BOTON_GASTAR_CM = (new L("Gastar CM","Gastar CM","Spend MK","Dépenser du DI")).getId();
var UI_BOTON_GASTAR_NIVELES_VIA = (new L("Gastar niveles de vía","Gastar niveles de vía","Spend Magic Levels","Dépenser des niveaux de magie")).getId();
var UI_BOTON_GASTAR_ELAN = (new L("Gastar elan","Gastar elan","Spend Elan","Dépenser de l'Élan")).getId();
var UI_BOTON_FINALIZAR_CREACION = (new L("Finalizar Creación","Finalizar Creación","End Creation","Terminer la Création")).getId();
var UI_BOTON_SUBIR_NIEVL = (new L("Subir nivel","Subir nivel","Level Up","Monter de niveau")).getId();
var UI_BOTON_GUARDAR = (new L("Guardar personaje","Guardar personaje","Save Character","Sauvegarder le personnage")).getId();
var UI_BOTON_CARGAR = (new L("Cargar personaje","Cargar personaje","Load Character","Charger un personnage")).getId();
var UI_BOTON_COMPRAR_EQUIPO = (new L("Comprar equipo","Comprar equipo","Buy Equipment","Acheter de l'équipement")).getId();
var UI_BOTON_LICENCIA = (new L("Agradecimientos y licencia de software","Agradecimientos y licencia de software","Thanks and software licence","Remerciements et licence du logiciel")).getId();
var UI_BOTON_SOPORTE = (new L("Informa de errores","Informa de errores","Report an error","Signaler une erreur")).getId();
var UI_BOTON_COMENTARIOS = (new L("Comentarios, sugerencias ...","Comentarios, sugerencias ...","Comments, sugestions ...","Commentaires, suggestions...")).getId();
var UI_BOTON_DONACION = (new L("donacion","Si te gusta lo que hago y quieres apoyarme para que haga más, ¡adelante!","If you like what I do, and you want to help do more, go on!","Si vous aimez ce que je fais et voulez m'aider à en faire plus, alors allez-y !")).getId();
var UI_PERSONALES = (new L("Datos Personales","Datos Personales","Personal Info","Informations Personnelles")).getId();
var UI_RESISTENCIAS = (new L("Resistencias","Resistencias","Resistances","Résistances")).getId();
var UI_VENTAJAS = (new L("Ventajas","Ventajas","Advantages","Avantages")).getId();
var UI_DESVENTAJAS = (new L("Desventajas","Desventajas","Disadvantages","Désavantages")).getId();
var UI_CARACTERISTICAS = (new L("Características","Características","Attributes","Caractéristiques")).getId();
var UI_CARACTERISTICA = (new L("Característica","Característica","Attribute","Caractéristique")).getId();
var UI_VALOR = (new L("Valor","Valor","Value","Valeur")).getId();
var UI_BONO = (new L("Bono","Bono","Bonus","Modificateur")).getId();
var UI_BONOS = (new L("Bonos","Bonos","Bonuses","Modificateurs")).getId();
var UI_COMBATE = (new L("UI Habilidades de Combate","Habilidades de Combate","Combat Abilities","Compétences Martiales")).getId();
var UI_DOMINIOS_KI = (new L("UI Dominios del Ki","Dominios del Ki","Ki","Domaine du Ki")).getId();
var UI_SOBRENATURALES = (new L("UI Magia","Magia","Magic","Magie")).getId();
var UI_CONVOCATORIA = (new L("Convocatoria","Convocatoria","Summoning","Convoquation")).getId();
var UI_INVOCACIONES = (new L("UI_INVOCACIONES","Invocaciones","Invocations","Invoquations")).getId();
var UI_PSIQUICA = (new L("UI Poderes Psíquicos","Poderes Psíquicos","Psychic Powers","Pouvoirs Psychiques")).getId();
var UI_SECUNDARIAS = (new L("UI Habilidades Secundarias","Habilidades Secundarias","Secondary Abilities","Compétences Secondaires")).getId();

var UI_VACIO = (new L("","","","")).getId();

var ERROR_ARTE_MARCIAL_ELIMINADA_ATAQUE_BAJO = (new L("Aviso: Arte marcial eliminada por no tener suficiente ataque/defensa","Aviso: Arte marcial eliminada por no tener suficiente ataque/defensa","Warning: Martial art dropped because of insuficiente attack/defense","Attention : Art Martial supprimé pour cause d'attaque/défense insuffisante")).getId();
var ERROR_ARTE_MARCIAL_ELIMINADA_REQUISITOS = (new L("Aviso: Arte marcial eliminada por no cumplir requisitos","Aviso: Arte marcial eliminada por no cumplir requisitos","Warning: Martial art dropped for not meeting its requisites","Attention : Art Martial supprimé pour cause de prérequis non respectés")).getId();
var ERR_ARTE_MARCIAL_ERRONEA = (new L("Error: Nombre de arte marcial erróneo","Error: Nombre de arte marcial erróneo","Error: Unknown martial art name","Erreur : Nom d'art martial erroné")).getId();
var ERROR_ARS_MAGNUS_ELIMINADO_REQUISITOS = (new L("ERROR_ARS_MAGNUS_ELIMINADO_REQUISITOS","Aviso: Ars Magnus eliminado por no cumplir requisitos","Warning: Ars Magnus dropped for not meeting its requisites","Attention : Ars Magnus supprimé pour cause de prérequis non respectés")).getId();
var ERR_PODER_SIN_DIFICULTAD_MINIMA = (new L("Poder sin dificultad mínima","Poder sin dificultad mínima","Psychic power without minimum difficulty","Pouvoir Psychique sans difficulté minimale")).getId();
var UI_BERYL = (new L("Beryl","Beryl","Beryl","Béryl")).getId();
var UI_SHAJAD = (new L("Shajad","Shajad","Shajad","Shajad")).getId();
var ARMADURA_LOC_CAMISOLA = (new L("Camisola","Camisola","Half","Chemise")).getId();
var ARMADURA_LOC_COMPLETA = (new L("Completa","Completa","Full","Complète")).getId();
var ARMADURA_LOC_PETO = (new L("Peto","Peto","Chest","Plastron")).getId();
var ARMADURA_CLASE_BLANDA = (new L("Blanda","Blanda","Soft","Souple")).getId();
var ARMADURA_CLASE_DURA = (new L("Dura","Dura","Hard","Rigide")).getId();
var TAM_ARMA_P = (new L("TAM_Pequeño","Pequeño","Small","Petite")).getId();
var TAM_ARMA_P3 = (new L("TAM_P","P","S","P")).getId();
var TAM_ARMA_M = (new L("TAM_Medio","Medio","Medium","Moyenne")).getId();
var TAM_ARMA_M3 = (new L("TAM_M","M","M","M")).getId();
var TAM_ARMA_G = (new L("TAM_Grande","Grande","Big","Grande")).getId();
var TAM_ARMA_G3 = (new L("TAM_G","G","B","G")).getId();
var TAM_ARMA_E = (new L("TAM_Enorme","Enorme","Enormous","Énorme")).getId();
var TAM_ARMA_E3 = (new L("TAM_E","E","E","E")).getId();
var TAM_ARMA_GG = (new L("TAM_Gigante","Gigante","Gigantic","Géante")).getId();
var TAM_ARMA_GG3 = (new L("TAM_GG","GG","GG","GG")).getId();
var CAT_ARMA_ARMA_CORTA = (new L("Arma Corta","Arma Corta","Short weapon","Arme courte")).getId();
var CAT_ARMA_HACHA = (new L("Hacha","Hacha","Axe","Hache")).getId();
var CAT_ARMA_MAZA = (new L("Maza","Maza","Mace","Masse")).getId();
var CAT_ARMA_ESPADA = (new L("Espada","Espada","Sword","Épée")).getId();
var CAT_ARMA_MANDOBLE = (new L("Mandoble","Mandoble","Large sword","Deux mains")).getId();
var CAT_ARMA_ASTA = (new L("Asta","Asta","Pole weapon","Hast")).getId();
var CAT_ARMA_CUERDA = (new L("Cuerda","Cuerda","String weapon","Corde")).getId();
var CAT_ARMA_ESCUDO = (new L("Escudo","Escudo","Shield","Bouclier")).getId();
var CAT_ARMA_SIN_ARMAS = (new L("Sin Armas","Sin Armas","Unarmed","Mains nues")).getId();
var CAT_ARMA_PROYECTILES = (new L("Arma de Proyectiles","Arma de Proyectiles","Projectile weapon","Tir")).getId();
var CAT_ARMA_MUNICION = (new L("Munición","Munición","Ammunition","Munition")).getId();
var CAT_ARMA_LANZAMIENTO = (new L("Arma Arrojadiza","Arma Arrojadiza","Thrown weapon","Lancer")).getId();
var REGLA_ARMA_PRECISA = (new L("Precisa","Precisa","Precise","Précise")).getId();
var REGLA_ARMA_PRECISA_EXP = (new L("Este tipo de armas permite al personaje disminuir a la mitad los penalizadores de los golpes apuntados, y los de la maniobra de Engatillar. Sólo se aplica en ataques cuerpo a cuerpo, no con proyectiles lanzados.","Este tipo de armas permite al personaje disminuir a la mitad los penalizadores de los golpes apuntados, y los de la maniobra de Engatillar. Sólo se aplica en ataques cuerpo a cuerpo, no con proyectiles lanzados.","Este tipo de armas permite al personaje disminuir a la mitad los penalizadores de los golpes apuntados, y los de la maniobra de Engatillar. Sólo se aplica en ataques cuerpo a cuerpo, no con proyectiles lanzados.","Ce type d'armes permet au personnage de dininuer de moitié les malus des coups visés et ceux de la manoeuvre Tenir en Joue. Cela ne s'applique qu'aux attaques de corps à corps, pas avec les projectiles lancés.")).getId();
var REGLA_ARMA_DOS_MANOS = (new L("Arma a dos manos","Arma a dos manos","Two-handed weapon","Deux mains")).getId();
var REGLA_ARMA_DOS_MANOS_EXP = (new L("Son las que se usan necesariamente con ambas manos. Las de este tipo permiten al personaje doblar el bono de Fuerza para calcular su daño final.","Son las que se usan necesariamente con ambas manos. Las de este tipo permiten al personaje doblar el bono de Fuerza para calcular su daño final.","Son las que se usan necesariamente con ambas manos. Las de este tipo permiten al personaje doblar el bono de Fuerza para calcular su daño final.","Ce sont des armes qui requièrent forcément l'utilisation des deux mains. Elles permettent au personnage de doubler son modificateur de Force pour calculer les dégâts")).getId();
var REGLA_ARMA_UNA_O_DOS_MANOS = (new L("Arma a una o dos manos","Arma a una o dos manos","One or two handed weapon","Une ou deux mains")).getId();
var REGLA_ARMA_UNA_O_DOS_MANOS_EXP = (new L("Pueden utilizarse indistintamente con una o ambas manos. Si se usan con las dos, también permiten doblar el bono de Fuerza para calcular su daño final. En ellas aparecen indicados dos números en la fuerza requerida","el primero es el necesario para usarla con dos manos, y el segundo con sólo una.","Pueden utilizarse indistintamente con una o ambas manos. Si se usan con las dos, también permiten doblar el bono de Fuerza para calcular su daño final. En ellas aparecen indicados dos números en la fuerza requerida","Ces armes peuvent être utilisée à une ou deux mains. Á deux mains, on double le modificateur de force. Il y a deux valeurs de force R. pour une ou deux mains.")).getId();
var REGLA_ARMA_COMPLEJA = (new L("Compleja","Compleja","Complex","Complexe")).getId();
var REGLA_ARMA_COMPLEJA_EXP = (new L("Esta clase de armas es excepcionalmente difícil de utilizar. Por ello, un personaje aumenta dos puntos su índice de Pifia, fracasando con un resultado de 5 en un D100. Si alcanza la maestría con ella, desaparece completamente este penalizador.","Esta clase de armas es excepcionalmente difícil de utilizar. Por ello, un personaje aumenta dos puntos su índice de Pifia, fracasando con un resultado de 5 en un D100. Si alcanza la maestría con ella, desaparece completamente este penalizador.","Esta clase de armas es excepcionalmente difícil de utilizar. Por ello, un personaje aumenta dos puntos su índice de Pifia, fracasando con un resultado de 5 en un D100. Si alcanza la maestría con ella, desaparece completamente este penalizador.","Ce type d'armes s'avère d'un maniement extrêmement difficile. Par conséquent, le personnage augmente de 2 son risque de Maladresse : il échoue à 5 ou moins sur le D100. Si le personnage atteint la maîtrise d'une telle arme, ce malus disparaît complètement.")).getId();
var REGLA_ARMA_LANZABLE = (new L("Lanzable","Lanzable","Throwable","Lançable")).getId();
var REGLA_ARMA_LANZABLE_EXP = (new L("Todas las armas con esta regla especial están equilibradas o pensadas para ser usadas a distancia. Los personajes que tengan habilidad con ellas podrán emplearlas tanto físicamente como arrojándolas, sin la necesidad de adquirir la Tabla de armas de lanzamiento.","Todas las armas con esta regla especial están equilibradas o pensadas para ser usadas a distancia. Los personajes que tengan habilidad con ellas podrán emplearlas tanto físicamente como arrojándolas, sin la necesidad de adquirir la Tabla de armas de lanzamiento.","Todas las armas con esta regla especial están equilibradas o pensadas para ser usadas a distancia. Los personajes que tengan habilidad con ellas podrán emplearlas tanto físicamente como arrojándolas, sin la necesidad de adquirir la Tabla de armas de lanzamiento.","Toutes les armes avec cette règle spéciale sont équilibrées ou conçues pour être utilisées à distance. Les personnages qui savent les manier peuvent les employer au contact ou à distance, sans avoir à acheter le module d'armes de lancer,")).getId();
var REGLA_ARMA_PRESA = (new L("Presa","Presa","Snare","Immobilisation")).getId();
var REGLA_ARMA_PRESA_EXP = (new L("Son aquellas que permiten, a quienes las empleen, utilizar maniobras específicas de Presa para atrapar al oponente. Al contrario de lo que ocurre con las manos desnudas, al presar con ellas, un personaje no puede elegir usar sus propias características, sino que deberá utilizar la Fuerza natural del arma. Dicha característica representa su capacidad innata para trabar a sus adversarios. Naturalmente, se siguen utilizando los bonificadores a los controles enfrentados que se apliquen por la diferencia entre las habilidades de los contendientes. En el caso de las armas de calidad, cada bono natural de +5 añade un +1 a su Fuerza para presar.","Son aquellas que permiten, a quienes las empleen, utilizar maniobras específicas de Presa para atrapar al oponente. Al contrario de lo que ocurre con las manos desnudas, al presar con ellas, un personaje no puede elegir usar sus propias características, sino que deberá utilizar la Fuerza natural del arma. Dicha característica representa su capacidad innata para trabar a sus adversarios. Naturalmente, se siguen utilizando los bonificadores a los controles enfrentados que se apliquen por la diferencia entre las habilidades de los contendientes. En el caso de las armas de calidad, cada bono natural de +5 añade un +1 a su Fuerza para presar.","Son aquellas que permiten, a quienes las empleen, utilizar maniobras específicas de Presa para atrapar al oponente. Al contrario de lo que ocurre con las manos desnudas, al presar con ellas, un personaje no puede elegir usar sus propias características, sino que deberá utilizar la Fuerza natural del arma. Dicha característica representa su capacidad innata para trabar a sus adversarios. Naturalmente, se siguen utilizando los bonificadores a los controles enfrentados que se apliquen por la diferencia entre las habilidades de los contendientes. En el caso de las armas de calidad, cada bono natural de +5 añade un +1 a su Fuerza para presar.","Ces armes permettent à leur utilisateur d'utiliser des manoeuvres spéciales d'Immobilisation pour attraper leur adversaire. Contrairement au combat à mains nues, quand un personnage effectue une Immobilisation avec une de ses armes, il n'utilise pas ses propres caractéristiques, mais la Force naturelle de ces armes. Cette caractéristique représente leur capacité innée à retenir les adversaires. Naturellement, les bonus aux tests opposées liés à la différence entre les caractéristiques des adversaires s'appliquent aussi dans cette situation. Dans le cas des armes de qualité, chaque bonus naturel de +5 rajoute +1 à la Force d'Immobilisation.")).getId();
var REGLA_ARMA_TRABA_EL_ARMA = (new L("Traba el arma","Traba el arma","Weapon catcher","Piège-arme")).getId();
var REGLA_ARMA_TRABA_EL_ARMA_EXP = (new L("Artefactos que, por su diseño y características, disponen de la oportunidad de trabar o desarmar al oponente. Si realizando una parada con una de estas armas se consigue un contraataque, el personaje podrá realizar un ataque para Desarmar al adversario sin ningún tipo de penalizador.","Artefactos que, por su diseño y características, disponen de la oportunidad de trabar o desarmar al oponente. Si realizando una parada con una de estas armas se consigue un contraataque, el personaje podrá realizar un ataque para Desarmar al adversario sin ningún tipo de penalizador.","Artefactos que, por su diseño y características, disponen de la oportunidad de trabar o desarmar al oponente. Si realizando una parada con una de estas armas se consigue un contraataque, el personaje podrá realizar un ataque para Desarmar al adversario sin ningún tipo de penalizador.","Ces armes, par leur forme et leurs caractéristiques, ont la capacité de piéger l'arme de l'adversaire ou de le désarmer. Si une parade réalisée avec une de ces armes obtient une contre-attaque, le personnage peut utiliser une attaque pour Désarmer son adversaire sans aucun malus.")).getId();
var AVISO_RECUPERADOS_PD_HABILIDAD = (new L("PD recuperados para ajustar valor de habilidad","PD recuperados para ajustar valor de habilidad","free DP back after adjusting ability value","PF Récupérés après avoir ajuster la valeur de la compétence.")).getId();
var UDS_PD = (new L("uds PD","PD","DP","PF")).getId();
var UDS_PC = (new L("uds PC","PC","CP","PC")).getId();
var UDS_PORCENT = (new L("uds %","0","0","0")).getId();
var UDS_CV = (new L("uds CV","CV","PP","PPP")).getId();
var UDS_CM = (new L("uds CM","CM","MK","DI")).getId();
var UDS_ELAN = (new L("uds elan","elan","elan","élan")).getId();
var UDS_NIVELES_VIA = (new L("uds niveles de magia","niveles de magia","magic levels","niveaux de magie")).getId();
var FUE = (new L("Fuerza","Fuerza","Strength","Force")).getId();
var DES = (new L("Destreza","Destreza","Dextery","Dextérité")).getId();
var AGI = (new L("Agilidad","Agilidad","Agility","Agilité")).getId();
var CON = (new L("Constitución","Constitución","Constitution","Constitution")).getId();
var INT = (new L("Inteligencia","Inteligencia","Intelligence","Intelligence")).getId();
var POD = (new L("Poder","Poder","Power","Pouvoir")).getId();
var VOL = (new L("Voluntad","Voluntad","Willpower","Volonté")).getId();
var PER = (new L("Percepción","Percepción","Perception","Perception")).getId();
var FUE3 = (new L("FUE","FUE","STR","FOR")).getId();
var DES3 = (new L("DES","DES","DEX","DEX")).getId();
var AGI3 = (new L("AGI","AGI","AGI","AGI")).getId();
var CON3 = (new L("CON","CON","CON","CON")).getId();
var INT3 = (new L("INT","INT","INT","INT")).getId();
var POD3 = (new L("POD","POD","POW","POU")).getId();
var VOL3 = (new L("VOL","VOL","WP","VOL")).getId();
var PER3 = (new L("PER","PER","PER","PER")).getId();
var ERR_CARACTERISTICA_ERRONEA = (new L("Error: Nombre de característica erróneo","Error: Nombre de característica erróneo","Error: Wrong attribute name","Erreur: Nom de caractéristique erroné")).getId();
var ERR_VALOR_CARACTERISTICA_ERRONEO = (new L("Error: Valor de característica fuera de rango","Error: Valor de característica fuera de rango","Error: Attribute value out of bounds","Erreur: Valeur de la caractéristique hors limite")).getId();
var ERR_CATEGORIA_ERRONEA = (new L("Error: Nombre de categoría erróneo","Error: Nombre de categoría erróneo","Error: Wrong class name","Erreur: Nom de classe erroné")).getId();
var NOM_ARQ_LUCHADOR = (new L("Luchador","Luchador","Fighter","Combattant")).getId();
var NOM_ARQ_MISTICO = (new L("Místico","Místico","Mystic","Mystique")).getId();
var NOM_ARQ_PSIQUICO = (new L("Psíquico","Psíquico","Psychic","Psy")).getId();
var NOM_ARQ_ACECHADOR = (new L("Acechador","Acechador","Prowler","Furtif")).getId();
var NOM_ARQ_DOMINE = (new L("Domine","Domine","Domine","Artiste Martial")).getId();
var NOM_ARQ_SIN_CATEGORIA = (new L("Sin Categoría","Sin Categoría","Novel","Sans Classe")).getId();
var ORIGEN_MULTIPLO_VIDA = (new L("orig Múltiplos de vida","Múltiplos de vida","LP Multiples","Multiplicateurs de vie")).getId();
var ERR_HABILIDAD_ERRONEA = (new L("Error: Nombre de habilidad erróneo","Error: Nombre de habilidad erróneo","Error: wrong ability name","Erreur: Nom de compétence erroné")).getId();
var ERR_TIPO_HABILIDAD_ERRONEO = (new L("Error: Nombre de tipo de habilidad erróneo","Error: Nombre de tipo de habilidad erróneo","Error: wrong ability group name","Erreur: Nom de champ de compétences erroné")).getId();
var SEXO_HOMBRE = (new L("Hombre","Hombre","Male","Homme")).getId();
var SEXO_MUJER = (new L("Mujer","Mujer","Female","Femme")).getId();
var DIF_RUT = (new L("Rutinario","Rutinario","Rutinario","Routinière")).getId();
var DIF_RUT3 = (new L("RUT","RUT","RUT","ROUT")).getId();
var DIF_FAC = (new L("Fácil","Fácil","Easy","Facile")).getId();
var DIF_FAC3 = (new L("FAC","FAC","EAS","FAC")).getId();
var DIF_MED = (new L("Media","Media","Medium","Moyenne")).getId();
var DIF_MED3 = (new L("MED","MED","MED","MOY")).getId();
var DIF_DIF = (new L("Difícil","Difícil","Hard","Difficile")).getId();
var DIF_DIF3 = (new L("DIF","DIF","HRD","DIF")).getId();
var DIF_MDF = (new L("Muy Difícil","Muy Difícil","Very Hard","Très difficile")).getId();
var DIF_MDF3 = (new L("MDF","MDF","VHR","TDIF")).getId();
var DIF_ABS = (new L("Absurdo","Absurdo","Absurd","Absurde")).getId();
var DIF_ABS3 = (new L("ABS","ABS","ABS","ABS")).getId();
var DIF_CIM = (new L("Casi Imposible","Casi Imposible","Almost Impossible","Quasiment impossible")).getId();
var DIF_CIM3 = (new L("CIM","CIM","AIM","QIMP")).getId();
var DIF_IMP = (new L("Imposible","Imposible","Impossible","Impossible")).getId();
var DIF_IMP3 = (new L("IMP","IMP","IMP","IMP")).getId();
var DIF_INH = (new L("Inhumano","Inhumano","Inhuman","Surhumain")).getId();
var DIF_INH3 = (new L("INH","INH","INH","SURH")).getId();
var DIF_ZEN = (new L("Zen","Zen","Zen","Zen")).getId();
var DIF_ZEN3 = (new L("ZEN","ZEN","ZEN","ZEN")).getId();
var ERR_DIFICULTAD_DESCONOCIDA = (new L("Error: dificultad desconocida","Error: dificultad desconocida","Error: Unknown Difficulty","Erreur: Difficulté inconnue")).getId();
var UI_ESP_PERROS = (new L("Perros","Perros","Dogs","Chiens")).getId();
var UI_ESP_LOBOS = (new L("Lobos","Lobos","Wolves","Loups")).getId();
var UI_ESP_LOROS = (new L("Loros","Loros","Parrots","Perroquets")).getId();
var UI_ESP_ELEFANTES = (new L("Elefantes","Elefantes","Elephants","Éléphant")).getId();
var UI_ESP_CABALLOS = (new L("Caballos","Caballos","Horses","Chevaux")).getId();
var UI_ESP_MATEMATICAS = (new L("Matemáticas","Matemáticas","Mathematics","Mathématiques")).getId();
var UI_ESP_MECANICA = (new L("Mecánica","Mecánica","Mechanic","Mécanique")).getId();
var UI_ESP_ASTRONOMIA = (new L("Astronomía","Astronomía","Astronomy","Astronomie")).getId();
var UI_ESP_ANATOMIA = (new L("UI_ESP_ANATOMIA","Anatomía","Anatomy","Anatomie")).getId();
var UI_ESP_FILOSOFIA = (new L("Filosofía","Filosofía","Philosophy","Philosophie")).getId();
var UI_ESP_ABEL = (new L("Abel","Abel","Abel","Abel")).getId();
var UI_ESP_GUERRAS_CRUZ = (new L("Guerras de la Cruz","Guerras de la Cruz","Wars of the Cross","Les guerres de la Croix")).getId();
var UI_ESP_IMPERIO_ABEL = (new L("Imperio de Abel","Imperio de Abel","Abel Empire","L'empire d'Abel")).getId();
var UI_ESP_FABULAS = (new L("Fábulas","Fábulas","Fables","Fables")).getId();
var UI_ESP_ECONOMIA = (new L("Economía","Economía","Economics","Économie")).getId();
var UI_ESP_PINTURA = (new L("Pintura","Pintura","Painting","Peinture")).getId();
var UI_ESP_ESCULTURA = (new L("Escultura","Escultura","Sculpting","Sculpture")).getId();
var UI_ESP_BAILES_SALON = (new L("Baile de Salón","Baile de Salón","Formal Dancing","Danse de salon")).getId();
var UI_ESP_RELIGION = (new L("UI_ESP_RELIGION","Religion","Religion","Religion")).getId();
var UI_ESP_BAILES_ESPHERIA = (new L("Bailes de Espheria","Bailes de Espheria","Spheria Dances","Danses de Sphéria")).getId();
var UI_ESP_BAILES_ANTIGUOS = (new L("Bailes Antiguos","Bailes Antiguos","Old Dances","Vieilles danses")).getId();
var UI_ESP_ARMADURAS_PESADAS = (new L("Armaduras pesadas","Armaduras pesadas","Heavy Armor","Armures lourdes")).getId();
var UI_ESP_ESPADAS = (new L("Espadas","Espadas","Swords","Épées")).getId();
var UI_ESP_UTENSILIOS_COCINA = (new L("Utensilios de cocina","Utensilios de cocina","Kitchen utensils","Ustensiles de cuisine")).getId();
var UI_ESP_FLAUTA = (new L("Flauta","Flauta","Flute","Flûte")).getId();
var UI_ESP_CLAVICORDIO = (new L("Clavicordio","Clavicordio","Clavichord","Clavicorde")).getId();
var UI_ESP_ARPA = (new L("Arpa","Arpa","Harp","Harpe")).getId();
var UI_ESP_JUEGOS_CARTAS = (new L("Juegos de cartas","Juegos de cartas","Card games","Jeux de cartes")).getId();
var UI_ESP_MALABARES = (new L("Malabares","Malabares","Juggling","Jonglerie")).getId();
var UI_ESP_CRISTIANA = (new L("UI_ESP_CRISTIANA","Cristiana","Christian","Chrétien")).getId();
var UI_ESP_LOCAL = (new L("UI_ESP_LOCAL","Local","Local","Local")).getId();
var UI_ESP_MITOS_LOCALES = (new L("UI_ESP_MITOS_LOCALES","Mitos locales","Local myths","Mythes locaux")).getId();
var UI_JOYERIA = (new L("Joyería","Joyería","Jeweler","Joaillier")).getId();
var UI_PESCADO = (new L("Pescado","Pescado","Fish","Poisson")).getId();
var ATAQUE_FIL = (new L("ata FILo","FILo","CUTting","TRAnchant")).getId();
var ATAQUE_CON = (new L("ata CONtundente","CONtundente","IMPact","CONtondant")).getId();
var ATAQUE_PEN = (new L("ata PENetrante","PENetrante","THRusting","PERforantes")).getId();
var ATAQUE_CAL = (new L("ata CALor","CALor","HOT","CHAleur")).getId();
var ATAQUE_FRI = (new L("ata FRIo","FRIo","COLd","FROid")).getId();
var ATAQUE_ELE = (new L("ata ELEctricidad","ELEctricidad","ELEctricity","ÉLEctricité")).getId();
var ATAQUE_ENE = (new L("ata ENErgía","ENErgía","ENErgy","ÉNErgie")).getId();
var ATAQUE_FIL3 = (new L("ata FIL","FIL","CUT","TRA")).getId();
var ATAQUE_CON3 = (new L("ata CON","CON","IMP","CON")).getId();
var ATAQUE_PEN3 = (new L("ata PEN","PEN","THR","PER")).getId();
var ATAQUE_CAL3 = (new L("ata CAL","CAL","HOT","CHA")).getId();
var ATAQUE_FRI3 = (new L("ata FRI","FRI","COL","FRO")).getId();
var ATAQUE_ELE3 = (new L("ata ELE","ELE","ELE","ÉLE")).getId();
var ATAQUE_ENE3 = (new L("ata ENE","ENE","ENE","ÉNE")).getId();
var DISP_TOTAL = (new L("Disponibilidad normal","Disponibilidad normal","Normal availability","Disponibilité normale")).getId();
var DISP_B = (new L("Disponibilidad B","Disponibilidad B","Availability B","Disponibilité B")).getId();
var DISP_A = (new L("Disponibilidad A","Disponibilidad A","Availability A","Disponibilité A")).getId();
var NO_DISPONIBLE = (new L("No disponible","No disponible","Not available","Non disponible")).getId();
var ACCION_ACTIVA = (new L("Activa","Activa","Active","Active")).getId();
var ACCION_PASIVA = (new L("Pasiva","Pasiva","Passive","Passive")).getId();
var ALERT_ARTE_MARCIAL_ATAQUE_DEFENSA_BAJOS = (new L("Aviso Limite Artes Marciales","No puedes aprender más artes marciales. Mejora más tu ataque y defensa","You can't learn more martial arts. Raise your attack and defenses.","Vous ne pouvez apprendre plus d'arts martiaux. Augmentez votre attaque et votre défense")).getId();
var ELAN_SYNC_REQ = (new L("Sinc. Req.","Sinc. Req.","Synch. Req.","Synch. Req.")).getId();
var UI_COMPRAR_TECNICA_EXISTENTE = (new L("Comprar técnica de dominio existente","Comprar técnica de dominio existente","Buy pre-existent technique","Acheter une technique existente")).getId();
var UI_COMPRAR_HABILIDAD_KI = (new L("Comprar habilidad de ki","Comprar habilidad de ki","Buy Ki Ability","Acheter un pouvoir du Ki")).getId();
var UI_COMPRAR_LIMITE = (new L("UI_COMPRAR_LIMITE","Comprar Límite","Buy Limit","Acheter une Limite")).getId();
var UI_CREAR_TECNICA_DOMINIO = (new L("Crear técnica de dominio","Crear técnica de dominio","Design own ki technique","Créer une technique de Ki")).getId();
var UI_ACCESO_NUEVA_VIA = (new L("Acceso a nueva vía de magia","Acceso a nueva vía de magia","Access to new path","Accéder à une nouvelle voie")).getId();
var UI_COMPRAR_CONJURO_SUELTO = (new L("Comprar conjuro suelto","Comprar conjuro suelto","Cherry pick spell","Acheter un sort")).getId();
var UI_TOTAL = (new L("Total","Total","Total","Total")).getId();
var UI_LIBRES = (new L("Libres","Libres","Free","Libres")).getId();
var UI_LIBRE = (new L("Libre","Libre","Free","Libre")).getId();
var UI_ELEGIR_INVOCACION = (new L("UI_ELEGIR_INVOCACION","Añadir Invocación","Add Invocation","Ajouter une Invocation")).getId();
var DIAG_ELEGIR_CATEGORIA_TITULO = (new L("Seleccionar categoría","Seleccionar categoría","Choose class","Choisir une classe")).getId();
var UI_ARTES_MARCIALES_BASICAS = (new L("Artes Marciales Básicas","Artes Marciales Básicas","Basic Martial Arts","Arts Martiaux Basiques")).getId();
var UI_ARTES_MARCIALES_AVANZADAS = (new L("Artes Marciales Avanzadas","Artes Marciales Avanzadas","Advanced Martial Arts","Arts Martiaux Avancés")).getId();
var UI_BTN_TIPO = (new L("Tipo","Tipo","Type","Type")).getId();
var UI_REPARTO_CARACTERISTICAS = (new L("Asigna los valores","Asigna los valores","Assign the points","Assignez les valeurs")).getId();
var UI_NECESITAS_40_ATAQUE_DEFENSA = (new L("Necesitas 40 de ataque y defensa por cada arte marcial.","Necesitas 40 de ataque y defensa por cada arte marcial.","You need 40 in attack and defenses for each martial art","Vous avez besoin de 40 en attaque et défence par art martial")).getId();
var UI_ESPECIFICA = (new L("Especifica","Especifica","Specify","Spécifiez")).getId();
var UI_SINCRONIZACION = (new L("Sincronizacion","Sincronización","Synchronization","Syncronisation")).getId();
var UI_CONOCIMIENTO_MARCIAL = (new L("Conocimiento Marcial","Conocimiento Marcial","Martial Knowledge","Connaissance Martiale")).getId();
var UI_HABILIDADES_KI = (new L("Habilidades del Ki","Habilidades del Ki","Ki Abilities","Pouvoirs du Ki")).getId();
var UI_TECNICAS_KI = (new L("Técnicas de Dominio","Técnicas de Dominio","Ki Techniques","Techniques du Ki")).getId();
var UI_LIMITE = (new L("UI_LIMITE","Límite","Limit","Limite")).getId();
var UI_MINIMO = (new L("Minimo","Mínimo","Min.","Minimum")).getId();
var UI_MAXIMO = (new L("Maximo","Máximo","Max.","Maximum")).getId();
var UI_MIN = (new L("Min","Min.","Min.","Min.")).getId();
var UI_MAX = (new L("Max","Max.","Max.","Max.")).getId();
var UI_EFECTOS_DE_LA_TECNICA = (new L("Efectos de la técnica","Efectos de la técnica","Technique Effects","Effects de la technique")).getId();
var UI_EFECTO = (new L("Efecto","Efecto","Effect","Effet")).getId();
var UI_MANTENIMIENTO = (new L("Mantenimiento","Mantenimiento","Maintenance","Maintien")).getId();
var UI_BORRAR = (new L("Borrar","Borrar","Delete","Supprimer")).getId();
var UI_DESVENTAJA = (new L("Desventaja","Desventaja","Disadvantage","Désavantage")).getId();
var UI_DESVENTAJAS_DE_LA_TECNICA = (new L("Desventajas de la técnica","Desventajas de la técnica","Technique disadvantages","Désavantages de la technique")).getId();
var UI_CREAR = (new L("Crear","Crear","Create","Créer")).getId();
var UI_ON = (new L("ON","ON","ON","ON")).getId();
var UI_OFF = (new L("OFF","OFF","OFF","OFF")).getId();
var UI_NIVELES_VIA = (new L("Niveles de vía","Niveles de vía","Path levels","niveaux de magie")).getId();
var UI_VIAS = (new L("Vías de magia","Vías de magia","Magic Paths","Voies de magie")).getId();
var UI_CONJUROS = (new L("Conjuros sueltos","Conjuros sueltos","Cherry picked spells","Sorts choisits librements")).getId();
var UI_NIVELES_MAXIMOS_A_REPARTIR = (new L("Niveles máximos a repartir","Niveles máximos a repartir","Max levels to assign","Niveaux maximums à répartir")).getId();
var UI_NIVELES_LIBRES_A_REPARTIR = (new L("Niveles libres a repartir","Niveles libres a repartir","Free levels to assign","Niveaux libres à répartir")).getId();
var UI_NV = (new L("Nv","Nv","Lv","Nv")).getId();
var UI_NIVELES_VIA_GASTADOS = (new L("niveles gastados","niveles gastados","spent levels","Niveaux dépensés")).getId();
var UI_LIBRE_ACCESO = (new L("UI Libre acceso","Libre acceso","Free access","Accès libre")).getId();
var UI_DISCIPLINAS_DOMINADAS = (new L("Disciplinas dominadas","Disciplinas dominadas","Dominated Disciplines","Disciplines ouvertes")).getId();
var UI_CVS_POTENCIAL = (new L("CVs, Potencial Psíquico e Innatos","CVs, Potencial Psíquico e Innatos","PP, Psychic Potential and Innates","PPP, Talent Psychique et attaches")).getId();
var UI_CV_LIBRES = (new L("CV Libres","CV Libres","Free PP","PPP Libres")).getId();
var UI_INNATO = (new L("Innatos","Innatos","Innates","Attaches")).getId();
var UI_AFINIDAD_CON_NUEVA_DISCIPLINA = (new L("Afinidad con nueva disciplina","Afinidad con nueva disciplina","Affinity with new Discipline","Ouvrir une nouvelle discipline")).getId();
var UI_DOMINAR_NUEVO_PODER = (new L("Dominar un nuevo poder","Dominar un nuevo poder","Dominate new Power","Apprendre un nouveau pouvoir")).getId();
var UI_POTENCIAL = (new L("potencial","potencial","potential","talent")).getId();
var UI_CAMBIAR_CAT = (new L("Cambiar cat.","Cambiar cat.","Change class","Changer de classe")).getId();
var UI_BASE = (new L("base","base","base","base")).getId();
var UI_FINAL = (new L("final","final","final","final")).getId();
var UI_COMPRAR_VENTAJA = (new L("Comprar ventaja","Comprar ventaja","Buy Advantage","Acheter avantage")).getId();
var UI_COMPRAR_DESVENTAJA = (new L("Comprar desventaja","Comprar desventaja","Buy Disadvantage","Acheter désavantage")).getId();
var UI_COMPRAR_TECNICA_DE_KI = (new L("Comprar técnica del dominio","Comprar técnica del dominio","Buy Ki Technique","Acheter une technique de Ki")).getId();
var UI_ARMA_INICIAL = (new L("Arma inicial","Arma inicial","Initial weapon","Arme de départ")).getId();
var UI_OTRAS_ARMAS = (new L("Otras armas","Otras armas","Other weapons","Autres armes")).getId();
var UI_MAGIA_INNATA = (new L("Magia innata","Magia innata","Innate Magic","Magie innée")).getId();
var UI_AUMENTAR_NIVELES_EN_VIAS = (new L("Aumentar niveles en vías","Aumentar niveles en vías","Raise magic paths levels","Augmenter les niveaux de magie")).getId();
var UI_AFINIDAD_CON_DISCIPLINAS = (new L("Afinidad con disciplinas","Afinidad con disciplinas","Affinity with Disciplines","Affinitié avec les disciplines")).getId();
var UI_PODERES_DOMINADOS = (new L("Poderes dominados","Poderes dominados","Dominated powers","Pouvoirs contrôlés")).getId();
var UI_COMPRAR_TABLA_ARMAS = (new L("Comprar tabla de armas","Comprar tabla de armas","Buy Weapon/Style Modules","Acheter un module d'armes")).getId();
var UI_MO = (new L("dinero mo","mo","gp","po")).getId();
var UI_MP = (new L("dinero mp","mp","sp","Passive")).getId();
var UI_MC = (new L("dinero mc","mc","cp","pc")).getId();
var UI_ESPECIFICAR = (new L("Especificar","Especificar","Specify","Spécifier")).getId();
var UI_CAMBIAR_ESPECIALIZACION = (new L("UI_CAMBIAR_ESPECIALIZACION","Sí/no","Yes/no","Oui/non")).getId();
var UI_PREGUNTA_PUNTOS_METODO_5 = (new L("¿Cuántos puntos quieres repartir?","¿Cuántos puntos quieres repartir?","How many points?","Combien de points ?")).getId();
var DIAG_METODO_CREACION_TITULO = (new L("Seleccionar método de creación","Seleccionar método de creación","Select creation method","Choisir une méthode de création")).getId();
var DIAG_ELEGIR_RAZA_TITULO = (new L("Seleccionar raza","Seleccionar raza","Select race","Choisir une race")).getId();
var DIAG_COMPRAR_VENTAJAS_TITULO = (new L("Comprar ventajas","Comprar ventajas","Buy Advantages","Acheter des avantages")).getId();
var DIAG_ELEGIR_DESVENTAJAS_TITULO = (new L("Elegir desventajas","Elegir desventajas","Choose Disadvantages","Choisir des Désavantages")).getId();
var DIAG_ELEGIR_BONOS_NATURALES_TITULO = (new L("Elegir bonos naturales","Elegir bonos naturales","Choose natural bonuses","Choisir les bonus naturels")).getId();
var DIAG_ELEGIR_OPCIONES_TITULO = (new L("Elegir opciones","Elegir opciones","Choose options","Choisir des options")).getId();
var DIAG_PODERES_PSIQUICOS = (new L("Poderes Psíquicos","Poderes Psíquicos","Psychic Powers","Pouvoirs Psychiques")).getId();
var DIAG_PODERES_KI = (new L("Dominios del Ki","Dominios del Ki","Ki","Ki")).getId();
var DIAG_PODERES_MAGIA = (new L("Magia","Magia","Magic","Magie")).getId();
var DIAG_CREACION_TECNICA = (new L("Crear Técnica de Dominio","Crear Técnica de Dominio","Create Ki Technique","Créer une Technique de Ki")).getId();
var DIAG_REASIGNA_COSTE_KI = (new L("Reparte coste de ki","Reparte coste de ki","Distribute ki cost","Répartir le coût en Ki")).getId();
var DIAG_COMPRA_EQUIPO = (new L("Compra equipo","Compra equipo","Buy Equipment","Acheter de l'équipement")).getId();
var EXPLI_METODO_0 = (new L("EXPLI_METODO_0","Reparto libre de los valores que desees a cada característica.","Free distribution of points between attributes.","Répartition libre des points entre les caractéristiques")).getId();
var EXPLI_METODO_1 = (new L("EXPLI_METODO_1","El método tradicional y más recomendado para generar las tiradas es el de lanzar un D10 ocho veces y apuntar las características en una hoja de papel. Ignora cualquier resultado de 1, 2 ó 3 que saques y repítelo, lo que permitirá a tu personaje no tener en ningún momento puntuaciones demasiado bajas. Una vez que tengas las ocho, sustituye la menor por un 9 para asegurar así que, incluso en el improbable caso de que no tengas ninguna cifra elevada, el personaje será excepcional en al menos un campo. A continuación reparte las cifras como prefieras, definiendo exactamente lo que quieres. Este sistema de generación proporciona unas cifras por media elevadas, pero es natural teniendo en cuenta que los personajes suelen ser individuos excepcionales.","Traditional method. Throw a D10 eight times. Ignore die lesser than four and repeat them. Then change a value for a 9. Then distribute the values.","La méthode traditionnelle et recommandée pour déterminer les caractéristiques consiste à lancer huit fois un D10 et à noter les chiffres obtenus sur une feuille de papier. Ignorez tous les résultats inférieurs à 4 et relancer-les, pour que le personnage n'ait jamais de caractéristiques trop basses. Une fois les huit valeurs obtenues, changez la plus faible par un 9 pour s'assurer que, même si le joueur n'a obtenu aucun chiffre élevé, son personnage soit exceptionnel au moins dans un domain. Ensuite, répartissez les valeurs à votre convenance entre les huit caractéristiques. Cette méthode produit des valeurs assez élevées en moyenne, et prend en compte le fait que les personnages sont des êtres exceptionnels.")).getId();
var EXPLI_METODO_2 = (new L("EXPLI_METODO_2","Consiste en tirar dos D10 ocho veces, anotando sólo el resultado más alto de los dos obtenidos. Cuando se tengan las ocho cifras, el personaje las reparte libremente entre las características. Este método asegura una media alta, pero también permite obtener algunas cifras realmente bajas.","Throw two D10 eight times, keeping the higher value each time. Then distribute the values.","Cette méthode consiste à tirer deux D10 huit fois, en ne conservant que le résultat le plus élevé de chaque tirage. Une fois les huit chiffres obtenus, le joueur les répartit librement entre ses caractéristiques. Cette méthode assure une moyenne élevée, mais on court aussi le risque d'avoir quelques valeurs très basses.")).getId();
var EXPLI_METODO_3 = (new L("EXPLI_METODO_3","Este método se utiliza en el caso de que los jugadores decidan interpretar personajes comunes, sin características demasiado excepcionales. Consiste en lanzar ocho veces un dado apuntando en orden las cifras obtenidas en las casillas de características. Cualquier tirada, por alta o baja que sea, deberá aceptarse.","Throw a D10 eight times, and assign the values in order to the abilities.","Cette méthode est utilisée quand les joueurs décident d'interpéter des personnages communs, sans caractéristiques vraiment exceptionnelles. Elle consiste à lancer huit fois un D10 en attribuant les chiffres obtenus aux caractéristiques, quelles que soient leurs valeurs. Ces jets devront être acceptés aussi faibles qu'ils soient.")).getId();
var EXPLI_METODO_4 = (new L("EXPLI_METODO_4","Este método consiste en tirar siete veces un D10 y sumar todos los resultados obtenidos. La cifra resultante, un número entre siete y setenta, puede ser dividida libremente entre las características, pero sin que en ningún caso se pueda superar el diez.","Throw 7d10 and add up the results. Then share out the total between the abilities.","Cette méthode consiste à tirer huit fois un D10 et à faire la somme des chiffres obtenus. Le résultat, compris entre 8 et 80, peut être librement réparti entre toutes les caractéristiques, sans dépasser 10.")).getId();
var EXPLI_METODO_5 = (new L("EXPLI_METODO_5","Se reparten 55 puntos entre las características. Cualquier diez cuesta dos puntos en vez de uno. Pueden repartirse 45 puntos o 65, según el nivel de la partida.","Share out 45, 55 or 65 points between the abilities. THe point to reach 10 costs double.","Cette méthode consite à donner directement une quantité de 55 points à distribuer librement entre les différentes caractéristiques. Vous pouvez répartir les valeurs en toute liberté de trois à dix, mais tout dix que vous voudriez assigner coûte deux points au lieu d'un. Dans le cas des parties où les personnages incarnent des individus normaux, la valeur peut être réduite à 45 points, alors que pour celles où ils vont atteindre des niveaux légendaires, on peut aller jusqu'à 65.")).getId();
var ERR_PC_INSUFICIENTES = (new L("PC insuficientes","PC insuficientes","Not enough CP","PC insuffisants")).getId();
var ERR_METODO_DESCONOCIDO = (new L("Error: Metodo de generación desconocido","Error: Metodo de generación desconocido","Error: Wrong generation method name","Erreur: Méthode de génération inconnue")).getId();
var ERR_MAX_DESVENTAJAS = (new L("Límite de desventajas alcanzado","Límite de desventajas alcanzado","Max number of disadvantages reached.","Limite de désavantages atteinte")).getId();
var ERR_OVERFLOW_NIVEL = (new L("Límite de gasto del nivel previo alcanzando","Límite de gasto del nivel previo alcanzando","Previous level value reached","Limite de dépense du niveau précédent atteinte")).getId();
var CONFIRMACION_NUEVO_PERSONAJE = (new L("¿Seguro? Esto sustituirá al personaje actual","¿Seguro? Esto sustituirá al personaje actual","Are you sure? This will end the current character","ètes-vous sûr ? Ceci supprimera votre personnage")).getId();
var AVISO_CVS_INSUFICIENTES = (new L("CVs libres insuficientes","CVs libres insuficientes","Not enough PPs","PPP insuffisants")).getId();
var AVISO_MAX_PD_ATAQUE_SOLO = (new L("Max PDs en Ataque/Defensa alcanzados (Mitad del normal por no desarrollar defensa)","Max PDs en Ataque/Defensa alcanzados (Mitad del normal por no desarrollar defensa)","Max DPs in Attack/Defense reached (Half the usual for developing only one)","Max PFs en Attaque/Défense atteint (La moitié de la dépense normale pour n'en développer qu'un)")).getId();
var AVISO_ATAQUE_DEFENSA_MUY_SEPARADOS = (new L("Ataque y Defensa base no pueden separarse en más de 50.","Ataque y Defensa base no pueden separarse en más de 50.","Attack and Defense can nothave a difference greater than 50.","L'Attaque et la Défense ne peuvent avoir une différence suppérieure à 50.")).getId();
var AVISO_MAX_PD_ATAQUE_DEFENSA = (new L("Max PDs en Ataque/Defensa alcanzados","Max PDs en Ataque/Defensa alcanzados","Max DPs in Attack/Defense reached.","Max PFs en Attaque/Défense atteint")).getId();
var AVISO_MAX_PD_CM = (new L("AVISO_MAX_PD_CM","Max PDs en CM alcanzados","Max DPs in KM reached.","Max PFs en DI atteint.")).getId();
var AVISO_MAX_PD_PROYECCION_MAGICA = (new L("Max PDs en Proyección Mágica alcanzados (mitad del tope en sobrenaturales)","Max PDs en Proyección Mágica alcanzados (mitad del tope en sobrenaturales)","Max DPs in Magic Projection reached","Max PFs en Projection Magique atteint.")).getId();
var AVISO_MAX_PD_NIVEL_VIA = (new L("AVISO_MAX_PD_NIVEL_VIA","Max PDs en Nivel de Vía alcanzados","Max DPs in Path Level reached","Max PFs en niveaux de Magie atteint.")).getId();
var AVISO_CV_YA_GASTADOS = (new L("CVs ya gastados. Primero devuelvelos.","CVs ya gastados. Primero devuelvelos.","PPs already spent. First return them.","PPPs déjà dépensés, retournez les d'abord.")).getId();
var AVISO_MAX_PD_PROYECCION_PSIQUICA = (new L("Max PDs en Proyección Psíquica alcanzados (mitad del tope en sobrenaturales)","Max PDs en Proyección Psíquica alcanzados (mitad del tope en sobrenaturales)","Max DPs in Psychic Projection reached","Max PFs en Projection Psychique atteint.")).getId();
var AVISO_MAX_PD_GRUPO = (new L("Max PDs alcanzados en","Max PDs alcanzados en","Max DPs reached in","Max PFs atteint en")).getId();
var AVISO_PD_INSUFICIENTES = (new L("PDs insuficientes","PDs insuficientes","Not enough DPs","PFs insuffisants")).getId();
var AVISO_CM_INSUFICIENTES = (new L("CMs insuficientes","CM insuficiente","Not enough MK","DI Insuffisant")).getId();
var AVISO_NO_SE_PUEDE_AUMENTAR_MAS = (new L("No se puede aumentar más","No se puede aumentar más","Can't get higher","Impossible d'augmenter plus")).getId();
var AVISO_NO_SE_PUEDE_DISMINUIR_MAS = (new L("No se puede disminuir más","No se puede disminuir más","Can't get lower","Impossible de réduire plus")).getId();
var INFO_PESO_RECOMENDADO = (new L("Con tu tamaño, tu peso debería ser de","Con tu tamaño, tu peso debería ser de","With your Size, your weight should be","Avec votre taille, votre poids devrait être ")).getId();
var INFO_ALTURA_RECOMENDADA = (new L("Con tu tamaño, tu altura debería ser de","Con tu tamaño, tu altura debería ser de","With your Size, your height should be","Avec votre taille, votre hauteur devrait être ")).getId();
var INFO_NUEVOS_PX = (new L("Introduce la nueva cantidad de PX","Introduce la nueva cantidad de PX","Input the new XP value","Introduire la nouvelle quantité de PX")).getId();
var INFO_EJEMPLOS_ESPECIALIDADES = (new L("Ejemplos de especialidades","Ejemplos de especialidades","Specialities examples","Éxemples de spécialités")).getId();
var ERR_NIVEL_ERRONEO = (new L("Error: nivel erróneo","Error: nivel erróneo","Error: wrong level","Erreur: niveau erroné")).getId();
var ERR_ELAN_ERRONEO = (new L("Error: Elan no conocido","Error: Elan no conocido","Error: Unknown Elan","Erreur: Élan inconnu")).getId();
var EQUIPO_TIPO_ARMAS = (new L("Armas","Armas","Weapons","Armes")).getId();
var EQUIPO_TIPO_ARMADURAS = (new L("Armaduras","Armaduras","Armors","Armures")).getId();
var EQUIPO_TIPO_BARDAS = (new L("Bardas","Bardas","Barding","Bardes")).getId();
var EQUIPO_TIPO_YELMOS = (new L("Yelmos","Yelmos","Helms","Casques")).getId();
var EQUIPO_TIPO_VESTIMENTAS = (new L("Vestimentas","Vestimentas","Clothes","Habits")).getId();
var EQUIPO_TIPO_CALZADO = (new L("Calzado","Calzado","Shoes","Chaussures")).getId();
var EQUIPO_TIPO_ANIMALES = (new L("equ Animales","Animales","Animals","Animaux")).getId();
var EQUIPO_TIPO_TRANSPORTE = (new L("Transporte","Transporte","Transportations","Transports")).getId();
var EQUIPO_TIPO_EMBARCACIONES = (new L("Embarcaciones","Embarcaciones","Boats","Embarcations")).getId();
var EQUIPO_TIPO_RACIONES = (new L("Raciones","Raciones","Rations","Rations")).getId();
var EQUIPO_TIPO_VIVIENDAS = (new L("Viviendas","Viviendas","Houses","Habitations")).getId();
var EQUIPO_TIPO_DECORACIONES = (new L("Decoraciones","Decoraciones","Decorations","Décorations")).getId();
var EQUIPO_TIPO_ORFEBRERIA = (new L("Orfebrería","Orfebrería","Goldsmithing","Orfèvrerie")).getId();
var EQUIPO_TIPO_VENENOS = (new L("equ Venenos","Venenos","Poisons","Poisons")).getId();
var EQUIPO_TIPO_VARIOS = (new L("Varios","Varios","Others","Autres")).getId();
var ERR_ARMA_DESCONOCIDA = (new L("Error: Arma desconocida","Error: Arma desconocida","Error: Unknown weapon","Erreur: Arme inconnue")).getId();
var ERR_INDICE_TAM_DESCONOCIDO = (new L("Error: tamaño desconocido","Error: tamaño desconocido","Error: Unknown size","Erreur: Taille inconnue")).getId();
var ERR_EQUIPO_DESCONOCIDO = (new L("Error: Equipo desconocida","Error: Equipo desconocida","Error: Unknown equipment","Erreur: Équipement inconnu")).getId();
var ERR_ARS_MAGNUS_DESCONOCIDO = (new L("ERR_ARS_MAGNUS_DESCONOCIDO","Error: Ars Magnus desconocido","Error: Unknown Ars Magnus","Erreur: Ars Magnus inconnu")).getId();
var CALIDAD_VESTIMENTA_MEDIOCRE = (new L("CALIDAD_VESTIMENTA_MEDIOCRE","mediocre","mediocre","médiocre")).getId();
var CALIDAD_VESTIMENTA_BUENA = (new L("CALIDAD_VESTIMENTA_BUENA","buena","good","bonne")).getId();
var CALIDAD_VESTIMENTA_LUJOSA = (new L("CALIDAD_VESTIMENTA_LUJOSA","lujosa","luxurious","de luxe")).getId();
var CALIDAD_VIVIENDA_MEDIOCRE = (new L("CALIDAD_VIVIENDA_MEDIOCRE","mediocre","mediocre","médiocre")).getId();
var CALIDAD_VIVIENDA_BUENA = (new L("CALIDAD_VIVIENDA_BUENA","buena","good","bonne")).getId();
var CALIDAD_VIVIENDA_LUJOSA = (new L("CALIDAD_VIVIENDA_LUJOSA","lujosa","luxurious","luxueuse")).getId();
var CALIDAD_VIVIENDA_METROPOLITANA = (new L("CALIDAD_VIVIENDA_METROPOLITANA","metropolitana","metropolitan","zone urbaine")).getId();
var CALIDAD_VIVIENDA_METROPOLITANA_MEDIOCRE = (new L("CALIDAD_VIVIENDA_METROPOLITANA_MEDIOCRE","metropolitana mediocre","mediocre metropolitan","zone urbaine et médiocre")).getId();
var CALIDAD_VIVIENDA_METROPOLITANA_BUENA = (new L("CALIDAD_VIVIENDA_METROPOLITANA_BUENA","metropolitana buena","good metropolitan","zone urbaine et bonne")).getId();
var CALIDAD_VIVIENDA_METROPOLITANA_LUJOSA = (new L("CALIDAD_VIVIENDA_METROPOLITANA_LUJOSA","metropolitana lujosa","luxurious metropolitan","zone urbaine et de luxe")).getId();
var CALIDAD_ORFEBRERIA_MEDIOCRE = (new L("CALIDAD_ORFEBRERIA_MEDIOCRE","mediocre","mediocre","médiocre")).getId();
var CALIDAD_ORFEBRERIA_BUENA = (new L("CALIDAD_ORFEBRERIA_BUENA","buena","good","bonne")).getId();
var CALIDAD_ORFEBRERIA_EXCELENTE = (new L("CALIDAD_ORFEBRERIA_EXCELENTE","excelente","excellent","excellente")).getId();
var CALIDAD_ORFEBRERIA_LUJOSA = (new L("CALIDAD_ORFEBRERIA_LUJOSA","lujosa","luxurious","de luxe")).getId();
var TXT_CALIDAD = (new L("calidad","calidad","quality","qualité")).getId();
var TIPO_CAPACIDAD = (new L("Capacidad especial","Capacidad especial","Special ability","capacité spéciale")).getId();
var TIPO_HB_COMBATE = (new L("Habilidades de Combate","Habilidades de Combate","Combat Abilities","Compétences Martiales")).getId();
var HB_ATAQUE = (new L("Habilidad de Ataque","Habilidad de Ataque","Attack ability","Compétence d'Attaque")).getId();
var HB_PARADA = (new L("Habilidad de Parada","Habilidad de Parada","Block ability","Compétence de Parade")).getId();
var HB_ESQUIVA = (new L("Habilidad de Esquiva","Habilidad de Esquiva","Dodge ability","Compétence d'Esquive")).getId();
var HB_ARMADURA = (new L("Llevar Armadura","Llevar Armadura","Wear armor","Port d'Armure")).getId();
var HB_CM = (new L("HB_CM","CM","MK","DI")).getId();
var HB_KI = (new L("Ki","Ki","Ki","Ki")).getId();
var HB_KI_FUE = (new L("Ki Fuerza","Ki Fuerza","Strength Ki","Ki Force")).getId();
var HB_KI_DES = (new L("Ki Destreza","Ki Destreza","Dextery Ki","Ki Dextérité")).getId();
var HB_KI_AGI = (new L("Ki Agilidad","Ki Agilidad","Agility Ki","Ki Agilité")).getId();
var HB_KI_VOL = (new L("Ki Voluntad","Ki Voluntad","Willpower Ki","Ki Volonté")).getId();
var HB_KI_POD = (new L("Ki Poder","Ki Poder","Power Ki","Ki Pouvoir")).getId();
var HB_KI_CON = (new L("Ki Constitución","Ki Constitución","Constitution Ki","Ki Constitution")).getId();
var HB_ACUM_KI = (new L("Acumulación Ki","Acumulación Ki","Ki Accumulation","Accumulation de Ki")).getId();
var HB_ACUM_KI_FUE = (new L("Acumulación Ki Fuerza","Ac. de Ki Fuerza","Strength Ki Accum","Ac. de Ki Force")).getId();
var HB_ACUM_KI_DES = (new L("Acumulación Ki Destreza","Ac. de Ki Destreza","Dextery Ki Accum","Ac. de Ki Dextérité")).getId();
var HB_ACUM_KI_AGI = (new L("Acumulación Ki Agilidad","Ac. de Ki Agilidad","Agility Ki Accum","Ac. de Ki Agilité")).getId();
var HB_ACUM_KI_VOL = (new L("Acumulación Ki Voluntad","Ac. de Ki Voluntad","Willpower Ki Accum","Ac. de Ki Volonté")).getId();
var HB_ACUM_KI_POD = (new L("Acumulación Ki Poder","Ac. de Ki Poder","Power Ki Accum","Ac. de Ki Pouvoir")).getId();
var HB_ACUM_KI_CON = (new L("Acumulación Ki Constitución","Ac. de Ki Constitución","Constitution Ki Accum","Ac. de Ki constitution")).getId();
var TIPO_HB_SOBRENATURAL = (new L("Habilidades Sobrenaturales","Habilidades Sobrenaturales","Magic Abilities","Compétences Supernaturelles")).getId();
var HB_NIVEL_DE_VIA = (new L("HB_NIVEL_DE_VIA","Nivel de vía","Path levels","Niveau de voie")).getId();
var HB_ZEON = (new L("Zeon","Zeon","Zeon","Zéon")).getId();
var HB_ACT = (new L("ACT","ACT","MA","AMR")).getId();
var HB_REGENERACION_ZEONICA = (new L("HB_REGENERACION_ZEONICA","Regeneración Zeónica","Zeonic Regeneration","Régénation Zéonique")).getId();
var HB_PROYECCION_MAGICA = (new L("Proyección Mágica","Proyección Mágica","Magic Projection","Projection Magique")).getId();
var HB_CONVOCAR = (new L("Convocar","Convocar","Summon","Convoquer")).getId();
var HB_DOMINAR = (new L("Dominar","Dominar","Control","Dominer")).getId();
var HB_ATAR = (new L("Atar","Atar","Bind","Lier")).getId();
var HB_DESCONVOCAR = (new L("Desconvocar","Desconvocar","Banish","Révoquer")).getId();
var TIPO_HB_PSIQUICA = (new L("Habilidades Psíquicas","Habilidades Psíquicas","Psychic Abilities","Capacités Psychiques")).getId();
var HB_CV = (new L("CV","CV","PP","PPP")).getId();
var HB_PROYECCION_PSIQUICA = (new L("Proyección Psíquica","Proyección Psíquica","Psychic Projection","Projection Psychique")).getId();
var HB_POTENCIAL_PSIQUICO = (new L("Potencial Psíquico","Potencial Psíquico","Psychic Potential","Talent Psychique")).getId();
var HB_MULTIPLO_VIDA = (new L("Múltiplos de vida","Múltiplos de vida","Life Multiples","Multiplicateurs de vie")).getId();
var TIPO_HB_ATLETICAS = (new L("Atléticas","Atléticas","Athletics","Athlétiques")).getId();
var HB_ACROBACIAS = (new L("Acrobacias","Acrobacias","Acrobatics","Acrobatie")).getId();
var HB_ATLETISMO = (new L("Atletismo","Atletismo","Athleticism","Athlétisme")).getId();
var HB_MONTAR = (new L("Montar","Montar","Ride","Équitation")).getId();
var HB_NADAR = (new L("Nadar","Nadar","Swim","Natation")).getId();
var HB_SALTAR = (new L("Saltar","Saltar","Jump","Saut")).getId();
var HB_TREPAR = (new L("Trepar","Trepar","Climb","Escalade")).getId();
var TIPO_HB_SOCIALES = (new L("Sociales","Sociales","Social","Sociales")).getId();
var HB_ESTILO = (new L("Estilo","Estilo","Style","Style")).getId();
var HB_INTIMIDAR = (new L("Intimidar","Intimidar","Intimidate","Intimidation")).getId();
var HB_LIDERAZGO = (new L("Liderazgo","Liderazgo","Leadership","Commandement")).getId();
var HB_PERSUASION = (new L("Persuasión","Persuasión","Persuasion","Persuasion")).getId();
var HB_COMERCIAR = (new L("Comerciar","Comerciar","Comerce","Commerce")).getId();
var HB_CONOCIMIENTO_DE_LAS_CALLES = (new L("Conocimiento de las calles","Conocimiento de las calles","Streetwise","Connaissance de la rue")).getId();
var HB_ETIQUETA = (new L("Etiqueta","Etiqueta","Etiqueta","Étiquette")).getId();
var TIPO_HB_SUBTERFUGIO = (new L("Subterfugio","Subterfugio","Subterfuge","Clandestines")).getId();
var HB_CERRAJERIA = (new L("Cerrajería","Cerrajería","Lock Picking","Crochetage")).getId();
var HB_DISFRAZ = (new L("Disfraz","Disfraz","Disguise","Déguisement")).getId();
var HB_OCULTARSE = (new L("Ocultarse","Ocultarse","Hide","Discrétion")).getId();
var HB_ROBO = (new L("Robo","Robo","Theft","Larcin")).getId();
var HB_SIGILO = (new L("Sigilo","Sigilo","Stealth","Camouflage")).getId();
var HB_TRAMPERIA = (new L("Trampería","Trampería","Trap Lore","Pièges")).getId();
var HB_VENENOS = (new L("Venenos","Venenos","Poisons","Poison")).getId();
var TIPO_HB_PERCEPTIVAS = (new L("Perceptivas","Perceptivas","Perception","Sensorielles")).getId();
var HB_ADVERTIR = (new L("Advertir","Advertir","Notice","Vigilance")).getId();
var HB_BUSCAR = (new L("Buscar","Buscar","Search","Observation")).getId();
var HB_RASTREAR = (new L("Rastrear","Rastrear","Track","Pistage")).getId();
var TIPO_HB_INTELECTUALES = (new L("Intelectuales","Intelectuales","Intellectual","Intellectuelles")).getId();
var HB_ANIMALES = (new L("Animales","Animales","Animals","Animaux")).getId();
var HB_CIENCIA = (new L("Ciencia","Ciencia","Sciences","Science")).getId();
var HB_HERBOLARIA = (new L("Herbolaria","Herbolaria","Herbal Lore","Herboristerie")).getId();
var HB_HISTORIA = (new L("Historia","Historia","History","Histoire")).getId();
var HB_MEDICINA = (new L("Medicina","Medicina","Medicine","Médecine")).getId();
var HB_MEMORIZAR = (new L("Memorizar","Memorizar","Memorize","Mémorisation")).getId();
var HB_NAVEGACION = (new L("Navegación","Navegación","Navigation","Navigation")).getId();
var HB_OCULTISMO = (new L("Ocultismo","Ocultismo","Occult","Occultisme")).getId();
var HB_TASACION = (new L("Tasación","Tasación","Appraisal","Estimation")).getId();
var HB_VALORACION_MAGICA = (new L("Valoración mágica","Valoración mágica","Magic Appraisal","Évaluation Magique")).getId();
var HB_LEY = (new L("Ley","Ley","Law","Loi")).getId();
var HB_TACTICA = (new L("Táctica","Táctica","Tactic","Tactique")).getId();
var TIPO_HB_VIGOR = (new L("Vigor","Vigor","Vigor","Vitales")).getId();
var HB_FRIALDAD = (new L("Frialdad","Frialdad","Composure","Impassabilité")).getId();
var HB_PROEZAS_FUERZA = (new L("Proezas de fuerza","Proezas de fuerza","Feats of Strength","Prouesses de Force")).getId();
var HB_RESISTENCIA_DOLOR = (new L("Resistencia al dolor","Resistencia al dolor","Withstand Pain","Résistance à la Douleur")).getId();
var TIPO_HB_CREATIVAS = (new L("Creativas","Creativas","Creative","Créatives")).getId();
var HB_ALQUIMIA = (new L("Alquimia","Alquimia","Alchemy","Alchimie")).getId();
var HB_ANIMISMO = (new L("Animismo","Animismo","Animism","Animisme")).getId();
var HB_ARTE = (new L("Arte","Arte","Art","Art")).getId();
var HB_BAILE = (new L("Baile","Baile","Dance","Danse")).getId();
var HB_CALIGRAFIA_RITUAL = (new L("Caligrafía Ritual","Caligrafía Ritual","Ritual Caligraphy","Caligraphie rituelle")).getId();
var HB_FORJA = (new L("Forja","Forja","Forging","Forge")).getId();
var HB_MUSICA = (new L("Música","Música","Music","Musique")).getId();
var HB_RUNAS = (new L("Runas","Runas","Runes","Runes")).getId();
var HB_TRUCOS_MANOS = (new L("Trucos de manos","Trucos de manos","Sleight of Hand","Habileté manuelle")).getId();
var PEN_ARMADURA_NO = (new L("Sin penalizador por armadura","Sin penalizador por armadura","Without Armor Penalty","Sans pénalité d'Armure")).getId();
var PEN_ARMADURA_SI = (new L("Con penalizador por armadura","Con penalizador por armadura","With Armor Penalty","Avec la pénalité d'Armure")).getId();
var PEN_ARMADURA_SI_IRREDUCIBLE = (new L("Con penalizador por armadura, no reducible","Con penalizador por armadura, no reducible","With Armor Penalty, non reducible","Avec la pénalité d'Armure irréductible")).getId();
var PEN_ARMADURA_SI_MEDIO_REDUCIBLE = (new L("Con penalizador por armadura, reducible a la mitad","Con penalizador por armadura, reducible a la mitad","With Armor Penalty, reducible to half","Avec la pénalité d'Armure réductible à moitié")).getId();
var UI_NO_USABLE_SIN_RANGOS = (new L("--","--","--","--")).getId();
var ERR_HABILIDAD_KI_DESCONOCIDA = (new L("Error: habilidad ki desconocida","Error: habilidad ki desconocida","Error: Unknown Ki Ability","Erreur: Pouvoir de Ki inconnu")).getId();
var ERR_TECNICA_KI_DESCONOCIDA = (new L("Error: técnica ki desconocida","Error: técnica ki desconocida","Error: Unknown Ki Technique","Erreur: Technique de Ki inconnue")).getId();
var ERR_EFECTO_KI_DESCONOCIDA = (new L("Error: efecto ki desconocida","Error: efecto ki desconocida","Error: Unknown Ki effect","Erreur: Effet de Ki inconnu")).getId();
var ERR_VENTAJA_KI_DESCONOCIDA = (new L("Error: ventaja de efecto ki desconocida","Error: ventaja de efecto ki desconocida","Error: Unknown ki effect advantage","Erreur:Avantage d'effet de Ki inconnu")).getId();
var ERR_DESVENTAJA_KI_DESCONOCIDA = (new L("Error: desventaja ki desconocida","Error: desventaja ki desconocida","Error: Unknown ki disadvantage","Erreur: Désavantage de Ki inconnu")).getId();
var ELEMENTO_AIRE = (new L("Aire","Aire","Air","Air")).getId();
var ELEMENTO_AGUA = (new L("Agua","Agua","Water","Eau")).getId();
var ELEMENTO_FUEGO = (new L("Fuego","Fuego","Fire","Feu")).getId();
var ELEMENTO_TIERRA = (new L("Tierra","Tierra","Earth","Terre")).getId();
var ELEMENTO_LUZ = (new L("Luz","Luz","Light","Lumière")).getId();
var ELEMENTO_OSCURIDAD = (new L("Oscuridad","Oscuridad","Darkness","Obscurité")).getId();
var ELEMENTO_FRIO = (new L("ELEMENTO_FRIO","Frío","Cold","Froid")).getId();
var ELEMENTO_ELECTRICIDAD = (new L("ELEMENTO_ELECTRICIDAD","Electricidad","Electricity","Électricité")).getId();
var EFECTO_OFENSIVO = (new L("Efecto ofensivo","Efecto ofensivo","Offensive effect","Effet offensif")).getId();
var EFECTO_DEFENSIVO = (new L("Efecto defensivo","Efecto defensivo","Defensive effect","Effet défensif")).getId();
var EFECTO_DESTRUCTIVO = (new L("Efecto destructivo","Efecto destructivo","Destructive effect","Effet destructeur")).getId();
var EFECTO_ACCION = (new L("Efecto de acción","Efecto de acción","Action effect","Effet d'action")).getId();
var EFECTO_REACCION = (new L("Efecto de reacción","Efecto de reacción","Reaction effect","Effet de réaction")).getId();
var EFECTO_ESOTERICO = (new L("Efecto esotérico","Efecto esotérico","Esoteric effect","Effet ésotérique")).getId();
var EFECTO_ESPECIAL = (new L("Efecto especial","Efecto especial","Special effect","Effet spécial")).getId();
var EFECTO_ESPACIAL = (new L("Efecto espacial","Efecto espacial","Spacial effect","Effet spatial")).getId();
var EFECTO_ENTEREZA = (new L("Efecto de entereza","Efecto de entereza","Fortitude effect","Effet de solidité")).getId();
var EFECTO_INCREMENTO = (new L("Efecto de incremento","Efecto de incremento","Increase effect","Effet d'augmentation")).getId();
var EFECTO_VARIADO = (new L("Efecto variado","Efecto variado","Various effect","Effet divers")).getId();
var COSTE_VENTAJAS_AUMENTA_DOS = (new L("Cada elección adicional aumenta dos puntos el coste añadido de Ki de la ventaja","Cada elección adicional aumenta dos puntos el coste añadido de Ki de la ventaja","Each additional election adds two to the extra ki cost of this advantage","Chaque choix supplémentaire augmente de deux points le coût supplémentaire en Ki de l'avantage.")).getId();
var ERR_VIA_NO_DOMINADA = (new L("Vía no dominada","Vía no dominada","Path not dominated","Voie non contrôlée")).getId();
var ERR_VIA_DESCONOCIDA = (new L("Error: Vía desconocida","Error: Vía desconocida","Error: Unknown path","Erreur: Voie inconnue")).getId();
var ERR_INVOCACION_DESCONCODIA = (new L("ERR_INVOCACION_DESCONCODIA","Invocación desconocida","Invocation unknown","Invocation inconnue")).getId();
var VIA_LUZ = (new L("VIA Luz","Luz","Light","Lumière")).getId();
var VIA_LUZ_DESCRIPCION = (new L("","","","")).getId();
var VIA_OSCURIDAD = (new L("VIA Oscuridad","Oscuridad","Darkness","Obscurité")).getId();
var VIA_OSCURIDAD_DESCRIPCION = (new L("","","","")).getId();
var VIA_CREACION = (new L("VIA Creacion","Creación","Creation","Création")).getId();
var VIA_CREACION_DESCRIPCION = (new L("","","","")).getId();
var VIA_DESTRUCCION = (new L("VIA Destrucción","Destrucción","Destruction","Destruction")).getId();
var VIA_DESTRUCCION_DESCRIPCION = (new L("","","","")).getId();
var VIA_FUEGO = (new L("VIA Fuego","Fuego","Fire","Feu")).getId();
var VIA_FUEGO_DESCRIPCION = (new L("","","","")).getId();
var VIA_AGUA = (new L("VIA Agua","Agua","Water","Eau")).getId();
var VIA_AGUA_DESCRIPCION = (new L("","","","")).getId();
var VIA_TIERRA = (new L("VIA Tierra","Tierra","Earth","Terre")).getId();
var VIA_TIERRA_DESCRIPCION = (new L("","","","")).getId();
var VIA_AIRE = (new L("VIA Aire","Aire","Air","Air")).getId();
var VIA_AIRE_DESCRIPCION = (new L("","","","")).getId();
var VIA_ESENCIA = (new L("VIA Esencia","Esencia","Essence","Essence")).getId();
var VIA_ESENCIA_DESCRIPCION = (new L("","","","")).getId();
var VIA_ILUSION = (new L("VIA Ilusión","Ilusión","Illusion","Illusion")).getId();
var VIA_ILUSION_DESCRIPCION = (new L("","","","")).getId();
var VIA_NIGROMANCIA = (new L("VIA Nigromancia","Nigromancia","Necromancy","Nécromancie")).getId();
var VIA_NIGROMANCIA_DESCRIPCION = (new L("","","","")).getId();
var TODAS_VIAS = (new L("Todas las vías","Todas las vías","All Paths","Toutes les voies")).getId();
var VIA_LIBRE_ACCESO = (new L("Libre acceso","Libre acceso","Free Access","Accès libre")).getId();
var VIA_LIBRE_ACCESO_DESCRIPCION = (new L("Conjuros de libre acceso","Conjuros de libre acceso","Free Access Spells","Sorts d'accès libre")).getId();
var TIPO_CONJURO_EFECTO = (new L("EFEC_CON Efecto","Efecto","Effect","Effet")).getId();
var TIPO_CONJURO_ATAQUE = (new L("EFEC_CON Ataque","Ataque","Attack","Attaque")).getId();
var TIPO_CONJURO_DEFENSA = (new L("EFEC_CON Defensa","Defensa","Defense","Défense")).getId();
var TIPO_CONJURO_ANIMICO = (new L("EFEC_CON Anímico","Anímico","Animic","Animique")).getId();
var TIPO_CONJURO_AUTOMATICO = (new L("EFEC_CON Automático","Automático","Automatic","Automatique")).getId();
var TIPO_CONJURO_DETECCION = (new L("EFEC_CON Detección","Detección","Detection","Détection")).getId();
var TIPO_CONJURO_ESCUDO = (new L("EFEC_CON Escudo","Escudo","Shield","Bouclier")).getId();
var AVISO_NIVELES_VIA_INSUFICIENTES = (new L("No tienes suficientes niveles de vía libres","No tienes suficientes niveles de vía libres","Not enough path levels","Pas assez de niveaux de magie")).getId();
var ERR_DISCIPLINA_DESCONOCIDA = (new L("Error: Disciplina Psiquica desconocida","Error: Disciplina Psiquica desconocida","Error: Unknown psychic discipline","Erreur: Discipline psychique inconnue")).getId();
var ERR_PODER_DESCONOCIDO = (new L("Error: Poder Psíquico desconocido","Error: Poder Psíquico desconocido","Error: Unknown Psychic Power","Erreur: Pouvoir psychique inconnu")).getId();
var ERR_CV_INSUFICIENTES = (new L("CV insuficientes","CV insuficientes","Not enough PPs","PPPs insuffisants")).getId();
var UI_DISCIPLINA = (new L("disciplina","disciplina","discipline","discipline")).getId();
var ERR_RAZA_ERRONEA = (new L("Error: Nombre de raza erróneo","Error: Nombre de raza erróneo","Error: wrong race name","Erreur: Nom de race erroné")).getId();
var ERR_TABLA_DESCONOCIDA = (new L("Error: Tabla de Armas desconocida","Error: Tabla de Armas desconocida","Error: Unknown Weapon table","Erreur: Module d'armes inconnu")).getId();
var CATEGORIA_TABLA_ARMAS_GENERALES = (new L("Tablas de armas generales","Tablas de armas generales","General weapon modules","Modules généraux d'armes")).getId();
var CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS = (new L("Tablas de armas arquetípicas","Tablas de armas arquetípicas","Archetypic Weapon modules","Modules typiques d'armes")).getId();
var CATEGORIA_TABLA_ARMAS_ESTILOS = (new L("Tablas de estilos","Tablas de estilos","Combat styles","Modules de styles")).getId();
var CATEGORIA_TABLA_MISTICAS = (new L("Tablas Místicas","Tablas Místicas","Mystic modules","Modules mystiques")).getId();
var CATEGORIA_TABLA_PSIQUICAS = (new L("Tablas Psíquicas","Tablas Psíquicas","Psychic modules","Module psychique")).getId();
var CATEGORIA_TABLA_ARMAS_ARTES_MARCIALES = (new L("CATEGORIA_TABLA_ARMAS_ARTES_MARCIALES","Tablas de armas en artes marciales","Martial arts weapons modules","Modules d'armes d'arts martiaux")).getId();
var ERR_VENTAJA_ERRONEA = (new L("Error: Nombre de ventaja erróneo","Error: Nombre de ventaja erróneo","Error: wrong advantage name","Erreur: Nom d'avantage erroné")).getId();
var VENTAJA = (new L("Ventaja","Ventaja","Advantage","Avantage")).getId();
var REPETIBLE_TOTAL = (new L("Totalmente repetible","Totalmente repetible","Always repeatable","Totalement répétable")).getId();
var REPETIBLE_OPCIONES = (new L("Repetible eligiendo otras opciones","Repetible eligiendo otras opciones","Repeatable with other options","Répétable avec d'autres options")).getId();
var NO_REPETIBLE = (new L("No repetible","No repetible","Unrepeatable","Non répétable")).getId();
var NO_COMPRABLE = (new L("No comprable con PC","No comprable con PC","Can not be bought with CP","Ne peut pas être acheter avec des PC")).getId();
var LISTA_CARACTERISTICAS = (new L("Especificar Característica","Especificar Característica","Specify Attribute","Spécifier Caractéristique")).getId();
var LISTA_TIPOS_SECUNDARIAS = (new L("Especificar Tipo de habilidad secundaria","Especificar Tipo de habilidad secundaria","Especify secondary abilities group","Spécifier champ de compétence secondaires")).getId();
var LISTA_HABILIDADES_SECUNDARIAS = (new L("Especificar habilidad secundaria","Especificar habilidad secundaria","Specify secondary ability","Spécifier compétence secondaire")).getId();
var LISTA_DISCIPLINAS_PSIQUICAS = (new L("Especificar disciplina psíquica","Especificar disciplina psíquica","Specify psychic discipline","Spécifier discipline psychique")).getId();
var LISTA_AJUSTE_TAMAÑO = (new L("Especificar ajuste tamaño","Especificar ajuste tamaño","Specify size adjustment","Spécifier ajustement de taille")).getId();
var LISTA_DESCRIPCION = (new L("Especificar una descripción","Especificar una descripción","Specify description","Spécifier une description")).getId();
var LISTA_PODER_PSIQUICO = (new L("Especificar un poder psiquico","Especificar un poder psiquico","Specify psychic power","Spécifier un pouvoir psychique")).getId();
var LISTA_SHAJADS_BERYLS = (new L("Especificar Shajad o Beryl","Especificar Shajad o Beryl","Specify Beryl or Shajad","Spécifier Béryl ou Shajad")).getId();
var LISTA_VIAS_MAGIA = (new L("Especificar vía de magia","Especificar vía de magia","Specify magic Path","Spécifier voie de magie")).getId();
var LISTA_DESEQUILIBRIO_SEPHIROTICO = (new L("Especificar desequilibrio sephirotico","Especificar desequilibrio sephirotico","Specify elemental compatibility","Spécifier prédilection séphirotique")).getId();
var LISTA_INTRODUCCION_USUARIO = (new L("Introducir detalles","Introducir detalles","Write details","Entrez les détails")).getId();
var ELEGIR_POD_VOL = (new L("Elegir Poder o Voluntad","Elegir Poder o Voluntad","Choose POW or WP","Choisir entre POU ou VOL")).getId();
var ELEGIR_REPARTO_5_INT_POD_VOL = (new L("Repartir 5 puntos entre INT, VOL y POD","Repartir 5 puntos entre INT, VOL y POD","Distribute 5 points between INT, WP and POW","Répartir 5 points entre INT, VOL et POU")).getId();
var LISTA_HABILIDAD_COMBATE = (new L("Elegir ataque, parada o esquiva","Elegir ataque, parada o esquiva","Choose attack, block or dodge","Choisir attaque, parade ou esquive")).getId();
var ORIGEN_RAZA = (new L("por raza","por raza","from Race","de race")).getId();
var ORIGEN_PC = (new L("por PC","por PC","from CP","de PC")).getId();
var ORIGEN_ELAN = (new L("por Elan","por Elan","from Elan","d'élan")).getId();
var GRUPO_CARACTERISTICAS = (new L("Ventajas de Características","Ventajas de Características","Attribute advantages","Avantages de caractéristiques")).getId();
var GRUPO_RESISTENCIAS = (new L("Ventajas de Resistencias","Ventajas de Resistencias","Resistance advantages","Avantages de résistance")).getId();
var GRUPO_CAPACIDADES = (new L("Ventajas de otras Capacidades","Ventajas de otras Capacidades","Other abilities advantages","Avantages d'autres compétences")).getId();
var GRUPO_DON = (new L("Ventajas del Don","Ventajas del Don","Gift advantages","Avantages mystiques")).getId();
var GRUPO_PSIQUICAS = (new L("Ventajas Psíquicas","Ventajas Psíquicas","Psychic advantages","Avantages psychiques")).getId();
var GRUPO_KI = (new L("Ventajas del Ki","Ventajas del Ki","Ki advantages","Avantages de Ki")).getId();
var GRUPO_OTRAS = (new L("Otras Ventajas","Otras Ventajas","Other advantages","Autres avantages")).getId();
var GRUPO_RAZAS = (new L("Ventajas de Raza","Ventajas de Raza","Race advantages","Avantages de race")).getId();
var GRUPO_SECUNDARIAS = (new L("Ventajas de Habilidades Secundarias","Ventajas de Habilidades Secundarias","Secondary abilities advantages","Avantages de compétences secondaires")).getId();
var GRUPO_ELAN = (new L("Ventajas de Elan","Ventajas de Elan","Elan advantages","Avantages d'élan")).getId();
var GRUPO_TRASFONDO = (new L("GRUPO_TRASFONDO","Ventajas de Trasfondo","Background advantages","Avantages de passé")).getId();
var GRUPO_LEGADOS = (new L("GRUPO_LEGADOS","Legados de Sangre","Blood Legacies","Héritages de sang")).getId();
var UI_RESULTADO_DE_TIRADA = (new L("Resultado de la tirada:","Resultado de la tirada:","Result of the roll","Résultat du jet")).getId();
var UI_AJUSTADO_AL_MINIMO = (new L("Ajustado al mínimo del personaje","Ajustado al mínimo del personaje","Adjusted to character minimum","Ajusté au minimum du personnage")).getId();
var UI_PERSIS_METODO_SERVIDOR = (new L("Método base: Servidor de personajes","Método base: Servidor de personajes","Base method: CHaracter server","Méthode de base : Serveur de personnages")).getId();
var UI_PERSIS_METODO_SERVIDOR_DESC = (new L("UI_PERSIS_METODO_SERVIDOR_DESC","Puedes guardar tu personaje en el servidor de personajes de Anima: Único.<br>Te pedirá usuario y contraseña. Si no tienes ninguno, puedes <a href='http://www.helechaloscuro.net/cake/users/add' target='_blank'>REGISTRARTE</a>.","You can save your character in the character server of Anima: UNICO.<br> It will ask for username and password. If you have none, you can <a href='http://www.helechaloscuro.net/cake/users/add' target='_blank'>SIGN UP</a>.","Vous pouvez sauvegardez votre personnage dans le serveur de personnages de Anima: UNICO.<br> Celà vous demandera un nom d'utilisateur et un mot de passe. Si vous n'en avez pas, vous pouvez vous  <a href='http://www.helechaloscuro.net/cake/users/add' target='_blank'>INSCRIRE</a>.")).getId();
var UI_PERSIS_METODO_SERVIDOR_CARGA_DESC = (new L("UI_PERSIS_METODO_SERVIDOR_CARGA_DESC","Puedes cargar un personaje del servidor de personajes de Anima: Único.","You can load a character from the character server of Anima: UNICO","Vous pouvez charger un personnage depuis le serveur de personnages de Anima: UNICO")).getId();
var UI_PERSIS_METODO_SERVIDOR_CARGA_TEXTO = (new L("Accede al servidor de personajes","Accede al servidor de personajes","Access to the character server","Accéder au serveur de personnages")).getId();
var UI_PERSIS_METODO_ENLACE = (new L("Método 1: Enlace de descarga","Método 1: Enlace de descarga","Method 1: Download link","Méthode 1: lien de téléchargement")).getId();
var UI_PERSIS_METODO_ENLACE_DESC = (new L("UI_PERSIS_METODO_ENLACE_DESC","En algunos navegadores puedes descargarlo directamente como fichero con el siguiente enlace:","In some web browsers you can download your character directly from the following link:","Dans certains navigateurs internet vous pouvez télécharger directement depuis le lien suivant:")).getId();
var UI_PERSIS_METODO_ENLACE_TEXTO = (new L("Descarga en fichero de texto","Descarga en fichero de texto","Download as text file","Télécharger en tant que fichier texte")).getId();
var UI_PERSIS_METODO_CARGA_FICHERO = (new L("Método 1: Carga el fichero","Método 1: Carga el fichero","Method 1: Load the file","Méthode 1: Charger le fichier")).getId();
var UI_PERSIS_METODO_CARGA_FICHERO_DESC = (new L("UI_PERSIS_METODO_CARGA_FICHERO_DESC","En algunos navegadores puedes cargar directamente el fichero de texto .animaUnico:","In some web browsers you can directly load the text file:","Dans certains navigateurs internet vous pouvez directement charger le fichier texte .animaUnico:")).getId();
var UI_PERSIS_METODO_COPIA = (new L("Método 2: Copia y pega","Método 2: Copia y pega","Method 2: Copy & Paste","Méthode 2: Copier & Coller")).getId();
var UI_PERSIS_METODO_COPIA_DESC = (new L("UI_PERSIS_METODO_COPIA_DESC","Si lo anterior no te funciona, puedes copiar el siguiente texto (¡entero! No te dejes nada) a algún fichero de texto y guardarlo manualmente. No es necesario que le pongas .animaUnico como extensión para que la aplicación pueda cargarlo más tarde. Si lo prefieres, pulsa el botón para facilitar el copiado.","If the others don't work, you can copy the following text (full! don't leave a comma) to some local file text and save it manually. You don't need to name it .animaUnico for the application to load it later. If you want help, click the button for an easier copy job","Si ces méthodes ne fonctionnent pas, vous pouvez copier directement le texte suivant (en entier, n'oubliez même pas une virgule !) dans un fichier texte local. Vous n'avez pas besoin de l'appeller .animaUnico pour que l'application puisse le charger plus tard. Si vous le voulez, vous pouvez cliquer sur le bouton pour une copie plus facile.")).getId();
var UI_PERSIS_METODO_COPIA_TEXTO = (new L("Copia","Copia","Copy","Copier")).getId();
var UI_PERSIS_METODO_COPIA_GUIA = (new L("UI_PERSIS_METODO_COPIA_GUIA","Ahora selecciona todo con Ctrl+A, copia al portapapeles pulsando Control+C (o Cmd+C) y luego pégalo donde quieras con Control+v (o Cmd+v)","Now select all with Ctrl+A, copy to the clipboard pressing Control+C (or Cmd+C) and then paste it where you want with Control+v (or Cmd+v)","Maintenant séléctionnez tout avec Ctrl+A, Copiez tout dans le presse papier avec Ctrl+C (ou Cmd+C) puis collez où vous voulez à l'aide de Ctrl+V (ou Cmd+V).")).getId();
var UI_PERSIS_METODO_COPIA_CARGA_DESC = (new L("UI_PERSIS_METODO_COPIA_CARGA_DESC","Si lo anterior no te funciona, puedes copiar el texto que te descargaste y pegarlo en el siguiente cuadro de texto. Luego dale al botón cargar.","If the others don't work, you can copy the text you downloaded or copied and pasted and paste it in the following textbox. Then press the load button","Si ça ne fonctionne pas, vous pouvez copier le texte que vous avez téléchargé ou copié/collé et le coller dans la boîte texte suivante. Cliquez ensuite sur 'Charger'.")).getId();
var UI_PERSIS_METODO_COPIA_CARGA = (new L("Carga","Carga","Load","Charger")).getId();
var UI_EQUIPADO = (new L("UI_EQUIPADO","Equip.","Equip.","Equip.")).getId();
var UI_PRECIO = (new L("UI_PRECIO","Precio","Cost","Prix")).getId();
var UI_VENDER = (new L("UI_VENDER","Vender","Sell","Vendre")).getId();
var UI_QUITAR = (new L("UI_QUITAR","Quitar","Drop","Jeter")).getId();
var UI_TIPO = (new L("UI_TIPO","Tipo","Type","Type")).getId();
var UI_YELMO = (new L("UI_YELMO","Yelmo","Helm","Casque")).getId();
var UI_ELEMENTALISMO = (new L("UI_ELEMENTALISMO","Elementalismo","Elementalismo","Élémentalisme")).getId();
var ELEMENTALISMO_NINGUNO = (new L("ELEMENTALISMO_NINGUNO","No","No","Non")).getId();
var ELEMENTALISMO_AIRE = (new L("ELEMENTALISMO_AIRE","Aire","Air","Air")).getId();
var ELEMENTALISMO_TIERRA = (new L("ELEMENTALISMO_TIERRA","Tierra","Earth","Terre")).getId();
var ELEMENTALISMO_AGUA = (new L("ELEMENTALISMO_AGUA","Agua","Water","Eau")).getId();
var ELEMENTALISMO_FUEGO = (new L("ELEMENTALISMO_FUEGO","Fuego","Fire","Feu")).getId();
var ELEMENTALISMO_LUZ = (new L("ELEMENTALISMO_LUZ","Luz","Light","Lumière")).getId();
var ELEMENTALISMO_OSCURIDAD = (new L("ELEMENTALISMO_OSCURIDAD","Oscuridad","Darkness","Obscurité")).getId();
var UI_ESPECIALIZADO_EN_INVOCACION = (new L("UI_ESPECIALIZADO_EN_INVOCACION","Especializado en Invocación","Specialized in Invocations","Spécialisé en Invocation")).getId();
var INVOCACIONES_ARCANOS = (new L("INVOCACIONES_ARCANOS","Arcanos","Arcana","Arcane")).getId();
var UI_PENALIZADOR_TODA_ACCION = (new L("UI_PENALIZADOR_TODA_ACCION","Penalizador a toda acción","All actions penalty","Malus à toutes les actions")).getId();
var UI_PENALIZADOR_NATURAL = (new L("UI_PENALIZADOR_NATURAL","Penalizador natural por armadura","Armor natural penalty","Malus naturel à l'armure")).getId();
var ORIGEN_CARAC = (new L("ORIGEN_CARAC","Característica","Attribute","Caractéristique")).getId();
var ORIGEN_CATEGORIA = (new L("ORIGEN_CATEGORIA","Categoría","Class","Classe")).getId();
var ORIGEN_HABILIDAD_NATURAL = (new L("ORIGEN_HABILIDAD_NATURAL","Habilidad Natural","Natural ability","Compétence naturelle")).getId();
var ORIGEN_BONIFICADOR_NATURAL = (new L("ORIGEN_BONIFICADOR_NATURAL","Bonificador Natural","Natural bonus","Bonus naturel")).getId();
var ORIGEN_ARMADURA = (new L("ORIGEN_ARMADURA","Armadura","Armor","Armure")).getId();
var ERR_LIMITE_DESCONOCIDO = (new L("ERR_LIMITE_DESCONOCIDO","Error: Límite desconocido","Error: Unknown Limit","Erreur: Limite inconnue")).getId();
var UI_VIENE_DE = (new L("UI_VIENE_DE","Viene de","Comes from","Vient de")).getId();
var UI_HABLA = (new L("UI_HABLA","Habla","Can speak","Parle")).getId();
var UI_NACION = (new L("UI_NACION","Nación de origen","Nation of origin","Nation d'origine")).getId();
var UI_ETNIA = (new L("UI_ETNIA","Etnia","Ethnicity","Ethnie")).getId();
var UI_AUMENTAR_CM_DISMINUIR_KI = (new L("UI_AUMENTAR_CM_DISMINUIR_KI"," =+10 CM, -1 Ki"," =+10 MK, -1 Ki"," =+10 DI, -1 Ki")).getId();
var UI_AUMENTAR_KI_DISMINUIR_CM = (new L("UI_AUMENTAR_KI_DISMINUIR_CM","-5 CM, +2 Ki","-5 MK, +2 Ki","-5 DI, +2 Ki")).getId();
var UI_TECNICA_DEBE_TENER_3 = (new L("UI_TECNICA_DEBE_TENER_3","La técnica debe basarse al menos en 3 Características","The technique needs to be based in at least 3 attributes","La technique doit être basé sur au moins 3 caractéristiques")).getId();
var UI_MAX_5_AUMENTOS_CM = (new L("UI_MAX_5_AUMENTOS_CM","El ki sólo puede reducirse 5 puntos de este modo.","Ki value can only be reduced by 5 in this way.","La valeur de Ki peut seulement être réduite de 5 points par ce moyen.")).getId();
var UI_MAX_4_AUMENTOS_KI = (new L("UI_MAX_4_AUMENTOS_KI","El CM sólo puede reducirse 20 puntos de este modo.","KM value can only be reduced by 20 in this way.","La valeur de DI peut seulement être réduit de 20 par cette méthode")).getId();
var UI_ANULAR = (new L("UI_ANULAR","Anular","Cancel","Annuler")).getId();
var UI_MAX_CM = (new L("UI_MAX_CM","Max CM alcanzado","Max MK reached","Max DI atteint")).getId();
var UI_APLICAR_MENOS_UNO_A_DOS_CARAC = (new L("UI_APLICAR_MENOS_UNO_A_DOS_CARAC","Aumenta dos puntos de ki entre las siguientes (Selecciona dos)","Add two points of ki among the following (select two)","Ajouter deux points de Ki aux choix suivants (En choisir deux)")).getId();
var UI_CANCELAR_MENOS_UNO_A_DOS_CARAC = (new L("UI_CANCELAR_MENOS_UNO_A_DOS_CARAC","Cancela el aumento de dos puntos de ki entre las siguientes (Selecciona dos)","Cancel the two points added of ki among the following (select two)","Annuler deux points de Ki aux choix suivants (En choisir deux)")).getId();
var ELEGIR_HABILIDAD = (new L("ELEGIR_HABILIDAD","","","")).getId();
var UI_SOSTENIDA = (new L("Técnica sostenida","Técnica sostenida","Sustained Technique","Technique soutenue")).getId();
var UI_COMBINABLE = (new L("Técnica combinable","Técnica combinable","Técnica combinable","Technique combinable")).getId();
var UI_GUARDAR_TECNICA = (new L("UI_GUARDAR_TECNICA","Guardar técnica","Save Technique","Sauvegarder Technique")).getId();
var UI_MANT = (new L("UI_MANT","M","M","M")).getId();
var UI_SOS_MENOR = (new L("UI_SOS_MENOR","S-","S-","S-")).getId();
var UI_SOS_MAYOR = (new L("UI_SOS_MAYOR","S+","S+","S+")).getId();
var UI_QUITAR_COMBINABLE = (new L("UI_QUITAR_COMBINABLE","Quitar combinable","Drop combinable","Annuler combinable")).getId();
var UI_HACER_COMBINABLE = (new L("UI_HACER_COMBINABLE","Hacer combinable","Make combinable","Rendre combinable")).getId();
var UI_CAMBIA_ORO = (new L("UI_CAMBIA_ORO","+/- mo","+/- gp","+/- po")).getId();
var UI_CAMBIA_PLATA = (new L("UI_CAMBIA_PLATA","+/- mp","+/- sp","+/- pa")).getId();
var UI_CAMBIA_COBRE = (new L("UI_CAMBIA_COBRE","+/- mc","+/- cp","+/- pc")).getId();
var UI_INTRODUZCA_CANTIDAD_DINERO = (new L("UI_INTRODUZCA_CANTIDAD_DINERO","Introduce la cantidad de dinero a añadir o quitar","Input the amount of money of add or remove","Entrez la quantité d'argent à ajouter ou enlever")).getId();
var UI_BOTON_AÑADIR_EQUIPO = (new L("UI_BOTON_AÑADIR_EQUIPO","Añadir equipo","Add Equipment","Ajouter Équipement")).getId();
var DIAG_AÑADIR_EQUIPO = (new L("DIAG_AÑADIR_EQUIPO","Añadir equipo","Add Equipment","Ajouter Équipement")).getId();
var UI_INCALCULABLE = (new L("UI_INCALCULABLE","Incalculable","Invaluable","Incalculable")).getId();
var UI_ESFERAS_METAMAGICAS = (new L("UI_ESFERAS_METAMAGICAS","Esferas metamágicas","Esferas metamágicas","Sphères métamagiques")).getId();
var UI_ELEGIR_ARCANA_SEPHIRAH = (new L("UI_ELEGIR_ARCANA_SEPHIRAH","Elegir Arcana Sephirah","Elegir Arcana Sephirah","Personnaliser l'Arcana Sephirah")).getId();
var DIAG_ARCANA_SEPHIRAH = (new L("DIAG_ARCANA_SEPHIRAH","Arcana Sephirah","Arcana Sephirah","Arcana Sephirah")).getId();
var INVOCACIONES_PODERES_MENORES = (new L("INVOCACIONES_PODERES_MENORES","Poderes Menores","Poderes Menores","Pouvoirs Mineurs")).getId();
var INVOCACIONES_PODERES_INTERMEDIOS = (new L("INVOCACIONES_PODERES_INTERMEDIOS","Poderes Intermedios","Poderes Intermedios","Pouvoirs Intermédiaires")).getId();
var INVOCACIONES_GRANDES_POTENCIAS = (new L("INVOCACIONES_GRANDES_POTENCIAS","Grandes Potencias","Grandes Potencias","Grandes Puissances")).getId();
var INVOCACIONES_TRINIDAD_DE_LAS_BESTIAS = (new L("INVOCACIONES_TRINIDAD_DE_LAS_BESTIAS","La Trinidad de las Bestias","La Trinidad de las Bestias","La Trinité des Bêtes")).getId();
var INVOCACIONES_BESTIAS_CARDINALES = (new L("INVOCACIONES_BESTIAS_CARDINALES","Las Bestias Cardinales","Las Bestias Cardinales","Les Bêtes Cardinales")).getId();
var ERR_SUBVIA_DESCONOCIDA = (new L("ERR_SUBVIA_DESCONOCIDA","Error: Subvía desconocida","Error: Unknown subpath","Erreur: voie secondaire inconnue")).getId();
var UI_TEOREMA_MAGICO = (new L("UI_TEOREMA_MAGICO","Teorema Mágico","Magic Theorem","Théorème de Magie")).getId();
var UI_PATRONES_MENTALES = (new L("UI_PATRONES_MENTALES","Patrones Mentales","Mental Patterns","Patrons Mentaux")).getId();
var UI_BOTON_COMPRAR_PATRON = (new L("UI_BOTON_COMPRAR_PATRON","Comprar Patrón Mental","Buy Mental Pattern","Acheter un Patron Mental")).getId();
var UI_CANCELADO = (new L("UI_CANCELADO","Cancelado","Cancelled","Annulé")).getId();
var UI_CANCELAR = (new L("UI_CANCELAR","Cancelar","Cancel","Annuler")).getId();
var UI_OK = (new L("UI_OK","Ok","Ok","Ok")).getId();
var UI_NIVEL_INICIAL = (new L("UI_NIVEL_INICIAL","Nivel inicial","Initial level","Niveau initial")).getId();
var UI_RAZA_INICIAL = (new L("UI_RAZA_INICIAL","Raza inicial","Initial race","Race initial")).getId();
var UI_CATEGORIA_INICIAL = (new L("UI_CATEGORIA_INICIAL","Categoría inicial","Initial class","Classe initiale")).getId();
var DIAG_IMPRIMIR_PERSONAJE = (new L("DIAG_IMPRIMIR_PERSONAJE","Imprimir personaje","Print character","Imprimer personnage")).getId();
var UI_BOTON_IMPRIMIR = (new L("UI_BOTON_IMPRIMIR","Imprimir personaje","Print Character","Imprimer personnage")).getId();
var UI_MAXIMO_INNATOS = (new L("UI_MAXIMO_INNATOS","Por máximo por innatos","Per innate maximum","Par maximum par inné")).getId();
var UI_MAXIMO_NATURALES = (new L("UI_MAXIMO_NATURALES","Por máximo por naturales","Per natural maximum","Par maximum par inné")).getId();


new L("E", "E", "S");
new L("1ª", "1ª", "1st");
new L("2ª", "2ª", "2nd");


