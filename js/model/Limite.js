/**
 *
 * @param {string} nombre
 * @param {number} coste
 * @constructor
 */
function Limite(nombre, coste) {
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {number}
     */
    this.coste = coste;

    /**
     *
     * @type {boolean}
     */
    this.anulable = true;
}
