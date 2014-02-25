

var ARMADURA_ACOLCHADA = "Acolchada";
armaduras_set.push(new Armadura(
    ARMADURA_ACOLCHADA,
    new Dinero(1,0,0),
    3,
    DISP_TOTAL,
    0,       //Llevar armadura
    -5,     //penalizador natural
    0,      //restriccion movimiento
    10,     //entereza
    25,     //presencia
    ARMADURA_LOC_CAMISOLA,
    ARMADURA_CLASE_BLANDA,
    [1,1,1,1,2,2,0]
));

var ARMADURA_COTA_CUERO = "Cota de cuero";
armaduras_set.push(new Armadura(
    ARMADURA_COTA_CUERO,
    new Dinero(1,0,0),
    3,
    DISP_TOTAL,
    0,       //Llevar armadura
    0,     //penalizador natural
    0,      //restriccion movimiento
    15,     //entereza
    25,     //presencia
    ARMADURA_LOC_CAMISOLA,
    ARMADURA_CLASE_BLANDA,
    [1,0,2,1,2,1,0]
));

var ARMADURA_GABARDINA = "Gabardina";
armaduras_set.push(new Armadura(
    ARMADURA_GABARDINA,
    new Dinero(0,5,0),
    1.5,
    DISP_B,
    0,       //Llevar armadura
    -5,     //penalizador natural
    0,      //restriccion movimiento
    10,     //entereza
    25,     //presencia
    ARMADURA_LOC_COMPLETA,
    ARMADURA_CLASE_BLANDA,
    [1,0,2,1,2,2,0]
));

var ARMADURA_PIEL = "Piel";
armaduras_set.push(new Armadura(
    ARMADURA_PIEL,
    new Dinero(5,0,0),
    2,
    DISP_TOTAL,
    10,       //Llevar armadura
    -10,     //penalizador natural
    0,      //restriccion movimiento
    10,     //entereza
    25,     //presencia
    ARMADURA_LOC_CAMISOLA,
    ARMADURA_CLASE_BLANDA,
    [2,1,2,1,2,2,0]
));

var ARMADURA_COMPLETA_CUERO = "Completa de cuero";
armaduras_set.push(new Armadura(
    ARMADURA_COMPLETA_CUERO,
    new Dinero(5,0,0),
    7,
    DISP_TOTAL,
    10,       //Llevar armadura
    0,     //penalizador natural
    1,      //restriccion movimiento
    12,     //entereza
    25,     //presencia
    ARMADURA_LOC_COMPLETA,
    ARMADURA_CLASE_BLANDA,
    [1,0,2,1,2,1,0]
));

var ARMADURA_CUERO_ENDURECIDO = "Cuero endurecido";
armaduras_set.push(new Armadura(
    ARMADURA_CUERO_ENDURECIDO,
    new Dinero(15,0,0),
    4,
    DISP_TOTAL,
    20,       //Llevar armadura
    -10,     //penalizador natural
    0,      //restriccion movimiento
    13,     //entereza
    25,     //presencia
    ARMADURA_LOC_PETO,
    ARMADURA_CLASE_DURA,
    [2,2,2,2,2,2,0]
));

var ARMADURA_CUERO_TACHONADO = "Cuero tachonado";
armaduras_set.push(new Armadura(
    ARMADURA_CUERO_TACHONADO,
    new Dinero(25,0,0),
    4.5,
    DISP_TOTAL,
    25,       //Llevar armadura
    -10,     //penalizador natural
    1,      //restriccion movimiento
    14,     //entereza
    25,     //presencia
    ARMADURA_LOC_PETO,
    ARMADURA_CLASE_DURA,
    [3,1,2,2,1,2,0]
));

var ARMADURA_MALLAS = "Mallas";
armaduras_set.push(new Armadura(
    ARMADURA_MALLAS,
    new Dinero(70,0,0),
    13,
    DISP_TOTAL,
    30,       //Llevar armadura
    -15,     //penalizador natural
    1,      //restriccion movimiento
    15,     //entereza
    30,     //presencia
    ARMADURA_LOC_COMPLETA,
    ARMADURA_CLASE_BLANDA,
    [4,2,1,2,0,1,0]
));

