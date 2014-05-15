/**
 *
 * @type {Ventaja[]}
 */
var ventajas_set = [];

/**
 *
 * @type {Ventaja[]}
 */
var desventajas_set = [];

/**
 *
 * @type {{}}
 */
var elementosPuntosCreacion = {};

/**
 *
 * @type {string[]}
 */
var categoriasDeVentajasComprables = [
    GRUPO_CARACTERISTICAS,
    GRUPO_RESISTENCIAS,
    GRUPO_CAPACIDADES,
    GRUPO_SECUNDARIAS,
    GRUPO_LEGADOS,
    GRUPO_KI,
    GRUPO_TRASFONDO,
    GRUPO_DON,
    GRUPO_PSIQUICAS,
    GRUPO_OTRAS
];

/**
 *
 * @param {Ventaja} ventaja
 */
function addVentaja(ventaja) {
    ventajas_set.push(ventaja);
    elementosPuntosCreacion[ventaja.getNombre()] = ventaja;
}

/**
 *
 * @param {Ventaja} desventaja
 */
function addDesventaja(desventaja) {
    desventajas_set.push(desventaja);
    elementosPuntosCreacion[desventaja.getNombre()] = desventaja;
}

/**
 *
 * @param a
 * @param b
 * @returns {number}
 * @constructor
 */
function SortVentajaComprada(a, b){
    return SortPorAtributoNombre(a.ventaja, b.ventaja);
}

/**
 *
 */
function initVentajas() {
    ventajas_set.sort(SortPorAtributoNombre);
    desventajas_set.sort(SortPorAtributoNombre);

}

/**
 *
 * @param {string} nombre
 * @returns {Ventaja}
 * @throws ERR_VENTAJA_ERRONEA
 */
