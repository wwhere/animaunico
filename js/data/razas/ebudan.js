var RAZA_EBUDAN = "Ebudan";

var EBUD_ORINIE = "Or'inie (Ebudan)";
var EBUD_ALAS = "Alas de Serafín (Ebudan)";
var EBUD_ESENCIA = "Esencia Celestial (Ebudan)";

ventajas_set.push(new Ventaja(
    EBUD_ORINIE,
    "",
    "El Ebudan puede aplicar un bonificador de +30 a cualquier Resistencia contra efectos de dominio, control emocional u " +
        "olvido que puedan impedirle realizar el Sue´ Aman. Una vez conseguido, esta habilidad desaparece completamente y " +
        "puede elegir entre trascender al flujo de almas y renacer como entidades espirituales con Gnosis 30, o permanecer " +
        "en el mundo para guiar a otros miembros de su especie. En un caso u otro, ganan un bono de +2 a su POD y a su VOL.",
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
    EBUD_ALAS,
    "",
    "Las características de las alas (ambas se consideran una sola " +
        "unidad como arma) son las siguientes: poseen un turno de +20, un daño base de 60 más el bono de Fuerza, su crítico primario es de Filo, de tipo mandoble, " +
        "con una entereza y rotura de 20 y 5 respectivamente. Por su complejidad, no pueden utilizarlas en combinación con armas empuñadas. Además, pueden " +
        "detener proyectiles como si se tratasen de un escudo. Si cumplen el Sue´ Aman, un Ebudan es capaz de dañar energía con ellas.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [alasSerafinEbudan],
    GRUPO_RAZAS,
    []
));

ventajas_set.push(new Ventaja(
    EBUD_ESENCIA,
    "",
    "A efectos de juego, el Ebudan se vuelve invulnerable a cualquier ataque natural que no sea capaz de dañar energía.",
    NO_COMPRABLE,   //getRepetible
    [0],      //coste
    [],    //incompatibles
    false,  //anulable
    [],
    [],
    GRUPO_RAZAS,
    []
));

var razaEbudan = new Raza(
    RAZA_EBUDAN,
    [
        getVentaja(EBUD_ORINIE),
        getVentaja(EBUD_ALAS),
        getVentaja(EBUD_ESENCIA)
    ],
    [],
    1
);

razas_set.push(razaEbudan);

allRazas[RAZA_EBUDAN] = razaEbudan;
