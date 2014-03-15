/**
 *
 * @type {BerylShajad[]}
 */
var berylShajad_set =  [];

var ERR_ELAN_ERRONEO = "Error: Elan no conocido";

/**
 * Devuelve el BerylShajad indicado por el nombre
 * @param {string} nombre El nombre del BerylShajad que se busca
 * @returns {BerylShajad}
 * @throws ERR_ELAN_ERRONEO
 */
function getElan(nombre) {
    for (var i = 0; i < berylShajad_set.length; i++) {
        if (berylShajad_set[i].getNombre() == nombre) {
            return berylShajad_set[i];
        }
    }
    throw ERR_ELAN_ERRONEO + ": " + nombre;
}

/**
 * Aplica un don de un elan concreto al personaje actual
 * @param {DonElan} don El don de elan a otorgar al personaje actual
 * @param {string} nombreElan El nombre del BerylShajad que otorga el Don
 */
function aplicarDonElan(don,nombreElan) {
    personaje_actual.addDonElan(nombreElan, don);
}

/**
 *
 * @param {Ventaja} ventaja
 */
function prepararEleccionVentajaElan(ventaja) {

    switch (ventaja.getElegir()) {
        case ELEGIR_POD_VOL :
            var arrayOpciones = [
                new OpcionMostrable(_l(POD),POD,""),
                new OpcionMostrable(_l(VOL),VOL,"")
            ];
            muestraDialogoElegirOpciones(arrayOpciones, {ventaja: ventaja}, {principal: influjoSobrenaturalElanElegido, isDisabled: alwaysEnabled}, true);
            break;
        case ELEGIR_REPARTO_5_INT_POD_VOL :
            break;
    }
}

function influjoSobrenaturalElanElegido(parametros) {
    this.addVentaja(parametros.ventaja,0,parametros.opcion,ORIGEN_ELAN,true,new RepartoCostes(),false);
}