var origen;

origen = new Origen(
    ORIGEN_GOLDAR,
    function() {
        var azar = d100();

        if (azar <= 91) {
            return ETNIA_NORNE  ;
        } else if (azar <= 97) {
            return ETNIA_ZINNER ;
        } else if (azar <= 99) {
            return ETNIA_ASHER ;
        } else  {
            var azar2 = d(6);

            switch (azar2) {
                case 1:
                    return ETNIA_KWA;
                case 2:
                    return ETNIA_RYUAN;
                case 3:
                    return ETNIA_VILDIAN ;
                case 4:
                    return ETNIA_DAEVAR;
                case 5:
                    return ETNIA_AION ;
                case 6:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_ARKES],
    ['Aren','BjornDelling','Halden','Hans','Henrik','Kort','Loki','Rolf','Skylar','Sven','Torgny','Torsten','Tuve','Valdemar','Viggo','Yorick'],
    ['Anika','Brenda','Elin','Elsa','Freja','Gala','Gersemi','Hanne','Helsa','Ingrid','Karina','Krista','Maija','Marja','Signa','Sonja','Swann','Tyra','Toril'],
    ['Aabak','Arnestsen','Baarlund','Crantz','Flensborger','Gaden','Helgesen','Hoflund','Horn','Juel','Klocher','Marcussen','Paaske','Sevaldsatter','Torgnes','VonAndersen','VonStrachen','Weisser'],
    ['Clan Ygnling','Clan Uzuring','Clan Thurizung','Clan Baldisung','Clan Skuling','Billkenfest','Falanda','Nürern','Landhoff','Komerfest','Kainkasutur','Puerta de Surthein','Hermagor','Veenhuigen'],
    0,
    {},
    [
        {
            nombre: CLASE_NORTEÑO_DESHONRADO,
            rango: 7,
            dinero: new Dinero(0,0,1),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 30
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 30
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 10
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_NORTEÑO_DESTERRADO,
            rango: 15,
            dinero: new Dinero(0,0,1),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 30
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 30
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 10
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_CAMPESINO,
            rango: 50,
            dinero: new Dinero(0,50,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 30
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 30
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 10
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_NORTEÑO,
            rango: 85,
            dinero: new Dinero(0,50,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 10
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 30
                }
            ]
        },
        {
            nombre: CLASE_ERLING,
            rango: 90,
            dinero: new Dinero(50,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR, //TODO O MUSICA
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR, //TODO O HISTORIA
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_SKLAMO,
            rango: 95,
            dinero: new Dinero(50,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR, //TODO O MUSICA
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR, //TODO O HISTORIA
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_ESCALDO_HONORABLE,
            rango: 100,
            dinero: new Dinero(50,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR, //TODO O MUSICA
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR, //TODO O HISTORIA
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_HAUFMAN,
    function() {
        var azar = d100();

        if (azar <= 98) {
            return ETNIA_NORNE ;
        } else if (azar <= 99) {
            return ETNIA_ZINNER  ;
        } else  {
            var azar2 = d(7);

            switch (azar2) {
                case 1:
                    return ETNIA_KWA;
                case 2:
                    return ETNIA_RYUAN;
                case 3:
                    return  ETNIA_ASHER;
                case 4:
                    return ETNIA_VILDIAN;
                case 5:
                    return ETNIA_DAEVAR ;
                case 6:
                    return ETNIA_AION ;
                case 7:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_ARKES],
    ['Axel','Boden','Britt','Dyre','Erling','Harold','Kris','Lamont','Mimir','Nansen','Olaf','Orn','Soren','Trygg','Vidar','Wray'],
    ['Astrid','Brigit','Brynja','Eirny','Erla','Gerd','Gisli','Ildri','Karena','Laine','Lis','Malin','Savea','Thora','Úrsula','Winka'],
    ['Adamsdatter','Aslaksdotter','Clemensdatter','Danchertsen','Doth','Frey','Gjevik','Hakonsson','Kitteslvik','Morseth','Olrich','Skjeldulvsson','Thygesdatter','Vosbein','Wadel','Wenzel'],
    ['Hildestheinn','Castillo de Gaïtende','Annar','Mullenheinn','Alfrothul','Schild'],
    0,
    {},/******TODO POR AQUI***********/
    [
        {
            nombre: CLASE_BAJA,
            rango: 20,
            dinero: new Dinero(0,0,1),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_SALTAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 20
                },
                {
                    habilidad: HB_ROBO,
                    bono: 20
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 80,
            dinero: new Dinero(0,20,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_SALTAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 20
                },
                {
                    habilidad: HB_ROBO,
                    bono: 20
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 90,
            dinero: new Dinero(5,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_TASACION,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(30,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_TASACION,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_BELLAFONTE,
    function() {
        var azar = d100();

        if (azar <= 80) {
            return ETNIA_VILDIAN;
        } else if (azar <= 91) {
            return ETNIA_DAEVAR;
        } else if (azar <= 98) {
            return ETNIA_ASHER ;
        } else if (azar <= 99) {
            return ETNIA_AION ;
        } else  {
            var azar2 = d(5);

            switch (azar2) {
                case 1:
                    return ETNIA_KWA;
                case 2:
                    return ETNIA_RYUAN;
                case 3:
                    return ETNIA_ZINNER ;
                case 4:
                    return ETNIA_NORNE;
                case 5:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_LATIN],
    ['Agostino','Ángelo','Benito','Cirocco','Darío','Domani','Donato','Fabrizio','Gaetano','Giancarlo','Gustavo','Lazzaro','Maurizio','Nicola','Paolo','Umberto'],
    ['Alda','Andrea','Benita','Camila','Cinzia','Emanuele','Gia','Luca','Luciana','Melita','Mistico','Natalia','Ornella','Paola','Rocío','Sarafina','Valeria','Viviana'],
    ['Abatti','Accidio','Barberi','Bezzo','Cacicia','Choisio','Messina','Nicoletti','Ozello','Preatoni','Sacane','Tarsitano','Teresi','Testa','Ubertino','Zafrano'],
    ['Raverna','Faro de Lucerna','Elisio','Cedonia','Ascani','Puerto de Ripia','Enna','Ciavolo','Musevera'],
    1,
    {
        nombre: CLASE_ALTA_NOBLEZA,
        dinero: new Dinero(800,0,0),
        bonos: [
            {
                habilidad: HB_ATLETISMO,
                bono: 20
            },
            {
                habilidad: HB_MONTAR,
                bono: 30
            },
            {
                habilidad: HB_LIDERAZGO,
                bono: 40
            },
            {
                habilidad: HB_ADVERTIR,
                bono: 10
            },
            {
                habilidad: HB_FRIALDAD,
                bono: 20
            },
            {
                habilidad: HB_HISTORIA,
                bono: 20
            },
            {
                habilidad: HB_OCULTISMO,
                bono: 20
            },
            {
                habilidad: HB_BAILE,
                bono: 20
            }
        ]
    },
    [
        {
            nombre: CLASE_BAJA,
            rango: 20,
            dinero: new Dinero(0,0,4),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 30
                },
                {
                    habilidad: HB_NADAR,
                    bono: 10
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 80,
            dinero: new Dinero(0,80,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 30
                },
                {
                    habilidad: HB_NADAR,
                    bono: 10
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(100,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 30
                },
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 40
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 10
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    bono: 20
                },
                {
                    habilidad: HB_BAILE,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

