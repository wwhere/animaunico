var RAZA_NEPH_EBUDAN = "Nephilim Ebudan";

var EBUD_NEPH_ORINIE = "Or'inie (Nephilim Ebudan)";
var EBUD_NEPH_ALAS = "Alas de Serafín (Nephilim Ebudan)";
var EBUD_NEPH_ESENCIA = "Esencia Celestial (Nephilim Ebudan)";

var EBUD_NEPH_ALMA = "Alma inmortal (Nephilim Ebudan)";

ventajas_set.push(new Ventaja(
    EBUD_NEPH_ORINIE,
    "",
    "El Nephilim puede aplicar un bonificador de +30 a cualquier Resistencia contra efectos de dominio, control emocional u olvido que puedan impedirle realizar el Sue´ Aman. Una vez conseguido, esta habilidad desaparece completamente.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    EBUD_NEPH_ALAS,
    "",
    "El personaje puede exteriorizarlas u ocultarlas a voluntad, aunque hacerlo requiere un asalto completo. Las alas le otorgan la capacidad de surcar los cielos a un Tipo de Vuelo 12. Esta habilidad únicamente se manifiesta después de que el personaje haya logrado el Sue´ Aman.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    EBUD_NEPH_ESENCIA,
    "",
    "A efectos de juego, el Nephilim se vuelve invulnerable a cualquier ataque natural que no sea capaz de dañar energía.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    EBUD_NEPH_ALMA,
    "",
    "Penalizador de -3 puntos a la experiencia que otorgue el Director de Juego al finalizar cada sesión.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaNephilimEbudan = new Raza(RAZA_NEPH_EBUDAN, [
    getVentaja(EBUD_NEPH_ORINIE),
    getVentaja(EBUD_NEPH_ALAS),
    getVentaja(EBUD_NEPH_ESENCIA)
], [
    getVentaja(EBUD_NEPH_ALMA)
], 0);

razas_set.push(razaNephilimEbudan);

allRazas[RAZA_NEPH_EBUDAN] = razaNephilimEbudan;
