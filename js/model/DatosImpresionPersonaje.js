function DatosImpresionPersonaje(personaje) {
    /**
     *
     * @type {Personaje}
     */
    this.p = personaje;
}

DatosImpresionPersonaje.prototype = {
    constructor: DatosImpresionPersonaje,

    //region Datos básicos
    raza : function() {
        return this.p.raza.getNombre();
    },

    categoriaActual : function() {
        return this.p.categoria.getNombre();
    },

    categoria : function() {
        return this.p.getStringCategoria();
    },

    nivel : function() {
        return this.p.nivel;
    },

    origen : function() {
        return this.p.origen;
    },

    sexo : function() {
        return this.p.sexo;
    },

    nombre : function() {
        return this.p.nombre;
    },

    claseSocial : function() {
        return this.p.claseSocial;
    },

    altura : function() {
        return this.p.altura;
    },

    peso : function() {
        return this.p.peso;
    },

    etnia : function() {
        return this.p.etnia;
    },

    descripcion : function() {
        return this.p.descripcion;
    },

    idiomas : function() {
        return this.p.idiomas;
    },

    trasfondo : function() {
        return this.p.trasfondo;
    },

    //endregion Datos básicos

    //region Características
    caracteristicas : function() {
        return this.p.caracteristicas;
    },

    puntosCansancio : function() {
        return this.p.puntosCansancio;
    },

    tipoMovimiento : function() {
        return this.p.tipoMovimiento;
    },

    regeneracion : function() {
        return this.p.regeneracion;
    },

    apariencia : function() {
        return this.p.apariencia;
    },

    tamaño : function() {
        return this.p.tamaño;
    },
    //endregion Características

    //region Turno
    turnoBase : function() {
        return this.p.turnoBase;
    },
    //endregion Turno

    //region PV
    pv : function() {
        return this.p.pv;
    },

    multiplosDeVida : function() {
        return this.p.getNumMultiplosVida();
    },
    //endregion PV

    //region Armadura
    getTA : function(i) {
        return this.p.getArmadura(TAS_ARMADURA[i]);
    },

    TA0 :function() {
        return this.getTA(0);
    },

    TA1 :function() {
        return this.getTA(1);
    },

    TA2 :function() {
        return this.getTA(2);
    },

    TA3 :function() {
        return this.getTA(3);
    },

    TA4 :function() {
        return this.getTA(4);
    },

    TA5 :function() {
        return this.getTA(5);
    },

    TA6 :function() {
        return this.getTA(6);
    },

    penalizadorArmadura : function() {
        return modificadorBonito(getPenalizadorTodaAccionPorArmaduraActual(this.p));
    },

    //endregion Armadura

    //region Ventajas y desventajas
    ventajas : function() {
        return this.p.ventajas;
    },

    desventajas : function() {
        return this.p.getDesventajas();
    },
    //endregion Ventajas y desventajas

    //region Habilidades de combate

    //endregion

    //region Habilidades Secundarias

    getGrupoHabilidades : function(grupo) {
        var hab = [];

        for (var i = 0; i < grupo.length; i++) {
            hab.push(this.p.getHabilidadDePersonaje(grupo[i]));
        }

        return hab;
    },

    habAtleticas : function() {
        return this.getGrupoHabilidades(habilidades_atleticas_set);
    },

    habVigor : function() {
        return this.getGrupoHabilidades(habilidades_vigor_set);
    },

    habPerceptivas : function() {
        return this.getGrupoHabilidades(habilidades_perceptivas_set);
    },

    habIntelectuales : function() {
        return this.getGrupoHabilidades(habilidades_intelectuales_set);
    },

    habSociales : function() {
        return this.getGrupoHabilidades(habilidades_sociales_set);
    },

    habSubterfugio : function() {
        return this.getGrupoHabilidades(habilidades_subterfugio_set);
    },

    habCreativas : function() {
        return this.getGrupoHabilidades(habilidades_creativas_set);
    },

    //endregion Habilidades Secundarias

    //region Elan
    //TODO
    //endregion Elan

    //region Magia
    //TODO
    //endregion Magia

    //region Resistencias
    presencia : function() {
        return this.p.getPresencia();
    },

    getResistencia : function(resistencia) {
        var bonos = personaje_actual.getBonos(BONO_RESISTENCIA, resistencia, CATEGORIA_BONO_CUALQUIERA);

        var valorFinal = parseInt(personaje_actual.getPresencia());
        var valorBonos = 0;
        for (var i = 0; i < bonos.length; i++) {
            var bono = bonos[i];
            var valorBono = bono.bono;
            valorFinal += parseInt(valorBono);
            valorBonos += parseInt(valorBono);
        }

        return {valorFinal:valorFinal,valorBonos:valorBonos};
    },

    RF : function() {
        var multiplicador;

        if (personaje_actual.hasFlag(FLAG_RF_A_MITAD)) {
            multiplicador = MULTIPLICADOR_MITAD;
        } else {
            multiplicador = MULTIPLICADOR_ENTERO;
        }

        var rf = this.getResistencia(RF);

        return rf.valorFinal * multiplicador;
    },

    RF_Bonos : function() {
        var rf = this.getResistencia(RF);

        return rf.valorBonos;
    },

    RE : function() {
        var multiplicador;

        if (personaje_actual.hasFlag(FLAG_RE_A_MITAD)) {
            multiplicador = MULTIPLICADOR_MITAD;
        } else {
            multiplicador = MULTIPLICADOR_ENTERO;
        }

        var rf = this.getResistencia(RE);

        return rf.valorFinal * multiplicador;
    },

    RE_Bonos : function() {
        var rf = this.getResistencia(RE);

        return rf.valorBonos;
    },

    RV : function() {
        var multiplicador;

        if (personaje_actual.hasFlag(FLAG_RV_A_MITAD)) {
            multiplicador = MULTIPLICADOR_MITAD;
        } else {
            multiplicador = MULTIPLICADOR_ENTERO;
        }

        var rf = this.getResistencia(RV);

        return rf.valorFinal * multiplicador;
    },

    RV_Bonos : function() {
        var rf = this.getResistencia(RV);

        return rf.valorBonos;
    },

    RM : function() {
        var multiplicador;

        if (personaje_actual.hasFlag(FLAG_RM_A_MITAD)) {
            multiplicador = MULTIPLICADOR_MITAD;
        } else {
            multiplicador = MULTIPLICADOR_ENTERO;
        }

        var rf = this.getResistencia(RM);

        return rf.valorFinal * multiplicador;
    },

    RM_Bonos : function() {
        var rf = this.getResistencia(RM);

        return rf.valorBonos;
    },

    RP : function() {
        var multiplicador;

        if (personaje_actual.hasFlag(FLAG_RP_A_MITAD)) {
            multiplicador = MULTIPLICADOR_MITAD;
        } else {
            multiplicador = MULTIPLICADOR_ENTERO;
        }

        var rf = this.getResistencia(RP);

        return rf.valorFinal * multiplicador;
    },

    RP_Bonos : function() {
        var rf = this.getResistencia(RP);

        return rf.valorBonos;
    }
    //endregion

};
