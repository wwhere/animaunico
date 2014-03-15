var ERR_VIA_NO_DOMINADA = "Vía no dominada";
var ERR_VIA_DESCONOCIDA = "Error: Vía desconocida";

/**
 * 
 * @type {ViaMagia[]}
 */
var vias_set = [];

var VIA_LUZ = "Luz";
var VIA_LUZ_DESCRIPCION = "Esta vía es la que permite a los hechiceros controlar uno de los dos elementos superiores, la luz pura. Es la que controla las emociones positivas del hombre, como el amor, la tranquilidad o el placer. También domina el conocimiento y la detección. Su poder ofensivo y defensivo está muy equilibrado.";

var VIA_OSCURIDAD = "Oscuridad";
var VIA_OSCURIDAD_DESCRIPCION = "La oscuridad no controla la ausencia de luz, sino el puro poder de las tinieblas. Domina todas las emociones negativas como el miedo, la ira y el odio. Es también el poder de los secretos, entre los que se incluyen los conjuros de ocultación y ofuscación. Al igual que la Luz, su poder está muy equilibrado.";

var VIA_CREACION = "Creación";
var VIA_CREACION_DESCRIPCION = "El poder de la creación es la capacidad mágica de componer y alterar la realidad que rodea a los hechiceros. Sus conjuros engloban el cambio, la curación y la creación de cosas. Es una magia marcadamente defensiva.";

var VIA_DESTRUCCION = "Destrucción";
var VIA_DESTRUCCION_DESCRIPCION = "Esta vía permite utilizar el poder del flujo de almas para destruir la propia realidad. Sus conjuros afectan tanto al mundo material como al espiritual. Su poder es por naturaleza muy ofensivo.";

var VIA_FUEGO = "Fuego";
var VIA_FUEGO_DESCRIPCION = "La primera de las cuatro vías elementales menores tiene el control sobre las altas temperaturas. Sus conjuros crean calor, fuego y arrasan grandes cantidades de terreno. También reúne conjuros de sacrificio, que permiten consumir ciertos aspectos de un individuo para potenciar a cambio otros.";

var VIA_AGUA = "Agua";
var VIA_AGUA_DESCRIPCION = "El elemento del agua recoge dentro de sí muchos conceptos distintos. Es la vía que controla los líquidos y la pureza de las cosas. También representa el poder del hielo y el de las bajas temperaturas. Su poder es muy equilibrado ofensiva y defensivamente.";

var VIA_TIERRA = "Tierra";
var VIA_TIERRA_DESCRIPCION = "La Tierra es el poder del planeta, la piedra y los minerales. Es la magia más material de todas y controla las leyes de la física, como la gravedad y el magnetismo. Su influencia sobre los espíritus y lo inmaterial es muy limitada. Los conjuros de piedra recogen la magia relacionada con la resistencia, la dureza y la lentitud.";

var VIA_AIRE = "Aire";
var VIA_AIRE_DESCRIPCION = "Es la vía de lo etéreo y lo incorpóreo. Recoge los conjuros de velocidad y movimiento. Con su poder se puede alterar el espacio y transportar cuerpos de un lugar a otro. También es la vía que controla el clima y la electricidad.";

var VIA_ESENCIA = "Esencia";
var VIA_ESENCIA_DESCRIPCION = "La Esencia controla la vida y las almas. Esta vía tiene el poder sobre los espíritus y los seres naturales que pertenecen al mundo. Es también la vía de la naturaleza y los conjuros de origen druídicos.";

var VIA_ILUSION = "Ilusión";
var VIA_ILUSION_DESCRIPCION = "El poder de esta vía permite al hechicero controlar el engaño y la ilusión. Sus conjuros pueden alterar la realidad, y con ella la percepción de las personas.";

var VIA_NIGROMANCIA = "Nigromancia";
var VIA_NIGROMANCIA_DESCRIPCION = "La nigromancia es una perversión de la magia como tal. Mientras que el resto de vías se alimenta de las energías de la red de almas, la nigromancia las arranca de allí. Sus conjuros destruyen la esencia de la vida, estancando y pervirtiendo las almas que utiliza. Su poder permite devolver la vida a los muertos, destruir las almas y drenar la vida y la esencia de otros seres.";

var TODAS_VIAS = "Todas las vías";

var VIA_LIBRE_ACCESO = "Libre acceso";
var VIA_LIBRE_ACCESO_DESCRIPCION = "Conjuros de libre acceso";

/**
 * 
 * @type {string[]}
 */
var VIAS_MAGICAS = [VIA_LUZ,VIA_OSCURIDAD,VIA_CREACION,VIA_DESTRUCCION,VIA_FUEGO,VIA_AGUA,VIA_TIERRA,VIA_AIRE,VIA_ESENCIA,VIA_ILUSION,VIA_NIGROMANCIA];

var TIPO_CONJURO_EFECTO = "Efecto";
var TIPO_CONJURO_ATAQUE = "Ataque";
var TIPO_CONJURO_DEFENSA = "Defensa";
var TIPO_CONJURO_ANIMICO = "Anímico";
var TIPO_CONJURO_AUTOMATICO = "Automático";
var TIPO_CONJURO_DETECCION = "Detección";
var TIPO_CONJURO_ESCUDO = "Escudo";

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
            alert("No se puede aumentar más");
            return;
        }
    } else {
        if (nivelEnVia.getNivel() + cantidad < nivelEnVia.getNivelMinimo()) {
            alert("No se puede disminuir más");
            return;
        }
    }

    if (personaje_actual.nivelMagiaMaximo() - personaje_actual.getNivelMagiaGastado() < costeFinal) {
        alert("No tienes suficientes niveles de vía libres");
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