var HAB_KI_USO_DEL_KI = "Uso del Ki";
var HAB_KI_CONTROL_DEL_KI = "Control del Ki";
var HAB_KI_DETECCION_KI = "Detección del Ki";
var HAB_KI_ERUDICION = "Erudición";
var HAB_KI_ELIMINACION_PESO = "Eliminación de peso";
var HAB_KI_LEVITACION = "Levitación";
var HAB_KI_MOVIMIENTO_OBJETOS = "Movimiento de objetos";
var HAB_KI_VUELO = "Vuelo";
var HAB_KI_EXTRUSION_DE_PRESENCIA = "Extrusión de presencia";
var HAB_KI_ARMADURA_ENERGIA = "Armadura de energía";
var HAB_KI_EXTENSION_AURA_ARMA = "Extensión del aura al arma";
var HAB_KI_DESTRUCCION_KI = "Destrucción por Ki";
var HAB_KI_TRANSMISION_KI = "Transmisión del Ki";
var HAB_KI_CURACION_KI = "Curación por Ki";
var HAB_KI_USO_ENERGIA_NECESARIA = "Uso de la Energía Necesaria";
var HAB_KI_OCULTACION_KI = "Ocultación del Ki";
var HAB_KI_FALSA_MUERTE = "Falsa muerte";
var HAB_KI_ELIMINACION_NECESIDADES = "Eliminación de necesidades";
var HAB_KI_ELIMINACION_PENALIZADORES = "Eliminación de penalizadores";
var HAB_KI_RECUPERACION = "Recuperación";
var HAB_KI_AUMENTO_CARACTERISTICAS = "Aumento de características";
var HAB_KI_INHUMANIDAD = "Inhumanidad";
var HAB_KI_ZEN = "Zen";

addHabilidadKi(new HabilidadKi(
    HAB_KI_USO_DEL_KI,
    "",
    40,
    [],
    sinEfecto,
    false
));
addHabilidadKi(new HabilidadKi(
    HAB_KI_CONTROL_DEL_KI,
    "",
    30,
    [HAB_KI_USO_DEL_KI],
    efectoControlKi,
    false
));
addHabilidadKi(new HabilidadKi(HAB_KI_DETECCION_KI, "", 20, [HAB_KI_CONTROL_DEL_KI], efectoDeteccionKi, true, HB_ADVERTIR));
addHabilidadKi(new HabilidadKi(HAB_KI_ERUDICION, "", 10, [HAB_KI_DETECCION_KI], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_ELIMINACION_PESO, "", 10, [HAB_KI_USO_DEL_KI], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_LEVITACION, "", 20, [HAB_KI_ELIMINACION_PESO], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_MOVIMIENTO_OBJETOS, "", 10, [HAB_KI_LEVITACION], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_VUELO, "", 20, [HAB_KI_LEVITACION], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_EXTRUSION_DE_PRESENCIA, "", 10, [HAB_KI_USO_DEL_KI], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_ARMADURA_ENERGIA, "", 10, [HAB_KI_EXTRUSION_DE_PRESENCIA], efectoKiArmaduraEnergia, false));
addHabilidadKi(new HabilidadKi(HAB_KI_EXTENSION_AURA_ARMA, "", 10, [HAB_KI_EXTRUSION_DE_PRESENCIA], efectoExtrusionAura, false));
addHabilidadKi(new HabilidadKi(HAB_KI_DESTRUCCION_KI, "", 20, [HAB_KI_EXTRUSION_DE_PRESENCIA], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_TRANSMISION_KI, "", 10, [HAB_KI_USO_DEL_KI], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_CURACION_KI, "", 10, [HAB_KI_TRANSMISION_KI], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_USO_ENERGIA_NECESARIA, "", 10, [HAB_KI_USO_DEL_KI], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_OCULTACION_KI, "", 10, [HAB_KI_USO_ENERGIA_NECESARIA], efectoOcultacionKi, true, HB_OCULTARSE));
addHabilidadKi(new HabilidadKi(HAB_KI_FALSA_MUERTE, "", 10, [HAB_KI_OCULTACION_KI], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_ELIMINACION_NECESIDADES, "", 10, [HAB_KI_USO_ENERGIA_NECESARIA], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_ELIMINACION_PENALIZADORES, "", 20, [HAB_KI_USO_ENERGIA_NECESARIA], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_RECUPERACION, "", 20, [HAB_KI_ELIMINACION_PENALIZADORES], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_AUMENTO_CARACTERISTICAS, "", 20, [HAB_KI_USO_ENERGIA_NECESARIA], sinEfecto, false));
addHabilidadKi(new HabilidadKi(HAB_KI_INHUMANIDAD, "", 30, [HAB_KI_USO_DEL_KI], efectoInhumanidad, false));
addHabilidadKi(new HabilidadKi(HAB_KI_ZEN, "", 50, [HAB_KI_INHUMANIDAD], efectoZen, false));

