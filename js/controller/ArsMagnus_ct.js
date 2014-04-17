/**
 *
 * @type {ArsMagnus[]}
 */
var arsMagnus_set = [];

var allArsMagnus = {};

function addArsMagnus(arsMagnus) {
    arsMagnus_set.push(arsMagnus);
    allArsMagnus[arsMagnus.nombre] = arsMagnus;
}