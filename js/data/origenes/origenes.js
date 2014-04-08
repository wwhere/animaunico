var origen;

origen = new Origen(
    ORIGEN_ABEL,
    function() {
        var azar = d100();

        if (azar <= 41) {
            return ETNIA_ASHER;
        } else if (azar <= 80) {
            return ETNIA_AION;
        } else if (azar <= 87) {
            return ETNIA_VILDIAN;
        } else if (azar <= 91) {
            return ETNIA_ZINNER;
        } else if (azar <= 95) {
            return ETNIA_RYUAN;
        } else if (azar <= 97) {
            return ETNIA_DAEVAR;
        } else if (azar <= 98) {
            return ETNIA_TAYAHAR;
        } else if (azar <= 99) {
            return ETNIA_NORNE;
        } else {
            var azar2 = d(3);

            switch (azar2) {
                case 1:
                    return ETNIA_VILDIAN;
                case 2:
                    return ETNIA_KWA;
                case 3:
                default:
                    return ETNIA_CELSUS;
            }
        }
    },
    [IDIOMA_LATIN,IDIOMA_AILISH,IDIOMA_YAMATO],
    ['Aleron','Aurelius','Cassius','Dante','Dominic','Gaius','Janus','Marcus','Maximilian','Nero','Nox','Silas','Solaris','Vicent','Virgil'],
    ['Alba','Alma','Angélica','Ardelis','Celia','Drucilla','Emma','Gloria','Integra','Levenia','Maris','Minerva','Priscilla','Shanna','Shion','Tricia','Zia'],
    ['Agius','Anderson','Attard','Borges','Brakys','Cassar','Durand','Faria','Galea','Grech','Laurens','Lynch','Major','Martius','Morison','Reid','Vicens'],
    ['Darel','Bryanta','Bethar','Buen Descanso','Ecamus','Arkángel','Tiberias','Leazhar','Neria','Yirath','Sura','Puerto de Eien','Puerto de Eburah','Eyran','Tharsis','Urim','Lonel','Sepher','Hod'],
    2,
    {
        nombre: CLASE_ALTA_NOBLEZA,
        dinero: new Dinero(1000,0,0),
        bonos: [
            {
                habilidad: HB_ESTILO,
                bono: 20
            },
            {
                habilidad: HB_MONTAR,
                bono: 20
            },
            {
                habilidad: HB_LIDERAZGO,
                bono: 40
            },
            {
                habilidad: HB_BAILE,
                bono: 20
            },
            {
                habilidad: HB_MUSICA,
                bono: 20
            },
            {
                habilidad: HB_PERSUASION,
                bono: 20
            },
            {
                habilidad: HB_HISTORIA,
                bono: 20
            }
        ]
    },
    [
        {
            nombre: CLASE_BAJA,
            rango: 10,
            dinero: new Dinero(0,0,5),
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
                    habilidad: HB_ADVERTIR,
                    bono: 30
                },
                {
                    habilidad: HB_TRUCOS_MANOS,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 60,
            dinero: new Dinero(1,0,0),
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
                    habilidad: HB_ADVERTIR,
                    bono: 30
                },
                {
                    habilidad: HB_TRUCOS_MANOS,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 90,
            dinero: new Dinero(20,0,0),
            bonos: [
                {
                    habilidad: HB_ESTILO,
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
                    habilidad: HB_BAILE,
                    bono: 20
                },
                {
                    habilidad: HB_TASACION,
                    bono: 30
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 30
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(150,0,0),
            bonos: [
                {
                    habilidad: HB_ESTILO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 40
                },
                {
                    habilidad: HB_BAILE,
                    bono: 20
                },
                {
                    habilidad: HB_MUSICA,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_ILMORA,
    function() {
        var azar = d100();

        if (azar <= 51) {
            return ETNIA_AION;
        } else if (azar <= 96) {
            return ETNIA_ASHER;
        } else if (azar <= 98) {
            return ETNIA_CELSUS;
        } else if (azar <= 99) {
            return ETNIA_ZINNER;
        } else {
            var azar2 = d(6);

            switch (azar2) {
                case 1:
                    return ETNIA_VILDIAN;
                case 2:
                    return ETNIA_KWA;
                case 3:
                    return ETNIA_RYUAN;
                case 4:
                    return ETNIA_NORNE;
                case 5:
                    return ETNIA_DAEVAR;
                case 6:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_LATIN],
    ['Alexander',' Ambrose','Andreas',' Coriander',' Damian',' Demetrius',' Dorian','Héctor',' Karsten',' Leander',' Marlas',' Morpheus','Nicodemus',' Platón',' Sirius',' Thadeus',' Tom',' Zander','Zenon'],
    ['Agnes',' Alannis','Anemone',' Calista',' Cassandra',' Cerelia',' Danae','Delia',' Erimentha',' Iliana',' Korene',' Larissa',' Maida','Melaney',' Nerina',' Nysa',' Paris',' Sophia',' Tasha',' Zoe'],
    ['Anastasia',' Baptiste',' Chloe',' Cornelius','Cynthia',' Diodorus',' Diotrephes',' Dorcas',' Eneas','Helen',' Jasper',' Lydia',' Otis',' Penélope',' Polyxena','Sophronia',' Teophilus',' Timotheus'],
    ['Eustace','Calysta','Hausser'],
    1,
    {
        nombre: CLASE_ALTA_NOBLEZA,
        dinero: new Dinero(600,0,0),
        bonos: [
            {
                habilidad: HB_ESTILO,
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
                habilidad: HB_CIENCIA,
                bono: 20
            },
            {
                habilidad: HB_HISTORIA,
                bono: 20
            },
            {
                habilidad: HB_BAILE,
                bono: 20
            },
            {
                habilidad: HB_MEMORIZAR,
                bono: 20
            },
            {
                habilidad: HB_MUSICA,
                bono: 20
            }
        ]
    },
    [
        {
            nombre: CLASE_BAJA,
            rango: 10,
            dinero: new Dinero(0,0,5),
            bonos: [
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 30
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_CIENCIA,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_MEDICINA,
                    bono: 20
                },
                {
                    habilidad: HB_MEMORIZAR,
                    bono: 20
                },
                {
                    habilidad: HB_ARTE,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 85,
            dinero: new Dinero(1,0,0),
            bonos: [
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 30
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_CIENCIA,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_MEDICINA,
                    bono: 20
                },
                {
                    habilidad: HB_MEMORIZAR,
                    bono: 20
                },
                {
                    habilidad: HB_ARTE,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(75,0,0),
            bonos: [
                {
                    habilidad: HB_ESTILO,
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
                    habilidad: HB_CIENCIA,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_BAILE,
                    bono: 20
                },
                {
                    habilidad: HB_MEMORIZAR,
                    bono: 20
                },
                {
                    habilidad: HB_MUSICA,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_HELENIA,
    function() {
        var azar = d100();

        if (azar <= 94) {
            return ETNIA_ASHER;
        } else if (azar <= 97) {
            return ETNIA_ZINNER;
        } else if (azar <= 99) {
            return ETNIA_AION ;
        } else  {
            var azar2 = d(7);

            switch (azar2) {
                case 1:
                    return ETNIA_VILDIAN;
                case 2:
                    return ETNIA_KWA;
                case 3:
                    return ETNIA_RYUAN;
                case 4:
                    return ETNIA_NORNE;
                case 5:
                    return ETNIA_DAEVAR;
                case 6:
                    return ETNIA_CELSUS;
                case 7:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_LATIN],
    ['Ambrus','Antal','Bence','Demeter','Edvard','Gergely','Gazsi','Henrik','Janos','Konrad','Miksa','Samuel','Szilard','Tibor','Vencel','Vilhelm'],
    ['Agnes','Annuska','Csilla','Edina','Gabriella','Gizella','Ildi','Kamilla','Mara','Panni','Rahel','Sarika','Szilvia','Terezia','Valeria'],
    ['Abduvaliyev','Bakics','Demko','Guran','Hamori','Hara','Imanci','Kajetan','Kasnar','Maloros','Ordina','Telek','Vasary','Veligan','Wessely','Zavadsky','Zsoldos'],
    ['Lacan','Lenci','Farna','Arklo','Fathia'],
    0,
    {},
    [
        {
            nombre: CLASE_BAJA,
            rango: 15,
            dinero: new Dinero(0,0,2),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 40
                },
                {
                    habilidad: HB_TREPAR,
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
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 60,
            dinero: new Dinero(0,50,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 40
                },
                {
                    habilidad: HB_TREPAR,
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
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOMADA,
            rango: 80,
            dinero: new Dinero(0,25,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 40
                },
                {
                    habilidad: HB_TREPAR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 40
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(60,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 40
                },
                {
                    habilidad: HB_TREPAR,
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
    ORIGEN_DALABORN,
    function() {
        var azar = d100();

        if (azar <= 73) {
            return ETNIA_ASHER;
        } else if (azar <= 85) {
            return ETNIA_AION ;
        } else if (azar <= 92) {
            return  ETNIA_NORNE;
        } else if (azar <= 96) {
            return  ETNIA_CELSUS;
        } else if (azar <= 99) {
            return  ETNIA_ZINNER;
        } else  {
            var azar2 = d(5);

            switch (azar2) {
                case 1:
                    return ETNIA_VILDIAN;
                case 2:
                    return ETNIA_KWA;
                case 3:
                    return ETNIA_RYUAN;
                case 4:
                    return ETNIA_DAEVAR;
                case 5:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_LATIN],
    ['Alexei','Andrei','Arkaidiy','Dima','Gavriil','Ion','Ivan','Kazimir','Morslav','Mischa','Pyotr','Sergei','Vasiliy','Yul','Yuri','Zasha'],
    ['Agnessa','Alisa','Anastasiya','Ekaterina','Ivanna','Kira','Marfa','Natasha','Tanya','Uliana','Valeriya','Yeva','Yevdokiya','Zinaida','Zoya'],
    ['Aparina','Baikov','Baranova','Belotserkovsky','Czartoryksa','Demine','Galiyeva','Gergiev','Ivakina','Katzev','Kursinska','Lutrova','Milyukov','Ortoff','Privalova','Shanin','Tretyak','Zarakova'],
    ['Nikoleva','Tzer','Ogara','Sendel','Shkar','Sillermay','Rakvara','Eron','Taranov','Pernov','Puerto Leena','Fuerte Garrison'],
    1,
    {
        nombre: CLASE_ALTA_NOBLEZA,
        dinero: new Dinero(600,0,0),
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
                habilidad: HB_INTIMIDAR,
                bono: 20
            },
            {
                habilidad: HB_LIDERAZGO,
                bono: 40
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
                habilidad: HB_HISTORIA,
                bono: 20
            }
        ]
    },
    [
        {
            nombre: CLASE_BAJA,
            rango: 15,
            dinero: new Dinero(0,0,5),
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
                    habilidad: HB_INTIMIDAR,
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
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_FORJA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 80,
            dinero: new Dinero(0,75,0),
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
                    habilidad: HB_INTIMIDAR,
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
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_FORJA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(75,0,0),
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
                    habilidad: HB_INTIMIDAR,
                    bono: 20
                },
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 40
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
                    habilidad: HB_HISTORIA,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_ALBERIA,
    function() {
        var azar = d100();

        if (azar <= 93) {
            return ETNIA_CELSUS ;
        } else if (azar <= 96) {
            return  ETNIA_ASHER;
        } else if (azar <= 98) {
            return  ETNIA_ZINNER;
        } else if (azar <= 99) {
            return ETNIA_AION ;
        } else  {
            var azar2 = d(6);

            switch (azar2) {
                case 1:
                    return ETNIA_VILDIAN;
                case 2:
                    return ETNIA_KWA;
                case 3:
                    return ETNIA_RYUAN;
                case 4:
                    return ETNIA_DAEVAR;
                case 5:
                    return ETNIA_NORNE;
                case 6:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_AILISH,IDIOMA_LATIN],
    ['Angus','Banagher','Blaine','Boyd','Brynn','Callahan','Calum','Cian','Edan','Fearghus','Gallagher','Kael','Keiran','Monahan','Neil','Sheridan','Zephan'],
    ['Aileen','Alana','Bridget','Carlin','Corentine','Edana','Fenella','Kara','Keira','Meghan','Myrna','Phiala','Reagan','Skyla','Tara','Trista','Vevina'],
    ['Abercrombie','Abernethy','Adair','Athol','Ballard','Barr','Campbell','Conway','Cormac','Dougall','Flaherty','Kavanagh','McFadden','McNamara','Owen','Sullivan'],
    ['Sylvania','Grafthon','Annan','Faolan','Keith','Desmont','Gretma','Reston','Belfort','Nairn','Herne'],
    0,
    {},
    [
        {
            nombre: CLASE_BAJA,
            rango: 10,
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
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                },
                {
                    habilidad: HB_TRAMPERIA,
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
                    habilidad: HB_TREPAR,
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
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                },
                {
                    habilidad: HB_TRAMPERIA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(60,0,0),
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
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_MUSICA,
                    bono: 30
                },
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 30
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_GALGADOS,
    function() {
        var azar = d100();

        if (azar <= 89) {
            return ETNIA_ASHER;
        } else if (azar <= 96) {
            return ETNIA_AION ;
        } else if (azar <= 99) {
            return  ETNIA_CELSUS;
        } else {
            return  ETNIA_ZINNER;
        }
    },
    [IDIOMA_LATIN],
    ['Andras','Arwel','Braith','Cadell','Cecil','Cedric','Creighton','Dylan','Evan','Grigor','Iago','Morgan','Myrddin','Owain','Rheinallt','Steffan','Trevor','Wallace','Yale'],
    ['Anwen','Ariane','Brynn','Crystin','Dilys','Elain','Gwen','Heledd','Lynn','Megan','Meinir','Morwenna','Rhian','Rhowenn','Seren','Tegan','Wendy'],
    ['Adams','Austin','Belth','Bevan','Bound','Canton','Clement','Devonald','Francis','Hughes','Kendrick','Landeg','Mendus','Nash','Rees','Treharne','Trevor','Voyle','Wynne','Yorath'],
    ['Hécate','Valle de Ospren','Siebenvolken','Hannelone','Ícarus','Torre de los Vientos','Valle de Adalia','Falsten','Hermingen','Rievem','Sölliken','Renroth', 'Benken'],
    0,
    {},
    [
        {
            nombre: CLASE_BAJA,
            rango: 10,
            dinero: new Dinero(0,0,3),
            bonos: [
                {
                    habilidad: HB_ACROBACIAS,
                    bono: 10
                },
                {
                    habilidad: HB_ATLETISMO,
                    bono: 30
                },
                {
                    habilidad: HB_TREPAR,
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
                    habilidad: HB_HERBOLARIA,
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
            dinero: new Dinero(0,50,0),
            bonos: [
                {
                    habilidad: HB_ACROBACIAS,
                    bono: 10
                },
                {
                    habilidad: HB_ATLETISMO,
                    bono: 30
                },
                {
                    habilidad: HB_TREPAR,
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
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(75,0,0),
            bonos: [
                {
                    habilidad: HB_ACROBACIAS,
                    bono: 10
                },
                {
                    habilidad: HB_ATLETISMO,
                    bono: 30
                },
                {
                    habilidad: HB_TREPAR,
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
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_ARLAN,
    function() {
        var azar = d100();

        if (azar <= 69) {
            return ETNIA_ASHER;
        } else if (azar <= 91) {
            return ETNIA_AION ;
        } else if (azar <= 96) {
            return ETNIA_VILDIAN;
        } else if (azar <= 99) {
            return ETNIA_ZINNER ;
        } else  {
            var azar2 = d(5);

            switch (azar2) {
                case 1:
                    return ETNIA_KWA;
                case 2:
                    return ETNIA_RYUAN;
                case 3:
                    return ETNIA_DAEVAR;
                case 4:
                    return ETNIA_NORNE;
                case 5:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_LATIN],
    ['Adrian','Alfred','Arden','Bentley','Blaze','Bradley','Branson','Clark','Dunstan','Edgar','Godwin','Graham','Hudson','Keaton','Norton','Scott','Tucker','Vince','Wolf','Zachary'],
    ['Aura','Blossom','Celeste','Coral','Edith','Ellen','Faith','Ivy','Jera','Mildred','Nicole','Scarlet','Vienne','Willow','Wren'],
    ['Auvrey','Bellecote','Dunham','Dunmore','Elison','Everlee','Frick','Falken','Galdwinn','Harford','Heridan','Jareth','Laith','Markham','Ormand','Remington','Stanfield','Turner','Tannor','Wilburn'],
    ['Londure','Iborr','Faro de Bronwen','Bhrame','Karh','Dylaen','Arboleda de Gwenlynn','Kalmar','Ennis','Renvyl','Navan'],
    1,
    {
        nombre: CLASE_ALTA_BURGUESIA,
        dinero: new Dinero(500,0,0),
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
                bono: 40
            },
            {
                habilidad: HB_ESTILO,
                bono: 10
            },
            {
                habilidad: HB_HISTORIA,
                bono: 20
            },
            {
                habilidad: HB_TASACION,
                bono: 40
            },
            {
                habilidad: HB_NAVEGACION,
                bono: 10
            }
        ]
    },
    [
        {
            nombre: CLASE_BAJA,
            rango: 5,
            dinero: new Dinero(0,0,3),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 10
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 40
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_TASACION,
                    bono: 40
                },
                {
                    habilidad: HB_NAVEGACION,
                    bono: 30
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 70,
            dinero: new Dinero(0,75,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 10
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 40
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_TASACION,
                    bono: 40
                },
                {
                    habilidad: HB_NAVEGACION,
                    bono: 30
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 100,
            dinero: new Dinero(50,0,0),
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
                    bono: 40
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 10
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_TASACION,
                    bono: 40
                },
                {
                    habilidad: HB_NAVEGACION,
                    bono: 10
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_KANON,
    function() {
        var azar = d100();

        if (azar <= 82) {
            return ETNIA_ASHER;
        } else if (azar <= 92) {
            return ETNIA_AION ;
        } else if (azar <= 98) {
            return ETNIA_VILDIAN;
        } else if (azar <= 99) {
            return ETNIA_DAEVAR ;
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
    ['Alesky','Aron','Borys','Celestyn','Dawid','Ferdynand','Gustaw','Ignacy','Iwan','Janek','Kornel','Ludwik','Marek','Miloslaw','Tymon','Witold','Zygfryd'],
    ['Ania','Edyta','Ewa','Hania','Kaja','Lidia','Malwina','Melania','Ola','Patrycja','Seweryna','Sylwia','Urszula','Waleria','Wiola','Zoja'],
    ['Adamski','Aviza','Bielenda','Ceran','Czekaj','Derda','Dubilas','Faron','Harasym','Jaktorowo','Kalak','Nowak','Parzysz','Polek','Rawa','Tokarski','Wyrostek','Zachemski'],
    ['Aldon','Bendek','La iglesia de San Bernabé','Castillo de Odessa','Kassia','Brudge','Berke','Reisz','Terhel'],
    0,
    {},
    [
        {
            nombre: CLASE_BAJA,
            rango: 10,
            dinero: new Dinero(0,0,3),
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
                    bono: 30
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_NAVEGACION,
                    bono: 30
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 85,
            dinero: new Dinero(0,75,0),
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
                    bono: 30
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_NAVEGACION,
                    bono: 30
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(60,0,0),
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
                    bono: 30
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_NAVEGACION,
                    bono: 30
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_TOGARINI,
    function() {
        var azar = d100();

        if (azar <= 76) {
            return  ETNIA_DAEVAR ;
        } else if (azar <= 90) {
            return ETNIA_VILDIAN;
        } else if (azar <= 96) {
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
    ['Alaric','Arnold','Berg','Bert','Braun','Carl','Diedrick','Durin','Emil','Franz','Gunther','Heinrich','Herman','Kaiser','Koen','Luther','Roland','Seifer','Werner'],
    ['Adalia','Allison','Analise','Annika','Bertha','Clove','Crescentia','Edda','Emera','Griselda','Ida','Liesel','Mariel','Marlene','Milla','Rae','Walda','Wilhelmina'],
    ['Aachen','Adler','Barth','Berg','Eichel','Esisenberg','Fassbinder','Fiedler','Gloeckner','Hertz','Hirsch','Kalb','Mauser','Nacht','Reinhard','Roth','Sankt','Schneider','Strauss','Weiss'],
    ['Aubrey','Wilkend','Kaine','Reindhold','Waldemar','Seifer','El Monasterio de la Sagrada Iluminación','Schank','Hausburz','Reine'],
    1,
    {
        nombre: CLASE_ALTA_NOBLEZA,
        dinero: new Dinero(900,0,0),
        bonos: [
            {
                habilidad: HB_MONTAR,
                bono: 20
            },
            {
                habilidad: HB_ESTILO,
                bono: 20
            },
            {
                habilidad: HB_FRIALDAD,
                bono: 20
            },
            {
                habilidad: HB_LIDERAZGO,
                bono: 20
            },
            {
                habilidad: HB_INTIMIDAR,
                bono: 20
            },
            {
                habilidad: HB_PERSUASION,
                bono: 20
            },
            {
                habilidad: HB_HISTORIA,
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
            rango: 10,
            dinero: new Dinero(0,0,3),
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
                    habilidad: HB_TREPAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_TRUCOS_MANOS,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 60,
            dinero: new Dinero(1,0,0),
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
                    habilidad: HB_TREPAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_TRUCOS_MANOS,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 90,
            dinero: new Dinero(15,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 20
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
                    habilidad: HB_TASACION,
                    bono: 40
                },
                {
                    habilidad: HB_BAILE,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(120,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
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
