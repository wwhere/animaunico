var esferasMetamagicas = {};
var arcanaSephirah = [];

var ESFERA_INCREMENTO_DESTRUCTIVO = (new L("ESFERA_INCREMENTO_DESTRUCTIVO","Incremento Destructivo","Incremento Destructivo")).getId();
var ESFERA_ESCUDOS_POTENCIADOS = (new L("ESFERA_ESCUDOS_POTENCIADOS","Escudos Potenciados","Escudos Potenciados")).getId();
var ESFERA_ELIMINAR_PROTECCION = (new L("ESFERA_ELIMINAR_PROTECCION","Eliminar Protección","Eliminar Protección")).getId();
var ESFERA_ERUDICION_DEFENSIVA = (new L("ESFERA_ERUDICION_DEFENSIVA","Erudición Defensiva","Erudición Defensiva")).getId();
var ESFERA_AREA_POTENCIADA = (new L("ESFERA_AREA_POTENCIADA","Área Potenciada","Área Potenciada")).getId();
var ESFERA_PRECISION_MISTICA = (new L("ESFERA_PRECISION_MISTICA","Precisión Mística","Precisión Mística")).getId();
var ESFERA_ERUDICION_OFENSIVA = (new L("ESFERA_ERUDICION_OFENSIVA","Erudición Ofensiva","Erudición Ofensiva")).getId();
var ESFERA_DOBLE_DAÑO = (new L("ESFERA_DOBLE_DAÑO","Doble Daño","Doble Daño")).getId();
var ESFERA_SENTIR_LA_MAGIA = (new L("ESFERA_SENTIR_LA_MAGIA","Sentir la Magia","Sentir la Magia")).getId();
var ESFERA_FORZAR_VELOCIDAD = (new L("ESFERA_FORZAR_VELOCIDAD","Forzar Velocidad","Forzar Velocidad")).getId();
var ESFERA_CONJURO_ESP_NIVEL_50 = (new L("ESFERA_CONJURO_ESP_NIVEL_50","Conjuro Esp. Nv. 50","Conjuro Esp. Nv. 50")).getId();
var ESFERA_DISTANCIA_INCREMENTADA = (new L("ESFERA_DISTANCIA_INCREMENTADA","Distancia Incrementada","Distancia Incrementada")).getId();
var ESFERA_MAGIA_VITAL = (new L("ESFERA_MAGIA_VITAL","Magia Vital","Magia Vital")).getId();
var ESFERA_TRANSMISION_DE_MAGIA = (new L("ESFERA_TRANSMISION_DE_MAGIA","Transmisión de Magia","Transmisión de Magia")).getId();
var ESFERA_SEGURIDAD_DEFENSIVA = (new L("ESFERA_SEGURIDAD_DEFENSIVA","Seguridad Defensiva","Seguridad Defensiva")).getId();
var ESFERA_CONTROL_DE_LA_ENERGIA = (new L("ESFERA_CONTROL_DE_LA_ENERGIA","Control de la Energía","Control de la Energía")).getId();

