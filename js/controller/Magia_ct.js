/**
 * 
 * @type {ViaMagia[]}
 */
var vias_set = [];

/**
 * 
 * @type {string[]}
 */
var VIAS_MAGICAS = [VIA_LUZ,VIA_OSCURIDAD,VIA_CREACION,VIA_DESTRUCCION,VIA_FUEGO,VIA_AGUA,VIA_TIERRA,VIA_AIRE,VIA_ESENCIA,VIA_ILUSION,VIA_NIGROMANCIA];

/**
 * 
 * @param {number} nivelConjuro
 * @returns {number}
 */
function costeConjuroSuelto(nivelConjuro) {
    var nivel = 0;
    if (nivelConjuro <= 10) {
        nivel = 2;
    } else if (nivelConjuro <= 20) {
        nivel = 4;
    } else if (nivelConjuro <= 30) {
        nivel = 6;
    } else if (nivelConjuro <= 40) {
        nivel = 8;
    } else if (nivelConjuro <= 50) {
        nivel = 10;
    } else if (nivelConjuro <= 60) {
        nivel = 12;
    } else if (nivelConjuro <= 70) {
        nivel = 14;
    } else if (nivelConjuro <= 80) {
        nivel = 16;
    } else if (nivelConjuro <= 90) {
        nivel = 18;
    } else if (nivelConjuro <= 100) {
        nivel = 20;
    }
    return nivel;
}

function maxNivelConjuroSueltoPermitible() {
    var nivelesLibres = personaje_actual.nivelMagiaMaximo()-personaje_actual.getNivelMagiaGastado();

    var maxNivel = 100;

    if (nivelesLibres < 20) {
        if ((nivelesLibres % 2) == 0) {
            maxNivel = 10 * (nivelesLibres/2);
        } else {
            maxNivel = 10 * ((nivelesLibres-1)/2);
        }
    }

    if (maxNivel > personaje_actual.getNivelMaximoViaMagia()) {
        maxNivel = personaje_actual.getNivelMaximoViaMagia();
    }
    return maxNivel;
}

/**
 *
 * @param {string} nombreConjuro
 * @returns {Conjuro}
 */
function getConjuroLibreAcceso(nombreConjuro) {
    var viaLibre = getVia(VIA_LIBRE_ACCESO);

    return viaLibre.getConjuroPorNombre(nombreConjuro);
}

/**
 * 
 * @param {string} nombreVia
 * @returns {ViaMagia}
 * @throws ERR_VIA_DESCONOCIDA
 */
function getVia(nombreVia) {
    for (var i = 0; i < vias_set.length; i++) {
        if (vias_set[i].getNombre() == nombreVia) {
            return vias_set[i];
        }
    }
    throw ERR_VIA_DESCONOCIDA + ": " + nombreVia;
}

/**
 *
 * @param {number} inteligencia
 * @returns {number}
 */
function nivelMagiaMaximoPorInteligencia(inteligencia) {
    var nivelMaximo = 0;
    
    switch (inteligencia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            nivelMaximo = 0;
            break;
        case 6 :
            nivelMaximo = 10;
            break;
        case 7 :
            nivelMaximo = 20;
            break;
        case 8 :
            nivelMaximo = 30;
            break;
        case 9 :
            nivelMaximo = 40;
            break;
        case 10 :
            nivelMaximo = 50;
            break;
        case 11 :
            nivelMaximo = 75;
            break;
        case 12 :
            nivelMaximo = 100;
            break;
        case 13 :
            nivelMaximo = 150;
            break;
        case 14 :
            nivelMaximo = 200;
            break;
        case 15 :
            nivelMaximo = 300;
            break;
        case 16 :
            nivelMaximo = 400;
            break;
        case 17 :
            nivelMaximo = 500;
            break;
        case 18 :
            nivelMaximo = 600;
            break;
        case 19 :
            nivelMaximo = 700;
            break;
        case 20 :
            nivelMaximo = 800;
            break;
    }

    return nivelMaximo;
}

