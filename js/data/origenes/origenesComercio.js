var origen;

origen = new Origen(
    ORIGEN_GABRIEL,
    function() {
        var azar = d100();

        if (azar <= 46) {
            return ETNIA_AION ;
        } else if (azar <= 78) {
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
                    return ETNIA_VILDIAN ;
                case 4:
                    return ETNIA_DAEVAR;
                case 5:
                    return  ETNIA_NORNE;
                case 6:
                default:
                    return ETNIA_TAYAHAR;
            }
        }
    },
    [IDIOMA_LATIN],
    ['Adolphe','Alphonse','Armand','Camille','Edgard','Évariste','Fernand','Gastón','Julien','Léopold','Lothaire','Philippe','Nicolas','Stéphane','Vespasien','Zacharie'],
    ['Adelaïde','Alice','Angeline','Arianne','Christine','Corinne','Florianne','Hyacinthe','Joceline','Lucille','Melissa','Morgane','Sophie','Yvette','Zoé'],
    ['Ackerman','Aldridge','Beaumont','Bernard','Bussey','D´Aubigne','De Lorme','Deville','Edith','Facet','Garnier','Louis','Neal','Rousseau','Vasser'],
    ['Chaville','La Roche','Citadelle de Beaufort','La academia de Astria','Deimos','Dupois','Île du Hirondelle','Chateau de Justine','Bellegarde','Heverville','Voillemont','Saulxerotte','Ourges','Le Drac'],
    1,
    [{
        nombre: CLASE_ALTA_NOBLEZA,
        dinero: new Dinero(1000,0,0),
        bonos: [
            {
                habilidad: HB_MONTAR,
                bono: 20
            },
            {
                habilidad: HB_ESTILO,
                bono: 40
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
                habilidad: HB_HISTORIA,
                bono: 20
            },
            {
                habilidad: HB_BAILE,
                bono: 20
            },
            {
                habilidad: ELEGIR,
                opciones: [HB_MUSICA,HB_ARTE],
                bono: 10
            }
        ]
    }],
    [
        {
            nombre: CLASE_INDIGENTE,
            rango: 25,
            dinero: new Dinero(0,0,2),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_ACROBACIAS,
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
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 65,
            dinero: new Dinero(1,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_ACROBACIAS,
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
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 90,
            dinero: new Dinero(30,0,0),
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
                    habilidad: HB_PERSUASION,
                    bono: 40
                },
                {
                    habilidad: HB_TASACION,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_BAILE,
                    bono: 30
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_MUSICA,HB_ARTE],
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(170,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 40
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
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_BAILE,
                    bono: 20
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_MUSICA,HB_ARTE],
                    bono: 10
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_PHAION,
    function() {
        var azar = d100();

        if (azar <= 50) {
            return  ETNIA_ASHER;
        } else if (azar <= 90) {
            return ETNIA_RYUAN ;
        } else if (azar <= 99) {
            return ETNIA_AION ;
        } else  {
            var azar2 = d(5);

            switch (azar2) {
                case 1:
                    return ETNIA_VILDIAN;
                case 2:
                    return ETNIA_ZINNER;
                case 3:
                    return ETNIA_TAYAHAR ;
                case 4:
                    return ETNIA_DAEVAR;
                case 5:
                default:
                    return  ETNIA_NORNE;
            }
        }
    },
    [IDIOMA_LATIN, IDIOMA_YAMATO, IDIOMA_OGASHIMA],
    ['Akira','Bruce','Calvin','Daisuke','Devereux','Henry','Hugh','Isamu','Kazuki','Louis','Makoto','Martin','Paul','Ryo','Troy','Yoshiro'],
    ['Ai','Adela','Akemi','Brittany','Fran','Francene','Frannie','Haruko','Hitomi','Lisa','Lorraine','Midori','Nancy','Ran','Sakura','Suzume','Yuri'],
    ['Ada','Agnew','Asuhara','Dangerfield','Douay','Eguchi','Everard','Fujimoto','Goodrich','Hisikawa','Herman','Koizumi','Koyama','Kurogane','Rowena','Sully','Ueda','Worth','Yoshida'],
    ['Markushias','Mifune','Hong Kua','Villa de Zabil','Castillo Takeda','Puerto Meidel','Eldiah','Busselton','Borris','Moriya'],
    0,
    [],
    [
        {
            nombre: CLASE_BAJA,
            rango: 15,
            dinero: new Dinero(0,0,4),
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
                    habilidad: HB_PERSUASION,
                    bono: 30
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_NAVEGACION,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 60,
            dinero: new Dinero(0,80,0),
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
                    habilidad: HB_PERSUASION,
                    bono: 30
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_NAVEGACION,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 85,
            dinero: new Dinero(60,0,0),
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
                    habilidad: HB_LIDERAZGO,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 30
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_TASACION,
                    bono: 20
                },
                {
                    habilidad: HB_BAILE,
                    bono: 20
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_MUSICA,HB_ARTE],
                    bono: 10
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
                    habilidad: HB_ESTILO,
                    bono: 20
                },
                {
                    habilidad: HB_LIDERAZGO,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 30
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_TASACION,
                    bono: 20
                },
                {
                    habilidad: HB_BAILE,
                    bono: 20
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_MUSICA,HB_ARTE],
                    bono: 10
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);
