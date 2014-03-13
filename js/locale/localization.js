//region codigo
var SPA = "spa";
var ENG = "eng";

var IDIOMA_UI = ENG;

var diccionario = {};

function setIdiomaUI() {
    var lang = navigator.language || navigator.userLanguage;

    if ((lang.lastIndexOf("es") != -1) || (lang.lastIndexOf("spa") != -1)) {
        IDIOMA_UI = SPA;
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

function _(clave) {
    return this[IDIOMA_UI];
}

//endregion codigo

var MENU_PERSONAJE = "Personaje";
new L(MENU_PERSONAJE,MENU_PERSONAJE,"Character");
var MENU_CREACION = "Creación";
new L(MENU_CREACION,MENU_CREACION,"Generation");
var MENU_SOPORTE = "Soporte";
new L(MENU_SOPORTE,MENU_SOPORTE,"Support");