/**
 *
 * @param {string} nombre
 * @constructor
 * @param {function} etniaAlAzar
 * @param {string[]} nombresMasculinos
 * @param {string[]} nombresFemeninos
 * @param {string[]} apellidos
 * @param {number} costePosicionSocial
 * @param {{nombre: string, dinero: Dinero, bonos: {habilidad:string,bono:number}[]}}clasePosicionSocial
 * @param {{nombre: string, rango: number, dinero: Dinero, bonos: {habilidad:string,bono:number}[]}[]} posiblesClases
 * @param {string[]} lugaresOrigen
 */
function Origen(nombre, etniaAlAzar, nombresMasculinos, nombresFemeninos, apellidos, lugaresOrigen, costePosicionSocial, clasePosicionSocial, posiblesClases) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {function}
     */
    this.etniaAlAzar = etniaAlAzar;

    /**
     *
     * @type {string[]}
     */
    this.lugaresOrigen = lugaresOrigen;

    /**
     *
     * @type {string[]}
     */
    this.nombresMasculinos = nombresMasculinos;

    /**
     *
     * @type {string[]}
     */
    this.nombresFemeninos = nombresFemeninos;

    /**
     *
     * @type {string[]}
     */
    this.apellidos = apellidos;

    /**
     *
     * @type {number}
     */
    this.costePosicionSocial = costePosicionSocial;

    /**
     *
     * @type {{nombre: string, dinero: Dinero}}
     */
    this.clasePosicionSocial = clasePosicionSocial;

    /**
     *
     * @type {{nombre: string, rango: number, dinero: Dinero}[]}
     */
    this.posiblesClases = posiblesClases;
}

Origen.prototype = {
    constructor: Origen,

    getNombre : function() {
        return this.nombre;
    },

    getNombreMasculino : function() {
        var azar = d(this.nombresMasculinos.length);

        return this.nombresMasculinos[azar-1];
    },

    getNombreFemenino : function() {
        var azar = d(this.nombresFemeninos.length);

        return this.nombresFemeninos[azar-1];
    },

    getApellido : function() {
        var azar = d(this.apellidos.length);

        return this.apellidos[azar-1];
    }


};
