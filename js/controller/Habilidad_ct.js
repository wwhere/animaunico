/**
 *
 * @type {Habilidad[]}
 */
var habilidades_set = [];

/**
 *
 * @type {{}}
 */
var allHabilidades = {};

var HABILIDAD_NO_USABLE = -99999;
var VALOR_INICIAL_SIN_RANGOS = -30;

var TIPO_CAPACIDAD = "Capacidad especial";

var TIPO_HB_COMBATE = "Habilidades de Combate";
var HB_ATAQUE = "Habilidad de Ataque";
var HB_PARADA = "Habilidad de Parada";
var HB_ESQUIVA = "Habilidad de Esquiva";
var HB_ARMADURA = "Llevar Armadura";
var HB_KI = "Ki";
var HB_KI_FUE = "Ki Fuerza";
var HB_KI_DES = "Ki Destreza";
var HB_KI_AGI = "Ki Agilidad";
var HB_KI_VOL = "Ki Voluntad";
var HB_KI_POD = "Ki Poder";
var HB_KI_CON = "Ki Constitución";
var HB_ACUM_KI = "Acumulación Ki";
var HB_ACUM_KI_FUE = "Acumulación Ki Fuerza";
var HB_ACUM_KI_DES = "Acumulación Ki Destreza";
var HB_ACUM_KI_AGI = "Acumulación Ki Agilidad";
var HB_ACUM_KI_VOL = "Acumulación Ki Voluntad";
var HB_ACUM_KI_POD = "Acumulación Ki Poder";
var HB_ACUM_KI_CON = "Acumulación Ki Constitución";
/*TABLAS*/

var TIPO_HB_SOBRENATURAL = "Habilidades Sobrenaturales";
var HB_ZEON = "Zeon";
var HB_ACT = "ACT";
var HB_PROYECCION_MAGICA = "Proyección Mágica";
var HB_CONVOCAR = "Convocar";
var HB_DOMINAR = "Dominar";
var HB_ATAR = "Atar";
var HB_DESCONVOCAR = "Desconvocar";


var TIPO_HB_PSIQUICA = "Habilidades Psíquicas";
var HB_CV = "CV";
var HB_PROYECCION_PSIQUICA = "Proyección Psíquica";
var HB_POTENCIAL_PSIQUICO = "Potencial Psíquico";

var HB_MULTIPLO_VIDA = "Múltiplos de vida";


var TIPO_HB_ATLETICAS = "Atléticas";
var HB_ACROBACIAS = "Acrobacias";
var HB_ATLETISMO = "Atletismo";
var HB_MONTAR = "Montar";
var HB_NADAR = "Nadar";
var HB_SALTAR = "Saltar";
var HB_TREPAR = "Trepar";

/**
 *
 * @type {string[]}
 */
var habilidades_atleticas_set = [HB_ACROBACIAS,HB_ATLETISMO,HB_MONTAR,HB_NADAR,HB_SALTAR,HB_TREPAR];

var TIPO_HB_SOCIALES = "Sociales";
var HB_ESTILO = "Estilo";
var HB_INTIMIDAR = "Intimidar";
var HB_LIDERAZGO = "Liderazgo";
var HB_PERSUASION = "Persuasión";

/**
 *
 * @type {string[]}
 */
var habilidades_sociales_set = [HB_ESTILO,HB_INTIMIDAR,HB_LIDERAZGO,HB_PERSUASION];

var TIPO_HB_SUBTERFUGIO = "Subterfugio";
var HB_CERRAJERIA = "Cerrajería";
var HB_DISFRAZ = "Disfraz";
var HB_OCULTARSE = "Ocultarse";
var HB_ROBO = "Robo";
var HB_SIGILO = "Sigilo";
var HB_TRAMPERIA = "Trampería";
var HB_VENENOS = "Venenos";

/**
 *
 * @type {string[]}
 */
var habilidades_subterfugio_set = [HB_CERRAJERIA,HB_DISFRAZ,HB_OCULTARSE,HB_ROBO,HB_SIGILO,HB_TRAMPERIA,HB_VENENOS];

var TIPO_HB_PERCEPTIVAS = "Perceptivas";
var HB_ADVERTIR = "Advertir";
var HB_BUSCAR = "Buscar";
var HB_RASTREAR = "Rastrear";

/**
 *
 * @type {string[]}
 */
var habilidades_perceptivas_set = [HB_ADVERTIR,HB_BUSCAR,HB_RASTREAR];

var TIPO_HB_INTELECTUALES = "Intelectuales";
var HB_ANIMALES = "Animales";
var HB_CIENCIA = "Ciencia";
var HB_HERBOLARIA = "Herbolaria";
var HB_HISTORIA = "Historia";
var HB_MEDICINA = "Medicina";
var HB_MEMORIZAR = "Memorizar";
var HB_NAVEGACION = "Navegación";
var HB_OCULTISMO = "Ocultismo";
var HB_TASACION = "Tasación";
var HB_VALORACION_MAGICA = "Valoración mágica";

