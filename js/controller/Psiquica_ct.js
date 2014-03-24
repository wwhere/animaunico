/**
 *
 * @type {DisciplinaPsiquica[]}
 */
var disciplinasPsiquicas_set = [];

/**
 *
 * @param {string} nombre
 * @returns {DisciplinaPsiquica}
 * @throws ERR_DISCIPLINA_DESCONOCIDA
 */
function getDisciplina(nombre) {
    for (var i = 0; i < disciplinasPsiquicas_set.length; i++) {
        if (disciplinasPsiquicas_set[i].getNombre() == nombre) {
            return disciplinasPsiquicas_set[i];
        }
    }

    throw _l(ERR_DISCIPLINA_DESCONOCIDA) + ": " + nombre;
}

/**
 *
 * @param {DisciplinaPsiquica} disciplina
 * @param {string} nombrePoder
 * @returns {PoderPsiquico}
 */
function getPoder(disciplina, nombrePoder) {
    var poderes = disciplina.getPoderesPsiquicos();
    for (var i = 0; i < poderes.length; i++) {
        if (poderes[i].getNombre() == nombrePoder) {
            return poderes[i];
        }
    }

    throw _l(ERR_PODER_DESCONOCIDO) + ": " + nombrePoder + ", " + UI_DISCIPLINA + " " + disciplina.getNombre();
}

/**
 * @throws ERR_CV_INSUFICIENTES
 */
function afinidadNuevaDisciplina() {
    if (personaje_actual.getHabilidadDePersonaje(HB_CV).valorFinalActual() - personaje_actual.getCVGastados() < 1) {
        throw _l(ERR_CV_INSUFICIENTES);
    }

    var arrayOpciones = [];

    for (i = 0; i < disciplinasPsiquicas_set.length;i++) {
        /**
         *
         * @type {DisciplinaPsiquica}
         */
        var disciplina = disciplinasPsiquicas_set[i];
        if ((!disciplina.isLibre()) && (!personaje_actual.hasDisciplina(disciplina.getNombre()))) {
            arrayOpciones.push(new OpcionMostrable(_l(disciplina.getNombre()),disciplina.getNombre(),"",_l(disciplina.getDescripcion())));
        }
    }
    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: compraAfinidadDisciplina, isDisabled: noPuedeComprarDisciplina}, true);

}

/**
 *
 * @param {{}} parametros
 * @returns {boolean}
 */
function noPuedeComprarDisciplina(parametros) {
    var nombreDisciplina = parametros.opcion;

    if (!personaje_actual.hasAccesoDisciplina(nombreDisciplina)) {
        return true;
    }

    if (personaje_actual.hasDisciplina(nombreDisciplina)) {
        return true;
    }

    if (personaje_actual.hasFlag(FLAG_PRIMERA_DISCIPLINA_OBLIGATORIA)) {
        if ((!personaje_actual.hasDisciplina(personaje_actual.disciplinaObligada)) && (personaje_actual.disciplinaObligada != nombreDisciplina)) {
            return true;
        }
    }

    return false;
}

/**
 *
 * @param {{}} parametros
 */
function compraAfinidadDisciplina(parametros) {
    var nombreDisciplina = parametros.opcion;

    personaje_actual.addDisciplina(getDisciplina(nombreDisciplina));
    personaje_actual.addCVGastados(1);
}

/**
 *
 * @param {{}} event
 */
function eliminarAfinidadDisciplina(event) {
    var disciplina = event.data.disciplina;

    personaje_actual.removeDisciplina(disciplina);
    personaje_actual.addCVGastados(-1);
}

/**
 *
 * @param {number} CVsGastados
 * @returns {number}
 */
function siguienteCostePotencial(CVsGastados) {
    var coste = 0;
    switch (CVsGastados) {
        case 0:
            coste =  1;
            break;
        case 1:
            coste =  2;
            break;
        case 3:
            coste =  3;
            break;
        case 6:
            coste =  4;
            break;
        case 10:
            coste =  5;
            break;
        case 15:
            coste =  6;
            break;
        case 21:
            coste =  7;
            break;
        case 28:
            coste =  8;
            break;
        case 36:
            coste =  9;
            break;
        case 45:
            coste =  10;
            break;
        case 55:
            coste =  -1;
            break;
    }
    return coste;
}

/**
 *
 * @param {number} CVsGastados
 * @returns {number}
 */
function previoCostePotencial(CVsGastados) {
    var coste;
    switch (CVsGastados) {
        case 0:
            coste = -1;
            break;
        case 1:
            coste = 1;
            break;
        case 3:
            coste = 2;
            break;
        case 6:
            coste = 3;
            break;
        case 10:
            coste = 4;
            break;
        case 15:
            coste = 5;
            break;
        case 21:
            coste = 6;
            break;
        case 28:
            coste = 7;
            break;
        case 36:
            coste = 8;
            break;
        case 45:
            coste = 9;
            break;
        case 55:
            coste = 10;
            break;
    }
    return coste;
}

/**
 *
 * @param {{}} parametros
 */
function dominarPoder(parametros) {
    var disciplina = parametros.disciplina;
    var nombrePoder = parametros.opcion;

    personaje_actual.addPoderDominado(disciplina,getPoder(disciplina,nombrePoder));
    personaje_actual.addCVGastados(1);
}

/**
 *
 * @param {{}} parametros
 * @returns {boolean}
 */
function noPuedeDominarPoder(parametros) {
    var disciplina = parametros.disciplina;
    var nombrePoder = parametros.opcion;
    var poder = getPoder(disciplina, nombrePoder);

    var noPuede = false;

    if (personaje_actual.hasPoderDominado(disciplina, nombrePoder)) {
        noPuede =  true;
    }

    if (personaje_actual.maxNivelDominadoDisciplina(disciplina) + 1 < poder.getNivel()) {
        noPuede =  true;
    }

    return noPuede;
}

/**
 *
 * @param {{}} event
 */
function fortalecerPoderPsiquico(event) {
    var disciplina = event.data.disciplina;
    var poder = event.data.poder;
    var cantidad = event.data.cantidad;

    personaje_actual.fortalecerPoder(disciplina, poder, cantidad);
    if (cantidad == 1) {
        personaje_actual.addCVGastados(1);
    } else {
        personaje_actual.addCVGastados(-1);
    }
}

/**
 *
 * @param {{}} event
 */
function eliminarPoderDominado(event) {
    var disciplina = event.data.disciplina;
    var poder = event.data.poder;

    personaje_actual.removePoderDominado(disciplina,poder);
    personaje_actual.addCVGastados(-1);
}

/**
 *
 * @param {{}} event
 */
function comprarInnato(event) {
    var cantidad = event.data.cantidad;

    personaje_actual.addInnatoPsiquico(cantidad);
    personaje_actual.addCVGastados(2 * cantidad);
}

/**
 *
 * @param {number} voluntad
 * @returns {number}
 */
function getPotencialPsiquicoPorVoluntad(voluntad)  {
    if (voluntad <= 4) {
        return 0;
    } else if (voluntad <= 14) {
        return (voluntad-4)*10;
    } else {
        return 100 + ((voluntad-14)*20);
    }
}