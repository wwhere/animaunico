/**
 *
 * @type {ArsMagnus[]}
 */
var arsMagnus_set = [];
var allArsMagnus = {};
var arsMagnusMenores = [];
var arsMagnusMayores = [];
var arsMagnusSellosDragon = [];
var arsMagnusArmasImposibles = [];

function addArsMagnus(arsMagnus, grupo) {
    arsMagnus_set.push(arsMagnus);
    allArsMagnus[arsMagnus.nombre] = arsMagnus;
    switch (grupo) {
        case GRUPO_ARS_MAGNUS_MENORES:
            arsMagnusMenores[arsMagnus.nombre] = arsMagnus;
            break;
        case GRUPO_ARS_MAGNUS_MAYORES:
            arsMagnusMayores[arsMagnus.nombre] = arsMagnus;
            break;
        case GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON:
            arsMagnusSellosDragon[arsMagnus.nombre] = arsMagnus;
            break;
        case GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES:
            arsMagnusArmasImposibles[arsMagnus.nombre] = arsMagnus;
            break;
    }
}