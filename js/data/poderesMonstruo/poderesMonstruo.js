/*

PoderMonstruo(
    "Nombre",
    [
        //categorias
        {
            nombre: "Opciones",
            tipo: "Obligatoria",
            efecto: [],
            conNiveles: true,
            [
                //niveles
                {
                    nombre:,
                    tipo:
                    efecto: []
                },
                .
                .
                .
            ]
        },
        .
        .
        .
    ]
)

 */

poder = new PoderMonstruo(
    "Armas naturales", //nombre
    [
        {
            nombre : "Armas naturales", //nombre
            coste : 20, //coste
            gnosis: 0, //gnosis
            efecto: [] //efecto
        }
    ]
);

poder = new PoderMonstruo(
    "Ataques adicionales", //nombre
    [
        {
            nombre: 'Ataque adicional con –60 a su HA final',
            coste: 20,
            gnosis: 0,
            efecto: []
        },
        {
            nombre: 'Ataque adicional con –50 a su HA final',
            coste: 30,
            gnosis: 0,
            efecto: []
        },
        {
            nombre: 'Ataque adicional con –40 a su HA final',
            coste: 40,
            gnosis: 0,
            efecto: []
        },
        {
            nombre: 'Ataque adicional con –30 a su HA final',
            coste: 50,
            gnosis: 5,
            efecto: []
        },
        {
            nombre: 'Ataque adicional con –20 a su HA final',
            coste: 60,
            gnosis: 5,
            efecto: []
        },
        {
            nombre: 'Ataque adicional con –10 a su HA final',
            coste: 80,
            gnosis: 10,
            efecto: []
        },
        {
            nombre: 'Ataque adicional completo',
            coste: 100,
            gnosis: 15,
            efecto: []
        }
    ]
);

poder = new PoderMonstruo(
    "Daño incrementado", //nombre
    [
        {
            nombre: '+10 al daño',
            coste: 10,
            gnosis: 0,
            efecto: []
        },
        {
            nombre: '+20 al daño',
            coste: 20,
            gnosis: 0,
            efecto: []
        },
        {
            nombre: '+30 al daño',
            coste: 30,
            gnosis: 0,
            efecto: []
        },
        {
            nombre: '+40 al daño',
            coste: 40,
            gnosis: 0,
            efecto: []
        },
        {
            nombre: '+50 al daño',
            coste: 50,
            gnosis: 5,
            efecto: []
        },
        {
            nombre: '+60 al daño',
            coste: 60,
            gnosis: 10,
            efecto: []
        },
        {
            nombre: '+80 al daño',
            coste: 80,
            gnosis: 20,
            efecto: []
        },
        {
            nombre: '+100 al daño',
            coste: 100,
            gnosis: 25,
            efecto: []
        },
        {
            nombre: '+120 al daño',
            coste: 120,
            gnosis: 30,
            efecto: []
        }
    ]
);

poder = new PoderMonstruo(
    "Reacción incrementada", //nombre
    [
        {
            nombre: '+10 al turno natural',
            coste: 10,
            gnosis: 0,
            efecto: []
        },
        {
            nombre: '+20 al turno natural',
            coste: 20,
            gnosis: 10,
            efecto: []
        },
        {
            nombre: '+30 al turno natural',
            coste: 30,
            gnosis: 20,
            efecto: []
        }
    ]
);

poder = new PoderMonstruo(
    "Dañar energía", //nombre
    [
        {
            nombre : "Dañar energía", //nombre
            coste : 10, //coste
            gnosis: 10, //gnosis
            efecto: [] //efecto
        }
    ]
);

poder = new PoderMonstruo(
    "Modificador de armadura", //nombre
    [
        {
            nombre: '-1 a la TA defensora',
            coste: 10,
            gnosis: 0,
            efecto: []
        },
        {
            nombre: '-2 a la TA defensora',
            coste: 15,
            gnosis: 10,
            efecto: []
        },
        {
            nombre: '-3 a la TA defensora',
            coste: 20,
            gnosis: 15,
            efecto: []
        },
        {
            nombre: '-4 a la TA defensora',
            coste: 25,
            gnosis: 20,
            efecto: []
        },
        {
            nombre: '-5 a la TA defensora',
            coste: 30,
            gnosis: 25,
            efecto: []
        }
    ]
);

poder = new PoderMonstruo(
    "Ataque especial",
    [
    ]
);

Distancia
Hasta una distancia de 25 metros 10 5
Hasta una distancia de 50 metros 20 10
Hasta una distancia de 100 metros 30 15
Hasta una distancia de 250 metros 40 20
Hasta una distancia de 500 metros 50 25
Hasta una distancia de un kilómetro 60 30
Hasta una distancia de 10 kilómetros 70 35
Hasta cualquier distancia visible 80 40
Daño
Daño base 40 10 5
Daño base 50 15 10
Daño base 60 20 10
Daño base 80 25 10
Daño base 100 30 15
Daño base 120 50 20
Daño base 150 60 20
Daño base 200 80 25
Daño base 250 100 30
Área
Un metro de radio 10 10
3 metros de radio 20 10
5 metros de radio 30 15
10 metros de radio 40 20
25 metros de radio 50 25
50 metros de radio 60 30
100 metros de radio 80 35
Un ataque adicional 5 10
Sin límite 60 20
Penalizadores
Requiere un turno de preparatoria -10 5
Requiere 2 turnos de preparatoria -20 5
Requiere 3 turnos de preparatoria -30 5
Requiere 5 turnos de preparatoria -40 5
Requiere 10 turnos de preparatoria -50 5