/**
 *
 * @type {string[]}
 */
var habilidades_intelectuales_set = [HB_ANIMALES,HB_CIENCIA,HB_HERBOLARIA,HB_HISTORIA,HB_MEDICINA,HB_MEMORIZAR,HB_NAVEGACION,HB_OCULTISMO,HB_TASACION,HB_VALORACION_MAGICA];

var TIPO_HB_VIGOR = "Vigor";
var HB_FRIALDAD = "Frialdad";
var HB_PROEZAS_FUERZA = "Proezas de fuerza";
var HB_RESISTENCIA_DOLOR = "Resistencia al dolor";

/**
 *
 * @type {string[]}
 */
var habilidades_vigor_set = [HB_FRIALDAD,HB_PROEZAS_FUERZA,HB_RESISTENCIA_DOLOR];

var TIPO_HB_CREATIVAS = "Creativas";
var HB_ARTE = "Arte";
var HB_BAILE = "Baile";
var HB_FORJA = "Forja";
var HB_MUSICA = "Música";
var HB_TRUCOS_MANOS = "Trucos de manos";

/**
 *
 * @type {string[]}
 */
var habilidades_creativas_set = [HB_ARTE,HB_BAILE,HB_FORJA,HB_MUSICA,HB_TRUCOS_MANOS];

/**
 *
 * @type {string[][]}
 */
var habilidades_secundarias = [habilidades_atleticas_set, habilidades_sociales_set, habilidades_subterfugio_set, habilidades_perceptivas_set, habilidades_intelectuales_set, habilidades_vigor_set, habilidades_creativas_set];

/**
 *
 * @type {string[]}
 */
var habilidades_secundarias_nombres_grupos = [TIPO_HB_ATLETICAS, TIPO_HB_SOCIALES, TIPO_HB_SUBTERFUGIO, TIPO_HB_PERCEPTIVAS, TIPO_HB_INTELECTUALES, TIPO_HB_VIGOR, TIPO_HB_CREATIVAS];

var PEN_ARMADURA_NO = "Sin penalizador por armadura";
var PEN_ARMADURA_SI = "Con penalizador por armadura";
var PEN_ARMADURA_SI_IRREDUCIBLE = "Con penalizador por armadura, no reducible";
var PEN_ARMADURA_SI_MEDIO_REDUCIBLE = "Con penalizador por armadura, reducible a la mitad";

var UI_NO_USABLE_SIN_RANGOS = "--";

/**
 *
 * @param {Habilidad} habilidad
 */
function addHabilidad(habilidad) {
    if (!existeHabilidad(habilidad.getNombre())) {
        habilidades_set.push(habilidad);
        allHabilidades[habilidad.getNombre()] = habilidad;
        if (allHabilidades[habilidad.getTipo()] == undefined) {
            allHabilidades[habilidad.getTipo()] = [];
        }
        allHabilidades[habilidad.getTipo()].push(habilidad);
    }
}

/**
 *
 * @param {strng} nombre
 * @returns {boolean}
 */
function existeHabilidad(nombre) {
    return (allHabilidades[nombre] != undefined);
}

/**
 *
 * @param {string} nombreTipo
 * @returns {boolean}
 */
function existeTipoHabilidad(nombreTipo) {
    return (allHabilidades[nombreTipo] != undefined);
}

/**
 *
 * @param {string} nombreHabilidad
 * @returns {Habilidad}
 * @throws ERR_HABILIDAD_ERRONEA
 */
function getHabilidad(nombreHabilidad) {
    if (existeHabilidad(nombreHabilidad)) {
        return allHabilidades[nombreHabilidad];
    } else {
        throw ERR_HABILIDAD_ERRONEA + " " + nombreHabilidad;
    }
}

/**
 *
 * @param {string} nombreTipo
 * @returns {Habilidad[]}
 * @throws ERR_TIPO_HABILIDAD_ERRONEO
 */
function getHabilidadesPorTipo(nombreTipo) {
    if (existeTipoHabilidad(nombreTipo)) {
        return allHabilidades[nombreTipo];
    } else {
        throw ERR_TIPO_HABILIDAD_ERRONEO + " " + nombreTipo;
    }
}

/**
 *
 */
function clearHabilidades() {
    habilidades_set = [];
    allHabilidades = {};
}

/**
 *
 */
