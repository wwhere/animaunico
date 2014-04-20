/**
 *
 * @type {ArsMagnus[]}
 */
var arsMagnus_set = [];
var allArsMagnus = {};
var arsMagnusMenores = [];

function addArsMagnus(arsMagnus, grupo) {
    arsMagnus_set.push(arsMagnus);
    allArsMagnus[arsMagnus.nombre] = arsMagnus;
    switch (grupo) {
        case GRUPO_ARS_MAGNUS_MENORES:
            arsMagnusMenores[arsMagnus.nombre] = arsMagnus;
            break;
    }
}