function getVentaja(nombre) {
    if (elementosPuntosCreacion[nombre] != undefined) {
        return elementosPuntosCreacion[nombre];
    }

    for (var i = 0; i < ventajas_set.length;i++) {
        if (ventajas_set[i].getNombre() == nombre) {
            return ventajas_set[i];
        }
    }

    for (i = 0; i < desventajas_set.length;i++) {
        if (desventajas_set[i].getNombre() == nombre) {
            return desventajas_set[i];
        }
    }

    throw _l(ERR_VENTAJA_ERRONEA);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 * @param {string} caracteristica
 * @param {number} valor
 */
function aumentaCaracteristica(coste, opcion, aplicar, caracteristica, valor) {
    if (aplicar) {
        asignarNuevoValorCaracteristica(caracteristica, {valor:personaje_actual.getCaracteristica(caracteristica)+valor});
    } else {
        asignarNuevoValorCaracteristica(caracteristica, {valor:personaje_actual.getCaracteristica(caracteristica)-valor});
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 * @param {number} valor
 */
function aumentaTamaño(coste, opcion, aplicar, valor) {
    if (aplicar) {
        personaje_actual.addTamaño(valor);
    } else {
        personaje_actual.addTamaño(-1*valor);
    }
    
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 * @param {string} resistencia
 * @param {number} valor
 * @param {string} origen
 */
function aumentaResistencia(coste, opcion, aplicar, resistencia, valor, origen) {
    var bono = new Bono(BONO_RESISTENCIA,resistencia,valor,"",false,BONO_INNATO,origen);
    if (aplicar) {
        personaje_actual.addBono(bono, false, true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 * @param {number} valor
 */
function aumentaCansancio(coste, opcion, aplicar, valor) {
    if (aplicar) {
        personaje_actual.addPuntosCansancio(valor);
    } else {
        personaje_actual.addPuntosCansancio(-1 * valor);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 * @param {number} valor
 * @param {string} origen
 */
function aumentaRegeneracion(coste, opcion, aplicar, valor, origen) {
    var bono = new Bono(BONO_REGENERACION,BONO_REGENERACION,valor,"",false,BONO_ESPECIAL, origen);
    if (aplicar) {
        personaje_actual.addBono(bono,false,true);
        lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES)
    }else {
        personaje_actual.removeBono(bono,true);
        lanzarEvento(EVENT_CHARACTER_SECCION_CAPACIDADES)
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function indetectabilidadNephilimDanjayni(coste, opcion, aplicar) {
    var bono = new Bono(BONO_KI,HAB_KI_OCULTACION_KI,30,"",false,BONO_ESPECIAL,RAZA_NEPH_DANJAYNI);
    if (aplicar) {
        personaje_actual.addHabilidadKi(HAB_KI_OCULTACION_KI, true, false);
        personaje_actual.addBono(bono,false,true);
    } else {
        personaje_actual.removeHabilidadKi(HAB_KI_OCULTACION_KI);
        personaje_actual.removeBono(bono,true);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function indetectabilidadDanjayni(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.addHabilidadKi(HAB_KI_OCULTACION_KI, true, false);
    } else {
        personaje_actual.removeHabilidadKi(HAB_KI_OCULTACION_KI);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function alasSerafinEbudan(coste, opcion, aplicar) {
    if (aplicar) {
        //TODO añadir alas como arma
        //TODO añadir tipo de movimiento volando 12
    } else {

    }
}


/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function armasJayan(coste, opcion, aplicar) {
    //TODO otorgar armas naturales segun tabla 82
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function armasNaturalesTuanDalyr(coste, opcion, aplicar) {
    //TODO otorgar armas naturales segun pag 171 LQCCN
}


/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function debilidadJayan(coste, opcion, aplicar) {
    aumentaResistencia(0,0,aplicar,RM,-20,RAZA_JAYAN);
    aumentaCaracteristica(0,0,aplicar,POD,-1);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function cuerpoDaimah(coste, opcion, aplicar) {
    aumentaCaracteristica(0,0,aplicar,AGI,1);
    aumentaCaracteristica(0,0,aplicar,DES,1);
    aumentaCaracteristica(0,0,aplicar,CON,-1);
    aumentaCaracteristica(0,0,aplicar,VOL,-1);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function perfeccionDukZarist(coste, opcion, aplicar) {
    aumentaCaracteristica(0,0,aplicar,AGI,1);
    aumentaCaracteristica(0,0,aplicar,DES,1);
    aumentaCaracteristica(0,0,aplicar,CON,1);
    aumentaCaracteristica(0,0,aplicar,FUE,1);
    aumentaCaracteristica(0,0,aplicar,INT,1);
    aumentaCaracteristica(0,0,aplicar,PER,1);
    aumentaCaracteristica(0,0,aplicar,POD,1);
    aumentaCaracteristica(0,0,aplicar,VOL,1);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function giganteNephilimJayan(coste, opcion, aplicar) {
    aumentaTamaño(0,0,aplicar,2);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function giganteJayan(coste, opcion, aplicar) {
    aumentaTamaño(0,0,aplicar,2);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function fisicoJayan(coste, opcion, aplicar) {
    aumentaCaracteristica(0,0,aplicar,FUE,2);
    aumentaCaracteristica(0,0,aplicar,CON,1);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function resistenciasExcepcionalesNephilimSylvain(coste, opcion,aplicar) {
    aumentaResistencia(0,0,aplicar,RM,10, RAZA_NEPH_SYLVAIN);
    aumentaResistencia(0,0,aplicar,RP,10, RAZA_NEPH_SYLVAIN);
    aumentaResistencia(0,0,aplicar,RE,20, RAZA_NEPH_SYLVAIN);
    aumentaResistencia(0,0,aplicar,RF,5, RAZA_NEPH_SYLVAIN);
    aumentaResistencia(0,0,aplicar,RV,5, RAZA_NEPH_SYLVAIN);
}

function resistenciasAnimicasExcepcionalesSylvain(coste, opcion, aplicar) {
    aumentaResistencia(0,0,aplicar,RM,30, RAZA_SYLVAIN);
    aumentaResistencia(0,0,aplicar,RP,30, RAZA_SYLVAIN);
}

function inmunidadEnfermedadesVenenosSylvain(coste, opcion, aplicar) {
    aumentaResistencia(0,0,aplicar,RE,20, RAZA_SYLVAIN);
    aumentaResistencia(0,0,aplicar,RV,10, RAZA_SYLVAIN);
}

function caracteristicasSobrehumanasSylvain(coste, opcion, aplicar) {
    aumentaCaracteristica(coste,opcion,aplicar,DES,1);
    aumentaCaracteristica(coste,opcion,aplicar,AGI,1);
    aumentaCaracteristica(coste,opcion,aplicar,POD,1);
    aumentaCaracteristica(coste,opcion,aplicar,INT,1);
    aumentaCaracteristica(coste,opcion,aplicar,FUE,-1);
    aumentaCaracteristica(coste,opcion,aplicar,CON,-1);
}

function obligadoComprarDon(coste, opcion, aplicar) {
    if (aplicar) {
        aplicarVentajaFinal(getVentaja(VENT_DON),2,""); //TODO si no tiene suficientes PC tendrá que limpiar sus ventajas
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function aparienciaNephilimDanjayni(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual._aparienciaDanjayni = personaje_actual.apariencia;
        if (personaje_actual.getApariencia() < 3) {
            personaje_actual.setApariencia(3);
        } else if (personaje_actual.getApariencia() > 7) {
            personaje_actual.setApariencia(7);
        }
    } else {
        personaje_actual.setApariencia(personaje_actual._aparienciaDanjayni);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function aspectoDesagradable(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual._aspectoDesagradable = personaje_actual.apariencia;
        personaje_actual.setApariencia(2);
    } else {
        personaje_actual.setApariencia(personaje_actual._aspectoDesagradable);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function resistenciasNephilimDukZarist(coste, opcion, aplicar) {
    desactivarNotificaciones();
    if (aplicar) {
        if (personaje_actual.getSexo() == SEXO_HOMBRE) {
            aumentaResistencia(0,0, aplicar,RF,20, RAZA_NEPH_DUKZARIST);
            aumentaResistencia(0,0, aplicar,RM,15, RAZA_NEPH_DUKZARIST);
        } else {
            aumentaResistencia(0,0, aplicar,RF,15, RAZA_NEPH_DUKZARIST);
            aumentaResistencia(0,0, aplicar,RM,20, RAZA_NEPH_DUKZARIST);
        }
    } else {
        aumentaResistencia(0,0, aplicar,RF,20, RAZA_NEPH_DUKZARIST);
        aumentaResistencia(0,0, aplicar,RM,15, RAZA_NEPH_DUKZARIST);
        aumentaResistencia(0,0, aplicar,RF,15, RAZA_NEPH_DUKZARIST);
        aumentaResistencia(0,0, aplicar,RM,20, RAZA_NEPH_DUKZARIST);
    }
    aumentaResistencia(0,0, aplicar,RP,15, RAZA_NEPH_DUKZARIST);
    aumentaResistencia(0,0, aplicar,RE,15, RAZA_NEPH_DUKZARIST);
    aumentaResistencia(0,0, aplicar,RV,15, RAZA_NEPH_DUKZARIST);
    activarNotificaciones();
    lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
}


/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function resistenciasDukZarist(coste, opcion, aplicar) {
    desactivarNotificaciones();
    if (aplicar) {
        if (personaje_actual.getSexo() == SEXO_HOMBRE) {
            aumentaResistencia(0,0, aplicar,RF,20, RAZA_DUKZARIST);
            aumentaResistencia(0,0, aplicar,RM,15, RAZA_DUKZARIST);
        } else {
            aumentaResistencia(0,0, aplicar,RF,15, RAZA_DUKZARIST);
            aumentaResistencia(0,0, aplicar,RM,20, RAZA_DUKZARIST);
        }
    } else {
        aumentaResistencia(0,0, aplicar,RF,20, RAZA_DUKZARIST);
        aumentaResistencia(0,0, aplicar,RM,15, RAZA_DUKZARIST);
        aumentaResistencia(0,0, aplicar,RF,15, RAZA_DUKZARIST);
        aumentaResistencia(0,0, aplicar,RM,20, RAZA_DUKZARIST);
    }
    aumentaResistencia(0,0, aplicar,RP,15, RAZA_DUKZARIST);
    aumentaResistencia(0,0, aplicar,RE,15, RAZA_DUKZARIST);
    aumentaResistencia(0,0, aplicar,RV,15, RAZA_DUKZARIST);
    activarNotificaciones();
    lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function fuegoNephilimDukZarist(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_PRIMERA_DISCIPLINA_OBLIGATORIA);
        personaje_actual.disciplinaObligada = DISCIPLINA_PIROQUINESIS;
    } else {
        personaje_actual.removeFlag(FLAG_PRIMERA_DISCIPLINA_OBLIGATORIA);
        delete personaje_actual.disciplinaObligada;
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function obligacionDukZarist(coste, opcion, aplicar) {
    if (aplicar) {
        //TODO debe desarrollar don o acceso psíquico
        personaje_actual.setFlag(FLAG_PRIMERA_DISCIPLINA_OBLIGATORIA);
        personaje_actual.disciplinaObligada = DISCIPLINA_PIROQUINESIS;
    } else {
        personaje_actual.removeFlag(FLAG_PRIMERA_DISCIPLINA_OBLIGATORIA);
        delete personaje_actual.disciplinaObligada;
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function repetirUnaTirada(coste, opcion, aplicar) {
    var nuevaTirada = d10();
    var minCaracteristica = 100;
    for (var i = 0; i < CARACTERISTICAS_NOMBRES.length; i++) {
        if (minCaracteristica > personaje_actual.getCaracteristica(CARACTERISTICAS_NOMBRES[i])) {
            minCaracteristica = personaje_actual.getCaracteristica(CARACTERISTICAS_NOMBRES[i]);
        }
    }

    var div = $("<div></div>");


    div.append(_l(UI_RESULTADO_DE_TIRADA) + nuevaTirada);
    if (nuevaTirada < minCaracteristica) {
        nuevaTirada = minCaracteristica;

        div.append("<br>" + _l(UI_AJUSTADO_AL_MINIMO) + ": " + nuevaTirada);
    }
    div.append("<br>");

    muestraDialogoElegirCaracteristica(asignarNuevoValorCaracteristica,{valor:nuevaTirada},div);
}

/**
 *
 * @param {string} caracteristica
 * @param {{}} parametros
 */
function asignarNuevoValorCaracteristica(caracteristica,parametros) {
    personaje_actual.setCaracteristica(caracteristica,parametros.valor);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function sumarUnoAUnaCaracteristica(coste, opcion, aplicar) {
    if (aplicar) {
        asignarNuevoValorCaracteristica(opcion,{valor:personaje_actual.getCaracteristica(opcion)+1});
    } else {
        asignarNuevoValorCaracteristica(opcion,{valor:personaje_actual.getCaracteristica(opcion)-1});
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function restarDosAUnaCaracteristica(coste, opcion, aplicar) {
    if (aplicar) {
        asignarNuevoValorCaracteristica(opcion,{valor:personaje_actual.getCaracteristica(opcion)-2});
    } else {
        asignarNuevoValorCaracteristica(opcion,{valor:personaje_actual.getCaracteristica(opcion)+2});
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function saludEnfermiza(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_RE_A_MITAD);
    } else {
        personaje_actual.removeFlag(FLAG_RE_A_MITAD);
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function vulnerabilidadMagia(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_RM_A_MITAD);
    } else {
        personaje_actual.removeFlag(FLAG_RM_A_MITAD);
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function debilidadFisica(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_RF_A_MITAD);
    } else {
        personaje_actual.removeFlag(FLAG_RF_A_MITAD);
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function vulnerabilidadVenenos(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_RV_A_MITAD);
    } else {
        personaje_actual.removeFlag(FLAG_RV_A_MITAD);
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function cambiarUnaCaracteristicaPorNueve(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual["_cambiarPorNueve"+opcion] = personaje_actual.getCaracteristica(opcion);
        asignarNuevoValorCaracteristica(opcion,{valor:9});
    } else {
        asignarNuevoValorCaracteristica(opcion,{valor:personaje_actual["_cambiarPorNueve"+opcion]});
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function resistenciaFisicaExcepcional(coste, opcion, aplicar) {
    desactivarNotificaciones();
    aumentaResistencia(0,0, aplicar,RF,25*coste, VENT_RESISTENCIA_FISICA_EXCEPCIONAL);
    aumentaResistencia(0,0, aplicar,RE,25*coste, VENT_RESISTENCIA_FISICA_EXCEPCIONAL);
    aumentaResistencia(0,0, aplicar,RV,25*coste, VENT_RESISTENCIA_FISICA_EXCEPCIONAL);
    activarNotificaciones();
    lanzarEvento(EVENT_CHARACTER_SECCION_RESISTENCIAS);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function resistenciaMagicaExcepcional(coste, opcion, aplicar) {
    aumentaResistencia(0,0, aplicar,RM,25*coste, VENT_RESISTENCIA_MAGICA_EXCEPCIONAL);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function resistenciaPsiquicaExcepcional(coste, opcion, aplicar) {
    aumentaResistencia(0,0, aplicar,RP,25*coste, VENT_RESISTENCIA_PSIQUICA_EXCEPCIONAL);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function accesoPsiquicoBasico(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.addAccesoDisciplina(opcion);
        personaje_actual.setFlag(FLAG_PSIQUICO);
    } else {
        var accesoLimpio = [];
        var accesoActual = personaje_actual.getAccesoDisciplinas();
        for (var i = 0; i < accesoActual.length;i++) {
            if (accesoActual[i] != opcion) {
                accesoLimpio.push(personaje_actual.addAccesoDisciplina(accesoActual[i]));
            }
        }
        personaje_actual.setAccesoDisciplinas(accesoLimpio);
        personaje_actual.removeFlag(FLAG_PSIQUICO);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function accesoPsiquicoCompleto(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_ACCESO_TODAS_DISCIPLINAS);
        personaje_actual.setFlag(FLAG_PSIQUICO);
    } else {
        personaje_actual.removeFlag(FLAG_ACCESO_TODAS_DISCIPLINAS);
        personaje_actual.removeFlag(FLAG_PSIQUICO);
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function fondosIniciales(coste, opcion, aplicar) {
    var mo = 0;
    if (coste == 1) {
        mo = 2000;
    } else if (coste == 2) {
        mo = 5000;
    } else if (coste == 3) {
        mo = 10000;
    }
    if (aplicar) {
        personaje_actual.addDinero(mo,0,0);
    } else {
        personaje_actual.addDinero(-1 * mo,0,0);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function deudas(coste, opcion, aplicar) {
    personaje_actual._dinero_por_deudas = personaje_actual.getDinero().totalEnCobre();
    if (aplicar) {
        personaje_actual.addDinero(0,0,-1*personaje_actual._dinero_por_deudas);
    } else {
        personaje_actual.addDinero(0,0,personaje_actual._dinero_por_deudas);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function aptoEnUnCampo(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.addCosteReducido(new Coste(opcion, 1, false, UDS_PD));
    } else {
        personaje_actual.removeCosteReducido(opcion,1);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function aptoEnUnaMateria(coste, opcion,aplicar) {
    if (aplicar) {
        personaje_actual.addCosteReducido(new Coste(opcion, coste, false, UDS_PD));
    } else {
        personaje_actual.removeCosteReducido(opcion,coste);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function sentidosAgudos(coste, opcion,aplicar) {
    var valorBono = 50;
    if (personaje_actual.hasFlag(FLAG_SENTIDO_DE_ANIMAL)) {
        valorBono = 80;
    }
    var bonoA = new Bono(BONO_HABILIDAD,HB_ADVERTIR,valorBono,"",false,BONO_ESPECIAL,VENT_SENTIDOS_AGUDOS);
    var bonoB = new Bono(BONO_HABILIDAD,HB_BUSCAR,valorBono,"",false,BONO_ESPECIAL,VENT_SENTIDOS_AGUDOS);

    desactivarNotificaciones();
    if (aplicar) {
        personaje_actual.addBono(bonoA,false,false);
        personaje_actual.addBono(bonoB,false,false);
    } else {
        personaje_actual.removeBono(bonoA, true);
        personaje_actual.removeBono(bonoB, true);
    }
    activarNotificaciones();
    lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function don(coste, opcion,aplicar) {
    aumentaResistencia(0,0,aplicar,RM,10, VENT_DON);
    verLoSobrenatural(coste,opcion,aplicar);
    if (aplicar) {
        personaje_actual.setFlag(FLAG_DON);
        seleccionarTeoremaMagico();
    } else {
        personaje_actual.removeFlag(FLAG_DON);
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA)
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function donIncompleto(coste, opcion,aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_DON);
        seleccionarTeoremaMagico();
    } else {
        personaje_actual.removeFlag(FLAG_DON);
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA)
}


function esenciaSheele(coste, opcion,aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_ESENCIA_SHEELE);
    } else {
        personaje_actual.removeFlag(FLAG_ESENCIA_SHEELE);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function verLoSobrenatural(coste, opcion,aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_DESARROLLAR_VALORACION_MAGICA);
    } else {
        personaje_actual.removeFlag(FLAG_DESARROLLAR_VALORACION_MAGICA);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function aprendizajeInnato(coste, opcion,aplicar) {
    var bono = new Bono(BONO_HABILIDAD,opcion,10*coste,"",true,BONO_CATEGORIA,VENT_APRENDIZAJE_INNATO);
    if (aplicar) {
        personaje_actual.addBono(bono,false, true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function aprendizajeInnatoCampo(coste, opcion,aplicar) {
    var valorBono = 0;
    if (coste == 2) {
        valorBono = 5;
    } else {
        valorBono = 10;
    }

    var bono = new Bono(BONO_HABILIDAD,opcion,valorBono,"",true,BONO_CATEGORIA,VENT_APRENDIZAJE_INNATO_EN_UN_CAMPO);
    if (aplicar) {
        personaje_actual.addBono(bono,false,true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function conocedorTodasMaterias(coste, opcion,aplicar) {
    var i;
    var grupoHab;
    var habi;

    if (aplicar) {
        personaje_actual.setFlag(FLAG_CONOCEDOR_TODAS_MATERIAS);
        for ( i = 0; i < habilidades_secundarias.length;i++) {
            grupoHab = habilidades_secundarias[i];
            for (var j= 0;j<grupoHab.length;j++) {
                habi = getHabilidad(grupoHab[j]);
                personaje_actual.addBono(new Bono(BONO_HABILIDAD,habi.getNombre(),10,"",false,BONO_ESPECIAL,VENT_CONOCEDOR_DE_TODAS_LAS_MATERIAS),false,false);
            }
        }
    } else {
        personaje_actual.removeFlag(FLAG_CONOCEDOR_TODAS_MATERIAS);
        for ( i = 0; i < habilidades_secundarias.length;i++) {
            grupoHab = habilidades_secundarias[i];
            for (var j= 0;j<grupoHab.length;j++) {
                habi = getHabilidad(grupoHab[j]);
                personaje_actual.removeBono(new Bono(BONO_HABILIDAD, habi.getNombre(), 10, "", false, BONO_ESPECIAL, VENT_CONOCEDOR_DE_TODAS_LAS_MATERIAS), false);
            }
        }
    }

    lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function reflejosRapidos(coste, opcion,aplicar) {
    var valorBono = 0;
    if (coste == 1) {
        valorBono = 25;
    } else if (coste == 2) {
        valorBono = 45;
    } else {
        valorBono = 60;
    }

    var bono = new Bono(BONO_TURNO,BONO_TURNO,valorBono,"",false,BONO_ESPECIAL,VENT_REFLEJOS_RAPIDOS);
    if (aplicar) {
        personaje_actual.addBono(bono,false,true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function reaccionLenta(coste, opcion,aplicar) {
    var valorBono = 30*coste;

    var bono = new Bono(BONO_TURNO,BONO_TURNO,valorBono,"",false,BONO_ESPECIAL,DESV_REACCION_LENTA);
    if (aplicar) {
        personaje_actual.addBono(bono,false,true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function ajusteTamaño(coste, opcion,aplicar) {
    aumentaTamaño(coste,opcion,aplicar,parseInt(opcion));
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function armaduraNatural(coste, opcion,aplicar) {
    if (aplicar) {
        personaje_actual.setArmaduraNatural(sumarArmadura(personaje_actual.getArmaduraNatural().getTAs(),[2,2,2,2,2,2,0]));
    } else {
        personaje_actual.setArmaduraNatural(sumarArmadura(personaje_actual.getArmaduraNatural().getTAs(),[-2,-2,-2,-2,-2,-2,0]));
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function armaduraMistica(coste, opcion,aplicar) {
    if (aplicar) {
        personaje_actual.setArmaduraNatural(sumarArmadura(personaje_actual.getArmaduraNatural().getTAs(),[0,0,0,0,0,0,4]));
    } else {
        personaje_actual.setArmaduraNatural(sumarArmadura(personaje_actual.getArmaduraNatural().getTAs(),[0,0,0,0,0,0,-4]));
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function maestroMarcial(coste, opcion,aplicar) {
    var bono = new Bono(BONO_HABILIDAD,HB_CM,40*coste,"",false,BONO_ESPECIAL,VENT_MAESTRO_MARCIAL);
    if (aplicar) {
        personaje_actual.addBono(bono,false,true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function infatigable(coste, opcion,aplicar) {
    aumentaCansancio(coste,opcion,aplicar,3*coste);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function exhausto(coste, opcion, aplicar) {
    aumentaCansancio(coste,opcion,aplicar,-1);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function curtido(coste, opcion,aplicar) {
    if (aplicar) {
        personaje_actual.addPX(50*coste);
    } else {
        personaje_actual.addPX(-50*coste);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function elan(coste, opcion,aplicar) {
    var valorElan = 0;

    if (coste == 1) {
        valorElan = 20;
    } else if (coste == 2) {
        valorElan = 40;
    } else {
        valorElan = 50;
    }
    if (aplicar) {
        personaje_actual.addElan(new Elan(opcion,valorElan));
    } else {
        personaje_actual.removeElan(opcion);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function aptoDesarrolloMagia(coste, opcion,aplicar) {
    var bono = new Bono(BONO_INT_APRENDER_CONJURO,BONO_INT_APRENDER_CONJURO,3,"",false,BONO_ESPECIAL,VENT_APTO_PARA_EL_DESARROLLO_DE_LA_MAGIA);
    if (aplicar) {
        personaje_actual.addBono(bono,false,true);
    } else {
        personaje_actual.removeBono(bono,true);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function magiaInnataMejorada(coste, opcion,aplicar) {
    var bono = new Bono(BONO_MAGIA_INNATA,BONO_MAGIA_INNATA,10*coste,"",false,BONO_ESPECIAL,VENT_MAGIA_INNATA_MEJORADA);
    if (aplicar) {
        personaje_actual.addBono(bono,false,true);
    } else {
        personaje_actual.removeBono(bono,true);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function conocimientoNaturalVia(coste, opcion,aplicar) {
    var bono = new Bono(BONO_HABILIDAD,HB_NIVEL_DE_VIA,40,opcion,false,BONO_ESPECIAL,VENT_CONOCIMIENTO_NATURAL_DE_VIA);
    if (aplicar) {
        personaje_actual.addBono(bono,false,false);
        personaje_actual.addNivelMagiaGastado(40);
        personaje_actual.addNivelVia(opcion, 40, true);
    } else {
        personaje_actual.removeBono(bono,false);
        personaje_actual.addNivelMagiaGastado(-40);
        personaje_actual.addNivelVia(opcion, -40, true);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function lazoExistencial(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_LAZO_EXISTENCIAL);
    } else {
        personaje_actual.removeFlag(FLAG_LAZO_EXISTENCIAL);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function resistenciaCelestialElan(coste, opcion, aplicar) {
    var bonoRF = new Bono(BONO_RESISTENCIA,RF,Math.floor(personaje_actual.getSincronizacionElan(BERYL_MIKAEL)/2),"",false,BONO_ESPECIAL,ELAN_VENTAJA_MIKAEL_RESISTENCIA_CELESTIAL);
    var bonoRE = new Bono(BONO_RESISTENCIA,RE,Math.floor(personaje_actual.getSincronizacionElan(BERYL_MIKAEL)/2),"",false,BONO_ESPECIAL,ELAN_VENTAJA_MIKAEL_RESISTENCIA_CELESTIAL);
    var bonoRV = new Bono(BONO_RESISTENCIA,RV,Math.floor(personaje_actual.getSincronizacionElan(BERYL_MIKAEL)/2),"",false,BONO_ESPECIAL,ELAN_VENTAJA_MIKAEL_RESISTENCIA_CELESTIAL);
    var bonoRM = new Bono(BONO_RESISTENCIA,RM,Math.floor(personaje_actual.getSincronizacionElan(BERYL_MIKAEL)/2),"",false,BONO_ESPECIAL,ELAN_VENTAJA_MIKAEL_RESISTENCIA_CELESTIAL);
    var bonoRP = new Bono(BONO_RESISTENCIA,RP,Math.floor(personaje_actual.getSincronizacionElan(BERYL_MIKAEL)/2),"",false,BONO_ESPECIAL,ELAN_VENTAJA_MIKAEL_RESISTENCIA_CELESTIAL);
    if (aplicar) {
        personaje_actual.addBono(bonoRF,true,true);
        personaje_actual.addBono(bonoRE,true,true);
        personaje_actual.addBono(bonoRV,true,true);
        personaje_actual.addBono(bonoRM,true,true);
        personaje_actual.addBono(bonoRP,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:resistenciaCelestialElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bonoRF,true);
        personaje_actual.removeBono(bonoRE,true);
        personaje_actual.removeBono(bonoRV,true);
        personaje_actual.removeBono(bonoRM,true);
        personaje_actual.removeBono(bonoRP,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:resistenciaCelestialElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {{}} event
 */
function actualizaVentajaDependienteElan(event) {
    event.data.callback(0,"",true);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function liderElan(coste, opcion, aplicar) {
    var bono = new Bono(BONO_HABILIDAD,HB_LIDERAZGO,Math.floor(personaje_actual.getSincronizacionElan(BERYL_AZRAEL)),"",false,BONO_ESPECIAL,ELAN_AZRAEL_LIDER);
    if (aplicar) {
        personaje_actual.addBono(bono,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:liderElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bono,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:liderElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function valorHeroesElan(coste, opcion, aplicar) {
    var bono = new Bono(BONO_HABILIDAD,HB_FRIALDAD,Math.floor(personaje_actual.getSincronizacionElan(BERYL_AZRAEL)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_AZRAEL_VALOR_HEROES);
    if (aplicar) {
        personaje_actual.addBono(bono,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:valorHeroesElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bono,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:valorHeroesElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function guerreroAzraelElan(coste, opcion, aplicar) {
    aumentaCaracteristica(coste, opcion, aplicar, FUE, 1);
    aumentaCaracteristica(coste, opcion, aplicar, DES, 1);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function esteticaElan(coste, opcion, aplicar) {
    var bono = new Bono(BONO_HABILIDAD,HB_ESTILO,Math.floor(personaje_actual.getSincronizacionElan(BERYL_BARAKIEL)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_BARAKIEL_SABER_DE_LACIENCIA);
    if (aplicar) {
        personaje_actual.addBono(bono,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:esteticaElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bono,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:esteticaElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function saberCienciaElan(coste, opcion, aplicar) {
    var bono = new Bono(BONO_HABILIDAD,HB_CIENCIA,Math.floor(personaje_actual.getSincronizacionElan(BERYL_BARAKIEL)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_BARAKIEL_SABER_DE_LACIENCIA);
    if (aplicar) {
        personaje_actual.addBono(bono,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:saberCienciaElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bono,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:saberCienciaElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function bellezaPerfectaElan(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual._bellezaPerfectaElan = personaje_actual.getApariencia();
        personaje_actual.setApariencia(10);
    } else {
        personaje_actual.setApariencia(personaje_actual._bellezaPerfectaElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function esenciaBarakielElan(coste, opcion, aplicar) {
    //TODO ignorar desventajas y debilidades
    if (aplicar) {
        personaje_actual.setFlag(FLAG_IGNORAR_DESVENTAJAS);
    } else {
        personaje_actual.removeFlag(FLAG_IGNORAR_DESVENTAJAS);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function divinidadCuerpoAlmaElan(coste, opcion, aplicar) {
    var i;
    var carac;
    var valor;

    if (aplicar) {
        for (i = 0; i < CARACTERISTICAS_NOMBRES.length; i++) {
            carac = CARACTERISTICAS_NOMBRES[i];
            valor = 10 + personaje_actual.getRaza().getBonoCaracteristica(carac);

            personaje_actual["_divinidadCuerpoAlmaElan" + carac] = valor - personaje_actual.getCaracteristica(carac);

            if (valor > personaje_actual.getCaracteristica(carac)) {
                personaje_actual.setCaracteristica(carac,valor);
            }
        }
    } else {
        for (i = 0; i < CARACTERISTICAS_NOMBRES.length; i++) {
            carac = CARACTERISTICAS_NOMBRES[i];
            valor = personaje_actual["_divinidadCuerpoAlmaElan" + carac];
            if (valor > 0) {
                personaje_actual.setCaracteristica(carac,personaje_actual.getCaracteristica(carac)-valor);
            }
        }
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function aptitudArtisticaGabriel(coste, opcion, aplicar) {
    var bonoMusica = new Bono(BONO_HABILIDAD,HB_MUSICA,Math.floor(personaje_actual.getSincronizacionElan(BERYL_GABRIEL)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_GABRIEL_APTITUD_ARTISTICA);
    var bonoArte = new Bono(BONO_HABILIDAD,HB_ARTE,Math.floor(personaje_actual.getSincronizacionElan(BERYL_GABRIEL)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_GABRIEL_APTITUD_ARTISTICA);
    if (aplicar) {
        personaje_actual.addBono(bonoMusica,true,true);
        personaje_actual.addBono(bonoArte,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:aptitudArtisticaGabriel},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bonoMusica,true);
        personaje_actual.removeBono(bonoArte,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:aptitudArtisticaGabriel},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function conocimientoNaturalezaElan(coste, opcion, aplicar) {
    var bonoHerbolaria = new Bono(BONO_HABILIDAD,HB_HERBOLARIA,Math.floor(personaje_actual.getSincronizacionElan(BERYL_RAFAEL)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_RAFAEL_CONOCIMIENTO_NATURALEZA);
    if (aplicar) {
        personaje_actual.addBono(bonoHerbolaria,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:conocimientoNaturalezaElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bonoHerbolaria,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:conocimientoNaturalezaElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function conocimientoAnimalElan(coste, opcion, aplicar) {
    var bonoAnimales = new Bono(BONO_HABILIDAD,HB_ANIMALES,Math.floor(personaje_actual.getSincronizacionElan(BERYL_RAFAEL)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_RAFAEL_CONOCIMIENTO_ANIMAL);
    if (aplicar) {
        personaje_actual.addBono(bonoAnimales,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:conocimientoAnimalElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bonoAnimales,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:conocimientoAnimalElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function esenciaSobrenaturalElan(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual._esenciaSobrenaturalElan = personaje_actual.getGnosis();
        personaje_actual.setGnosis(30);
    } else {
        personaje_actual.setGnosis(personaje_actual._esenciaSobrenaturalElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function comunionUrielElan(coste, opcion, aplicar) {
    aumentaCaracteristica(coste, opcion, aplicar, POD, 1);
    aumentaCaracteristica(coste, opcion, aplicar, DES, 1);
    aumentaCaracteristica(coste, opcion, aplicar, VOL, 1);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function poderOscuroElan(coste, opcion, aplicar) {
    aumentaCaracteristica(coste, opcion, aplicar, POD, 1);
    aumentaCaracteristica(coste, opcion, aplicar, INT, 1);
    aumentaCaracteristica(coste, opcion, aplicar, VOL, 1);
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function conocimientoSobrenaturalElan(coste, opcion, aplicar) {
    var bonoAnimales = new Bono(BONO_HABILIDAD,HB_OCULTISMO,Math.floor(personaje_actual.getSincronizacionElan(SHAJAD_EREBUS)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_EREBUS_CONOCIMIENTO_SOBRENATURAL);
    if (aplicar) {
        personaje_actual.addBono(bonoAnimales,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:conocimientoSobrenaturalElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bonoAnimales,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:conocimientoSobrenaturalElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function presenciaTenebrosaElan(coste, opcion, aplicar) {
    var bonoAnimales = new Bono(BONO_HABILIDAD,HB_INTIMIDAR,Math.floor(personaje_actual.getSincronizacionElan(SHAJAD_EREBUS)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_EREBUS_PRESENCIA_TENEBROSA);
    if (aplicar) {
        personaje_actual.addBono(bonoAnimales,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:presenciaTenebrosaElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bonoAnimales,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:presenciaTenebrosaElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function influjoSobrenaturalElan(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setCaracteristica(opcion,personaje_actual.getCaracteristica(opcion)+2);
    } else {
        personaje_actual.setCaracteristica(opcion,personaje_actual.getCaracteristica(opcion)-2);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function demiurgoElan(coste, opcion, aplicar) {
    //TODO 5 puntos a repartir entre Inteligencia, Poder y Voluntad
}


/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function donPoliticaElan(coste, opcion, aplicar) {
    var bonoPersuasion = new Bono(BONO_HABILIDAD,HB_PERSUASION,Math.floor(personaje_actual.getSincronizacionElan(SHAJAD_JEDAH)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_JEDAH_DON_POLITICA);
    var bonoLiderazgo = new Bono(BONO_HABILIDAD,HB_LIDERAZGO,Math.floor(personaje_actual.getSincronizacionElan(SHAJAD_JEDAH)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_JEDAH_DON_POLITICA);
    if (aplicar) {
        personaje_actual.addBono(bonoPersuasion,true,true);
        personaje_actual.addBono(bonoLiderazgo,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:donPoliticaElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bonoPersuasion,true);
        personaje_actual.removeBono(bonoLiderazgo,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:donPoliticaElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function poderConocimientoElan(coste, opcion, aplicar) {
    for (var i = 0; i < habilidades_intelectuales_set.length; i++) {
        var bono = new Bono(BONO_HABILIDAD,habilidades_intelectuales_set[i],Math.floor(personaje_actual.getSincronizacionElan(SHAJAD_JEDAH)/2),"",false,BONO_ESPECIAL,ELAN_VENTAJA_JEDAH_PODER_CONOCIMIENTO);
        if (aplicar) {
            personaje_actual.addBono(bono,true,false);
        } else {
            personaje_actual.removeBono(bono,false);
        }
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);

    if (aplicar) {
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:poderConocimientoElan},actualizaVentajaDependienteElan);
    } else {
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:serenidadMelancoliaElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function serenidadMelancoliaElan(coste, opcion, aplicar) {
    var bonoFrialdad = new Bono(BONO_HABILIDAD,HB_FRIALDAD,Math.floor(personaje_actual.getSincronizacionElan(SHAJAD_MESEGUIS)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_MESEGUIS_SERENIDAD_MELANCOLIA);
    var bonoResistirDolor = new Bono(BONO_HABILIDAD,HB_RESISTENCIA_DOLOR,Math.floor(personaje_actual.getSincronizacionElan(SHAJAD_MESEGUIS)),"",false,BONO_ESPECIAL,ELAN_VENTAJA_MESEGUIS_SERENIDAD_MELANCOLIA);
    if (aplicar) {
        personaje_actual.addBono(bonoFrialdad,true,true);
        personaje_actual.addBono(bonoResistirDolor,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:serenidadMelancoliaElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bonoFrialdad,true);
        personaje_actual.removeBono(bonoResistirDolor,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:serenidadMelancoliaElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function resistenteElan(coste, opcion, aplicar) {
    var bonoRF = new Bono(BONO_RESISTENCIA,RF,Math.floor(personaje_actual.getSincronizacionElan(SHAJAD_NOAH)/2),"",false,BONO_ESPECIAL,ELAN_VENTAJA_NOAH_RESISTENTE);
    if (aplicar) {
        personaje_actual.addBono(bonoRF,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:resistenteElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bonoRF,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:resistenteElan},actualizaVentajaDependienteElan);
    }
}

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function dañoIncrementadoElan(coste, opcion, aplicar) {
    var bonoDaño = new Bono(BONO_DAÑO,BONO_DAÑO,Math.floor(personaje_actual.getSincronizacionElan(SHAJAD_ZEMIAL)/2),"",false,BONO_ESPECIAL,ELAN_VENTAJA_ZEMIAL_DAÑO_INCREMENTADO);
    if (aplicar) {
        personaje_actual.addBono(bonoDaño,true,true);
        DISPATCHER.on(EVENT_CHARACTER_SECCION_ELAN,{callback:dañoIncrementadoElan},actualizaVentajaDependienteElan);
    } else {
        personaje_actual.removeBono(bonoDaño,true);
        DISPATCHER.off(EVENT_CHARACTER_SECCION_ELAN,{callback:dañoIncrementadoElan},actualizaVentajaDependienteElan);
    }
}

//region Pantalla del Director


/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function dificilDeMatar(coste, opcion, aplicar) {
    var bono = new Bono(BONO_PV,BONO_PV,10*coste,"", true,BONO_INNATO,VENT_DIFICIL_DE_MATAR);
    if (aplicar) {
        personaje_actual.addBono(bono, false, true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

function sentidoDelCombate(coste, opcion, aplicar) {
    var bono = new Bono(BONO_HABILIDAD,opcion,5,"",true,BONO_INNATO,VENT_SENTIDO_DEL_COMBATE);

    if (aplicar) {
        personaje_actual.addBono(bono, false, true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

function bonificadorNaturalIncrementado(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_BONO_NATURAL_EXTRA);
    } else {
        personaje_actual.removeFlag(FLAG_BONO_NATURAL_EXTRA);
    }
}

function usoDeArmadura(coste, opcion, aplicar) {
    var bono = new Bono(BONO_HABILIDAD,HB_ARMADURA,5*coste,"",true,BONO_INNATO,VENT_USO_DE_ARMADURA);

    if (aplicar) {
        personaje_actual.addBono(bono, false, true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

function versatil(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_VERSATIL);
    } else {
        personaje_actual.removeFlag(FLAG_VERSATIL);
    }
}

function habilidoso(coste, opcion, aplicar) {
    var bono = new Bono(BONO_HABILIDAD,HB_TRUCOS_MANOS,30,"",true,BONO_ESPECIAL,VENT_HABILIDOSO);

    if (aplicar) {
        personaje_actual.addBono(bono, false, true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

function naturalezaMagica(coste, opcion, aplicar) {
    var bono = new Bono(BONO_HABILIDAD,HB_ZEON,50*coste,"",true,BONO_INNATO,VENT_NATURALEZA_MAGICA);

    if (aplicar) {
        personaje_actual.addBono(bono, false, true);
    } else {
        personaje_actual.removeBono(bono, true);
    }
}

function magiaOpuesta(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_MAGIA_OPUESTA);
    } else {
        personaje_actual.removeFlag(FLAG_MAGIA_OPUESTA);
    }
}

function versatibilidadMetamagica(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_VERSATIBILIDAD_METAMAGICA);
    } else {
        personaje_actual.removeFlag(FLAG_VERSATIBILIDAD_METAMAGICA);
    }
}



function sinBonificadorNatural(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_SIN_BONIFICADOR_NATURAL);
    } else {
        personaje_actual.removeFlag(FLAG_SIN_BONIFICADOR_NATURAL);
    }
}

function novato(coste, opcion, aplicar) {
    //TODO restar 100 px. Si es nivel 1, pasa a ser nivel 0
}

//endregion Pantalla del Director

/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function kiImperceptible(coste, opcion,aplicar) {
    var bono = new Bono(BONO_KI,HAB_KI_OCULTACION_KI,10,"",true,BONO_ESPECIAL,VENT_KI_IMPERCEPTIBLE);
    if (aplicar) {
        personaje_actual.addBono(bono,false,true);
    } else {
        personaje_actual.removeBono(bono,true);
    }
}

function aprendizajeMagicoGradual(coste, opcion,aplicar) {
    var bono = new Bono(BONO_HABILIDAD,HB_NIVEL_DE_VIA,5,"",true,BONO_ESPECIAL,VENT_APRENDIZAJE_MAGICO_GRADUAL);
    if (aplicar) {
        personaje_actual.addBono(bono,false,true);
    } else {
        personaje_actual.removeBono(bono,true);
    }
}




function poderInnato(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_PODER_INNATO);
    } else {
        personaje_actual.removeFlag(FLAG_PODER_INNATO);
    }
}

function tecnicasDesvinculadas(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_TECNICAS_DESVINCULADAS);
    } else {
        personaje_actual.removeFlag(FLAG_TECNICAS_DESVINCULADAS);
    }
}

function percepcionDelKi(coste, opcion,aplicar) {
    var bono = new Bono(BONO_KI,HAB_KI_DETECCION_KI,10,"",true,BONO_ESPECIAL,VENT_PERCEPCION_DEL_KI);
    if (aplicar) {
        personaje_actual.addBono(bono,false,true);
    } else {
        personaje_actual.removeBono(bono,true);
    }
}

function limiteDual(coste, opcion,aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_LIMITE_DUAL);
    } else {
        personaje_actual.removeFlag(FLAG_LIMITE_DUAL);
        if (personaje_actual.getLimite().length > 1) {
            anularLimite({data:{limite:personaje_actual.limite[1]}});
        }
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_KI);
}


function posicionSocial(coste, opcion, aplicar) {
    var origen = getOrigen(personaje_actual.getOrigen());
    if (aplicar) {
        personaje_actual._viejaClase = personaje_actual.claseSocial;
        if (origen.clasePosicionSocial.length > 1) {
            personaje_actual.setClaseSocial(opcion);
        } else {
            personaje_actual.setClaseSocial(origen.clasePosicionSocial[0].nombre);
        }
    } else {
        personaje_actual.setClaseSocial(personaje_actual._viejaClase);
    }
}

function raicesCulturales(coste, opcion, aplicar) {
    /**
     *
     * @type {Origen}
     */
    var origen = getOrigen(personaje_actual.getOrigen());

    if (origen) {
        /**
         *
         * @type {{habilidad:string,bono:number,[especializacion]:string,[opciones]:string[]}[]}
         */
        var bonos = getBonosRaicesCulturales(personaje_actual.getOrigen(),personaje_actual.getEstatus());
        for (var i = 0; i < bonos.length; i++) {
            var esteBono = bonos[i];
            var habilidad = esteBono.habilidad;
            var bonus = esteBono.bono;
            var espe = "";
            if (esteBono.especializacion) {
                espe = esteBono.especializacion;
            }
            if (habilidad == ELEGIR) {
                var arrayOpciones = [];
                for (var j=0; j < esteBono.opciones.length;j++) {
                    arrayOpciones.push(new OpcionMostrable(modificadorBonito(bonus) + " " + _l(esteBono.opciones[j]),esteBono.opciones[j],""));
                }
                muestraDialogoElegirOpciones(arrayOpciones, {aplicar: aplicar, especializacion: espe, bonus: bonus}, {principal: aplicarRaizCultural, isDisabled: alwaysEnabled}, true);

            } else {
                aplicarRaizCultural({aplicar:aplicar,opcion:habilidad,bonus:bonus,especializacion:espe});
            }
        }
        if (aplicar) {
            personaje_actual.setFlag(FLAG_RAICES_CULTURALES);
        } else {
            personaje_actual.removeFlag(FLAG_RAICES_CULTURALES);
        }
        lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
    }
}

/**
 *
 * @param {{aplicar: boolean, opcion: string, bonus: number, [especializacion]: string}} parametros
 */
function aplicarRaizCultural(parametros) {
    var bono = new Bono(BONO_HABILIDAD,parametros.opcion,parametros.bonus,"",false,BONO_ESPECIAL,VENT_RAICES_CULTURALES);
    if (parametros.aplicar) {
        personaje_actual.addBono(bono,false,false);
        if (parametros.especializacion != "") {
            personaje_actual.setEspecializacionHabilidadSecundaria(parametros.opcion,parametros.especializacion);
        }
    } else {
        personaje_actual.removeBono(bono,false);
        if (parametros.especializacion != "") {
            personaje_actual.setEspecializacionHabilidadSecundaria(parametros.opcion,"");
        }
    }
}

function afinidadElemental(elemento, aplicar) {
    var flag ="";
    switch (elemento) {
        case ELEMENTO_FUEGO:
            flag = FLAG_AFINIDAD_ELEMENTAL_FUEGO;
            break;
        case ELEMENTO_AIRE:
            flag = FLAG_AFINIDAD_ELEMENTAL_AIRE;
            break;
        case ELEMENTO_FRIO:
            flag = FLAG_AFINIDAD_ELEMENTAL_FRIO;
            break;
        case ELEMENTO_TIERRA:
            flag = FLAG_AFINIDAD_ELEMENTAL_TIERRA;
            break;
        case ELEMENTO_ELECTRICIDAD:
            flag = FLAG_AFINIDAD_ELEMENTAL_ELECTRICIDAD;
            break;
        case ELEMENTO_LUZ:
            flag = FLAG_AFINIDAD_ELEMENTAL_LUZ;
            break;
        case ELEMENTO_OSCURIDAD:
        default:
            flag = FLAG_AFINIDAD_ELEMENTAL_OSCURIDAD;
            break;
    }
    if (aplicar) {
        personaje_actual.setFlag(flag);
    } else {
        personaje_actual.removeFlag(flag);
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
    lanzarEvento(EVENT_CHARACTER_SECCION_KI);
}

function empatiaElemental(elemento, aplicar) {
    var flag ="";
    switch (elemento) {
        case ELEMENTO_FUEGO:
            flag = FLAG_EMPATIA_ELEMENTAL_FUEGO;
            break;
        case ELEMENTO_AIRE:
            flag = FLAG_EMPATIA_ELEMENTAL_AIRE;
            break;
        case ELEMENTO_AGUA:
            flag = FLAG_EMPATIA_ELEMENTAL_AGUA;
            break;
        case ELEMENTO_LUZ:
            flag = FLAG_EMPATIA_ELEMENTAL_LUZ;
            break;
        case ELEMENTO_OSCURIDAD:
        default:
            flag = FLAG_EMPATIA_ELEMENTAL_OSCURIDAD;
            break;
    }
    if (aplicar) {
        personaje_actual.setFlag(flag);
    } else {
        personaje_actual.removeFlag(flag);
    }
    lanzarEvento(EVENT_CHARACTER_SECCION_KI);
}

//afinidad +10 daño base ataques elementales de ese elemento
//empatía -5CM al coste de éfectos ki de ese elemento. Min coste 5 por efecto
function legadoSangreKagutsuchi(coste, opcion, aplicar) {
    afinidadElemental(ELEMENTO_FUEGO,aplicar);
    empatiaElemental(ELEMENTO_FUEGO,aplicar);
}

function legadoSangreBoreas(coste, opcion, aplicar) {
    afinidadElemental(ELEMENTO_AIRE,aplicar);
    empatiaElemental(ELEMENTO_AIRE,aplicar);}

function legadoSangreNiflheim(coste, opcion, aplicar) {
    afinidadElemental(ELEMENTO_FRIO,aplicar);
}

function legadoSangreRudraksha(coste, opcion, aplicar) {
    afinidadElemental(ELEMENTO_ELECTRICIDAD,aplicar);
}

function legadoSangreRan(coste, opcion, aplicar) {
    empatiaElemental(ELEMENTO_AGUA,aplicar);
}

function legadoSangreToa(coste, opcion, aplicar) {
    aumentaRegeneracion(0,"",aplicar,1,VENT_SANGRE_DE_AEON_LAZO_ELEMENTAL_TOA_TIERRA);
    afinidadElemental(ELEMENTO_TIERRA,aplicar);
}

function legadoSangrePhandemonium(coste, opcion, aplicar) {
    afinidadElemental(ELEMENTO_OSCURIDAD,aplicar);
    empatiaElemental(ELEMENTO_OSCURIDAD,aplicar);
}

function legadoSangreShephirah(coste, opcion, aplicar) {
    afinidadElemental(ELEMENTO_LUZ,aplicar);
    empatiaElemental(ELEMENTO_LUZ,aplicar);
}

function sangreDeLasGrandesBestias(coste, opcion, aplicar) {
    //TODO 40, 80 o 120 pd para poderes de mounstruo (no habilidades esenciales). No afectan al nivel de personaje
}

function esenciaVenenosa(coste, opcion, aplicar) {
    aumentaResistencia(coste,opcion,aplicar,RV,20,VENT_ESENCIA_VENENOSA);
}

function armasNaturales(coste, opcion, aplicar) {
    //TODO armas naturales. Daño base 40, turno +20.
    //TODO elegir 2 de dominus, pag 82
}

function sangreDeElDragon(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_SANGRE_DE_EL_DRAGON);
    } else {
        personaje_actual.removeFlag(FLAG_SANGRE_DE_EL_DRAGON);
    }
}

function sangreLatente(coste, opcion, aplicar) {
    if (aplicar) {
        personaje_actual.setFlag(FLAG_SANGRE_LATENTE);
    } else {//TODO SANGRE LATENTE
        personaje_actual.removeFlag(FLAG_SANGRE_LATENTE);
    }
}


/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function menteYAlmaSuperiorDevah(coste, opcion, aplicar) {
    aumentaCaracteristica(0,0,aplicar,INT,1);
    aumentaCaracteristica(0,0,aplicar,POD,1);
    aumentaCaracteristica(0,0,aplicar,VOL,1);
}

function fragilidadFisicaDevah(coste, opcion, aplicar) {
    aumentaCaracteristica(0,0,aplicar,FUE,-1);
    aumentaCaracteristica(0,0,aplicar,CON,-1);
    aumentaResistencia(0,0,aplicar,RE,-10, RAZA_DEVAH);
    aumentaResistencia(0,0,aplicar,RF,-10, RAZA_DEVAH);
}

function fragilidadFisicaDevahNephilim(coste, opcion, aplicar) {
    aumentaResistencia(0,0,aplicar,RE,-10, RAZA_NEPH_DEVAH);
    aumentaResistencia(0,0,aplicar,RF,-10, RAZA_NEPH_DEVAH);
}

function lazosExistencialesDevah(coste, opcion, aplicar) {
    var bonoConvocar = new Bono(BONO_HABILIDAD,HB_CONVOCAR,10,"",false,BONO_ESPECIAL,RAZA_DEVAH);
    var bonoAtar = new Bono(BONO_HABILIDAD,HB_ATAR,10,"",false,BONO_ESPECIAL,RAZA_DEVAH);
    var bonoControlar = new Bono(BONO_HABILIDAD,HB_DOMINAR,10,"",false,BONO_ESPECIAL,RAZA_DEVAH);
    var bonoDesvonvocar = new Bono(BONO_HABILIDAD,HB_DESCONVOCAR,10,"",false,BONO_ESPECIAL,RAZA_DEVAH);
    if (aplicar) {
        personaje_actual.addBono(bonoConvocar,false,false);
        personaje_actual.addBono(bonoAtar,false,false);
        personaje_actual.addBono(bonoControlar,false,false);
        personaje_actual.addBono(bonoDesvonvocar,false,true);
    } else {
        personaje_actual.removeBono(bonoConvocar,false);
        personaje_actual.removeBono(bonoAtar,false);
        personaje_actual.removeBono(bonoControlar,false);
        personaje_actual.removeBono(bonoDesvonvocar,true);
    }
}

function lazosExistencialesDevahNephilim(coste, opcion, aplicar) {
    var bonoConvocar = new Bono(BONO_HABILIDAD,HB_CONVOCAR,10,"",false,BONO_ESPECIAL,RAZA_NEPH_DEVAH);
    var bonoDesvonvocar = new Bono(BONO_HABILIDAD,HB_DESCONVOCAR,10,"",false,BONO_ESPECIAL,RAZA_NEPH_DEVAH);
    if (aplicar) {
        personaje_actual.addBono(bonoConvocar,false,false);
        personaje_actual.addBono(bonoDesvonvocar,false,true);
    } else {
        personaje_actual.removeBono(bonoConvocar,false);
        personaje_actual.removeBono(bonoDesvonvocar,true);
    }
}


/**
 *
 * @param {number} coste
 * @param {string} opcion
 * @param {boolean} aplicar
 */
function almaInnaturalDevah(coste, opcion, aplicar) {
   //TODO debe desarrollar don o acceso psíquico
}

function sentidoDeAnimalTuanDalyr(coste, opcion, aplicar) {
    aumentaCaracteristica(0,0,aplicar,PER,1);
    if (aplicar) {
        personaje_actual.setFlag(FLAG_SENTIDO_DE_ANIMAL);
    } else {
        personaje_actual.removeFlag(FLAG_SENTIDO_DE_ANIMAL);
    }
}