function initHabilidadesCombate() {
    addHabilidad(new Habilidad(HB_MULTIPLO_VIDA, TIPO_CAPACIDAD, true, CON, false, false, [], 1, 1));
    addHabilidad(new Habilidad(HB_ATAQUE, TIPO_HB_COMBATE, true, DES, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_PARADA, TIPO_HB_COMBATE, true, DES, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_ESQUIVA, TIPO_HB_COMBATE, true, AGI, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_ARMADURA, TIPO_HB_COMBATE, true, FUE, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_KI_FUE, TIPO_HB_COMBATE, true, FUE, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_KI_DES, TIPO_HB_COMBATE, true, DES, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_KI_AGI, TIPO_HB_COMBATE, true, AGI, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_KI_CON, TIPO_HB_COMBATE, true, CON, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_KI_VOL, TIPO_HB_COMBATE, true, VOL, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_KI_POD, TIPO_HB_COMBATE, true, POD, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_ACUM_KI_FUE, TIPO_HB_COMBATE, true, FUE, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_ACUM_KI_DES, TIPO_HB_COMBATE, true, DES, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_ACUM_KI_AGI, TIPO_HB_COMBATE, true, AGI, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_ACUM_KI_CON, TIPO_HB_COMBATE, true, CON, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_ACUM_KI_VOL, TIPO_HB_COMBATE, true, VOL, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_ACUM_KI_POD, TIPO_HB_COMBATE, true, POD, false, PEN_ARMADURA_NO, [], 1, 1));
}

/**
 *
 */
function initHabilidadesMagia() {
    addHabilidad(new Habilidad(HB_ZEON, TIPO_HB_SOBRENATURAL, true, POD, false, PEN_ARMADURA_NO, [], 5, 5));
    addHabilidad(new Habilidad(HB_ACT, TIPO_HB_SOBRENATURAL, true, POD, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_PROYECCION_MAGICA, TIPO_HB_SOBRENATURAL, true, DES, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_CONVOCAR, TIPO_HB_SOBRENATURAL, true, POD, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_DOMINAR, TIPO_HB_SOBRENATURAL, true, VOL, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_ATAR, TIPO_HB_SOBRENATURAL, true, POD, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_DESCONVOCAR, TIPO_HB_SOBRENATURAL, true, POD, false, PEN_ARMADURA_NO, [], 5, 1));
}

/**
 *
 */
function initHabilidadesPsiquica() {
    addHabilidad(new Habilidad(HB_CV, TIPO_HB_PSIQUICA, true, "", false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_POTENCIAL_PSIQUICO, TIPO_HB_PSIQUICA, true, VOL, false, PEN_ARMADURA_NO, [], 1, 1));
    addHabilidad(new Habilidad(HB_PROYECCION_PSIQUICA, TIPO_HB_PSIQUICA, true, DES, false, PEN_ARMADURA_NO, [], 5, 1));
}

/**
 *
 */
function initHabilidadesSecundariasAtleticas() {
    addHabilidad(new Habilidad(HB_ACROBACIAS, TIPO_HB_ATLETICAS, false, AGI, false, PEN_ARMADURA_SI, [], 5, 1));
    addHabilidad(new Habilidad(HB_ATLETISMO, TIPO_HB_ATLETICAS, false, AGI, false, PEN_ARMADURA_SI, [], 5, 1));
    addHabilidad(new Habilidad(HB_MONTAR, TIPO_HB_ATLETICAS, false, AGI, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_NADAR, TIPO_HB_ATLETICAS, false, AGI, false, PEN_ARMADURA_SI_IRREDUCIBLE, [], 5, 1));
    addHabilidad(new Habilidad(HB_TREPAR, TIPO_HB_ATLETICAS, false, AGI, false, PEN_ARMADURA_SI, [], 5, 1));
    addHabilidad(new Habilidad(HB_SALTAR, TIPO_HB_ATLETICAS, false, FUE, false, PEN_ARMADURA_SI, [], 5, 1));
}

/**
 *
 */
function initHabilidadesSecundariasSociales() {
    addHabilidad(new Habilidad(HB_ESTILO, TIPO_HB_SOCIALES, false, POD, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_INTIMIDAR, TIPO_HB_SOCIALES, false, VOL, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_LIDERAZGO, TIPO_HB_SOCIALES, false, POD, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_PERSUASION, TIPO_HB_SOCIALES, false, INT, false, PEN_ARMADURA_NO, [], 5, 1));
}

/**
 *
 */
function initHabilidadesSecundariasSubterfugio() {
    addHabilidad(new Habilidad(HB_CERRAJERIA, TIPO_HB_SUBTERFUGIO, false, DES, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_DISFRAZ, TIPO_HB_SUBTERFUGIO, false, DES, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_OCULTARSE, TIPO_HB_SUBTERFUGIO, false, PER, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_ROBO, TIPO_HB_SUBTERFUGIO, false, DES, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_SIGILO, TIPO_HB_SUBTERFUGIO, false, AGI, false, PEN_ARMADURA_SI_MEDIO_REDUCIBLE, [], 5, 1));
    addHabilidad(new Habilidad(HB_TRAMPERIA, TIPO_HB_SUBTERFUGIO, false, PER, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_VENENOS, TIPO_HB_SUBTERFUGIO, false, INT, true, PEN_ARMADURA_NO, [], 5, 1));
}