var ARMADURA_PETO = "Peto";
armaduras_set.push(new Armadura(
    ARMADURA_PETO,
    new Dinero(40,0,0),
    4,
    DISP_B,
    40,       //Llevar armadura
    -15,     //penalizador natural
    1,      //restriccion movimiento
    16,     //entereza
    30,     //presencia
    ARMADURA_LOC_PETO,
    ARMADURA_CLASE_DURA,
    [4,5,4,1,0,1,0]
));

var ARMADURA_PIEZAS = "Piezas";
armaduras_set.push(new Armadura(
    ARMADURA_PIEZAS,
    new Dinero(40,0,0),
    6,
    DISP_B,
    50,       //Llevar armadura
    -20,     //penalizador natural
    2,      //restriccion movimiento
    15,     //entereza
    30,     //presencia
    ARMADURA_LOC_COMPLETA,
    ARMADURA_CLASE_DURA,
    [4,3,2,3,2,2,0]
));

var ARMADURA_ANILLAS = "Anillas";
armaduras_set.push(new Armadura(
    ARMADURA_ANILLAS,
    new Dinero(50,0,0),
    9,
    DISP_TOTAL,
    60,       //Llevar armadura
    -20,     //penalizador natural
    2,      //restriccion movimiento
    15,     //entereza
    30,     //presencia
    ARMADURA_LOC_CAMISOLA,
    ARMADURA_CLASE_BLANDA,
    [4,3,1,2,0,1,0]
));

var ARMADURA_SEMICOMPLETA = "Semicompleta";
armaduras_set.push(new Armadura(
    ARMADURA_SEMICOMPLETA,
    new Dinero(100,0,0),
    13,
    DISP_TOTAL,
    70,       //Llevar armadura
    -20,     //penalizador natural
    3,      //restriccion movimiento
    16,     //entereza
    35,     //presencia
    ARMADURA_LOC_COMPLETA,
    ARMADURA_CLASE_DURA,
    [4,4,4,2,0,1,1]
));

var ARMADURA_ESCAMAS = "Escamas";
armaduras_set.push(new Armadura(
    ARMADURA_ESCAMAS,
    new Dinero(120,0,0),
    9,
    DISP_B,
    80,       //Llevar armadura
    -25,     //penalizador natural
    3,      //restriccion movimiento
    17,     //entereza
    35,     //presencia
    ARMADURA_LOC_COMPLETA,
    ARMADURA_CLASE_DURA,
    [4,4,4,3,0,3,1]
));

var ARMADURA_PLACAS = "Placas";
armaduras_set.push(new Armadura(
    ARMADURA_PLACAS,
    new Dinero(300,0,0),
    18,
    DISP_TOTAL,
    90,       //Llevar armadura
    -35,     //penalizador natural
    4,      //restriccion movimiento
    17,     //entereza
    40,     //presencia
    ARMADURA_LOC_COMPLETA,
    ARMADURA_CLASE_DURA,
    [5,4,5,3,0,3,1]
));

var ARMADURA_COMPLETA = "Completa";
armaduras_set.push(new Armadura(
    ARMADURA_COMPLETA,
    new Dinero(400,0,0),
    20,
    DISP_B,
    100,       //Llevar armadura
    -50,     //penalizador natural
    4,      //restriccion movimiento
    18,     //entereza
    45,     //presencia
    ARMADURA_LOC_COMPLETA,
    ARMADURA_CLASE_DURA,
    [5,5,5,4,0,4,2]
));

var ARMADURA_COMPLETA_PESADA = "Completa pesada";
armaduras_set.push(new Armadura(
    ARMADURA_COMPLETA_PESADA,
    new Dinero(700,0,0),
    30,
    DISP_A,
    120,       //Llevar armadura
    -60,     //penalizador natural
    5,      //restriccion movimiento
    19,     //entereza
    45,     //presencia
    ARMADURA_LOC_COMPLETA,
    ARMADURA_CLASE_DURA,
    [6,6,6,4,0,4,2]
));

var ARMADURA_CAMPAÑA_PESADA = "De campaña pesada";
armaduras_set.push(new Armadura(
    ARMADURA_CAMPAÑA_PESADA,
    new Dinero(800,0,0),
    25,
    DISP_A,
    150,       //Llevar armadura
    -70,     //penalizador natural
    6,      //restriccion movimiento
    20,     //entereza
    50,     //presencia
    ARMADURA_LOC_COMPLETA,
    ARMADURA_CLASE_DURA,
    [7,7,7,4,0,4,2]
));

/*
Para animales Coste Disp.
    Barda ligera 20 MO B
Barda pesada 150 MO B


*/