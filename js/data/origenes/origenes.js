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
