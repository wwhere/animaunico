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
    [],
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
                    habilidad: ELEGIR,
                    opciones: [HB_INTIMIDAR,HB_MUSICA],
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_RASTREAR, HB_HISTORIA],
                    especializacion: ["",UI_ESP_LOCAL],
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
                    habilidad: ELEGIR,
                    opciones: [HB_INTIMIDAR,HB_MUSICA],
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_RASTREAR, HB_HISTORIA],
                    especializacion: ["",UI_ESP_LOCAL],
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
                    habilidad: ELEGIR,
                    opciones: [HB_INTIMIDAR,HB_MUSICA],
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_RASTREAR, HB_HISTORIA],
                    especializacion: ["",UI_ESP_LOCAL],
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
    [],
    [
        {
            nombre: CLASE_NORTEÑO_POBRE,
            rango: 20,
            dinero: new Dinero(0,0,3),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_TREPAR,
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
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                },
                {
                    habilidad: HB_RESISTENCIA_DOLOR,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NORTEÑO,
            rango: 60,
            dinero: new Dinero(0,50,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_TREPAR,
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
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                },
                {
                    habilidad: HB_RESISTENCIA_DOLOR,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_SAERINMIR,
            rango: 85,
            dinero: new Dinero(0,50,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_TREPAR,
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
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_NAVEGACION,
                    bono: 20
                },
                {
                    habilidad: HB_RESISTENCIA_DOLOR,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(50,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
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
                    habilidad: HB_LIDERAZGO,
                    bono: 40
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_RESISTENCIA_DOLOR,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_HENDELL,
    function() {
        var azar = d100();

        if (azar <= 92) {
            return ETNIA_NORNE ;
        } else if (azar <= 97) {
            return ETNIA_ASHER ;
        } else if (azar <= 99) {
            return ETNIA_ZINNER ;
        } else  {
            var azar2 = d(6);

            switch (azar2) {
                case 1:
                    return ETNIA_KWA;
                case 2:
                    return ETNIA_RYUAN;
                case 3:
                    return  ETNIA_DAEVAR;
                case 4:
                    return ETNIA_VILDIAN;
                case 5:
                    return ETNIA_AION ;
                case 6:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_HERMITAL,IDIOMA_LATIN],
    ['Adrian','Andrei','Bronislav','Feofan','Ferapont','Fyodor','Igor','Ilari','Isidor','Ivan','Maksim','Mikhail','Nikolai','Rolan','Shura','Vlasi','Yasha','Yulian','Yuriy'],
    ['Alisa','Annushka','Ivanna','Manya','Marfa','Sasha','Sofya','Tanya','Uliana','Valeriya','Yesfir','Yevdokiya','Yuliya','Zhanna','Zinaida'],
    ['Abramova','Aleksanshkin','Artamova','Balakirev','Batalova','Budarin','Bzowski','Chernekov','Donkova','Gaidar','Gerviev','Koukleva','Kulikova','Militenko','Omelchenko','Radinov','Shcerbina','Svartsevich','Vertinskaya','Zheronkina'],
    ['Bastión Karlsrude, El Dragón','Bastión Hymir, El Halcón','Bastión Gilnangor, La Serpiente','Bastión Redgafer, El Erizo','Bastión Olafer, El Gigante','Bastión Bergenfaur, La Araña','Muninborg','Ritgernhauf','Nackasen'],
    0,
    [],
    [
        {
            nombre: CLASE_CAMPESINO,
            rango: 20,
            dinero: new Dinero(0,0,2),
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
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
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
                    bono: 30
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 30
                }
            ]
        },
        {
            nombre: CLASE_NORTEÑO,
            rango: 65,
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
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
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
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_LOCHGJEST,
            rango: 90,
            dinero: new Dinero(0,30,0),
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
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 20
                },
                {
                    habilidad: HB_RESISTENCIA_DOLOR,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 20
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                },
                {
                    habilidad: HB_MEMORIZAR,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_PRIMERA_CASTA,
            rango: 100,
            dinero: new Dinero(70,0,0),
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
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
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
                    habilidad: HB_LIDERAZGO,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
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