/**
 *
 */
function initHabilidadesSecundariasPerceptivas() {
    addHabilidad(new Habilidad(HB_ADVERTIR, TIPO_HB_PERCEPTIVAS, false, PER, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_BUSCAR, TIPO_HB_PERCEPTIVAS, false, PER, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_RASTREAR, TIPO_HB_PERCEPTIVAS, false, PER, false, PEN_ARMADURA_NO, [], 5, 1));
}

/**
 *
 */
function initHabilidadesSecundariasIntelectuales() {
    addHabilidad(new Habilidad(HB_ANIMALES, TIPO_HB_INTELECTUALES, false, INT, false, PEN_ARMADURA_NO, LISTA_ESPECIES_ANIMALES, 5, 1));
    addHabilidad(new Habilidad(HB_CIENCIA, TIPO_HB_INTELECTUALES, false, INT, true, PEN_ARMADURA_NO, LISTA_CIENCIAS, 5, 1));
    addHabilidad(new Habilidad(HB_HERBOLARIA, TIPO_HB_INTELECTUALES, false, INT, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_HISTORIA, TIPO_HB_INTELECTUALES, false, INT, true, PEN_ARMADURA_NO, LISTA_TEMAS_HISTORIA, 5, 1));
    addHabilidad(new Habilidad(HB_MEDICINA, TIPO_HB_INTELECTUALES, false, INT, true, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_MEMORIZAR, TIPO_HB_INTELECTUALES, false, INT, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_NAVEGACION, TIPO_HB_INTELECTUALES, false, INT, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_OCULTISMO, TIPO_HB_INTELECTUALES, false, INT, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_TASACION, TIPO_HB_INTELECTUALES, false, INT, true, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_VALORACION_MAGICA, TIPO_HB_INTELECTUALES, false, POD, true, PEN_ARMADURA_NO, [], 5, 1));
}

/**
 *
 */
function initHabilidadesSecundariasVigor() {
    addHabilidad(new Habilidad(HB_FRIALDAD, TIPO_HB_VIGOR, false, VOL, false, PEN_ARMADURA_NO, [], 5, 1));
    addHabilidad(new Habilidad(HB_PROEZAS_FUERZA, TIPO_HB_VIGOR, false, FUE, false, PEN_ARMADURA_SI, [], 5, 1));
    addHabilidad(new Habilidad(HB_RESISTENCIA_DOLOR, TIPO_HB_VIGOR, false, VOL, false, PEN_ARMADURA_NO, [], 5, 1));
}

/**
 *
 */
function initHabilidadesSecundariasCreativas() {
    addHabilidad(new Habilidad(HB_ARTE, TIPO_HB_CREATIVAS, false, POD, false, PEN_ARMADURA_NO, [LISTA_ARTES], 5, 1));
    addHabilidad(new Habilidad(HB_BAILE, TIPO_HB_CREATIVAS, false, AGI, true, PEN_ARMADURA_SI, [LISTA_BAILES], 5, 1));
    addHabilidad(new Habilidad(HB_FORJA, TIPO_HB_CREATIVAS, false, DES, true, PEN_ARMADURA_NO, [LISTA_FORJA], 5, 1));
    addHabilidad(new Habilidad(HB_MUSICA, TIPO_HB_CREATIVAS, false, POD, true, PEN_ARMADURA_NO, [LISTA_INSTRUMENTOS_MUSICALES], 5, 1));
    addHabilidad(new Habilidad(HB_TRUCOS_MANOS, TIPO_HB_CREATIVAS, false, DES, false, PEN_ARMADURA_NO, [LISTA_TRUCOS_MANOS], 5, 1));
}

/**
 *
 */
function initHabilidadesSecundarias() {
    initHabilidadesSecundariasAtleticas();
    initHabilidadesSecundariasSociales();
    initHabilidadesSecundariasSubterfugio();
    initHabilidadesSecundariasPerceptivas();
    initHabilidadesSecundariasIntelectuales();
    initHabilidadesSecundariasVigor();
    initHabilidadesSecundariasCreativas();
}

/**
 *
 */
function initHabilidades() {
    clearHabilidades();

    initHabilidadesCombate();

    initHabilidadesMagia();

    initHabilidadesPsiquica();

    initHabilidadesSecundarias();

    habilidades_set.sort(SortPorAtributoNombre);
}

/**
 *
 * @param {string} nombre
 * @returns {string}
 */
function getGrupoDeHabilidadSecundaria(nombre) {
    return getHabilidad(nombre).tipo;
}

