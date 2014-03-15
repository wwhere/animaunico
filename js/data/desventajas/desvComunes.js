addDesventaja(new Ventaja(
    DESV_REDUCIR_DOS_PUNTOS_A_UNA_CARACTERISTICA,
    "",
    DESV_REDUCIR_DOS_PUNTOS_A_UNA_CARACTERISTICA_DESC,
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_CARACTERISTICAS],
    [restarDosAUnaCaracteristica],
    GRUPO_CARACTERISTICAS,
    []
));
addDesventaja(new Ventaja(
    DESV_SALUD_ENFERMIZA,
    "",
    DESV_SALUD_ENFERMIZA_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [saludEnfermiza],
    GRUPO_RESISTENCIAS,
    []
));
addDesventaja(new Ventaja(
    DESV_LENTA_CURACION,
    "",
    DESV_LENTA_CURACION_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_MIOPIA,
    "",
    DESV_MIOPIA_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_VULNERABILIDAD_A_LOS_VENENOS,
    "",
    DESV_VULNERABILIDAD_A_LOS_VENENOS_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [vulnerabilidadVenenos],
    GRUPO_RESISTENCIAS,
    []
));
addDesventaja(new Ventaja(
    DESV_FACIL_POSESION,
    "",
    DESV_FACIL_POSESION_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_RESISTENCIAS,
    []
));
addDesventaja(new Ventaja(
    DESV_VULNERABILIDAD_A_LA_MAGIA,
    "",
    DESV_VULNERABILIDAD_A_LA_MAGIA_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [vulnerabilidadMagia],
    GRUPO_RESISTENCIAS,
    []
));
addDesventaja(new Ventaja(
    DESV_VULNERABILIDAD_AL_FRIO,
    "",
    DESV_VULNERABILIDAD_AL_FRIO_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_VULNERABLE_AL_CALOR,
    "",
    DESV_VULNERABLE_AL_CALOR_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_EXTREMIDAD_ATROFIADA,
    "",
    DESV_EXTREMIDAD_ATROFIADA_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_DEBILIDAD_FISICA,
    "",
    DESV_DEBILIDAD_FISICA_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [debilidadFisica],
    GRUPO_RESISTENCIAS,
    []
));
addDesventaja(new Ventaja(
    DESV_ASPECTO_DESAGRADABLE,
    "",
    DESV_ASPECTO_DESAGRADABLE_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [aspectoDesagradable],
    GRUPO_OTRAS,
    [FLAG_APARIENCIA_ALEATORIA,FLAG_APARIENCIA_MINIMA_7]
));
addDesventaja(new Ventaja(
    DESV_DESAFORTUNADO,
    "",
    DESV_DESAFORTUNADO_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_ENFERMEDAD_GRAVE,
    "",
    DESV_ENFERMEDAD_GRAVE_DESC,
    NO_REPETIBLE,
    [-2],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_ALERGIA_GRAVE,
    "",
    DESV_ALERGIA_GRAVE_DESC,
    REPETIBLE_OPCIONES,
    [-1],
    [],
    true,
    [LISTA_INTRODUCCION_USUARIO],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_SUEÑO_PROFUNDO,
    "",
    DESV_SUEÑO_PROFUNDO_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_FOBIA_GRAVE,
    "",
    DESV_FOBIA_GRAVE_DESC,
    REPETIBLE_OPCIONES,
    [-1],
    [],
    true,
    [LISTA_INTRODUCCION_USUARIO],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_MALA_SUERTE,
    "",
    DESV_MALA_SUERTE_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_MUDO,
    "",
    DESV_MUDO_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_CIEGO,
    "",
    DESV_CIEGO_DESC,
    NO_REPETIBLE,
    [-2],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_SORDO,
    "",
    DESV_SORDO_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_APRENDIZAJE_LENTO,
    "",
    DESV_APRENDIZAJE_LENTO_DESC,
    NO_REPETIBLE,
    [-1,-2],
    [],
    true,
    [],
    [],
    GRUPO_CAPACIDADES,
    []
));
addDesventaja(new Ventaja(
    DESV_REACCION_LENTA,
    "",
    DESV_REACCION_LENTA_DESC,
    NO_REPETIBLE,
    [-1,-2],
    [],
    true,
    [],
    [reaccionLenta],
    GRUPO_CAPACIDADES,
    []
));
addDesventaja(new Ventaja(
    DESV_ARMA_EXCLUSIVA,
    "",
    DESV_ARMA_EXCLUSIVA_DESC,
    NO_REPETIBLE, //TODO SOLO ARQUETIPOS INDICADOS
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_ADICCION_O_VICIO_GRAVE,
    "",
    DESV_ADICCION_O_VICIO_GRAVE_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [LISTA_INTRODUCCION_USUARIO],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_VULNERABILIDAD_AL_DOLOR,
    "",
    DESV_VULNERABILIDAD_AL_DOLOR_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    []
));
addDesventaja(new Ventaja(
    DESV_EXHAUSTO,
    "",
    DESV_EXHAUSTO_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [exhausto],
    GRUPO_CAPACIDADES,
    []
));

//region Pantalla del Director

addDesventaja(new Ventaja(
    DESV_ENDEBLE,
    "",
    DESV_ENDEBLE_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_CAPACIDADES,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    DESV_COBARDIA,
    "",
    DESV_COBARDIA_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    DESV_PATOSO,
    "",
    DESV_PATOSO_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    DESV_SIN_BONIFICADOR_NATURAL,
    "",
    DESV_SIN_BONIFICADOR_NATURAL_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [sinBonificadorNatural],
    GRUPO_SECUNDARIAS,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    DESV_INSUFRIBLE,
    "",
    DESV_INSUFRIBLE_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    DESV_NOVATO,
    "",
    DESV_NOVATO_DESC,
    NO_REPETIBLE,
    [-1],
    [],
    true,
    [],
    [novato],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));

addDesventaja(new Ventaja(
    DESV_DESTINO_ACIAGO,
    "",
    DESV_DESTINO_ACIAGO_DESC,
    NO_REPETIBLE,
    [-2],
    [],
    true,
    [],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));


addDesventaja(new Ventaja(
    DESV_MALDITO,
    "",
    DESV_MALDITO_DESC,
    REPETIBLE_OPCIONES,
    [-1,-2],
    [],
    true,
    [LISTA_INTRODUCCION_USUARIO],
    [],
    GRUPO_OTRAS,
    [FLAG_PANTALLA_ENABLED]
));
//endregion Pantalla del Director