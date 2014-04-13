var origen;

origen = new Origen(
    ORIGEN_MOTH,
    function() {
        var azar = d100();

        if (azar <= 57) {
            return ETNIA_ASHER;
        } else if (azar <= 98) {
            return ETNIA_ZINNER ;
        } else if (azar <= 99) {
            return  ETNIA_NORNE;
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
    [IDIOMA_LATIN],
    ['Andrei','Ciprian','Constantin','Gavril','Nicolae','Petrica','Serghei','Silviu','Sorin','Stefan','Stelian','Traian','Vasile','Viorel','Virgiliu'],
    ['Andrea','Cemelia','Doina','Georgeta','Ileana','Ioana','Ionela','Iuliana','Luminita','Mihaela','Nicoleta','Ruxandra','Stefanía','Tereza','Viorica'],
    ['Arcos','Balitiu','Boji','Christinel','Cristea','Dancescu','Eliade','Ivanescu','Luca','Nicolae','Szekely','Tomescu','Urzica','Vlas','Zeklos'],
    ['Schlotterstein','Jaarenghäff','Monasterio de Stelea','Torda','Villa de Tres Cruces','Dürgabenh'],
    0,
    [],
    [
        {
            nombre: CLASE_BAJA,
            rango: 25,
            dinero: new Dinero(0,0,2),
            bonos: [
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
                    bono: 30
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 30
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_MITOS_LOCALES,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 70,
            dinero: new Dinero(0,70,0),
            bonos: [
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
                    bono: 30
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 30
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_MITOS_LOCALES,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_ZIGEUNER,
            rango: 90,
            dinero: new Dinero(0,50,0),
            bonos: [
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
                    habilidad: HB_HERBOLARIA,
                    bono: 10
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 10
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_TASACION,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_MITOS_LOCALES,
                    bono: 40
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(60,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_MITOS_LOCALES,
                    bono: 30
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 30
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_DWANHOLF,
    function() {
        var azar = d100();

        if (azar <= 22) {
            return  ETNIA_ASHER;
        } else if (azar <= 41) {
            return ETNIA_ZINNER;
        } else if (azar <= 57) {
            return ETNIA_TAYAHAR;
        } else if (azar <= 72) {
            return ETNIA_VILDIAN;
        } else if (azar <= 83) {
            return ETNIA_RYUAN;
        } else if (azar <= 90) {
            return ETNIA_AION;
        } else if (azar <= 96) {
            return ETNIA_DAEVAR;
        } else {
            return ETNIA_NORNE;
        }
    },
    [IDIOMA_TARAZV, IDIOMA_LATIN],
    ['Adelheid','Cornelis','Ernst','Frits','Godfried','Jozua','Kort','Laurens','Nicolaas','Pieter','Rembrandt','Ruben','Siemen','Stefanus','Valentijn'],
    ['Aleida','Ans','Carolien','Gisela','Hadewych','Katrien','Liesje','Lijsbeth','Maartje','Marja','Mieke','Myrthe','Renate','Sanne','Theria','Willemina'],
    ['Ampte','Breed','Buckout','Conklin','Dag','De Graff','Devenpeck','Haswell','Hogarth','Lansing','Mesick','Ostrander','Spoor','Van Keuren','Van Schoonhoven','Vanderspeigle','Westerveldt'],
    ['Puerto de Tibas','Puerto Rue','Pragna','Monasterio de Kirion','Puerto Ánfora','Enkido','Terrasanta','Lukka','Anateri'],
    0,
    [],
    [
        {
            nombre: CLASE_POBRE,
            rango: 23,
            dinero: new Dinero(0,0,4),
            bonos: [
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 30
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 10
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 30
                },
                {
                    habilidad: HB_NAVEGACION,
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
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 85,
            dinero: new Dinero(0,50,0),
            bonos: [
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 30
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 10
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 30
                },
                {
                    habilidad: HB_NAVEGACION,
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
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_ADINERADA,
            rango: 100,
            dinero: new Dinero(60,0,0),
            bonos: [
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 40
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
                    habilidad: HB_ROBO,
                    bono: 10
                },
                {
                    habilidad: HB_TASACION,
                    bono: 30
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);
