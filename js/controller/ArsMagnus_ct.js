var ARS_MAGNUS = "ARS_MAGNUS";
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
            arsMagnusMenores.push(arsMagnus);
            break;
        case GRUPO_ARS_MAGNUS_MAYORES:
            arsMagnusMayores.push(arsMagnus);
            break;
        case GRUPO_ARS_MAGNUS_SELLOS_DEL_DRAGON:
            arsMagnusSellosDragon.push(arsMagnus);
            break;
        case GRUPO_ARS_MAGNUS_ARMAS_IMPOSIBLES:
            arsMagnusArmasImposibles.push(arsMagnus);
            break;
    }
}

function getArsMagnus(nombreArsMagnus) {
    if (allArsMagnus[nombreArsMagnus])
        return allArsMagnus[nombreArsMagnus];
    else
        throw _l(ERR_ARS_MAGNUS_DESCONOCIDO) + ": " + nombreArsMagnus;
}

