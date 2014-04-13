var origen;

origen = new Origen(
    ORIGEN_KUSHISTAN,
    function() {
        var azar = d100();

        if (azar <= 97) {
            return ETNIA_TAYAHAR   ;
        } else if (azar <= 99) {
            return ETNIA_ASHER ;
        } else  {
            var azar2 = d(7);

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
                    return ETNIA_ZINNER ;
                case 7:
                default:
                    return ETNIA_NORNE;
            }
        }
    },
    [IDIOMA_JASHU, IDIOMA_LATIN],
    ['Abb-Al-Qadir','Ahmad','Fahim','Fihr','Hadi','Hashim','Ibrahim','Khalid','Muhammad','Rabi','Rashid','Shakir','Tahir','Umar','Wasim','Yushua','Ziya'],
    ['Alya','Ayda','Farah','Fátima','Ghadir','Hadiyya','Ihsan','Jalila','Karam','Lamya','Malaika','Muna','Saira','Tabassum','Thana','Thurayya','Zahra'],
    ['Abbar','Abdul','Karim','Abu Nayvan','Abu Zinada','Al-Ajou','Al-Saidi','Ansarr','Ashoor','Attar','Baesham','Baroom','Bohaimid','Fitaihi','Jamil','Mufarrij','Nassif','Sa´id','Silsilah'],
    ['Khwarel la Grande','Karjah','Nahime','Irinfahrat','Garmeh Farath','Lakhdar','Haruma','Templo de Ka','Puerto Tahar','Muhassin','Madha'],
    1,
    [{
        nombre: CLASE_NOBLEZA,
        dinero: new Dinero(300,0,0),
        bonos: [
            {
                habilidad: HB_MONTAR,
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
                habilidad: HB_ESTILO,
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
                habilidad: HB_TASACION,
                bono: 30
            }
        ]
    }],
    [
        {
            nombre: CLASE_BAJA,
            rango: 30,
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
                    habilidad: HB_TREPAR,
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
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
                    bono: 10
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 75,
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
                    habilidad: HB_TREPAR,
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
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
                    bono: 10
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 100,
            dinero: new Dinero(40,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
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
                    habilidad: HB_ESTILO,
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
                    habilidad: HB_TASACION,
                    bono: 30
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_ESTIGIA,
    function() {
        var azar = d100();

        if (azar <= 96) {
            return ETNIA_TAYAHAR  ;
        } else if (azar <= 99) {
            return   ETNIA_ASHER;
        } else  {
            var azar2 = d(7);

            switch (azar2) {
                case 1:
                    return ETNIA_KWA;
                case 2:
                    return ETNIA_RYUAN;
                case 3:
                    return ETNIA_ZINNER ;
                case 4:
                    return ETNIA_VILDIAN;
                case 5:
                    return ETNIA_DAEVAR ;
                case 6:
                    return ETNIA_AION ;
                case 7:
                default:
                    return ETNIA_NORNE;
            }
        }
    },
    [IDIOMA_JASHU],
    ['Akhom','Anpu','Funsani','Hamadi','Heru','Issa','Kafele','Kemnebi','Khenti','Madu','Menes','Mhotep','Nizam','Rameses','Seth','Tau','Wakhakwi','Zahur'],
    ['Asenath','Eshe','Halima','Kanika','Layla','Meshkenet','Naeemah','Nafretiti','Nebt-Het','Ramla','Shani','Tahirah','Theoris','Walidah','Zhara'],
    ['Akhom','Anpu','Funsani','Hamadi','Heru','Issa','Kafele','Kemnebi','Khenti','Madu','Menes','Mhotep','Nizam','Rameses','Seth','Tau','Wakhakwi','Zahur'],
    ['La Necrópolis','Salones de los Reyes','Harekratia','Haji','Kabalaika','Al Kairr','Enuma Jannah','Ikwah'],
    0,
    [],
    [
        {
            nombre: CLASE_BAJA,
            rango: 30,
            dinero: new Dinero(0,0,3),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
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
                    habilidad: HB_TASACION,
                    bono: 10
                },
                {
                    habilidad: HB_ARTE,
                    bono: 10
                },
                {
                    habilidad: HB_FORJA,
                    bono: 30
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
                    habilidad: HB_ADVERTIR,
                    bono: 30
                },
                {
                    habilidad: HB_RASTREAR,
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
                    habilidad: HB_TASACION,
                    bono: 10
                },
                {
                    habilidad: HB_ARTE,
                    bono: 10
                },
                {
                    habilidad: HB_FORJA,
                    bono: 30
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 75,
            dinero: new Dinero(15,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 30
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 10
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
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
                    bono: 30
                },
                {
                    habilidad: HB_ARTE,
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_BUROCRATA,
            rango: 90,
            dinero: new Dinero(50,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 30
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 10
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
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
                    bono: 30
                },
                {
                    habilidad: HB_ARTE,
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(90,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 30
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 10
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
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
                    bono: 30
                },
                {
                    habilidad: HB_ARTE,
                    bono: 10
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_SALAZAR,
    function() {
        var azar = d100();

        if (azar <= 99) {
            return ETNIA_TAYAHAR;
        } else  {
            var azar2 = d(8);

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
                    return ETNIA_ASHER ;
                case 7:
                    return ETNIA_ZINNER ;
                case 8:
                default:
                    return ETNIA_NORNE;
            }
        }
    },
    [IDIOMA_JASHU],
    ['Agerzam','Aksim','Amaynu','Asafar','Aznag','Gaya','Idder','Masinissa','Maysar','Meddur','Saden','Tacfin','Udad','Ugwistan','Usem','Winitran','Ziri'],
    ['Bahac','Damya','Ijju','Illi','Kella','Lemta','Lunja','Menna','Siniman','Taderfit','Takensust','Tifawt','Tiwul','Tlayt','Tufitri','Tzeddig','Ultafa'],
    ['Abrika','Aknin','Assouline','Demsiri','Djaout','Hamuy','Hasnaoui','Mammeri','Massi','Megullet','Ohana','Qouaknin','Tanzir','Tabaamrant'],
    ['Fuerte de Nakhti','Agihwan','Oasis de las Aves','Oasis de Mahjrabi'],
    0,
    [],
    [
        {
            nombre: CLASE_NOMADA_POBRE,
            rango: 25,
            dinero: new Dinero(0,0,2),
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
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_BUSCAR,
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
                    habilidad: HB_OCULTARSE,
                    bono: 10
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOMADA_MEDIO,
            rango: 80,
            dinero: new Dinero(0,20,0),
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
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_BUSCAR,
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
                    habilidad: HB_OCULTARSE,
                    bono: 10
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_NOMADA_RICO,
            rango: 100,
            dinero: new Dinero(10,0,0),
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
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_BUSCAR,
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
                    habilidad: HB_OCULTARSE,
                    bono: 10
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

