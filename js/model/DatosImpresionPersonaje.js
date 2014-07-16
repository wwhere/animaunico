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
    }

    //endregion Habilidades Secundarias


    //region Elan
    //TODO
    //endregion Elan

    //region Magia
    //TODO
    //endregion Magia


};