function inicializaEsferasMetamagicas() {
    var esferaIncrementoDestructivo = new EsferaMetamagica(ESFERA_INCREMENTO_DESTRUCTIVO,"");
    esferasMetamagicas[ESFERA_INCREMENTO_DESTRUCTIVO] = esferaIncrementoDestructivo;
    var esferaEscudosPotenciados = new EsferaMetamagica(ESFERA_ESCUDOS_POTENCIADOS,"");
    esferasMetamagicas[ESFERA_ESCUDOS_POTENCIADOS] = esferaEscudosPotenciados;
    var esferaEliminarProteccion = new EsferaMetamagica(ESFERA_ELIMINAR_PROTECCION,"");
    esferasMetamagicas[ESFERA_ELIMINAR_PROTECCION] = esferaEliminarProteccion;
    var esferaErudicionDefensiva = new EsferaMetamagica(ESFERA_ERUDICION_DEFENSIVA,"");
    esferasMetamagicas[ESFERA_ERUDICION_DEFENSIVA] = esferaErudicionDefensiva;
    var esferaAreaPotenciada = new EsferaMetamagica(ESFERA_AREA_POTENCIADA,"");
    esferasMetamagicas[ESFERA_AREA_POTENCIADA] = esferaAreaPotenciada;
    var esferaPrecisionMistica = new EsferaMetamagica(ESFERA_PRECISION_MISTICA,"");
    esferasMetamagicas[ESFERA_PRECISION_MISTICA] = esferaPrecisionMistica;
    var esferaErudicionOfensiva = new EsferaMetamagica(ESFERA_ERUDICION_OFENSIVA,"");
    esferasMetamagicas[ESFERA_ERUDICION_OFENSIVA] = esferaErudicionOfensiva;
    var esferaDobleDaño = new EsferaMetamagica(ESFERA_DOBLE_DAÑO,"");
    esferasMetamagicas[ESFERA_DOBLE_DAÑO] = esferaDobleDaño;
    var esferaSentirLaMagia = new EsferaMetamagica(ESFERA_SENTIR_LA_MAGIA,"");
    esferasMetamagicas[ESFERA_SENTIR_LA_MAGIA] = esferaSentirLaMagia;
    var esferaForzarVelocidad = new EsferaMetamagica(ESFERA_FORZAR_VELOCIDAD,"");
    esferasMetamagicas[ESFERA_FORZAR_VELOCIDAD] = esferaForzarVelocidad;
    var esferaConjuroEspNivel50 = new EsferaMetamagica(ESFERA_CONJURO_ESP_NIVEL_50,"");
    esferasMetamagicas[ESFERA_CONJURO_ESP_NIVEL_50] = esferaConjuroEspNivel50;
    var esferaDistanciaIncrementada = new EsferaMetamagica(ESFERA_DISTANCIA_INCREMENTADA,"");
    esferasMetamagicas[ESFERA_DISTANCIA_INCREMENTADA] = esferaDistanciaIncrementada;
    var esferaMagiaVital = new EsferaMetamagica(ESFERA_MAGIA_VITAL,"");
    esferasMetamagicas[ESFERA_MAGIA_VITAL] = esferaMagiaVital;
    var esferaTransmisionDeMagia = new EsferaMetamagica(ESFERA_TRANSMISION_DE_MAGIA,"");
    esferasMetamagicas[ESFERA_TRANSMISION_DE_MAGIA] = esferaTransmisionDeMagia;
    var esferaSeguridadDefensiva = new EsferaMetamagica(ESFERA_SEGURIDAD_DEFENSIVA,"");
    esferasMetamagicas[ESFERA_SEGURIDAD_DEFENSIVA] = esferaSeguridadDefensiva;
    var esferaControlDeLaEnergía = new EsferaMetamagica(ESFERA_CONTROL_DE_LA_ENERGIA,"");
    esferasMetamagicas[ESFERA_CONTROL_DE_LA_ENERGIA] = esferaControlDeLaEnergía;

    arcanaSephirah[0] = new ArcanaSephirah(esferaIncrementoDestructivo,10,0,[1,2,3]);
    arcanaSephirah[1] = new ArcanaSephirah(esferaEscudosPotenciados,5,0,[0,3,6]);
    arcanaSephirah[2] = new ArcanaSephirah(esferaEliminarProteccion,5,0,[0,3,7]);
    arcanaSephirah[3] = new ArcanaSephirah(esferaErudicionDefensiva,10,0,[0,1,2,6,7]);
    arcanaSephirah[4] = new ArcanaSephirah(esferaEscudosPotenciados,5,4,[5,10]);
    arcanaSephirah[5] = new ArcanaSephirah(esferaEliminarProteccion,5,0,[4,6]);
    arcanaSephirah[6] = new ArcanaSephirah(esferaAreaPotenciada,10,3,[1,3,5,11,18]);
    arcanaSephirah[7] = new ArcanaSephirah(esferaPrecisionMistica,5,2,[2,3,8,11,19]);
    arcanaSephirah[8] = new ArcanaSephirah(esferaIncrementoDestructivo,10,4,[7,9]);
    arcanaSephirah[9] = new ArcanaSephirah(esferaEliminarProteccion,5,0,[8,12]);
    arcanaSephirah[10] = new ArcanaSephirah(esferaErudicionDefensiva,10,5,[4,14]);
    arcanaSephirah[11] = new ArcanaSephirah(esferaErudicionOfensiva,10,4,[6,7,15]);
    arcanaSephirah[12] = new ArcanaSephirah(esferaErudicionOfensiva,10,5,[9,16]);
    arcanaSephirah[13] = new ArcanaSephirah(esferaSentirLaMagia,5,0,[14,22]);
    arcanaSephirah[14] = new ArcanaSephirah(esferaForzarVelocidad,5,2,[10,13]);
    arcanaSephirah[15] = new ArcanaSephirah(esferaPrecisionMistica,10,6,[11]);
    arcanaSephirah[16] = new ArcanaSephirah(esferaConjuroEspNivel50,5,2,[12,17]);
    arcanaSephirah[17] = new ArcanaSephirah(esferaDistanciaIncrementada,5,0,[16,27]);
    arcanaSephirah[18] = new ArcanaSephirah(esferaErudicionDefensiva,10,6,[6,20]);
    arcanaSephirah[19] = new ArcanaSephirah(esferaAreaPotenciada,10,6,[7,20]);
    arcanaSephirah[20] = new ArcanaSephirah(esferaErudicionOfensiva,10,7,[18,19,24]);
    arcanaSephirah[21] = new ArcanaSephirah(esferaSeguridadDefensiva,5,0,[22,29,30]);
    arcanaSephirah[22] = new ArcanaSephirah(esferaTransmisionDeMagia,10,3,[13,21,23,30,31]);
    arcanaSephirah[24] = new ArcanaSephirah(esferaDobleDaño,20,10,[20]);
    arcanaSephirah[29] = new ArcanaSephirah(esferaMagiaVital,5,0,[21,30,39]);
    arcanaSephirah[30] = new ArcanaSephirah(esferaControlDeLaEnergía,10,0,[21,22,29,39,40]);
    arcanaSephirah[31] = new ArcanaSephirah(esferaMagiaVital,5,3,[22,32,40]);
    arcanaSephirah[39] = new ArcanaSephirah(esferaForzarVelocidad,5,0,[29,30,40]);
    arcanaSephirah[49] = new ArcanaSephirah(esferaForzarVelocidad,5,2,[48,55]);

}

inicializaEsferasMetamagicas();


