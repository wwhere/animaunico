var SPA = "spa";
var ENG = "eng";

var IDIOMA_UI = ENG;

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
}

L.prototype = {
    constructor: L,

    /**
     *
     * @returns {string}
     */
    toString : function() {
        return this[IDIOMA_UI];
    }
};