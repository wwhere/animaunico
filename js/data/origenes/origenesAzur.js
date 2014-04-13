var origen;

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
    [{
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
                especializacion: UI_ESP_LOCAL,
                bono: 20
            },
            {
                habilidad: HB_BAILE,
                bono: 20
            }
        ]
    }],
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
                    especializacion: UI_ESP_LOCAL,
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
                    especializacion: UI_ESP_LOCAL,
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
                    especializacion: UI_ESP_LOCAL,
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
                    especializacion: UI_ESP_LOCAL,
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

origen = new Origen(
    ORIGEN_REMO,
    function() {
        var azar = d100();

        if (azar <= 71) {
            return ETNIA_VILDIAN;
        } else if (azar <= 93) {
            return ETNIA_ASHER ;
        } else if (azar <= 97) {
            return ETNIA_DAEVAR ;
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
    ['Alessandro','Antonio','Carlo','Daniele','Davide','Edoardo','Enrico','Ettore','Francesco','Giacomo','Lorenzo','Mario','Paolo','Stefano','Valentino'],
    ['Agata','Alessia','Andrea','Carmela','Chiara','Diana','Giovanna','Lucía','Michele','Rosalia','Sara','Simona','Stefanía','Teresa'],
    ['Abbazia','Bellanti','Bianco','Corizzi','D´Agostino','Di Amato','Di Benedetto','Di Blasi','Di Gaetano','Di Luca','Dinolfo','Florio','Geraci','Marciano','Parrino','Pelligrino','Ridulfo','Scacciaferro','Vitale'],
    ['Bastel','Albino','Caliardo','Uzure','Dedo de Hierro','Itzelhaya','Caoria','Harma','Terravecchia'],
    0,
    [],
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
                    especializacion: UI_ESP_LOCAL,
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
                    especializacion: UI_ESP_LOCAL,
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
    [{
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
                especializacion: UI_ESP_LOCAL,
                bono: 20
            },
            {
                habilidad: HB_OCULTISMO,
                especializacion: UI_ESP_RELIGION,
                bono: 20
            },
            {
                habilidad: HB_BAILE,
                bono: 20
            }
        ]
    }],
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
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
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
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
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
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
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