/**
 *
 * @param {number} valorACT
 * @returns {number}
 */
function calculaZeonMagiaInnata(valorACT) {
    var zeon = 0;
    if (valorACT <= 50) {
        zeon = 10;
    } else if (valorACT <= 70) {
        zeon = 20;
    } else if (valorACT <= 90) {
        zeon = 30;
    } else if (valorACT <= 110) {
        zeon = 40;
    } else if (valorACT <= 130) {
        zeon = 50;
    } else if (valorACT <= 150) {
        zeon = 60;
    } else if (valorACT <= 180) {
        zeon = 70;
    } else if (valorACT <= 200) {
        zeon = 80;
    } else {
        zeon = 90;
    }
    return zeon;
}

/**
 *
 * @param {{data:{via:ViaMagia,coste:number}}} event
 */
function eliminarAccesoViaMagia(event) {
    var via = event.data.via;
    var coste = event.data.coste;

    personaje_actual.removeViaMagia(via.getNombre());
    personaje_actual.addNivelMagiaGastado(-1 * coste);
}

/**
 *
 */
function accesoNuevaVia() {
    var arrayViasMagia = [];
    var i;

    for (i=0;i<VIAS_MAGICAS.length;i++) {
        var nombreVia = VIAS_MAGICAS[i];
        arrayViasMagia.push(new OpcionMostrable(_l(nombreVia),nombreVia,""));
    }

    muestraDialogoElegirOpciones(arrayViasMagia, {}, {principal: aplicarAccesoVia, isDisabled: accesoViaDisabled}, true);
}

/**
 *
 * @param {{opcion:string}} parametros
 */
function aplicarAccesoVia(parametros) {
    var nombreVia = parametros.opcion;

    personaje_actual.addNivelVia(nombreVia,2);
    personaje_actual.addNivelMagiaGastado(2 * personaje_actual.getCosteVia(nombreVia));
}

/**
 *
 * @param {{opcion:string}} parametros
 * @returns {boolean}
 */
function accesoViaDisabled(parametros) {
    var nombreVia = parametros.opcion;

    if (personaje_actual.hasVia(nombreVia)) {
        return true;
    }

    return personaje_actual.nivelMagiaMaximo() - personaje_actual.getNivelMagiaGastado() < 2 * personaje_actual.getCosteVia(nombreVia);
}

/**
 *
 * @param {Conjuro} conjuro
 * @param {number} nivel
 * @return {Conjuro}
 */
function getConjuroLibreAprendido(conjuro, nivel) {
    return new Conjuro(conjuro.getNombre(),nivel/*,conjuro.getAccion(),conjuro.getTipos(),conjuro.getEfecto(),conjuro.getCosteZeon(),conjuro.getIntReq(),conjuro.getObjetivo(),conjuro.getMantenimiento()*/,conjuro.getViasCerradas());
}

/**
 *
 * @param {{data:{nivelEnVia:NivelEnVia,unidades:string}}} event
 */
function aumentaNivelViaClick(event) {
    var nivelEnVia = event.data.nivelEnVia;
    var cantidad = event.data.unidades;

    var coste = personaje_actual.getCosteVia(nivelEnVia.getVia().getNombre());
    var costeFinal = coste * cantidad;

    if (cantidad > 0) {
        if (nivelEnVia.getNivel() + cantidad > personaje_actual.getNivelMaximoViaMagia()) {
            alert(_l(AVISO_NO_SE_PUEDE_AUMENTAR_MAS));
            return;
        }
    } else {
        if (nivelEnVia.getNivel() + cantidad < nivelEnVia.getNivelMinimo()) {
            alert(_l(AVISO_NO_SE_PUEDE_DISMINUIR_MAS));
            return;
        }
    }

    if (personaje_actual.nivelMagiaMaximo() - personaje_actual.getNivelMagiaGastado() < costeFinal) {
        alert(_l(AVISO_NIVELES_VIA_INSUFICIENTES));
        return;
    }

    personaje_actual.addNivelVia(nivelEnVia.getVia().getNombre(),cantidad);
    personaje_actual.addNivelMagiaGastado(costeFinal);
}

