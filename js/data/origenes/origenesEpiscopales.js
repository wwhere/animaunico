var origen;

origen = new Origen(
    ORIGEN_EL_DOMINIO,
    function() {
        var azar = d100();

        if (azar <= 51) {
            return ETNIA_VILDIAN  ;
        } else if (azar <= 90) {
            return ETNIA_ASHER ;
        } else if (azar <= 99) {
            return ETNIA_DAEVAR  ;
        } else  {
            var azar2 = d(6);

            switch (azar2) {
                case 1:
                    return ETNIA_KWA;
                case 2:
                    return ETNIA_RYUAN;
                case 3:
                    return  ETNIA_AION;
                case 4:
                    return ETNIA_ZINNER;
                case 5:
                    return  ETNIA_NORNE;
                case 6:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_LATIN],
    ['Aarón','Allon','Carpus','Chenaniah','Damaris','Drusilla','Gemariah','Hezekiah','Ichabod','Jacob','Jeremiel','Lemuel','Nereus','Nimrod','Raphael','Samuel','Uriel'],
    ['Abiah','Abilene','Adah','Eunice','Hephzibah','Huldah','Jael','Jedidah','Jemima','Julia','Leah','Martha','Moriah','Noa','Persis','Sapphira','Selah','Zibiah'],
    ['Abijah','Bartholomew','Bartimeus','Benjamin','Cone','Daniels','Davids','Heber','Jones','Jorden','Judd','Levy','Mary','Miriam','Thomas','Zachariah'],
    ['Albídion','La Fe','Tarvos','Santa Clara','Basílica de Celes','Baldemar','Ancona','Lazio','Arzano'],
    1,
    [{
        nombre: CLASE_ALTA_NOBLEZA,
        dinero: new Dinero(700,0,0),
        bonos: [
            {
                habilidad: HB_LIDERAZGO,
                bono: 20
            },
            {
                habilidad: HB_PERSUASION,
                bono: 40
            },
            {
                habilidad: HB_HISTORIA,
                especializacion: UI_ESP_CRISTIANA,
                bono: 40
            },
            {
                habilidad: HB_OCULTISMO,
                especializacion: UI_ESP_RELIGION,
                bono: 60
            }
        ]
    },{
        nombre: CLASE_CARDENAL,
        dinero: new Dinero(700,0,0),
        bonos: [
            {
                habilidad: HB_LIDERAZGO,
                bono: 20
            },
            {
                habilidad: HB_PERSUASION,
                bono: 40
            },
            {
                habilidad: HB_HISTORIA,
                especializacion: UI_ESP_CRISTIANA,
                bono: 40
            },
            {
                habilidad: HB_OCULTISMO,
                especializacion: UI_ESP_RELIGION,
                bono: 60
            }
        ]
    }
    ],
    [
        {
            nombre: CLASE_BAJA,
            rango: 20,
            dinero: new Dinero(0,0,2),
            bonos: [
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
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_CRISTIANA,
                    bono: 50
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
                    bono: 50
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 75,
            dinero: new Dinero(0,70,0),
            bonos: [
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
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_CRISTIANA,
                    bono: 50
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
                    bono: 50
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 88,
            dinero: new Dinero(80,0,0),
            bonos: [
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 40
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_CRISTIANA,
                    bono: 40
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
                    bono: 60
                }
            ]
        },
        {
            nombre: CLASE_SACERDOTE,
            rango: 100,
            dinero: new Dinero(80,0,0),
            bonos: [
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 40
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_CRISTIANA,
                    bono: 40
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
                    bono: 60
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_ARGOS,
    function() {
        var azar = d100();

        if (azar <= 89) {
            return  ETNIA_VILDIAN ;
        } else if (azar <= 93) {
            return ETNIA_ASHER  ;
        } else if (azar <= 96) {
            return ETNIA_DAEVAR  ;
        } else if (azar <= 99) {
            return ETNIA_TAYAHAR  ;
        } else  {
            var azar2 = d(4);

            switch (azar2) {
                case 1:
                    return ETNIA_RYUAN;
                case 2:
                    return ETNIA_ZINNER;
                case 3:
                    return ETNIA_AION;
                case 4:
                default:
                    return  ETNIA_NORNE;
            }
        }
    },
    [IDIOMA_LATIN],
    ['Adolfo','Alberto','Basilio','Desiderio','Felipe','Germán','Guillermo','Hernando','Íñigo','Juan','Octavio','Raúl','Rubén','Salvador','Víctor'],
    ['Adelaida','Ángela','Beatriz','Carmen','Cristina','Esmeralda','Isabel','Laura','Noelia','Pilar','Sofía','Susana','Teresa','Verónica','Zoraida'],
    ['Aguilar','Aranda','Cano','Fernández','García','Hernández','Lázaro','Lorenzo','Menéndez','Ortega','Ramírez','Román','Tortajada','Vázquez','Zamorano'],
    ['Ilion','Serrano','Pylaia','Medina del Monte','Bastionblanco','Cerezomuerto','Bohiles','Valls','Las Torres','Valentia','SanLorenzo','Ribera'],
    0,
    [],
    [
        {
            nombre: CLASE_BAJA,
            rango: 20,
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
                    habilidad: HB_RASTREAR,
                    bono: 10
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_RESISTENCIA_DOLOR,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
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
                    habilidad: HB_TREPAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 10
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_RESISTENCIA_DOLOR,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
                    bono: 30
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
                    bono: 10
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 30
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);
