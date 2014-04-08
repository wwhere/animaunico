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
