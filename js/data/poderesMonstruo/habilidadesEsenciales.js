var habilidadesEsenciales_set = [];
var allHabilidadesEsenciales = {};

var habilidadEsencial;

function HabilidadEsencial(nombre,descripcion,coste,gnosis, repetible, incompatibles, elegir, efecto) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.coste = coste;
    this.gnosis = gnosis;
    this.repetible = repetible;
    this.incompatibles = incompatibles;
    this.elegir = elegir;
    this.efecto = efecto;
}

function hsResistenciaAlCansancio(coste, opcion,aplicar) {
    aumentaCansancio(coste,opcion,aplicar,2);
}

habilidadEsencial = new HabilidadEsencial(
    "Resistencia al cansancio",
    "",
    10,
    0,
    REPETIBLE_TOTAL,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hsResistenciaAlCansancio]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Don",
    "",
    30,
    5,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [don]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Acceso a una disciplina psíquica",
    "",
    15,
    5,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [LISTA_DISCIPLINAS_PSIQUICAS],                 //elegir
    [accesoPsiquicoBasico]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Acceso a disciplinas psíquicas",
    "",
    30,
    5,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [accesoPsiquicoCompleto]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Sentido agudizado",
    "",
    10,
    0,
    REPETIBLE_OPCIONES,   //repetible
    [],                 //incompatibles
    [LISTA_INTRODUCCION_USUARIO],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Afinidad",
    "",
    10,
    5,
    REPETIBLE_OPCIONES,   //repetible
    [],                 //incompatibles
    [LISTA_INTRODUCCION_USUARIO],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

function hsCaracteristicasFisicasSobrehumanas(coste, opcion,aplicar) {
    //TODO limite hasta 13
}

habilidadEsencial = new HabilidadEsencial(
    "Características físicas sobrehumanas",
    "",
    20,
    0,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hsCaracteristicasFisicasSobrehumanas]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

function hsCaracteristicasAnimicasSobrehumanas(coste, opcion,aplicar) {
    //TODO limite hasta 13
}

habilidadEsencial = new HabilidadEsencial(
    "Características anímicas sobrehumanas",
    "",
    20,
    5,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hsCaracteristicasAnimicasSobrehumanas]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

function hsCaracteristicasFisicasSobrenaturales(coste, opcion,aplicar) {
    //TODO limite hasta 15
}

habilidadEsencial = new HabilidadEsencial(
    "Características físicas sobrenaturales",
    "",
    40,
    20,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hsCaracteristicasFisicasSobrenaturales]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

function hsCaracteristicasAnimicasSobrenaturales(coste, opcion,aplicar) {
    //TODO limite hasta 15
}

habilidadEsencial = new HabilidadEsencial(
    "Características anímicas sobrenaturales",
    "",
    40,
    20,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hsCaracteristicasAnimicasSobrenaturales]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

function hsCaracteristicasFisicasDivinas(coste, opcion,aplicar) {
    //TODO limite hasta 20
}

habilidadEsencial = new HabilidadEsencial(
    "Características físicas divinas",
    "",
    80,
    30,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hsCaracteristicasFisicasDivinas]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

function hsCaracteristicasAnimicasDivinas(coste, opcion,aplicar) {
    //TODO limite hasta 20
}

habilidadEsencial = new HabilidadEsencial(
    "Características anímicas divinas",
    "",
    80,
    35,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hsCaracteristicasAnimicasDivinas]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

function hasAtributoIncrementado(coste, opcion, aplicar, valor) {
    aumentaCaracteristica(coste, opcion,aplicar,opcion,valor);
}

habilidadEsencial = new HabilidadEsencial(
    "Atributo incrementado +1",
    "",
    20,
    0,
    REPETIBLE_OPCIONES,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hasAtributoIncrementado,1]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Atributo incrementado +2",
    "",
    40,
    5,
    REPETIBLE_OPCIONES,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hasAtributoIncrementado,2]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Atributo incrementado +3",
    "",
    60,
    15,
    REPETIBLE_OPCIONES,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hasAtributoIncrementado,3]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Atributo incrementado +4",
    "",
    120,
    20,
    REPETIBLE_OPCIONES,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hasAtributoIncrementado,4]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Atributo incrementado +5",
    "",
    180,
    25,
    REPETIBLE_OPCIONES,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [hasAtributoIncrementado,5]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Atributo incrementado +6",
    "",
    240,
    30,
    REPETIBLE_OPCIONES,   //repetible
    [],                 //incompatibles //TODO todos estos deben ser incompatibles en la misma opcion
    [],                 //elegir
    [hasAtributoIncrementado,6]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Atributo incrementado +7",
    "",
    320,
    35,
    REPETIBLE_OPCIONES,   //repetible
    [],                 //incompatibles //TODO todos estos deben ser incompatibles en la misma opcion
    [],                 //elegir
    [hasAtributoIncrementado,7]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Atributo incrementado +8",
    "",
    400,
    40,
    REPETIBLE_OPCIONES,   //repetible
    [],                 //incompatibles //TODO todos estos deben ser incompatibles en la misma opcion
    [],                 //elegir
    [hasAtributoIncrementado,8]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Tamaño innatural",
    "",
    10,
    0,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    [ajusteTamaño]    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Ambidiestro",
    "",
    30,
    0,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Inhumanidad",
    "",
    10,
    0,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Zen",
    "",
    20,
    25,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Respiración acuática",
    "",
    10,
    0,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Sin Inconsciencia",
    "",
    10,
    5,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Incansable",
    "",
    20,
    15,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "No respira",
    "",
    10,
    15,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "No se alimenta",
    "",
    10,
    15,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "No duerme",
    "",
    10,
    15,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Inmune a venenos naturales",
    "",
    20,
    20,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Inmune a enfermedades naturales",
    "",
    10,
    20,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Inmune a fenómenos climáticos",
    "",
    10,
    15,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Exención física",
    "",
    50,
    20,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Inmunidad natural a un elemento, Mitad de daño",
    "",
    10,
    20,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [LISTA_INTRODUCCION_USUARIO],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Inmunidad natural a un elemento, Inmunidad completa",
    "",
    30,
    25,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [LISTA_INTRODUCCION_USUARIO],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;

habilidadEsencial = new HabilidadEsencial(
    "Inmunidad psicológica",
    "",
    20,
    10,
    NO_REPETIBLE,   //repetible
    [],                 //incompatibles
    [],                 //elegir
    []    //efecto
);
habilidadesEsenciales_set.push(habilidadEsencial);
allHabilidadesEsenciales[habilidadEsencial.nombre] = habilidadEsencial;