/**
 *
 * @param {{data:{via:ViaMagia,nivel:number}}} event
 */
function elegirConjuroLibreAcceso(event) {
    var via = event.data.via;
    var nivel = event.data.nivel;

    var arrayOpciones = [];
    var nombreVia = via.getNombre();

    var viaLibreAcceso = getVia(VIA_LIBRE_ACCESO);

    var maxNivelConjuro = (Math.floor(nivel/10) + 1) * 10;

    var conjurosLibreAcceso = viaLibreAcceso.getConjuros();

    for (var i = 0; i < conjurosLibreAcceso.length; i++) {
        if (conjurosLibreAcceso[i].getNivel() > maxNivelConjuro) {
            break;
        } else {
            arrayOpciones.push(new OpcionMostrable(_l(conjurosLibreAcceso[i].getNombre()),conjurosLibreAcceso[i].getNombre(),"",_l(UI_NIVEL)+": " + conjurosLibreAcceso[i].getNivel()));
        }
    }

    muestraDialogoElegirOpciones(arrayOpciones, {via: via, nivel: nivel}, {principal: eligeConjuroLibreAcceso, isDisabled: conjuroNoCompatibleConVia}, true);
}

/**
 *
 * @param {{via:ViaMagia,nivel:number,opcion:string}} parametros
 */
function conjuroNoCompatibleConVia(parametros) {
    var via = parametros.via;
    var nivel = parametros.nivel;
    var conjuro = getConjuroLibreAcceso(parametros.opcion);

    var nombreVia = via.getNombre();

    return !conjuro.compatibleConVia(nombreVia);
}

/**
 *
 * @param {{via:ViaMagia,nivel:number,opcion:string}} parametros
 */
function eligeConjuroLibreAcceso(parametros) {
    personaje_actual.addLibreAcceso(parametros.via.getNombre(),parametros.nivel,getConjuroLibreAcceso(parametros.opcion));
}

/**
 *
 */
function elegirConjuroSuelto() {
    var arrayOpciones = [];
    var categorias = [];
    var i;
    var j;
    var maxNivel = maxNivelConjuroSueltoPermitible();

    for (i = 0; i < vias_set.length; i++) {
        categorias.push(new OpcionMostrable(_l(vias_set[i].getNombre()),vias_set[i].getNombre(),vias_set[i].getNombre()+"_viamagia"));
        var conjuros = vias_set[i].getConjuros();
        for (j = 0; j < conjuros.length; j++) {
            if ((conjuros[j].getNivel() > maxNivel) && (vias_set[i].getNombre() != VIA_LIBRE_ACCESO)) {
                break;
            } else {
                arrayOpciones.push(new OpcionMostrable(_l(conjuros[j].getNombre()),conjuros[j].getNombre(),vias_set[i].getNombre()+"_viamagia",_l(UI_NIVEL)+": " + conjuros[j].getNivel()));
            }
        }
    }

    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: compraConjuroSuelto, isDisabled: noPuedeComprarConjuroSuelto}, true, categorias);
}

/**
 *
 * @param {{opcion:string, categoria:string}} parametros
 * @returns {boolean}
 */
function noPuedeComprarConjuroSuelto(parametros) {
    var nombreConjuro = parametros.opcion;
    var nombreViaConjuro = parametros.categoria.substring(0,parametros.categoria.indexOf("_"));

    return false;
}

/**
 *
 * @param {{opcion:string, categoria:string}} parametros
 */
function compraConjuroSuelto(parametros) {
    var nombreConjuro = parametros.opcion;
    var nombreViaConjuro = parametros.categoria.substring(0,parametros.categoria.indexOf("_"));

    var via = getVia(nombreViaConjuro);

    var conjuro = via.getConjuroPorNombre(nombreConjuro);

    var coste = costeConjuroSuelto(conjuro.getNivel());

    personaje_actual.addConjuroSuelto(conjuro);
}